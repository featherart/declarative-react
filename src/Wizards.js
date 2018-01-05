import React, { Component } from "react";
import WizardSelector from "./WizardSelector";
import wizardStore from "./wizardStore";

class Wizards extends Component {
  state = {
    wizards: wizardStore,
    selectedWizard: "Harry",
    searchedWizard: ""
  };

  handleWizardChange(e) {
    e.preventDefault();
    this.setState({ selectedWizard: e.target.dataset.name });
  }

  handleWizardSearch(e) {
    e.preventDefault();
    this.setState({ searchedWizard: e.target.value.toLowerCase() });
  }

  searchWizards() {
    this.state.searchedWizard
      ? this.setState({
          wizards: this.state.wizards.filter(
            wiz =>
              wiz.house.toLowerCase() ===
              this.state.searchedWizard.toLowerCase()
          )
        })
      : this.setState({ wizards: wizardStore });
  }

  render() {
    const { wizards, selectedWizard, searchedWizard } = this.state;
    return (
      <div className="container">
        <WizardSelector wizard={selectedWizard} />
        <div className="search-wizards">
          <label>Search Houses</label>
          <input
            type="text"
            value={searchedWizard}
            onChange={e => this.handleWizardSearch(e)}
          />

          <button
            className="search-button"
            onClick={() => this.searchWizards()}
          >
            Submit
          </button>
        </div>
        <div className="wizards-container">
          {wizards.length > 0
            ? wizards.map(wiz =>
                <div
                  key={wiz.id}
                  data-name={wiz.name}
                  onClick={e => this.handleWizardChange(e)}
                  className={`wizard ${wiz.house} ${wiz.name === selectedWizard
                    ? "selected"
                    : ""}`}
                >
                  {wiz.name} from House {wiz.house}
                </div>
              )
            : <div className="no-results">No Wizards to Show!</div>}
        </div>
      </div>
    );
  }
}
export default Wizards;
