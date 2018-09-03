import React, { Component } from "react";
import './Home.css';
import { ToggleButtonGroup } from 'react-bootstrap';
import { ButtonToolbar } from 'react-bootstrap';
import { ToggleButton } from 'react-bootstrap';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {withTheme} from 'styled-components';

const StyledCounter = styled.div`
    font-size:1.5em;
    text-align:center;
    color:palevioletred;
    height:200px;
    width:100%;
`;

const Paragraph = styled.p`
    padding: 4em;
    background:papayawhip;
`;

const Button = styled.button`
    padding:0.5em;
    margin:0.5em;
    border-radius:3px;
    background:papayawhip;
    height:50px;
    width:35px;

    color: ${props => props.theme.main};
    border: 2px solid ${props=>props.theme.main};
`;

const theme ={
    main:'mediumseagreen'
}
const NewButton = styled.button`
    background:${props => props.primary ? 'palevioletred' : 'white'};
    color:${props => props.primary ? 'white' : 'palevioletred'};
    font-size:1em;
    margin:1em;
    padding:0.25em 1em;
    border:2px solid palevioletred;
    border-radius:3px;
`;

const StyledLink = styled(Link) `
    color:palevioletred;
    font-weight:bold;
`;

const Input = styled.input`
    padding:0.5em;
    margin:0.5em;
    color:palevioletred;
    background:papayawhip;
    border:none;
    boprder-radius:3px;
    `;

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tab: 1
        }
    }

    renderTab = () => {
        switch (this.state.tab) {
            case 1: return <p> Tab 1</p>
            case 2: return <p>Tab2</p>
            case 3: return <p> Tab 3</p>
            default: return <p> Invalid</p>
        }
    }
    setTab = (tab) => {
        this.setState({ tab });
    }

    render() {

        return (
            <div>
                <ButtonToolbar>
                    <ToggleButtonGroup type="radio"
                        name="options"
                        defaultValue={1}>
                        <ToggleButton value={1}
                            onClick={this.setTab.bind(this, 1)}>
                            TAB 1
                        </ToggleButton>
                        <ToggleButton value={2}
                            onClick={this.setTab.bind(this, 2)}>
                            TAB 2
                        </ToggleButton>
                        <ToggleButton value={3}
                            onClick={this.setTab.bind(this, 3)}>
                            TAB 3
                        </ToggleButton>
                    </ToggleButtonGroup>
                </ButtonToolbar>
                <div>
                    {this.renderTab()}
                </div>
                <StyledCounter>
                    <Paragraph>Styled Component</Paragraph>
                    <Button theme={{main:'darkorange'}}>1</Button>
                    <Button theme={{main:'green'}}>2</Button>
                </StyledCounter>
                <div>
                    <NewButton > Normal </NewButton>
                    <NewButton primary>  Primary</NewButton>
                </div>
                <StyledLink to="/signin"> Styled Link</StyledLink>
                <div>
                    <Input placeholder="Enter Name" type="text" />
                    <Input placeholder="abc@" type="text" />
                </div>

            </div>
        );

    }
}

export default withTheme (Home);