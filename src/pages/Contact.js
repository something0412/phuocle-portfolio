import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import "../styles/contact.css";
import Footer from "../components/Footer";
import { useState } from "react";
import plane_icon from "../assets/icons/paper-plane.png";
import { logos } from "../information/statics";
import { links } from "../information/data";
import emailjs from "@emailjs/browser";
const publicKEY = import.meta.env.VITE_PUBLIC_KEY;
const templateID = import.meta.env.VITE_TEMPLATE_ID;
const serviceID = import.meta.env.VITE_SERVICE_ID;
function Contact() {
    const ContactForm = () => {
        const [otherSubject, setOtherSubject] = useState("");
        const [formData, setFormData] = useState({
            name: "",
            email: "",
            subject: "",
            message: "",
        });
        const msPlHolderText = {
            "": "Anything...",
            jobOpportunities: "I will do my best capturing this chance",
            advice: "I would appreciate any advice given",
            ideas: "Share your idea here...",
            collab: "Let's build something together!",
            other: "Feel free to write anything",
        };
        let toFill = [];
        const [alertText, setAlertText] = useState("");
        const onSubmitForm = (e) => {
            e.preventDefault();
            // prevent unfilled fields before sending
            for (const section of Object.keys(formData)) {
                if (formData[section] == "") {
                    toFill.push(section.toUpperCase());
                }
            }
            setAlertText(`Oops, I think you forgot to put in the information for the ${toFill.join(", ")} section${toFill.length > 1 ? "s" : ""}`);
            !toFill.length && sendEmail();
            toFill = [];
        };
        const sendEmail = () => {
            console.log("sent");
            emailjs
                .send(serviceID, templateID, {
                name: formData.name,
                email: formData.email,
                subject: formData.subject.toLowerCase() === "other"
                    ? `${formData.subject}: ${otherSubject}`
                    : formData.subject,
                message: formData.message,
            }, publicKEY)
                .then(() => {
                alert("Email sent successfully!");
                setFormData({
                    name: "",
                    email: "",
                    subject: "",
                    message: "",
                });
                otherSubject && setOtherSubject("");
            })
                .catch((error) => {
                console.log(error);
                alert("Failed to send email.");
            });
            setAlertText("");
        };
        return (_jsxs("form", { className: "contact-form", onSubmit: onSubmitForm, autoComplete: "off", children: [_jsx("h2", { children: "Let me know what you have in mind" }), _jsx("p", { className: "alert-text", children: alertText }), _jsxs("div", { className: "name-email-div", children: [_jsxs("div", { className: "sender-name-div", children: [_jsx("label", { children: "Name" }), _jsx("input", { type: "text", name: "sender_name", placeholder: "Your Name", value: formData.name, onChange: (e) => setFormData({
                                        ...formData,
                                        name: e.target.value,
                                    }) })] }), _jsxs("div", { className: "sender-email-div", children: [_jsx("label", { children: "Email" }), _jsx("input", { type: "email", name: "sender_email", placeholder: "Your Email", value: formData.email, onChange: (e) => setFormData({
                                        ...formData,
                                        email: e.target.value,
                                    }) })] })] }), _jsxs("div", { className: "subject-div", children: [_jsx("label", { children: "Subject" }), _jsxs("select", { name: "subject", id: "subject", value: formData.subject, onChange: (e) => setFormData({
                                ...formData,
                                subject: e.target.value,
                            }), children: [_jsx("option", { value: "", disabled: true, children: "-- Select a topic --" }), _jsx("option", { value: "jobOpportunities", children: "Job Opportunities" }), _jsx("option", { value: "advice", children: "Advice" }), _jsx("option", { value: "ideas", children: "Ideas" }), _jsx("option", { value: "collab", children: "Collaborate" }), _jsx("option", { value: "other", children: "Other" })] }), formData.subject == "other" && (_jsx("input", { className: "other-subject", type: "text", name: "subject", placeholder: "What is this about?", required: true, value: otherSubject, onChange: (e) => setOtherSubject(e.target.value) }))] }), _jsxs("div", { className: "message-div", children: [_jsx("label", { children: "Message" }), _jsx("textarea", { name: "message", placeholder: msPlHolderText[formData.subject], value: formData.message, onChange: (e) => setFormData({
                                ...formData,
                                message: e.target.value,
                            }) })] }), _jsx("div", { className: "btn-div", children: _jsxs("button", { className: "submit-btn", type: "submit", children: [_jsx("p", { children: "Send" }), _jsx("img", { src: plane_icon, alt: "plane-icon" })] }) })] }));
    };
    const ContactMedia = () => {
        return (_jsxs("div", { className: "contact-media-div", children: [_jsx("h2", { children: "Connect with me through..." }), _jsxs("div", { className: "anchor-div", children: [_jsxs("a", { href: links.linkedin, target: "blank", className: "linkedin", children: [_jsx("img", { src: logos.linkedin_logo, alt: "" }), _jsx("p", { children: "LinkedIn" })] }), _jsxs("a", { href: links.discord, target: "blank", className: "discord", children: [_jsx("img", { src: logos.discord_logo, alt: "" }), _jsx("p", { children: "Discord" })] }), _jsxs("a", { href: links.instagram, target: "blank", className: "instagram", children: [_jsx("img", { src: logos.instagram_logo, alt: "" }), _jsx("p", { children: "Instagram" })] })] })] }));
    };
    const ContactSeparator = () => {
        return (_jsxs("div", { className: "contact-separator", children: [_jsx("div", { className: "vertical-line" }), _jsx("p", { children: "or" }), _jsx("div", { className: "vertical-line" })] }));
    };
    return (_jsxs(_Fragment, { children: [_jsxs("div", { className: "page contact-page", children: [_jsx(ContactMedia, {}), _jsx(ContactSeparator, {}), _jsx(ContactForm, {})] }), _jsx(Footer, {})] }));
}
export default Contact;
