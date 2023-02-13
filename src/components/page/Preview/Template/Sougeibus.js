import React from 'react'
import "./Sougeibus.css";

function Sougeibus() {
  return (
    <div className="container">
      <div className='print_pages'>
        <h1 className='title'>送迎バス一覧表</h1>
        <table className='table table-bordered'>
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
        <p className='text-bold'>１号車、月２</p>
        <table className='table table-bordered'>  
          <tbody>
            <tr>
              <td className='t1'>ケンタッキー</td>
              <td className='t2'></td>
              <td className='t3'>27940</td>
              <td className='t4'>中嶋優華</td>
              <td className='t5'>ﾅｶｼﾞﾏ ﾕｳｶ</td>
              <td className='t6'>1</td>
              <td className='t7'>1</td>
              <td className='t8'></td>
              <td className='t8'></td>
            </tr>
            <tr>
              <td className='t1'></td>
              <td className='t2'></td>
              <td className='t3'>27176</td>
              <td className='t4'>玉田莉織</td>
              <td className='t5'>ﾀﾏﾀﾞ ﾘｵ</td>
              <td className='t6'>1</td>
              <td className='t7'>1</td>
              <td className='t8'></td>
              <td className='t8'></td>
            </tr>
            <tr className='no-border'>
              <td className='t1'></td>
              <td className='t2'></td>
              <td className='t3'></td>
              <td className='t4'></td>
              <td className='t5'>乗車人数</td>
              <td className='t6'>2</td>
              <td className='t7'>2</td>
              <td className='t8'></td>
              <td className='t9'></td>
            </tr>
          </tbody>
        </table>
        <table className='table table-bordered'>
          <tbody>
            <tr>
              <td className='t1'></td>
              <td className='t2'></td>
              <td className='t3'></td>
              <td className='t4'></td>
              <td className='t5'></td>
              <td className='t6'></td>
              <td className='t7'></td>
              <td className='t8'></td>
              <td className='t8'></td>
            </tr>
            <tr>
              <td className='t1'></td>
              <td className='t2'></td>
              <td className='t3'></td>
              <td className='t4'></td>
              <td className='t5'></td>
              <td className='t6'></td>
              <td className='t7'></td>
              <td className='t8'></td>
              <td className='t8'></td>
            </tr>
            <tr>
              <td className='t1'></td>
              <td className='t2'></td>
              <td className='t3'></td>
              <td className='t4'></td>
              <td className='t5'></td>
              <td className='t6'></td>
              <td className='t7'></td>
              <td className='t8'></td>
              <td className='t8'></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Sougeibus