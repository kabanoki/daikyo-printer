import React, { useEffect, useState } from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import "./Syuseki.css";


const Goukakulist = ({ csvData, previewData }) => {
  const [pages, setPages] = useState([]);
  const [courses, setCourses] = useState([]);

  const date = new Date();
  const [day, setDay] = useState(date.getFullYear() + '/' + ('0' + (date.getMonth() + 1)).slice(-2) + '/' + ('0' + date.getDate()).slice(-2));

  useEffect(() => {

    let courseName = '';
    let newPages = [];
    let newCourses = [];
    let pageNumber = 0;
    let page = [];
    let count = 2;

    csvData.filter((c,i)=>i !==  0).forEach((row, i) => {

      if(count >= 58){
        count = 0;
        pageNumber = pageNumber+1;
        page = [];
      }

      if(courseName !== row[0]){
        count = count + 1.1;
        courseName = row[0];
        newCourses.push(courseName);
        page.push([
          '',
          '',
          '',
          '',
          courseName,
          '',
          ''
        ])
      }

      count = count + 1;
      page.push(row);
      newPages[pageNumber] = page;
    });

    console.log(newPages);
    setPages(newPages);
    setCourses(newCourses);
  }, [csvData]);

  return (<>
    <div className="container">
      {pages.map((page, i) => {
         return (<div className='print_pages_w' title={`${i+1}ページ`} key={i}>
            {i===0 && (<p className='title'>合格者一覧表</p>)}
            <div className='tables'>
              <div className='table-header'>
                <div className='t1'>会員No.</div>
                <div className='t2'>氏名</div>
                <div className='t3'>フリガナ</div>
                <div className='t4'>コース</div>
                <div className='t5'>現在級</div>
                <div className='t6'>前回級</div>
              </div>
              <div className='table-body'>
              {page.map((row, s) => {
                  return (
                  <div className={
                    row[0] === "" ? 'table-row courseName' : 'table-row'
                  } key={`row-${i}-${s}`}>
                    <div className='t1'>{row[1]}</div>
                    <div className='t2'>{row[2]}</div>
                    <div className='t3'>{row[3]}</div>
                    <div className='t4'><span id={row[4]}>{row[4]}</span></div>
                    <div className='t5'>{row[5]}</div>
                    <div className='t6'>{row[6]}</div>
                  </div>);
              })}
              </div>
            </div>  
            <span className='date'>{day}</span>
            <span className='pageNumber'>{i+1}</span>  
        </div>);
      })}
    </div>
  </>)
}

export default Goukakulist