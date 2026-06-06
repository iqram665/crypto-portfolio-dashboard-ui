// ড্যাশবোর্ডের লাইভ অ্যানিমেটেড লাইন চার্ট সেটআপ
const ctx = document.getElementById('cryptoLineChart').getContext('2d');

// চার্টের ব্যাকগ্রাউন্ড গ্রাডিয়েন্ট বা কালার শেড তৈরি করা
const gradient = ctx.createLinearGradient(0, 0, 0, 300);
gradient.addColorStop(0, 'rgba(59, 130, 246, 0.4)'); // হালকা নীল ওপরে
gradient.addColorStop(1, 'rgba(59, 130, 246, 0.0)'); // নিচে গিয়ে ট্রান্সপারেন্ট

const cryptoChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['01 Jun', '02 Jun', '03 Jun', '04 Jun', '05 Jun', '06 Jun', '07 Jun'], // দিনসমূহ
        datasets: [{
            label: 'BTC Price (USD)',
            data: [62000, 64500, 63800, 65200, 64100, 66800, 67430], // প্রাইস হিস্ট্রি
            backgroundColor: gradient,
            borderColor: '#3b82f6', // নিয়ন ব্লু লাইন
            borderWidth: 3,
            pointBackgroundColor: '#3b82f6',
            pointHoverRadius: 7,
            tension: 0.4, // কার্ভ বা ঢেউ খেলানো লুকের জন্য
            fill: true
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false } // লিজেন্ড হাইড করা ক্লিন লুকের জন্য
        },
        scales: {
            x: {
                grid: { display: false },
                ticks: { color: '#94a3b8' }
            },
            y: {
                grid: { color: 'rgba(255, 255, 255, 0.05)' },
                ticks: { color: '#94a3b8' }
            }
        }
    }
});

const refreshButton = document.getElementById('refreshButton');
if (refreshButton) {
    refreshButton.addEventListener('click', () => {
        const balanceEl = document.querySelector('[data-balance]');
        const profitEl = document.querySelector('[data-profit]');

        if (balanceEl) {
            balanceEl.textContent = '$48,790.20';
        }
        if (profitEl) {
            profitEl.textContent = '+$13,790.80';
        }

        cryptoChart.data.datasets[0].data = [63000, 64800, 64200, 65800, 64700, 67200, 67910];
        cryptoChart.update();

        refreshButton.textContent = 'Refreshed';
        refreshButton.disabled = true;
        setTimeout(() => {
            refreshButton.textContent = 'Refresh';
            refreshButton.disabled = false;
        }, 1200);
    });
}