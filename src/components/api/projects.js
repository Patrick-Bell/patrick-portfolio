import { DiReact, DiHtml5, DiCss3, DiJavascript1 } from "react-icons/di";
import { SiMui } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { DiRuby } from "react-icons/di";
import { SiRubyonrails } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { FaGithub, FaGit } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { SiPostgresql } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { SiHeroku } from "react-icons/si";
import { ImNpm } from "react-icons/im";
import { SiCloudinary } from "react-icons/si";
import { FaCcStripe } from "react-icons/fa6";
import { SiRender } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";




export const projects = [
    {
        id: 1,
        name: "Admin Dashboard",
        icon: 'project1.png',
        company: "Bandstand Merchandise Services LTD",
        sector: "Hospitality",
        tech: [
            { name: 'Ruby', icon: <DiRuby />, desc: 'Backend Language', color: '#CC0000' },
            { name: 'Rails', icon: <SiRubyonrails />, desc: 'Web Framework', color: '#CC0000' },
            { name: 'PostgreSQL', icon: <SiPostgresql />, desc: 'Relational Database', color: '#336791' },
            { name: 'React', icon: <DiReact />, desc: 'Frontend Framework', color: '#61DAFB' },
            { name: 'Material UI', icon: <SiMui />, desc: 'UI Framework', color: '#007FFF' },
        ],
        tools: [
            { name: 'VS Code', icon: <VscVscode />, desc: 'Code Editor', color: '#007ACC' },
            { name: 'Postman', icon: <SiPostman />, desc: 'API Testing', color: '#FF6C37' },
            { name: 'Git', icon: <FaGit />, desc: 'Version Control', color: '#F1502F' },
            { name: 'GitHub', icon: <FaGithub />, desc: 'Code Repository', color: '#181717' },
            { name: 'Heroku', icon: <SiHeroku />, desc: 'Deployment', color: '#430098' },
        ],
        desc: 'The Merchandise Admin Dashboard is a data-driven platform designed to streamline and centralise the monitoring of worker performance within the hospitality sector. Through comprehensive data tracking, the dashboard enables administrators to track key performance metrics, generate detailed reports, and make data-driven decisions to optimize workforce performance. The system focuses on providing an intuitive, user-friendly interface for team members to access and manage valuable information, ultimately improving operational efficiency.',
        features: [
            { name: 'Create, Edit & Delete Workers', desc: 'Manage workers within the system by creating, editing, and deleting their profiles.' },
            { name: 'Create, Edit & Delete Managers', desc: 'Allow the creation and management of Manager accounts to assign tasks and monitor worker performance.' },
            { name: 'Create, Edit, and Delete Events', desc: 'Manage event details by adding, editing, or deleting them to ensure the schedule is up to date.' },
            { name: 'Link Worker Performance Data to Relevant Events', desc: 'Link worker performance to specific events for better tracking and reporting.' },
            { name: 'User Authentication and Authorization', desc: 'Implement secure login, and provide different access levels based on user roles (RBAC).' },
            { name: 'Email Reminders and Push Notifications ', desc: 'Notify managers about upcoming/completed events through email and push notifications.' },
            { name: 'Generate and download PDF summaries', desc: 'Generate detailed reports in PDF format for event summaries, which can be customized based on user needs.' },
            { name: 'Track Worker Profiles', desc: 'Track the progress of each worker and monitor their performance, with an ability to generate performance reports.' },
            { name: 'Light/Dark Mode', desc: 'Offer a toggle option for users to switch between light and dark mode for a personalized user experience.' },
            { name: 'Mobile Responsive', desc: 'Ensure the platform is fully responsive and optimized for mobile devices, providing a smooth experience on any screen.' }
        ],
        challenges: [
              {
                "challenge": "Role-Based Access Control (RBAC) Implementation",
                "problem": "Ensuring that different levels of users had appropriate access levels, and making sure the system is flexible enough to meet different stakeholders' needs.",
                "howIOvercameIt": "I implemented a robust RBAC system using role identifiers, assigning permissions for different actions (view, edit, delete) based on the user's role. Each user’s permissions were dynamically adjusted based on their assigned role.",
                "outcome": "Successfully created a flexible and secure RBAC system, ensuring that the right users had the right level of access to the system's data. This maintained security and streamlined user experience."
              },
              {
                "challenge": "Making the Platform Smooth and Responsive",
                "problem": "Ensuring the platform was smooth, responsive, and user-friendly, especially on mobile devices, was challenging while maintaining performance.",
                "howIOvercameIt": "I used Material UI and ensured CSS media queries were optimized for mobile responsiveness. I also focused on minimizing the number of elements loaded at once, utilizing lazy loading and optimizing asset delivery.",
                "outcome": "The dashboard is fully responsive, with smooth transitions and no lag, offering a great user experience on both mobile and desktop devices."
              },
              {
                "challenge": "Keeping the Platform Inclusive with Notifications",
                "problem": "Ensuring managers are notified when games (tasks/events) are ready to be viewed, preventing missed tasks or delays in reviewing performance.",
                "howIOvercameIt": "I set up an automated email notification system using Action Mailer to alert managers whenever a game was completed and ready for review. Additionally, I included email reminders for upcoming events and task assignments.",
                "outcome": "The email system ensures that managers are kept up to date with real-time progress and task completion, improving communication and the platform's usability."
              }
            ],
        updates: [
            { name: "New Features", desc: "Implementing new features such as Time & Attendance Tracking, Hours Worked Calculations and more." },
            { name: "Performance", desc: "Working on refactoring more areas of code to increase performance and speed as the data increases." },
        ],
        results: [
            { name: "Boosted Profits", desc: "Strategically placing high-performing workers in high-demand areas, resulting in improved sales." },
            { name: "Improved Efficiency", desc: "An improvement in workers arriving on time to work, also increasing profits with more time to sell." },
        ],
        timeLine: "March 2023 - July 2023",
        screenshots: true,
        repoLink: "https://github.com/Patrick-Bell/cart-tracks", // Replace with your actual repo link
        demoLink: "https://cart-tracks.onrender.com/", // Add a link to a live demo if available
        feedback: [
            { name: 'Bruce', position: 'Director', review: 'The system works very well. It is extremely easy to use and I now have it used by other managers. It tracks all the data I need to make decisions.'}
        ],
        status: false,  
    },
    {
        id: 2,
        name: "Fiortech",
        icon: 'project3.png',
        company: "Fiortech Recruitment Group",
        sector: "Recruitment",
        tech: [
            { name: 'Ruby', icon: <DiRuby />, desc: 'Backend Language', color: '#CC0000' },
            { name: 'Rails', icon: <SiRubyonrails />, desc: 'Web Framework', color: '#CC0000' },
            { name: 'PostgreSQL', icon: <SiPostgresql />, desc: 'Relational Database', color: '#336791' },
            { name: 'React', icon: <DiReact />, desc: 'Frontend Framework', color: '#61DAFB' },
            { name: 'Material UI', icon: <SiMui />, desc: 'UI Framework', color: '#007FFF' },
        ],
        tools: [
            { name: 'VS Code', icon: <VscVscode />, desc: 'Code Editor', color: '#007ACC' },
            { name: 'Postman', icon: <SiPostman />, desc: 'API Testing', color: '#FF6C37' },
            { name: 'Git', icon: <FaGit />, desc: 'Version Control', color: '#F1502F' },
            { name: 'GitHub', icon: <FaGithub />, desc: 'Code Repository', color: '#181717' },
            { name: 'Heroku', icon: <SiHeroku />, desc: 'Deployment', color: '#430098' },
            { name: 'Cloudinary', icon: <SiCloudinary />, desc: 'Cloud-based Image & Video Management', color: '#3448C5' }
        ],
        desc: "Fiortech is a full-stack recruitment platform that allows users to explore job opportunities, apply for roles, and manage their job applications through an intuitive interface. For employers, the platform provides tools to post job listings, review applicants, and manage the hiring process. Built with modern technologies and a focus on scalability, Fiortech simplifies the recruitment process while ensuring a seamless experience for both candidates and employers.",
        features: [
            { name: "Create / Edit and Delete Jobs", desc: "Easily create, edit, and delete job listings to keep opportunities up to date." },
            { name: "Job Listings with Advanced Filtering", desc: "Users can search and filter job listings based on various criteria." },
            { name: "Browse and Apply for Jobs", desc: "Candidates can browse available job listings and apply directly through the platform." },
            { name: "User Authentication", desc: "Using Devise & JWT for secure user authentication, enabling a smooth sign-up/login experience." },
            { name: "Resume Uploading", desc: "Store and manage resumes via Cloudinary integration." },
            { name: "Employer Dashboard", desc: "A dedicated dashboard for employers to post jobs, review applications, and track candidate status." },
            { name: "Job Applications Tracking", desc: "Keep track of application status (Pending, Reviewed, Interviewing, Hired) and update in real-time." },
            { name: "Notifications", desc: "Used Action Mailer to alert admins when new candidates applies/sends their CV through." },
        ],
        challenges: [
              {
                "id": 1,
                "challenge": "Saving Data to Cloudinary",
                "problem": "When implementing the feature to allow users to upload resumes, I faced a challenge with saving data (such as resumes and images) to the cloud. Initially, I struggled with setting up the integration between Cloudinary and the backend (Ruby on Rails) for proper file uploads and storage.",
                "howIOvercameIt": "I researched Cloudinary’s API documentation and learned how to use their Ruby gem to handle file uploads. I also configured Cloudinary in the Rails environment and set up secure file storage with help of ActiveStorage.",
                "outcome": "Successfully integrated Cloudinary for resume uploads, allowing admins to retrieve CVs seamlessly. This feature improved user experience, as applicants could easily upload their resumes, and employers could review applications with attached documents. It also streamlined file management by offloading storage to the cloud."
              },
              {
                "id": 2,
                "challenge": "Hosting on Heroku",
                "problem": "Hosting the Fiortech platform on Heroku was a bit challenging, especially configuring the production environment, ensuring the database was set up correctly, and troubleshooting errors related to Rails and PostgreSQL integration. I encountered issues related to environment variables, setting up PostgreSQL for Heroku, and deploying without errors.",
                "howIOvercameIt": "I followed a step-by-step guide on deploying Ruby on Rails apps to Heroku. I made sure to configure the config/database.yml file for Heroku’s PostgreSQL setup, correctly set environment variables for production, and worked through the Heroku logs to fix deployment errors. I also took time to configure proper buildpacks to ensure smooth deployment.",
                "outcome": "Successfully deployed Fiortech on Heroku, allowing for seamless hosting and scalability. With Heroku's continuous integration features, I could easily push updates, monitor app performance, and ensure that the application was up and running smoothly. This made the platform available to users with minimal downtime and simplified future deployment processes."
              },
              {
                "id": 3,
                "challenge": "Setting Up Cookies",
                "problem": "Implementing cookies for user authentication and session management was initially tricky, especially with managing cookies securely and ensuring that users remained logged in even after closing their browsers. Handling cookies securely and ensuring proper session expiration without causing bugs required some trial and error.",
                "howIOvercameIt": "I used the Devise gem for user authentication, which helped with managing cookies for user sessions. I configured cookie settings in the Rails app to make sure cookies were encrypted and set the proper expiration times. I also tested the login functionality thoroughly to ensure that cookies were being set correctly and users could access their dashboards and job application data securely.",
                "outcome": "Successfully implemented secure cookie-based authentication, enabling users to stay logged in and access the platform without issues. The feature was robust and enhanced security through encrypted cookies. This also allowed for a more seamless user experience, as users didn’t need to log in repeatedly while interacting with the platform. It also blocks users without tokens from viewing APIs."
              },
              {
                "id": 4,
                "challenge": "Requests Timing Out",
                "problem": "When users submitted their applications, there was a high chance that the request would take too long and would return an error.",
                "howIOvercameIt": "I implemented ActiveJob to perform tasks such as sending confirmation emails once the request has been successful.",
                "outcome": "This greatly increased user experience as they will not be getting numerous errors when applying for a job."
              }
            ],
            updates: [
                { name: 'Salary Trends', icon: '', desc: 'Scrape data on current salary trends and presented this to candidates using a WebScraper tool for real-time insights.' },
                { name: 'Booking System', icon: '', desc: 'Integrate a meeting booking system using the Calendly API to streamline scheduling, improve user experience and increase candidate engagement.' },
            ],            
        results: [
            { name: 'Increase Credibility & Reach', icon: '', desc: 'Increase volume of connections with both candidates and clients.' },
            { name: 'Increase Applications', icon: '', desc: 'Increased applications to open jobs on the website.' },
        ],
        timeLine: "",
        screenshots: true,
        repoLink: "https://github.com/Patrick-Bell/recruit",
        demoLink: "https://recruit-app-0adc9fc2a238.herokuapp.com/",
        feedback: [
            { name: 'Aaron', position: 'CEO/Founder', review: 'Patrick built the website very quickly and it is what I had envisioned for it. It works very well and has imcreased the amount of applicants I am connecting with daily.'}
        ],
        status: true,  
    },
    {
        id: 3,
        name: "CopyKit",
        icon: 'project2.png',
        company: "Personal Project",
        sector: "NPM",
        tech: [
            { name: 'React', icon: <DiReact />, desc: 'Frontend Framework', color: '#61DAFB' },
            { name: 'Material UI', icon: <SiMui />, desc: 'UI Framework', color: '#007FFF' },
        ],
        desc: "CopyKit is a robust NPM package designed to enhance user interaction with copy-and-paste functionality. It features customizable copy buttons, stylish animations, and styling options (using Material UI) that elevate the user experience. Ideal for developers and designers, CopyKit provides a seamless solution for integrating modern copy-paste interactions into web applications. The package is lightweight, easy to implement, and versatile, supporting various use cases across different projects.",
        features: [
            { name: "Customizable Components", desc: "Three customizable copy-to-clipboard components for easy integration into any React application." },
            { name: "User Feedback System", desc: "Integrated tooltips and snackbars for providing clear user feedback upon copy action." },
            { name: "Customizable Styling", desc: "Highly customizable styling with various theme options to match the look and feel of your app." },
            { name: "Optimized for Performance", desc: "The package is lightweight and optimized for performance, ensuring minimal impact on app speed." },
            { name: "Easy Integration", desc: "Easy integration with existing React projects for quick and hassle-free implementation." },
            { name: "Smooth Animations", desc: "Configurable animations that enhance the user experience when copying content." },
            { name: "Flexible Support", desc: "Works seamlessly with different text and input elements, including both plain text and HTML." },
            { name: "Detailed Documentation", desc: "Comprehensive documentation and examples to help you set up the package quickly and easily." },
        ],   
        tools: [
            { name: 'VS Code', icon: <VscVscode />, desc: 'Code Editor', color: '#007ACC' },
            { name: 'Git', icon: <FaGit />, desc: 'Version Control', color: '#F1502F' },
            { name: 'GitHub', icon: <FaGithub />, desc: 'Code Repository', color: '#181717' },
            { name: 'NPM', icon: <ImNpm />, desc: 'Node Package Manager', color: '#CB3837' },
        ],     
        challenges: [
            {
                "challenge": "Comprehensive Documentation",
                "problem": "Making sure users can understand and use the package easily, reducing friction in adoption.",
                "howIOvercameIt": "I created a detailed README with clear installation instructions, usage examples, API references, and troubleshooting tips. I created a website for developers who use wish to use the API.",
                "outcome": "Users found the package easy to understand and integrate, leading to better adoption and fewer support requests."
            },
        ],
        updates: [        
            { name: "Animations", desc: "Add built in animations for the components." },
        ],
        results: [{ name: "Downloadable Package", desc: "A NPM that can be installed by anyone at any time, totalling over 500+ downloads (copykit-react)." },],
        timeLine: "",
        screenshots: true,
        repoLink: "https://github.com/Patrick-Bell/copykit-react",
        demoLink: "https://patrick-bell.github.io/copykit-react/",
        feedback: [
            
        ],
        status: true,  
    },
    {
        id: 4,
        name: "Cointology",
        icon: '',
        company: "Personal Project",
        sector: "Ecommerce",
        tech: [
            { name: 'Node.js', icon: <FaNodeJs />, desc: 'JavaScript Runtime', color: '#68A063' },
            { name: 'Express.js', icon: <FaNodeJs />, desc: 'Web Framework', color: '#000000' },
            { name: 'MongoDB', icon: <SiMongodb />, desc: 'NoSQL Database', color: '#47A248' },
            { name: 'React', icon: <DiReact />, desc: 'Frontend Framework', color: '#61DAFB' },
            { name: 'Material UI', icon: <SiMui />, desc: 'UI Framework', color: '#007FFF' },
        ],   
        tools: [
            { name: 'VS Code', icon: <VscVscode />, desc: 'Code Editor', color: '#007ACC' },
            { name: 'Postman', icon: <SiPostman />, desc: 'API Testing', color: '#FF6C37' },
            { name: 'Git', icon: <FaGit />, desc: 'Version Control', color: '#F1502F' },
            { name: 'GitHub', icon: <FaGithub />, desc: 'Code Repository', color: '#181717' },
            { name: 'Stripe', icon: <FaCcStripe />,  desc: 'Online Payments & Financial Services',  color: '#635BFF' },
            { name: 'Render', icon: <SiRender />, desc: 'Cloud Hosting & Deployment', color: '#46E3B7' }
        ],    
         desc: "Cointology is a fully integrated e-commerce platform specializing in collectible coins. The platform enables users to browse and purchase a diverse range of coins, with features such as personalized favorites and secure checkout via Stripe API. For administrators, the system supports comprehensive management of products, user accounts, and order processing. Cointology is designed to deliver a smooth and secure online shopping experience for both customers and business owners.",
        features: [
            { name: 'User Authentication and Secure Checkout', icon: '', desc: 'Enables secure user login and checkout processes with payment integration.' },
            { name: 'Product Listings with High-Quality Images and Descriptions', icon: '', desc: 'Allows admins to list products with images and detailed descriptions.' },
            { name: 'Advanced Filtering and Search for Easy Product Discovery', icon: '', desc: 'Enables customers to filter and search for products efficiently.' },
            { name: 'Shopping Cart with Real-Time Price Updates', icon: '', desc: 'Tracks products added to the cart and updates pricing in real-time.' },
            { name: 'Wishlist and Favorites for Saving Products', icon: '', desc: 'Allows customers to save products they like for future purchase.' },
            { name: 'Stripe Payment Integration for Secure Transactions', icon: '', desc: 'Integrates Stripe API for secure payments and transaction processing.' },
            { name: 'Order Tracking and History for Customers', icon: '', desc: 'Lets customers track the status and history of their orders.' },
            { name: 'Admin Dashboard to Manage Products, Orders, and Users', icon: '', desc: 'A comprehensive dashboard for admins to manage users and products.' },
            { name: 'Inventory Management with Low-Stock Alerts', icon: '', desc: 'Alerts administrators when product stock is low and needs replenishing.' },
            { name: 'Customer Reviews and Ratings System', icon: '', desc: 'Lets customers rate and review products they have purchased.' },
            { name: 'Discount Codes and Promotions System', icon: '', desc: 'Allows administrators to create promotional offers and discount codes.' },
            { name: 'Email Notifications for Order Confirmations and Updates', icon: '', desc: 'Sends email notifications to customers for order confirmations and updates.' },
            { name: 'Mobile-Friendly and Responsive UI', icon: '', desc: 'The platform is optimized for mobile devices, providing a responsive UI.' },
        ],        
        challenges: [
            {
                "challenge": "Integrating Stripe for Secure Payments",
                "problem": "Setting up Stripe for seamless transactions, handling multiple payment methods, refunds, and webhook events.",
                "howIOvercameIt": "I used Stripe's API and Documentation to implememnt secure payments. I also watched tutorials to learn how to implemented webhooks to track transactions, and handled failed payments gracefully.",
                "outcome": "Successfully enabled secure payments with real-time transaction tracking and error handling."
            },
            {
                "challenge": "Linking Reviews, Users, and Orders to Products",
                "problem": "Ensuring that product reviews and user interactions were correctly linked to the corresponding orders and products without data inconsistencies.",
                "howIOvercameIt": "Designed a structured MongoDB schema with relational references between users, orders, and product reviews. Used aggregation queries for efficient data retrieval.",
                "outcome": "Created a seamless system where reviews, orders, and users are properly mapped and easily accessible."
            },
            {
                "challenge": "Allowing Guest Checkout Without Sign-In",
                "problem": "Enabling users to checkout without requiring account creation while still maintaining order tracking and email notifications.",
                "howIOvercameIt": "Implemented session-based guest checkout where temporary user IDs are assigned. Integrated email notifications for order tracking.",
                "outcome": "Improved user experience by allowing non-registered users to make purchases while still ensuring order traceability."
            },
        ],
        updates: [
            {
                name: "Implement AI-Powered Chatbot for Customer Support",
                desc: "Add an AI chatbot to assist customers with FAQs, order tracking, and product recommendations."
            },
            {
                name: "Enhance Admin Dashboard with Sales Analytics",
                desc: "Provide detailed insights into sales, popular products, and customer trends using data visualization."
            },
            {
                name: "Implement Referral and Affiliate System",
                desc: "Allow users to earn rewards for referring friends, increasing customer engagement."
            },
        ],
        results: [
            {
                "name": "Successfully Implemented Stripe for Payments",
                "desc": "Learned and implemented Stripe's API, including payment processing, refunds, and webhook handling."
            },
            {
                "name": "Built a Robust Role-Based Access Control (RBAC) System",
                "desc": "Developed an RBAC system for admins, users, and guests to ensure proper access control."
            },
            {
                "name": "Improved Checkout Flow with Guest Checkout Feature",
                "desc": "Enhanced UX by allowing users to make purchases without requiring account creation."
            },        
        ],
        timeLine: "",
        screenshots: true,
        repoLink: "https://github.com/Patrick-Bell/cointology-marketplace",
        demoLink: "https://cointology.onrender.com/",
        feedback: [],
        status: true,  
    },
    {
        id: 5,
        name: "QRLite",
        icon: 'project5.png',
        company: "Personal Project",
        sector: "QR",
        tech: [
            { name: 'Ruby', icon: <DiRuby />, desc: 'Backend Language', color: '#CC0000' },
            { name: 'Rails', icon: <SiRubyonrails />, desc: 'Web Framework', color: '#CC0000' },
            { name: 'PostgreSQL', icon: <SiPostgresql />, desc: 'Relational Database', color: '#336791' },
            { name: 'React', icon: <DiReact />, desc: 'Frontend Framework', color: '#61DAFB' },
            { name: 'Material UI', icon: <SiMui />, desc: 'UI Framework', color: '#007FFF' },
        ],
        tools: [
            { name: 'VS Code', icon: <VscVscode />, desc: 'Code Editor', color: '#007ACC' },
            { name: 'Postman', icon: <SiPostman />, desc: 'API Testing', color: '#FF6C37' },
            { name: 'Git', icon: <FaGit />, desc: 'Version Control', color: '#F1502F' },
            { name: 'GitHub', icon: <FaGithub />, desc: 'Code Repository', color: '#181717' },
            { name: 'Stripe', icon: <FaCcStripe />,  desc: 'Online Payments & Financial Services',  color: '#635BFF' },
        ],
        desc: "QRLite is a user-friendly platform designed to simplify QR code creation and management. Whether you're generating QR codes for website URLs, digital business cards (vCards), or custom content, QRLite offers a sleek, intuitive interface with a variety of customization options. Users can easily generate, manage, and share their QR codes while enjoying seamless integrations like Stripe for secure payments and advanced features. With a focus on ease of use and security, QRLite allows individuals and businesses alike to streamline their QR code solutions, making digital interactions more efficient and professional.",
        features: [
            { name: 'Create Custom QR Codes for URLs, vCards, and Other Content', icon: '', desc: 'Generates unique QR codes for various content types, such as URLs and digital business cards.' },
            { name: 'Seamless Stripe Payment Integration', icon: '', desc: 'Enables users to securely purchase QR codes like business cards with integrated Stripe payments.' },
            { name: 'Generate Dynamic QR Codes with Customizable Content', icon: '', desc: 'Create dynamic QR codes where the content can be updated in real-time.' },
            { name: 'Download and Share Generated QR Codes with Ease', icon: '', desc: 'Users can download and share QR codes directly from the platform.' },
            { name: 'Customizable Designs for QR Code Appearance', icon: '', desc: 'Users can customize the design of their QR codes to match their brand or preferences.' },
        ],        
        challenges: [
            {
                "challenge": "Implementing Stripe for Secure Transactions",
                "problem": "Ensuring smooth and secure payment processing for purchasing QR codes, handling different payment methods and potential failures.",
                "howIOvercameIt": "Integrated Stripe API for seamless transactions, implemented webhooks for real-time updates, and set up error handling for failed payments.",
                "outcome": "Enabled a secure and reliable payment system, allowing users to purchase QR codes with confidence."
            },
            {
                "challenge": "Building a User-Friendly QR Code Customization Interface",
                "problem": "Users wanted to customize QR codes (colors, logos, styles) while maintaining scannability.",
                "howIOvercameIt": "Implemented a real-time preview system that validates QR code readability before finalizing customizations.",
                "outcome": "Users can easily customize their QR codes without worrying about readability issues."
            },
        ],
        updates: [
            {
                "name": "Enhance User Dashboard with Scan Analytics",
                "desc": "Provide real-time analytics and insights for users to track QR code engagement."
            },
        ],
        results: [            
            {
                "name": "Dynamic QR Code System",
                "desc": "Implemented a solution where users can generate QR codes."
            },  
            {
                "name": "Scanners",
                "desc": "Built several QR generators like URL, vCards, Social Media URL."
            },       
        ],
        timeLine: "",
        screenshots: true,
        repoLink: "https://github.com/Patrick-Bell/qr-scanner",
        demoLink: "https://patrick-bell.github.io/qr-scanner/",
        feedback: [],
        status: false,  
    },
    {
        id: 6,
        name: "Coming Soon...",
        icon: 'project1.png',
        company: "",
        sector: "",
        tech: [
            { name: 'Ruby', icon: <DiRuby />, desc: 'Backend Language', color: '#CC0000' },
            { name: 'Rails', icon: <SiRubyonrails />, desc: 'Web Framework', color: '#CC0000' },
            { name: 'PostgreSQL', icon: <SiPostgresql />, desc: 'Relational Database', color: '#336791' },
            { name: 'React', icon: <DiReact />, desc: 'Frontend Framework', color: '#61DAFB' },
            { name: 'Taiilwind CSS', icon: <RiTailwindCssFill />, desc: 'CSS Framework', color: '#38BDF8' },
        ],
        tools: [
            { name: 'VS Code', icon: <VscVscode />, desc: 'Code Editor', color: '#007ACC' },
            { name: 'Postman', icon: <SiPostman />, desc: 'API Testing', color: '#FF6C37' },
            { name: 'Git', icon: <FaGit />, desc: 'Version Control', color: '#F1502F' },
            { name: 'GitHub', icon: <FaGithub />, desc: 'Code Repository', color: '#181717' },
            { name: 'Stripe', icon: <FaCcStripe />,  desc: 'Online Payments & Financial Services',  color: '#635BFF' },
            { name: 'Heroku', icon: <SiHeroku />, desc: 'Deployment', color: '#430098' },
        ],
        desc: 'I am currently building another e-commerce store with the goal of offering an enhanced shopping experience for users. The store will feature a sleek, user-friendly interface and robust product management tools to make the shopping process seamless. Along with standard features like product catalog, shopping cart, and order tracking, I plan to integrate advanced functionalities to provide a personalized experience for each customer. New features will include an intelligent chatbot that assists customers with product recommendations, answering FAQs, and guiding them through the checkout process. Additionally, I will introduce more payment options, including PayPal along with using Stripe, which will make transactions even easier for users across the globe. The integration of multi-currency support is also in the works to cater to an international audience. I will also allow users to sign up using social media accounts such as their Google account. In this project, I will be experimenting with Tailwind CSS and hope to get a good grasp of the main concepts whilst building this web application.',
        features: [
            
        ],
        challenges: [
             
            ],
        updates: [
        ],
        results: [
            
        ],
        timeLine: "March 2023 - July 2023",
        screenshots: false, // Add image URLs here if possible
        repoLink: "https://github.com/Patrick-Bell/cart-tracks", // Replace with your actual repo link
        demoLink: "https://cart-tracks.onrender.com/", // Add a link to a live demo if available
        feedback: [
        ],
        status: false,  
    },
]
