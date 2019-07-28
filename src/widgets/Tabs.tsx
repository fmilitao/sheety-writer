import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TabContainer from './TabContainer';

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      flexGrow: 1,
      width: '100%',
      backgroundColor: theme.palette.background.paper,
    },
  }),
);

interface ScrollableTabsProps {
  isSignedIn: boolean;
  sheets: Sheet[];
  spreadsheetId: string;
  logger: { log: (message: string) => void };
}

export default function ScrollableTabs(props: ScrollableTabsProps) {
  const classes = useStyles();
  const [tabIndex, setTabIndex] = React.useState(0);

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={tabIndex}
          onChange={(_: unknown, newIndex: number) => setTabIndex(newIndex)}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
        >
          {props.sheets.map(({ title }, index) => (
            <Tab label={title} key={index} />
          ))}
        </Tabs>
      </AppBar>
      {props.sheets.map(
        ({ headers, title }, index) =>
          tabIndex === index && (
            <TabContainer
              isSignedIn={props.isSignedIn}
              spreadsheetId={props.spreadsheetId}
              logger={props.logger}
              elements={headers}
              sheet={title}
              key={index}
            />
          ),
      )}
    </div>
  );
}
