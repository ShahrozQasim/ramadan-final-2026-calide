// RAMADAN 2026 - ENHANCED VERSION
// Features: Daily Facts, Notifications, Share Buttons

const CONFIG = {
    city: 'Karachi',
    country: 'Pakistan',
    ramadanStartDate: new Date('2026-02-18T00:00:00+05:00')
};

const TIMINGS = [
    {day:1,hDay:1,hMonth:'Ramadan',gDay:18,gMonth:'February',gYear:2026,sehri:'05:48',iftar:'06:28'},
    {day:2,hDay:2,hMonth:'Ramadan',gDay:19,gMonth:'February',gYear:2026,sehri:'05:47',iftar:'06:29'},
    {day:3,hDay:3,hMonth:'Ramadan',gDay:20,gMonth:'February',gYear:2026,sehri:'05:46',iftar:'06:29'},
    {day:4,hDay:4,hMonth:'Ramadan',gDay:21,gMonth:'February',gYear:2026,sehri:'05:45',iftar:'06:30'},
    {day:5,hDay:5,hMonth:'Ramadan',gDay:22,gMonth:'February',gYear:2026,sehri:'05:45',iftar:'06:30'},
    {day:6,hDay:6,hMonth:'Ramadan',gDay:23,gMonth:'February',gYear:2026,sehri:'05:44',iftar:'06:31'},
    {day:7,hDay:7,hMonth:'Ramadan',gDay:24,gMonth:'February',gYear:2026,sehri:'05:43',iftar:'06:31'},
    {day:8,hDay:8,hMonth:'Ramadan',gDay:25,gMonth:'February',gYear:2026,sehri:'05:42',iftar:'06:32'},
    {day:9,hDay:9,hMonth:'Ramadan',gDay:26,gMonth:'February',gYear:2026,sehri:'05:41',iftar:'06:32'},
    {day:10,hDay:10,hMonth:'Ramadan',gDay:27,gMonth:'February',gYear:2026,sehri:'05:40',iftar:'06:33'},
    {day:11,hDay:11,hMonth:'Ramadan',gDay:28,gMonth:'February',gYear:2026,sehri:'05:39',iftar:'06:33'},
    {day:12,hDay:12,hMonth:'Ramadan',gDay:1,gMonth:'March',gYear:2026,sehri:'05:38',iftar:'06:34'},
    {day:13,hDay:13,hMonth:'Ramadan',gDay:2,gMonth:'March',gYear:2026,sehri:'05:37',iftar:'06:34'},
    {day:14,hDay:14,hMonth:'Ramadan',gDay:3,gMonth:'March',gYear:2026,sehri:'05:36',iftar:'06:35'},
    {day:15,hDay:15,hMonth:'Ramadan',gDay:4,gMonth:'March',gYear:2026,sehri:'05:35',iftar:'06:35'},
    {day:16,hDay:16,hMonth:'Ramadan',gDay:5,gMonth:'March',gYear:2026,sehri:'05:34',iftar:'06:36'},
    {day:17,hDay:17,hMonth:'Ramadan',gDay:6,gMonth:'March',gYear:2026,sehri:'05:33',iftar:'06:36'},
    {day:18,hDay:18,hMonth:'Ramadan',gDay:7,gMonth:'March',gYear:2026,sehri:'05:32',iftar:'06:37'},
    {day:19,hDay:19,hMonth:'Ramadan',gDay:8,gMonth:'March',gYear:2026,sehri:'05:31',iftar:'06:37'},
    {day:20,hDay:20,hMonth:'Ramadan',gDay:9,gMonth:'March',gYear:2026,sehri:'05:30',iftar:'06:38'},
    {day:21,hDay:21,hMonth:'Ramadan',gDay:10,gMonth:'March',gYear:2026,sehri:'05:29',iftar:'06:38'},
    {day:22,hDay:22,hMonth:'Ramadan',gDay:11,gMonth:'March',gYear:2026,sehri:'05:28',iftar:'06:39'},
    {day:23,hDay:23,hMonth:'Ramadan',gDay:12,gMonth:'March',gYear:2026,sehri:'05:27',iftar:'06:39'},
    {day:24,hDay:24,hMonth:'Ramadan',gDay:13,gMonth:'March',gYear:2026,sehri:'05:26',iftar:'06:40'},
    {day:25,hDay:25,hMonth:'Ramadan',gDay:14,gMonth:'March',gYear:2026,sehri:'05:25',iftar:'06:40'},
    {day:26,hDay:26,hMonth:'Ramadan',gDay:15,gMonth:'March',gYear:2026,sehri:'05:24',iftar:'06:41'},
    {day:27,hDay:27,hMonth:'Ramadan',gDay:16,gMonth:'March',gYear:2026,sehri:'05:23',iftar:'06:41'},
    {day:28,hDay:28,hMonth:'Ramadan',gDay:17,gMonth:'March',gYear:2026,sehri:'05:22',iftar:'06:42'},
    {day:29,hDay:29,hMonth:'Ramadan',gDay:18,gMonth:'March',gYear:2026,sehri:'05:21',iftar:'06:42'},
    {day:30,hDay:30,hMonth:'Ramadan',gDay:19,gMonth:'March',gYear:2026,sehri:'05:20',iftar:'06:43'}
];

// DAILY RAMADAN FACTS (30 facts - one for each day)
const RAMADAN_FACTS = [
    "Fasting teaches patience, self-discipline, and gratitude for Allah's blessings.",
    "Ramadan is the month when the Quran was first revealed to Prophet Muhammad ﷺ.",
    "The reward for every good deed is multiplied during Ramadan.",
    "Laylatul Qadr (Night of Power) is better than a thousand months of worship.",
    "Fasting is not just about abstaining from food, but also from negative thoughts and actions.",
    "The gates of Paradise are opened and the gates of Hell are closed during Ramadan.",
    "Sahur (pre-dawn meal) is a blessed meal - the Prophet ﷺ never missed it.",
    "Breaking your fast with dates follows the Sunnah of Prophet Muhammad ﷺ.",
    "Giving charity during Ramadan has immense rewards and blessings.",
    "Taraweeh prayers are a beautiful way to complete the Quran during Ramadan.",
    "Fasting helps develop empathy for those less fortunate.",
    "The Prophet ﷺ said: 'Whoever fasts Ramadan with faith and seeking reward, their past sins are forgiven.'",
    "I'tikaf in the last 10 days is a powerful spiritual retreat.",
    "Reading Quran daily during Ramadan brings peace to the heart.",
    "Forgiveness and mercy from Allah are abundant in this blessed month.",
    "Fasting purifies the soul and brings you closer to Allah.",
    "Every sincere dua made during Ramadan has a greater chance of acceptance.",
    "The fast is a shield from wrongdoing and disobedience.",
    "Ramadan teaches us to control our desires and strengthen our willpower.",
    "Sharing iftar with others multiplies the blessings of your fast.",
    "The last 10 nights of Ramadan are the most sacred - seek Laylatul Qadr.",
    "Fasting brings physical, mental, and spiritual benefits.",
    "Making dua before iftar is a moment when Allah accepts prayers.",
    "Ramadan is a month of community, unity, and brotherhood.",
    "Even a smile during Ramadan is considered charity.",
    "The Prophet ﷺ was most generous during Ramadan.",
    "Completing the Quran during Ramadan brings immense spiritual reward.",
    "Fasting develops consciousness of Allah (Taqwa) in daily life.",
    "Ramadan is a time to break bad habits and build good ones.",
    "The blessings of Ramadan extend beyond the month if practiced sincerely."
];

let currentFactIndex = 0;
let countdownInterval = null;
let notificationCheckInterval = null;

// ========================================
// DAILY FACT FEATURE
// ========================================
function showDailyFact() {
    const factTitle = document.getElementById('factTitle');
    const factContent = document.getElementById('factContent');
    
    // Get day number (1-30) or use random if before/after Ramadan
    const dayNum = getCurrentRamadanDay();
    currentFactIndex = (dayNum > 0 && dayNum <= 30) ? (dayNum - 1) : Math.floor(Math.random() * RAMADAN_FACTS.length);
    
    if (factTitle) factTitle.textContent = `Ramadan Wisdom #${currentFactIndex + 1}`;
    if (factContent) {
        factContent.textContent = RAMADAN_FACTS[currentFactIndex];
        factContent.style.animation = 'fadeIn 0.5s ease-in';
    }
}

function showNextFact() {
    currentFactIndex = (currentFactIndex + 1) % RAMADAN_FACTS.length;
    const factTitle = document.getElementById('factTitle');
    const factContent = document.getElementById('factContent');
    
    if (factTitle) factTitle.textContent = `Ramadan Wisdom #${currentFactIndex + 1}`;
    if (factContent) {
        factContent.style.animation = 'none';
        setTimeout(() => {
            factContent.textContent = RAMADAN_FACTS[currentFactIndex];
            factContent.style.animation = 'fadeIn 0.5s ease-in';
        }, 50);
    }
}

// ========================================
// NOTIFICATION FEATURE
// ========================================
async function requestNotificationPermission() {
    if (!('Notification' in window)) {
        alert('Your browser does not support notifications');
        return false;
    }
    
    if (Notification.permission === 'granted') {
        return true;
    }
    
    if (Notification.permission !== 'denied') {
        const permission = await Notification.requestPermission();
        return permission === 'granted';
    }
    
    return false;
}

function showNotification(title, body) {
    if (Notification.permission === 'granted') {
        new Notification(title, {
            body: body,
            icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">🌙</text></svg>',
            badge: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">🌙</text></svg>',
            requireInteraction: true
        });
    }
}

function checkAndSendNotifications() {
    const sehriEnabled = localStorage.getItem('sehriNotif') === 'true';
    const iftarEnabled = localStorage.getItem('iftarNotif') === 'true';
    
    if (!sehriEnabled && !iftarEnabled) return;
    
    const dayNum = getCurrentRamadanDay();
    if (dayNum <= 0 || dayNum > 30) return;
    
    const todayTiming = TIMINGS[dayNum - 1];
    if (!todayTiming) return;
    
    const now = new Date();
    const [sehriH, sehriM] = todayTiming.sehri.split(':').map(Number);
    const [iftarH, iftarM] = todayTiming.iftar.split(':').map(Number);
    
    const sehriTime = new Date(now);
    sehriTime.setHours(sehriH, sehriM, 0, 0);
    
    const iftarTime = new Date(now);
    iftarTime.setHours(iftarH, iftarM, 0, 0);
    
    const currentHour = now.getHours();
    const currentMin = now.getMinutes();
    
    // Sehri notification - 10 minutes before
    if (sehriEnabled) {
        const sehriNotifTime = new Date(sehriTime);
        sehriNotifTime.setMinutes(sehriNotifTime.getMinutes() - 10);
        
        if (currentHour === sehriNotifTime.getHours() && currentMin === sehriNotifTime.getMinutes()) {
            showNotification(
                '🌙 Sehri Reminder',
                `Only 10 minutes left! Sehri ends at ${formatTime(todayTiming.sehri)}`
            );
        }
    }
    
    // Iftar notification - 5 minutes before
    if (iftarEnabled) {
        const iftarNotifTime = new Date(iftarTime);
        iftarNotifTime.setMinutes(iftarNotifTime.getMinutes() - 5);
        
        if (currentHour === iftarNotifTime.getHours() && currentMin === iftarNotifTime.getMinutes()) {
            showNotification(
                '🌅 Iftar Time Soon!',
                `5 minutes until Iftar at ${formatTime(todayTiming.iftar)}. Prepare to break your fast!`
            );
        }
    }
}

function updateNotificationStatus() {
    const statusEl = document.getElementById('notifStatus');
    if (!statusEl) return;
    
    if (Notification.permission === 'granted') {
        const sehriEnabled = localStorage.getItem('sehriNotif') === 'true';
        const iftarEnabled = localStorage.getItem('iftarNotif') === 'true';
        
        if (sehriEnabled || iftarEnabled) {
            statusEl.textContent = '✅ Notifications enabled!';
            statusEl.style.color = '#00ff88';
        } else {
            statusEl.textContent = '⚠️ Enable at least one reminder above';
            statusEl.style.color = '#ffed4e';
        }
    } else if (Notification.permission === 'denied') {
        statusEl.textContent = '❌ Notifications blocked. Enable in browser settings.';
        statusEl.style.color = '#ff6b6b';
    } else {
        statusEl.textContent = '🔔 Click "Enable Notifications" to get started';
        statusEl.style.color = '#b0b0b0';
    }
}

// ========================================
// SHARE FEATURE
// ========================================
function shareWhatsApp() {
    const dayNum = getCurrentRamadanDay();
    let message = '';
    
    if (dayNum > 0 && dayNum <= 30) {
        const timing = TIMINGS[dayNum - 1];
        message = `🌙 *Ramadan Day ${dayNum}*
        
📅 ${timing.gDay} ${timing.gMonth} ${timing.gYear}
🕌 ${timing.hDay} ${timing.hMonth} 1447 AH

⏰ *Today's Timings:*
🌙 Sehri: ${formatTime(timing.sehri)}
🌅 Iftar: ${formatTime(timing.iftar)}

📍 Karachi, Pakistan
🌐 Created by 728

Ramadan Mubarak! 🤲`;
    } else {
        message = `🌙 *Ramadan 2026 Timings*
        
📅 Starts: Wednesday, 18 February 2026
📍 Karachi, Pakistan

Get complete Ramadan timetable:
https://ramadan-final-2026-calide.vercel.app

Created by 728 ❤️`;
    }
    
    const url = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

function downloadShareCard() {
    const dayNum = getCurrentRamadanDay();
    if (dayNum <= 0 || dayNum > 30) {
        alert('Share cards are available during Ramadan!');
        return;
    }
    
    const timing = TIMINGS[dayNum - 1];
    const canvas = document.getElementById('shareCanvas');
    const ctx = canvas.getContext('2d');
    
    // Set canvas size (Instagram story size)
    canvas.width = 1080;
    canvas.height = 1920;
    
    // Background gradient
    const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    gradient.addColorStop(0, '#0a0e27');
    gradient.addColorStop(0.5, '#141b3d');
    gradient.addColorStop(1, '#1a237e');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Add decorative elements
    ctx.fillStyle = 'rgba(255, 215, 0, 0.1)';
    ctx.beginPath();
    ctx.arc(900, 200, 300, 0, Math.PI * 2);
    ctx.fill();
    
    // Title
    ctx.fillStyle = '#ffd700';
    ctx.font = 'bold 80px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('رمضان مبارک', canvas.width / 2, 250);
    
    ctx.fillStyle = '#f0f0f0';
    ctx.font = '50px Arial';
    ctx.fillText('Ramadan Mubarak 2026', canvas.width / 2, 350);
    
    // Day number
    ctx.fillStyle = '#ffd700';
    ctx.font = 'bold 120px Arial';
    ctx.fillText(`Day ${dayNum}`, canvas.width / 2, 550);
    
    // Date
    ctx.fillStyle = '#b0b0b0';
    ctx.font = '40px Arial';
    ctx.fillText(`${timing.gDay} ${timing.gMonth} ${timing.gYear}`, canvas.width / 2, 650);
    ctx.fillText(`${timing.hDay} ${timing.hMonth} 1447 AH`, canvas.width / 2, 720);
    
    // Timings box
    ctx.fillStyle = 'rgba(255, 215, 0, 0.1)';
    ctx.fillRect(140, 850, 800, 350);
    ctx.strokeStyle = '#ffd700';
    ctx.lineWidth = 3;
    ctx.strokeRect(140, 850, 800, 350);
    
    // Sehri
    ctx.fillStyle = '#f0f0f0';
    ctx.font = '45px Arial';
    ctx.fillText('🌙 Sehri Ends', canvas.width / 2, 950);
    ctx.fillStyle = '#ffd700';
    ctx.font = 'bold 70px Arial';
    ctx.fillText(formatTime(timing.sehri), canvas.width / 2, 1040);
    
    // Iftar
    ctx.fillStyle = '#f0f0f0';
    ctx.font = '45px Arial';
    ctx.fillText('🌅 Iftar Time', canvas.width / 2, 1140);
    ctx.fillStyle = '#ffd700';
    ctx.font = 'bold 70px Arial';
    ctx.fillText(formatTime(timing.iftar), canvas.width / 2, 1230);
    
    // Location
    ctx.fillStyle = '#b0b0b0';
    ctx.font = '35px Arial';
    ctx.fillText('📍 Karachi, Pakistan', canvas.width / 2, 1450);
    
    // Footer credit
    ctx.fillStyle = '#ffd700';
    ctx.font = 'bold 40px Arial';
    ctx.fillText('Created by 728', canvas.width / 2, 1750);
    
    // Download
    const link = document.createElement('a');
    link.download = `Ramadan-Day-${dayNum}-Timings.png`;
    link.href = canvas.toDataURL();
    link.click();
}

function copyLink() {
    navigator.clipboard.writeText(window.location.href).then(() => {
        const btn = document.getElementById('copyLink');
        const originalText = btn.innerHTML;
        btn.innerHTML = '<span class="btn-icon">✅</span><span class="btn-text">Copied!</span>';
        setTimeout(() => {
            btn.innerHTML = originalText;
        }, 2000);
    });
}

// ========================================
// CORE FUNCTIONS
// ========================================
function formatTime(time24) {
    const [hours, minutes] = time24.split(':').map(Number);
    const period = hours >= 12 ? 'PM' : 'AM';
    const hours12 = hours % 12 || 12;
    return `${hours12}:${String(minutes).padStart(2, '0')} ${period}`;
}

function getCurrentRamadanDay() {
    const now = new Date();
    const startDate = new Date(CONFIG.ramadanStartDate);
    const endDate = new Date(startDate);
    endDate.setDate(startDate.getDate() + 29);
    
    if (now < startDate) return 0;
    if (now > endDate) return -1;
    return Math.floor((now - startDate) / (1000 * 60 * 60 * 24)) + 1;
}

function populateTimetable() {
    const tbody = document.getElementById('timetableBody');
    if (!tbody) return;
    
    tbody.innerHTML = '';
    const currentDay = getCurrentRamadanDay();
    
    TIMINGS.forEach(timing => {
        const row = document.createElement('tr');
        if (timing.day === currentDay) row.classList.add('current-day');
        
        row.innerHTML = `
            <td>${timing.day}</td>
            <td>${timing.hDay} ${timing.hMonth}</td>
            <td>${timing.gDay} ${timing.gMonth} ${timing.gYear}</td>
            <td>${formatTime(timing.sehri)}</td>
            <td>${formatTime(timing.iftar)}</td>
        `;
        tbody.appendChild(row);
    });
}

function updateCountdown() {
    const now = new Date();
    const targetTime = new Date(CONFIG.ramadanStartDate);
    const timeDiff = targetTime - now;
    
    if (timeDiff > 0 && getCurrentRamadanDay() === 0) {
        const days = Math.floor(timeDiff / 86400000);
        const hours = Math.floor((timeDiff % 86400000) / 3600000);
        const minutes = Math.floor((timeDiff % 3600000) / 60000);
        const seconds = Math.floor((timeDiff % 60000) / 1000);
        
        ['days', 'hours', 'minutes', 'seconds'].forEach((id, i) => {
            const el = document.getElementById(id);
            if (el) el.textContent = String([days, hours, minutes, seconds][i]).padStart(2, '0');
        });
    }
}

// ========================================
// INITIALIZATION
// ========================================
function init() {
    document.documentElement.setAttribute('data-theme', 'dark');
    
    // Core features
    populateTimetable();
    updateCountdown();
    countdownInterval = setInterval(updateCountdown, 1000);
    
    // Daily fact
    showDailyFact();
    document.getElementById('nextFactBtn')?.addEventListener('click', showNextFact);
    
    // Notifications
    updateNotificationStatus();
    
    document.getElementById('enableNotifBtn')?.addEventListener('click', async () => {
        const granted = await requestNotificationPermission();
        updateNotificationStatus();
        if (granted) {
            showNotification('🌙 Notifications Enabled', 'You will receive reminders for Sehri and Iftar!');
        }
    });
    
    document.getElementById('sehriNotif')?.addEventListener('change', (e) => {
        localStorage.setItem('sehriNotif', e.target.checked);
        updateNotificationStatus();
    });
    
    document.getElementById('iftarNotif')?.addEventListener('change', (e) => {
        localStorage.setItem('iftarNotif', e.target.checked);
        updateNotificationStatus();
    });
    
    // Load saved preferences
    if (localStorage.getItem('sehriNotif') === 'true') {
        const el = document.getElementById('sehriNotif');
        if (el) el.checked = true;
    }
    if (localStorage.getItem('iftarNotif') === 'true') {
        const el = document.getElementById('iftarNotif');
        if (el) el.checked = true;
    }
    
    // Check notifications every minute
    notificationCheckInterval = setInterval(checkAndSendNotifications, 60000);
    checkAndSendNotifications(); // Check immediately
    
    // Share buttons
    document.getElementById('shareWhatsApp')?.addEventListener('click', shareWhatsApp);
    document.getElementById('downloadCard')?.addEventListener('click', downloadShareCard);
    document.getElementById('copyLink')?.addEventListener('click', copyLink);
    
    console.log('✅ Ramadan 2026 Enhanced - Ready!');
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
