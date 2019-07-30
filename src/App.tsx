import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import OfflineIcon from '@material-ui/icons/OfflineBolt';
import Typography from '@material-ui/core/Typography';
import Notifier from './widgets/Notifier';
import Tabs from './widgets/Tabs';
import SignInAndOut from './widgets/SignInAndOut';
import SecretDialog from './widgets/SecretDialog';
import { getConfig } from './sheets/config';
import { getSpreadsheetTitle } from './sheets/spreadsheet';
import { name, version } from '../package.json';

const appTitle = 'Sheety Writer';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    whiteSpace: 'nowrap',
    paddingRight: 10,
  },
  subtitle: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    fontWeight: 'bold',
  },
  failure: {
    padding: 8 * 3,
    fontStyle: 'italic',
  },
}));

const hideSecretDialogOnUnlock = true;
const storageKey = 'config-secret';

export default function App() {
  const classes = useStyles();

  const defaultPassword = localStorage.getItem(storageKey) || '';
  const [config, setConfig] = React.useState(getConfig(defaultPassword));
  const [isValid, setValid] = React.useState(config.valid);
  const [isOnline, setIsOnline] = React.useState(true);
  const [isSignedIn, setIsSignedIn] = React.useState(false);
  const [sheetTitle, setSheetTitle] = React.useState('');

  window.addEventListener('online', () => setIsOnline(true));
  window.addEventListener('offline', () => setIsOnline(false));

  // note that logger.log will be replaced by the `Notifier` element.
  const logger = { log: (message: string) => console.log(message) };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            className={classes.title}
            onClick={() => logger.log(`${name}: ${version}`)}
          >
            {appTitle}
          </Typography>
          {sheetTitle && (
            <Typography className={classes.subtitle}>{sheetTitle}</Typography>
          )}
          {!isOnline && <OfflineIcon />}
          {config.valid && (
            <SignInAndOut
              isSignedIn={isSignedIn}
              onSignIn={signedIn => {
                setIsSignedIn(signedIn);
                getSpreadsheetTitle(config.value.spreadsheetId).then(title =>
                  setSheetTitle(title),
                );
              }}
              apiKey={config.value.apiKey}
              clientId={config.value.clientId}
            />
          )}
          {(!config.valid || !hideSecretDialogOnUnlock) && (
            <SecretDialog
              isValid={isValid}
              onValue={newPassword => {
                const newConfig = getConfig(newPassword);
                setConfig(newConfig);
                setValid(newConfig.valid);
                if (newConfig.valid) {
                  localStorage.setItem(storageKey, newPassword);
                }
              }}
              isValidPassword={newPassword => getConfig(newPassword).valid}
            />
          )}
        </Toolbar>
      </AppBar>
      {config.valid ? (
        <Tabs
          isSignedIn={isSignedIn}
          spreadsheetId={config.value.spreadsheetId}
          sheets={config.value.sheetData}
          logger={logger}
        />
      ) : (
        <Typography className={classes.failure} variant="h6">
          Invalid, or encrypted, config file.
        </Typography>
      )}
      <Notifier logger={logger} />
    </div>
  );
}
