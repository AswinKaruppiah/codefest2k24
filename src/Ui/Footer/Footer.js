import "./Footer.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailIcon from "@mui/icons-material/Mail";

function Footer() {
  return (
    <footer className="footer">
      <center>
        <div className="ordinator">
          <div>
            <h1>Events</h1>
            <p>Non-Technical</p>
            <p>Technical</p>
            <p>WorkShop</p>
            <div>
              <h1>Contact As</h1>
              <a href="https://www.instagram.com/codefest_2k24/">
                <InstagramIcon sx={{ fontSize: 40 }} />
              </a>
              <a href="mailto:kvcodefest23@gmail.com">
                <MailIcon sx={{ fontSize: 40 }} />
              </a>
            </div>
          </div>
          <div>
            <h1>Co-ordinator staff :</h1>
            <p>
              Ms.Sangeetha: <span>7639756579</span>
            </p>

            <h1>Students Co ordinator :</h1>
            <p>
              Danush:<span>9344641463</span>
            </p>
            <p>
              Kishore: <span>86681 41058</span>
            </p>
          </div>
        </div>
        <hr />
        <p className="cp">© Created by Symposium Team 2024</p>
      </center>
    </footer>
  );
}

export default Footer;
