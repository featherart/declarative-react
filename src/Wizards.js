import React, { Component } from "react";
import WizardSelector from "./WizardSelector";
import wizardStore from "./wizardStore";

class Wizards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wizards: wizardStore,
      selectedWizard: "Harry",
      searchedWizard: ""
    };
  }

  handleWizardChange(e) {
    this.setState({ selectedWizard: e.target.dataset.name });
  }

  handleWizardSearch(e) {
    this.setState({
      searchedWizard: e.target.value.toLowerCase(),
      wizards: wizardStore
    });
  }

  searchWizards(e) {
    e.preventDefault();
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
          <form onSubmit={e => this.searchWizards(e)}>
            <label>Search Houses</label>
            <input
              type="text"
              value={"" || searchedWizard}
              onChange={e => this.handleWizardSearch(e)}
            />
            <input type="submit" value="Submit" className="search-button" />
          </form>
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
