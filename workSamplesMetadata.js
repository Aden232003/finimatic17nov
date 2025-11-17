// Work Samples Metadata
// Current work showcase with YouTube URLs

const workSamplesMetadata = {
    '2WUvpKU_Cas': {
        label: 'Chart Animation Sample',
        url: 'https://youtu.be/2WUvpKU_Cas'
    },
    'Ue_ScGDc0nw': {
        label: 'Educational Content',
        url: 'https://youtu.be/Ue_ScGDc0nw'
    },
    'rwF477BtTG0': {
        label: 'Data Visualization',
        url: 'https://youtu.be/rwF477BtTG0'
    },
    'gFHwWz_2YYc': {
        label: 'Macro Update',
        url: 'https://youtu.be/gFHwWz_2YYc'
    },
    'c9olP6Pr598': {
        label: 'Storytelling Content',
        url: 'https://youtu.be/c9olP6Pr598'
    }
};

// Make cards clickable and redirect to YouTube
document.addEventListener('DOMContentLoaded', () => {
    const sampleCards = document.querySelectorAll('.sample-card');

    sampleCards.forEach(card => {
        const videoId = card.dataset.videoId;
        const metadata = workSamplesMetadata[videoId];

        if (metadata) {
            // Update label
            const labelEl = card.querySelector('.sample-label');
            if (labelEl) labelEl.textContent = metadata.label;

            // Make card clickable
            card.style.cursor = 'pointer';
            card.addEventListener('click', (e) => {
                // Don't interfere with iframe clicks
                if (e.target.tagName === 'IFRAME') return;

                // Open YouTube video in new tab
                window.open(metadata.url, '_blank');
            });

            // Add visual feedback
            card.addEventListener('mouseenter', () => {
                const labelEl = card.querySelector('.sample-label');
                if (labelEl) {
                    labelEl.innerHTML = `${metadata.label} <i class="fas fa-external-link-alt" style="font-size: 0.75rem; margin-left: 0.5rem;"></i>`;
                }
            });

            card.addEventListener('mouseleave', () => {
                const labelEl = card.querySelector('.sample-label');
                if (labelEl) {
                    labelEl.textContent = metadata.label;
                }
            });
        }
    });
});
