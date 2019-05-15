<template>
  <section>
    <div class="company_header">
      <img class="company_logo" src="../images/windows.png" alt="Company Logo">
      <div class="company_info">
        <h1>Microsoft</h1>
        <div class="company_loc">
          <img class="logo" src="../images/location.png" alt="Location Icon">
          <p>Redmond, WA USA</p>
        </div>
      </div>
    </div>
    <p class="main_info">At microsoft, our mission is to empower every person and every organization on the planet to achieve more.
      Our mission is grounded in both the world in which we live and the future we strive to create. <a class="underline" href="/" target="_blank">View More...</a>
    </p>
    <div class="company">
      <div class="activies">
        <h2>ACTIVIES</h2>
        <div class="company_activies">
          <p class="company_history">8 days ago</p>
          <img class="icon" src="../images/play.png" alt="Play Icon">
          <p class="company_activies_info"><a href="/">Cloud Ochestration</a> replaced <span class="line_through">Microsoft</span> <a href="/">on 1 property</a></p>
        </div>
        <div class="company_activies">
          <p class="company_history">10 days ago</p>
          <img class="icon" src="../images/world.png" alt="World Icon">
          <p class="company_activies_info"><a href="/">Express Scripts</a> replaced <span class="line_through">Microsoft</span> <a href="/">on 1 property</a></p>
        </div>
        <div class="company_activies">
          <p class="company_history">12 days ago</p>
          <img class="icon" src="../images/play.png" alt="Play Icon">
          <p class="company_activies_info"><a href="/">kaiser Permanente</a> replaced <span class="line_through">Microsoft</span> <a href="/">on 1 property</a></p>
        </div>
        <div class="company_activies">
          <p class="company_history">14 days ago</p>
          <img class="icon" src="../images/world.png" alt="World Icon">
          <p class="company_activies_info"><a href="/">Molina Healthcare</a> replaced <span class="line_through">Microsoft</span> <a href="/">on 1 property</a></p>
        </div>
        <div class="company_activies">
          <p class="company_history">16 days ago</p>
          <img class="icon" src="../images/world.png" alt="World Icon">
          <p class="company_activies_info"><a href="/">Express Scripts</a> replaced <span class="line_through">Microsoft</span> <a href="/">on 1 property</a></p>
        </div>
        <div class="company_activies">
          <p class="company_history">17 days ago</p>
          <img class="icon" src="../images/play.png" alt="Play Icon">
          <p class="company_activies_info"><a href="/">kaiser Permanente</a> replaced <span class="line_through">Microsoft</span> <a href="/">on 1 property</a></p>
        </div>
        <div class="company_activies">
          <p class="company_history">18 days ago</p>
          <img class="icon" src="../images/world.png" alt="World Icon">
          <p class="company_activies_info"><a href="/">Molina Healthcare</a> replaced <span class="line_through">Microsoft</span> <a href="/">on 1 property</a></p>
        </div>
        <div class="company_activies">
          <p class="company_history">15 days ago</p>
          <img class="icon" src="../images/world.png" alt="World Icon">
          <p class="company_activies_info">Microsoft launched M-Cloud</p>
        </div>
      </div>
      <div class="right_container">
        <div class="similar_companies">
          <h2>SIMILAR COMPANIES</h2>
          <div class="similar_companies_info">
            <img class="similar_companies_logo" src="../images/aws.png" alt="AWS logo">
            <a href="http://www.amazon.com" target="_blank">Amazon Web Services (AWS)</a>
          </div>
          <div class="similar_companies_info">
            <img class="similar_companies_logo" src="../images/oracle.png" alt="Oracle logo">
            <a href="http://www.oracle.com" target="_blank">Oracle Corporation</a>
          </div>
        </div>
        <div class="similar_companies">
          <h2>COMPANY SPEND HISTORY</h2>
          <svg class="chart">
            <path d="M 0 75 q 60 -50 120 0 M 120 75 q 60 -50 120 0 M 240 75 q 60 -50 120 0" stroke="#20C795" stroke-width="2" fill="#D2F4EA" />
            <g class="labels x-labels">
              <text x="0" y="90">0</text>
              <text x="50" y="90">2</text>
              <text x="100" y="90">4</text>
              <text x="150" y="90">6</text>
              <text x="200" y="90">8</text>
              <text x="250" y="90">10</text>
              <text x="300" y="90">12</text>
            </g>
            <line x1="0" y1="55" x2="360" y2="55" style="stroke:#DFE2EA;stroke-width:1" />
            <line x1="0" y1="30" x2="360" y2="30" style="stroke:#DFE2EA;stroke-width:1" />
            <text class="labels-y" x="5" y="70">30k</text>
            <text class="labels-y" x="5" y="47">60k</text>
            <text class="labels-y" x="5" y="20">90k</text>
          </svg>
        </div>
        <div class="company_spend">
          <h2>COMPANY SPEND HISTORY</h2>
          <div class="similar_companies_info">
            <img class="similar_companies_logo" src="../images/google_cloud.png" alt="Google Cloud logo">
            <div>
              <a href="http://cloud.google.com" target="_blank">Google Cloud Platform,</a>
              <p>Microsoft spend on product $500,000</p>
            </div>
          </div>
          <div class="similar_companies_info">
            <img class="similar_companies_logo" src="../images/google_cloud.png" alt="Century Link logo">
            <div>
              <a href="http://centurylink.com" target="_blank">CenturyLink CDN,</a>
              <p>Microsoft spend on product $300,000</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'CompanyPage'
  }
</script>

<style scoped>
  .chart {
    background: #F6F7F9;
    width: 340px;
    height: 90px;
    margin: 15px;
  }

  .labels{
    font-size: .7rem;
    fill: #D0D4E1;
  }

  .labels-y {
    font-size: .7rem;
    fill: #D0D4E1;
    font-weight: bold;
  }

  section {
    max-width: 780px;
  }

  .underline {
    text-decoration: underline;
  }

  .main_info {
    line-height: 1.5rem;
  }

  .company_logo {
    width: 70px;
    height: 70px;
    border: 1px solid #E7E9F3;
    border-radius: 4px;
    padding: 15px;
    box-shadow: 0 4px 8px rgba(30, 60, 90, 0.1);
  }

  .company_header, .company_loc, .company_activies, .company {
    display: flex;
  }

  .company_header + p {
    margin: 30px 0;
  }

  .company_info {
    margin-left: 15px;
  }

  .company_info h1 {
    font-size: 1.5rem;
    margin-bottom: 15px;
  }

  .company_info p {
    font-size: .8rem;
    padding-top: 2px;
    margin-left: 2px;
  }

  .logo {
    height: 15px;
    width: 15px;
  }

  .icon {
    height: 25px;
    width: 25px;
    margin: 0 10px;
    align-self: center;
  }

  .activies {
    border: 1px solid #D4D9E3;
    border-radius: 4px;
    width: 380px;
  }

  h2 {
    color: #676767;
    font-size: .75rem;
    border-bottom: 1px solid #D4D9E3;
    padding: 15px;
  }

  .company_activies {
    padding: 15px;
    border-bottom: 1px solid #D4D9E3;
  }

  .company_activies:nth-last-child(1) {
    border: none;
  }

  .company_history {
    font-size: .8rem;
    color: #A0A0A0;
    min-width: 75px;
    align-self: center;
  }

  .company_activies_info {
    font-size: .95rem;
  }

  a {
    color: #6470AB;
    font-size: .95rem;
  }

  .line_through {
    text-decoration: line-through;
    color: #9B9B9B;
  }

  .right_container {
    margin-left: 30px;
  }

  .similar_companies, .company_spend {
    border: 1px solid #D4D9E3;
    width: 370px;
    border-radius: 4px;
  }

  .similar_companies {
    margin-bottom: 20px;
  }

  .similar_companies_info {
    display: flex;
    margin: 12px;
    align-items: center;
  }

  .similar_companies_logo {
    width: 45px;
    height: 45px;
    border: 1px solid #E7E9F3;
    border-radius: 4px;
    padding: 5px;
    box-shadow: 0 4px 8px rgba(30, 60, 90, 0.2);
    margin-right: 15px;
  }

  .company_spend p {
    margin-top: 5px;
  }

</style>
