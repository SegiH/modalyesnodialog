This project was created by me because I couldn't find an easy way to create a simple and nice looking yes or no modal dialog.

This package uses Material-UI but only imports the necessary components to keep the size down.

Installation: npm install modalyesnodialog

Usage:

1. Add the imports at the top of your component script:

	 - import ModalYesNoDialog from 'ModalYesNoDialog';

	 - import 'ModalYesNoDialog/src/components/ModalYesNoDialog.css';

2. Create the event handler that gets called when the user clicks on one of the 2 buttons:
   
	 EG:

	 ```js
	 logOffDialogEvent(dialogResponse) {
    	  if (this.state.showModalDialog === false) {
        	   return;
     	  }
          
     	  if (dialogResponse.currentTarget.textContent==="Yes") {
        	   // Do something here
      	  }
	 };
	 ```

3. Don't forget to bind the event handler to this in your constructor

	 EG: 
	 - this.logOffDialogEvent = this.logOffDialogEvent.bind(this);

4. Add the component to the return block of render():
     EG: 

     ```js
     <ModalYesNoDialog isVisible={this.state.showModalDialog} title="This is the title" description="Are you sure that you want to do this ?" eventHandler={this.myEventHandler}>
     </ModalYesNoDialog>
     ```

     - isVisible: This should be bound to a boolean state that you set to true when you want to show the modal dialog
     - title: Text that appears at the top of the dialog
     - description: The message that you want to display
     - firstButtonText (optional): The text of the first button. If not supplied, defaults to No
     - secondButtonText (optional): The text of the second. If not supplied, defaults to Yes
     - firstButtonEventHandler: The event handler for the first button (usually the ok button)
	 - secondButtonEventHandler: The event handler for the second button (usuallu the cancel button)
     
	 Make sure not to put the <ModalYesNoDialog> component inside of another component in render() because the modal dialog may not appear.
	 
	 Version history:

     0.2 Update dependencies, documentation and npm audit fixes.  Update button style
     0.1.17 Updated to Material UI 3. Fixed bug when rendering buttons
	 0.1.11 Fixed Babel module loading to support Jest and Enzyme unit tests