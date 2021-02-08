/* eslint react/prop-types: 0 */
import React from 'react'
import {Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField} from "@material-ui/core";
const Modal = ({open,handleClose,handleInputChange,handleSubmit,isEdit,data}) => {

    return (
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">{isEdit ? 'Edit' : 'Add'} Student</DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    name="name"
                    label="Name"
                    type="text"
                    fullWidth
                    onChange={handleInputChange}
                    value={data.name}
                />
                <TextField
                    margin="dense"
                    name="email"
                    label="email"
                    type="email"
                    fullWidth
                    onChange={handleInputChange}
                    value={data.email}
                />
                <TextField
                    margin="dense"
                    name="course"
                    label="course"
                    type="text"
                    fullWidth
                    onChange={handleInputChange}
                    value={data.course}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="secondary">
                    Cancel
                </Button>

                <Button onClick={handleSubmit} color="primary">
                    {isEdit ? 'Edit' : 'Add'}
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default Modal