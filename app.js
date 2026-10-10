// Semua isi yang ingin kamu personalisasi ada di sini.
const musicSource = "music/lagu-kita.mp3"; // Ganti path ini jika nama/lokasi file musik berbeda.
const memories = [
  { date: "30 Maret 2025", title: "Awal dari kita.", description: "Waktuu itu aku liat kamuu beda dari merekaa, dan aku udah tertarik sama kamu sejak ituu (meskipun kamu suka gapercaya waktu aku bilang gini)", image: "https://i.imgur.com/1vqux4v.jpeg", alt: "Dua orang (beserta tim nyaa) dalam sebuah diskusi lomba", className: "memory-wide" },
  { date: "17 Juli 2025", title: "Hari yang ingin kuulang.", description: "Ini momen fotbar pertama kitaa yaa, ahahaa meskipun akuu awalnyaa takut dan raguu.. eh habis foto ini malah ke photobox.", image: "https://i.imgur.com/LbXZrNI.jpeg", alt: "Momen santai bersama" },
  { date: "9 Oktober 2025 (wow harii inii)", title: "Sederhana, tapi kita.", description: "gaperlu aku jelasin kamuuu juga pastii inget waktu inii, luvvv", image: "https://i.imgur.com/vsqgpgo.jpeg", alt: "Teman-teman menikmati kebersamaan" },
];

const rememberedThings = [
  { title: "I remember...", preview: "Aku inget ke tempat kamuu kerjaa", story: "Akuu sering banget ke brilink tempat kamu kerjaa duluu dan aku akan nungguin ketika ada customer ahahaaa, waktu rame kamuu pastii kesel kan" },
  { title: "I remember...", preview: "Aku inget.. Semua dimulai dari...", story: "Siomay cak kiiim... ahahaa, itu waktu kita ketemu dan nyapa (meskipun aga canggung).. secara ga sadar itu adalah titik awal kita mulai sering nyapaa" },
  { title: "I remember...", preview: "Aku inget kita panggil adek-kakak", story: "Akuu dulu panggil kamuu adek karena kamu kaloo dirumah dipanggil adek, dan kamu bales dengan panggil aku kakak... ahaha luuvv" },
  { title: "I remember...", preview: "Aku inget kita chating sampe jam 2 paagiiii", story: "duluuu waktuu awal kiitaa chating gatau waktuu yaaa, mana aku ga nyuruh tidur lagiii.. ihihi" },
];

const statistics = [
  { value: "452", label: "Days together", note: "and counting" },
  { value: "148", label: "Photos taken", note: "most are blurry" },
  { comparison: [{ label: "Me", value: "33%" }, { label: "You", value: "67%" }], label: "Who is more annoying?", note: ". . . . ." },
  { value: "∞", label: "Times you made me smile", note: "dan masih terus bertambah" },
];

const thingsILove = [
  "Aku suka cara kamu inget hal-hal kecil tentang aku yang bahkan kadang aku sendiri lupa.",
  "Aku suka cara kamu ngerti aku tanpa aku harus selalu ngejelasin semuanya.",
  "Aku suka cara kamu tetap ada, bahkan di saat aku lagi terlalu sibuk sama dunia aku sendiri.",
  "Aku suka setiap kali kamu excited cerita tentang sesuatu yang kamu suka.",
  "kamuuu, sesuatu yang aku suka tentang kamuu: kamuuu🫶🫶🫶",
];

const littleSurprises = [
  "Maaf yaaa kalo aku sering bikin kamu ngerasa bersalah.. padahal akuu looh yang lebih sering bikin salah... kedepannya jangan suka menyalahkan diri kamuu sendiri yaaa, bukan cuma buat aku tapi ke siapa ajaaa",
];

const letterParagraphs = [
  "Akuuu nggaa tauu kedepannya kita akan sejauh manaaa, tapi yang jelas akuu selalu bersyukur atas hari-hari kita bersamaaa.. bahkan sampai sejauh ini looo, kita hebat tauu🫶🫶",
  "Meskipun kita ga tauu kedepannya gimanaa, akuuu akan selalu berdoa supaya kita bisa terus bersamaa..",
  "Semoga kita tetap bisa saling ngerti meskipun sama-sama berubah.",
  "Semoga kita tetap punya banyak hal kecil buat dikenang.",
  "Semoga sesibuk apa pun nanti, kita tetap punya waktu buat satu sama lain.",
  "Semoga cerita kita masih punya banyak halaman yang belum ditulis.",
];

const escapeHTML = (value) => String(value).replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);

document.querySelector("#memoryList").innerHTML = memories.map((memory, index) => `
  <article class="memory-item ${memory.className || ""} reveal">
    <figure class="memory-photo"><img src="${escapeHTML(memory.image)}" alt="${escapeHTML(memory.alt)}" loading="lazy" /><span class="photo-number">0${index + 1}</span></figure>
    <div class="memory-info"><span class="memory-date">${escapeHTML(memory.date)}</span><h3>${escapeHTML(memory.title)}</h3><p>${escapeHTML(memory.description)}</p></div>
  </article>`).join("");

document.querySelector("#rememberGrid").innerHTML = rememberedThings.map((item, index) => `
  <button class="remember-card reveal" type="button" aria-expanded="false"><span class="card-index">0${index + 1} <i>↗</i></span><span class="remember-title">${escapeHTML(item.title)}</span><span class="remember-preview">${escapeHTML(item.preview)}</span><span class="remember-story">${escapeHTML(item.story)}</span></button>`).join("");

document.querySelector("#statsGrid").innerHTML = statistics.map((stat) => `<div class="stat reveal">${stat.comparison ? `<span class="stat-comparison">${stat.comparison.map((person) => `<span class="comparison-person"><b>${escapeHTML(person.value)}</b><small>${escapeHTML(person.label)}</small></span>`).join("")}</span>` : `<span class="stat-value">${escapeHTML(stat.value)}</span>`}<span class="stat-label">${escapeHTML(stat.label)}</span><span class="stat-note">${escapeHTML(stat.note)}</span></div>`).join("");
document.querySelector("#loveList").innerHTML = thingsILove.map((item, index) => `<div class="love-item reveal"><span class="love-number">0${index + 1}</span><p>${escapeHTML(item)}</p><span class="love-star">✳</span></div>`).join("");
document.querySelector("#envelopes").innerHTML = [1, 2, 3].map((number) => `<button class="envelope reveal" type="button" aria-label="Pilih amplop ${number}"><span>✉</span><small>0${number}</small></button>`).join("");
document.querySelector("#letterBody").innerHTML = letterParagraphs.map((paragraph) => `<p>${escapeHTML(paragraph)}</p>`).join("");

const intro = document.querySelector("#intro");
const experience = document.querySelector("#experience");
const music = document.querySelector("#anniversaryMusic");
const musicToggle = document.querySelector("#musicToggle");
const musicLabel = musicToggle.querySelector(".music-label");
music.src = musicSource;

async function playMusic() {
  try {
    await music.play();
    musicToggle.classList.add("is-playing");
    musicToggle.setAttribute("aria-pressed", "true");
    musicToggle.setAttribute("aria-label", "Jeda musik");
    musicLabel.textContent = "Musik menyala";
  } catch {
    musicLabel.textContent = "Cek file musik";
    musicToggle.setAttribute("aria-label", "File musik belum bisa diputar");
  }
}

music.addEventListener("pause", () => {
  musicToggle.classList.remove("is-playing");
  musicToggle.setAttribute("aria-pressed", "false");
  musicToggle.setAttribute("aria-label", "Putar musik");
  musicLabel.textContent = "Putar musik";
});
music.addEventListener("error", () => { musicLabel.textContent = "Cek file musik"; });
musicToggle.addEventListener("click", () => music.paused ? playMusic() : music.pause());

document.querySelector("#enterButton").addEventListener("click", () => {
  intro.classList.add("is-leaving");
  experience.setAttribute("aria-hidden", "false");
  document.body.classList.add("is-entered");
  musicToggle.hidden = false;
  playMusic();
  window.setTimeout(() => { intro.hidden = true; document.querySelector(".hero").classList.add("is-visible"); }, 850);
});

document.querySelectorAll(".remember-card").forEach((card) => card.addEventListener("click", () => {
  const open = card.classList.toggle("is-open");
  card.setAttribute("aria-expanded", String(open));
}));

let pickCount = 0;
document.querySelectorAll(".envelope").forEach((button) => button.addEventListener("click", () => {
  pickCount += 1;
  const output = document.querySelector("#pickMessage");
  const nudge = document.querySelector("#pickNudge");
  if (pickCount === 1) {
    button.classList.add("is-selected");
    output.textContent = littleSurprises[0];
    output.classList.add("is-shown");
    return;
  }
  nudge.textContent = pickCount === 2 ? "pilih satuu saayang" : "udaa dibilang cumaaa satuu ih";
  nudge.classList.remove("is-shown");
  requestAnimationFrame(() => nudge.classList.add("is-shown"));
}));

const revealObserver = new IntersectionObserver((entries) => entries.forEach((entry) => {
  if (entry.isIntersecting) { entry.target.classList.add("is-visible"); revealObserver.unobserve(entry.target); }
}), { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

const ending = document.querySelector(".ending");
const endingObserver = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) ending.classList.add("ending-visible"); }, { threshold: 0.3 });
endingObserver.observe(ending);
