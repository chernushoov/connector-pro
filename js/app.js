// Connector Pro PWA - Main App

const App = {
    // State
    state: {
        isAuthenticated: false,
        phone: '',
        debugCode: '',
        role: null, // 'worker' or 'employer'
        hasWorkerProfile: false,
        hasEmployerProfile: false,
        workerProfile: {},
        employerProfile: {},
        shifts: [],
        applications: [],
        tasks: [],
        currentFilter: 'all'
    },

    // Demo shifts data
    demoShifts: [
        {
            id: '1',
            title: 'Разнорабочий на стройку',
            titleHe: 'עבודות כלליות באתר בנייה',
            titleEn: 'General worker - construction',
            titleAr: 'عامل بناء عام',
            employer: 'BuildLine',
            employerPhone: '+972501234567',
            city: 'Тель-Авив',
            cityHe: 'תל אביב',
            cityEn: 'Tel Aviv',
            cityAr: 'تل أبيب',
            rate: 60,
            date: new Date().toISOString().split('T')[0],
            startTime: '07:00',
            endTime: '16:00',
            slots: 3,
            filled: 1,
            requirements: 'Физическая сила',
            isInstant: true,
            acceptsTeams: true
        },
        {
            id: '2',
            title: 'Уборка после ремонта',
            titleHe: 'ניקיון אחרי שיפוץ',
            titleEn: 'Post-renovation cleaning',
            titleAr: 'تنظيف بعد التجديد',
            employer: 'CleanPro',
            employerPhone: '+972502345678',
            city: 'Гиватаим',
            cityHe: 'גבעתיים',
            cityEn: 'Givatayim',
            cityAr: 'جفعتايم',
            rate: 55,
            date: new Date(Date.now() + 86400000).toISOString().split('T')[0],
            startTime: '09:00',
            endTime: '17:00',
            slots: 2,
            filled: 0,
            requirements: 'Опыт уборки',
            isInstant: false,
            acceptsTeams: false
        },
        {
            id: '3',
            title: 'Грузчики: переезд офиса',
            titleHe: 'סבלים: מעבר משרד',
            titleEn: 'Movers: office relocation',
            titleAr: 'نقل مكتب',
            employer: 'MoveFast',
            employerPhone: '+972503456789',
            city: 'Рамат-Ган',
            cityHe: 'רמת גן',
            cityEn: 'Ramat Gan',
            cityAr: 'رمات غان',
            rate: 65,
            date: new Date().toISOString().split('T')[0],
            startTime: '08:00',
            endTime: '18:00',
            slots: 6,
            filled: 4,
            requirements: 'Выносливость',
            isInstant: true,
            acceptsTeams: true
        }
    ],

    // Initialize
    init() {
        L10n.init();
        this.loadState();
        this.state.shifts = [...this.demoShifts];
        this.navigate();
    },

    // State management
    loadState() {
        const saved = localStorage.getItem('appState');
        if (saved) {
            const parsed = JSON.parse(saved);
            this.state = { ...this.state, ...parsed };
        }
    },

    saveState() {
        localStorage.setItem('appState', JSON.stringify(this.state));
    },

    // Navigation
    navigate() {
        this.hideAllScreens();

        if (!this.state.isAuthenticated) {
            this.showScreen('auth');
        } else if (!this.state.role) {
            this.showScreen('role');
        } else if (this.state.role === 'worker' && !this.state.hasWorkerProfile) {
            this.showScreen('worker-form');
        } else if (this.state.role === 'employer' && !this.state.hasEmployerProfile) {
            this.showScreen('employer-form');
        } else if (this.state.role === 'worker') {
            this.showScreen('worker-app');
            this.renderShifts();
        } else if (this.state.role === 'employer') {
            this.showScreen('employer-app');
            this.renderEmployerDashboard();
        }
    },

    hideAllScreens() {
        document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    },

    showScreen(name) {
        const screen = document.getElementById(`screen-${name}`);
        if (screen) {
            screen.classList.add('active');
        }
    },

    // Auth
    sendSMS() {
        const phone = document.getElementById('phone-input').value.trim();
        if (!phone || phone.length < 9) {
            this.showError(L10n.t('auth.error.phone'));
            return;
        }

        this.state.phone = phone;
        this.state.debugCode = Math.floor(100000 + Math.random() * 900000).toString();

        document.getElementById('auth-step-phone').classList.remove('active');
        document.getElementById('auth-step-code').classList.add('active');
        document.getElementById('debug-code').textContent = `DEBUG: ${this.state.debugCode}`;
        document.getElementById('auth-error').textContent = '';
    },

    verifySMS() {
        const code = document.getElementById('code-input').value.trim();
        if (code !== this.state.debugCode) {
            this.showError(L10n.t('auth.error.code'));
            return;
        }

        this.state.isAuthenticated = true;
        this.saveState();
        this.navigate();
    },

    backToPhone() {
        document.getElementById('auth-step-code').classList.remove('active');
        document.getElementById('auth-step-phone').classList.add('active');
        document.getElementById('auth-error').textContent = '';
    },

    showError(msg) {
        document.getElementById('auth-error').textContent = msg;
    },

    // Language
    setLang(lang) {
        L10n.setLang(lang);
        this.renderShifts();
        this.renderTasks();
        this.renderProfile();
    },

    // Role
    selectRole(role) {
        this.state.role = role;
        this.saveState();
        this.navigate();
    },

    goToRole() {
        this.state.role = null;
        this.saveState();
        this.navigate();
    },

    logout() {
        this.state = {
            isAuthenticated: false,
            phone: '',
            debugCode: '',
            role: null,
            hasWorkerProfile: false,
            hasEmployerProfile: false,
            workerProfile: {},
            employerProfile: {},
            shifts: [...this.demoShifts],
            applications: [],
            tasks: [],
            currentFilter: 'all'
        };
        localStorage.removeItem('appState');
        this.navigate();
    },

    // Worker Profile
    saveWorkerProfile(e) {
        e.preventDefault();

        this.state.workerProfile = {
            name: document.getElementById('worker-name').value,
            phone: document.getElementById('worker-phone').value || this.state.phone,
            age: document.getElementById('worker-age').value,
            city: document.getElementById('worker-city').value,
            spec: document.getElementById('worker-spec').value,
            exp: document.getElementById('worker-exp').value,
            rate: document.getElementById('worker-rate').value,
            hasCar: document.getElementById('worker-car').checked,
            about: document.getElementById('worker-about').value,
            completedShifts: 0,
            totalHours: 0,
            rating: 4.8
        };

        this.state.hasWorkerProfile = true;
        this.saveState();
        this.navigate();
    },

    // Employer Profile
    saveEmployerProfile(e) {
        e.preventDefault();

        this.state.employerProfile = {
            company: document.getElementById('employer-company').value,
            name: document.getElementById('employer-name').value,
            phone: document.getElementById('employer-phone').value || this.state.phone,
            city: document.getElementById('employer-city').value,
            industry: document.getElementById('employer-industry').value
        };

        this.state.hasEmployerProfile = true;
        this.saveState();
        this.navigate();
    },

    // Shifts
    renderShifts() {
        const container = document.getElementById('shifts-list');
        if (!container) return;

        const shifts = this.getFilteredShifts();

        if (shifts.length === 0) {
            container.innerHTML = `
                <div class="empty-state">
                    <div class="empty-state-icon">📋</div>
                    <h3>${L10n.t('empty.shifts')}</h3>
                    <p>${L10n.t('empty.shifts.sub')}</p>
                </div>
            `;
            return;
        }

        container.innerHTML = shifts.map(shift => this.renderShiftCard(shift)).join('');
    },

    renderShiftCard(shift) {
        const title = this.getLocalizedField(shift, 'title');
        const city = this.getLocalizedField(shift, 'city');
        const applied = this.state.applications.includes(shift.id);

        return `
            <div class="shift-card" onclick="App.openShiftDetail('${shift.id}')">
                <div class="shift-header">
                    <div>
                        <div class="shift-title">${title}</div>
                        <div class="shift-employer">${shift.employer}</div>
                    </div>
                    <div class="shift-rate">₪${shift.rate}/h</div>
                </div>
                <div class="shift-meta">
                    <span>📍 ${city}</span>
                    <span>📅 ${this.formatDate(shift.date)}</span>
                    <span>⏰ ${shift.startTime}-${shift.endTime}</span>
                </div>
                <div class="shift-badges">
                    ${shift.isInstant ? '<span class="badge badge-instant">Instant</span>' : ''}
                    ${shift.acceptsTeams ? '<span class="badge badge-team">Team</span>' : ''}
                    ${applied ? `<span class="badge badge-applied">${L10n.t('shift.sent')}</span>` : ''}
                </div>
            </div>
        `;
    },

    getLocalizedField(obj, field) {
        const lang = L10n.currentLang;
        const langSuffix = lang === 'ru' ? '' : lang.charAt(0).toUpperCase() + lang.slice(1);
        return obj[field + langSuffix] || obj[field];
    },

    formatDate(dateStr) {
        const date = new Date(dateStr);
        const today = new Date();
        const tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);

        if (date.toDateString() === today.toDateString()) {
            return L10n.t('filters.today');
        } else if (date.toDateString() === tomorrow.toDateString()) {
            return L10n.t('filters.tomorrow');
        }
        return date.toLocaleDateString();
    },

    getFilteredShifts() {
        const search = document.getElementById('search-input')?.value?.toLowerCase() || '';
        const today = new Date().toISOString().split('T')[0];
        const tomorrow = new Date(Date.now() + 86400000).toISOString().split('T')[0];

        return this.state.shifts.filter(shift => {
            // Search filter
            if (search) {
                const title = this.getLocalizedField(shift, 'title').toLowerCase();
                const city = this.getLocalizedField(shift, 'city').toLowerCase();
                if (!title.includes(search) && !city.includes(search) && !shift.employer.toLowerCase().includes(search)) {
                    return false;
                }
            }

            // Date filter
            switch (this.state.currentFilter) {
                case 'today':
                    return shift.date === today;
                case 'tomorrow':
                    return shift.date === tomorrow;
                case 'instant':
                    return shift.isInstant;
                default:
                    return true;
            }
        });
    },

    setFilter(filter) {
        this.state.currentFilter = filter;
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.filter === filter);
        });
        this.renderShifts();
    },

    filterShifts() {
        this.renderShifts();
    },

    // Shift Detail
    openShiftDetail(id) {
        const shift = this.state.shifts.find(s => s.id === id);
        if (!shift) return;

        const title = this.getLocalizedField(shift, 'title');
        const city = this.getLocalizedField(shift, 'city');
        const applied = this.state.applications.includes(shift.id);

        document.getElementById('shift-detail-title').textContent = title;
        document.getElementById('shift-detail-content').innerHTML = `
            <div class="shift-detail-info">
                <div class="shift-detail-row">
                    <span class="shift-detail-label">${L10n.t('shift.city')}</span>
                    <span class="shift-detail-value">${city}</span>
                </div>
                <div class="shift-detail-row">
                    <span class="shift-detail-label">${L10n.t('shift.date')}</span>
                    <span class="shift-detail-value">${this.formatDate(shift.date)}</span>
                </div>
                <div class="shift-detail-row">
                    <span class="shift-detail-label">${L10n.t('shift.time')}</span>
                    <span class="shift-detail-value">${shift.startTime} - ${shift.endTime}</span>
                </div>
                <div class="shift-detail-row">
                    <span class="shift-detail-label">${L10n.t('shift.rate')}</span>
                    <span class="shift-detail-value">₪${shift.rate}/h</span>
                </div>
                <div class="shift-detail-row">
                    <span class="shift-detail-label">${L10n.t('shift.slots')}</span>
                    <span class="shift-detail-value">${shift.filled}/${shift.slots}</span>
                </div>
                <div class="shift-detail-row">
                    <span class="shift-detail-label">${L10n.t('shift.requirements')}</span>
                    <span class="shift-detail-value">${shift.requirements}</span>
                </div>
            </div>

            <div class="shift-actions">
                <button class="btn ${applied ? 'btn-secondary' : 'btn-primary'}" onclick="App.applyToShift('${shift.id}')" ${applied ? 'disabled' : ''}>
                    ${applied ? L10n.t('shift.sent') : L10n.t('shift.apply')}
                </button>
                <button class="btn btn-whatsapp" onclick="App.contactWhatsApp('${shift.employerPhone}', '${title}')">
                    💬 ${L10n.t('contact.whatsapp')}
                </button>
                <button class="btn btn-call" onclick="App.contactCall('${shift.employerPhone}')">
                    📞 ${L10n.t('contact.call')}
                </button>
            </div>
        `;

        this.openModal('shift');
    },

    applyToShift(id) {
        if (!this.state.applications.includes(id)) {
            this.state.applications.push(id);

            const shift = this.state.shifts.find(s => s.id === id);
            if (shift) {
                this.state.tasks.push({
                    id: Date.now().toString(),
                    shiftId: id,
                    shiftTitle: this.getLocalizedField(shift, 'title'),
                    employer: shift.employer,
                    status: 'applied',
                    date: shift.date
                });
            }

            this.saveState();
            this.closeModal('shift');
            this.renderShifts();
            this.renderTasks();
        }
    },

    // Contact
    contactWhatsApp(phone, shiftTitle) {
        const msg = encodeURIComponent(`${L10n.t('contact.msg.template')} ${shiftTitle}`);
        const cleanPhone = phone.replace(/[^0-9+]/g, '');
        window.open(`https://wa.me/${cleanPhone}?text=${msg}`, '_blank');
    },

    contactCall(phone) {
        window.location.href = `tel:${phone}`;
    },

    // Tasks
    renderTasks() {
        const container = document.getElementById('tasks-list');
        if (!container) return;

        if (this.state.tasks.length === 0) {
            container.innerHTML = `
                <div class="empty-state">
                    <div class="empty-state-icon">✓</div>
                    <h3>${L10n.t('taskflow.empty')}</h3>
                    <p>${L10n.t('taskflow.empty.sub')}</p>
                </div>
            `;
            return;
        }

        container.innerHTML = this.state.tasks.map(task => `
            <div class="task-card">
                <div class="task-header">
                    <div>
                        <div class="shift-title">${task.shiftTitle}</div>
                        <div class="shift-employer">${task.employer}</div>
                    </div>
                    <span class="task-status status-${task.status}">${L10n.t('taskflow.' + task.status)}</span>
                </div>
                <div class="shift-meta">
                    <span>📅 ${this.formatDate(task.date)}</span>
                </div>
            </div>
        `).join('');
    },

    // Profile
    renderProfile() {
        const container = document.getElementById('profile-content');
        if (!container) return;

        const p = this.state.workerProfile;
        if (!p.name) return;

        container.innerHTML = `
            <div class="profile-header">
                <div class="profile-avatar">${p.name.charAt(0).toUpperCase()}</div>
                <div>
                    <div class="profile-name">${p.name}</div>
                    <div class="profile-spec">${p.spec}</div>
                </div>
            </div>

            <div class="profile-stats">
                <div class="stat">
                    <div class="stat-value">${p.completedShifts}</div>
                    <div class="stat-label">${L10n.t('profile.stats.completed')}</div>
                </div>
                <div class="stat">
                    <div class="stat-value">${p.totalHours}</div>
                    <div class="stat-label">${L10n.t('profile.stats.hours')}</div>
                </div>
                <div class="stat">
                    <div class="stat-value">⭐ ${p.rating}</div>
                    <div class="stat-label">${L10n.t('profile.stats.rating')}</div>
                </div>
            </div>

            <div class="profile-section">
                <h4>${L10n.t('profile.worker.city')}</h4>
                <p>${p.city}</p>
            </div>

            ${p.rate ? `
            <div class="profile-section">
                <h4>${L10n.t('profile.worker.rate')}</h4>
                <p>₪${p.rate}/h</p>
            </div>
            ` : ''}

            ${p.about ? `
            <div class="profile-section">
                <h4>${L10n.t('profile.worker.about')}</h4>
                <p>${p.about}</p>
            </div>
            ` : ''}

            <button class="btn btn-secondary btn-block mt-16" onclick="App.logout()">
                ${L10n.t('logout')}
            </button>
        `;
    },

    editProfile() {
        // TODO: Open edit profile modal
        alert('Edit profile - coming soon');
    },

    // Tabs
    switchTab(tab) {
        document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        document.querySelector(`[data-tab="${tab}"]`)?.classList.add('active');

        this.hideAllScreens();

        switch(tab) {
            case 'shifts':
                this.showScreen('worker-app');
                this.renderShifts();
                break;
            case 'tasks':
                this.showScreen('tasks');
                this.renderTasks();
                break;
            case 'profile':
                this.showScreen('profile');
                this.renderProfile();
                break;
        }
    },

    switchEmployerTab(tab) {
        document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        document.querySelector(`[data-tab="${tab}"]`)?.classList.add('active');

        if (tab === 'dashboard') {
            this.renderEmployerDashboard();
        }
    },

    // Employer Dashboard
    renderEmployerDashboard() {
        const shiftsContainer = document.getElementById('employer-shifts');
        const appsContainer = document.getElementById('applications-list');

        // Render employer's shifts
        const myShifts = this.state.shifts.filter(s => s.employerId === 'me');
        if (shiftsContainer) {
            if (myShifts.length === 0) {
                shiftsContainer.innerHTML = '<p class="text-secondary">Создайте первую смену</p>';
            } else {
                shiftsContainer.innerHTML = myShifts.map(shift => this.renderShiftCard(shift)).join('');
            }
        }

        // Render applications
        if (appsContainer) {
            const pendingApps = this.state.tasks.filter(t => t.status === 'applied');
            if (pendingApps.length === 0) {
                appsContainer.innerHTML = `<p class="text-secondary">${L10n.t('dashboard.applications.empty')}</p>`;
            } else {
                appsContainer.innerHTML = pendingApps.map(app => `
                    <div class="application-item">
                        <div class="application-info">
                            <h4>${this.state.workerProfile.name || 'Worker'}</h4>
                            <p>${app.shiftTitle}</p>
                        </div>
                        <div class="application-actions">
                            <button class="btn-approve" onclick="App.approveApplication('${app.id}')">${L10n.t('dashboard.applications.approve')}</button>
                            <button class="btn-reject" onclick="App.rejectApplication('${app.id}')">${L10n.t('dashboard.applications.reject')}</button>
                        </div>
                    </div>
                `).join('');
            }
        }
    },

    approveApplication(id) {
        const task = this.state.tasks.find(t => t.id === id);
        if (task) {
            task.status = 'approved';
            this.saveState();
            this.renderEmployerDashboard();
        }
    },

    rejectApplication(id) {
        const task = this.state.tasks.find(t => t.id === id);
        if (task) {
            task.status = 'rejected';
            this.saveState();
            this.renderEmployerDashboard();
        }
    },

    // Create Shift
    showCreateShift() {
        document.getElementById('shift-date').valueAsDate = new Date();
        this.openModal('create-shift');
    },

    createShift(e) {
        e.preventDefault();

        const newShift = {
            id: Date.now().toString(),
            title: document.getElementById('shift-title').value,
            employer: this.state.employerProfile.company,
            employerPhone: this.state.employerProfile.phone,
            employerId: 'me',
            city: document.getElementById('shift-city').value,
            rate: parseInt(document.getElementById('shift-rate').value),
            date: document.getElementById('shift-date').value,
            startTime: document.getElementById('shift-start').value,
            endTime: document.getElementById('shift-end').value,
            slots: parseInt(document.getElementById('shift-slots').value),
            filled: 0,
            requirements: document.getElementById('shift-requirements').value,
            isInstant: document.getElementById('shift-instant').checked,
            acceptsTeams: false
        };

        this.state.shifts.unshift(newShift);
        this.saveState();
        this.closeModal('create-shift');
        this.renderEmployerDashboard();

        // Show success
        alert(L10n.t('create.shift.success'));
    },

    // Modals
    openModal(name) {
        document.getElementById(`modal-${name}`)?.classList.add('active');
    },

    closeModal(name) {
        document.getElementById(`modal-${name}`)?.classList.remove('active');
    },

    showGuide() {
        this.openModal('guide');
    }
};

// Initialize on load
document.addEventListener('DOMContentLoaded', () => App.init());

// Close modal on backdrop click
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        e.target.classList.remove('active');
    }
});
