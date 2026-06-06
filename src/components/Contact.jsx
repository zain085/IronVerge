import React, { useState } from "react";
import { ClipLoader } from "react-spinners";
import { toast } from "react-toastify";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic Validation Check
    if (!name || !email || !message) {
      toast.error("Please fill in all fields before sending.");
      return;
    }

    // Trigger local simulation loader
    setLoading(true);

    // Simulate an API delay (1.5 seconds) so the user experiences the full industrial feedback loop
    setTimeout(() => {
      // Clear inputs on success
      setName("");
      setEmail("");
      setMessage("");
      
      // Success Alert Notification
      toast.success("Message transmitted successfully to IronVerge!");
      setLoading(false);
    }, 1500);
  };

  return (
    <section className="contact">
      <form onSubmit={handleSubmit}>
        <h1>CONTACT US</h1>
        <div>
          <label>Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Message</label>
          <textarea
            placeholder="Enter your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <button
          type="submit"
          disabled={loading}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "15px",
          }}
        >
          {loading && <ClipLoader size={20} color="white" />}
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </section>
  );
};

export default Contact;