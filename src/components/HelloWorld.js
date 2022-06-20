import Text from './Text';
import User from './User';

function HelloWorld(){
    return (
        <div>
            <h1>Olá Mundo</h1>
            <Text text={"Olá"} />

            <User name="Flavio" idade={22} cpf="07438969126" />
        </div>
    )
}

export default HelloWorld;