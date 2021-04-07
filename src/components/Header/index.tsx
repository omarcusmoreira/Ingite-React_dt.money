import logoImg from '../../../src/assets/logo.svg'
import { Container, Content } from './styles'

interface HeaderProps{
    onOpenNewTransactionModal: () => void
}

export function Header( {onOpenNewTransactionModal} : HeaderProps) {

    return (
        <Container>
            <Content>
                <img src={logoImg} alt="dt.money" />
                <button 
                    type="button"
                    onClick={onOpenNewTransactionModal}
                >
                    + transação
                </button>

            </Content>
        </Container>
    )

}