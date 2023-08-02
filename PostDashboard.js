import React, { useEffect } from 'react';

const PostDashboard = () => {
  const dashboardId = "4127b3a24c8ae685b54c70b6c2ea7bac";
  const token =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJqdGkiOiI0NTA4NjMyZGI0NjRiMjQxODJkZGY5NDk0YzQyMzQ3OCIsImlzcyI6IkJJWDUtU0VSVkVSIiwic3ViIjoiaHNraW05NyIsInVzZXJubyI6MTIsImdyb3VwcyI6IjFBQzAwRjExOTY4MDg3RDI5OENBNjUxODc3NTQxRkEwIiwicm9sZXMiOiIyRThCQTEwRjIyM0Q5RjlEOTg5M0VDMDNBODlCN0ZCRjE3MEY3NzUwMDU2QTMwQTJEOEExNUJDNDJFODE2QTlFRkYyQjE3QTU0MkQ3OUI4QzgzREJCOTdDRjk3RDMxRTMiLCJuYW1lIjoiMkUzNTNENEZDMDZERUJDNkVFMEY1ODUzMUJDMDBGNTciLCJ0eXBlIjoiQUNDRVNTIn0.g-rjtAg8wgYI6kartcEvJckRlq3XNl74oEQFh_MJ-cGLBDx-VMXfCnBNHG7afM-YvQcVOBU3PTR-vzaZybo-_g";

  useEffect(() => {
    const iframe = document.getElementById("bx_iframe");
    if (iframe != null) {
      const url =
        "https://studio.bix5.net/authentication?url=dashboards/" +
        dashboardId +
        "&accessToken=" +
        token;

      // POST
      const accessTokenInput = document.getElementById("accessToken");
      if (accessTokenInput) {
        accessTokenInput.value = token;
      }

      // Submit the form to trigger the POST request
      const form = document.getElementById("frm_dashboard");
      if (form) {
        form.submit();
      }

      // Set the iframe src to display the BIX5 dashboard content
      //iframe.src = url;
    }
  }, [dashboardId, token]);

  return (
    <div>
      <form id="frm_param">
        <label htmlFor="year">연도</label>
        <select id="year" name="year" onChange={(e) => console.log(e.target.value)}>
          <option value="">전체</option>
          <option value="2021" selected>2021</option>
          <option value="2022">2022</option>
        </select>
      </form>
      {/* action, target, method 작성 */}
      <form id="frm_dashboard" action="https://studio.bix5.net/dashboards/4127b3a24c8ae685b54c70b6c2ea7bac" target="bx_iframe" method="post">
        <input id="accessToken" type="hidden" name="accessToken" />
      </form>
      <iframe title="testIframe" id="bx_iframe" name="bx_iframe" width="100%" height="1080" src=""></iframe>
    </div>
  );
};

export default PostDashboard;

