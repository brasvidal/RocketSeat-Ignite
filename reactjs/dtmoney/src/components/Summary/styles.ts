import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap: 2rem;
    margin-top: -10rem;

       
    div{
       background-color: var(--shape);
       padding:1.5rem 2rem;
       border-radius: 0.25rem;
        color: var(--text-title);
        box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;

        header{
            display:flex;
            align-items:center;
            justify-content: space-between;

        }
        strong{
            display:block;
            margin-top:1rem;
            font-size:2rem;
            line-height:3rem;
            font-weight: 500;
        }

    &.highlight-background{
        background-color: var(--green);
        color: #FFF;

    }
    }
   
`;