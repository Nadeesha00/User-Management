import React from 'react'
import LoginForm from '../components/forms/login';



export default function LoginPage() {
    return (
        <div className="flex justify-center items-center h-[750px] ">
            <div className="flex flex-col h-auto items-center gap-[7px] border border-gray-500 rounded-[12px]">
                <img
                    src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png"
                    alt="Logo"
                    className="w-[64px] h-[64px]"
                />

                <div className="w-[436px] h-[496px] shadow-xl p-8 rounded-xl bg-white">

                    <div className="flex flex-col items-center gap-3 self-stretch">
                        <h1 className="w-full text-center text-card-foreground font-semibold text-2xl leading-8 font-inter">
                            Welcome
                        </h1>
                        <p className="text-center text-muted-foreground font-normal text-base leading-6 font-inter">
                            Enter your login details below
                        </p>
                    </div>
                    <div className="mt-12">
                        <LoginForm />
                    </div>
                </div>
            </div>
        </div>
    );
}
