import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import PropTypes from 'prop-types';

export const ModalYesNoDialog = (props) => {
     return (
          <Dialog id="alert-dialog" open={props.isVisible}>
               <DialogTitle id="alert-dialog-title"><span>{props.title}</span></DialogTitle>

               <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                         {props.description}
                    </DialogContentText>
               </DialogContent>

               <DialogActions>
                    {typeof props.firstButtonText !== 'undefined' &&
                         <Button onClick={props.firstButtonEventHandler} variant="contained" color="primary">{props.firstButtonText}</Button>
                    }

                    {typeof props.secondButtonText !== 'undefined' &&
                         <Button onClick={props.secondButtonEventHandler} variant="contained" color="secondary">{props.secondButtonText}</Button>
                    }
               </DialogActions>
          </Dialog>
     )
}

// Define the type for all of the props
ModalYesNoDialog.propTypes = {
     isVisible: PropTypes.bool,
     title: PropTypes.string,
     description: PropTypes.string,
     eventHandler: PropTypes.func,
     firstButtonText: PropTypes.string,
     secondbuttonText: PropTypes.string,
}

ModalYesNoDialog.defaultProps = {
     isVisible: false,
     title: 'title',
     description: 'description',
};

export default ModalYesNoDialog;