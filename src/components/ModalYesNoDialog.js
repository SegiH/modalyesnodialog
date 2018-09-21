import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

class ModalYesNoDialog extends Component {
     constructor(props) {
          super(props);

          this.state = {
          };      
     }
     
     render() {
          return (
               <Dialog id="alert-dialog" open={this.props.isVisible}>
                    <DialogTitle id="alert-dialog-title"><span>{this.props.title}</span></DialogTitle>
                  
                    <DialogContent>
                         <DialogContentText id="alert-dialog-description">
                              {this.props.description}
                         </DialogContentText>
                    </DialogContent>
        
                    <DialogActions>
                         {typeof this.props.firstButtonText !== 'undefined' &&
                              <Button onClick={this.props.eventHandler} color="primary">{this.props.firstButtonText}</Button>
                         }
                 
                         {typeof this.props.secondButtonText !== 'undefined' &&
                              <Button onClick={this.props.eventHandler} color="primary">{this.props.secondButtonText}</Button>
                         }
                    </DialogActions>
               </Dialog>
          )
     }
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