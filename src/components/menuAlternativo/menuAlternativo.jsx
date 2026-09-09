import { useState } from "react";
import {
    Home,
    Search,
    Plus,
    Heart,
    User,
    Settings
} from "lucide-react";

import "./menuAlt.css"

const menuAlternativoIcons = [
    {
        id: "home",
        label: "Home",
        icon: Home
    },
    {
        id: "search",
        label: "Search",
        icon: Home
    },
    {
        id: "create",
        label: "Create",
        icon: Plus,
        special: true
    },
    {
        id: "profile",
        label: "Profile",
        icon: User
    },
    {
        id: "settings",
        label: "Settings",
        icon: Settings
    }
];

function menuAlternativo() {
    const [active, setActive] = useState("home");

    function handleClick(id) {
        setActive(id);

        if (id === "create") {
            console.log("Abrir tela de criação");
        }
    }

    return (
        <div className="appMenuAlt">

            <div className="floating-menu">

                {menuAlternativoIcons.map((item) => {
                    const Icon = item.icon;
                    const isActive = active === item.id;

                    return (
                        <button key={item.id}
                            className={`
                    menu-alt-item
                    ${isActive ? "active" : ""}
                    ${item.special ? "create-button" : ""}
                    `}
                            onClick={() => handleClick(item.id)}
                            aria-label={item.label}
                        >
                            <span className="tooltip">
                                {item.label}
                            </span>

                            <Icon size={23} strokeWidth={2} />

                    /* Bolinha abaixo do item ativo */
                            {isActive && !item.special && (
                                <span className="active-dot" />
                            )}

                        </button>
                    );
                })}

            </div>

            <main className="contentMenuAlt">
                <h1>
                    {active === "home" && "Home"}
                    {active === "search" && "Pesquisar"}
                    {active === "create" && "Criar"}
                    {active === "favorites" && "Favoritos"}
                    {active === "profile" && "Perfil"}
                    {active === "settings" && "Configurações"}
                </h1>

                <p>
                    Item Selecionado:
                    <strong>{active}</strong>
                </p>
            </main>

        </div>
    )
}

export default menuAlternativo;