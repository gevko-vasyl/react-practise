import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  backDrop: {
    display: 'flex',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gray',
  },
  modal: {
    width: 400,
    backgroundColor: '#fff',
  },
});

const Modal = ({ onClose }) => {
  const classes = useStyles();
  const escapeKeyDown = e => {
    console.log(e);
    e.code === 'Escape' && onClose();
  };
  return (
    <div className={classes.backDrop} onKeyDown={e => escapeKeyDown(e)}>
      <div className={classes.modal}>
        <h3>My modal</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus,
          rerum labore ducimus ea dolorem accusamus in illo explicabo quo
          minima?
        </p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
