import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import Button from '@material-ui/core/Button';
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
                         <Button onClick={props.firstButtonEventHandler} color="primary">{props.firstButtonText}</Button>
                    }

                    {typeof props.secondButtonText !== 'undefined' &&
                         <Button onClick={props.secondButtonEventHandler} color="primary">{props.secondButtonText}</Button>
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