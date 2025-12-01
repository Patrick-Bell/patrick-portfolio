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
import { SiShadcnui } from "react-icons/si";



export const projects = [
    {
        id: 1,
        name: "Admin Dashboard",
        icon: 'project1.png',
        company: "Bandstand Merchandise Services",
        sector: "Hospitality",
        tech: [
            { name: 'Ruby', icon: <DiRuby />, desc: 'Backend Language', color: '#CC0000' },
            { name: 'Rails', icon: <SiRubyonrails />, desc: 'Web Framework', color: '#CC0000' },
            { name: 'PostgreSQL', icon: <SiPostgresql />, desc: 'Relational Database', color: '#336791' },
            { name: 'React', icon: <DiReact />, desc: 'Frontend Framework', color: '#61DAFB' },
            { name: 'Tailwind CSS', icon: <RiTailwindCssFill />, desc: 'UI Framework', color: '#007FFF' },
        ],
        tools: [
            { name: 'VS Code', icon: <VscVscode />, desc: 'Code Editor', color: '#007ACC' },
            { name: 'Postman', icon: <SiPostman />, desc: 'API Testing', color: '#FF6C37' },
            { name: 'Git', icon: <FaGit />, desc: 'Version Control', color: '#F1502F' },
            { name: 'GitHub', icon: <FaGithub />, desc: 'Code Repository', color: '#181717' },
            { name: 'Heroku', icon: <SiHeroku />, desc: 'Deployment', color: '#430098' },
        ],
        desc: 'The Merchandise Admin Dashboard is a data-driven platform designed to streamline and centralise the monitoring of worker performance within the hospitality sector. Through comprehensive data tracking, the dashboard enables administrators to track key performance metrics, generate detailed reports, and make data-driven decisions to optimize workforce performance. The system focuses on providing an intuitive, user-friendly interface for team members to access and manage valuable information, ultimately improving operational efficiency. With powerful search features, managers have an abundance of value data readily available to them, whether its data on a specific person, or a previous game, managers van view detailed reports on their desktop and mobile devices. Actions that have resulted from the dashboard include a strategy change in placing high performing workers in high demand areas, ultimately increasing margins.',
        features: [
            { name: 'Create, Edit & Delete Workers', desc: 'Manage workers within the system by creating, editing, and deleting their profiles.' },
            { name: 'Create, Edit & Delete Managers', desc: 'Allow the creation and management of Manager accounts to assign tasks and monitor worker performance.' },
            { name: 'Create, Edit, and Delete Events', desc: 'Manage event details by adding, editing, or deleting them to ensure the schedule is up to date.' },
            { name: "Worker Attendance Tracking", desc: "Calculates hours worked, attendance and whether workers arrived early or late." },
            { name: 'Link Worker Performance Data to Relevant Events', desc: 'Link worker performance to specific events for better tracking and reporting.' },
            { name: 'User Authentication and Authorization', desc: 'Implement secure login, and provide different access levels based on user roles (RBAC).' },
            { name: 'Email Reminders and Push Notifications ', desc: 'Notify managers about upcoming/completed events through email and push notifications.' },
            { name: 'Generate and download PDF summaries', desc: 'Generate detailed reports in PDF format for event summaries, which can be customized based on user needs.' },
            { name: 'Track Worker Profiles', desc: 'Track the progress of each worker and monitor their performance, with an ability to generate performance reports.' },
            { name: 'Hotkeys', desc: 'Implement hotkeys for common actions to improve user efficiency and navigation within the application.' },
            { name: 'Calendar', desc: 'Ability to add events to your calendar by using .ics files.' },
            { name: 'Forgot Password', desc: 'Allow users to securely reset their password using OTP.' },
            { name: 'Tutorials', desc: 'Several interactive tutorials throughout the application to support users.' },
            { name: 'Validation', desc: 'Built in validation on all forms to support users.' },
            { name: 'Charts & Graphs', desc: 'Charts and graphs that show insights into performance.' },
            //{ name: 'Light/Dark Mode', desc: 'Offer a toggle option for users to switch between light and dark mode for a personalized user experience.' },
            { name: 'Mobile Responsive', desc: 'Ensure the platform is fully responsive and optimized for mobile devices, providing a smooth experience on any screen.' }
        ],
        challenges: [
              {
                challenge: "Role-Based Access Control (RBAC) Implementation",
                problem: "Ensuring that different levels of users had appropriate access levels, and making sure the system is flexible enough to meet different stakeholders' needs.",
                howIOvercameIt: "I implemented a robust RBAC system using role identifiers, assigning permissions for different actions (view, edit, delete) based on the user's role. Each user’s permissions were dynamically adjusted based on their assigned role.",
                outcome: "Successfully created a flexible and secure RBAC system, ensuring that the right users had the right level of access to the system's data. This maintained security and streamlined user experience."
              },
              {
                challenge: "Making the Platform Smooth and Responsive",
                problem: "Ensuring the platform was smooth, responsive, and user-friendly, especially on mobile devices, was challenging while maintaining performance.",
                howIOvercameIt: "I used Material UI and ensured CSS media queries were optimized for mobile responsiveness. I also focused on minimizing the number of elements loaded at once, utilizing lazy loading and optimizing asset delivery.",
                outcome: "The dashboard is fully responsive, with smooth transitions and no lag, offering a great user experience on both mobile and desktop devices."
              },
              {
                challenge: "Keeping the Platform Inclusive with Notifications",
                problem: "Ensuring managers are notified when games (tasks/events) are ready to be viewed, preventing missed tasks or delays in reviewing performance.",
                howIOvercameIt: "I set up an automated email notification system using Action Mailer to alert managers whenever a game was completed and ready for review. Additionally, I included email reminders for upcoming events and task assignments.",
                outcome: "The email system ensures that managers are kept up to date with real-time progress and task completion, improving communication and the platform's usability."
              },
              {
                challenge: "Unexpected Results When Fetching APIs",
                problem: "Fetching APIs sometimes resulted in errors, such as route not being found or lacking the correct access permissions.",
                howIOvercameIt: "I tested the APIs using both manual and automated methods. I utilized Postman for manual testing and applied BDD (Behavior-Driven Development) techniques with tools like RSpec to ensure that my routes were robust and working as expected.",
                outcome: "All tests passed, leading to smooth API functionality without issues."
              },
            ],
        updates: [
            { name: "Performance", desc: "Working on refactoring more areas of code to increase performance and speed as the data increases." },
            { name: 'In-depth User Reports', desc: 'Adding more detailed reports for managers to track worker performance and make data-driven decisions.' },
            { name: 'Theme', desc: 'Actively working on a dark mode for the application.' }
        ],
        results: [
            { name: "Boosted Profits", desc: "Strategically placing high-performing workers in high-demand areas, resulting in improved sales." },
            { name: "Improved Efficiency", desc: "An improvement in workers arriving on time to work, also increasing profits with more time to sell." },
            { name: "Centralised Platform", desc: "Managers and directors can now analyse large datasets and identify trends more efficiently, eliminating the need for searching through Excel spreadsheets." },
            { name: 'Platform Integration', desc: "The platform has become a stable and essential tool for managing performance, with directors advocating for its consistent use and updates by managers." },
        ],
        timeLine: "March 2023 - July 2023",
        screenshots: true,
        repoLink: "https://github.com/Patrick-Bell/cart-tracks", // Replace with your actual repo link
        demoLink: "https://whu-tracker-8a7906f4de54.herokuapp.com", // Add a link to a live demo if available
        feedback: [
            { name: 'Bruce', position: 'Director', review: 'The system works very well. It is extremely easy to use and I now have it used by other managers. It tracks all the data I need to make decisions.'}
        ],
        status: false,  
    },
    {
        id: 2,
        name: "Fiortech Recruitment Group",
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
        desc: "Fiortech Recruitment Group is an innovative startup specializing in tech recruitment, with a strong focus on software engineering roles. The full-stack recruitment platform streamlines the hiring process for both candidates and employers. Job seekers can seamlessly explore opportunities, apply for roles, and track their applications, while businesses can efficiently manage job postings, review applicants, and oversee the entire recruitment process—all through an intuitive and scalable interface. Fiortech is designed to simplify hiring while delivering a seamless experience for all users.",
        features: [
            { name: "Create / Edit and Delete Jobs", desc: "Easily create, edit, and delete job listings to keep opportunities up to date." },
            { name: "Job Listings with Advanced Filtering", desc: "Users can search and filter job listings based on various criteria." },
            { name: "Browse and Apply for Jobs", desc: "Candidates can browse available job listings and apply directly through the platform." },
            { name: "User Authentication", desc: "Using Devise & JWT for secure user authentication, enabling a smooth sign-up/login experience." },
            { name: "Resume Uploading", desc: "Store and manage resumes via Cloudinary integration." },
            { name: "Employer Dashboard", desc: "A dedicated dashboard for employers to post jobs, review applications, and track candidate status." },
            { name: "Job Applications Tracking", desc: "Keep track of application status (Pending, Reviewed, Interviewing, Hired) and update in real-time." },
            { name: "Notifications", desc: "Used Action Mailer to alert admins when new candidates applies/sends their CV through." },
            { name: 'Custom Domain', desc: 'Successfully set up a custom domain on Heroku, ensuring secure HTTPS access with SSL encryption for enhanced site security and professionalism.'},
            { name: 'SEO Optimisation', desc: 'Improved search engine visibility by adding relevant meta tags, assigning unique page titles, and ensuring consistent image usage across pages. Inclusion of ALT text for images and mobile responsive.'}
        ],
        challenges: [
              {
                challenge: "Saving Data to Cloudinary",
                problem: "When implementing the feature to allow users to upload resumes, I faced a challenge with saving data (such as resumes and images) to the cloud. Initially, I struggled with setting up the integration between Cloudinary and the backend (Ruby on Rails) for proper file uploads and storage.",
                howIOvercameIt: "I researched Cloudinary’s API documentation and learned how to use their Ruby gem to handle file uploads. I also configured Cloudinary in the Rails environment and set up secure file storage with help of ActiveStorage.",
                outcome: "Successfully integrated Cloudinary for resume uploads, allowing admins to retrieve CVs seamlessly. This feature improved user experience, as applicants could easily upload their resumes, and employers could review applications with attached documents. It also streamlined file management by offloading storage to the cloud."
              },
              {
                challenge: "Hosting on Heroku",
                problem: "Hosting the Fiortech platform on Heroku was a bit challenging, especially configuring the production environment, ensuring the database was set up correctly, and troubleshooting errors relating to adding a custom domain. I encountered issues related to environment variables, and deploying without errors.",
                howIOvercameIt: "I followed a step-by-step guide on deploying Ruby on Rails apps to Heroku. I had to ensure that Heroku was able to identify my app as a rails one, and then build the frontend from static files. I also used the Heroku CLI to add a custom domain and connect it to the correct DNS.",
                outcome: "Successfully deployed Fiortech on Heroku, allowing for seamless hosting and scalability. With Heroku's continuous integration features, I could easily push updates, monitor app performance, and ensure that the application was up and running smoothly. Its custom domain increases credibility and professionalism."
              },
              {
                challenge: "Setting Up Cookies",
                problem: "Implementing cookies for user authentication and session management was initially tricky, especially with managing cookies securely and ensuring that users remained logged in even after closing their browsers. Handling cookies securely and ensuring proper session expiration without causing bugs required some trial and error.",
                howIOvercameIt: "I used the Devise gem for user authentication, which helped with managing cookies for user sessions. I configured cookie settings in the Rails app to make sure cookies were encrypted and set the proper expiration times. I also tested the login functionality thoroughly to ensure that cookies were being set correctly and users could access their dashboards and job application data securely.",
                outcome: "Successfully implemented secure cookie-based authentication, enabling users to stay logged in and access the platform without issues. The feature was robust and enhanced security through encrypted cookies. This also allowed for a more seamless user experience, as users didn’t need to log in repeatedly while interacting with the platform. It also blocks users without tokens from viewing APIs."
              },
              {
                challenge: "Requests Timing Out",
                problem: "When users submitted their applications, there was a high chance that the request would take too long and would return an error.",
                howIOvercameIt: "I implemented ActiveJob to perform tasks such as sending confirmation emails once the request has been successful.",
                outcome: "This greatly increased user experience as they will not be getting numerous errors when applying for a job."
              }
            ],
            updates: [
                { name: 'Salary Trends', icon: '', desc: 'Scrape data on current salary trends and presented this to candidates using a WebScraper tool for real-time insights.' },
                { name: 'Booking System', icon: '', desc: 'Integrate a meeting booking system using the Calendly API to streamline scheduling, improve user experience and increase candidate engagement.' },
                { name: 'Improving SEO', icon: '', desc: 'With the website now live, I am collaborating with the founder to continuously enhance SEO using advanced techniques, including keyword optimization, content refinement, and other on-page SEO strategies for better search engine ranking and visibility.' },
            ],            
        results: [
            { name: 'Increase Credibility & Reach', icon: '', desc: "Boosted credibility and reach, with a professional website and custom domain, Fiortech is easily discoverable on Google." },
            { name: 'Applications', icon: '', desc: 'Attracted more qualified applicants directly through the website, streamlining the recruitment process and expanding the talent pool.' },
        ],
        timeLine: "",
        screenshots: true,
        repoLink: "https://github.com/Patrick-Bell/recruit",
        demoLink: "https://www.fiortechgroup.com",
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
            { name: "Customizable Styling", desc: "Highly customizable styling with various theme options to match the look and feel of any web app." },
            { name: "Optimized for Performance", desc: "The package is lightweight and optimized for performance, ensuring minimal impact on app speed." },
            { name: "Easy Integration", desc: "Easy integration with existing React projects for quick and hassle-free implementation." },
            { name: "Smooth Animations", desc: "Configurable animations that enhance the user experience when copying content." },
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
                challenge: "Comprehensive Documentation",
                problem: "Making sure users can understand and use the package easily, reducing friction in adoption.",
                howIOvercameIt: "I created a detailed README with clear installation instructions, usage examples, API references, and troubleshooting tips. I created a website for developers who use wish to use the API.",
                outcome: "Users found the package easy to understand and integrate, leading to better adoption and fewer support requests."
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
    /*
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
                "challenge": "Styling",
                "problem": "Ensuring a consistent and visually appealing design across the platform while maintaining responsiveness and user-friendliness.",
                "howIOvercameIt": "Having never used a CSS library before, I decided to learn and use Material UI to style the application. I also watched tutorials and read the documentation to understand the best practices for responsive design.",
                "outcome": "Achieved a visually appealing and responsive design that enhances user experience and maintains consistency throughout the platform."
            },
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
    */
    {
        id: 6,
        name: "MinifigsMania",
        icon: 'project1.png',
        company: "Personal Business",
        sector: "E-Commerce",
        tech: [
            { name: 'Ruby', icon: <DiRuby />, desc: 'Backend Language', color: '#CC0000' },
            { name: 'Rails', icon: <SiRubyonrails />, desc: 'Web Framework', color: '#CC0000' },
            { name: 'PostgreSQL', icon: <SiPostgresql />, desc: 'Relational Database', color: '#336791' },
            { name: 'React', icon: <DiReact />, desc: 'Frontend Framework', color: '#61DAFB' },
            { name: 'Tailwind CSS', icon: <RiTailwindCssFill />, desc: 'CSS Framework', color: '#38BDF8' },
        ],
        tools: [
            { name: 'VS Code', icon: <VscVscode />, desc: 'Code Editor', color: '#007ACC' },
            { name: 'Postman', icon: <SiPostman />, desc: 'API Testing', color: '#FF6C37' },
            { name: 'Git', icon: <FaGit />, desc: 'Version Control', color: '#F1502F' },
            { name: 'GitHub', icon: <FaGithub />, desc: 'Code Repository', color: '#181717' },
            { name: 'Stripe', icon: <FaCcStripe />,  desc: 'Online Payments & Financial Services',  color: '#635BFF' },
            { name: 'Heroku', icon: <SiHeroku />, desc: 'Deployment', color: '#430098' },
        ],
        desc: "MinifigsMania is an e-commerce platform specializing in custom minifigures. Designed with a modern and intuitive UI, the website provides a seamless shopping experience for users. Customers can easily browse through an extensive catalog of unique minifigures, apply advanced filters, and perform quick searches to find their favorites. To enhance the shopping experience, MinifigsMania offers secure user authentication, real-time shopping cart updates, and multiple payment options, including Stripe. Customers can track their orders, receive email notifications for updates, and leave reviews and ratings on purchased products. For store administrators, the platform provides a robust dashboard to manage inventory, products, and orders efficiently. Inventory is synchronized in real time. Additionally, admins receive low-stock alerts, ensuring popular items remain in stock.",
        features: [
            { name: 'User Authentication', icon: '', desc: 'Secure user login and registration with hashed passwords.' },
            { name: 'Product Listings with High-Quality Images', icon: '', desc: 'Allows admins to list products with images (via Cloudinary API) and detailed descriptions.' },
            { name: 'Advanced Filtering and Search', icon: '', desc: 'Enables customers to filter and search for products efficiently.' },
            { name: 'Shopping Cart', icon: '', desc: 'Tracks products added to the cart and updates pricing in real-time.' },
            { name: 'Stripe Payment Integration', icon: '', desc: 'Integrates Stripe API for secure payments and transaction processing.' },
            { name: 'Order Tracking and History for Customers', icon: '', desc: 'Lets customers track the status and history of their orders.' },
            { name: 'Shipping Options', icon: '', desc: 'Configured dynamic shipping options dependent on cart items and weight.' },
            { name: 'Admin Dashboard', icon: '', desc: 'A comprehensive dashboard for admins to manage users and products.' },
            { name: 'Alerts', icon: '', desc: 'PDF summary reports for important metrics such as low stock alerts, monthly reports etc.' },
            { name: 'Customer Reviews and Ratings System', icon: '', desc: 'Lets customers rate and review products they have purchased.' },
            { name: 'Discount Codes and Promotions System', icon: '', desc: 'Allows administrators to create promotional offers and discount codes.' },
            { name: 'Email Notifications for Order Confirmations', icon: '', desc: 'Sends email notifications to customers for order confirmations and updates.' },
            { name: 'Mobile-Friendly and Responsive UI', icon: '', desc: 'The platform is optimized for mobile devices, providing a clean and responsive UI.' },
            { name: 'Informational Pages', icon: '', desc: 'Included informational pages: contact us, shipping, returns, privacy policy and more.' },
            { name: 'Deployment', icon: '', desc: 'Created a custom logo, configured a domain and deployed the web application on Heroku & Netlify.' },
            { name: 'Wishlist and Favorites for Saving Products', desc: 'Allows customers to save products they like for future purchase.' },
            { name: 'Recently Viewed Products', desc: 'Used cookies to track users recently viewed products.' },
            { name: 'Chatbot', desc: 'Tracks orders, finds products and supports users by providing helpful links.' },
        ],   
        challenges: [
            {
                challenge: "Deployment",
                problem: "I was struggling to deploy the application in a monolithic way, attempting to use static files all in one repository.",
                howIOvercameIt: "I decided to create a separate frontend using Vite and React, which allowed me to serve static files efficiently. I then used Heroku to deploy the backend and Netlify for the frontend.",
                outcome: "The backend now serves static files efficiently using Vite, leading to significantly faster build times compared to Create React App. Deploying the frontend on Netlify has improved performance and scalability. It also allows for easier updates and maintenance of the frontend without affecting the backend.",
            },
            /*
            {
                challenge: "Centralised Inventory Management",
                problem: "Ensuring stock levels are consistent and updated in real time.",
                howIOvercameIt: "Integrated stripe webhooks to immediately update stocks after each sale. Additionally, I synchronized inventory across platforms by integrating with the eBay API.",
                outcome: "Inventory levels are working in sync and there has been no issues of purchases where products are not available."
            },
            */
            {
                challenge: "Secure User Roles",
                problem: "Ensuring data access is different betweeen admins and users. For example, a user should have access to their own orders, where an admin should have access to all orders.",
                howIOvercameIt: "I carefully created functions that get the current user and the role of the usrer. I then used before_actions to ensure I can identify the user and grant them access accordindly.",
                outcome: "User access works seamlessly, allowing me to create additional admin accounts for family members to fulfil orders whilst I am away."
            },
            {
                challenge: "Live Payments",
                problem: "Ensuring that the website could process live payments securely.",
                howIOvercameIt: "I activated live payments on the Stripe Dashboard and updated my API keys to the production versions. I thoroughly tested my webhooks and integrations multiple times to ensure everything functioned correctly. This included ensuring webhooks did not receive any errors such as timing out, as I used async functions to perform critical tasks immediately and other later once the webhook was successful.",
                outcome: "Users can now securely complete transactions using Stripe without issues, stock will update immediately and users will receive confirmation emails after a short delay."
            }            
            ],
        updates: [
            { name: 'PayPal Payments', desc: 'Allow users to checkout using PayPal.' },
            { name: 'Google Log in', desc: 'Allow users to sign in using their Google accounts.' },
            { name: 'eBay Integration', desc: 'To implement a centralised inventory system across eBay and the website, ensuring consistent stock and prevent items purchased not being available.' }
        ],
        results: [
            {
                name: "Increased Sales",
                desc: "Acheived an increase in sales, with the website now accounting for 15% of all sales."
            }, 
            {
                name: "Increased Visibility",
                desc: "Over 10 new users signed up since launch."
            }, 
            {
                name: "Increased Reviews",
                desc: "Received 10+ reviews on products."
            }, 
            {
                name: "Increased Active Listings",
                desc: "Scaled MinifigsMania to over 200 active listings."
            }, 
            {
                name: "Revenue Growth",
                desc: "On track to achieve £2,000 sales in the first year of operation."
            }, 
            {
                name: "Knowledge Gain",
                desc: "Learned the basics of Tailwind CSS and how to use it effectively."
            }, 
        ],
        timeLine: "March 2023 - July 2023",
        screenshots: false, // Add image URLs here if possible
        repoLink: "https://github.com/Patrick-Bell/cart-tracks", // Replace with your actual repo link
        demoLink: "https://cart-tracks.onrender.com/", // Add a link to a live demo if available
        feedback: [
        ],
        status: false,  
    },
    {
        id: 6,
        name: "PayPulse",
        icon: '',
        company: "Personal Business",
        sector: "Financial",
        tech: [
            { name: 'Ruby', icon: <DiRuby />, desc: 'Backend Language', color: '#CC0000' },
            { name: 'Rails', icon: <SiRubyonrails />, desc: 'Web Framework', color: '#CC0000' },
            { name: 'PostgreSQL', icon: <SiPostgresql />, desc: 'Relational Database', color: '#336791' },
            { name: 'React', icon: <DiReact />, desc: 'Frontend Framework', color: '#61DAFB' },
            { name: 'Tailwind CSS', icon: <RiTailwindCssFill />, desc: 'CSS Framework', color: '#38BDF8' },
        ],
        tools: [
            { name: 'VS Code', icon: <VscVscode />, desc: 'Code Editor', color: '#007ACC' },
            { name: 'Postman', icon: <SiPostman />, desc: 'API Testing', color: '#FF6C37' },
            { name: 'Git', icon: <FaGit />, desc: 'Version Control', color: '#F1502F' },
            { name: 'GitHub', icon: <FaGithub />, desc: 'Code Repository', color: '#181717' },
            { name: 'Stripe', icon: <FaCcStripe />,  desc: 'Online Payments & Financial Services',  color: '#635BFF' },
            { name: 'Heroku', icon: <SiHeroku />, desc: 'Deployment', color: '#430098' },
        ],
        desc: "PayPulse is an intelligent wage tracking system designed specifically for individuals working in retail, hospitality, and other industries where working hours often vary from week to week. Instead of leaving your earnings to guesswork, PayPulse provides a clear, seamless way to monitor and project your income in real time. With PayPulse, you can log your shifts in advance and instantly see an estimate of your monthly earnings, helping you plan ahead with confidence. The platform also allows you to set up customizable reminders to notify you about upcoming shifts, new payslips, and progress toward your personal financial goals, so you never miss an important update. To give you a deeper understanding of your true take-home pay, PayPulse enables you to factor in common deductions such as travel expenses, meals, or other work-related costs. This ensures that your projected earnings reflect not just what you make, but what you actually keep. For record-keeping and financial planning, PayPulse makes it easy to generate and download professional PDF summaries of your earnings, similar to invoices. These reports help you track past income, spot patterns in your work schedule, and make smarter financial decisions going forward.",
        features: [
            { name: 'User Authentication', icon: '', desc: 'Secure user login and registration with hashed passwords.' },
            { name: 'Shift Tracking', icon: '', desc: 'Allows users to add, edit and delete shifts.' },
            { name: 'Advanced Filtering', icon: '', desc: 'Enables users to filter and search for specific shifts.' },
            { name: 'Calendar', icon: '', desc: 'Detailed calendar, that when clicked will show the details of shifts on a given day.' },
            { name: 'Stripe Payment Integration for Secure Transactions', icon: '', desc: 'Integrates Stripe API for secure payments and transaction processing.' },
            { name: 'PayPulse Bot', icon: '', desc: 'Built using LLM (Mistral) and responds promptly to users questions.' },
            { name: 'Calendar Integration', icon: '', desc: 'Integrate your shifts to your chosen calendar.' },
            { name: 'Contact Book', icon: '', desc: 'Add contacts to have seamless access to important contacts, and action emails and calls directly.' },
            { name: 'Email Notifications', icon: '', desc: 'Sends email notifications to customers for order confirmations and updates.' },
            { name: 'Mobile-Friendly and Responsive UI', icon: '', desc: 'The platform is optimized for mobile devices, providing a clean and responsive UI.' },
            { name: 'Deployment', icon: '', desc: 'Created a custom logo, configured a domain and deployed the web application on Heroku.' }
        ],   
        challenges: [
            {
                challenge: "Deployment",
                problem: "Vite was causing asset issues, resulting in the webpage not being visible.",
                howIOvercameIt: "Stuck on this problem, I teamed up with a friend and learned pair programming using VS Code's Live Share extension. Together, we tackled the issue.",
                outcome: "The backend now serves static files efficiently using Vite, leading to significantly faster build times compared to Create React App, while also making the setup more future-proof."
            },
            {
                challenge: "Centralised Inventory Management",
                problem: "Ensuring stock levels are consistent and updated in real time.",
                howIOvercameIt: "Integrated stripe webhooks to immediately update stocks after each sale. Additionally, I synchronized inventory across platforms by integrating with the eBay API.",
                outcome: "Inventory levels are working in sync and there has been no issues of purchases where products are not available."
            },
            {
                challenge: "Secure User Roles",
                problem: "Ensuring data access is different betweeen admins and users. For example, a user should have access to their own orders, where an admin should have access to all orders.",
                howIOvercameIt: "I carefully created functions that get the current user and the role of the usrer. I then used before_actions to ensure I can identify the user and grant them access accordindly.",
                outcome: "User access works seamlessly, allowing me to create additional admin accounts for family members to fulfil orders whilst I am away."
            },
            {
                challenge: "Live Payments",
                problem: "Ensuring that the website could process live payments securely.",
                howIOvercameIt: "I activated live payments on the Stripe Dashboard and updated my API keys to the production versions. I thoroughly tested my webhooks and integrations multiple times to ensure everything functioned correctly. This included ensuring webhooks did not receive any errors such as timing out, as I used async functions to perform critical tasks immediately and other later once the webhook was successful.",
                outcome: "Users can now securely complete transactions using Stripe without issues, stock will update immediately and users will receive confirmation emails after a short delay."
            }            
            ],
        updates: [
            { name: 'Expenses', desc: 'Allow users to track expenses and include LLMs to reason and provide more ways to save money.' },
            { name: 'PayPal Payments', desc: 'Allow users to checkout using PayPal.' },
        ],
        results: [
            {
                name: "Tailwind CSS",
                desc: "Continued to develop my understanding and application of Tailwind CSS."
            }, 
        ],
        timeLine: "June 2025 - September 2025",
        screenshots: true, // Add image URLs here if possible
        repoLink: "https://github.com/Patrick-Bell/cart-tracks", // Replace with your actual repo link
        demoLink: "https://cart-tracks.onrender.com/", // Add a link to a live demo if available
        feedback: [
        ],
        status: false,  
    },
    {
        id: 7,
        name: "GridLock",
        icon: '',
        company: "Personal Business",
        sector: "",
        tech: [
            { name: 'React', icon: <DiReact />, desc: 'Frontend Framework', color: '#61DAFB' },
            { name: 'Shadcn UI', icon: <SiShadcnui />, desc: 'CSS Framework', color: '#000' },
        ],
        tools: [
            { name: 'VS Code', icon: <VscVscode />, desc: 'Code Editor', color: '#007ACC' },
            { name: 'Git', icon: <FaGit />, desc: 'Version Control', color: '#F1502F' },
            { name: 'GitHub', icon: <FaGithub />, desc: 'Code Repository', color: '#181717' },
        ],
        desc: "GridLock makes designing grid layouts simple, fast, and visually appealing. Create and customize grids with ease, pick your colours, toggle between light and dark modes, and copy the code directly for your projects. Built with Tailwind CSS and Shadcn UI, GridLock provides a modern, polished interface perfect for experimenting, learning, or building layouts quickly. We’re constantly evolving—more features and improvements will be added to help you master grids and design with confidence.",
        features: [
            { name: 'Customisable Grid', icon: '', desc: 'Change the grids rows, columns and gaps.' },
            { name: 'Colour', icon: '', desc: 'Change the grids colours.' },
            { name: 'Copy & Paste', icon: '', desc: 'Copy the customised grid code, ready to be used in your project.' },
            { name: 'Theme', icon: '', desc: 'Light/Dark Mode.' },
        ],   
        challenges: [
            {
                challenge: "Installation",
                problem: "I ran into issues when trying to install Shadcn UI components.",
                howIOvercameIt: "I read the documentation on the Shadcn UI website, ensuring I imported and created the neccessary files so that my app could handle importing components. I also watched several tutorials to understand the installation process better.",
                outcome: "Now, I can easily use the console to add components to my project and use them seamlessly.",
            },         
            ],
        updates: [
            { name: 'More Grids', desc: 'Add more default and common grid views that can be used straight away by users' },
            { name: 'Drag', desc: 'Allow users to drag grids as opposed to only using numbers' },
        ],
        results: [
            {
                name: "Shadcn UI",
                desc: "I developed an understanding of Shadcn UI, how to install components and use it effectively."
            }, 
            {
                name: "Grid",
                desc: "I improved my understanding of CSS Grid and how to use it effectively."
            }, 
        ],
        timeLine: "September 2025 - October 2025",
        screenshots: true, // Add image URLs here if possible
        repoLink: "https://github.com/Patrick-Bell/cart-tracks", // Replace with your actual repo link
        demoLink: "https://cart-tracks.onrender.com/", // Add a link to a live demo if available
        feedback: [
        ],
        status: false,  
    },
]
