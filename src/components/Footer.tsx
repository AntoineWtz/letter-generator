import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
    return (
        <footer className="bg-primary text-neutral py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <div className="text-neutral text-sm">
                        &copy; {new Date().getFullYear()} Letter App
                    </div>
                    <div className="flex space-x-6">
                        <Link
                            to="https://github.com/AntoineWtz"
                            target="_blank"
                            className="text-neutral hover:text-secondary transition-colors"
                        >
                            GitHub
                        </Link>
                        <Link
                            to="https://www.linkedin.com/in/antoine-wurtz"
                            target="_blank"
                            className="text-neutral hover:text-secondary transition-colors"
                        >
                            LinkedIn
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
