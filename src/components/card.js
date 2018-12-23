import React from 'react';
import { Card, Button, Icon, CardHeader, CardContent, CardMedia } from '@material-ui/core';
import styled from 'styled-components';

class MyCard extends React.Component {
    render() {
        return (
            <div>
                <StyledCard title={this.props.text}>
                    <StyledCardMedia>
                        {this.props.header}
                    </StyledCardMedia>
                    <StyledCardContent>
                        {this.props.content}
                    </StyledCardContent>
                </StyledCard>
            </div >
        );
    }
}

const StyledCardMedia = styled(CardMedia)`
    font-size: 18px;
    margin: 5px;
    font-family: Coda;
`

const StyledCardContent = styled(CardContent)`
    font-size: 12px;
`

const StyledCard = styled(Card)`
    font-size: 0.8em;
    color: black;
    padding: 5px;
`;

export default MyCard;
