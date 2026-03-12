const allClients = [
    { 
        name: "Abacus Service Corporation", 
        status: "Active", 
        entityName: "Abacus Service Corporation",
        serviceLocation: "Philippines",
        evServiceModel: "Staff Extension",
        program: ["RPO", "Business Support"],
        businessPartner: "Nelien Tila-on",
        accountDirector: "Sipin Sidharthan",
        accountExecutive: "NA", 
        empWorkLocation: "PH - SFS / One EV",
        empWorkSetup: "Hybrid",
        clientLocation: "USA - United States of America",
        industry: "RPO / Recruitment", 
        primaryContact: "Sam Akunuri, April Szlaga, Naveen Moturi",
        primaryEmail: "sam@abacusservice.com, april@abacusservice.com, naveen@abacusservice.com",
        secondaryContact: "-", 
        secondaryEmail: "-", 
        website: "https://abacusservice.com/",
        overview: "Abacus Service Corporation is a global staffing and workforce solutions company that provides recruiting, consulting, and outsourcing services to organizations across multiple industries.",
        tools: "-", purpose: "-", positionTitle: "-", positionOverview: "-"
    },
    { 
        name: "Bundled Management", 
        status: "Active", 
        entityName: "Kass Management Services, Inc.",
        serviceLocation: "Philippines",
        evServiceModel: "Staff Extension",
        program: ["F&A"],
        businessPartner: "Nelien Tila-on",
        accountDirector: "Sipin Sidharthan",
        accountExecutive: "Rachna Gaba", 
        empWorkLocation: "PH - SFS / One EV",
        empWorkSetup: "Work From Office",
        clientLocation: "USA - United States of America",
        industry: "Construction", 
        primaryContact: "Brandon Arnold",
        primaryEmail: "brandon@bundledmgmt.com",
        secondaryContact: "Shawnell Corn, Arben Fetahi", 
        secondaryEmail: "shawnell.corn@nestcorepartners.com, arben.fetahi@proinvestmgmt.com", 
        website: "https://www.bundledmgmt.com/",
        overview: "Bundled Management Solutions LLC (commonly called Bundled Management) is a U.S.-based real estate and property management company that provides operational and administrative services for residential communities, homeowner associations (HOAs), and real estate investors. The company focuses on delivering integrated property management services that combine leasing, maintenance, and financial management into a single platform.",
        tools: "-", purpose: "-", positionTitle: "-", positionOverview: "-"
    },
    { 
        name: "CATO", 
        status: "Active", 
        entityName: "CATO Logistics P/L",
        serviceLocation: "Philippines",
        evServiceModel: "Managed Services",
        program: ["Business Support"],
        businessPartner: "Nelien Tila-on",
        accountDirector: "Sipin Sidharthan",
        accountExecutive: "Rachna Gaba", 
        empWorkLocation: "PH - SFS / One EV",
        empWorkSetup: "Work From Office",
        clientLocation: "AUS - Australia",
        industry: "Logistics", 
        primaryContact: "Kieran Cato",
        primaryEmail: "kieran@catolocationservices.com.au",
        secondaryContact: "Anna Rosa", 
        secondaryEmail: "anna@catolocationservices.com.au", 
        website: "https://catolocationservices.com.au/",
        overview: "CATO Location Services is an Australia-based company that provides production support, traffic management, and safety services for the film, television, events, and construction industries. The company helps coordinate logistics, safety, and on-site operations for large productions, public events, and infrastructure projects.",
        tools: "-", purpose: "-", positionTitle: "-", positionOverview: "-"
    },
    { 
        name: "Cleveland Kitchen", 
        status: "Active", 
        entityName: "Cleveland Kitchen Co.",
        serviceLocation: "Philippines",
        evServiceModel: "Managed Services",
        program: ["Customer Service"],
        businessPartner: "Nelien Tila-on",
        accountDirector: "Sipin Sidharthan",
        accountExecutive: "Rachna Gaba", 
        empWorkLocation: "PH - SFS / One EV",
        empWorkSetup: "Work From Office",
        clientLocation: "USA - United States of America",
        industry: "Food & Beverage", 
        primaryContact: "Sam Buddenbaum, Dareen Buck, Min Chung, Ben Vandertill",
        primaryEmail: "sbuddenbaum@clevelandkraut.com, dbuck@clevelandkitchen.com, mchung@clevelandkraut.com, bvandertill@clevelandkitchen.com",
        secondaryContact: "-", secondaryEmail: "-", 
        website: "https://www.clevelandkitchen.com/",
        overview: "Cleveland Kitchen is an American culinary food brand that specializes in fresh, fermented foods designed to be flavorful, gut‑healthy, and versatile in everyday meals. The company makes products such as sauerkraut, kimchi, pickles, pickled vegetables, coleslaw, and sauces—all crafted through fermentation to deliver natural probiotics and bold taste.",
        tools: "-", purpose: "-", positionTitle: "-", positionOverview: "-"
    },
    { 
        name: "El Connect", 
        status: "Active", 
        entityName: "EL Connect Pte Ltd",
        serviceLocation: "Philippines",
        evServiceModel: "Managed Services",
        program: ["Customer Service"],
        businessPartner: "Nelien Tila-on",
        accountDirector: "Sipin Sidharthan",
        accountExecutive: "Rachna Gaba", 
        empWorkLocation: "PH - SFS / One EV",
        empWorkSetup: "Work From Office",
        clientLocation: "SGP - Singapore",
        industry: "RPO / Recruitment", 
        primaryContact: "Mike Chow",
        primaryEmail: "mike@elconnect.sg",
        secondaryContact: "Esther Yee Shu Qi", 
        secondaryEmail: "esther@elconnect.sg", 
        website: "https://elconnect.sg/",
        overview: "EL Connect Pte Ltd is a Singapore‑based workforce technology and job‑matching platform that connects job seekers with employers, particularly for part‑time, flexible, and casual work opportunities across industries.",
        tools: "-", purpose: "-", positionTitle: "-", positionOverview: "-"
    },
    { 
        name: "Henry Jackson Foundation", 
        status: "Active", 
        entityName: "The Henry M. Jackson Foundation",
        serviceLocation: "Philippines",
        evServiceModel: "Staffing Solutions",
        program: ["Business Support"],
        businessPartner: "Nelien Tila-on",
        accountDirector: "Sipin Sidharthan",
        accountExecutive: "Mark Casumpang", 
        empWorkLocation: "PH - FLT / EBSI",
        empWorkSetup: "Work From Home",
        clientLocation: "USA - United States of America",
        industry: "Healthcare", 
        primaryContact: "Mary Schmitz, Haoyu Qian, Teresita Prombuth",
        primaryEmail: "maschmitz@hivresearch.org, HQian@hivresearch.org, prombutht@hiv-th.org",
        secondaryContact: "Melissa Stewart", 
        secondaryEmail: "MStewart@hjf.org", 
        website: "https://www.hjf.org/",
        overview: "The Henry M. Jackson Foundation for the Advancement of Military Medicine (HJF) is a global nonprofit organization dedicated to advancing military medicine through scientific research, program and project management, and partnerships that improve health outcomes for members of the U.S. Armed Forces, veterans, their families, and civilian populations. It was established by an act of the U.S. Congress in 1983 and named in honor of U.S. Senator Henry M. “Scoop” Jackson, who sponsored the legislation authorizing its creation.",
        tools: "-", purpose: "-", positionTitle: "-", positionOverview: "-"
    },
    { 
        name: "Online Therapy Centre", 
        status: "Active", 
        entityName: "OTC Mental Health Services Inc.",
        serviceLocation: "Philippines",
        evServiceModel: "Managed Services",
        program: ["Business Support"],
        businessPartner: "Nelien Tila-on",
        accountDirector: "Sipin Sidharthan",
        accountExecutive: "Rachna Gaba", 
        empWorkLocation: "CAN - Canada",
        empWorkSetup: "Work From Home",
        clientLocation: "CAN - Canada",
        industry: "Healthcare", 
        primaryContact: "Laura Lord",
        primaryEmail: "laura.lord@onlinetherapycentre.com",
        secondaryContact: "-", secondaryEmail: "-", 
        website: "https://onlinetherapycentre.com/",
        overview: "Online Therapy Centre is a mental health services provider and therapy platform based in Ontario, Canada that offers online and in‑person psychological and psychiatric support to individuals, families, and groups. Its goal is to make quality mental health care accessible through modern virtual formats while also maintaining options for in‑person sessions.",
        tools: "-", purpose: "-", positionTitle: "-", positionOverview: "-"
    },
    { 
        name: "Speedie Waste", 
        status: "Active", 
        entityName: "Speedie Waste Pty Ltd",
        serviceLocation: "Philippines",
        evServiceModel: "Managed Services",
        program: ["Customer Service", "Business Support"],
        businessPartner: "Nelien Tila-on",
        accountDirector: "Sipin Sidharthan",
        accountExecutive: "Rachna Gaba", 
        empWorkLocation: "PH - SFS / One EV",
        empWorkSetup: "Work From Office",
        clientLocation: "AUS - Australia",
        industry: "Utilities & Environment", 
        primaryContact: "Jessica Barilla",
        primaryEmail: "jbarilla@speediewaste.com.au",
        secondaryContact: "Marie Dulce, Ashleigh Cooke, Rachael Walsh", 
        secondaryEmail: "mdulce@speediewaste.com.au, ashleigh@speediewaste.com.au, rwalsh@speediewaste.com.au", 
        website: "https://www.speediewaste.com.au/",
        overview: "Speedie Waste Australia Pty Ltd (commonly known as Speedie Waste & Recycle) is an established Australian waste management and recycling company that provides comprehensive, sustainable waste solutions to commercial, industrial, and domestic clients throughout Victoria, particularly around Melbourne. The business has a long family‑owned history and focuses on environmental responsibility and tailored waste services.",
        tools: "• Wastedge\n• 3CX\n• Outlook\n• Teams", 
        purpose: "• CRM/software used to manage bookings, reschedule services, bin replacements, and customer accounts.\n• Phone system for inbound and outbound calls with customers and the team.\n• Email tool for booking requests, service inquiries, and internal updates.\n• Internal coordination and communication with team members.", 
        positionTitle: "Customer Care / Support Officer", 
        positionOverview: "Our daily tasks include handling booking requests, rescheduling services, addressing customer concerns and inquiries, receiving and documenting complaints, and ensuring that these concerns are properly escalated to the appropriate team. We also arrange bin replacements, guide customers with their service requirements, and provide updates or information related to their bookings and services."
    },
    { 
        name: "TeamHealth", 
        status: "Active", 
        entityName: "AmeriTeam Services, LLC",
        serviceLocation: "Philippines",
        evServiceModel: "Staff Extension",
        program: ["Software Development"],
        businessPartner: "Nelien Tila-on",
        accountDirector: "Sipin Sidharthan",
        accountExecutive: "Mark Casumpang", 
        empWorkLocation: "PH - FLT / EBSI",
        empWorkSetup: "Hybrid",
        clientLocation: "USA - United States of America",
        industry: "Healthcare", 
        primaryContact: "Rebecca Myles, Brad Guilford, David Edwards",
        primaryEmail: "Rebecca_Myles@teamhealth.com, Brad_Guilford@teamhealth.com, david_edwards@teamhealth.com",
        secondaryContact: "Kim Chenault, Shristi Shrestha, Brian Fisher, Nicholas Karagiozis", 
        secondaryEmail: "Kim_Chenault@teamhealth.com, Shristi_Shrestha@teamhealth.com, Brian_Fisher@teamhealth.com, Nicholas_Karagiozis@teamhealth.com", 
        website: "https://www.teamhealth.com/",
        overview: "TeamHealth Holdings, Inc. (commonly known as TeamHealth) is a large U.S. healthcare services organization that provides outsourced clinical staffing, management, and physician practice services to hospitals, post‑acute care facilities, and other healthcare partners across the United States.",
        tools: "-", purpose: "-", positionTitle: "-", positionOverview: "-"
    },
    { 
        name: "Trafman Solutions", 
        status: "Active", 
        entityName: "Trafman Solutions PTY LTD",
        serviceLocation: "Philippines",
        evServiceModel: "Staff Extension",
        program: ["Business Support"],
        businessPartner: "Nelien Tila-on",
        accountDirector: "Sipin Sidharthan",
        accountExecutive: "Mark Casumpang", 
        empWorkLocation: "PH - FLT / EBSI",
        empWorkSetup: "Work From Home",
        clientLocation: "AUS - Australia",
        industry: "Logistics", 
        primaryContact: "Sheldon Smith, Dean Ramsay",
        primaryEmail: "sheldons@trafman.com.au (TMS), deanr@surveyms.com.au (SMS)",
        secondaryContact: "-", secondaryEmail: "-", 
        website: "https://trafman.com.au/",
        overview: "Trafman Solutions Pty Ltd (branded Trafman Solutions) is an Australian construction support and traffic management services provider that serves civil infrastructure, construction, and related projects with safety‑focused workforce and equipment solutions. It operates primarily across Victoria, South‑East Queensland, Northern New South Wales, and South Australia.",
        tools: "-", purpose: "-", positionTitle: "-", positionOverview: "-"
    },
    { 
        name: "Verifact", 
        status: "Active", 
        entityName: "Verifact Traffic Control",
        serviceLocation: "Philippines",
        evServiceModel: "Staff Extension",
        program: ["Business Support"],
        businessPartner: "Nelien Tila-on",
        accountDirector: "Sipin Sidharthan",
        accountExecutive: "Mark Casumpang", 
        empWorkLocation: "PH - FLT / EBSI",
        empWorkSetup: "Work From Home",
        clientLocation: "AUS - Australia",
        industry: "Logistics", 
        primaryContact: "Trevor Leggett",
        primaryEmail: "tleggett@avadatraffic.com.au",
        secondaryContact: "-", secondaryEmail: "-", 
        website: "https://www.verifact.com.au/",
        overview: "Verifact Group (commonly known simply as Verifact), is an Australian risk management, investigation, and business services firm with operations across Australia. The company has been active since 1990, offering a wide range of services that help organisations manage risk, investigate claims, and support operational safety and compliance",
        tools: "-", purpose: "-", positionTitle: "-", positionOverview: "-"
    },
    { 
        name: "WorldView LTD", 
        status: "Active", 
        entityName: "WorldView Services LLC",
        serviceLocation: "Philippines",
        evServiceModel: "Managed Services",
        program: ["Customer Service", "F&A", "Business Support", "Marketing"],
        businessPartner: "Nelien Tila-on",
        accountDirector: "Sipin Sidharthan",
        accountExecutive: "Mark Casumpang", 
        empWorkLocation: "Work From Home",
        empWorkSetup: "Work From Home",
        clientLocation: "USA - United States of America",
        industry: "Healthcare", 
        primaryContact: "Nicholas Lena, Jennifer Strachan",
        primaryEmail: "n.lena@livtech.com, jennifer.strachan@livtech.com",
        secondaryContact: "-", secondaryEmail: "-", 
        website: "https://www.worldviewltd.com/",
        overview: "WorldView Ltd is a U.S.‑based technology company that provides document management, workflow automation, and enterprise content solutions designed to help businesses streamline processes, reduce manual tasks, and improve operational efficiency. Their software is used especially by healthcare, home care, and service‑oriented organizations to automate document intake, handling, and data workflows.",
        tools: "-", purpose: "-", positionTitle: "-", positionOverview: "-"
    }
];

function populateLandingPage() {
    const params = new URLSearchParams(window.location.search);
    const nameFromUrl = params.get('name');
    
    if (!nameFromUrl) return;

    const client = allClients.find(c => c.name.toLowerCase() === nameFromUrl.toLowerCase());

    if (client) {
        const mapping = {
            'disp-accountName': client.name,
            'disp-status': client.status,
            'disp-entityName': client.entityName,
            'disp-serviceLocation': client.serviceLocation,
            'disp-evServiceModel': client.evServiceModel,
            'disp-program': client.program,
            'disp-businessPartner': client.businessPartner,
            'disp-accountDirector': client.accountDirector,
            'disp-accountExecutive': client.accountExecutive,
            'disp-empWorkLocation': client.empWorkLocation,
            'disp-empWorkSetup': client.empWorkSetup,
            'disp-clientLocation': client.clientLocation,
            'disp-clientIndustry': client.industry,
            'disp-primaryContact': client.primaryContact,
            'disp-primaryEmail': client.primaryEmail,
            'disp-secondaryContact': client.secondaryContact,
            'disp-secondaryEmail': client.secondaryEmail,
            'disp-overview': client.overview,
            'disp-tools': client.tools,
            'disp-purpose': client.purpose,
            'disp-positionTitle': client.positionTitle,
            'disp-positionOverview': client.positionOverview
        };

        for (let id in mapping) {
            const element = document.getElementById(id);
            if (element) {
                if (mapping[id] && mapping[id] !== "N/A") {
                    if (id === 'disp-primaryEmail' || id === 'disp-secondaryEmail') {
                        const emails = mapping[id].split(', ');
                        element.innerHTML = emails.map(email => 
                            email.trim() !== "-" ? `<a href="mailto:${email.trim()}" style="color: #34d399; display: block; margin-bottom: 5px; text-decoration: none;">${email.trim()}</a>` : "-"
                        ).join('');
                    } 
                    else if (id === 'disp-primaryContact' || id === 'disp-secondaryContact') {
                        element.innerHTML = mapping[id].split(', ').join('<br>');
                    }
                    else {
                        element.innerText = mapping[id];
                    }
                } else {
                    const itemContainer = element.closest('.info-item');
                    if (itemContainer) itemContainer.style.display = "none";
                }
            }
        }

        const webLink = document.getElementById('disp-website');
        if (webLink && client.website) {
            webLink.innerText = "Visit our website";
            webLink.href = client.website;
        }
    }
}

window.addEventListener('DOMContentLoaded', populateLandingPage);

function smoothNavigate(url) {
    document.body.classList.add('fade-out');
    setTimeout(() => {
        window.location.href = url;
    }, 300); 
}

function performSearch() {
    const input = document.getElementById('searchInput');
    if (!input) return;
    
    const query = input.value.trim().toLowerCase();

    if (query === 'profile') {
        smoothNavigate('profile.html');
        return;
    }

    const found = allClients.find(c => c.name.toLowerCase() === query);

    if (found) {
        smoothNavigate(`clients.html?name=${encodeURIComponent(found.name)}`);
    } else {
        const modal = document.getElementById('errorModal');
        if (modal) {
            modal.style.display = "block";
            populateSuggestions(); 
        }
    }
}

function populateSuggestions() {
    const suggestionBox = document.getElementById('suggestionBox');
    if (!suggestionBox) return;

    suggestionBox.innerHTML = ""; 

    const profileBtn = document.createElement('button');
    profileBtn.innerText = "Profile";
    profileBtn.className = "suggestion-btn profile-tag"; 
    profileBtn.onclick = () => { smoothNavigate('profile.html'); };
    suggestionBox.appendChild(profileBtn);

    allClients.forEach(client => {
        const btn = document.createElement('button');
        btn.innerText = client.name;
        btn.className = "suggestion-btn";
        
        btn.onclick = () => {
            smoothNavigate(`clients.html?name=${encodeURIComponent(client.name)}`);
        };
        
        suggestionBox.appendChild(btn);
    });
}

const modal = document.getElementById('errorModal');
const closeBtn = document.querySelector('.close-btn');
if (closeBtn) closeBtn.onclick = () => modal.style.display = "none";
window.onclick = (e) => { if (e.target == modal) modal.style.display = "none"; }

if (document.getElementById('searchBtn')) {
    document.getElementById('searchBtn').onclick = performSearch;
    document.getElementById('searchInput').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') performSearch();
    });
}
