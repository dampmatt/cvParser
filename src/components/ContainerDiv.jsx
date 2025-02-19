import { DataProvider } from "./context";
import CVDiv from "./CVDiv";
import DetailsDiv from "./DetailsDiv";
export default function ContainerDiv() {
  return (
    <DataProvider>
      <div id="container-div">
        <DetailsDiv />
        <CVDiv />
      </div>
    </DataProvider>
  );
}
