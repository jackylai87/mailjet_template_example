// NOTES
// For consistancy sake, all heading tags
// Please in include font-family:serif
// =========================================
// Other text include font-family:sans-serif
// =========================================
// For links that were to display as button
// Use the following styles 
// background-color: #e43631;
// border-radius:100px;
// color:#ffffff !important;
// display: block;
// font-family: 'Quicksand';
// font-size:14px;
// text-align:center;
// text-decoration:none;
// line-height: 15px;
// padding: 1rem;
// width: max-content;
// min-width: 100px;
// margin: 1rem auto;
const content = (link) => {
  return {
    welcome: `
      <center>
        <table style='border-spacing: 1rem;'>
          <tbody>
            <tr>
              <td>
                <h1 style="font-family:serif;text-align:center;">Welcome To Sushivid</h1>
                <p style="font-family: sans-serif;word-wrap: anywhere;text-align:center;">
                  <strong>Please click the link below to get started</strong>
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <a href='${link}' style="background-color: #e43631;border-radius:100px;color:#ffffff !important;display: block;font-family: 'Quicksand';font-size:14px;text-align:center;text-decoration:none;line-height: 15px;padding: 1rem;width: max-content;min-width: 100px;margin: 1rem auto;">Verify Email</a>
              </td>
            </tr>
          </tbody>
        </table>
      </center>
    `,
    resetPassword: `
      <center>
        <table cellpadding="0" cellspacing="0">
          <tbody>
            <tr>
              <td>
                <h2 style="font-family:serif;text-align:center;">Forgot Your Password?</h2>
              </td>
            </tr>
            <tr>
              <td>
                <p style="font-family:sans-serif;text-align:center;">
                  <strong>Please click the link below to reset your password.</strong>
                </p>
                <a style="background-color: #e43631;border-radius:100px;color:#ffffff !important;display: block;font-family: 'Quicksand';font-size:14px;text-align:center;text-decoration:none;line-height: 15px;padding: 1rem;width: max-content;min-width: 100px;margin: 1rem auto;" href="${link}">Reset Password</a>
              </td>
            </tr>
            <tr>
              <td>
                <small>P.S: We are always just an email away. If you have any advice or queries, please email me at hi@sushivid.com.</small>
              </td>
            </tr>
          </tbody>
        </table>
      </center>
    `
  }
}
module.exports = { content }