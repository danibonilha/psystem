import React from 'react';
import {FormControl, FormGroup, ControlLabel, HelpBlock, Checkbox, Nav, NavItem, Button} from 'react-bootstrap';
import FieldGroup from './components/FieldGroup';
import './App.css';
class Pacient extends React.Component {
    constructor(){
        super();  
    }
    
    navSelect(eventKey) {
        //event.preventDefault();
        //TODO incluir logica para mostrar tabela ou formulario.
        console.log(`selected ${eventKey}`);
    }

    render(){
        return(
            <div className='container'>
                <Nav bsStyle="tabs" activeKey="1" onSelect={k => this.navSelect(k)}>
                    <NavItem eventKey="1">
                        Formulario
                    </NavItem>
                    <NavItem eventKey="2">
                        Lista de Pacientes
                    </NavItem>
                </Nav>

                <form>
                    <FieldGroup
                        id="nome"
                        type="text"
                        label="Nome"
                        placeholder="Inserir nome"
                    />
                    <FieldGroup
                        id="idade"
                        type="number"
                        label="Idade"
                        placeholder="Inserir idade"
                    />
                    <Checkbox id="ativo">
                        Ativo
                    </Checkbox>
                    
                    <FormGroup controlId="formControlsSelect">
                        <ControlLabel>Select</ControlLabel>
                        <FormControl componentClass="select" placeholder="Selecionar Clinica">
                            <option value="clinica1">Clinica 1</option>
                            <option value="clinica2">Clinica 2</option>
                        </FormControl>
                    </FormGroup>

                    <FormGroup controlId="formControlsTextarea">
                        <ControlLabel>Textarea</ControlLabel>
                        <FormControl componentClass="textarea" placeholder="textarea" />
                    </FormGroup>
                    
                    <Button bsStyle="primary">Cadastrar</Button>
                    <Button>Cancelar</Button>
                </form>
            </div>    
        );
    }
}

export default Pacient;