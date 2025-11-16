import React, { useState } from "react";

function Login({ onLogin }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email || !password) {
            setError("Please enter both email and password.");
            return;
        }

        setError("");

        try {
            const response = await fakeLoginApi(email, password);
            if (response.success) {
                onLogin(response.user);
            } else {
                setError(response.message);
            }
        } catch {
            setError("Something went wrong. Please try again.");
        }
    };

    const handleGoogleLogin = () => {
        console.log("Google login clicked");
        // Integrate Google OAuth here
    };

    const handleAppleLogin = () => {
        console.log("Apple login clicked");
        // Integrate Apple OAuth here
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
            <form
                onSubmit={handleSubmit}
                className="bg-white dark:bg-gray-800 p-8 rounded shadow-md w-full max-w-sm"
            >
                <h2 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-gray-100">
                    Login
                </h2>

                {error && <p className="text-red-500 mb-4">{error}</p>}

                <div className="mb-4">
                    <label className="block mb-1 font-semibold text-gray-700 dark:text-gray-200">Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full border rounded px-3 py-2 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-600"
                        placeholder="Enter your email"
                        required
                    />
                </div>

                <div className="mb-6">
                    <label className="block mb-1 font-semibold text-gray-700 dark:text-gray-200">Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full border rounded px-3 py-2 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-600"
                        placeholder="Enter your password"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-600 dark:bg-blue-500 text-white py-2 rounded hover:bg-blue-700 dark:hover:bg-blue-600 transition mb-4"
                >
                    Login
                </button>

                <div className="flex flex-col gap-3">
                    <button
                        type="button"
                        onClick={handleGoogleLogin}
                        className="w-full flex items-center justify-center gap-2 py-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-600 transition"
                    >
                        Sign in with Google
                    </button>
                    <button
                        type="button"
                        onClick={handleAppleLogin}
                        className="w-full flex items-center justify-center gap-2 py-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-600 transition"
                    >
                        Sign in with Apple
                    </button>
                </div>
            </form>
        </div>
    );
}

// Fake API for demo
// const fakeLoginApi = (email, password) =>
//     new Promise((resolve) =>
//         setTimeout(() => {
//             if (email === "test@example.com" && password === "123456") {
//                 resolve({ success: true, user: { email } });
//             } else {
//                 resolve({ success: false, message: "Invalid credentials" });
//             }
//         }, 1000)
//     );

export default Login;
