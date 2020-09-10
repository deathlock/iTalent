import React from 'react';
import addImage from '../../assets/images/add.png';
import trashImage from '../../assets/images/trash.png';
import Header from '../common/header/header';
import Footer from '../common/footer/footer';

const initialState = [
    {
        value: "",
        name: "talent-1",
        count: 1,
        search_key: "Designation"
    }
]

class FindTalent extends React.Component {
    state = {
        inputCount: initialState
    }

    inputTotal = 1;

    addInputs = () => {
        this.inputTotal++;
        const inputObj = { value: "", name: `talent-${this.inputTotal}`, count: 1, search_key: "Designation" }
        this.setState({ inputCount: [...this.state.inputCount, inputObj] });
    }

    removeInputs = (key) => {
        this.setState({
            inputCount: this.state.inputCount.filter((_, i) => i !== key)
        });
    }

    onInputChange = (ev, index) => {
        const data = this.state.inputCount;
        data[index].value = ev.target.value;
        this.setState({
            inputCount: data
        })
    }

    onSelectChange = (ev, index) => {
        const data = this.state.inputCount;
        data[index].count = ev.target.value;
        this.setState({
            inputCount: data
        })
    }

    resetForm = () => {
        console.log("check", initialState)
        this.setState({
            inputCount: initialState
        });
    }

    render() {
        return (
            <React.Fragment>
                <div className={`container-fluid header-background-color`} style={{ position: 'relative' }}>
                    <div className="container">
                        <Header />
                        <section className="section-1">
                            <h1 className="text-center main_heading">Find Your Talented Team</h1>
                            <p className="text-center main_sub_heading">We are the largest, globally-distributed network of top business, design, and technology talent, ready to tackle your most important initiatives.</p>
                            <div>
                                <form className="searh_form">
                                    <div className="form-group">
                                        {
                                            this.state.inputCount.map((el, key) => {
                                                return (
                                                    <div className="row search_form_div" key={key}>
                                                        <div className="col-12 col-md-7 col-lg-7">
                                                            <input type="text" className="form-control" onChange={(ev) => { this.onInputChange(ev, key) }} name={el.name} value={el.value} />
                                                        </div>
                                                        <div className="col-12 col-md-2 col-lg-2 padding0">
                                                            <select defaultValue={el.count} onChange={(ev) => { this.onSelectChange(ev, key) }} name={"select-" + el.member} className="custom-select">
                                                                <option value={1}>1</option>
                                                                <option value={2}>2</option>
                                                                <option value={3}>3</option>
                                                                <option value={4}>4</option>
                                                                <option value={5}>5</option>
                                                            </select>
                                                        </div>
                                                        <div className="col-12 col-md-3 col-lg-3">
                                                            <div className="icon_background display-inline" onClick={this.addInputs} ><img src={addImage} alt="addImage" className="img-fluid icons_width" /></div>
                                                            {key !== 0 && <div className="icon_background display-inline" onClick={() => this.removeInputs(key)}><img src={trashImage} alt="trashImage" className="img-fluid icons_width" /></div>}
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                        <div className="text-center testonomial_btns_div">
                                            <input type="button" name="reset" onClick={this.resetForm} value="Reset" className="btn btn-primary reset_btn" />
                                            <input type="button" style={{margin: "0 10px"}} name="find" value="Find" className="btn btn-primary btn-orange-color my-2 my-sm-0" />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </section>
                    </div>
                </div>
                <Footer />
            </React.Fragment>
        );
    }
}

export default FindTalent;