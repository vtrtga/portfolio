import React, { useRef } from "react";
import PropTypes from 'prop-types';
import MyContext from "./MyContext";

export default function Provider ({children}) {
    const refAbout = useRef(null);
    const refTecnologies = useRef(null);
    const refProjects = useRef(null);

    const scrollTecnologies = () => {
        refTecnologies.current?.scrollIntoView({behavior: 'smooth'});
    };

    const scrollAbout = () => {
        refAbout.current?.scrollIntoView({behavior: 'smooth'});
    };

    const scrollProjects = () => {
        refProjects.current?.scrollIntoView({behavior: 'smooth'});
    };

    const context = {
        scrollAbout,
        refAbout,
        scrollTecnologies,
        refTecnologies,
        scrollProjects,
        refProjects,
    };
return (
    <MyContext.Provider value={context}>{children}</MyContext.Provider>
)
}

Provider.propTypes = {
children: PropTypes.node.isRequired,
}