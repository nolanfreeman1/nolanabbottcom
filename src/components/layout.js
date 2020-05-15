import React from "react";
import Navbar from "./navbar.js";
import Footer from "./footer.js";
import SectionHeader from './sectionHeader.js';

export default ({ children, header }) => {
    return (
        <div className="background-dark">
            <Navbar />
            <SectionHeader header={header} />
            {children}
          <SectionHeader header={''} />
          <div style={{}}>
            <Footer />
          </div>
        </div>
    );
}
