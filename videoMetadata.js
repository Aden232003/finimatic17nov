// Video Metadata
// TODO: Update these with actual video data from YouTube
// You can get this data by visiting each video page and manually copying the stats

const videoMetadata = {
    '3UJ6QvY29Kc': {
        title: 'This is How the Economy Collapses.',
        views: '113102',
        likes: '3634',
        comments: '67',
        url: 'https://youtu.be/3UJ6QvY29Kc'
    },
    'I6aNI19NCxw': {
        title: 'The Course of History Just Changed...',
        views: '280812',
        likes: '6502',
        comments: '66',
        url: 'https://youtu.be/I6aNI19NCxw'
    },
    '_iMRs2vjaUk': {
        title: 'Bitcoin is Going to Shock Everyone in 3 Months.',
        views: '118655',
        likes: '4176',
        comments: '326',
        url: 'https://youtu.be/_iMRs2vjaUk'
    },
    'YXFvwJQBzJc': {
        title: 'A Once in a Lifetime Economic Reset is Coming.',
        views: '2593974',
        likes: '56368',
        comments: '627',
        url: 'https://youtu.be/YXFvwJQBzJc'
    }
};

// Format number with K/M suffix
function formatNumber(num) {
    const number = parseInt(num);
    if (number >= 1000000) {
        return (number / 1000000).toFixed(1) + 'M';
    }
    if (number >= 1000) {
        return (number / 1000).toFixed(1) + 'K';
    }
    return number.toString();
}

// Format time in MM:SS format
function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}

// Load metadata into cards
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.playbook-card');

    cards.forEach(card => {
        const videoId = card.dataset.videoId;
        const metadata = videoMetadata[videoId];

        if (metadata) {
            // Update title
            const titleEl = card.querySelector('.playbook-title');
            if (titleEl) titleEl.textContent = metadata.title;

            // Update stats
            const stats = card.querySelector('.playbook-stats');
            if (stats) {
                stats.innerHTML = `
                    <span class="stat-item"><i class="fas fa-eye"></i> ${formatNumber(metadata.views)}</span>
                    <span class="stat-item"><i class="fas fa-thumbs-up"></i> ${formatNumber(metadata.likes)}</span>
                    <span class="stat-item"><i class="fas fa-comment"></i> ${formatNumber(metadata.comments)}</span>
                `;
            }

            // Make title and stats clickable to open YouTube video
            const clickableElements = [titleEl, stats];
            clickableElements.forEach(el => {
                if (el) {
                    el.style.cursor = 'pointer';
                    el.addEventListener('click', (e) => {
                        // Don't interfere with iframe
                        e.stopPropagation();
                        window.open(metadata.url, '_blank');
                    });

                    // Add hover feedback
                    el.addEventListener('mouseenter', () => {
                        if (el === titleEl) {
                            el.style.color = 'var(--green-primary)';
                        }
                    });

                    el.addEventListener('mouseleave', () => {
                        if (el === titleEl) {
                            el.style.color = '';
                        }
                    });
                }
            });
        }
    });
});
