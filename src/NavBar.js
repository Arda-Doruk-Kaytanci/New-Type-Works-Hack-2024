import React, { forwardRef } from 'react';
import { Route, Routes, Link, useLocation } from 'react-router-dom';
import HomePage from './HomePage';
import TestCatalogue from './TestCatalogue'
import TipCatalogue from './TipCatalogue';
import Test from './Test';
import Tip from './Tip';
import image1img from "./Images/image1.png"
import image2img from "./Images/image2.png"
import image3img from "./Images/image3.png"
import image4img from "./Images/image4.png"
import image5img from "./Images/image5.png"
import image6img from "./Images/image6.png"
import image7img from "./Images/image7.png"
import image8img from "./Images/image8.png"
import image9img from "./Images/image9.png"
import image10img from "./Images/image10.png"

const quizData10 = {
    question1: {
        question: "What are pop-up ads?",
        options: {
            A: "Tools to speed up your computer",
            B: "Unwanted windows or banners that appear while browsing the internet",
            C: "Legitimate email offers",
        },
        correctAnswer: "B",
    },
    question2: {
        question: "Why should you avoid clicking on pop-up ads?",
        options: {
            A: "They often lead to unsafe websites or install malicious software",
            B: "They will increase your internet speed",
            C: "They help protect your device",
        },
        correctAnswer: "A",
    },
    question3: {
        question: "What should you use to block pop-up ads?",
        options: {
            A: "Antivirus software",
            B: "A password manager",
            C: "A pop-up blocker",
        },
        correctAnswer: "C",
    },
    question4: {
        question: "What can happen if you click on a malicious pop-up ad?",
        options: {
            A: "Your device may download harmful software",
            B: "Your internet speed will improve",
            C: "You will receive fewer emails",
        },
        correctAnswer: "A",
    },
    question5: {
        question: "What should you do if you encounter a pop-up ad offering free products?",
        options: {
            A: "Click on it to claim the free product",
            B: "Close it immediately and don’t interact with it",
            C: "Provide your personal information to verify the offer",
        },
        correctAnswer: "B",
    },
    question6: {
        question: "How does a pop-up blocker help protect your device?",
        options: {
            A: "It speeds up your internet connection",
            B: "It removes all emails from your inbox",
            C: "It automatically prevents unwanted ads from appearing while browsing",
        },
        correctAnswer: "C",
    },
    question7: {
        question: "What should you do if a pop-up ad claims your computer is infected with a virus?",
        options: {
            A: "Click on the ad to remove the virus",
            B: "Close the pop-up and run your own trusted antivirus software",
            C: "Provide personal details to remove the virus",
        },
        correctAnswer: "B",
    },
    question8: {
        question: "What is a safer way to manage pop-up ads in your browser?",
        options: {
            A: "Click on every pop-up to investigate",
            B: "Enable a pop-up blocker in your browser settings",
            C: "Use pop-ups to speed up your device",
        },
        correctAnswer: "B",
    },
    question9: {
        question: "What is a common tactic used in malicious pop-up ads?",
        options: {
            A: "They offer free products or fake security warnings to trick users",
            B: "They improve your computer’s performance",
            C: "They provide legitimate discounts",
        },
        correctAnswer: "A",
    },
    question10: {
        question: "What is the best action to take when you see a suspicious pop-up ad?",
        options: {
            A: "Click on the ad to see what it offers",
            B: "Close the pop-up immediately without interacting",
            C: "Download any software it suggests",
        },
        correctAnswer: "B",
    },
};


const quizData9 = {
    question1: {
        question: "Who is a trusted source you can ask for help online?",
        options: {
            A: "A pop-up ad",
            B: "A family member",
            C: "An unknown person online",
        },
        correctAnswer: "B",
    },
    question2: {
        question: "What should you do if you're unsure about an email asking for personal information?",
        options: {
            A: "Ask a trusted family member or friend",
            B: "Click the link in the email",
            C: "Share your information immediately",
        },
        correctAnswer: "A",
    },
    question3: {
        question: "What is the main benefit of consulting trusted sources?",
        options: {
            A: "They can help you spot scams",
            B: "They will give you free products",
            C: "They will increase your internet speed",
        },
        correctAnswer: "A",
    },
    question4: {
        question: "What should you do if you're confused by a suspicious website?",
        options: {
            A: "Provide your personal information to see what happens",
            B: "Ask a trusted friend or family member for help",
            C: "Trust the website and continue",
        },
        correctAnswer: "B",
    },
    question5: {
        question: "How can staying in regular communication with trusted people help you?",
        options: {
            A: "It increases your internet speed",
            B: "It keeps you updated on the latest scams",
            C: "It helps you avoid software updates",
        },
        correctAnswer: "B",
    },
    question6: {
        question: "What is a good way to check if an online offer is legitimate?",
        options: {
            A: "Share your bank information to verify",
            B: "Click on the offer and see what happens",
            C: "Ask a trusted source to help you investigate the offer",
        },
        correctAnswer: "C",
    },
    question7: {
        question: "Why is it important to have trusted people help you navigate online threats?",
        options: {
            A: "They will remove security from your computer",
            B: "They can install pop-up ads on your computer",
            C: "They can help you understand the situation better",
        },
        correctAnswer: "C",
    },
    question8: {
        question: "What can trusted sources help you with?",
        options: {
            A: "Downloading malicious software",
            B: "Understanding suspicious messages or offers",
            C: "Finding more pop-up ads",
        },
        correctAnswer: "B",
    },
    question9: {
        question: "What should you do before making any quick decisions online?",
        options: {
            A: "Consult with a trusted family member or friend",
            B: "Immediately accept the offer",
            C: "Ignore all offers",
        },
        correctAnswer: "A",
    },
    question10: {
        question: "How can you stay updated on the latest scams?",
        options: {
            A: "By regularly talking with trusted family and friends",
            B: "By clicking on pop-up ads",
            C: "By downloading random software",
        },
        correctAnswer: "A",
    },
};


const quizData8 = {
    question1: {
        question: "What is a common warning sign of a scam?",
        options: {
            A: "A message from a trusted family member",
            B: "An email from a known company",
            C: "An offer that seems too good to be true",
        },
        correctAnswer: "C",
    },
    question2: {
        question: "What should you do if an email threatens you to act quickly?",
        options: {
            A: "Take your time and investigate the message",
            B: "Follow the instructions immediately",
            C: "Ignore it completely",
        },
        correctAnswer: "A",
    },
    question3: {
        question: "Why do scammers try to create urgency?",
        options: {
            A: "To trick you into making quick decisions",
            B: "To give you time to research their offer",
            C: "To provide free products",
        },
        correctAnswer: "A",
    },
    question4: {
        question: "What kind of payment requests are often a scam?",
        options: {
            A: "Direct payments to your bank account",
            B: "Gift cards or unconventional payments",
            C: "Payment through a verified company website",
        },
        correctAnswer: "B",
    },
    question5: {
        question: "What is a good strategy to avoid falling for scams?",
        options: {
            A: "Provide your information quickly",
            B: "Immediately follow the instructions in the email",
            C: "Take time to think before responding",
        },
        correctAnswer: "C",
    },
    question6: {
        question: "What is a red flag in an email or message?",
        options: {
            A: "A polite greeting from a known company",
            B: "Threats or promises of immediate rewards",
            C: "A normal message from a family member",
        },
        correctAnswer: "B",
    },
    question7: {
        question: "Why is it important to recognize warning signs of scams?",
        options: {
            A: "It helps you avoid falling victim to fraud",
            B: "It gives you more internet speed",
            C: "It helps you find good deals online",
        },
        correctAnswer: "A",
    },
    question8: {
        question: "What should you do if an email asks for immediate payment in gift cards?",
        options: {
            A: "Be suspicious and verify the request",
            B: "Provide the gift cards quickly",
            C: "Ignore the message completely",
        },
        correctAnswer: "A",
    },
    question9: {
        question: "What is a common tactic used by scammers?",
        options: {
            A: "Asking for a normal payment via a trusted service",
            B: "Giving you time to investigate their offer",
            C: "Creating urgency or threats",
        },
        correctAnswer: "C",
    },
    question10: {
        question: "Why should you take a step back and think before responding to urgent messages?",
        options: {
            A: "To avoid software updates",
            B: "To improve your internet speed",
            C: "To avoid falling for a scam",
        },
        correctAnswer: "C",
    },
};


const quizData7 = {
    question1: {
        question: "Why should you avoid accessing sensitive accounts on public Wi-Fi?",
        options: {
            A: "Public Wi-Fi is often unsecured, and scammers can steal your information",
            B: "It will make your internet slower",
            C: "It will increase your battery usage",
        },
        correctAnswer: "A",
    },
    question2: {
        question: "What is a safer way to browse the web on public Wi-Fi?",
        options: {
            A: "Turning off your firewall",
            B: "Using a Virtual Private Network (VPN)",
            C: "Downloading random software",
        },
        correctAnswer: "B",
    },
    question3: {
        question: "What type of internet connection should you avoid when dealing with personal information?",
        options: {
            A: "Your mobile data",
            B: "A private home network",
            C: "Public Wi-Fi in places like cafes or airports",
        },
        correctAnswer: "C",
    },
    question4: {
        question: "How can a VPN protect you on public Wi-Fi?",
        options: {
            A: "It removes pop-up ads",
            B: "It speeds up your internet connection",
            C: "It encrypts your internet connection",
        },
        correctAnswer: "C",
    },
    question5: {
        question: "What should you avoid doing on public Wi-Fi?",
        options: {
            A: "Watching videos",
            B: "Accessing your banking accounts",
            C: "Reading the news",
        },
        correctAnswer: "B",
    },
    question6: {
        question: "What is a potential risk of using public Wi-Fi without protection?",
        options: {
            A: "You will receive more emails",
            B: "Scammers can intercept your data",
            C: "Your internet will be slower",
        },
        correctAnswer: "B",
    },
    question7: {
        question: "What should you use to secure your internet connection on public Wi-Fi?",
        options: {
            A: "A VPN",
            B: "An antivirus program",
            C: "A firewall",
        },
        correctAnswer: "A",
    },
    question8: {
        question: "What type of information should you avoid entering on public Wi-Fi?",
        options: {
            A: "Personal or sensitive account information",
            B: "Your favorite color",
            C: "The name of your pet",
        },
        correctAnswer: "A",
    },
    question9: {
        question: "Why should you be cautious about public Wi-Fi?",
        options: {
            A: "It is often unsecured and can expose your data to scammers",
            B: "It will slow down your internet",
            C: "It will increase pop-up ads",
        },
        correctAnswer: "A",
    },
    question10: {
        question: "How can you keep your data secure when using public Wi-Fi?",
        options: {
            A: "Ignore all warnings about security",
            B: "Turn off pop-up blockers",
            C: "Use a VPN and avoid entering sensitive information",
        },
        correctAnswer: "C",
    },
};

const quizData6 = {
    question1: {
        question: "What is two-factor authentication (2FA)?",
        options: {
            A: "A pop-up ad blocker",
            B: "A security measure that requires two forms of identification",
            C: "A tool that speeds up your internet",
        },
        correctAnswer: "B",
    },
    question2: {
        question: "Why is two-factor authentication important?",
        options: {
            A: "It adds an extra layer of security to your online accounts",
            B: "It reduces the number of emails you receive",
            C: "It blocks pop-up ads",
        },
        correctAnswer: "A",
    },
    question3: {
        question: "What is an example of a second form of identification in two-factor authentication?",
        options: {
            A: "Your pet's name",
            B: "Your favorite color",
            C: "A code sent to your phone",
        },
        correctAnswer: "C",
    },
    question4: {
        question: "What should you do if you're unsure how to set up two-factor authentication?",
        options: {
            A: "Ignore it",
            B: "Ask a trusted family member or friend for help",
            C: "Turn off your internet",
        },
        correctAnswer: "B",
    },
    question5: {
        question: "How does two-factor authentication help protect your accounts?",
        options: {
            A: "It requires a second form of verification, making it harder for hackers to access your account",
            B: "It speeds up your computer",
            C: "It blocks all incoming emails",
        },
        correctAnswer: "A",
    },
    question6: {
        question: "What is a common second factor used in two-factor authentication?",
        options: {
            A: "A one-time code sent to your phone",
            B: "Your birthday",
            C: "Your pet's name",
        },
        correctAnswer: "A",
    },
    question7: {
        question: "How can two-factor authentication protect you from phishing attacks?",
        options: {
            A: "It removes all pop-up ads",
            B: "It increases your battery life",
            C: "It requires more than just a password, making it harder for scammers to access your account",
        },
        correctAnswer: "C",
    },
    question8: {
        question: "What should you do if you don't have two-factor authentication enabled on your accounts?",
        options: {
            A: "Enable it for additional security",
            B: "Turn off your computer",
            C: "Ignore it",
        },
        correctAnswer: "A",
    },
    question9: {
        question: "Which of the following is not a form of two-factor authentication?",
        options: {
            A: "A code sent to your phone",
            B: "Your favorite color",
            C: "Biometric fingerprint",
        },
        correctAnswer: "B",
    },
    question10: {
        question: "Why should you enable two-factor authentication on important accounts?",
        options: {
            A: "It adds an extra layer of protection and reduces the risk of unauthorized access",
            B: "It improves your battery life",
            C: "It reduces your pop-up ads",
        },
        correctAnswer: "A",
    },
};

const quizData5 = {
    question1: {
        question: "What should you do if an offer seems too good to be true?",
        options: {
            A: "Share your personal information quickly",
            B: "Accept the offer immediately",
            C: "Investigate the offer before acting",
        },
        correctAnswer: "C",
    },
    question2: {
        question: "What is a common trick scammers use to make their offers seem believable?",
        options: {
            A: "They provide verifiable company details",
            B: "They create a sense of urgency to make you act fast",
            C: "They block pop-up ads",
        },
        correctAnswer: "B",
    },
    question3: {
        question: "What is a red flag in an online offer?",
        options: {
            A: "An offer from a known company",
            B: "An offer that requires you to pay upfront for a free prize",
            C: "A discount on a product from a legitimate store",
        },
        correctAnswer: "B",
    },
    question4: {
        question: "What should you do before accepting any offers online?",
        options: {
            A: "Take time to research the offer",
            B: "Immediately accept the offer",
            C: "Share your bank details quickly",
        },
        correctAnswer: "A",
    },
    question5: {
        question: "Why do scammers create urgency in their offers?",
        options: {
            A: "To provide free services",
            B: "To give you time to research the offer",
            C: "To pressure you into making a quick decision",
        },
        correctAnswer: "C",
    },
    question6: {
        question: "What should you be cautious of when receiving a limited-time offer?",
        options: {
            A: "The offer will likely make your internet faster",
            B: "Scammers may use this tactic to pressure you into making a hasty decision",
            C: "You will receive free products",
        },
        correctAnswer: "B",
    },
    question7: {
        question: "What is a key indicator that an offer might be a scam?",
        options: {
            A: "It is from a family member",
            B: "It comes from a legitimate company",
            C: "It promises unrealistic rewards or benefits",
        },
        correctAnswer: "C",
    },
    question8: {
        question: "How can scammers trick people with offers that seem too good to be true?",
        options: {
            A: "They provide real prizes",
            B: "They create fake offers that ask for personal information or payment upfront",
            C: "They improve your internet speed",
        },
        correctAnswer: "B",
    },
    question9: {
        question: "What should you avoid doing when presented with an offer that seems suspicious?",
        options: {
            A: "Clicking on the offer and providing personal details",
            B: "Researching the offer and consulting trusted sources",
            C: "Ignoring the offer",
        },
        correctAnswer: "A",
    },
    question10: {
        question: "How can you protect yourself from scam offers?",
        options: {
            A: "Take your time to investigate before acting",
            B: "Accept all offers to see if they're real",
            C: "Provide your payment information quickly",
        },
        correctAnswer: "A",
    },
};

const quizData4 = {
    question1: {
        question: "Why is it important to keep your software and devices updated?",
        options: {
            A: "Updates often include security fixes that protect you from scammers",
            B: "Updates make your computer run slower",
            C: "Updates increase the number of pop-up ads",
        },
        correctAnswer: "A",
    },
    question2: {
        question: "What can happen if you don't update your software regularly?",
        options: {
            A: "Your devices may become vulnerable to cyberattacks",
            B: "Your devices will get faster",
            C: "Your internet speed will increase",
        },
        correctAnswer: "A",
    },
    question3: {
        question: "What is a key benefit of enabling automatic updates?",
        options: {
            A: "Your internet speed will improve",
            B: "Your devices will always have the latest security patches installed",
            C: "You will receive fewer pop-up ads",
        },
        correctAnswer: "B",
    },
    question4: {
        question: "What types of updates should you install regularly?",
        options: {
            A: "Updates that reduce screen brightness",
            B: "Software updates and security patches",
            C: "Updates that decrease battery usage",
        },
        correctAnswer: "B",
    },
    question5: {
        question: "What should you do if you get a notification for a software update?",
        options: {
            A: "Install the update as soon as possible",
            B: "Ignore it",
            C: "Turn off your computer",
        },
        correctAnswer: "A",
    },
    question6: {
        question: "What should you enable to make sure you're always protected by updates?",
        options: {
            A: "Automatic updates",
            B: "More pop-up ads",
            C: "An internet speed booster",
        },
        correctAnswer: "A",
    },
    question7: {
        question: "What is the main reason for regular software updates?",
        options: {
            A: "To add more pop-up ads",
            B: "To make your computer slower",
            C: "To protect your devices from new threats and vulnerabilities",
        },
        correctAnswer: "C",
    },
    question8: {
        question: "How can you ensure your computer is always up to date?",
        options: {
            A: "Ignore all update notifications",
            B: "Disable updates completely",
            C: "Enable automatic updates",
        },
        correctAnswer: "C",
    },
    question9: {
        question: "Why is it risky to ignore software updates?",
        options: {
            A: "It will make your computer run faster",
            B: "Outdated software can be vulnerable to hackers",
            C: "It will reduce pop-up ads",
        },
        correctAnswer: "B",
    },
    question10: {
        question: "What is a key feature of security updates?",
        options: {
            A: "They fix vulnerabilities that scammers might exploit",
            B: "They make your computer run slower",
            C: "They reduce your screen brightness",
        },
        correctAnswer: "A",
    },
};

const quizData3 = {
    question1: {
        question: "What makes a password strong and secure?",
        options: {
            A: "A mix of uppercase and lowercase letters, numbers, and symbols",
            B: "Your pet's name",
            C: "The word 'password'",
        },
        correctAnswer: "A",
    },
    question2: {
        question: "Why should you avoid using easily guessable passwords like '123456'?",
        options: {
            A: "Because they improve your internet speed",
            B: "Because they are easy for hackers to guess",
            C: "Because they slow down your computer",
        },
        correctAnswer: "B",
    },
    question3: {
        question: "What tool can help you create and manage strong passwords?",
        options: {
            A: "A pop-up ad",
            B: "An internet booster",
            C: "A password manager",
        },
        correctAnswer: "C",
    },
    question4: {
        question: "What is a common mistake people make when creating passwords?",
        options: {
            A: "Using a mix of uppercase, lowercase letters, numbers, and symbols",
            B: "Changing passwords frequently",
            C: "Using easily guessable passwords like 'password' or '123456'",
        },
        correctAnswer: "C",
    },
    question5: {
        question: "What is the benefit of using unique passwords for different accounts?",
        options: {
            A: "It slows down your internet speed",
            B: "It ensures that if one password is compromised, the others remain secure",
            C: "It reduces pop-up ads",
        },
        correctAnswer: "B",
    },
    question6: {
        question: "What should you do if you're having trouble remembering multiple strong passwords?",
        options: {
            A: "Use '123456' for all passwords",
            B: "Use a password manager to securely store them",
            C: "Write them down on a piece of paper",
        },
        correctAnswer: "B",
    },
    question7: {
        question: "Why should you change your passwords regularly?",
        options: {
            A: "To reduce the risk of someone accessing your accounts",
            B: "To slow down your computer",
            C: "To increase the number of pop-up ads",
        },
        correctAnswer: "A",
    },
    question8: {
        question: "How can you create a strong password?",
        options: {
            A: "By using a combination of letters, numbers, and symbols",
            B: "By using your name",
            C: "By using 'password'",
        },
        correctAnswer: "A",
    },
    question9: {
        question: "What is the benefit of using a password manager?",
        options: {
            A: "It securely stores your passwords and helps you create strong, unique passwords",
            B: "It improves your internet speed",
            C: "It reduces pop-up ads",
        },
        correctAnswer: "A",
    },
    question10: {
        question: "What is a bad example of a password?",
        options: {
            A: "'password' or '123456'",
            B: "A strong combination of letters, numbers, and symbols",
            C: "A password generated by a password manager",
        },
        correctAnswer: "A",
    },
};

const quizData2 = {
    question1: {
        question: "What kind of personal information should you avoid sharing over email or text?",
        options: {
            A: "The name of your pet",
            B: "Social Security numbers, bank account information, and passwords",
            C: "Your favorite color",
        },
        correctAnswer: "B",
    },
    question2: {
        question: "Why should you never share personal information over unsecured methods?",
        options: {
            A: "Because it improves your battery life",
            B: "Because it slows down your internet speed",
            C: "Because scammers can steal your information",
        },
        correctAnswer: "C",
    },
    question3: {
        question: "What is a common tactic scammers use to steal personal information?",
        options: {
            A: "Phishing emails or fake messages asking for personal details",
            B: "Sending legitimate emails from trusted sources",
            C: "Improving your internet speed",
        },
        correctAnswer: "A",
    },
    question4: {
        question: "What should you do if you receive a suspicious email asking for personal information?",
        options: {
            A: "Verify the request by contacting the company directly",
            B: "Provide your personal information immediately",
            C: "Ignore the message",
        },
        correctAnswer: "A",
    },
    question5: {
        question: "Who can help you verify the legitimacy of a request for personal information?",
        options: {
            A: "A trusted family member or friend",
            B: "A random stranger online",
            C: "A pop-up ad",
        },
        correctAnswer: "A",
    },
    question6: {
        question: "What should you do if you're unsure about sharing personal details online?",
        options: {
            A: "Ask for help from someone you trust",
            B: "Share the information immediately",
            C: "Ignore the message",
        },
        correctAnswer: "A",
    },
    question7: {
        question: "What is a safe way to protect your personal information online?",
        options: {
            A: "Never share sensitive details like passwords or bank information via email",
            B: "Provide your passwords to any company that asks",
            C: "Use your birthdate as your password",
        },
        correctAnswer: "A",
    },
    question8: {
        question: "What is the risk of sharing personal information with unknown sources?",
        options: {
            A: "You will receive fewer emails",
            B: "You will see more pop-up ads",
            C: "Your information could be used in a scam or identity theft",
        },
        correctAnswer: "C",
    },
    question9: {
        question: "How can you ensure the security of your personal information?",
        options: {
            A: "Only share personal details through secure, trusted channels",
            B: "Share your personal details with any website",
            C: "Turn off your antivirus software",
        },
        correctAnswer: "A",
    },
    question10: {
        question: "What should you avoid sharing with companies through email or text?",
        options: {
            A: "Your favorite color",
            B: "Your birthdate",
            C: "Sensitive personal information like Social Security numbers and passwords",
        },
        correctAnswer: "C",
    },
};

const quizData1 = {
    question1: {
        question: "What should you do if you receive an unexpected email asking for personal information?",
        options: {
            A: "Be suspicious and verify the request before responding",
            B: "Provide your personal information immediately",
            C: "Ignore the email completely",
        },
        correctAnswer: "A",
    },
    question2: {
        question: "Why should you be skeptical of unexpected messages or emails?",
        options: {
            A: "Scammers often impersonate legitimate companies to steal your information",
            B: "They will send you fewer emails",
            C: "They are always legitimate",
        },
        correctAnswer: "A",
    },
    question3: {
        question: "What is phishing?",
        options: {
            A: "A harmless email",
            B: "A scam where someone pretends to be a legitimate company",
            C: "A way to speed up your internet",
        },
        correctAnswer: "B",
    },
    question4: {
        question: "What should you do if you receive a suspicious message from someone claiming to be a bank?",
        options: {
            A: "Click the link in the email",
            B: "Share your banking information quickly",
            C: "Verify the request by contacting the bank directly through official channels",
        },
        correctAnswer: "C",
    },
    question5: {
        question: "Why do scammers impersonate companies in their emails?",
        options: {
            A: "To trick you into providing personal information or money",
            B: "To give you free products",
            C: "To improve your internet speed",
        },
        correctAnswer: "A",
    },
    question6: {
        question: "What should you do before clicking on any links in an unexpected email?",
        options: {
            A: "Click the link to see if it works",
            B: "Verify the email’s legitimacy by contacting the company through official means",
            C: "Ignore the email",
        },
        correctAnswer: "B",
    },
    question7: {
        question: "What is a common tactic scammers use in unexpected emails?",
        options: {
            A: "Sending you legitimate information",
            B: "Pretending to be from a bank or well-known company",
            C: "Helping you avoid scams",
        },
        correctAnswer: "B",
    },
    question8: {
        question: "What should you avoid doing when receiving an unexpected email from an unknown source?",
        options: {
            A: "Verifying the email with the company",
            B: "Clicking on any links or downloading attachments",
            C: "Asking for help from a family member",
        },
        correctAnswer: "B",
    },
    question9: {
        question: "How can you protect yourself from phishing scams?",
        options: {
            A: "By being skeptical of unexpected emails and verifying the source",
            B: "By clicking on all links",
            C: "By sharing your personal information quickly",
        },
        correctAnswer: "A",
    },
    question10: {
        question: "What is the best way to handle suspicious emails?",
        options: {
            A: "Verify the sender and avoid clicking on links",
            B: "Click the links to investigate",
            C: "Provide personal details immediately",
        },
        correctAnswer: "A",
    },
};




const NavBar = forwardRef((props, ref) => {
    const location = useLocation();
    const elements = [
        <Tip image={image1img} summary="Pop-up ads are small windows or banners that suddenly appear while you are browsing the internet, often trying to grab your attention with flashy offers or warnings. Although some pop-ups are harmless, many are used by cybercriminals to trick people into visiting unsafe websites or downloading malicious software. These ads may promise free products, services, or even security warnings, but they often lead to scams or harmful downloads. It’s important to avoid clicking on any unfamiliar pop-ups and to use a pop-up blocker in your browser settings to prevent these ads from showing up. Pop-up blockers help keep your browsing experience safer by automatically blocking unwanted advertisements. Always be cautious, and if a pop-up seems suspicious, close it immediately without interacting with it." keywords={{ "Pop-Up Ads:": "Unwanted windows or banners that appear on your screen while you are browsing the internet.", "Malicious Software (Malware):": "Harmful software that can be installed on your device to steal information or damage it.", "Pop-Up Blocker:": "A tool in your browser that automatically blocks pop-up ads from showing on your screen.", "Scam Websites:": "Fake websites created to trick users into providing personal information or downloading harmful software" }} extra={{ "Simple Explanation of Pop-Ups:": "Pop-up ads are like someone popping into your house uninvited and trying to sell you something. Sometimes they look harmless, but they could be trying to trick you into giving away your personal details or money.", "Why Pop-Up Blockers Are Important:": "Think of a pop-up blocker as a gatekeeper that stops these unwanted guests (ads) from entering your house (computer screen) in the first place." }} keypoints={{ "What Are Pop-Up Ads?": "Pop-up ads are windows or banners that appear suddenly on your screen while browsing the web, often advertising products or services.", "Risks of Clicking Pop-Up Ads:": "Many pop-up ads are designed by scammers to lead you to unsafe websites or install malicious software on your device.They might try to trick you by offering free items or showing fake security warnings.", "Avoid Clicking Unfamiliar Ads:": "It’s safer to avoid interacting with pop-up ads entirely, especially if you do not recognize the source.", "Use a Pop-Up Blocker:": "Enable the pop-up blocker in your browser settings to automatically prevent unwanted ads from appearing while you browse" }} />,
        <Tip image={image2img} summary="If you're unsure about something online, ask a trusted family member, friend, or contact a reliable support service. Staying informed with reliable help is crucial for avoiding scams." keywords={{ "Trusted Sources:": "Family, friends, or verified services you can reach out to for guidance in uncertain online situations.", "Reliable Support:": "Services or hotlines that provide legitimate help for identifying and avoiding scams." }} extra={{ "Importance of Trusted Sources:": "It’s always better to ask for help than risk falling victim to an online scam. Having a trusted network can keep you informed and updated.", "Communicate Regularly:": "Staying in regular communication with trustworthy individuals helps you stay safe and updated on the latest online threats." }} keypoints={{ "Why rely on trusted sources?": "Scammers often rely on their victims being isolated or confused. Trusted individuals can help you see through a scam.", "How to ask for help:": "Reach out to people you trust and provide them with the details of any suspicious online interactions." }} />,
        <Tip image={image3img} summary="Be aware of warning signs such as threats, too-good-to-be-true offers, requests for immediate payments, or requests for gift cards." keywords={{ "Warning Signs:": "Suspicious offers, immediate payment requests, or threats are often red flags for scams.", "Gift Cards:": "Legitimate businesses rarely ask for payment through gift cards." }} extra={{ "Why Scammers Use Urgency:": "Scammers often try to pressure you into making quick decisions. Be cautious of urgent requests.", "Avoid Quick Decisions:": "Take time to think before responding to any message asking for immediate action." }} keypoints={{ "Threats or Urgency:": "Scammers might try to scare you into acting quickly.", "Unusual Payment Requests:": "Any request for gift cards or unconventional payment methods is a red flag." }} />,
        <Tip image={image4img} summary="Avoid accessing sensitive accounts (like banking or email) when connected to public Wi-Fi in places like cafes or airports. Scammers can use these networks to steal your information." keywords={{ "Public Wi-Fi:": "Open internet connections available in public spaces that may not be secure.", "VPN:": "Virtual Private Network, a tool to secure your internet connection when using public Wi-Fi." }} extra={{ "Why Public Wi-Fi Is Risky:": "Public Wi-Fi is often unsecured, making it easier for cybercriminals to access your data.", "How to Protect Yourself:": "Use a VPN to encrypt your connection and avoid accessing sensitive information." }} keypoints={{ "Avoid Sensitive Transactions:": "Never log into important accounts over public Wi-Fi.", "Use a VPN:": "A VPN adds an extra layer of security when you're on public Wi-Fi." }} />,
        <Tip image={image5img} summary="Wherever possible, enable two-factor authentication for your online accounts. This adds an extra layer of security by requiring a second form of identification, like a code sent to your phone." keywords={{ "Two-Factor Authentication (2FA):": "A method of confirming a user's identity using a combination of two different factors.", "Security Code:": "A temporary code sent to your phone or email to confirm your identity." }} extra={{ "Why 2FA Is Important:": "2FA makes it much harder for hackers to access your accounts.", "How to Set Up 2FA:": "Most major platforms offer 2FA as a security option in account settings." }} keypoints={{ "How 2FA Protects You:": "Even if someone has your password, they would still need the second factor (e.g., a code) to access your account.", "Enable 2FA:": "Set up 2FA for all your important accounts." }} />,
        <Tip image={image6img} summary="If you see an offer for a free prize, lottery win, or a 'limited-time offer' asking for payment upfront, it’s likely a scam. Remember, if it sounds too good to be true, it probably is." keywords={{ "Too-Good-to-Be-True Offers:": "Offers that promise a lot but ask for little or no effort are often scams.", "Scam:": "A fraudulent scheme designed to deceive people." }} extra={{ "Scammers Create Urgency:": "Scammers often create a sense of urgency to trick people into making quick decisions.", "Investigate Before Acting:": "Always take the time to research or ask for help before responding to offers." }} keypoints={{ "Suspicious Offers:": "If it sounds too good to be true, it probably is.", "Avoid Quick Decisions:": "Scammers often try to push victims into making hasty decisions." }} />,
        <Tip image={image7img} summary="Make sure your computer, phone, and any software you use are always up to date. Updates often include important security fixes that help protect you from scammers." keywords={{ "Software Update:": "A new version of a program or system that fixes bugs and improves security.", "Security Fix:": "An update that repairs vulnerabilities in software." }} extra={{ "Why Updates Matter:": "Outdated software is more vulnerable to attacks.", "Enable Automatic Updates:": "Set your devices to update automatically to ensure they’re always secure." }} keypoints={{ "Stay Updated:": "Make sure all your devices are running the latest software.", "Automatic Updates:": "Enable automatic updates to stay protected." }} />,
        <Tip image={image8img} summary="Create strong passwords using a mix of upper and lowercase letters, numbers, and symbols. Avoid using easily guessable passwords like '123456' or 'password.'" keywords={{ "Strong Password:": "A password that is hard to guess and includes a combination of letters, numbers, and symbols.", "Password Manager:": "A tool that stores and manages passwords securely." }} extra={{ "Why Strong Passwords Matter:": "Weak passwords can be easily guessed, putting your accounts at risk.", "Use a Password Manager:": "Password managers help you create and store secure passwords without having to remember them all." }} keypoints={{ "Create Strong Passwords:": "Mix letters, numbers, and symbols in your passwords.", "Avoid Common Passwords:": "Don’t use passwords that are easy to guess, like 'password' or '123456.'" }} />,
        <Tip image={image9img} summary="Never share personal details like your Social Security number, bank account information, or passwords over email or text. Reputable companies will not ask for this information via unsecured methods." keywords={{ "Personal Information:": "Sensitive data like Social Security numbers, bank account details, or passwords.", "Reputable Company:": "A legitimate business that does not ask for sensitive information through email or text." }} extra={{ "Think Before Sharing:": "If you're unsure whether to share information, ask someone you trust for advice.", "Verify Requests:": "Always verify that the request for personal information is legitimate before responding." }} keypoints={{ "Protect Personal Info:": "Never share sensitive information via email or text.", "Verify Requests:": "If a company asks for personal info, verify it through official channels." }} />,
        <Tip image={image10img} summary="If you receive an email, phone call, or message from someone you don't know or from a company asking for personal information, be suspicious. Don't click on links or download attachments from unknown sources." keywords={{ "Phishing:": "A scam where fraudsters impersonate legitimate organizations to steal your personal information.", "Unknown Sources:": "Emails or messages from unfamiliar senders, often containing harmful content." }} extra={{ "Verify Before Clicking:": "If you receive an email asking for personal information, verify the request by contacting the company directly.", "Be Suspicious:": "Always be cautious of messages asking for personal data or urgent action." }} keypoints={{ "Be Cautious:": "If you don’t know the sender, don’t click on links or download attachments.", "Verify Before Acting:": "Contact the company directly before responding to any suspicious requests." }} />
    ]
    const isActive = (path) => location.pathname === path;

    return (
        <>
            <div className='Nav' ref={ref}>
                <nav>
                    <Link to="/" className='link' style={{ color: isActive('/') ? 'black' : 'grey', fontWeight: isActive('/') ? 'bold' : 'normal' }}>Homepage</Link>
                    <Link to="/tips" className='link' id='tipsLink' style={{ color: isActive('/tips') ? 'black' : 'grey', fontWeight: isActive('/tips') ? 'bold' : 'normal' }}>Tips</Link>
                    <Link to="/tests" id='testLink' className='link' style={{ color: isActive('/crops') ? 'black' : 'grey', fontWeight: isActive('/crops') ? 'bold' : 'normal' }}>Tests</Link>
                </nav>
                <hr />
            </div>


            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/tips' element={<TipCatalogue />} />
                <Route path='/tests' element={<TestCatalogue />} />
                <Route path='/tips/don’t-respond-to-pop-up-ads' element={elements[0]}></Route>
                <Route path='/tips/rely-on-trusted-sources-for-help' element={elements[1]}></Route>
                <Route path='/tips/know-the-warning-signs-of-scams' element={elements[2]}></Route>
                <Route path='/tips/be-cautious-of-public-wi-fi' element={elements[3]}></Route>
                <Route path='/tips/learn-about-two-factor-authentication-(2fa)' element={elements[4]}></Route>
                <Route path='/tips/be-careful-of-offers-that-seem-too-good-to-be-true' element={elements[5]}></Route>
                <Route path='/tips/keep-software-and-devices-updated' element={elements[6]}></Route>
                <Route path='/tips/use-strong,-unique-passwords' element={elements[7]}></Route>
                <Route path='/tips/protect-your-personal-information' element={elements[8]}></Route>
                <Route path='/tips/be-skeptical-of-unexpected-emails-and-messages' element={elements[9]}></Route>

                <Route path='/tests/don’t-respond-to-pop-up-ads' element={<Test form={quizData10} ref2={ref} />}></Route>
                <Route path='/tests/rely-on-trusted-sources-for-help' element={<Test form={quizData9} ref2={ref} />}></Route>
                <Route path='/tests/know-the-warning-signs-of-scams' element={<Test form={quizData8} ref2={ref} />}></Route>
                <Route path='/tests/be-cautious-of-public-wi-fi' element={<Test form={quizData7} ref2={ref} />}></Route>
                <Route path='/tests/learn-about-two-factor-authentication-(2fa)' element={<Test form={quizData6} ref2={ref} />}></Route>
                <Route path='/tests/be-careful-of-offers-that-seem-too-good-to-be-true' element={<Test form={quizData5} ref2={ref} />}></Route>
                <Route path='/tests/keep-software-and-devices-updated' element={<Test form={quizData4} ref2={ref} />}></Route>
                <Route path='/tests/use-strong,-unique-passwords' element={<Test form={quizData3} ref2={ref} />}></Route>
                <Route path='/tests/protect-your-personal-information' element={<Test form={quizData2} />}></Route>
                <Route path='/tests/be-skeptical-of-unexpected-emails-and-messages' element={<Test form={quizData1} ref2={ref} />}></Route>

            </Routes>
        </>
    );
});

export default NavBar;

