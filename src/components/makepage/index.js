import React, { forwardRef } from 'react';
import styled from 'styled-components';

const Page = styled.div`
    min-height: 100vh;
    background-color: ${({ theme }) => theme.page};
    color: ${({ theme }) => theme.color};  
    font-family: ${({ theme }) => theme.font} !important;
    font-weight: 400;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const MakePage = forwardRef(
    function MakePage(props, ref) {
        return (
            <>
                <Page ref={ref} id="main_page">
                    {props.children}
                </Page>
            </>
        )
    }
)

export default MakePage;