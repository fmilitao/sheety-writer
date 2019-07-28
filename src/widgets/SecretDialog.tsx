import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import LockedIcon from '@material-ui/icons/LockOutlined';
import UnlockedIcon from '@material-ui/icons/Lock';
import Badge from '@material-ui/core/Badge';

interface SecretDialogProps {
  // if not isValid then pop-up dialog
  isValid: boolean;
  isValidPassword: (password: string) => boolean;
  onValue: (password: string) => void;
}

const defaultPassword = '';
export default function SecretDialog(props: SecretDialogProps) {
  const [open, setOpen] = React.useState(!props.isValid);

  // for handling form validity feedback
  const initialCheck = props.isValidPassword(defaultPassword);
  const [isValidCheck, setValidCheck] = React.useState(initialCheck);
  const [tmpValue, setTmpValue] = React.useState(defaultPassword);

  function handleClickOpen() {
    setTmpValue(defaultPassword);
    setOpen(true);
  }

  function handleClose(isSet: boolean) {
    setOpen(false);
    if (isSet) {
      props.onValue(tmpValue);
    }
    setTmpValue(defaultPassword);
  }

  function handleChange(event: any) {
    const newValue = event.target.value;
    setTmpValue(newValue);
    setValidCheck(props.isValidPassword(newValue));
  }

  return (
    <div>
      <IconButton
        onClick={handleClickOpen}
        title="Set unlock secret"
        color="inherit"
      >
        {!props.isValid ? (
          <Badge badgeContent={'1'} color="secondary">
            <LockedIcon />
          </Badge>
        ) : (
          <UnlockedIcon />
        )}
      </IconButton>
      <Dialog open={open} onClose={() => handleClose(false)}>
        <DialogTitle>Set unlock secret</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Set the secret to decrypt the API key and sheet id.
          </DialogContentText>
          <TextField
            error={!isValidCheck}
            autoFocus
            margin="dense"
            label="Unlock secret"
            type="text"
            onChange={handleChange}
            fullWidth
            value={tmpValue}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleClose(false)} color="primary">
            Cancel
          </Button>
          <Button onClick={() => handleClose(true)} color="primary">
            Set
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
