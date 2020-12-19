import React, { useState, useEffect, Fragment } from 'react';
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import { Input, Row, Col } from 'reactstrap';
import { callApi } from '../../api';


function MovieTable(props) {
    const [moviesArr, setmoviesArr] = useState([]);
    const [totalResult, settotalResult] = useState(0);
    const [page, setPage] = useState(1);

    useEffect(() => {
        callApi(`/3/movie/upcoming?page=${page}`, 'GET', null)
            .then(resp => {
                setmoviesArr(resp.results);
                settotalResult(resp.total_pages * 20);
            });
    }, []);


    const pageChangeHandler = (pageNumber) => {
        if (!isNaN(pageNumber)) {
            setPage(pageNumber);
            callApi(`/3/movie/upcoming?page=${page}`, 'GET', null)
                .then(resp => {
                    setmoviesArr(resp.results);
                });
        }
    }

    const options = {
        page,
        pageStartIndex: 1,
        sizePerPage: 20,
        onPageChange: pageChangeHandler,
        paginationPosition: "bottom",
        noDataText: 'There is no data to display',
        paginationPosition: "bottom",
        hideSizePerPage: true
    };

    const columns = [
        {
            dataField: "original_title",
            text: "Original Title"
        },
        {
            dataField: "original_language",
            text: "Original Language",
        },
        {
            dataField: "vote_average",
            text: "Vote Average"
        },
    ]

    return (
        <React.Fragment>
            <Row className='my-3 flex-row-reverse'>
                <Col md={4}>
                    <Input />
                </Col>
            </Row>
            <BootstrapTable
                keyField='id'
                data={moviesArr}
                remote={true}
                columns={columns}
                pagination={true}
                options={options}
                fetchInfo={{
                    dataTotalSize: totalResult
                }}
                condensed
                striped
                bodyStyle={{ overflowY: 'scroll' }}
                maxHeight={`${window.screen.height - 270}px`}
                hover
            >
                {
                    columns.map(ele => (
                        <TableHeaderColumn
                            key={ele.id}
                            dataField={ele.dataField}
                        >
                            {ele.text}
                        </TableHeaderColumn>
                    ))
                }
            </BootstrapTable>
        </React.Fragment>
    );
}

export default MovieTable;









