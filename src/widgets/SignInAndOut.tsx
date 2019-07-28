import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import ErrorIcon from '@material-ui/icons/CloudOff';
import OkIcon from '@material-ui/icons/CloudDone';
import Badge from '@material-ui/core/Badge';
import { loadGApi, handleSignIn, handleSignOut } from '../sheets/spreadsheet';

function init(
  apiKey: string,
  clientId: string,
  setSignIn: (isSignedIn: boolean) => void,
) {
  if (!init.loaded) {
    init.loaded = true;
    loadGApi(apiKey, clientId, setSignIn);
  }
}
init.loaded = false;

interface SignInAndOutProps {
  apiKey: string;
  clientId: string;

  isSignedIn: boolean;
  onSignIn: (isSignedIn: boolean) => void;
}

export default function SignInAndOut(props: SignInAndOutProps) {
  React.useEffect(() => init(props.apiKey, props.clientId, props.onSignIn), [
    props.apiKey,
    props.clientId,
    props.onSignIn,
  ]);

  const signInButton = (
    <IconButton onClick={handleSignIn} title="Sign In" color="inherit">
      <Badge badgeContent={'1'} color="secondary">
        <ErrorIcon />
      </Badge>
    </IconButton>
  );
  const signOutButton = (
    <IconButton onClick={handleSignOut} title="Sign Out" color="inherit">
      <OkIcon />
    </IconButton>
  );

  return <div>{props.isSignedIn ? signOutButton : signInButton}</div>;
}
