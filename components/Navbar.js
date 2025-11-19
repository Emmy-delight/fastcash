import { CgProfile } from "react-icons/cg";

export function Navbar () {
    return (
        <main className="bg-white shadow shadow-gray-200 w-full">
            <div className="flex justify-between h-[50px]">
                <h1>FastCash</h1>
                <ul className="flex gap-5">
                    <li>GetLoan</li>
                    <li>LoanHistory</li>
                    <li>Update-Profile</li>
                </ul>
                <div className="flex items-center gap-2">
                    <CgProfile />
                    <button>Login</button>
                </div> 
            </div>
        </main>
    )
} 