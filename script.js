// Fathom Analytics Clone - Fonctionnalités Interactives

// Données simulées pour la démo
const mockData = {
    users: 5468,
    revenue: 60000,
    growth: Math.floor(Math.random() * 30) + 10,
    chartData: Array.from({length: 12}, () => Math.floor(Math.random() * 100) + 50)
};

// Initialisation au chargement de la page
document.addEventListener('DOMContentLoaded', function() {
    initializeDashboard();
    initializeChart();
    startRealtimeUpdates();
});

// Initialisation du dashboard
function initializeDashboard() {
    updateStats();
    console.log('Dashboard Fathom Analytics Clone initialisé');
}

// Mise à jour des statistiques
function updateStats() {
    const usersElement = document.getElementById('users-count');
    const revenueElement = document.getElementById('revenue-count');
    const growthElement = document.getElementById('growth-count');
    
    if (usersElement) {
        animateValue(usersElement, 0, mockData.users, 2000);
    }
    
    if (revenueElement) {
        revenueElement.textContent = '€' + (mockData.revenue / 1000).toFixed(0) + 'k';
    }
    
    if (growthElement) {
        growthElement.textContent = '+' + mockData.growth + '%';
    }
}

// Animation des valeurs numériques
function animateValue(element, start, end, duration) {
    const startTime = performance.now();
    
    function animate(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        const current = Math.floor(start + (end - start) * progress);
        element.textContent = current.toLocaleString();
        
        if (progress < 1) {
            requestAnimationFrame(animate);
        }
    }
    
    requestAnimationFrame(animate);
}

// Initialisation du graphique
function initializeChart() {
    const ctx = document.getElementById('analyticsChart');
    if (!ctx) return;
    
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Jun', 'Jul', 'Aoû', 'Sep', 'Oct', 'Nov', 'Déc'],
            datasets: [{
                label: 'Progression mensuelle',
                data: mockData.chartData,
                borderColor: '#4f46e5',
                backgroundColor: 'rgba(79, 70, 229, 0.1)',
                borderWidth: 3,
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(0,0,0,0.1)'
                    }
                },
                x: {
                    grid: {
                        display: false
                    }
                }
            }
        }
    });
}

// Mises à jour en temps réel simulées
function startRealtimeUpdates() {
    setInterval(() => {
        // Simulation de nouvelles données
        mockData.users += Math.floor(Math.random() * 10) - 5;
        mockData.growth = Math.floor(Math.random() * 30) + 10;
        
        // Mise à jour subtile des stats
        const usersElement = document.getElementById('users-count');
        const growthElement = document.getElementById('growth-count');
        
        if (usersElement) {
            usersElement.textContent = mockData.users.toLocaleString();
        }
        
        if (growthElement) {
            growthElement.textContent = '+' + mockData.growth + '%';
        }
    }, 30000); // Mise à jour toutes les 30 secondes
}

// Fonctions d'interaction
function startTrial() {
    alert('Démarrage de l\'essai gratuit pour Fathom Analytics Clone!\n\nFonctionnalités incluses:\nTracking simple\nTableaux de bord\nRapports en temps réel\nAPI REST');
    
    // Simulation d'inscription
    const email = prompt('Entrez votre email pour commencer:');
    if (email) {
        console.log('Nouvel utilisateur inscrit:', email);
        showNotification('Essai gratuit activé! Bienvenue sur Fathom Analytics Clone.');
    }
}

function showDemo() {
    showNotification('Démo Fathom Analytics Clone en cours...');
    
    // Animation de démonstration
    document.querySelector('.dashboard-container').style.animation = 'pulse 2s ease-in-out';
    
    setTimeout(() => {
        document.querySelector('.dashboard-container').style.animation = '';
    }, 2000);
}

function subscribe() {
    const confirmation = confirm('S\'abonner au plan Pro pour €14/mois?\n\nInclut:\nTracking simple\nTableaux de bord\nRapports en temps réel\nAPI REST');
    
    if (confirmation) {
        showNotification('Redirection vers le paiement sécurisé...');
        console.log('Abonnement initié pour Fathom Analytics Clone');
    }
}

// Système de notifications
function showNotification(message) {
    // Création de la notification
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #4f46e5;
        color: white;
        padding: 1rem 2rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        z-index: 10000;
        animation: slideIn 0.3s ease-out;
    `;
    
    document.body.appendChild(notification);
    
    // Suppression automatique après 3 secondes
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-in';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Styles d'animation pour les notifications
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
    
    @keyframes pulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.02); }
    }
`;
document.head.appendChild(style);

// Analytics simulés
window.analytics = {
    track: function(event, data) {
        console.log('Analytics tracked:', event, data);
    },
    
    page: function(page) {
        console.log('Page view:', page);
    }
};

// Tracking automatique
analytics.page('Fathom Analytics Clone Homepage');
analytics.track('Page Loaded', {
    saas: 'Fathom Analytics',
    features: ["Tracking simple","Tableaux de bord","Rapports en temps réel","API REST"]
});