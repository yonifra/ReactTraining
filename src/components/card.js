import React from 'react';
import { Card, CardContent, CardMedia, Button, Icon } from '@material-ui/core';
import styled from 'styled-components';

export default class MyCard extends React.Component {
    render() {
        return (
            <div>
                <StyledCard title={this.props.text}>
                    <CardMedia>
                        {this.props.header}
                    </CardMedia>
                    <CardContent>
                        {this.props.content}
                    </CardContent>
                </StyledCard>
                <Button variant="contained" color="primary">
                    <Icon>star</Icon> {this.props.buttonText}
                </Button>
            </div >
        );
    }
}

const StyledCard = styled(Card)`
    font-size: 0.8em;
    color: black;
    padding: 5px;
    margin: 6px;
`;
