import React, { useState } from "react";
import './style.css';

export default function Registration() {
    const [user, setUser] = useState({
        email: '',
        username: '',
        password: '',
        passwordConfirm: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value,
        });

        if (name === "email" && value.includes("@") && user.username === '') {
            const usernameFromEmail = value.split('@')[0];
            setUser({
                ...user,
                username: usernameFromEmail,
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(user)
    };

    return (
        <div className="section">
            <h3>REGISTRATION</h3>
            <form className="form" onSubmit={handleSubmit}>
                <div className="input_container">
                    <input type="email" name="email" placeholder="Email Address" value={user.email} onChange={handleInputChange} required />
                    <input type="text" name="username" placeholder="User Name" value={user.username} onChange={handleInputChange} />
                    <input type="password" name="password" placeholder="Password" value={user.password} onChange={handleInputChange} />
                    <input type="password" name="passwordConfirm" placeholder="Confirm Password" value={user.passwordConfirm} onChange={handleInputChange} />
                </div>
                <button>REGISTER</button>
            </form>
        </div>
    );
}
