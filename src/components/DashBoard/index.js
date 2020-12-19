import React, { useState, useEffect } from 'react';
import { Container, Col, Row } from 'reactstrap';
import MovieTable from './MovieTable';
function DashBoard(props) {
    return (
        <div>
            
            <Container>
                <Row>
                    <Col>
                        <MovieTable />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default DashBoard;

