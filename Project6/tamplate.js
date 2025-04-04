// Template Data
const templates = [
    {
        id: 1,
        title: "Minimalis Portofolio",
        description: "Clean and professional template perfect for corporate websites.",
        category: "portofolio",
        image: "misel.jpg",
        link: "index.html"
    },
    {
        id: 2,
        title: "Creative Portfolio",
        description: "Showcase your work with this stylish portfolio template.",
        category: "bisnis",
        image: "bmw.jpg",
        link: "templates/template2.html"
    },
    {
        id: 3,
        title: "Minimal Blog",
        description: "Elegant template designed for bloggers and writers.",
        category: "blog",
        image: "stokim.jpg",
        link: "templates/template3.html"
    },
    {
        id: 4,
        title: "E-Commerce",
        description: "Feature-rich template for online stores and shops.",
        category: "business",
        image: "ramen.jpg",
        link: "templates/template4.html"
    },
    {
        id: 5,
        title: "Photography",
        description: "Beautiful template to display your photography work.",
        category: "portfolio",
        image: "nex.jpg",
        link: "templates/template5.html"
    },
    {
        id: 6,
        title: "Personal Resume",
        description: "Professional template to showcase your skills and experience.",
        category: "portfolio",
        image: "images/template6-preview.jpg",
        link: "templates/template6.html"
    }
];

// DOM Elements
const galleryContainer = document.querySelector('.template-gallery');
const filterButtons = document.querySelectorAll('.filter-btn');

// Display Templates
function displayTemplates(templatesToDisplay) {
    galleryContainer.innerHTML = '';
    
    templatesToDisplay.forEach(template => {
        const templateElement = document.createElement('div');
        templateElement.classList.add('template-item');
        templateElement.setAttribute('data-category', template.category);
        
        templateElement.innerHTML = `
            <div class="template-img">
                <img src="${template.image}" alt="${template.title}">
                <div class="template-overlay">
                    <a href="${template.link}">View Template</a>
                </div>
            </div>
            <div class="template-info">
                <h3>${template.title}</h3>
                <p>${template.description}</p>
                <span class="template-tag">${template.category}</span>
            </div>
        `;
        
        galleryContainer.appendChild(templateElement);
    });
}

// Filter Templates
function filterTemplates(category) {
    if (category === 'all') {
        displayTemplates(templates);
        return;
    }
    
    const filteredTemplates = templates.filter(template => template.category === category);
    displayTemplates(filteredTemplates);
}

// Event Listeners
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Update active button
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        // Filter templates
        const filterValue = button.getAttribute('data-filter');
        filterTemplates(filterValue);
    });
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    displayTemplates(templates);
});