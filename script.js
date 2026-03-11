const peopleData = {
    "nelien-tila-on": {
        name: "Nelien Tila-on",
        role: "Operations Manager",
        about: "Operations Manager dedicated to delivering high-quality service through strategic oversight and client management."
    }
};

const allClients = [
    { name: "Abacus Service Corporation", status: "Active", industry: "RPO / Recruitment", location: "USA", setup: "Hybrid", contacts: "Sam Akunuri, April Szlaga, Naveen Moturi", overview: "Global staffing and workforce solutions company providing recruiting, consulting, and outsourcing services." },
    { name: "Ace Displays", status: "Active", industry: "Marketing", location: "N/A", setup: "Work From Office", contacts: "N/A", overview: "No overview provided." },
    { name: "ACMB", status: "Active", industry: "N/A", location: "N/A", setup: "Work From Office", contacts: "N/A", overview: "No overview provided." },
    { name: "AED Philippines", status: "Active", industry: "N/A", location: "N/A", setup: "Work From Office", contacts: "N/A", overview: "No overview provided." },
    { name: "Airthings", status: "Active", industry: "N/A", location: "N/A", setup: "Work From Office", contacts: "N/A", overview: "No overview provided." },
    { name: "Altice", status: "Active", industry: "Telecommunications", location: "N/A", setup: "Work From Office", contacts: "N/A", overview: "No overview provided." },
    { name: "Arabian Establishment for Trade and Shipping", status: "Active", industry: "Logistics", location: "Saudi Arabia", setup: "Work From Office", contacts: "N/A", overview: "No overview provided." },
    { name: "Besix", status: "Active", industry: "Construction", location: "Belgium", setup: "Work From Office", contacts: "N/A", overview: "No overview provided." },
    { name: "Bigo", status: "Active", industry: "Technology", location: "Singapore", setup: "Work From Office", contacts: "N/A", overview: "No overview provided." },
    { name: "Bramble", status: "Active", industry: "Education", location: "UK", setup: "Work From Office", contacts: "N/A", overview: "No overview provided." },
    { name: "Bundled Management", status: "Active", industry: "Construction", location: "USA", setup: "Work From Office", contacts: "Brandon Arnold, Shawnell Corn, Arben Fetahi", overview: "Real estate and property management company for residential communities and HOAs." },
    { name: "CATO", status: "Active", industry: "Logistics", location: "Australia", setup: "Work From Office", contacts: "Kieran Cato, Anna Rosa", overview: "Production support and traffic management for film, TV, and events." },
    { name: "Cleveland Kitchen", status: "Active", industry: "Food & Beverage", location: "USA", setup: "Work From Office", contacts: "Sam Buddenbaum, Dareen Buck, Min Chung, Ben Vandertill", overview: "Culinary brand specializing in fresh, fermented, gut-healthy foods." },
    { name: "CloudTech24", status: "Active", industry: "IT Services", location: "UK", setup: "Work From Office", contacts: "N/A", overview: "Managed IT services and cybersecurity." },
    { name: "Dangerous Goods Network", status: "Active", industry: "Logistics", location: "Australia", setup: "Work From Office", contacts: "N/A", overview: "Specialized logistics for hazardous materials." },
    { name: "DE VETTER", status: "Active", industry: "N/A", location: "Belgium", setup: "Work From Office", contacts: "N/A", overview: "No overview provided." },
    { name: "Deliberate Capital", status: "Active", industry: "Finance", location: "USA", setup: "Work From Office", contacts: "N/A", overview: "Investment and capital management." },
    { name: "DocuSketch", status: "Active", industry: "Tech / Real Estate", location: "USA", setup: "Work From Office", contacts: "N/A", overview: "3D documentation and sketching for restoration and real estate." },
    { name: "El Connect", status: "Active", industry: "RPO / Recruitment", location: "Singapore", setup: "Work From Office", contacts: "Mike Chow, Esther Yee Shu Qi", overview: "Workforce technology and job-matching platform." },
    { name: "S3", status: "Active", industry: "Staffing", location: "USA", setup: "Hybrid", contacts: "Sipin Sidharthan", overview: "Strategic Staffing Solutions (S3) is an international IT staffing and business services firm." },
    { name: "WorldView LTD", status: "Active", industry: "Healthcare", location: "USA", setup: "Work From Home", contacts: "Nicholas Lena, Jennifer Strachan", overview: "Document management and workflow automation for healthcare." },
    { name: "BAS", status: "Active", industry: "Financial Services", location: "Belgium", setup: "Work From Office", contacts: "N/A", overview: "BAS Services provides F&A staff extension." },
    { name: "River Cruise", status: "Active", industry: "Cruise", location: "Canada", setup: "Work From Office", contacts: "Surya Pillai", overview: "Marketing support for river cruise services." },
    { name: "ACSS", status: "Inactive", industry: "N/A", location: "N/A", setup: "N/A", contacts: "N/A", overview: "Currently Archived." },
    { name: "Action Property Management", status: "Inactive", industry: "Real Estate", location: "USA", setup: "WFH", contacts: "Kelsey Weisenberger", overview: "Currently Archived." },
    { name: "Agile Analytics", status: "Inactive", industry: "N/A", location: "N/A", setup: "N/A", contacts: "N/A", overview: "Currently Archived." },
    { name: "Amber Group", status: "Inactive", industry: "Crypto/Finance", location: "N/A", setup: "N/A", contacts: "N/A", overview: "Currently Archived." }
];

function performSearch() {
    const searchInput = document.getElementById('searchInput');
    const query = searchInput.value.toLowerCase().trim();
    const modal = document.getElementById('errorModal');
    
    if (query === "profile" || query === "nelien-tila-on" || query === "nelien tila-on") {
        window.location.href = `profile.html?user=nelien-tila-on`;
    } else if (query === "clients" || query === "portfolio" || query === "all") {
        window.location.href = `clients.html`;
    } else if (query !== "") {
        modal.style.display = "block";
    }
}


const modal = document.getElementById('errorModal');
const closeBtn = document.querySelector('.close-btn');

if (closeBtn) {
    closeBtn.onclick = () => modal.style.display = "none";
}


window.onclick = (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

if (document.getElementById('searchBtn')) {
    const searchBtn = document.getElementById('searchBtn');
    const searchInput = document.getElementById('searchInput');
    
    searchBtn.onclick = performSearch;
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
}

if (window.location.pathname.includes('clients.html')) {
    const listContainer = document.getElementById('fullClientList');
    if (listContainer) {
        listContainer.innerHTML = ''; 

        allClients.sort((a, b) => a.name.localeCompare(b.name)).forEach(client => {
            const detailElement = document.createElement('details');
            detailElement.className = `client-dropdown ${client.status.toLowerCase()}`;
            
            detailElement.innerHTML = `
                <summary>
                    <span class="c-name">${client.name}</span>
                    <span class="c-status-label">${client.status}</span>
                </summary>
                <div class="c-content">
                    <p><strong>Industry:</strong> ${client.industry}</p>
                    <p><strong>Location:</strong> ${client.location}</p>
                    <p><strong>Work Setup:</strong> ${client.setup}</p>
                    <p><strong>Contacts:</strong> ${client.contacts}</p>
                    <p><strong>Overview:</strong> ${client.overview}</p>
                </div>
            `;
            listContainer.appendChild(detailElement);
        });
    }
}

