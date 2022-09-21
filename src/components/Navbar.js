const Navbar = () => {
    return (
        <div className="my-3 flex justify-center space-x-1">
            <nav className="px-5 space-x-4 py-3 rounded-full bg-slate-400 ">
                <a href="?" className="text-smal font-medium text-gray-700 hover:text-gray-700">Home</a>
                <a href="?" className="text-smal font-medium text-gray-700 hover:text-gray-700">Project</a>
                <a href="?" className="text-smal font-medium text-gray-700 hover:text-gray-700">Certificate</a>
                <a href="?" className="text-smal font-medium text-gray-700 hover:text-gray-700">Contact</a>
            </nav>
            <div className="rounded-full bg-slate-400">
                <button class="px-3 py-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 fill-gray-600" viewBox="0 0 16 16">
                        <path
                            d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM8.5 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm0 11a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm5-5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm-11 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9.743-4.036a.5.5 0 1 1-.707-.707.5.5 0 0 1 .707.707zm-7.779 7.779a.5.5 0 1 1-.707-.707.5.5 0 0 1 .707.707zm7.072 0a.5.5 0 1 1 .707-.707.5.5 0 0 1-.707.707zM3.757 4.464a.5.5 0 1 1 .707-.707.5.5 0 0 1-.707.707z" />
                    </svg>
                </button>
            </div>
        </div >
    );
}

export default Navbar;