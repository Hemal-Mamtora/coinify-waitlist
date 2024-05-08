"use client";
import { BackgroundBeams } from "@saasfly/ui/background-beams";
import { useState } from "react";
import { env } from "~/env.mjs";

export default function IndexPage() {
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");

    const handleEmailChange = (e) => {
        const newEmail = e.target.value;
        setEmail(newEmail);
        setEmailError(validateEmail(newEmail) ? "" : "Invalid email");
    };

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    return (
        <section className="relative min-h-screen">
            <div className="container mx-auto flex min-h-screen flex-col justify-center text-center">
                <div className="mb-auto"></div>
                <div className="py-12 lg:py-16">
                    <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-blue-500">
                        🔥 Amazing SaaS Resources & Services!
                    </p>
                    <h1 className="mb-6 text-4xl font-bold lg:text-5xl">
                        Join The Waitlist for{" "}
                        <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                            Saasfly
                        </span>{" "}
                        Today!
                    </h1>
                    <p className="mx-auto mb-8 max-w-3xl text-lg text-gray-600">
                        We are exploring paths to open-source commercialization. If you want
                        to promote your open-source or SaaS service, please contact us.
                    </p>
                    <div className="relative z-10">
                        <a
                            href={process.env.NEXT_PUBLIC_GOOGLE_FORM_URL}
                            className="text-sm font-semibold text-blue-500 hover:text-blue-600"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Open Google Form
                        </a>
                    </div>

                    <div>
                        Please make sure your Google account is logged in.
                    </div>
                    <div className="relative z-10">
                        <a
                            href="https://nextify.ltd"
                            className="text-sm font-semibold text-blue-500 hover:text-blue-600"
                        >
                            More Details →
                        </a>
                    </div>
                </div>
                <div className="mt-auto"></div>
            </div>
            <BackgroundBeams className="absolute inset-0" />
        </section>
    );
}