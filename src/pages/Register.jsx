import { Header } from '../components/Header.jsx';
import{ Footer } from '../components/Footer.jsx';
import './Menu_Item.css'

function Register() {
  return(  
    <>
      <Header />
      <div class="form-container">
        <h1>Register</h1>
        <form action="/submit-form" method="post">
          <input type="text" placeholder="First Name" name="firstName" required />
          <input type="text" placeholder="Last Name" name="lastName" required />
          <input type="tel" placeholder="Mobile Phone" name="mobilePhone" required />
          <select name="birthdayMonth" required>
            <option value="" disabled selected>Month</option>
            <option value="01">January</option>
            <option value="02">February</option>
            <option value="03">March</option>
            <option value="04">April</option>
            <option value="05">May</option>
            <option value="06">June</option>
            <option value="07">July</option>
            <option value="08">August</option>
            <option value="09">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
          <select name="birthdayDay" required>
            <option value="" disabled selected>Day</option>
            <option value="01">1</option>
            <option value="02">2</option>
            <option value="03">3</option>
            <option value="04">4</option>
            <option value="05">5</option>
            <option value="06">6</option>
            <option value="07">7</option>
            <option value="08">8</option>
            <option value="09">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="18">18</option>
            <option value="19">19</option>
            <option value="20">20</option>
            <option value="21">21</option>
            <option value="22">22</option>
            <option value="23">23</option>
            <option value="24">24</option>
            <option value="25">25</option>
            <option value="26">26</option>
            <option value="27">27</option>
            <option value="28">28</option>
            <option value="29">29</option>
            <option value="30">30</option>
            <option value="31">31</option>
          </select>
          <input type="email" placeholder="E-mail" name="email" required />
          <input type="password" placeholder="Password" name="password" required />
          <input type="password" placeholder="Confirm Password" name="confirmPassword" required />
          <button type="submit">Submit</button>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default Register
