import React, { useState, useEffect } from 'react';
import { ConnectableObservable, BehaviorSubject, merge } from 'rxjs';
import Box from '@material-ui/core/Box';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import AddIcon from '@material-ui/icons/Add';

import Channel from '../channel/channel.component';
import { clock } from '../../utils/clock.util';
import { IState } from '../../interfaces/state.interface';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      padding: '10px !important',
      margin: '0 auto',
    },
    root: {
      padding: '10px !important',
    },
    channel: {
      padding: '3px 10px !important'
    },
    button: {
      margin: theme.spacing(1),
    },
  }),
);

const play$ = new BehaviorSubject({ play: false });
const boardEvents$ = merge(play$);
const clock$ = clock(boardEvents$);

const updatePlay = (isPlay: boolean) => {
  play$.next({ play: isPlay });
};

export default function Board() {
  useEffect(() => {
    const subscription = clock$.subscribe();
    (clock$ as ConnectableObservable<IState>).connect();
    return () => subscription.unsubscribe();
  },
  // eslint-disable-next-line react-hooks/exhaustive-deps
  []);

  const DEFAULT_CHANNELS = [...Array(1)].map((_, i) => <Channel key={i} id={i} clock$={clock$} />);

  const [channels, setChannels] = useState(DEFAULT_CHANNELS)
  const classes = useStyles();

  const addChannel = () => setChannels([...channels, (<Channel key={channels.length + 1} id={channels.length + 1}  clock$={clock$} />)]);
  // const removeChannel = (i: number) => setChannels([...channels.slice(0, i), ...channels.slice(i + 1)]);
  
  return (
    <Box
      className={classes.wrapper}
      display='flex'
      flexDirection='column'
      border={1}
      width='880px'
    >
      <Box
        className={classes.root}
        display='flex'
        flexDirection='row'
      >
        <Typography variant='h5'>Step-Sequencer</Typography>
      </Box>
    
      {channels.map(channel => (
        <Box
          className={classes.channel}
          display='flex'
          flexDirection='row'
        >{channel}</Box>
      ))}
      <Box
        className={classes.root}
        display='flex'
        flexDirection='row'
        justifyContent='flex-end'
      >
        <Box marginRight='auto'>
          <Button
            variant='contained'
            color='primary'
            disabled={channels.length > 9}
            className={classes.button}
            startIcon={<AddIcon />}
            onClick={addChannel}
          >
            Channel
          </Button>
        </Box>
        <Button
          variant='contained'
          color='secondary'
          className={classes.button}
          startIcon={<PauseIcon />}
          onClick={() => updatePlay(false)}
        >
          Pause
        </Button>
        <Button
          variant='contained'
          color='primary'
          className={classes.button}
          startIcon={<PlayArrowIcon />}
          onClick={() => updatePlay(true)}
        >
          Play
        </Button>
      </Box>
    </Box>
  );
}