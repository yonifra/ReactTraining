import React from 'react';
import { Card, Button, Icon, CardHeader, CardContent, CardMedia } from '@material-ui/core';
import styled from 'styled-components';

class MyCard extends React.Component {
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
                {/* <Button variant="contained" color="primary">
                    <Icon>star</Icon> {this.props.buttonText}
                </Button> */}
            </div >
        );
    }
}

const StyledCard = styled(Card)`
    font-size: 0.8em;
    color: black;
    padding: 5px;
`;

export default MyCard;
