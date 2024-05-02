import { Container, Title, ButtonCart } from './styles';
import cartIcon from '../../../../assets/icons/cart.svg';

const index = () => (
    <Container>
        <Title>Belanjaku</Title>

        <ButtonCart>
            <img src={cartIcon} />
        </ButtonCart>
    </Container>
);

export default index;