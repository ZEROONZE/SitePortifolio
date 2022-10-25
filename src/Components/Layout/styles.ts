import styled from 'styled-components';

/**
* Layout
* MH = Main Header
* AS = Aside
* CT = Content    
*/

export const Grid = styled.div`
    display: grid;
width: 100%;
    grid-template-rows: 70px auto;
    grid-template-areas:
     'MH MH'
     'CT CT';

    `;
