import React, { Component } from 'react';
import './css/aside.css';
import grace from './images/grace.png';


class Aside extends Component {

  render() {
    return (
      <aside className="summary pr-3 ">
        <table className="summary-table">
          <thead>
            <tr>
              <th className="text-center" colSpan={2}>Grace Murray Hopper</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-center" colSpan={3}>
                <img src={grace} />
                <p>Rear Admiral Grace M. Hopper, 1984</p>
                <hr />
              </td>
            </tr>
            <tr>
              <th>Nickname(s)</th>
              <td>"Amazing Grace"</td>
            </tr>
            <tr>
              <th>Born</th>
              <td>December 9, 1906 <br /> New York City, New York, U.S.</td>
            </tr>
            <tr>
              <th>Died</th>
              <td>January 1, 1992 (aged 85)<br />
                <a href="#">Arlington, Virginia,</a> U.S.</td>
            </tr>
            <tr>
              <th>Place of burial</th>
              <td><a href="#">Arlington National Cemetery</a></td>
            </tr>
            <tr>
              <th>Allegiance</th>
              <td> <img src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/35px-Flag_of_the_United_States.svg.png" alt="EE.UU" />United States of America</td>
            </tr>
            <tr>
              <th>Service/branch</th>
              <td> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Flag_of_the_United_States_Navy.svg/35px-Flag_of_the_United_States_Navy.svg.png" alt="U.S" /><a href="#">United States Navy</a></td>
            </tr>
            <tr>
              <th>Years of <br /> service
                </th>
              <td>1943–1966, 1967–1971, 1972–1986</td>
            </tr>
            <tr>
              <th>Rank</th>
              <td><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/US-O7_insignia.svg/24px-US-O7_insignia.svg.png" /><a>Rear admiral</a> (lower half)</td>
            </tr>
            <tr>
              <th className="sum">Awards</th>
              <td><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Defense_Distinguished_Service_Medal_ribbon.svg/22px-Defense_Distinguished_Service_Medal_ribbon.svg.png" />Defense Distinguished Service<br /> Medal
                    <br />
              </td>
            </tr>
          </tbody>
        </table>
      </aside>
    );
  }
}

export default Aside;

