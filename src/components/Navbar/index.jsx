import { useEffect, useState, useRef } from "react"
import { NavContainer, NavWrapper, Search, SearchInput } from "./styles"
import { NavLink } from "react-router-dom"

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false)
    const [searchOpen, setSearchOpen] = useState(false)
    const [searchLocked, setSearchLocked] = useState(false)

    const timeoutRef = useRef(null)
    const searchRef = useRef(null)

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setSearchOpen(false)
                setSearchLocked(false)
            }
        }
    document.addEventListener("mousedown", handleClickOutside)

    return () => {
        document.removeEventListener("mousedown", handleClickOutside)
    }
}, [])

    const handleMouseEnter = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
        }
        setSearchOpen(true)
    }

    const handleMouseLeave = () => {
        if (searchLocked) return

        timeoutRef.current = setTimeout(() => {
            setSearchOpen(false)
        }, 300);
    }

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []); 

    return (
        <NavWrapper scrolled={scrolled} searchOpen={searchOpen}> 
            <NavContainer searchOpen={searchOpen}>

            <div className="logo">
                <a href="#">Supernova</a>
            </div>
                <ul className="menu">
                    <li><NavLink to="/male">masculino</NavLink></li>
                    <li><a href="#">feminino</a></li>
                    <li><a href="#">acessórios</a></li>
                    <li><a href="#">calçados</a></li>
                </ul>

                <div className="icons">

                    <Search
                    ref={searchRef}
                    open={searchOpen}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    >
                        <SearchInput open={searchOpen} placeholder="Buscar produto" />
                        <svg onClick={() => {setSearchOpen(true)
                            setSearchLocked(true) }} viewBox="22 -258 546 545" width="18" height="18">
                    <path d="M256-248c124 0 224 100 224 224 0 50-16 97-44 134l122 122-46 45-122-122c-37 28-83 45-134 45C133 200 32 100 32-24s101-224 224-224zm0 64c-88 0-160 72-160 160s72 160 160 160c89 0 160-72 160-160s-71-160-160-160z" fill="#fff"/>
                    </svg>
                    </Search>

                    <svg viewBox="-21 -281 503 564" width="18" height="18">
                    <path d="M245-249C80-271 41-64 187-3c90 30 188-55 163-150-15-47-55-87-105-96zm-85 112c1-38 43-53 76-49 19 2 49 33 53 51 14 38-45 88-80 72-29-11-49-40-49-74zm-34 281c63-18 152-22 212 3 17 6 49 66 46 84 0 17 15 32 32 32 56-7 26-79 8-111-22-48-74-77-122-81C185 53-11 71 0 231c1 42 64 42 64 0-1-46 16-74 62-87z" fill="#fff"/>
                    </svg>
                    <svg width="18" height="18" viewBox="-10 -226 532 468"><path d="M379-168c-27 0-53 13-69 35l-34 48c-5 6-12 10-20 10s-15-4-19-10l-35-48c-16-22-41-35-69-35-47 0-85 38-85 85 0 50 32 99 68 142 41 50 92 94 126 121 3 2 8 4 14 4s11-2 14-4c35-27 85-71 126-121 36-43 68-92 68-142 0-47-38-85-85-85zm-108 7c25-34 65-55 108-55 73 0 133 60 133 133 0 69-43 129-79 173-44 54-97 100-134 128-12 9-27 14-43 14s-31-5-43-14c-37-28-90-74-134-128C43 46 0-14 0-83c0-73 60-133 133-133 43 0 83 21 108 55l15 21 15-21z" fill="#fff"/>
                    </svg>

                    <svg width="18" height="18" viewBox="-10 -258 468 532"><path d="M160-152v32h128v-32c0-18-14-32-32-32h-64c-18 0-32 14-32 32zm-64 32v-32c0-53 43-96 96-96h64c53 0 96 43 96 96v32h96v256c0 71-57 128-128 128H128C57 264 0 207 0 136v-256h96zm224 64H64v192c0 35 29 64 64 64h192c35 0 64-29 64-64V-56h-64z" fill="#fff"/>
                    </svg>
                </div>
            </NavContainer>
        </NavWrapper>
    )
}

export default Navbar