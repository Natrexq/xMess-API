  <img align="center" src="https://raw.githubusercontent.com/Natrexq/xMess-API-/description/work.png"/>
  <h1 align="center">
  💬»xMess API:«💬
  </h1>
   <h3 align="center">Open Source Notification API for your site maked using vanilla JavaScript  </h3>
   <br/>
      <h3 align="center">1.How to install</h3>
      <ul>
      <li>1. Download repo .zip file or copy using git</li>
        <li>1.1. If you downloaded zip file unpack it</li>
        <li>2.Go to repo folder /xMess-Api-</li>
      <li>3.Move api folder into folder with scripts files in your project (if yo dont have that folder move it into project folder)</li>
      <li>4.Hook css api file (Required)</li>
  <img src="https://raw.githubusercontent.com/Natrexq/xMess-API-/description/import_css.png"/>
      <li>5.Hook run.js and api.js file:</li>
  <img src="https://raw.githubusercontent.com/Natrexq/xMess-API-/description/import_js.png"/>
  <li>All should be good</li>
      </ul>
        <br/>
      <h3 align="center">2.How to call notification:</h3>
      <ul>
  <li>1. Define where the notification will be displayed by makeing varable with hooked container [body,div] */</li>
   <li>2. Define when notification will be display </li>
   <li>3: Enter data into function:</li>
   <li>xMassCall(F1, "F2", "F3", "F4", "F5");</li>
     <li>What is the meaning of these "F"?</li>
     <li>F1:  where notification will be displayed (div,body);</li>
   <li>F2:  Animation: [from-left,from-right,from-top,from-bottom];</li>
   <li>F3:  Type of notification: [warn, help, ads, info];</li>
   <li>F4:  Notification title: "title of notification";</li>
   <li>F5:  Notification message: "message of notification";</li>
    <br/>
  <li>Example usage: xMassCall(body, "from-top", "warn", "Warning", "You can't do it");</li>
    </ul>

   <h2>a</h2>
    
