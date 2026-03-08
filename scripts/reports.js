async function loadReports() {
  const container = document.getElementById("reports-container");

  try {
    const response = await fetch("./scripts/reports.json");
    const reports = await response.json();

    let cards = "";

    reports.forEach((report, index) => {
      cards += `
<div
class="flex-shrink-0 w-[450px] bg-neo-black border-4 border-white/10 p-8 shadow-hard
hover:border-neo-${report.color}/50 hover:-translate-y-2 transition-all duration-500
relative overflow-hidden text-left whitespace-normal">

<div class="absolute top-0 left-0 w-full h-1 bg-neo-${report.color}"></div>

<div class="absolute -top-4 -right-4 w-12 h-12 bg-white/5 rotate-45"></div>

<div class="flex justify-between items-start mb-6">

<div class="font-mono text-neo-${report.color} text-xs font-bold tracking-widest uppercase">
${report.id}_${String(index + 1).padStart(3, "0")}.log
</div>

<div class="text-[10px] font-mono text-gray-500">
${report.year}.txt
</div>

</div>

<h3 class="font-black text-lg text-white mb-2 uppercase">
${report.title}
</h3>

<div class="font-mono text-gray-400 text-[10px] mb-2 uppercase tracking-tight">
FROM: ${report.author}
</div>

<p class="font-bold text-xl leading-snug mb-6 text-white/90">
"${report.message}"
</p>

<div class="flex text-neo-${report.color}/60 gap-1 text-lg">
<i class="ri-star-fill"></i>
<i class="ri-star-fill"></i>
<i class="ri-star-fill"></i>
<i class="ri-star-fill"></i>
<i class="ri-star-fill"></i>
</div>

</div>
`;
    });

    container.innerHTML = cards;

    setScrollHeight();
  } catch (error) {
    console.error("Failed to load reports:", error);
  }
}

loadReports();
