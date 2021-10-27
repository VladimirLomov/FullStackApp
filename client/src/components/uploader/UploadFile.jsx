import { useDispatch } from 'react-redux'
import { removeUploadFile } from '../../reducers/uploadReducer'
import './uploader.css'

const UploadFile = (props) => {
    const dispatch = useDispatch()
    return (
        <dir className="upload-file">

            <div className="upload-file__header">
                <div className="upload-file__name">{props.file.name}</div>
                <button className="upload-file__remove" onClick={() => dispatch(removeUploadFile(props.file.id))} >X</button>
            </div>

            <div className="upload-file__progress-bar">
                <div className="upload-file__upload-bar" style={{ width: props.file.progress + '%' }}></div>
                <div className="upload-file__percent">{props.file.progress}%</div>
            </div>

        </dir>
    )
}

export default UploadFile