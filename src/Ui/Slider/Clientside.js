import Slider from "./Slider";
import { slider } from "../../asset/data";

function Clientside() {
  return (
    <div>
      <Slider slides={slider} />
    </div>
  );
}

export default Clientside;
