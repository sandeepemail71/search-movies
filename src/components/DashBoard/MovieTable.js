import React, { useState, useEffect, Fragment } from 'react';
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import {
    Input, Row, Col, Dropdown, DropdownToggle, DropdownMenu,
    DropdownItem
} from 'reactstrap';
import { callApi } from '../../api';

const uniqueLanguages = (languages) => {
    const uniqueLanguagesSet = new Set(languages);
    return Array.from(uniqueLanguagesSet)
}

function Recommendation(props) {
    const [moviesArr, setmoviesArr] = useState([]);
    const [totalResult, settotalResult] = useState(0);
    const [language, setLanguage] = useState([]);
    const [page, setPage] = useState(1);
    const [dropDownOpen, setDropdown] = useState(false);
    const [slectedLanguage, setSlectedLanguage] = useState('');

    useEffect(() => {
        callApi(`/3/movie/upcoming?page=${page}`, 'GET', null)
            .then(resp => {
                setmoviesArr(resp.results);
                settotalResult(resp.total_pages * 20);
                const languages = uniqueLanguages(resp.results.map(ele => ele.original_language));
                setLanguage(languages);
            });
    }, [slectedLanguage]);


    const pageChangeHandler = (pageNumber) => {
        if (!isNaN(pageNumber)) {
            setPage(pageNumber);
            callApi(`/3/movie/upcoming?page=${page}`, 'GET', null)
                .then(resp => {
                    setmoviesArr(resp.results);
                    const languages = resp.results.map(ele => ele.original_language);
                    setLanguage(languages);
                });
        }
    }

  
    const toggle = (ele) => {
        setDropdown(!dropDownOpen);
    }

    return (
        <React.Fragment>
            
        </React.Fragment>
    );
}

export default Recommendation;









