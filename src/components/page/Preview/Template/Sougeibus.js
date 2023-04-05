import React, { useEffect, useState } from 'react'
import "./Sougeibus.css";


const Sougeibus = ({ csvData, previewData }) => {
  const [group, setGroup] = useState(''); 
  const [allTotalGo, setAllTotalGo] = useState(0);
  const [allTotalBack, setAllTotalBack] = useState(0);
  const [pages, setPages] = useState([]);
  const date = new Date();
  const day = date.getFullYear() + '/' + ('0' + (date.getMonth() + 1)).slice(-2) + '/' + ('0' + date.getDate()).slice(-2);


  useEffect(() => {
    // console.log(csvData);

    let busStopName = '';
    let pages = [];
    let pageNumber = 0;
    let page = [];
    let pageTableCount = 0;
    let newAllTotalGo = 0;
    let newAllTotalBack = 0;

    csvData.forEach((element, i) => {
      if(i===0) return ;
      if(i===1) setGroup(`${element[0]} ${element[1]}`);

      if(busStopName !== element[2]){
        busStopName = element[2];
        let totalGo = 0;
        let totalBack = 0;
        const users = csvData.filter((csv) => busStopName === csv[2]).map((csv)=>{
          totalGo = totalGo + Number(csv[7]);
          totalBack = totalBack + Number(csv[8]);
          return csv;
        });

        pageTableCount = pageTableCount + users.length;// 人数をカウント
        pageTableCount++;// バス停の合計人数をカウント

        // console.log('pageTableCount', pageTableCount);

        if(pageTableCount > 28) {
          pageNumber++;
          pageTableCount = 0;
          page = [];
        }

        // console.log(pageNumber, pageTableCount);
        
        page.push({
          busStop: element[2],
          busStopTime: element[3],
          totalGo: totalGo,
          totalBack: totalBack,
          totalAnd: 0,
          users: users
        });

        pages[pageNumber] = page;
        // console.log(pages);

        newAllTotalGo = newAllTotalGo + totalGo;
        newAllTotalBack = newAllTotalBack + totalBack;

        setPages(pages);
      }
    });

    setAllTotalGo(newAllTotalGo);
    setAllTotalBack(newAllTotalBack);

  }, [csvData]);

  return (<div className="container">
      {pages.map((page, i) => {
         return (<div className='print_pages' key={i}>
                    <h3 className='title'>送迎バス一覧表</h3>
                    <table className='table table-bordered'>
                      <colgroup>
                          <col className='t1'></col>
                          <col className='t2'></col>
                          <col className='t3'></col>
                          <col className='t4'></col>
                          <col className='t5'></col>
                          <col className='t6'></col>
                          <col className='t7'></col>
                          <col className='t8'></col>
                          <col className='t9'></col>
                      </colgroup>
                      <thead>
                      <tr>
                          <th className='t1'>乗車地</th>
                          <th className='t2'>時刻</th>
                          <th className='t3'>会員No</th>
                          <th className='t4'>氏名</th>
                          <th className='t5'>フリガナ</th>
                          <th className='t6'>行き</th>
                          <th className='t7'>帰り</th>
                          <th className='t8'>添乗</th>
                          <th className='t9'></th>
                        </tr>
                      </thead>
                    </table>  
                    {i === 0 ? (<p className='fw-bold'>{group}</p>):''}
                    <div className="page">
                      {page.map((busStop, s) => {
                        return (
                          <table className='table table-bordered' key={`${busStop.busStop}-${i}-${s}`}>  
                            <colgroup>
                                <col className='t1'></col>
                                <col className='t2'></col>
                                <col className='t3'></col>
                                <col className='t4'></col>
                                <col className='t5'></col>
                                <col className='t6'></col>
                                <col className='t7'></col>
                                <col className='t8'></col>
                                <col className='t9'></col>
                            </colgroup>
                            <tbody>
                              {busStop.users.map((user, m) => {
                                return (<tr key={`${busStop.busStop}-${i}-${s}-${m}`}>
                                  <td className='t1'>{m===0 ? busStop.busStop:''}</td>
                                  <td className='t2'>{m===0 ? busStop.busStopTime:''}</td>
                                  <td className='t3'>{user[4]}</td>
                                  <td className='t4'>{user[5]}</td>
                                  <td className='t5'>{user[6]}</td>
                                  <td className='t6'>{user[7]}</td>
                                  <td className='t7'>{user[8]}</td>
                                  <td className='t8'></td>
                                  <td className='t9'></td>
                                </tr>);
                              })}
                              <tr className='no-border'>
                                <td className='t1'></td>
                                <td className='t2'></td>
                                <td className='t3'></td>
                                <td className='t4'></td>
                                <td className='t5 text-center'>乗車人数</td>
                                <td className='t6'>{busStop.totalGo}</td>
                                <td className='t7'>{busStop.totalBack}</td>
                                <td className='t8'></td>
                                <td className='t9'></td>
                              </tr>
                            </tbody>
                          </table>);
                      })}
                    </div>
                    {(pages.length - 1) === i ? (
                        <table className='table table-bordered'>  
                        <colgroup>
                            <col className='t1'></col>
                            <col className='t2'></col>
                            <col className='t3'></col>
                            <col className='t4'></col>
                            <col className='t5'></col>
                            <col className='t6'></col>
                            <col className='t7'></col>
                            <col className='t8'></col>
                            <col className='t9'></col>
                        </colgroup>
                        <tbody>
                          <tr className='no-border'>
                            <td className='t1'></td>
                            <td className='t2'></td>
                            <td className='t3'></td>
                            <td className='t4'></td>
                            <td className='t5 text-center'>合計人数</td>
                            <td className='t6'>{allTotalGo}</td>
                            <td className='t7'>{allTotalBack}</td>
                            <td className='t8'></td>
                            <td className='t9'></td>
                          </tr>
                        </tbody>  
                      </table>
                    ):''}
          <span className='date'>{day}</span>
          <span className='pageNumber'>{i+1}</span>   
        </div>);
      })}
  </div>)
}

export default Sougeibus