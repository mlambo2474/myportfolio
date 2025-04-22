import React from "react";
import airbnb from "../assets/airbnb.png";
import amazon from "../assets/amazon.gif";
import twitter from "../assets/twitter.png";
import calculator from "../assets/calculator.png";
import clock from "../assets/clock.jpg";
import instagram from "../assets/insta.jpeg";
import mathsapp from "../assets/maths-app.webp";
import tictactoe from "../assets/tictac.jpg";
import youtube from "../assets/youtube.jpg";
import tesla from "../assets/tesla-Emblem.png";
import netflix from "../assets/Netflix-Logo.png";
import google from "../assets/google.png";
// import airbnb from '../assets/airbnb.png'

const Projects = () => {
  return (
    <div className="bg-white ">
      <div className="html-css">
        <div className="flex justify-center items-center text-gray-600 pt-2 mb-2 font-bold text-sm">
        <span className="pr-8">Full Stack (JavaScript, React & Firebase)</span>
          <span className="pr-8">HTML5 & CSS3 </span>
        
        </div>
        <h1 className="border-t border-gray-400 font-bold text-indigo-500 px-4 underline">
          JAVASCRIPT, REACT AND FIREBASE
        </h1>
        <p className="text-xs pb-2 px-4 text-gray-600">
          Note: These clones for educational purposes and have limited functionality
          and limited real app content please visit my github repository for more.
        </p>
        <div className="flex justify-center mx-44 bg-purple-200 p-2 mb-2">
          <img
            src={google}
            alt="google keep app"
            className="bg-white h-40 w-60 mr-12 rounded-lg cursor-pointer"
          />
             <div className="description">
            <span className="text-sm font-bold text-indigo-500">Google keep Clone(fullstack)</span>
          <p className="text-gray-600">
          A responsive clone of Google Keep built with HTML, CSS, JavaScript, and Firebase.
           This app replicates Google Keep's UI and core functionalities, allowing users to create,
            display, edit, and delete notes. Archive functionality mirrors delete for now.
            The app uses Firebase intergration for authentication and it
             demonstrates front-end development skills in recreating a modern note-taking platform. 
          </p>
          </div>
        </div>
        <div className="flex justify-center mx-44 bg-purple-200 p-2 mb-2">
          <img
            src={instagram}
            alt="netflix landing page"
            className="bg-white h-40 w-60 mr-32 rounded-lg cursor-pointer"
          />
             <div className="description">
             <span className="text-sm font-bold text-indigo-500">Instagram Clone (fullstack)</span>
          <p className="text-gray-600">
          A responsive Instagram clone built with HTML, CSS, JavaScript, and Firebase, featuring 
          Firebase Authentication (Login/Signup), Firestore Database for post storage & user data,
          Firebase Storage for image uploads. The app mmimics the morden UI of the instagram design 
          allowing the user to create, display, edit, and delete posts.Demonstrates full-stack
           development with real-time data handling and secure user-based actions.
          </p>
        </div>
        </div>
        <div className="flex justify-center mx-44 bg-purple-200 p-2 mb-2">
          <img
            src={amazon}
            alt="netflix landing page"
            className="bg-white h-40 w-72 mr-19 mt-4 rounded-lg cursor-pointer"
          />
             <div className="description">
             <span className="text-sm font-bold text-indigo-500">Amazon Clone (fullstack)</span>
          <p className="text-gray-600">
          This is a full-stack React eCommerce platform built with Firebase (Authentication, Firestore,
           and Cloud Functions) and integrated with Stripe for secure payment processing.
            The platform supports user authentication, real-time product and order management,
            and seamless checkout flows. Designed with a focus on performance and user experience, 
            it efficiently handles product listings, user accounts, and transaction 
            processing—demonstrating end-to-end development of a modern online store.
          </p>
        </div>
        </div>
        <div className="flex justify-center mx-44 bg-purple-200 p-2 mb-2">
          <img
            src={airbnb}
            alt="netflix landing page"
            className="bg-white h-40 w-60 mr-12 mt-2 rounded-lg cursor-pointer"
          />
             <div className="description">
             <span className="text-sm font-bold text-indigo-500">Airbnb Clone (fullstack)</span>
          <p className="text-gray-600">
          A full-stack react property booking platform with a modern UI, built using HTML, CSS,
           and JavaScript with a JSON-powered fake backend for seamless data simulation. 
           Key features include interactive property listings with search and filtering, 
           date-picker calendar integration for booking availability,
           user authentication (login/signup) and booking management and 
           responsive design mirroring Airbnb’s intuitive interface.
          </p>
        </div>
        </div>
        <div className="flex justify-center mx-44 bg-purple-200 p-2 mb-2">
          <img
            src={tictactoe}
            alt="netflix landing page"
            className="bg-white h-40 w-60 mr-32 mt-4 rounded-lg cursor-pointer"
          />
             <div className="description">
             <span className="text-sm font-bold text-indigo-500">Tic Tac Toe game</span>
          <p className="text-gray-600">
          This interactive Tic-Tac-Toe game is built with React and styled using Styled 
          Components for a clean, modular design. It features a light/dark theme toggle 
          for personalized visuals and optional background music to enhance the gaming experience.
           The game includes classic turn-based logic, win/draw detection, and a responsive 
           board—showcasing React’s state management and dynamic UI rendering. Perfect for 
           demonstrating front-end development skills with a fun, polished twist.
          </p>
        </div>
        </div>
        <div className="flex justify-center mx-44 bg-purple-200 p-2 mb-2">
          <img
            src={calculator}
            alt="netflix landing page"
            className="bg-white h-40 w-60 ml-12 mr-40 mt-4 rounded-lg cursor-pointer"
          />
             <div className="description">
             <span className="text-sm font-bold text-indigo-500">Basic Calculator</span>
          <p className="text-gray-600">
          A responsive calculator built with  HTML, CSS, JavaScript that
           performs fundamental arithmetic operations.The calculator has 
           Core functionality Addition, subtraction, multiplication, and division and  
           has Real-time display showing current input and results.It also has Responsive
            design that works on mobile and desktop.
          </p>
        </div>
        </div>
        <div className="flex justify-center mx-44 bg-purple-200 p-2 mb-2">
          <img
            src={mathsapp}
            alt="netflix landing page"
            className="bg-white h-40 w-60  mr-32 mt-4 rounded-lg cursor-pointer"
          />
             <div className="description">
             <span className="text-sm font-bold text-indigo-500">Multiplication Game</span>
          <p className="text-gray-600">
          A dynamic, interactive game built with JavaScript to 
          help users practice multiplication tables.
          The game generates random multiplicands for varied difficulty.
          It  counts correct/incorrect answers in real-time and the user can see their score based on 
          their correct or incorrect answers.
          </p>
        </div>
        </div>
     
    
      <div className="javascript">
      <h1 className="border-t border-gray-400 font-bold text-indigo-500 px-4 mt-8 underline">
          HTML & CSS
        </h1>

        <p className="text-xs pb-2 px-4 text-gray-600">
          Note: These are static clones for educational purposes and has no
          backend functionality or real app content please visit my github repository for more.
        </p>
        <div className="flex justify-center mx-44 bg-purple-200 p-2 mb-2">
          <img
            src={netflix}
            alt="netflix landing page"
            className="bg-white h-40 w-60 mr-12 rounded-lg cursor-pointer"
          />
          <div className="description">
            <span className="text-sm font-bold text-indigo-500">Netflix landing page</span>
          <p className="text-gray-600">
            This is a responsive clone of the Netflix landing page built using
            HTML and CSS. The design mimics Netflix's modern UI.A hero section
            with a background image and call-to-action buttons.A clean layout
            with placeholder content for movies/shows. This project demonstrates
            front-end development skills in recreating a popular streaming
            platform's interface.
          </p>
          </div>
        </div>
        <div className="flex justify-center mx-44 bg-purple-200 p-2 mb-2">
          <img
            src={youtube}
            alt="netflix landing page"
            className="bg-white h-40 w-60 mr-12 rounded-lg cursor-pointer"
          />
             <div className="description">
             <span className="text-sm font-bold text-indigo-500">Youtube landing page</span>
          <p className="text-gray-600">
            This is a responsive clone of the Youtube landing page built using
            HTML and CSS. The design mimics Youtube's modern UI, with top and sidebar nav
             call-to-action buttons.A clean layout
            with placeholder content for videos. This project demonstrates
            front-end development skills in recreating a popular streaming
            platform's interface.
          </p>
          </div>
        </div>

        <div className="flex justify-center mx-44 bg-purple-200 p-2 mb-2">
          <img
            src={tesla}
            alt="netflix landing page"
            className="bg-white h-40 w-60 mr-12 rounded-lg cursor-pointer"
          />
             <div className="description">
             <span className="text-sm font-bold text-indigo-500">Tesla landing page</span>
          <p className="text-gray-600">
          This is a responsive Tesla landing page clone built with HTML and CSS,
           mimicking Tesla's sleek and minimalist design. Key features include a sticky navigation
            bar with the Tesla logo and menu items Model S, Model 3, etc.
          Hero section with a high-quality Tesla vehicle image and a call-to-action 
          button the "Order Now".Smooth hover effects on buttons and navigation links.
          </p>
        </div>
        </div>

        <div className="flex justify-center mx-44 bg-purple-200 p-2 mb-2">
          <img
            src={google}
            alt="netflix landing page"
            className="bg-white h-40 w-60 mr-12 mt-2 rounded-lg cursor-pointer"
          />
          <div className="description">
            <span className="text-sm font-bold text-indigo-500">Google keep landing page</span>
          <p className="text-gray-600">
          This responsive Google Keep landing page clone faithfully recreates 
          the app's distinctive interface using clean HTML and CSS. 
          The design captures Keep's signature sticky note aesthetic with a 
          card-based layout, and minimalist typography.
           Built with a responsiveness approach, the project utilizes modern CSS 
           techniques including Flexbox for optimal note arrangement and subtle
            hover effects for enhanced interactivity
          </p>
          </div>
        </div>

        <div className="flex justify-center mx-44 bg-purple-200 p-2 mb-2">
          <img
            src={twitter}
            alt="netflix landing page"
            className="bg-white h-40 w-60 mr-32 mt-2 rounded-lg cursor-pointer"
          />
          <div className="description">
            <span className="text-sm font-bold text-indigo-500">X landing page</span>
          <p className="text-gray-600">
          A modern, mobile-friendly landing page built with HTML5 and CSS3, featuring a clean layout,
           smooth animations, and a visually appealing design.The page features Flexbox for seamless 
           responsiveness across devices, custom animation lie hover effects and has semantic HTML for 
           accessibility and SEO best practices. This page demonstrates a strong front-end development
           fundamentals with focus on UI/UX principles.
          </p>
          </div>
        </div>
        <div className="flex justify-center mx-44 bg-purple-200 p-2 mb-2">
          <img
            src={instagram}
            alt="netflix landing page"
            className="bg-white h-40 w-60 mr-32 mt-2 rounded-lg cursor-pointer"
          />
          <div className="description">
            <span className="text-sm font-bold text-indigo-500">Instagram landing page</span>
          <p className="text-gray-600">
          A modern, mobile-friendly landing page built with HTML5 and CSS3, featuring a clean layout,
           smooth animations, and a visually appealing design.The page features Flexbox for seamless 
           responsiveness across devices, custom animation lie hover effects and has semantic HTML for 
           accessibility and SEO best practices. This page demonstrates a strong front-end development
           fundamentals with focus on UI/UX principles.
          </p>
          </div>
        </div>
  


      </div>
      
    
      </div>


    </div>
  );
};

export default Projects;

// This project is a responsive, pixel-perfect clone of Instagram's landing page built with HTML and CSS, meticulously replicating the platform's iconic interface. The design features Instagram's signature gradient logo, a clean post grid layout, and mobile-optimized components with subtle hover effects. Developed with a mobile-first approach using Flexbox and CSS Grid, this static front-end demo showcases strong attention to visual detail and responsive design principles. While it currently focuses on UI replication (including the login/signup section and footer navigation), the structure is intentionally built for easy expansion—potential future enhancements could integrate JavaScript for interactive modals, dark mode toggling, or even Firebase-backed authentication. This project serves as an excellent demonstration of modern CSS techniques and design-to-code translation skills.
