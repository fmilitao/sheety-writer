import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import DatePicker from './DatePicker';
import Select from './Select';
import Amount from './Amount';
import Comment from './Comment';
import CommentWithSuggestion from './CommentWithSuggestion';
import { isDebug } from '../sheets/config';
import { appendRow } from '../sheets/spreadsheet';

interface TabContainerProps {
  isSignedIn: boolean;
  spreadsheetId: string;
  sheet: string;
  elements: SheetHeader[];
  logger: Logger;
}

const useStyles = makeStyles(() => ({
  root: {
    padding: 8 * 3,
  },
  button: {
    marginTop: '30px',
  },
}));

function nowDate() {
  const date = new Date();
  const year = `${date.getFullYear()}`.padStart(4, '0');
  const month = `${date.getMonth() + 1}`.padStart(2, '0');
  const day = `${date.getDate()}`.padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function formatOut(dateString: string) {
  const date = new Date(dateString);
  const year = `${date.getFullYear()}`.padStart(4, '0');
  const month = `${date.getMonth() + 1}`.padStart(2, '0');
  const day = `${date.getDate()}`.padStart(2, '0');
  return `${day}/${month}/${year}`;
}

function valuesToArray(elements: SheetHeader[], object: any) {
  const result = Array.from({ length: elements.length }).fill(undefined);

  elements.forEach(({ title }, index) => {
    const value = object[index];
    if (value) {
      if (/date/i.test(title)) {
        result[index] = formatOut(value);
      } else {
        result[index] = value;
      }
    }
  });
  return result;
}

export default function TabContainer(props: TabContainerProps) {
  const classes = useStyles();

  const initialValues: any = {};
  props.elements.forEach(({ title }, index) => {
    if (/date/i.test(title)) {
      initialValues[index] = nowDate();
    } else {
      initialValues[index] = '';
    }
  });

  const [state, setState] = React.useState({ ...initialValues });

  const onClick = async () => {
    const values = valuesToArray(props.elements, state);
    console.log(
      JSON.stringify([props.spreadsheetId, props.sheet, values], null, 2),
    );
    if (!isDebug()) {
      const response = await appendRow(
        props.spreadsheetId,
        props.sheet,
        values,
      );
      console.log(response);
      props.logger.log(`Updated: ${response.updatedRange}`);
    }
    setState({ ...initialValues });
  };

  const onChange = (index: number) => (value: string | undefined) => {
    setState((oldState: any) => {
      return {
        ...oldState,
        [index]: String(value),
      };
    });
  };

  return (
    <div className={classes.root}>
      {props.elements.map((element, index) => {
        const baseProps = {
          key: index,
          value: state[index],
          onChange: onChange(index),
        };
        if (/date/i.test(element.title)) {
          return <DatePicker {...baseProps} />;
        }
        if (/amount/i.test(element.title)) {
          return <Amount {...baseProps} />;
        }
        if (/comment/i.test(element.title)) {
          return <Comment {...baseProps} />;
        }
        if (/type/i.test(element.title)) {
          return <Select {...baseProps} choices={element.values || []} />;
        }
        if (/text/i.test(element.title)) {
          return (
            <CommentWithSuggestion
              {...baseProps}
              suggestions={element.values || []}
            />
          );
        }
        return (
          <Typography key={index}>
            Cannot build widget for "{element.title}"
          </Typography>
        );
      })}
      {props.isSignedIn ? (
        <Button
          fullWidth
          size="large"
          variant="contained"
          color="secondary"
          className={classes.button}
          onClick={() => onClick()}
        >
          submit
        </Button>
      ) : (
        <Button
          disabled={true}
          fullWidth
          size="large"
          variant="contained"
          color="secondary"
          className={classes.button}
        >
          You must sign in to submit
        </Button>
      )}
    </div>
  );
}
