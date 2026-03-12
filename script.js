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
        empWorkLocation: "PH - SFS",
        empWorkSetup: "Hybrid",
        clientLocation: "USA - United States of America",
        industry: "RPO / Recruitment", 
        primaryContact: "Sam Akunuri, April Szlaga, Naveen Moturi",
        primaryEmail: "sam@abacusservice.com, april@abacusservice.com, naveen@abacusservice.com",
        secondaryContact: "-", 
        secondaryEmail: "-", 
        website: "https://abacusservice.com/",
        overview: "Abacus Service Corporation is a global staffing and workforce solutions company that provides recruiting, consulting, and outsourcing services to organizations across multiple industries. The company focuses on helping businesses find skilled professionals for contract, project-based, and permanent roles.",
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
        empWorkLocation: "PH - SFS",
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
        empWorkLocation: "PH - SFS",
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
        empWorkLocation: "PH - SFS",
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
        empWorkLocation: "PH - SFS",
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
        empWorkLocation: "PH - SFS",
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
        positionTitle: "Customer Care Officer", 
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
        empWorkLocation: "PH - FLT / EBSI",
        empWorkSetup: "Work From Home",
        clientLocation: "USA - United States of America",
        industry: "Healthcare", 
        primaryContact: "Nicholas Lena, Jennifer Strachan",
        primaryEmail: "n.lena@livtech.com, jennifer.strachan@livtech.com",
        secondaryContact: "-", secondaryEmail: "-", 
        website: "https://www.worldviewltd.com/",
        overview: "WorldView Ltd is a U.S.‑based technology company that provides document management, workflow automation, and enterprise content solutions designed to help businesses streamline processes, reduce manual tasks, and improve operational efficiency. Their software is used especially by healthcare, home care, and service‑oriented organizations to automate document intake, handling, and data workflows.",
        tools: "-", purpose: "-", positionTitle: "-", positionOverview: "-"
    },
    {
        name: "BAS", 
        status: "Active", 
        entityName: "BAS Services",
        serviceLocation: "Morocco",
        evServiceModel: "Staff Extension",
        program: ["F&A"],
        businessPartner: "Abdelhak Bouroubaya",
        accountDirector: "Koen Verbergt",
        accountExecutive: "-", 
        empWorkLocation: "Work From Office",
        empWorkSetup: "Work From Office",
        clientLocation: "BEL - Belgium",
        industry: "Financial Services", 
        primaryContact: "-",
        primaryEmail: "-",
        secondaryContact: "-", secondaryEmail: "-", 
        website: "https://en.bas-services.eu/",
        overview: "Providing financial and accounting staff extension services based in Morocco for Belgian operations.",
        tools: "-", purpose: "-", positionTitle: "-", positionOverview: "-"
    },
    {
        name: "Hobbyking", 
        status: "Active", 
        entityName: "Hextronik Ltd.",
        serviceLocation: "Philippines",
        evServiceModel: "Managed Services",
        program: ["Customer Service"],
        businessPartner: "Adrian Jay Gomez",
        accountDirector: "Sipin Sidharthan",
        accountExecutive: "Mark Casumpang", 
        empWorkLocation: "Work From Home",
        empWorkSetup: "Work From Home",
        clientLocation: "HKG - Hong Kong",
        industry: "Retail / E-Commerce", 
        primaryContact: "Ivan Chen",
        primaryEmail: "ivan.chen@hobbyking.com",
        secondaryContact: "-", secondaryEmail: "-", 
        website: "https://hobbyking.com/",
        overview: "A leading global e-commerce retailer specializing in radio control (RC) products and accessories.",
        tools: "-", purpose: "-", positionTitle: "-", positionOverview: "-"
    },
    {
        name: "Kindred Bravely", 
        status: "Active", 
        entityName: "Akerson Enterprises LLC, dba Kindred Bravely",
        serviceLocation: "Philippines/India",
        evServiceModel: "Staffing Solutions",
        program: ["Customer Service", "F&A", "Software Development", "Business Support"],
        businessPartner: "Adrian Jay Gomez",
        accountDirector: "Sipin Sidharthan",
        accountExecutive: "Joeri Timp", 
        empWorkLocation: "Work From Home",
        empWorkSetup: "Work From Home",
        clientLocation: "USA - United States of America",
        industry: "Healthcare / Apparel", 
        primaryContact: "Erin Nelson, Brooklyn Green",
        primaryEmail: "erin@kindredbravely.com",
        secondaryContact: "-", secondaryEmail: "-", 
        website: "https://www.kindredbravely.com/",
        overview: "Specializes in high-quality maternity and nursing apparel designed for comfort and functionality.",
        tools: "-", purpose: "-", positionTitle: "-", positionOverview: "-"
    },
    {
        name: "Magic", 
        status: "Active", 
        entityName: "Magic Inc.",
        serviceLocation: "Philippines",
        evServiceModel: "Staffing Solutions",
        program: ["Customer Service", "Business Support", "F&A", "RPO", "Software Development"],
        businessPartner: "Adrian Jay Gomez",
        accountDirector: "Joeri Timp",
        accountExecutive: "Joeri Timp", 
        empWorkLocation: "Work From Home",
        empWorkSetup: "Work From Home",
        clientLocation: "USA - United States of America",
        industry: "Virtual Assistant Services", 
        primaryContact: "Amber Cauchi",
        primaryEmail: "amber@pluslabs.org, amber@getmagicnow.com",
        secondaryContact: "-", secondaryEmail: "-", 
        website: "https://getmagic.com/",
        overview: "Provides on-demand virtual assistant services to help businesses and individuals scale operations.",
        tools: "-", purpose: "-", positionTitle: "-", positionOverview: "-"
    },
    {
        name: "CloudTech24", 
        status: "Active", 
        entityName: "Global Technical Solutions Ltd.",
        serviceLocation: "Philippines/Morocco",
        evServiceModel: "Staff Extension",
        program: ["IT Operations"],
        businessPartner: "Ana Martela Dujunco",
        accountDirector: "Sipin Sidharthan",
        accountExecutive: "Rachna Gaba", 
        empWorkLocation: "Hybrid",
        empWorkSetup: "Hybrid",
        clientLocation: "GBR - United Kingdom",
        industry: "Technology - IT Services", 
        primaryContact: "Craig Bird, Rob Brewer, Dan Kent",
        primaryEmail: "craig@cloudtech24.com, rbrewer@cloudtech24.com",
        secondaryContact: "-", secondaryEmail: "-", 
        website: "https://cloudtech24.com/",
        overview: "An award-winning Managed Service Provider (MSP) delivering IT support and cybersecurity services.",
        tools: "-", purpose: "-", positionTitle: "-", positionOverview: "-"
    },
    {
        name: "Ethan Group", 
        status: "Active", 
        entityName: "ETHAN GROUP PTY LTD",
        serviceLocation: "Philippines/India",
        evServiceModel: "Staff Extension",
        program: ["IT Operations", "Business Support"],
        businessPartner: "Ana Martela Dujunco",
        accountDirector: "Sipin Sidharthan",
        accountExecutive: "Mark Casumpang", 
        empWorkLocation: "Hybrid",
        empWorkSetup: "Hybrid",
        clientLocation: "AUS - Australia",
        industry: "Technology - IT Services", 
        primaryContact: "Gail Collins, Mike Parry",
        primaryEmail: "Gail.Collins@ethan.com.au, mike.parry@ethan.com.au",
        secondaryContact: "Rahoul Das", secondaryEmail: "Rahoul.das@ethan.com.au", 
        website: "https://ethan.global/",
        overview: "Australian-owned IT services company providing technology solutions and infrastructure management.",
        tools: "-", purpose: "-", positionTitle: "-", positionOverview: "-"
    },
    {
        name: "AED Philippines", 
        status: "Active", 
        entityName: "AED Medical Supplies",
        serviceLocation: "Philippines",
        evServiceModel: "Staffing Solutions",
        program: ["Customer Service"],
        businessPartner: "Ana Martela Dujunco",
        accountDirector: "Sipin Sidharthan",
        accountExecutive: "Mark Casumpang", 
        empWorkLocation: "Work From Home",
        empWorkSetup: "Work From Home",
        clientLocation: "PHL - Philippines",
        industry: "Healthcare", 
        primaryContact: "Jasper van den Borne",
        primaryEmail: "jasper@aedphilippines.com",
        secondaryContact: "-", secondaryEmail: "-", 
        website: "https://aedphilippines.com/",
        overview: "A supplier of medical equipment and emergency response products like Automated External Defibrillators (AED) in the Philippines.",
        tools: "-", purpose: "-", positionTitle: "-", positionOverview: "-"
    },
    {
        name: "Arabian Establishment", 
        status: "Active", 
        entityName: "Arabian Est. for Trade & Shipping Co. Ltd",
        serviceLocation: "Philippines",
        evServiceModel: "Staffing Solutions",
        program: ["Customer Service"],
        businessPartner: "Ana Martela Dujunco",
        accountDirector: "Sipin Sidharthan",
        accountExecutive: "NA", 
        empWorkLocation: "Work From Home",
        empWorkSetup: "Work From Home",
        clientLocation: "SAU - Saudi Arabia",
        industry: "Logistics", 
        primaryContact: "Hamed Silim",
        primaryEmail: "hamed@aetshipping.com",
        secondaryContact: "Hope Javellana", secondaryEmail: "hope@aetshipping.com", 
        website: "https://aetshipping.com/",
        overview: "One of the oldest and most prominent shipping and trading companies in Saudi Arabia, specializing in logistics and marine services.",
        tools: "-", purpose: "-", positionTitle: "-", positionOverview: "-"
    },
    {
        name: "Espresso Displays", 
        status: "Active", 
        entityName: "espresso displays pty ltd",
        serviceLocation: "Philippines",
        evServiceModel: "Staffing Solutions",
        program: ["Customer Service"],
        businessPartner: "Ana Martela Dujunco",
        accountDirector: "Sipin Sidharthan",
        accountExecutive: "Rachna Gaba", 
        empWorkLocation: "Work From Home",
        empWorkSetup: "Work From Home",
        clientLocation: "AUS - Australia",
        industry: "Manufacturing", 
        primaryContact: "Martin Portelo",
        primaryEmail: "Martin@espres.so",
        secondaryContact: "Gary Caldarola", secondaryEmail: "gary@espres.so", 
        website: "https://go.espres.so/",
        overview: "Creates the world's thinnest portable monitors, designed for productivity and creative professionals on the go.",
        tools: "-", purpose: "-", positionTitle: "-", positionOverview: "-"
    },
    {
        name: "Maze Map", 
        status: "Active", 
        entityName: "MazeMap AS",
        serviceLocation: "Philippines",
        evServiceModel: "Managed Services",
        program: ["Customer Service"],
        businessPartner: "Ana Martela Dujunco",
        accountDirector: "Sipin Sidharthan",
        accountExecutive: "Mark Casumpang", 
        empWorkLocation: "Work From Home",
        empWorkSetup: "Work From Home",
        clientLocation: "NOR - Norway",
        industry: "Technology - Software", 
        primaryContact: "Benjamin Malchus",
        primaryEmail: "benjamin.malchus@mazemap.com",
        secondaryContact: "Egon Loset", secondaryEmail: "egon.loset@mazemap.com", 
        website: "https://www.mazemap.com/",
        overview: "A digital wayfinding platform for large indoor spaces like universities and hospitals, providing seamless indoor-outdoor navigation.",
        tools: "-", purpose: "-", positionTitle: "-", positionOverview: "-"
    },
    {
        name: "Network Intelligence", 
        status: "Active", 
        entityName: "Network Intelligence Private Limited",
        serviceLocation: "Philippines",
        evServiceModel: "Staff Extension",
        program: ["Business Support"],
        businessPartner: "Ana Martela Dujunco",
        accountDirector: "Sipin Sidharthan",
        accountExecutive: "Rachna Gaba", 
        empWorkLocation: "Hybrid",
        empWorkSetup: "Hybrid",
        clientLocation: "IND - India",
        industry: "Technology - Cybersecurity", 
        primaryContact: "Vivek Shivram",
        primaryEmail: "vivek.shivram@networkintelligence.ai",
        secondaryContact: "-", secondaryEmail: "-", 
        website: "https://www.niiconsulting.com/",
        overview: "A global cybersecurity services provider offering assessment, advisory, and managed security services.",
        tools: "-", purpose: "-", positionTitle: "-", positionOverview: "-"
    },
    {
        name: "Altice", 
        status: "Active", 
        entityName: "Altice USA, Inc",
        serviceLocation: "India, Philippines",
        evServiceModel: "Managed Services",
        program: ["Business Support"],
        businessPartner: "Anirudha Bhimrao Mahajan",
        accountDirector: "Kamal Asarpota",
        accountExecutive: "Joeri (+ Koen)", 
        empWorkLocation: "India / Philippines",
        empWorkSetup: "Work From Office",
        clientLocation: "USA - United States of America (the)",
        industry: "Telecommunications", 
        primaryContact: "Amol Dhurandhar, Meriem Robbana, Adam Sinovsky, Kyle Famiglietti",
        primaryEmail: "amol.dhurandhar@AlticeUSA.com, Meriem.Robbana@AlticeUSA.com, suzanne.theofield@alticeusa.com",
        secondaryContact: "Joanne Joy De Guzman", 
        secondaryEmail: "joannejoy.deguzman@Optimum.com, tyreke.daniels@optimum.com, viviana.medina@optimum.com", 
        website: "https://www.alticeusa.com/",
        overview: "Altice USA is one of the largest broadband communications and video services providers in the United States, delivering broadband, video, mobile, proprietary content, and advertising services.",
        tools: "-", purpose: "-", positionTitle: "-", positionOverview: "-"
    },
    {
        name: "Ace Displays", 
        status: "Active", 
        entityName: "Ace Exhibits, Inc.",
        serviceLocation: "Philippines",
        evServiceModel: "Managed Services",
        program: ["Business Support"],
        businessPartner: "Glenda Felio",
        accountDirector: "Sipin Sidharthan",
        accountExecutive: "Joeri Timp", 
        empWorkLocation: "PH - SFS / One EV",
        empWorkSetup: "Hybrid",
        clientLocation: "USA - United States of America",
        industry: "Marketing", 
        primaryContact: "Dale Bryson",
        primaryEmail: "dbryson@acedisplays.com",
        secondaryContact: "-", secondaryEmail: "-", 
        website: "https://www.acedisplays.com/",
        overview: "Ace Exhibits is a premier provider of trade show displays and exhibits, offering high-quality display hardware and custom-printed graphics.",
        tools: "-", purpose: "-", positionTitle: "-", positionOverview: "-"
    },
    {
        name: "Expleo Solutions Limited", 
        status: "Active", 
        entityName: "Expleo Solutions Limited (formerly SQS India BFSI)",
        serviceLocation: "Philippines",
        evServiceModel: "Staffing Solutions",
        program: ["Software Development", "Business Support", "Customer Service"],
        businessPartner: "Glenda Felio",
        accountDirector: "Sipin Sidharthan",
        accountExecutive: "Joeri Timp", 
        empWorkLocation: "PH - FLT / EBSI",
        empWorkSetup: "Hybrid",
        clientLocation: "IND - India",
        industry: "Professional Services", 
        primaryContact: "Manokaran Thangavel, Kazelin Pua",
        primaryEmail: "monokaran.thangavel@expleogroup.com, kazelinh.pua@expleogroup.com",
        secondaryContact: "Anupranjan Sabat", 
        secondaryEmail: "Anupranjan.Sabat@expleogroup.com", 
        website: "https://expleo.com/global/en/",
        overview: "Expleo is a global engineering, technology, and consulting service provider that partners with organizations to guide them through digital transformation.",
        tools: "-", purpose: "-", positionTitle: "-", positionOverview: "-"
    },
    {
        name: "FEI Systems", 
        status: "Active", 
        entityName: "FEI.COM, Inc. dba FEI Systems",
        serviceLocation: "Philippines",
        evServiceModel: "Staffing Solutions",
        program: ["Software Development"],
        businessPartner: "Glenda Felio",
        accountDirector: "Sipin Sidharthan",
        accountExecutive: "Joeri Timp", 
        empWorkLocation: "PH - FLT / EBSI",
        empWorkSetup: "Work From Home",
        clientLocation: "USA - United States of America",
        industry: "Healthcare", 
        primaryContact: "Stephen Evans, Anne Moore",
        primaryEmail: "stephen.evans@feisystems.com, ann.moore@feisystems.com",
        secondaryContact: "Vaishali Devani", 
        secondaryEmail: "vaishali.devani@feisystems.com", 
        website: "https://feisystems.com/",
        overview: "FEI Systems is a leading provider of health information technology solutions, specializing in systems for federal, state, and local government agencies.",
        tools: "-", purpose: "-", positionTitle: "-", positionOverview: "-"
    },
    {
        name: "Riverstreamz", 
        status: "Active", 
        entityName: "Riverstreamz",
        serviceLocation: "Philippines",
        evServiceModel: "Staffing Solutions",
        program: ["F&A"],
        businessPartner: "Glenda Felio",
        accountDirector: "Sipin Sidharthan",
        accountExecutive: "Rachna Gaba", 
        empWorkLocation: "PH - FLT / EBSI",
        empWorkSetup: "Work From Home",
        clientLocation: "USA - United States of America",
        industry: "Virtual Assistant", 
        primaryContact: "Richard Sootkoos",
        primaryEmail: "rich@riverstreamz.com",
        secondaryContact: "-", secondaryEmail: "-", 
        website: "https://riverstreamz.com/",
        overview: "Riverstreamz provides specialized virtual assistant and professional support services tailored for US-based businesses.",
        tools: "-", purpose: "-", positionTitle: "-", positionOverview: "-"
    },
    {
        name: "Solutions30", 
        status: "Active", 
        entityName: "Solutions 30 SE",
        serviceLocation: "Philippines, India",
        evServiceModel: "Staff Extension",
        program: ["Software Development"],
        businessPartner: "Glenda Felio",
        accountDirector: "Koen Verbergt",
        accountExecutive: "Mark Casumpang", 
        empWorkLocation: "PH - FLT / EBSI",
        empWorkSetup: "Hybrid",
        clientLocation: "BEL - Belgium",
        industry: "Telecommunications", 
        primaryContact: "Sacha Vandewalle",
        primaryEmail: "sacha.vandewalle@solutions30.com",
        secondaryContact: "-", secondaryEmail: "-", 
        website: "https://www.solutions30.com/",
        overview: "Solutions30 is the European leader in solutions for new technologies, providing support for digital transformation in the telecom and energy sectors.",
        tools: "-", purpose: "-", positionTitle: "-", positionOverview: "-"
    },
    {
        name: "Workforge", 
        status: "Active", 
        entityName: "Valor Education Group",
        serviceLocation: "Philippines",
        evServiceModel: "Staff Extension",
        program: ["Business Support"],
        businessPartner: "Glenda Felio",
        accountDirector: "Sipin Sidharthan",
        accountExecutive: "Joeri Timp", 
        empWorkLocation: "PH - FLT / EBSI",
        empWorkSetup: "Work From Home",
        clientLocation: "USA - United States of America",
        industry: "Education", 
        primaryContact: "Cory Archer",
        primaryEmail: "cory.archer@workforge.com",
        secondaryContact: "Lily Gibbens, Tanner Miller, Alex Cihak", 
        secondaryEmail: "lily.gibbens@workforge.com, tanner.miller@workforge.com, alex.cihak@workforge.com", 
        website: "https://workforge.com/",
        overview: "Workforge specializes in workforce development and training solutions, partnering with education groups to enhance career readiness.",
        tools: "-", purpose: "-", positionTitle: "-", positionOverview: "-"
    },
    {
        name: "Prompto", 
        status: "Active", 
        entityName: "Prompto NV",
        serviceLocation: "Morocco",
        evServiceModel: "Managed Services",
        program: ["Business Support"],
        businessPartner: "Hajar EL ALAOUI",
        accountDirector: "Sipin Sidharthan",
        accountExecutive: "-", 
        empWorkLocation: "Morocco",
        empWorkSetup: "-",
        clientLocation: "BEL - Belgium",
        industry: "Technology / Business Services", 
        primaryContact: "-",
        primaryEmail: "-",
        secondaryContact: "-", secondaryEmail: "-", 
        website: "-",
        overview: "Prompto provides managed business support services, leveraging talent from Morocco to support operations in Belgium.",
        tools: "-", purpose: "-", positionTitle: "-", positionOverview: "-"
    },
    {
        name: "Unit T", 
        status: "Active", 
        entityName: "Unit - T BV",
        serviceLocation: "Morocco",
        evServiceModel: "Managed Services",
        program: ["Customer Service"],
        businessPartner: "Hajar EL ALAOUI",
        accountDirector: "Sipin Sidharthan",
        accountExecutive: "Koen Verbergt", 
        empWorkLocation: "Morocco",
        empWorkSetup: "Work From Office",
        clientLocation: "BEL - Belgium",
        industry: "Maintenance", 
        primaryContact: "Nadia Jespers",
        primaryEmail: "nadia.jespers@unit-t.eu",
        secondaryContact: "De Greyt Dorien", 
        secondaryEmail: "dorien.degreyt@unit-t.eu", 
        website: "https://www.unit-t.eu",
        overview: "Unit-T specializes in field services and customer solutions, focusing on technical maintenance and support for the Belgian market.",
        tools: "-", purpose: "-", positionTitle: "-", positionOverview: "-"
    },
    {
        name: "Airthings", 
        status: "Active", 
        entityName: "Airthings",
        serviceLocation: "Philippines",
        evServiceModel: "Managed Services",
        program: ["Customer Service"],
        businessPartner: "Jonas Soria",
        accountDirector: "Sipin Sidharthan",
        accountExecutive: "Mark Casumpang", 
        empWorkLocation: "PH - SFS / One EV",
        empWorkSetup: "Hybrid",
        clientLocation: "NOR - Norway",
        industry: "Consumer Goods", 
        primaryContact: "Pierre-Loic Laizet",
        primaryEmail: "pierre.laizet@airthings.com",
        secondaryContact: "-", secondaryEmail: "-", 
        website: "https://www.airthings.com/",
        overview: "Airthings is a global tech company that produces indoor air quality monitors and radon detectors for consumers and businesses.",
        tools: "-", purpose: "-", positionTitle: "-", positionOverview: "-"
    },
    {
        name: "Earth Optics", 
        status: "Active", 
        entityName: "Earth Optics",
        serviceLocation: "Philippines",
        evServiceModel: "Managed Services",
        program: ["Business Support"],
        businessPartner: "Jonas Soria",
        accountDirector: "Sipin Sidharthan",
        accountExecutive: "Koen Verbergt", 
        empWorkLocation: "PH - SFS / One EV",
        empWorkSetup: "Hybrid",
        clientLocation: "USA - United States of America (the)",
        industry: "Science - Environment", 
        primaryContact: "Sara Quattlebaum",
        primaryEmail: "sara.quattlebaum@earthoptics.com",
        secondaryContact: "Bea Arendt, Kelly Thomson", 
        secondaryEmail: "bea.arendt@earthoptics.com, kelly.thomson@earthoptics.com", 
        website: "https://earthoptics.com/",
        overview: "EarthOptics uses machine learning and ground-penetrating radar to create precise soil maps, helping farmers improve carbon sequestration.",
        tools: "-", purpose: "-", positionTitle: "-", positionOverview: "-"
    },
    {
        name: "Halcyon", 
        status: "Active", 
        entityName: "Halcyon",
        serviceLocation: "Philippines",
        evServiceModel: "Staff Extension",
        program: ["IT Operations"],
        businessPartner: "Jonas Soria",
        accountDirector: "Sipin Sidharthan",
        accountExecutive: "Sipin Sidharthan", 
        empWorkLocation: "Philippines",
        empWorkSetup: "-",
        clientLocation: "GBR - United Kingdom",
        industry: "Technology - IT Services", 
        primaryContact: "James Hamilton",
        primaryEmail: "james@ithalcyon.co.uk",
        secondaryContact: "-", secondaryEmail: "-", 
        website: "-",
        overview: "Halcyon provides managed IT services and strategic technology consulting for businesses in the UK market.",
        tools: "-", purpose: "-", positionTitle: "-", positionOverview: "-"
    },
    {
        name: "Learnship", 
        status: "Active", 
        entityName: "Learnship USA Corporation",
        serviceLocation: "Philippines, Bulgaria",
        evServiceModel: "Staffing Solutions",
        program: ["Customer Service", "F&A"],
        businessPartner: "Jonas Soria",
        accountDirector: "Sipin Sidharthan",
        accountExecutive: "Joeri Timp", 
        empWorkLocation: "PH - FLT / EBSI",
        empWorkSetup: "Work From Home",
        clientLocation: "DEU - Germany",
        industry: "Education", 
        primaryContact: "Cecile Neuvens",
        primaryEmail: "Cecile.Neuvens@learnship.com",
        secondaryContact: "Jasmin Ashraf Zadeh", 
        secondaryEmail: "jasmin.ashrafzadeh@learnship.com", 
        website: "https://www.learnship.com/en/",
        overview: "Learnship is a global leader in premium online language learning and intercultural training for businesses.",
        tools: "-", purpose: "-", positionTitle: "-", positionOverview: "-"
    },
    {
        name: "Optimy", 
        status: "Active", 
        entityName: "Optimy",
        serviceLocation: "Philippines",
        evServiceModel: "Staff Extension",
        program: ["Software Development"],
        businessPartner: "Jonas Soria",
        accountDirector: "Sipin Sidharthan",
        accountExecutive: "Mark Casumpang", 
        empWorkLocation: "PH - FLT / EBSI",
        empWorkSetup: "Work From Home",
        clientLocation: "BEL - Belgium",
        industry: "Technology - Software", 
        primaryContact: "Nicolas Brasseur",
        primaryEmail: "nbrasseur@optimy.com",
        secondaryContact: "-", secondaryEmail: "-", 
        website: "https://www.optimy.com/",
        overview: "Optimy provides an all-in-one software solution for corporate social responsibility (CSR) and sponsorship management.",
        tools: "-", purpose: "-", positionTitle: "-", positionOverview: "-"
    },
    {
        name: "Pact Group", 
        status: "Active", 
        entityName: "Pact Group Industries",
        serviceLocation: "Philippines",
        evServiceModel: "Staff Extension",
        program: ["IT Operations"],
        businessPartner: "Jonas Soria",
        accountDirector: "Sipin Sidharthan",
        accountExecutive: "Mark Casumpang", 
        empWorkLocation: "PH - FLT / EBSI",
        empWorkSetup: "Work From Home",
        clientLocation: "AUS - Australia",
        industry: "Manufacturing", 
        primaryContact: "Stuart Kluge",
        primaryEmail: "stuart.kluge@pactgroup.com",
        secondaryContact: "Shirley Ferrier", 
        secondaryEmail: "shirley.ferrier@pactgroup.com", 
        website: "https://pactgroup.com/",
        overview: "Pact Group is a leading provider of sustainable packaging solutions and industrial manufacturing services in Australia.",
        tools: "-", purpose: "-", positionTitle: "-", positionOverview: "-"
    },
    {
        name: "Promosuns", 
        status: "Active", 
        entityName: "Promosuns",
        serviceLocation: "Philippines",
        evServiceModel: "Managed Services",
        program: ["Business Support"],
        businessPartner: "Jonas Soria",
        accountDirector: "Sipin Sidharthan",
        accountExecutive: "Mark Casumpang", 
        empWorkLocation: "PH - FLT / EBSI",
        empWorkSetup: "Work From Home",
        clientLocation: "USA - United States of America",
        industry: "Marketing", 
        primaryContact: "Jessica Suns",
        primaryEmail: "jessica@promosuns.com",
        secondaryContact: "-", secondaryEmail: "-", 
        website: "https://www.promosuns.com/",
        overview: "Promosuns is a full-service promotional marketing company providing custom branded products and marketing support.",
        tools: "-", purpose: "-", positionTitle: "-", positionOverview: "-"
    },
    {
        name: "TYN - Tyneso", 
        status: "Active", 
        entityName: "Tyneso NV",
        serviceLocation: "Philippines",
        evServiceModel: "Managed Services",
        program: ["IT Operations"],
        businessPartner: "Jonas Soria",
        accountDirector: "Sipin Sidharthan",
        accountExecutive: "Rachna Gaba", 
        empWorkLocation: "PH - FLT / EBSI, PH - SFS / One EV",
        empWorkSetup: "Work From Office",
        clientLocation: "BEL - Belgium",
        industry: "Technology - IT Services", 
        primaryContact: "Steven Lintermans",
        primaryEmail: "Steven.Lintermans@tyneso.com",
        secondaryContact: "Steven Tytgat (CEO)", 
        secondaryEmail: "steven.tytgat@tyneso.com", 
        website: "https://tyneso.com",
        overview: "Tyneso offers end-to-end IT infrastructure management and cybersecurity services for global organizations.",
        tools: "-", purpose: "-", positionTitle: "-", positionOverview: "-"
    },
    {
        name: "River Cruise", 
        status: "Active", 
        entityName: "River Cruise",
        serviceLocation: "Philippines",
        evServiceModel: "Staff Extension",
        program: ["Marketing"],
        businessPartner: "Jonas Soria",
        accountDirector: "Koen Verbergt",
        accountExecutive: "-", 
        empWorkLocation: "Work From Office",
        empWorkSetup: "Work From Office",
        clientLocation: "CAN - Canada",
        industry: "Cruise / Travel", 
        primaryContact: "Surya Pillai",
        primaryEmail: "suri@discountcoachtours.ca",
        secondaryContact: "-", secondaryEmail: "-", 
        website: "https://discountcoachtours.ca/",
        overview: "River Cruise specializes in luxury river cruise bookings and marketing services for the Canadian travel market.",
        tools: "-", purpose: "-", positionTitle: "-", positionOverview: "-"
    },
    {
        name: "DocuSketch", 
        status: "Active", 
        entityName: "45info GmbH",
        serviceLocation: "India",
        evServiceModel: "Staff Extension",
        program: ["Business Support"],
        businessPartner: "Kumareshan D",
        accountDirector: "Sipin Sidharthan",
        accountExecutive: "Rachna Gaba", 
        empWorkLocation: "India",
        empWorkSetup: "Work From Office",
        clientLocation: "DEU - Germany",
        industry: "Technology - Software", 
        primaryContact: "Cristina Berceanu",
        primaryEmail: "cristina@docusketch.com",
        secondaryContact: "Marina Moisienia", 
        secondaryEmail: "marina.moisienia@emplanner.team", 
        website: "https://docusketch.com/",
        overview: "DocuSketch is an all-in-one 3D documentation and sketching solution designed specifically for restoration, property inspection, and construction professionals.",
        tools: "-", purpose: "-", positionTitle: "-", positionOverview: "-"
    },
    {
        name: "SEG- Society of Exploration Geophysicists", 
        status: "Active", 
        entityName: "SEG Middle East",
        serviceLocation: "India",
        evServiceModel: "Staffing Solutions",
        program: ["Business Support"],
        businessPartner: "Kumareshan D",
        accountDirector: "Sipin Sidharthan",
        accountExecutive: "Rachna Gaba", 
        empWorkLocation: "PH - FLT / EBSI",
        empWorkSetup: "Work From Home",
        clientLocation: "USA - United States of America (the)",
        industry: "Science - Environment", 
        primaryContact: "Dave Parrott (Admissions Director)",
        primaryEmail: "ybhatia@seg.org",
        secondaryContact: "Subashini Jaganathan", 
        secondaryEmail: "sjaganathan@seg.org", 
        website: "https://seg.org/",
        overview: "SEG is a global not-for-profit organization with a mission of connecting the world of applied geophysics and supporting the professional development of geoscientists.",
        tools: "-", purpose: "-", positionTitle: "-", positionOverview: "-"
    },
    {
        name: "Uniquest", 
        status: "Active", 
        entityName: "Uni-Quest Ltd",
        serviceLocation: "India",
        evServiceModel: "Managed Services",
        program: ["Business Support", "Software Development"],
        businessPartner: "Kumareshan D",
        accountDirector: "Kamal Asarpota",
        accountExecutive: "Rachna Gaba", 
        empWorkLocation: "India",
        empWorkSetup: "Hybrid",
        clientLocation: "GBR - United Kingdom of Great Britain and Northern Ireland (the)",
        industry: "Education", 
        primaryContact: "James Sheppard, Dave Parrott",
        primaryEmail: "james@uni-quest.co.uk, dave.parrott@uni-quest.co.uk",
        secondaryContact: "Sarah Renwick", 
        secondaryEmail: "nick@uni-quest.co.uk, sarah.renwick@uni-quest.co.uk", 
        website: "https://www.uni-quest.co.uk/",
        overview: "Uni-Quest provides student engagement and conversion services for universities, helping them manage inquiries and improve student recruitment outcomes.",
        tools: "-", purpose: "-", positionTitle: "-", positionOverview: "-"
    },
    {
        name: "ACMB", 
        status: "Active", 
        entityName: "Qualeetys SRL",
        serviceLocation: "Morocco",
        evServiceModel: "Managed Services",
        program: ["F&A"],
        businessPartner: "Mohanraj MJ",
        accountDirector: "Sipin Sidharthan",
        accountExecutive: "Koen Verbergt", 
        empWorkLocation: "Morocco",
        empWorkSetup: "-",
        clientLocation: "BEL - Belgium",
        industry: "Professional Services", 
        primaryContact: "Thierry Kalala",
        primaryEmail: "Kalala.thierry@acmb.be",
        secondaryContact: "-", secondaryEmail: "-", 
        website: "-",
        overview: "ACMB (Qualeetys SRL) provides professional financial and accounting managed services out of Morocco.",
        tools: "-", purpose: "-", positionTitle: "-", positionOverview: "-"
    },
    {
        name: "DE VETTER", 
        status: "Active", 
        entityName: "Boekhoudkantoor De Vetter – Cabooter BV",
        serviceLocation: "Morocco",
        evServiceModel: "Managed Services",
        program: ["F&A"],
        businessPartner: "Mohanraj MJ",
        accountDirector: "Koen Verbergt",
        accountExecutive: "-", 
        empWorkLocation: "Morocco",
        empWorkSetup: "-",
        clientLocation: "BEL - Belgium",
        industry: "Financial Services", 
        primaryContact: "-", primaryEmail: "-",
        secondaryContact: "-", secondaryEmail: "-", 
        website: "http://devetter-cabooter.be/",
        overview: "A Belgium-based accounting firm specializing in financial services and bookkeeping.",
        tools: "-", purpose: "-", positionTitle: "-", positionOverview: "-"
    },
    {
        name: "Ethan Group", 
        status: "Active", 
        entityName: "ETHAN GROUP PTY LTD",
        serviceLocation: "Philippines",
        evServiceModel: "Staff Extension",
        program: ["F&A", "IT Operations", "Business Support"],
        businessPartner: "Mohanraj MJ",
        accountDirector: "Sipin Sidharthan",
        accountExecutive: "Mark Casumpang", 
        empWorkLocation: "Hybrid",
        empWorkSetup: "Hybrid",
        clientLocation: "AUS - Australia",
        industry: "Technology - IT Services", 
        primaryContact: "Gail Collins, Mike Parry, Dianne Cordin",
        primaryEmail: "Gail.Collins@ethan.com.au, mike.parry@ethan.com.au, dianne.cordin@ethan.com.au",
        secondaryContact: "Rahoul Das, Craig Noonan", 
        secondaryEmail: "Rahoul.das@ethan.com.au, Craig.noonan@ethan.com.au", 
        website: "https://ethan.global/",
        overview: "Australian-owned IT services company providing comprehensive technology and financial support solutions.",
        tools: "-", purpose: "-", positionTitle: "-", positionOverview: "-"
    },
    {
        name: "FBMB", 
        status: "Active", 
        entityName: "F.B.M.B. BV",
        serviceLocation: "Morocco",
        evServiceModel: "Managed Services",
        program: ["F&A"],
        businessPartner: "Mohanraj MJ",
        accountDirector: "Koen Verbergt",
        accountExecutive: "Meriam", 
        empWorkLocation: "Morocco",
        empWorkSetup: "-",
        clientLocation: "BEL - Belgium",
        industry: "Financial Services", 
        primaryContact: "-", primaryEmail: "-",
        secondaryContact: "-", secondaryEmail: "-", 
        website: "-",
        overview: "Provides managed financial and accounting services for the Belgian market.",
        tools: "-", purpose: "-", positionTitle: "-", positionOverview: "-"
    },
    {
        name: "Finexpert", 
        status: "Active", 
        entityName: "Finexpert BV",
        serviceLocation: "Morocco",
        evServiceModel: "Managed Services",
        program: ["F&A"],
        businessPartner: "Mohanraj MJ",
        accountDirector: "Koen Verbergt",
        accountExecutive: "Meriam", 
        empWorkLocation: "Morocco",
        empWorkSetup: "Work From Office",
        clientLocation: "BEL - Belgium",
        industry: "Financial Services", 
        primaryContact: "-", primaryEmail: "-",
        secondaryContact: "-", secondaryEmail: "-", 
        website: "https://www.rabofin.be/",
        overview: "Specialized accounting and financial expertise firm supporting Belgian businesses.",
        tools: "-", purpose: "-", positionTitle: "-", positionOverview: "-"
    },
    {
        name: "GGR Recycling", 
        status: "Active", 
        entityName: "GGR SA",
        serviceLocation: "Morocco",
        evServiceModel: "Managed Services",
        program: ["F&A"],
        businessPartner: "Mohanraj MJ",
        accountDirector: "Sipin Sidharthan",
        accountExecutive: "Koen Verbergt", 
        empWorkLocation: "Morocco",
        empWorkSetup: "Work From Office",
        clientLocation: "MAR - Morocco",
        industry: "Utilities & Environment", 
        primaryContact: "Guillaume",
        primaryEmail: "guillaume@groupggr.com",
        secondaryContact: "-", secondaryEmail: "-", 
        website: "-",
        overview: "A leading recycling and environmental utility service provider based in Morocco.",
        tools: "-", purpose: "-", positionTitle: "-", positionOverview: "-"
    },
    {
        name: "GKW", 
        status: "Active", 
        entityName: "GKW BV",
        serviceLocation: "Morocco",
        evServiceModel: "Managed Services",
        program: ["F&A"],
        businessPartner: "Mohanraj MJ",
        accountDirector: "Sipin Sidharthan",
        accountExecutive: "Joeri Timp", 
        empWorkLocation: "Morocco",
        empWorkSetup: "Work From Office",
        clientLocation: "BEL - Belgium",
        industry: "Financial Services", 
        primaryContact: "Marco Bielen",
        primaryEmail: "marco.bielen@gkw.be",
        secondaryContact: "Seher Koca", 
        secondaryEmail: "seher.koca@gkw.be", 
        website: "http://www.gkw.be",
        overview: "Belgium-based financial services firm specializing in accounting and advisory.",
        tools: "-", purpose: "-", positionTitle: "-", positionOverview: "-"
    },
    {
        name: "Paradigm", 
        status: "Active", 
        entityName: "Paradigm Senior Services Inc / Paradigm Health Technology",
        serviceLocation: "Philippines, India",
        evServiceModel: "Managed Services",
        program: ["F&A"],
        businessPartner: "Mohanraj MJ",
        accountDirector: "Sipin Sidharthan",
        accountExecutive: "Koen Verbergt", 
        empWorkLocation: "PH / India",
        empWorkSetup: "-",
        clientLocation: "USA - United States of America",
        industry: "Healthcare", 
        primaryContact: "-", primaryEmail: "-",
        secondaryContact: "-", secondaryEmail: "-", 
        website: "-",
        overview: "Provides healthcare-focused financial and technology managed services for senior care facilities in the USA.",
        tools: "-", purpose: "-", positionTitle: "-", positionOverview: "-"
    },
    {
        name: "Polytra", 
        status: "Active", 
        entityName: "Polytra Africa SSC",
        serviceLocation: "India",
        evServiceModel: "Managed Services",
        program: ["F&A"],
        businessPartner: "Mohanraj MJ",
        accountDirector: "Sipin Sidharthan",
        accountExecutive: "Koen Verbergt", 
        empWorkLocation: "India",
        empWorkSetup: "Work From Office",
        clientLocation: "BEL - Belgium",
        industry: "Logistics", 
        primaryContact: "Nawfal Mungroo",
        primaryEmail: "nmungroo@polytra.be",
        secondaryContact: "Jerome Reip", 
        secondaryEmail: "jreip@polytra.be", 
        website: "https://polytra.be/",
        overview: "A global logistics and transportation company specializing in African supply chain solutions.",
        tools: "-", purpose: "-", positionTitle: "-", positionOverview: "-"
    },
    {
        name: "Spot Buy Center", 
        status: "Active", 
        entityName: "Spot Buy Center",
        serviceLocation: "India",
        evServiceModel: "Managed Services",
        program: ["F&A"],
        businessPartner: "Mohanraj MJ",
        accountDirector: "Sipin Sidharthan",
        accountExecutive: "Mark Casumpang", 
        empWorkLocation: "India",
        empWorkSetup: "Work From Home",
        clientLocation: "BEL - Belgium",
        industry: "Technology - Software", 
        primaryContact: "Philippe Vanloock",
        primaryEmail: "philippe.vanloock@spotbuycenter.com",
        secondaryContact: "Ben Van Den Buijis", 
        secondaryEmail: "ben.vandenbuijs@spotbuycenter.com", 
        website: "https://www.spotbuycenter.com/",
        overview: "Provides digital procurement solutions and indirect spend management software.",
        tools: "-", purpose: "-", positionTitle: "-", positionOverview: "-"
    },
    {
        name: "Terra Construct", 
        status: "Active", 
        entityName: "TERRA CONSTRUCT MGMY LLC",
        serviceLocation: "Philippines, Morocco",
        evServiceModel: "Managed Services",
        program: ["F&A"],
        businessPartner: "Mohanraj MJ",
        accountDirector: "Sipin Sidharthan",
        accountExecutive: "Rachna Gaba", 
        empWorkLocation: "PH - SFS / One EV, PH - FLT / EBSI, Morocco",
        empWorkSetup: "-",
        clientLocation: "ROU - Romania",
        industry: "Construction", 
        primaryContact: "-", primaryEmail: "-",
        secondaryContact: "-", secondaryEmail: "-", 
        website: "-",
        overview: "A construction management firm operating across Romania with shared service support in the Philippines and Morocco.",
        tools: "-", purpose: "-", positionTitle: "-", positionOverview: "-"
    },
    {
        name: "Besix", 
        status: "Active", 
        entityName: "N.V. BESIX S.A.",
        serviceLocation: "Philippines",
        evServiceModel: "Staff Extension",
        program: ["Software Development"],
        businessPartner: "Paulene Magnaye",
        accountDirector: "Sipin Sidharthan",
        accountExecutive: "Joeri (+ Koen)", 
        empWorkLocation: "PH - FLT / EBSI",
        empWorkSetup: "Hybrid",
        clientLocation: "BEL - Belgium",
        industry: "Construction", 
        primaryContact: "Werner Godaert",
        primaryEmail: "werner.godaert@besix.com",
        secondaryContact: "Jonathan Harford", 
        secondaryEmail: "jonathan.harford@besix.com", 
        website: "https://www.besix.com/",
        overview: "BESIX is a leading Belgian group, operating in the construction, property development, and concessions sectors worldwide.",
        tools: "-", purpose: "-", positionTitle: "-", positionOverview: "-"
    },
    {
        name: "Bigo", 
        status: "Active", 
        entityName: "NETSTAR (SG) PTE. LTD.",
        serviceLocation: "Philippines",
        evServiceModel: "Staffing Solutions",
        program: ["Business Support", "Marketing"],
        businessPartner: "Paulene Magnaye",
        accountDirector: "Sipin Sidharthan",
        accountExecutive: "NA", 
        empWorkLocation: "PH - FLT / EBSI",
        empWorkSetup: "Work From Home",
        clientLocation: "SGP - Singapore",
        industry: "Entertainment", 
        primaryContact: "Suly",
        primaryEmail: "zhuangyanbing@bigo.sg",
        secondaryContact: "Carmen Wu", 
        secondaryEmail: "wujiawen.carmen@bigo.sg", 
        website: "https://bigo.sg/",
        overview: "Bigo is a fast-growing Singapore technology company that owns popular social media platforms like Bigo Live and Likee.",
        tools: "-", purpose: "-", positionTitle: "-", positionOverview: "-"
    },
    {
        name: "Dangerous Goods Network", 
        status: "Active", 
        entityName: "Dangerous Goods Network Pty Ltd",
        serviceLocation: "Philippines",
        evServiceModel: "Managed Services",
        program: ["Customer Service"],
        businessPartner: "Paulene Magnaye",
        accountDirector: "Sipin Sidharthan",
        accountExecutive: "Mark Casumpang", 
        empWorkLocation: "PH - FLT / EBSI",
        empWorkSetup: "Work From Home",
        clientLocation: "AUS - Australia",
        industry: "Logistics", 
        primaryContact: "Andrew Hahn",
        primaryEmail: "andrew.hahn@marair.com.au",
        secondaryContact: "Philip Kwok", 
        secondaryEmail: "philip@marair.com.au", 
        website: "https://dgnetwork.com.au/",
        overview: "Specializes in the safe transport and logistics management of hazardous materials and dangerous goods.",
        tools: "-", purpose: "-", positionTitle: "-", positionOverview: "-"
    },
    {
        name: "Deliberate Capital", 
        status: "Active", 
        entityName: "Deliberate Capital",
        serviceLocation: "Philippines",
        evServiceModel: "Staffing Solutions",
        program: ["F&A"],
        businessPartner: "Paulene Magnaye",
        accountDirector: "Sipin Sidharthan",
        accountExecutive: "Mark Casumpang", 
        empWorkLocation: "PH - FLT / EBSI",
        empWorkSetup: "Work From Home",
        clientLocation: "USA - United States of America",
        industry: "Financial Services", 
        primaryContact: "Dale Galvin",
        primaryEmail: "dgalvin@meloyfund.com",
        secondaryContact: "-", secondaryEmail: "-", 
        website: "https://www.deliberatecapital.com/",
        overview: "An investment management firm focused on sustainable and impact-driven financial strategies.",
        tools: "-", purpose: "-", positionTitle: "-", positionOverview: "-"
    },
    {
        name: "Modibodi", 
        status: "Active", 
        entityName: "Modibodi Pty Ltd",
        serviceLocation: "Philippines",
        evServiceModel: "Managed Services",
        program: ["Customer Service"],
        businessPartner: "Paulene Magnaye",
        accountDirector: "Sipin Sidharthan",
        accountExecutive: "Mark Casumpang", 
        empWorkLocation: "PH - FLT / EBSI",
        empWorkSetup: "Work From Home",
        clientLocation: "AUS - Australia",
        industry: "Retail / E-Commerce", 
        primaryContact: "Daniel Habashy",
        primaryEmail: "danielhabashy@modibodi.com",
        secondaryContact: "Demanie Castro", 
        secondaryEmail: "demaniecastro@modibodi.com", 
        website: "https://www.modibodi.com/",
        overview: "An innovative Australian brand specializing in leak-proof apparel and sustainable personal care products.",
        tools: "-", purpose: "-", positionTitle: "-", positionOverview: "-"
    },
    {
        name: "Razor Group", 
        status: "Active", 
        entityName: "Razor HQ GmBH & Co., KG",
        serviceLocation: "Philippines",
        evServiceModel: "Staff Extension",
        program: ["Business Support"],
        businessPartner: "Paulene Magnaye",
        accountDirector: "Sipin Sidharthan",
        accountExecutive: "Mark Casumpang", 
        empWorkLocation: "PH - FLT / EBSI",
        empWorkSetup: "Work From Home",
        clientLocation: "DEU - Germany",
        industry: "Retail / E-Commerce", 
        primaryContact: "Raja",
        primaryEmail: "rajalakshmi.venkatanarayanan@razor-group.com",
        secondaryContact: "Muskan", 
        secondaryEmail: "muskan.sharma@razor-group.com", 
        website: "https://stryze.com/en/",
        overview: "A global e-commerce aggregator that acquires and scales winning brands in the digital marketplace.",
        tools: "-", purpose: "-", positionTitle: "-", positionOverview: "-"
    },
    {
        name: "Techcorr", 
        status: "Active", 
        entityName: "TechCorr India Private Limited",
        serviceLocation: "Philippines",
        evServiceModel: "Staffing Solutions",
        program: ["Business Support"],
        businessPartner: "Paulene Magnaye",
        accountDirector: "Sipin Sidharthan",
        accountExecutive: "Rachna Gaba", 
        empWorkLocation: "PH - FLT / EBSI",
        empWorkSetup: "Work From Home",
        clientLocation: "USA - United States of America",
        industry: "Asset Management", 
        primaryContact: "Prakash Minch",
        primaryEmail: "pminch@techcorr.com, prakashminch@gmail.com",
        secondaryContact: "-", secondaryEmail: "-", 
        website: "https://www.techcorr.com/",
        overview: "Provides comprehensive inspection, testing, and asset integrity management services for global industries.",
        tools: "-", purpose: "-", positionTitle: "-", positionOverview: "-"
    },
    {
        name: "Uniquest (PH)", 
        status: "Active", 
        entityName: "Uni-Quest Ltd",
        serviceLocation: "Philippines",
        evServiceModel: "Managed Services",
        program: ["Customer Service", "Business Support"],
        businessPartner: "Sandy Guevarra",
        accountDirector: "Kamal Asarpota",
        accountExecutive: "Rachna Gaba", 
        empWorkLocation: "PH - SFS / One EV",
        empWorkSetup: "Hybrid",
        clientLocation: "GBR - United Kingdom of Great Britain and Northern Ireland (the)",
        industry: "Education", 
        primaryContact: "James Sheppard, Dave Parrott",
        primaryEmail: "james@uni-quest.co.uk, dave.parrott@uni-quest.co.uk",
        secondaryContact: "Nick, Sarah Renwick", 
        secondaryEmail: "nick@uni-quest.co.uk, sarah.renwick@uni-quest.co.uk", 
        website: "https://www.uni-quest.co.uk/",
        overview: "Uni-Quest provides student engagement and conversion services, helping higher education institutions worldwide to manage student inquiries and improve enrollment outcomes.",
        tools: "-", purpose: "-", positionTitle: "-", positionOverview: "-"
    },
    {
        name: "Bramble", 
        status: "Active", 
        entityName: "Bramble Group Corporation",
        serviceLocation: "Philippines",
        evServiceModel: "Staffing Solutions",
        program: ["Software Development"],
        businessPartner: "Vishnu Prakash Padmanabhan",
        accountDirector: "Sipin Sidharthan",
        accountExecutive: "NA", 
        empWorkLocation: "PH - FLT / EBSI",
        empWorkSetup: "Work From Home",
        clientLocation: "USA - United States of America (the)",
        industry: "Technology - IT Services", 
        primaryContact: "Daniel Wain",
        primaryEmail: "dan@brmbl.io",
        secondaryContact: "Glenn Roberts", 
        secondaryEmail: "glenn@brmbl.io", 
        website: "https://brmbl.io/",
        overview: "Bramble Group provides specialized IT services and technology solutions focused on digital innovation.",
        tools: "-", purpose: "-", positionTitle: "-", positionOverview: "-"
    },
    {
        name: "FORMS EXPRESS", 
        status: "Active", 
        entityName: "Forms Express PTY LTD",
        serviceLocation: "India",
        evServiceModel: "Staff Extension",
        program: ["Software Development"],
        businessPartner: "Vishnu Prakash Padmanabhan",
        accountDirector: "Sipin Sidharthan",
        accountExecutive: "Sipin Sidharthan", 
        empWorkLocation: "India",
        empWorkSetup: "-",
        clientLocation: "CAN - Canada",
        industry: "Technology - IT Services", 
        primaryContact: "Will Desormeau",
        primaryEmail: "will.desormeau@tagsoftwaregroup.com",
        secondaryContact: "-", secondaryEmail: "-", 
        website: "https://www.valsoftcorp.com/",
        overview: "A Canada-based technology group providing specialized software solutions and IT management services.",
        tools: "-", purpose: "-", positionTitle: "-", positionOverview: "-"
    },
    {
        name: "GK Software", 
        status: "Active", 
        entityName: "GK Software USA, Inc.",
        serviceLocation: "India",
        evServiceModel: "Staff Extension",
        program: ["Software Development"],
        businessPartner: "Vishnu Prakash Padmanabhan",
        accountDirector: "Sipin Sidharthan",
        accountExecutive: "Rachna Gaba", 
        empWorkLocation: "India",
        empWorkSetup: "Work From Home",
        clientLocation: "USA - United States of America (the)",
        industry: "Technology - IT Services", 
        primaryContact: "Thomas Schuetz",
        primaryEmail: "tschuetz@gk-software.com",
        secondaryContact: "Annette Maennel", 
        secondaryEmail: "amaennel@gk-software.com", 
        website: "https://www.gk-software.com/us/",
        overview: "A leading global provider of cloud solutions for the retail industry, specializing in point-of-sale and store operations software.",
        tools: "-", purpose: "-", positionTitle: "-", positionOverview: "-"
    },
    {
        name: "Lucrotec", 
        status: "Active", 
        entityName: "Lucrotec LLC",
        serviceLocation: "India",
        evServiceModel: "Managed Services",
        program: ["Software Development"],
        businessPartner: "Vishnu Prakash Padmanabhan",
        accountDirector: "Sipin Sidharthan",
        accountExecutive: "Sachin (+ Koen)", 
        empWorkLocation: "India",
        empWorkSetup: "Work From Office",
        clientLocation: "USA - United States of America (the)",
        industry: "Technology - Software", 
        primaryContact: "Rob Smith",
        primaryEmail: "rob.smith@lucrotec.com",
        secondaryContact: "Johnathan Rhoades", 
        secondaryEmail: "johnathan.rhoades@lucrotec.com", 
        website: "https://www.lucrotec.com/",
        overview: "Lucrotec specializes in IT infrastructure, software development, and specialized technology management services.",
        tools: "-", purpose: "-", positionTitle: "-", positionOverview: "-"
    },
    {
        name: "Paradigm (SD)", 
        status: "Active", 
        entityName: "Paradigm Senior Services Inc",
        serviceLocation: "India",
        evServiceModel: "Managed Services",
        program: ["Software Development"],
        businessPartner: "Vishnu Prakash Padmanabhan",
        accountDirector: "Sipin Sidharthan",
        accountExecutive: "Koen Verbergt", 
        empWorkLocation: "India",
        empWorkSetup: "-",
        clientLocation: "USA - United States of America (the)",
        industry: "Healthcare", 
        primaryContact: "-", primaryEmail: "-",
        secondaryContact: "-", secondaryEmail: "-", 
        website: "-",
        overview: "Focused on software development and technology solutions for the healthcare and senior care industry.",
        tools: "-", purpose: "-", positionTitle: "-", positionOverview: "-"
    },
    {
        name: "Spot Buy Center (Global)", 
        status: "Active", 
        entityName: "Spot Buy Center",
        serviceLocation: "Philippines, India",
        evServiceModel: "Staff Extension",
        program: ["Software Development"],
        businessPartner: "Vishnu Prakash Padmanabhan",
        accountDirector: "Sipin Sidharthan",
        accountExecutive: "Mark Casumpang", 
        empWorkLocation: "PH - FLT / EBSI, India",
        empWorkSetup: "Work From Home",
        clientLocation: "BEL - Belgium",
        industry: "Technology - Software", 
        primaryContact: "Philippe Vanloock",
        primaryEmail: "philippe.vanloock@spotbuycenter.com",
        secondaryContact: "Ben Van Den Buijis", 
        secondaryEmail: "ben.vandenbuijs@spotbuycenter.com", 
        website: "https://www.spotbuycenter.com/",
        overview: "A digital procurement platform provider helping companies manage indirect spend through innovative software.",
        tools: "-", purpose: "-", positionTitle: "-", positionOverview: "-"
    },
    {
        name: "ENECO", 
        status: "Active", 
        entityName: "Eneco Belgium NV",
        serviceLocation: "Morocco",
        evServiceModel: "Managed Services",
        program: ["Business Support"],
        businessPartner: "Yves Vanderlinden",
        accountDirector: "Koen Verbergt",
        accountExecutive: "Joeri Timp", 
        empWorkLocation: "Morocco",
        empWorkSetup: "-",
        clientLocation: "BEL - Belgium",
        industry: "Energy", 
        primaryContact: "-",
        primaryEmail: "-",
        secondaryContact: "-", secondaryEmail: "-", 
        website: "https://www.eneco.nl/en/about-us/",
        overview: "Eneco is a major Dutch sustainable energy company that specializes in renewable energy production and distribution across the Netherlands and Belgium.",
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
        


if (client.tools && client.purpose) {
    const tableBody = document.getElementById('tools-table-body');
    
    if (tableBody) {
        
        const toolsArray = client.tools.split('\n');
        const purposeArray = client.purpose.split('\n');

        tableBody.innerHTML = '';

        toolsArray.forEach((tool, index) => {
            if (tool.trim() !== "") {
                const row = document.createElement('tr');
                row.style.borderBottom = "1px solid rgba(255, 255, 255, 0.05)";

                const toolTd = document.createElement('td');
                toolTd.style.padding = "12px 10px";
                toolTd.style.verticalAlign = "top";
                toolTd.style.color = "#34d399";
                toolTd.style.fontWeight = "bold";
                toolTd.textContent = tool.replace('•', '').trim();

                const purposeTd = document.createElement('td');
                purposeTd.style.padding = "12px 10px";
                purposeTd.style.verticalAlign = "top";
                purposeTd.style.color = "#cbd5e1";
                purposeTd.style.lineHeight = "1.6";
                
                let pText = purposeArray[index] ? purposeArray[index].replace('•', '').trim() : "";
                purposeTd.textContent = pText;

                row.appendChild(toolTd);
                row.appendChild(purposeTd);
                tableBody.appendChild(row);
            }
        });
        }
        } else {
        document.getElementById('tools-table-body').innerHTML = '<tr><td colspan="2" style="padding:10px;">No data available</td></tr>';
        }

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
    const searchInput = document.getElementById('searchInput');
    const suggestionBox = document.getElementById('suggestionBox');
    const modal = document.getElementById('errorModal');
    
    if (!searchInput || !suggestionBox) return;

    const userData = searchInput.value.trim().toLowerCase();
    suggestionBox.innerHTML = "";

    
    const topButtonsDiv = document.createElement('div');
    topButtonsDiv.style.width = "100%";
    topButtonsDiv.style.display = "flex";
    topButtonsDiv.style.gap = "10px";
    topButtonsDiv.style.marginBottom = "15px";
    topButtonsDiv.style.justifyContent = "center";


    const bpBtn = document.createElement('button');
    bpBtn.innerText = "Business Partners";
    bpBtn.onclick = () => { smoothNavigate('business.html'); };

    
    topButtonsDiv.appendChild(bpBtn);
    suggestionBox.appendChild(topButtonsDiv); 

    let filteredResults = [];
    if (userData) {
        filteredResults = allClients.filter(client => {
            const nameMatch = client.name.toLowerCase().includes(userData);
            const programMatch = Array.isArray(client.program) 
                ? client.program.some(p => p.toLowerCase().includes(userData))
                : client.program.toLowerCase().includes(userData);
            return nameMatch || programMatch;
        });
    }

    if (userData && filteredResults.length > 0) {
        modal.style.display = "flex";
        modal.querySelector("h2").innerText = `Results for "${userData}"`;
        modal.querySelector("h2").style.color = "#10b981"; 
        modal.querySelector("p").innerText = "Matches found:";

        filteredResults.forEach(client => {
            createClientButton(client, suggestionBox);
        });
    } else if (userData && filteredResults.length === 0) {
        modal.style.display = "flex";
        modal.querySelector("h2").innerText = "No Match Found";
        modal.querySelector("h2").style.color = "#ef4444";
        modal.querySelector("p").innerText = "Try other keywords or check the list below:";
        
        allClients.forEach(client => {
            createClientButton(client, suggestionBox);
        });
    } else {
        modal.style.display = "flex";
        modal.querySelector("h2").innerText = "Suggestions";
        modal.querySelector("h2").style.color = "#f1f5f9";
        allClients.forEach(client => {
            createClientButton(client, suggestionBox);
        });
    }
}

function createClientButton(client, container) {
    const btn = document.createElement('button');
    const programDisplay = Array.isArray(client.program) ? client.program.join(", ") : client.program;
    
    btn.innerHTML = `<strong>${client.name}</strong><br><small style="opacity:0.7; font-size: 0.8rem;">${programDisplay}</small>`;
    btn.className = "suggestion-btn";
    btn.style.width = "100%";
    btn.style.textAlign = "left";
    btn.style.marginBottom = "8px";
    
    btn.onclick = () => {
        smoothNavigate(`clients.html?name=${encodeURIComponent(client.name)}`);
    };
    container.appendChild(btn);
}

function populateSuggestions() {
    const suggestionBox = document.getElementById('suggestionBox');
    if (!suggestionBox) return;

    suggestionBox.innerHTML = ""; 

    
    bpBtn.innerText = "Business Partners";
    bpBtn.onclick = () => { smoothNavigate('business.html'); };
    suggestionBox.appendChild(bpBtn);

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
const filterToggle = document.getElementById('filterToggle');
const filterMenu = document.getElementById('filterMenu');

if (filterToggle) {
    filterToggle.onclick = (e) => {
        e.stopPropagation();
        filterMenu.classList.toggle('active');
    };
}

document.addEventListener('click', () => {
    if (filterMenu) filterMenu.classList.remove('active');
});

function quickSearch(programName) {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.value = programName;
        performSearch(); 
    }
}
