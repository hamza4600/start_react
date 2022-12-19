import React from "react";
import styled from "styled-components";

const AdminFooter = () => {
    return (
        <>
            <AdminFoot>
                <p>© 2021 All Rights Reserved</p>
            </AdminFoot>
        </>
    )
};

export default AdminFooter;

const AdminFoot = styled.div`
    height: 25px;
    color: #00416A;
    background: #B0C4DE;
    display: flex;
    align-items: center;
    justify-content: center;

    >p{
        color: white
        font-size: 18px;
    }
    `;