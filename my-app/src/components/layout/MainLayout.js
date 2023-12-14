import React from 'react';
import MenuBar from '../common/MenuBar';

const MainLayout = ({ children }) => {
    return (
        <div>
            <MenuBar />
            <main>{children}</main>
        </div>
    );
};

export default MainLayout;