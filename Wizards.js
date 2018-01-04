import React, { Component } from "react";
import wizardStore from "./wizardStore";

class Wizards extends Component {
  state = {
    wizards: wizardStore,
    selectedWizard: "Harry"
  };

  handleWizardChange(e) {
    e.preventDefault();
    this.setState({ selectedWizard: e.target.dataset.name });
  }

  render() {
    const { wizards, selectedWizard } = this.state;
    return (
      <div className="container">
        <div className="selected-wizard">
          The selected wizard is <i>{selectedWizard}</i>
        </div>
        <div className="wizards-container">
          {wizards.map(wiz =>
            <div
              key={wiz.id}
              data-name={wiz.name}
              onClick={e => this.handleWizardChange(e)}
              className={`wizard ${wiz.house}`}
            >
              {wiz.name} from House {wiz.house}
            </div>
          )}
        </div>
      </div>
    );
  }
}
export default Wizards;
