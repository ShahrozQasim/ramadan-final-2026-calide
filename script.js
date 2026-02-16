// RAMADAN 2026 - CLEAN WORKING VERSION
const CONFIG = {
    city: 'Karachi',
    country: 'Pakistan',
    ramadanStartDate: new Date('2026-02-19T00:00:00+05:00')
};

const TIMINGS = [
    {day:1,hDay:1,hMonth:'Ramadan',gDay:19,gMonth:'February',gYear:2026,sehri:'05:48',iftar:'18:28'},
    {day:2,hDay:2,hMonth:'Ramadan',gDay:20,gMonth:'February',gYear:2026,sehri:'05:47',iftar:'18:29'},
    {day:3,hDay:3,hMonth:'Ramadan',gDay:21,gMonth:'February',gYear:2026,sehri:'05:46',iftar:'18:29'},
    {day:4,hDay:4,hMonth:'Ramadan',gDay:22,gMonth:'February',gYear:2026,sehri:'05:45',iftar:'18:30'},
    {day:5,hDay:5,hMonth:'Ramadan',gDay:23,gMonth:'February',gYear:2026,sehri:'05:45',iftar:'18:30'},
    {day:6,hDay:6,hMonth:'Ramadan',gDay:24,gMonth:'February',gYear:2026,sehri:'05:44',iftar:'18:31'},
    {day:7,hDay:7,hMonth:'Ramadan',gDay:25,gMonth:'February',gYear:2026,sehri:'05:43',iftar:'18:31'},
    {day:8,hDay:8,hMonth:'Ramadan',gDay:26,gMonth:'February',gYear:2026,sehri:'05:42',iftar:'18:32'},
    {day:9,hDay:9,hMonth:'Ramadan',gDay:27,gMonth:'February',gYear:2026,sehri:'05:41',iftar:'18:32'},
    {day:10,hDay:10,hMonth:'Ramadan',gDay:28,gMonth:'February',gYear:2026,sehri:'05:40',iftar:'18:33'},
    {day:11,hDay:11,hMonth:'Ramadan',gDay:1,gMonth:'March',gYear:2026,sehri:'05:39',iftar:'18:33'},
    {day:12,hDay:12,hMonth:'Ramadan',gDay:2,gMonth:'March',gYear:2026,sehri:'05:38',iftar:'18:34'},
    {day:13,hDay:13,hMonth:'Ramadan',gDay:3,gMonth:'March',gYear:2026,sehri:'05:37',iftar:'18:34'},
    {day:14,hDay:14,hMonth:'Ramadan',gDay:4,gMonth:'March',gYear:2026,sehri:'05:36',iftar:'18:35'},
    {day:15,hDay:15,hMonth:'Ramadan',gDay:5,gMonth:'March',gYear:2026,sehri:'05:35',iftar:'18:35'},
    {day:16,hDay:16,hMonth:'Ramadan',gDay:6,gMonth:'March',gYear:2026,sehri:'05:34',iftar:'18:36'},
    {day:17,hDay:17,hMonth:'Ramadan',gDay:7,gMonth:'March',gYear:2026,sehri:'05:33',iftar:'18:36'},
    {day:18,hDay:18,hMonth:'Ramadan',gDay:8,gMonth:'March',gYear:2026,sehri:'05:32',iftar:'18:37'},
    {day:19,hDay:19,hMonth:'Ramadan',gDay:9,gMonth:'March',gYear:2026,sehri:'05:31',iftar:'18:37'},
    {day:20,hDay:20,hMonth:'Ramadan',gDay:10,gMonth:'March',gYear:2026,sehri:'05:30',iftar:'18:38'},
    {day:21,hDay:21,hMonth:'Ramadan',gDay:11,gMonth:'March',gYear:2026,sehri:'05:29',iftar:'18:38'},
    {day:22,hDay:22,hMonth:'Ramadan',gDay:12,gMonth:'March',gYear:2026,sehri:'05:28',iftar:'18:39'},
    {day:23,hDay:23,hMonth:'Ramadan',gDay:13,gMonth:'March',gYear:2026,sehri:'05:27',iftar:'18:39'},
    {day:24,hDay:24,hMonth:'Ramadan',gDay:14,gMonth:'March',gYear:2026,sehri:'05:26',iftar:'18:40'},
    {day:25,hDay:25,hMonth:'Ramadan',gDay:15,gMonth:'March',gYear:2026,sehri:'05:25',iftar:'18:40'},
    {day:26,hDay:26,hMonth:'Ramadan',gDay:16,gMonth:'March',gYear:2026,sehri:'05:24',iftar:'18:41'},
    {day:27,hDay:27,hMonth:'Ramadan',gDay:17,gMonth:'March',gYear:2026,sehri:'05:23',iftar:'18:41'},
    {day:28,hDay:28,hMonth:'Ramadan',gDay:18,gMonth:'March',gYear:2026,sehri:'05:22',iftar:'18:42'},
    {day:29,hDay:29,hMonth:'Ramadan',gDay:19,gMonth:'March',gYear:2026,sehri:'05:21',iftar:'18:42'},
    {day:30,hDay:30,hMonth:'Ramadan',gDay:20,gMonth:'March',gYear:2026,sehri:'05:20',iftar:'18:43'}
];

const RAMADAN_FACTS = [
    "Fasting teaches patience, self-discipline, and gratitude for Allah's blessings.",
    "Ramadan is the month when the Quran was first revealed to Prophet Muhammad (peace be upon him).",
    "The reward for every good deed is multiplied during Ramadan.",
    "Laylatul Qadr (Night of Power) is better than a thousand months of worship.",
    "Fasting is not just about abstaining from food, but also from negative thoughts and actions.",
    "The gates of Paradise are opened and the gates of Hell are closed during Ramadan.",
    "Sahur (pre-dawn meal) is a blessed meal - the Prophet never missed it.",
    "Breaking your fast with dates follows the Sunnah of Prophet Muhammad.",
    "Giving charity during Ramadan has immense rewards and blessings.",
    "Taraweeh prayers are a beautiful way to complete the Quran during Ramadan.",
    "Fasting helps develop empathy for those less fortunate.",
    "The Prophet said: Whoever fasts Ramadan with faith and seeking reward, their past sins are forgiven.",
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
    "The Prophet was most generous during Ramadan.",
    "Completing the Quran during Ramadan brings immense spiritual reward.",
    "Fasting develops consciousness of Allah (Taqwa) in daily life.",
    "Ramadan is a time to break bad habits and build good ones.",
    "The blessings of Ramadan extend beyond the month if practiced sincerely."
];

let currentFactIndex = 0;
let countdownInterval = null;
let notificationCheckInterval = null;

function showDailyFact() {
    const factTitle = document.getElementById('factTitle');
    const factContent = document.getElementById('factContent');
    const dayNum = getCurrentRamadanDay();
    currentFactIndex = (dayNum > 0 && dayNum <= 30) ? (dayNum - 1) : Math.floor(Math.random() * RAMADAN_FACTS.length);
    if (factTitle) factTitle.textContent = 'Ramadan Wisdom #' + (currentFactIndex + 1);
    if (factContent) {
        factContent.textContent = RAMADAN_FACTS[currentFactIndex];
        factContent.style.animation = 'fadeIn 0.5s ease-in';
    }
}

function showNextFact() {
    currentFactIndex = (currentFactIndex + 1) % RAMADAN_FACTS.length;
    const factTitle = document.getElementById('factTitle');
    const factContent = document.getElementById('factContent');
    if (factTitle) factTitle.textContent = 'Ramadan Wisdom #' + (currentFactIndex + 1);
    if (factContent) {
        factContent.style.animation = 'none';
        setTimeout(function() {
            factContent.textContent = RAMADAN_FACTS[currentFactIndex];
            factContent.style.animation = 'fadeIn 0.5s ease-in';
        }, 50);
    }
}

async function requestNotificationPermission() {
    if (!('Notification' in window)) {
        alert('Your browser does not support notifications');
        return false;
    }
    if (Notification.permission === 'granted') return true;
    if (Notification.permission !== 'denied') {
        const permission = await Notification.requestPermission();
        return permission === 'granted';
    }
    return false;
}

function showNotification(title, body) {
    if (Notification.permission === 'granted') {
        new Notification(title, { body: body, requireInteraction: true });
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
    const parts = todayTiming.sehri.split(':');
    const sehriH = parseInt(parts[0]);
    const sehriM = parseInt(parts[1]);
    const parts2 = todayTiming.iftar.split(':');
    const iftarH = parseInt(parts2[0]);
    const iftarM = parseInt(parts2[1]);
    const currentHour = now.getHours();
    const currentMin = now.getMinutes();
    if (sehriEnabled && currentHour === sehriH && currentMin === (sehriM - 10)) {
        showNotification('Sehri Reminder', 'Only 10 minutes left! Sehri ends at ' + formatTime(todayTiming.sehri));
    }
    if (iftarEnabled && currentHour === iftarH && currentMin === (iftarM - 5)) {
        showNotification('Iftar Time Soon', '5 minutes until Iftar at ' + formatTime(todayTiming.iftar));
    }
}

function updateNotificationStatus() {
    const statusEl = document.getElementById('notifStatus');
    if (!statusEl) return;
    if (Notification.permission === 'granted') {
        const sehriEnabled = localStorage.getItem('sehriNotif') === 'true';
        const iftarEnabled = localStorage.getItem('iftarNotif') === 'true';
        if (sehriEnabled || iftarEnabled) {
            statusEl.textContent = 'Notifications enabled!';
            statusEl.style.color = '#00ff88';
        } else {
            statusEl.textContent = 'Enable at least one reminder above';
            statusEl.style.color = '#ffed4e';
        }
    } else if (Notification.permission === 'denied') {
        statusEl.textContent = 'Notifications blocked in browser';
        statusEl.style.color = '#ff6b6b';
    } else {
        statusEl.textContent = 'Click Enable Notifications';
        statusEl.style.color = '#b0b0b0';
    }
}

function shareWhatsApp() {
    const dayNum = getCurrentRamadanDay();
    let message = '';
    if (dayNum > 0 && dayNum <= 30) {
        const timing = TIMINGS[dayNum - 1];
        message = 'Ramadan Day ' + dayNum + '\n\n';
        message += 'Date: ' + timing.gDay + ' ' + timing.gMonth + ' ' + timing.gYear + '\n';
        message += 'Islamic: ' + timing.hDay + ' ' + timing.hMonth + ' 1447 AH\n\n';
        message += 'Todays Timings:\n';
        message += 'Sehri: ' + formatTime(timing.sehri) + '\n';
        message += 'Iftar: ' + formatTime(timing.iftar) + '\n\n';
        message += 'Location: Karachi, Pakistan\n\n';
        message += 'Ramadan Mubarak!\n';
        message += 'Created by 728\n\n';
        message += 'Visit: https://ramadan-final-2026-calide.vercel.app';
    } else {
        message = 'Ramadan 2026 Timings\n\n';
        message += 'Starts: Wednesday, 18 February 2026\n';
        message += 'Location: Karachi, Pakistan\n\n';
        message += 'Get complete timetable:\n';
        message += 'https://ramadan-final-2026-calide.vercel.app\n\n';
        message += 'Created by 728';
    }
    window.open('https://wa.me/?text=' + encodeURIComponent(message), '_blank');
}

function downloadShareCard() {
    const dayNum = getCurrentRamadanDay();
    if (dayNum <= 0 || dayNum > 30) {
        alert('Share cards available during Ramadan');
        return;
    }
    const timing = TIMINGS[dayNum - 1];
    const canvas = document.getElementById('shareCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width = 1080;
    canvas.height = 1920;
    const gradient = ctx.createLinearGradient(0, 0, 0, 1920);
    gradient.addColorStop(0, '#0a0e27');
    gradient.addColorStop(0.5, '#141b3d');
    gradient.addColorStop(1, '#1a237e');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 1080, 1920);
    ctx.fillStyle = 'rgba(255, 215, 0, 0.1)';
    ctx.beginPath();
    ctx.arc(900, 200, 300, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#ffd700';
    ctx.font = 'bold 80px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('Ramadan Mubarak', 540, 250);
    ctx.fillStyle = '#f0f0f0';
    ctx.font = '50px Arial';
    ctx.fillText('Ramadan 2026', 540, 350);
    ctx.fillStyle = '#ffd700';
    ctx.font = 'bold 120px Arial';
    ctx.fillText('Day ' + dayNum, 540, 550);
    ctx.fillStyle = '#b0b0b0';
    ctx.font = '40px Arial';
    ctx.fillText(timing.gDay + ' ' + timing.gMonth + ' ' + timing.gYear, 540, 650);
    ctx.fillText(timing.hDay + ' ' + timing.hMonth + ' 1447', 540, 720);
    ctx.fillStyle = 'rgba(255, 215, 0, 0.1)';
    ctx.fillRect(140, 850, 800, 350);
    ctx.strokeStyle = '#ffd700';
    ctx.lineWidth = 3;
    ctx.strokeRect(140, 850, 800, 350);
    ctx.fillStyle = '#f0f0f0';
    ctx.font = '45px Arial';
    ctx.fillText('Sehri Ends', 540, 950);
    ctx.fillStyle = '#ffd700';
    ctx.font = 'bold 70px Arial';
    ctx.fillText(formatTime(timing.sehri), 540, 1040);
    ctx.fillStyle = '#f0f0f0';
    ctx.font = '45px Arial';
    ctx.fillText('Iftar Time', 540, 1140);
    ctx.fillStyle = '#ffd700';
    ctx.font = 'bold 70px Arial';
    ctx.fillText(formatTime(timing.iftar), 540, 1230);
    ctx.fillStyle = '#b0b0b0';
    ctx.font = '35px Arial';
    ctx.fillText('Karachi, Pakistan', 540, 1450);
    ctx.fillStyle = '#ffd700';
    ctx.font = 'bold 40px Arial';
    ctx.fillText('Created by 728', 540, 1750);
    const link = document.createElement('a');
    link.download = 'Ramadan-Day-' + dayNum + '.png';
    link.href = canvas.toDataURL();
    link.click();
}

function copyLink() {
    const currentUrl = window.location.href;
    navigator.clipboard.writeText(currentUrl).then(function() {
        const btn = document.getElementById('copyLink');
        if (!btn) return;
        const orig = btn.innerHTML;
        btn.innerHTML = '<span class="btn-icon">OK</span><span class="btn-text">Copied</span>';
        setTimeout(function() { btn.innerHTML = orig; }, 2000);
    });
}

function formatTime(time24) {
    const parts = time24.split(':');
    const hours = parseInt(parts[0]);
    const minutes = parseInt(parts[1]);
    const period = hours >= 12 ? 'PM' : 'AM';
    const hours12 = hours % 12 || 12;
    return hours12 + ':' + (minutes < 10 ? '0' : '') + minutes + ' ' + period;
}

function getCurrentRamadanDay() {
    const now = new Date();
    const start = new Date(CONFIG.ramadanStartDate);
    const end = new Date(start);
    end.setDate(start.getDate() + 29);
    if (now < start) return 0;
    if (now > end) return -1;
    return Math.floor((now - start) / 86400000) + 1;
}

function populateTimetable() {
    const tbody = document.getElementById('timetableBody');
    if (!tbody) return;
    tbody.innerHTML = '';
    const currentDay = getCurrentRamadanDay();
    for (let i = 0; i < TIMINGS.length; i++) {
        const t = TIMINGS[i];
        const row = document.createElement('tr');
        if (t.day === currentDay) row.classList.add('current-day');
        const td1 = document.createElement('td');
        td1.textContent = t.day;
        const td2 = document.createElement('td');
        td2.textContent = t.hDay + ' ' + t.hMonth;
        const td3 = document.createElement('td');
        td3.textContent = t.gDay + ' ' + t.gMonth + ' ' + t.gYear;
        const td4 = document.createElement('td');
        td4.textContent = formatTime(t.sehri);
        const td5 = document.createElement('td');
        td5.textContent = formatTime(t.iftar);
        row.appendChild(td1);
        row.appendChild(td2);
        row.appendChild(td3);
        row.appendChild(td4);
        row.appendChild(td5);
        tbody.appendChild(row);
    }
}

function updateCountdown() {
    const now = new Date();
    const target = new Date(CONFIG.ramadanStartDate);
    const diff = target - now;
    if (diff > 0 && getCurrentRamadanDay() === 0) {
        const d = Math.floor(diff / 86400000);
        const h = Math.floor((diff % 86400000) / 3600000);
        const m = Math.floor((diff % 3600000) / 60000);
        const s = Math.floor((diff % 60000) / 1000);
        const dEl = document.getElementById('days');
        const hEl = document.getElementById('hours');
        const mEl = document.getElementById('minutes');
        const sEl = document.getElementById('seconds');
        if (dEl) dEl.textContent = (d < 10 ? '0' : '') + d;
        if (hEl) hEl.textContent = (h < 10 ? '0' : '') + h;
        if (mEl) mEl.textContent = (m < 10 ? '0' : '') + m;
        if (sEl) sEl.textContent = (s < 10 ? '0' : '') + s;
    }
}

function init() {
    document.documentElement.setAttribute('data-theme', 'dark');
    populateTimetable();
    updateCountdown();
    countdownInterval = setInterval(updateCountdown, 1000);
    showDailyFact();
    const nextBtn = document.getElementById('nextFactBtn');
    if (nextBtn) nextBtn.addEventListener('click', showNextFact);
    updateNotificationStatus();
    const enableBtn = document.getElementById('enableNotifBtn');
    if (enableBtn) {
        enableBtn.addEventListener('click', async function() {
            const ok = await requestNotificationPermission();
            updateNotificationStatus();
            if (ok) showNotification('Notifications On', 'You will get reminders');
        });
    }
    const sehriBox = document.getElementById('sehriNotif');
    if (sehriBox) {
        sehriBox.addEventListener('change', function(e) {
            localStorage.setItem('sehriNotif', e.target.checked);
            updateNotificationStatus();
        });
        if (localStorage.getItem('sehriNotif') === 'true') sehriBox.checked = true;
    }
    const iftarBox = document.getElementById('iftarNotif');
    if (iftarBox) {
        iftarBox.addEventListener('change', function(e) {
            localStorage.setItem('iftarNotif', e.target.checked);
            updateNotificationStatus();
        });
        if (localStorage.getItem('iftarNotif') === 'true') iftarBox.checked = true;
    }
    notificationCheckInterval = setInterval(checkAndSendNotifications, 60000);
    const waBtn = document.getElementById('shareWhatsApp');
    if (waBtn) waBtn.addEventListener('click', shareWhatsApp);
    const dlBtn = document.getElementById('downloadCard');
    if (dlBtn) dlBtn.addEventListener('click', downloadShareCard);
    const cpBtn = document.getElementById('copyLink');
    if (cpBtn) cpBtn.addEventListener('click', copyLink);
    console.log('Ramadan 2026 Ready');
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
