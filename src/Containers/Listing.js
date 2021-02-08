import React from 'react';
import {
    withStyles,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Button,

} from '@material-ui/core';
import {fetchingStudents, deletingStudent, creatingStudents} from "../redux/Action/index";
import {connect} from 'react-redux';
import Modal from "./Modal"

const useStyles = theme => ({
    table: {
        minWidth: 650,
    },
});

class Listing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            studentData: [{
                Sid:0,
                name: '',
                email: '',
                course: ''
            }],
            openModal: false,
            isEdit: false
        }
        this.props.fetchingStudents();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.data !== prevProps.data) {
            this.setState({loading: this.props.loading})
        }
    }

    handleClose = () => {
        this.setState({openModal: false, isEdit: false})
    }

    handleInputChange(evt) {
        const {name, value} = evt.target;
        this.setState(prevState => ({
            studentData: { ...prevState.studentData, [name]: value }
        }));
    }

    render() {
        const {
            props: {classes, loading, deletingStudent,data},
            state: {studentData, openModal, isEdit}
        } = this
        return (
            loading ? <div>Loading</div> :
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell>Email</TableCell>
                                <TableCell>Course</TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data && data.map((item) => (
                                <TableRow key={item.id}>
                                    <TableCell component="th" scope="row">
                                        {item.name}
                                    </TableCell>
                                    <TableCell align="right">{item.email}</TableCell>
                                    <TableCell align="right">{item.course}</TableCell>
                                    <TableCell align="right"><Button variant="contained"
                                                                     color="primary" onClick={() => this.setState({
                                        isEdit: true,
                                        studentData:{Sid:item.id,name:item.name,email: item.email,course: item.course}
                                    })}>Edit</Button></TableCell>
                                    <TableCell align="right"><Button variant="contained"
                                                                     color="primary"
                                                                     onClick={() => deletingStudent(item.id)}
                                    >Delete</Button></TableCell>
                                </TableRow>
                            ))}
                            <TableRow><TableCell><Button variant="contained"
                                                         color="primary"
                                                         onClick={() => this.setState({openModal: true})}>Add</Button></TableCell></TableRow>
                        </TableBody>
                    </Table>
                    <Modal
                        open={openModal || isEdit}
                        handleClose={() => this.handleClose()}
                        handleInputChange={(evt) => this.handleInputChange(evt)}
                        handleSubmit = {() => { this.props.creatingStudents(studentData); this.handleClose()}}
                        isEdit={isEdit}
                        data={studentData}
                    />
                </TableContainer>
        );
    }
}

export default connect(
    ({GetStudentsReducer}) => {
        return {
            data: GetStudentsReducer.data,
            loading: GetStudentsReducer.loading
        }
    },
    dispatch => {
        return {
            fetchingStudents: () => dispatch(fetchingStudents()),
            deletingStudent: (payload) => {
                dispatch(deletingStudent(payload))
            },
            creatingStudents: (payload) => {
                dispatch(creatingStudents(payload))
            }
        }
    }
)(withStyles(useStyles)(Listing))
