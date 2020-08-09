import React from 'react';

const User = {
  name: 'Ernesto Andre Yulian Manurung',
  email: 'ernestoandreyulianmanurung',
  os: 'Windows 10',
  github: 'github.com/nest-code',
  telegram: '@ernestomanurung'
};



const About = () => {
  return (
    <React.Fragment>
      <div className="about">
        <h1>Halaman About</h1>
          <table >
            <tr>
              <td>Nama Peserta</td>
              <td>{User.name}</td>
            </tr>

            <tr>
              <td>Email</td>
              <td>{User.email}</td>
            </tr>

            <tr>
              <td>Sistem Operasi</td>
              <td>{User.os}</td>
            </tr>

            <tr>
              <td>Akun Github</td>
              <td>{User.github}</td>
            </tr>

            <tr>
              <td>Akun Telegram</td>
              <td>{User.telegram}</td>
            </tr>
          </table>
      </div>
    </React.Fragment>
  )

}

export default About;
