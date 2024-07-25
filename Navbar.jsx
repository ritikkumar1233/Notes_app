import { useNavigate } from "react-router-dom";
import ProfileInfo from "../Cards/ProfileInfo";
import SearchBar from "../SearchBar/SearchBar";
import { useState } from "react";

export default function Navbar({userInfo})
{
    const navigate = useNavigate();

    const [searchQuery , setSearchQuery] = useState("");

    const onLogout = () =>{
        localStorage.clear();
        navigate("/login");
    }

    const handleSearch = () =>{

    };

    const onClearSearch = () =>{
        setSearchQuery("");
    }
    return(
        <div className="bg-white flex items-center justify-between px-6 py-2 drop-shadow">
            <h2 className="text-xl font-medium text-black py-2">Notes</h2>

            <SearchBar value={searchQuery}
            onChange={({target})=>{
                setSearchQuery(target.value);
            }}
            handleSearch={handleSearch}
            onClearSearch={onClearSearch}/>

            <ProfileInfo userInfo={userInfo} onLogout={onLogout}/>
        </div>
    )
};