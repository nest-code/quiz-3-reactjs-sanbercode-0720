import React from 'react';

// const User = {
//   username: 'ernest',
//   password: '12345',
// };

const Login = () => {
  return (
    <React.Fragment>
        <h1>Halaman Login</h1>
        
    <section>
    <div class="article-list">
        <div class="article-content">
        <form onSubmit="">
            <table align="center">
            <tr>
              <td>Username</td>
              <td>
                 <input type="text" name="username" />
              </td>
            </tr>
            <tr>
              <td>Password</td>
              <td>
                    <input type="passoword" name="password" />
              </td>
            </tr>

            <tr>
                <td></td>
                <td>
                  <button type="submit"> Submit</button>
                </td>
              </tr>
          </table>
            </form>
        </div>
    
    </div>
</section>

    </React.Fragment>
  )

}

export default Login;

