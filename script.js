// ===============================
// عناصر صفحه
// ===============================

const clock = document.getElementById("clock");
const date = document.getElementById("date");

const themeBtn = document.getElementById("themeBtn");
const settingsBtn = document.getElementById("settingsBtn");

const settingsPanel = document.getElementById("settingsPanel");
const closeSettings = document.getElementById("closeSettings");

const themeToggle = document.getElementById("themeToggle");

const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");

const shortcuts = document.getElementById("shortcuts");
const addShortcut = document.getElementById("addShortcut");

const bookmarkModal = document.getElementById("bookmarkModal");
const closeModal = document.getElementById("closeModal");
const cancelBookmark = document.getElementById("cancelBookmark");
const saveBookmark = document.getElementById("saveBookmark");

const bookmarkName = document.getElementById("bookmarkName");
const bookmarkUrl = document.getElementById("bookmarkUrl");

const locationInput = document.getElementById("locationInput");
const saveLocation = document.getElementById("saveLocation");

const locationName = document.getElementById("locationName");
const temperature = document.getElementById("temperature");
const weatherIcon = document.getElementById("weatherIcon");
const weatherDescription = document.getElementById("weatherDescription");

const resetSettings = document.getElementById("resetSettings");

const performanceOptions = document.querySelectorAll(".performance-option");

const toast = document.getElementById("toast");

const backgroundOptions = document.querySelectorAll(".bg-option");
const languageDropdown = document.getElementById("languageDropdown");
const languageTrigger = document.getElementById("languageTrigger");
const languageMenu = document.getElementById("languageMenu");
const languageOptions = document.querySelectorAll(".language-option");
const selectedLanguageFlag = document.getElementById("selectedLanguageFlag");
const selectedLanguageName = document.getElementById("selectedLanguageName");

const languageMeta = {
    fa: { flag: "🇮🇷", name: "فارسی" },
    en: { flag: "🇬🇧", name: "English" },
    tr: { flag: "🇹🇷", name: "Türkçe" },
    az: { flag: "🇦🇿", name: "Azərbaycanca" },
    ar: { flag: "🇸🇦", name: "العربية" }
};


// ===============================
// سیستم چندزبانه Velora
// ===============================

const translations = {
    fa: {
        settingsTitle: "تنظیمات",
        themeButtonTitle: "تغییر تم",
        settingsButtonTitle: "تنظیمات",
        loading: "در حال بارگذاری...",
        searchPlaceholder: "جستجو در گوگل...",
        add: "افزودن",
        themeDescription: "تغییر ظاهر صفحه",
        darkMode: "حالت تاریک",
        locationLabel: "موقعیت مکانی",
        locationHint: "باید به انگلیسی بنویسید!",
        backgroundLabel: "پس‌زمینه",
        resetSettings: "بازنشانی تنظیمات",
        addBookmark: "افزودن بوکمارک",
        cancel: "لغو",
        save: "ذخیره",
        weatherLoading: "در حال دریافت آب‌وهوا...",
        weatherUnavailable: "آب‌وهوا در دسترس نیست",
        weatherError: "دریافت آب‌وهوا ناموفق بود",
        cityNotFound: "شهر پیدا نشد",
        emptyFields: "لطفاً هر دو فیلد را پر کنید",
        bookmarkAdded: "بوکمارک اضافه شد",
        bookmarkLimit: "حداکثر ۴ بوکمارک می‌توانید اضافه کنید",
        locationSaved: "موقعیت ذخیره شد",
        enterCity: "نام شهر را وارد کنید",
        resetConfirm: "آیا می‌خواهید تمام تنظیمات بازنشانی شوند؟",
        resetDone: "تنظیمات بازنشانی شد",
        bookmarkName: "نام سایت",
        deleteBookmark: "حذف بوکمارک",
        clear: "صاف",
        partlyCloudy: "کمی ابری",
        cloudy: "ابری",
        fog: "مه‌آلود",
        drizzle: "نم‌نم باران",
        freezingRain: "باران یخ‌زده",
        rain: "بارانی",
        snow: "برفی",
        showers: "رگبار",
        snowShowers: "رگبار برف",
        thunderstorm: "رعد و برق",
        thunderHail: "رعد و برق و تگرگ",
        unknown: "نامشخص",
        languageLabel: "زبان",
        performanceLabel: "حالت عملکرد",
        ecoMode: "کم‌مصرف",
        ecoModeHint: "افکت‌های سنگین خاموش؛ مناسب سیستم‌های ضعیف",
        fullMode: "کامل",
        fullModeHint: "تمام جلوه‌های بصری Velora فعال",
    },
    en: {
        settingsTitle: "Settings",
        themeButtonTitle: "Change theme",
        settingsButtonTitle: "Settings",
        loading: "Loading...",
        searchPlaceholder: "Search Google...",
        add: "Add",
        themeDescription: "Change page appearance",
        darkMode: "Dark mode",
        locationLabel: "Location",
        locationHint: "Enter the city name in English.",
        backgroundLabel: "Background",
        resetSettings: "Reset settings",
        addBookmark: "Add bookmark",
        cancel: "Cancel",
        save: "Save",
        weatherLoading: "Getting weather...",
        weatherUnavailable: "Weather unavailable",
        weatherError: "Failed to get weather",
        cityNotFound: "City not found",
        emptyFields: "Please fill in both fields",
        bookmarkAdded: "Bookmark added",
        bookmarkLimit: "You can add up to 4 bookmarks",
        locationSaved: "Location saved",
        enterCity: "Enter a city name",
        resetConfirm: "Reset all settings?",
        resetDone: "Settings reset",
        bookmarkName: "Site name",
        deleteBookmark: "Delete bookmark",
        clear: "Clear",
        partlyCloudy: "Partly cloudy",
        cloudy: "Cloudy",
        fog: "Foggy",
        drizzle: "Drizzle",
        freezingRain: "Freezing rain",
        rain: "Rainy",
        snow: "Snowy",
        showers: "Showers",
        snowShowers: "Snow showers",
        thunderstorm: "Thunderstorm",
        thunderHail: "Thunderstorm with hail",
        unknown: "Unknown",
        languageLabel: "Language",
        performanceLabel: "Performance mode",
        ecoMode: "Eco",
        ecoModeHint: "Heavy effects off; best for low-end PCs",
        fullMode: "Full",
        fullModeHint: "All Velora visual effects enabled",
    },
    tr: {
        settingsTitle: "Ayarlar",
        themeButtonTitle: "Temayı değiştir",
        settingsButtonTitle: "Ayarlar",
        loading: "Yükleniyor...",
        searchPlaceholder: "Google'da ara...",
        add: "Ekle",
        themeDescription: "Sayfa görünümünü değiştir",
        darkMode: "Karanlık mod",
        locationLabel: "Konum",
        locationHint: "Şehir adını İngilizce yazın.",
        backgroundLabel: "Arka plan",
        resetSettings: "Ayarları sıfırla",
        addBookmark: "Yer imi ekle",
        cancel: "İptal",
        save: "Kaydet",
        weatherLoading: "Hava durumu alınıyor...",
        weatherUnavailable: "Hava durumu kullanılamıyor",
        weatherError: "Hava durumu alınamadı",
        cityNotFound: "Şehir bulunamadı",
        emptyFields: "Lütfen iki alanı da doldurun",
        bookmarkAdded: "Yer imi eklendi",
        bookmarkLimit: "En fazla 4 yer imi ekleyebilirsiniz",
        locationSaved: "Konum kaydedildi",
        enterCity: "Şehir adını girin",
        resetConfirm: "Tüm ayarlar sıfırlansın mı?",
        resetDone: "Ayarlar sıfırlandı",
        bookmarkName: "Site adı",
        deleteBookmark: "Yer imini sil",
        clear: "Açık",
        partlyCloudy: "Parçalı bulutlu",
        cloudy: "Bulutlu",
        fog: "Sisli",
        drizzle: "Çisenti",
        freezingRain: "Dondurucu yağmur",
        rain: "Yağmurlu",
        snow: "Karlı",
        showers: "Sağanak",
        snowShowers: "Kar sağanağı",
        thunderstorm: "Gök gürültülü fırtına",
        thunderHail: "Dolu ve gök gürültülü fırtına",
        unknown: "Bilinmiyor",
        languageLabel: "Dil",
        performanceLabel: "Performans modu",
        ecoMode: "Tasarruf",
        ecoModeHint: "Ağır efektler kapalı; düşük özellikli bilgisayarlar için",
        fullMode: "Tam",
        fullModeHint: "Tüm Velora görsel efektleri etkin",
    },
    az: {
        settingsTitle: "Parametrlər",
        themeButtonTitle: "Mövzunu dəyiş",
        settingsButtonTitle: "Parametrlər",
        loading: "Yüklənir...",
        searchPlaceholder: "Google-da axtar...",
        add: "Əlavə et",
        themeDescription: "Səhifənin görünüşünü dəyiş",
        darkMode: "Tünd rejim",
        locationLabel: "Məkan",
        locationHint: "Şəhər adını ingiliscə yazın.",
        backgroundLabel: "Arxa fon",
        resetSettings: "Parametrləri sıfırla",
        addBookmark: "Əlfəcin əlavə et",
        cancel: "Ləğv et",
        save: "Yadda saxla",
        weatherLoading: "Hava məlumatı alınır...",
        weatherUnavailable: "Hava məlumatı əlçatan deyil",
        weatherError: "Hava məlumatı alınmadı",
        cityNotFound: "Şəhər tapılmadı",
        emptyFields: "Zəhmət olmasa hər iki sahəni doldurun",
        bookmarkAdded: "Əlfəcin əlavə edildi",
        bookmarkLimit: "Maksimum 4 əlfəcin əlavə edə bilərsiniz",
        locationSaved: "Məkan yadda saxlanıldı",
        enterCity: "Şəhər adını daxil edin",
        resetConfirm: "Bütün parametrlər sıfırlansın?",
        resetDone: "Parametrlər sıfırlandı",
        bookmarkName: "Sayt adı",
        deleteBookmark: "Əlfəcini sil",
        clear: "Açıq",
        partlyCloudy: "Az buludlu",
        cloudy: "Buludlu",
        fog: "Dumanlı",
        drizzle: "Çiskin",
        freezingRain: "Dondurucu yağış",
        rain: "Yağışlı",
        snow: "Qarlı",
        showers: "Gur yağış",
        snowShowers: "Qar yağışı",
        thunderstorm: "Göy gurultulu fırtına",
        thunderHail: "Dolu ilə göy gurultusu",
        unknown: "Naməlum",
        languageLabel: "Dil",
        performanceLabel: "Performans rejimi",
        ecoMode: "Qənaət",
        ecoModeHint: "Ağır effektlər söndürülür; zəif kompüterlər üçün",
        fullMode: "Tam",
        fullModeHint: "Bütün Velora vizual effektləri aktivdir",
    },
    ar: {
        settingsTitle: "الإعدادات",
        themeButtonTitle: "تغيير المظهر",
        settingsButtonTitle: "الإعدادات",
        loading: "جارٍ التحميل...",
        searchPlaceholder: "البحث في Google...",
        add: "إضافة",
        themeDescription: "تغيير مظهر الصفحة",
        darkMode: "الوضع الداكن",
        locationLabel: "الموقع",
        locationHint: "اكتب اسم المدينة بالإنجليزية.",
        backgroundLabel: "الخلفية",
        resetSettings: "إعادة ضبط الإعدادات",
        addBookmark: "إضافة إشارة مرجعية",
        cancel: "إلغاء",
        save: "حفظ",
        weatherLoading: "جارٍ الحصول على الطقس...",
        weatherUnavailable: "الطقس غير متاح",
        weatherError: "تعذر الحصول على الطقس",
        cityNotFound: "لم يتم العثور على المدينة",
        emptyFields: "يرجى ملء الحقلين",
        bookmarkAdded: "تمت إضافة الإشارة المرجعية",
        bookmarkLimit: "يمكنك إضافة 4 إشارات مرجعية كحد أقصى",
        locationSaved: "تم حفظ الموقع",
        enterCity: "أدخل اسم المدينة",
        resetConfirm: "هل تريد إعادة ضبط جميع الإعدادات؟",
        resetDone: "تمت إعادة ضبط الإعدادات",
        bookmarkName: "اسم الموقع",
        deleteBookmark: "حذف الإشارة المرجعية",
        clear: "صافٍ",
        partlyCloudy: "غائم جزئيًا",
        cloudy: "غائم",
        fog: "ضبابي",
        drizzle: "رذاذ",
        freezingRain: "مطر متجمد",
        rain: "ممطر",
        snow: "مثلج",
        showers: "زخات مطر",
        snowShowers: "زخات ثلج",
        thunderstorm: "عاصفة رعدية",
        thunderHail: "عاصفة رعدية مع بَرَد",
        unknown: "غير معروف",
        languageLabel: "اللغة",
        performanceLabel: "وضع الأداء",
        ecoMode: "موفّر",
        ecoModeHint: "إيقاف المؤثرات الثقيلة؛ مناسب للأجهزة الضعيفة",
        fullMode: "كامل",
        fullModeHint: "جميع المؤثرات المرئية في Velora مفعّلة",
    }
};

const localeMap = {
    fa: "fa-IR",
    en: "en-US",
    tr: "tr-TR",
    az: "az-AZ",
    ar: "ar-SA"
};

function t(key) {
    const lang = localStorage.getItem("language") || "fa";
    return translations[lang]?.[key] || translations.en[key] || key;
}

function applyLanguage(lang) {
    if (!translations[lang]) lang = "fa";

    localStorage.setItem("language", lang);

    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "fa" || lang === "ar" ? "rtl" : "ltr";

    document.querySelectorAll("[data-i18n]").forEach((element) => {
        const key = element.dataset.i18n;
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    document.querySelectorAll("[data-i18n-title]").forEach((element) => {
        const key = element.dataset.i18nTitle;
        if (translations[lang][key]) {
            element.title = translations[lang][key];
        }
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
        const key = element.dataset.i18nPlaceholder;
        if (translations[lang][key]) {
            element.placeholder = translations[lang][key];
        }
    });

    updateLanguageDropdown(lang);

    updateClock();
    updateWeatherTextOnly();
}

function updateWeatherTextOnly() {
    if (!weatherIcon || !temperature || !locationName) return;

    const weatherCode = Number(weatherIcon.dataset.weatherCode);
    const isDay = weatherIcon.dataset.isDay === "true";

    if (!Number.isNaN(weatherCode)) {
        const weather = getWeatherInfo(weatherCode, isDay);
        // keep icon/temperature; only the translated description is used if shown
        if (weatherDescription) {
            weatherDescription.textContent = weather.text;
        }
    }
}

function updateLanguageDropdown(lang) {
    const meta = languageMeta[lang] || languageMeta.fa;

    if (selectedLanguageFlag) {
        selectedLanguageFlag.textContent = meta.flag;
    }

    if (selectedLanguageName) {
        selectedLanguageName.textContent = meta.name;
    }

    languageOptions.forEach((option) => {
        const active = option.dataset.language === lang;
        option.classList.toggle("active", active);
        option.setAttribute("aria-selected", active ? "true" : "false");
    });
}

function closeLanguageMenu() {
    if (!languageMenu || !languageTrigger) return;

    languageMenu.classList.remove("open");
    languageTrigger.classList.remove("open");
    languageTrigger.setAttribute("aria-expanded", "false");
}

if (languageTrigger && languageMenu) {
    languageTrigger.addEventListener("click", (event) => {
        event.stopPropagation();

        const isOpen = languageMenu.classList.toggle("open");
        languageTrigger.classList.toggle("open", isOpen);
        languageTrigger.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
}

languageOptions.forEach((option) => {
    option.addEventListener("click", () => {
        applyLanguage(option.dataset.language);
        closeLanguageMenu();
    });
});

document.addEventListener("click", (event) => {
    if (languageDropdown && !languageDropdown.contains(event.target)) {
        closeLanguageMenu();
    }
});

// ===============================
// ساعت
// ===============================

function updateClock() {
    const now = new Date();

    const lang = localStorage.getItem("language") || "fa";
    const locale = localeMap[lang] || "fa-IR";

    clock.textContent = now.toLocaleTimeString(locale, {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    });

    date.textContent = now.toLocaleDateString(locale, {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    });
}

updateClock();
setInterval(updateClock, 1000);


// ===============================
// Toast
// ===============================

function showToast(message) {
    toast.textContent = message;
    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 2000);
}


// ===============================
// پنل تنظیمات
// ===============================

settingsBtn.addEventListener("click", () => {
    settingsPanel.classList.add("open");
});

closeSettings.addEventListener("click", () => {
    settingsPanel.classList.remove("open");
});


// ===============================
// تم Dark / Light
// ===============================

function setTheme(theme) {
    if (theme === "light") {
        document.body.classList.add("light");
        themeToggle.classList.remove("active");
        themeBtn.textContent = "☀️";
    } else {
        document.body.classList.remove("light");
        themeToggle.classList.add("active");
        themeBtn.textContent = "🌙";
    }

    localStorage.setItem("theme", theme);
}

function toggleTheme() {
    const currentTheme = localStorage.getItem("theme") || "dark";

    if (currentTheme === "dark") {
        setTheme("light");
    } else {
        setTheme("dark");
    }
}

themeBtn.addEventListener("click", toggleTheme);
themeToggle.addEventListener("click", toggleTheme);


// ===============================
// جستجوی گوگل
// ===============================

searchForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const query = searchInput.value.trim();

    if (!query) {
        return;
    }

    const googleUrl =
        "https://www.google.com/search?q=" +
        encodeURIComponent(query);

    window.location.href = googleUrl;
});


// ===============================
// بوکمارک‌ها
// ===============================

function getBookmarks() {
    return JSON.parse(localStorage.getItem("bookmarks")) || [];
}


function saveBookmarks(bookmarks) {
    localStorage.setItem(
        "bookmarks",
        JSON.stringify(bookmarks)
    );
}


function updateAddBookmarkButton() {
    const bookmarks = getBookmarks();

    if (bookmarks.length >= 4) {
        addShortcut.style.display = "none";
    } else {
        addShortcut.style.display = "";
    }
}

function renderBookmarks() {
    const bookmarks = getBookmarks();

    document.querySelectorAll(".custom-bookmark").forEach((item) => {
        item.remove();
    });

    bookmarks.forEach((bookmark, index) => {
        const link = document.createElement("a");

        link.href = bookmark.url;
        link.target = "_blank";
        link.className = "shortcut-card custom-bookmark";

        let domain = "";

        try {
            domain = new URL(bookmark.url).hostname;
        } catch (error) {
            console.error("Invalid URL:", bookmark.url);
        }

        const iconUrl = domain
            ? `https://www.google.com/s2/favicons?domain=${domain}&sz=64`
            : "";

        link.innerHTML = `
            <div class="shortcut-icon website-icon">
                ${
                    iconUrl
                        ? `<img
                            src="${iconUrl}"
                            alt="${bookmark.name}"
                            loading="lazy"
                        >`
                        : `<span>${bookmark.name.charAt(0).toUpperCase()}</span>`
                }
            </div>

            <span>${bookmark.name}</span>

            <button
                class="delete-bookmark"
                data-index="${index}"
                title="${t("deleteBookmark")}"
            >
                ×
            </button>
        `;

        shortcuts.insertBefore(link, addShortcut);
    });

    updateAddBookmarkButton();
}


addShortcut.addEventListener("click", () => {
    bookmarkModal.classList.add("show");

    bookmarkName.value = "";
    bookmarkUrl.value = "";

    bookmarkName.focus();
});


function closeBookmarkModal() {
    bookmarkModal.classList.remove("show");
}

closeModal.addEventListener("click", closeBookmarkModal);
cancelBookmark.addEventListener("click", closeBookmarkModal);


saveBookmark.addEventListener("click", () => {
    const name = bookmarkName.value.trim();
    let url = bookmarkUrl.value.trim();

    if (!name || !url) {
        showToast(t("emptyFields"));
        return;
    }

    if (!url.startsWith("http://") && !url.startsWith("https://")) {
        url = "https://" + url;
    }

    const bookmarks = getBookmarks();

        if (bookmarks.length >= 4) {
            showToast(t("bookmarkLimit"));
            return;
        }

        bookmarks.push({
            name,
            url
        });

    saveBookmarks(bookmarks);

    renderBookmarks();
    closeBookmarkModal();

    showToast(t("bookmarkAdded"));
});


shortcuts.addEventListener("click", (event) => {
    if (!event.target.classList.contains("delete-bookmark")) {
        return;
    }

    event.preventDefault();
    event.stopPropagation();

    const index = Number(event.target.dataset.index);

    const bookmarks = getBookmarks();

    bookmarks.splice(index, 1);

    saveBookmarks(bookmarks);

    renderBookmarks();

    showToast("بوکمارک حذف شد");
});


// ===============================
// پس‌زمینه
// ===============================

function setBackground(background) {
    document.body.classList.remove(
        "bg-purple",
        "bg-blue",
        "bg-red"
    );

    if (background !== "default") {
        document.body.classList.add(
            "bg-" + background
        );
    }

    backgroundOptions.forEach((option) => {
        option.classList.remove("active");
    });

    const selectedOption =
        document.querySelector(
            `.bg-option[data-bg="${background}"]`
        );

    if (selectedOption) {
        selectedOption.classList.add("active");
    }

    localStorage.setItem(
        "background",
        background
    );
}


backgroundOptions.forEach((option) => {
    option.addEventListener("click", () => {
        const background =
            option.dataset.bg;

        setBackground(background);
    });
});


// =====================================================
// آب و هوا
// =====================================================

// تبدیل Weather Code به آیکون و توضیح
function getWeatherInfo(code, isDay) {

    if (code === 0) {
        return {
            icon: isDay ? "☀️" : "🌙",
            text: t("clear")
        };
    }

    if (code === 1 || code === 2) {
        return {
            icon: isDay ? "🌤️" : "🌙",
            text: t("partlyCloudy")
        };
    }

    if (code === 3) {
        return {
            icon: "☁️",
            text: t("cloudy")
        };
    }

    if (
        code === 45 ||
        code === 48
    ) {
        return {
            icon: "🌫️",
            text: t("fog")
        };
    }

    if (
        code === 51 ||
        code === 53 ||
        code === 55
    ) {
        return {
            icon: "🌦️",
            text: t("drizzle")
        };
    }

    if (
        code === 56 ||
        code === 57
    ) {
        return {
            icon: "🌧️",
            text: t("freezingRain")
        };
    }

    if (
        code === 61 ||
        code === 63 ||
        code === 65
    ) {
        return {
            icon: "🌧️",
            text: t("rain")
        };
    }

    if (
        code === 66 ||
        code === 67
    ) {
        return {
            icon: "🌧️",
            text: t("freezingRain")
        };
    }

    if (
        code === 71 ||
        code === 73 ||
        code === 75 ||
        code === 77
    ) {
        return {
            icon: "❄️",
            text: t("snow")
        };
    }

    if (
        code === 80 ||
        code === 81 ||
        code === 82
    ) {
        return {
            icon: "🌦️",
            text: t("showers")
        };
    }

    if (
        code === 85 ||
        code === 86
    ) {
        return {
            icon: "🌨️",
            text: t("snowShowers")
        };
    }

    if (
        code === 95
    ) {
        return {
            icon: "⛈️",
            text: t("thunderstorm")
        };
    }

    if (
        code === 96 ||
        code === 99
    ) {
        return {
            icon: "⛈️",
            text: t("thunderHail")
        };
    }

    return {
        icon: "🌤️",
        text: t("unknown")
    };
}


// ===============================
// پیدا کردن مختصات شهر
// ===============================

async function getCityCoordinates(city) {

    const url =
        "https://geocoding-api.open-meteo.com/v1/search" +
        "?name=" +
        encodeURIComponent(city) +
        "&count=1" +
        "&language=en" +
        "&format=json";

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(
            "خطا در دریافت اطلاعات شهر"
        );
    }

    const data = await response.json();

    if (
        !data.results ||
        data.results.length === 0
    ) {
        throw new Error(
            "شهر پیدا نشد"
        );
    }

    return data.results[0];
}


// ===============================
// دریافت آب و هوا
// ===============================

async function getWeather(city) {

    try {

        weatherIcon.textContent = "⏳";
        temperature.textContent = "--°C";
        locationName.textContent = t("weatherLoading");

        // پیدا کردن شهر
        const location =
            await getCityCoordinates(city);

        const latitude =
            location.latitude;

        const longitude =
            location.longitude;

        // دریافت وضعیت فعلی
        const weatherUrl =
            "https://api.open-meteo.com/v1/forecast" +
            "?latitude=" +
            latitude +
            "&longitude=" +
            longitude +
            "&current=temperature_2m,weather_code,is_day" +
            "&temperature_unit=celsius";

        const response =
            await fetch(weatherUrl);

        if (!response.ok) {
            throw new Error(
                "خطا در دریافت آب‌وهوا"
            );
        }

        const data =
            await response.json();

        const current =
            data.current;

        const temp =
            Math.round(
                current.temperature_2m
            );

        const weatherCode =
            current.weather_code;

        const isDay =
            current.is_day === 1;

        const weather =
            getWeatherInfo(
                weatherCode,
                isDay
            );

        // نمایش اطلاعات
        weatherIcon.textContent =
            weather.icon;

        temperature.textContent =
            `${temp}°C`;

        locationName.textContent =
            `${location.name}, ${location.country}`;

        // ذخیره شهر واقعی
        localStorage.setItem(
            "location",
            location.name
        );

    } catch (error) {

        console.error(
            "Weather Error:",
            error
        );

        weatherIcon.textContent =
            "⚠️";

        temperature.textContent =
            "--°C";

        locationName.textContent = t("weatherUnavailable");

        showToast(t("weatherError"));
    }
}


// ===============================
// ذخیره موقعیت
// ===============================

saveLocation.addEventListener(
    "click",
    async () => {

        const city =
            locationInput.value.trim();

        if (!city) {
            showToast(t("enterCity"));

            return;
        }

        localStorage.setItem(
            "location",
            city
        );

        await getWeather(city);

        showToast(t("locationSaved"));
    }
);


// ===============================
// وقتی Enter داخل Location زده شود
// ===============================

locationInput.addEventListener(
    "keydown",
    (event) => {

        if (event.key === "Enter") {
            event.preventDefault();

            saveLocation.click();
        }
    }
);


// ===============================
// بارگذاری تنظیمات ذخیره‌شده
// ===============================

function loadSettings() {

    const savedLanguage =
        localStorage.getItem("language") ||
        "fa";

    applyLanguage(savedLanguage);

    // Theme
    const savedTheme =
        localStorage.getItem("theme") ||
        "dark";

    setTheme(savedTheme);


    // Background
    const savedBackground =
        localStorage.getItem("background") ||
        "default";

    setBackground(
        savedBackground
    );

    // Performance
    const savedPerformanceMode =
        localStorage.getItem("performanceMode") ||
        "full";
    setPerformanceMode(savedPerformanceMode);


    // Location
    const savedLocation =
        localStorage.getItem("location") ||
        "Baku";

    locationInput.value =
        savedLocation;

    // دریافت آب‌وهوا
    getWeather(savedLocation);


    // Bookmarks
    renderBookmarks();
}


// اجرای تنظیمات
loadSettings();


// ===============================
// Performance Mode
// ===============================

function setPerformanceMode(mode) {
    const performanceMode = mode === "eco" ? "eco" : "full";

    document.body.classList.toggle("eco-mode", performanceMode === "eco");

    performanceOptions.forEach((option) => {
        const isActive = option.dataset.performance === performanceMode;
        option.classList.toggle("active", isActive);
        option.setAttribute("aria-pressed", String(isActive));
    });

    localStorage.setItem("performanceMode", performanceMode);
}

performanceOptions.forEach((option) => {
    option.addEventListener("click", () => {
        setPerformanceMode(option.dataset.performance);
    });
});

// ===============================
// Reset
// ===============================

resetSettings.addEventListener(
    "click",
    () => {

        const confirmReset =
            confirm(t("resetConfirm"));

        if (!confirmReset) {
            return;
        }

        localStorage.removeItem("theme");
        localStorage.removeItem("background");
        localStorage.removeItem("location");
        localStorage.removeItem("bookmarks");
        localStorage.removeItem("language");
        localStorage.removeItem("performanceMode");

        applyLanguage("fa");

        setTheme("dark");
        setBackground("default");
        setPerformanceMode("full");

        locationInput.value =
            "Baku";

        renderBookmarks();

        getWeather("Baku");

        showToast(t("resetDone"));
    }
);


// ===============================
// بستن با Escape
// ===============================

document.addEventListener(
    "keydown",
    (event) => {

        if (event.key !== "Escape") {
            return;
        }

        settingsPanel.classList.remove(
            "open"
        );

        bookmarkModal.classList.remove(
            "show"
        );
    }
);
