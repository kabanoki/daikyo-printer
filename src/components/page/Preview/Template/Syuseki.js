import React, { useEffect, useState } from 'react'
import "./Syuseki.css";


const Goukakulist = ({ csvData, previewData }) => {
  const [pages, setPages] = useState([]);
  const [courseName, setCourseName] = useState('');
  const [coachName, setCoachName] = useState('');
  const [lesson, setLesson] = useState([]);
  
  const tmpDate = new Date(csvData[0][2]);
  const month = (tmpDate.getMonth() + 1) || new Date();

  const date = new Date();
  const day = date.getFullYear() + '/' + ('0' + (date.getMonth() + 1)).slice(-2) + '/' + ('0' + date.getDate()).slice(-2);

  useEffect(() => {

    let newPages = [];
    let pageNumber = 0;
    let page = [];
    let count = 2;

    csvData.filter((c,i)=>i !==  0).forEach((row, i) => {

      if(i === 0){
        setCourseName(row[0]);
        setCoachName(row[1]);
        setLesson([
          row[13],
          row[14],
          row[15],
          row[16],
        ]);
      }

      if(count >= 20){
        count = 0;
        pageNumber = pageNumber+1;
        page = [];
      }

      count = count + 1;
      page.push(row);
      newPages[pageNumber] = page;
    });

    // console.log(newPages);
    setPages(newPages);
  }, [csvData]);

  return (<>
    <div className="container">
      {pages.map((page, i) => {
         return (<div className='print_pages_w' title={`${i+1}ページ`} key={i}>
            <div className='page_header'>
              <div className='weekname'>{courseName}</div>
              <div className='coachname'>{coachName}</div>
              <div className='title'>
                <div>
                  <span className='title-label'>出欠記入表</span>
                  <span className='title-month'>{month}月度</span>
                </div>
              </div>
            </div>
            <div className='tables '>
              <div className='table-header'>
                <div className='t1'>会員No.</div>
                <div className='t2'>氏名</div>
                <div className='t3'>コース</div>
                <div className='t4'>学年</div>
                <div className='t5'>在籍年数</div>
                <div className='t6'>現在級</div>
                <div className='t7'>前々月<br /><small>コース</small></div>
                <div className='t8'>前月<br /><small>コース</small></div>
                <div className='t9'>第1週<br /><small>{lesson[0]}</small></div>
                <div className='t10'>第2週<br /><small>{lesson[1]}</small></div>
                <div className='t11'>第3週<br /><small>{lesson[2]}</small></div>
                <div className='t12'>第4週<br /><small>{lesson[3]}</small></div>
                <div className='t13'>合格</div>
                <div className='t14'>備考</div>
              </div>
              <div className='table-body'>
              {page.map((row, s) => {
                  return (
                  <div className={
                    row[0] === "" ? 'table-row courseName' : 'table-row'
                  } key={`row-${i}-${s}`}>
                    <div className='t1'>{row[2]}</div>
                    <div className='t2'>{row[3]}<br /><small>{row[4]}</small></div>
                    <div className='t3'>{courseName}<br />{coachName}</div>
                    <div className='t4'>{row[6]}</div>
                    <div className='t5'>{row[7]}</div>
                    <div className='t6'>{row[8]}<br /><small>{row[9]}　ｈ</small></div>
                    <div className='t7'>{row[11]}　ｈ</div>
                    <div className='t8'>{row[10]}　ｈ</div>
                    <div className='t9'></div>
                    <div className='t10'></div>
                    <div className='t11'></div>
                    <div className='t12'></div>
                    <div className='t13'></div>
                    <div className='t14'>{row[12]}</div>
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