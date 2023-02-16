import React, { useEffect, useState } from 'react'
import "./Sougeibus.css";

const Sougeibus = ({ csvData }) => {
  const [group, setGroup] = useState('１号車、月２'); 

  const [pages, setPages] = useState([]);
  
  useEffect(() => {
    const createPage = async () => {
      setPages([
        [
          {
            busStop: 'ケンタッキー',
            busStopTime: '',
            totalGo: 2,
            totalBack: 2,
            totalAnd: 0,
            users: [
              {
                no:'27940',
                name: '中嶋優華',
                kana: 'ﾅｶｼﾞﾏ ﾕｳｶ',
                go: '1',
                back: '1',
                and: '',
                note: ''
              },
              {
                no:'27176',
                name: '玉田莉織',
                kana: 'ﾀﾏﾀﾞ ﾘｵ',
                go: '1',
                back: '1',
                and: '',
                note: ''
              },
            ],
          },
          {
            busStop: '井沼（河野製紙）',
            busStopTime: '3:26',
            totalGo: 1,
            totalBack: 2,
            totalAnd: 0,
            users: [
              {
                no:'27233',
                name: '浅子諒紅',
                kana: 'ｱｻｺ ﾘｮｳｸ',
                go: 0,
                back: '1',
                and: 0,
                note: ''
              },
              {
                no:'27934',
                name: '若林凜奈',
                kana: 'ﾜｶﾊﾞﾔｼ ﾘﾝﾅ',
                go: 1,
                back: '1',
                and: 0,
                note: ''
              },
            ],
          },
          {
            busStop: '井沼（河野製紙）',
            busStopTime: '3:26',
            totalGo: 1,
            totalBack: 2,
            totalAnd: 0,
            users: [
              {
                no:'27233',
                name: '浅子諒紅',
                kana: 'ｱｻｺ ﾘｮｳｸ',
                go: 0,
                back: '1',
                and: 0,
                note: ''
              },
              {
                no:'27934',
                name: '若林凜奈',
                kana: 'ﾜｶﾊﾞﾔｼ ﾘﾝﾅ',
                go: 1,
                back: '1',
                and: 0,
                note: ''
              },
            ],
          },
          {
            busStop: '井沼（河野製紙）',
            busStopTime: '3:26',
            totalGo: 1,
            totalBack: 2,
            totalAnd: 0,
            users: [
              {
                no:'27233',
                name: '浅子諒紅',
                kana: 'ｱｻｺ ﾘｮｳｸ',
                go: 0,
                back: '1',
                and: 0,
                note: ''
              },
              {
                no:'27934',
                name: '若林凜奈',
                kana: 'ﾜｶﾊﾞﾔｼ ﾘﾝﾅ',
                go: 1,
                back: '1',
                and: 0,
                note: ''
              },
            ],
          },
          {
            busStop: '井沼（河野製紙）',
            busStopTime: '3:26',
            totalGo: 1,
            totalBack: 2,
            totalAnd: 0,
            users: [
              {
                no:'27233',
                name: '浅子諒紅',
                kana: 'ｱｻｺ ﾘｮｳｸ',
                go: 0,
                back: '1',
                and: 0,
                note: ''
              },
              {
                no:'27934',
                name: '若林凜奈',
                kana: 'ﾜｶﾊﾞﾔｼ ﾘﾝﾅ',
                go: 1,
                back: '1',
                and: 0,
                note: ''
              },
            ],
          },
          {
            busStop: '井沼（河野製紙）',
            busStopTime: '3:26',
            totalGo: 1,
            totalBack: 2,
            totalAnd: 0,
            users: [
              {
                no:'27233',
                name: '浅子諒紅',
                kana: 'ｱｻｺ ﾘｮｳｸ',
                go: 0,
                back: '1',
                and: 0,
                note: ''
              },
              {
                no:'27934',
                name: '若林凜奈',
                kana: 'ﾜｶﾊﾞﾔｼ ﾘﾝﾅ',
                go: 1,
                back: '1',
                and: 0,
                note: ''
              },
            ],
          },
          {
            busStop: '井沼（河野製紙）',
            busStopTime: '3:26',
            totalGo: 1,
            totalBack: 2,
            totalAnd: 0,
            users: [
              {
                no:'27233',
                name: '浅子諒紅',
                kana: 'ｱｻｺ ﾘｮｳｸ',
                go: 0,
                back: '1',
                and: 0,
                note: ''
              },
              {
                no:'27934',
                name: '若林凜奈',
                kana: 'ﾜｶﾊﾞﾔｼ ﾘﾝﾅ',
                go: 1,
                back: '1',
                and: 0,
                note: ''
              },
            ],
          },
          {
            busStop: '井沼（河野製紙）',
            busStopTime: '3:26',
            totalGo: 1,
            totalBack: 2,
            totalAnd: 0,
            users: [
              {
                no:'27233',
                name: '浅子諒紅',
                kana: 'ｱｻｺ ﾘｮｳｸ',
                go: 0,
                back: '1',
                and: 0,
                note: ''
              },
              {
                no:'27934',
                name: '若林凜奈',
                kana: 'ﾜｶﾊﾞﾔｼ ﾘﾝﾅ',
                go: 1,
                back: '1',
                and: 0,
                note: ''
              },
            ],
          }
        ],
        [
          {
            busStop: 'ケンタッキー',
            busStopTime: '',
            totalGo: 2,
            totalBack: 2,
            totalAnd: 0,
            users: [
              {
                no:'27940',
                name: '中嶋優華',
                kana: 'ﾅｶｼﾞﾏ ﾕｳｶ',
                go: '1',
                back: '1',
                and: '',
                note: ''
              },
              {
                no:'27176',
                name: '玉田莉織',
                kana: 'ﾀﾏﾀﾞ ﾘｵ',
                go: '1',
                back: '1',
                and: '',
                note: ''
              },
            ],
          },
          {
            busStop: '井沼（河野製紙）',
            busStopTime: '3:26',
            totalGo: 1,
            totalBack: 2,
            totalAnd: 0,
            users: [
              {
                no:'27233',
                name: '浅子諒紅',
                kana: 'ｱｻｺ ﾘｮｳｸ',
                go: 0,
                back: '1',
                and: 0,
                note: ''
              },
              {
                no:'27934',
                name: '若林凜奈',
                kana: 'ﾜｶﾊﾞﾔｼ ﾘﾝﾅ',
                go: 1,
                back: '1',
                and: 0,
                note: ''
              },
            ],
          },
          {
            busStop: '井沼（河野製紙）',
            busStopTime: '3:26',
            totalGo: 1,
            totalBack: 2,
            totalAnd: 0,
            users: [
              {
                no:'27233',
                name: '浅子諒紅',
                kana: 'ｱｻｺ ﾘｮｳｸ',
                go: 0,
                back: '1',
                and: 0,
                note: ''
              },
              {
                no:'27934',
                name: '若林凜奈',
                kana: 'ﾜｶﾊﾞﾔｼ ﾘﾝﾅ',
                go: 1,
                back: '1',
                and: 0,
                note: ''
              },
            ],
          },
          {
            busStop: '井沼（河野製紙）',
            busStopTime: '3:26',
            totalGo: 1,
            totalBack: 2,
            totalAnd: 0,
            users: [
              {
                no:'27233',
                name: '浅子諒紅',
                kana: 'ｱｻｺ ﾘｮｳｸ',
                go: 0,
                back: '1',
                and: 0,
                note: ''
              },
              {
                no:'27934',
                name: '若林凜奈',
                kana: 'ﾜｶﾊﾞﾔｼ ﾘﾝﾅ',
                go: 1,
                back: '1',
                and: 0,
                note: ''
              },
            ],
          },
          {
            busStop: '井沼（河野製紙）',
            busStopTime: '3:26',
            totalGo: 1,
            totalBack: 2,
            totalAnd: 0,
            users: [
              {
                no:'27233',
                name: '浅子諒紅',
                kana: 'ｱｻｺ ﾘｮｳｸ',
                go: 0,
                back: '1',
                and: 0,
                note: ''
              },
              {
                no:'27934',
                name: '若林凜奈',
                kana: 'ﾜｶﾊﾞﾔｼ ﾘﾝﾅ',
                go: 1,
                back: '1',
                and: 0,
                note: ''
              },
            ],
          },
          {
            busStop: '井沼（河野製紙）',
            busStopTime: '3:26',
            totalGo: 1,
            totalBack: 2,
            totalAnd: 0,
            users: [
              {
                no:'27233',
                name: '浅子諒紅',
                kana: 'ｱｻｺ ﾘｮｳｸ',
                go: 0,
                back: '1',
                and: 0,
                note: ''
              },
              {
                no:'27934',
                name: '若林凜奈',
                kana: 'ﾜｶﾊﾞﾔｼ ﾘﾝﾅ',
                go: 1,
                back: '1',
                and: 0,
                note: ''
              },
            ],
          },
          {
            busStop: '井沼（河野製紙）',
            busStopTime: '3:26',
            totalGo: 1,
            totalBack: 2,
            totalAnd: 0,
            users: [
              {
                no:'27233',
                name: '浅子諒紅',
                kana: 'ｱｻｺ ﾘｮｳｸ',
                go: 0,
                back: '1',
                and: 0,
                note: ''
              },
              {
                no:'27934',
                name: '若林凜奈',
                kana: 'ﾜｶﾊﾞﾔｼ ﾘﾝﾅ',
                go: 1,
                back: '1',
                and: 0,
                note: ''
              },
            ],
          },
          {
            busStop: '井沼（河野製紙）',
            busStopTime: '3:26',
            totalGo: 1,
            totalBack: 2,
            totalAnd: 0,
            users: [
              {
                no:'27233',
                name: '浅子諒紅',
                kana: 'ｱｻｺ ﾘｮｳｸ',
                go: 0,
                back: '1',
                and: 0,
                note: ''
              },
              {
                no:'27934',
                name: '若林凜奈',
                kana: 'ﾜｶﾊﾞﾔｼ ﾘﾝﾅ',
                go: 1,
                back: '1',
                and: 0,
                note: ''
              },
            ],
          }
        ],
      ]);
    }
    createPage();
  }, []);

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
                    <div class="page">
                      {page.map((busStop) => {
                        return (
                          <table className='table table-bordered' key={busStop.busStop}>  
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
                              {busStop.users.map((user, i) => {
                                return (<tr key={user.no}>
                                  <td className='t1'>{i===0 ? busStop.busStop:''}</td>
                                  <td className='t2'>{i===0 ? busStop.busStopTime:''}</td>
                                  <td className='t3'>{user.no}</td>
                                  <td className='t4'>{user.name}</td>
                                  <td className='t5'>{user.kana}</td>
                                  <td className='t6'>{user.go}</td>
                                  <td className='t7'>{user.back}</td>
                                  <td className='t8'>{user.and !== 0 ? user.and:''}</td>
                                  <td className='t9'>{user.note}</td>
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
                            <td className='t6'>18</td>
                            <td className='t7'>16</td>
                            <td className='t8'></td>
                            <td className='t9'></td>
                          </tr>
                        </tbody>  
                      </table>
                    ):''}
                    
        </div>);
      })}
  </div>)
}

export default Sougeibus