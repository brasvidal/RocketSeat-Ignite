import { Container } from "./styles";
import greenArrowUp from '../../assets/greenArrowUp.svg';
import redArrowDown from '../../assets/redArrowDown.svg';
import total from '../../assets/total.svg';
export function Summary(){

    return (

<>
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={greenArrowUp} alt="Entradas" />
                </header>
                <strong>
                    R$ 1.000,00
                </strong>
            </div>

            <div>
                <header>
                    <p>Saidas</p>
                    <img src={redArrowDown} alt="Saidas" />
                </header>
                <strong>
                    -R$ 500,00
                </strong>
            </div>

            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src={total} alt="Total" />
                </header>
                <strong>
                    R$ 500,00
                </strong>
            </div>
        </Container>
</>
        )

}