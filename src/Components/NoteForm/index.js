import './styles.css'
import {RiPushpin2Line} from 'react-icons/ri'
import AddAlertOutlinedIcon from '@material-ui/icons/AddAlertOutlined';
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import ColorLensOutlinedIcon from '@material-ui/icons/ColorLensOutlined';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import ArchiveOutlinedIcon from '@material-ui/icons/ArchiveOutlined';
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';

const NoteForm = () => {
    return (
        <div className="note-form-wrapper">
            <div className="note-form-top">
                <input type="text" placeholder="Title" />
                <RiPushpin2Line />
            </div>

            <div className="note-form-middle">
                <input type="text" placeholder="Take a note..." />
            </div>

            <div className="note-form-bottom">
                <AddAlertOutlinedIcon />
                <PersonAddOutlinedIcon />
                <ColorLensOutlinedIcon />
                <ImageOutlinedIcon />
                <ArchiveOutlinedIcon />
                <MoreVertOutlinedIcon />
                <button>Close</button>
            </div>
        </div>
    );
}

export default NoteForm;