import './file.css'
import dirLogo from '../../../../assets/dir.png'
import fileLogo from '../../../../assets/file.png'
import { useDispatch, useSelector } from "react-redux"
import { pushToStack, setCurrentDir } from '../../../../reducers/fileReducer'
import { deleteFile, downloadFile } from '../../../../actions/file'
import sizeFormat from '../../../../utils/sizeFormat'


function File(props) {
  const dispatch = useDispatch()
  const currentDir = useSelector(state => state.files.currentDir)
  const fileView = useSelector(state => state.files.view)


  function openDirHandler(file) {
    if (file.type === 'dir') {
      dispatch(pushToStack(currentDir))
      dispatch(setCurrentDir(props.file._id))
    }
  }

  function downloadClickHandler(e) {
    e.stopPropagation()
    downloadFile(props.file)

  }

  function deleteClickHandler(e) {
    e.stopPropagation()
    dispatch(deleteFile(props.file))

  }
  if (fileView === 'list') {
    return (
      <div className="file" onClick={() => openDirHandler(props.file)}>
        <img src={props.file.type === 'dir' ? dirLogo : fileLogo} alt="" className="file__img" />
        <div className="file__name">{props.file.name}</div>
        <div className="file__date">{props.file.date.slice(0, 10)}</div>
        <div className="file__size">{sizeFormat(props.file.size)}</div>
        {props.file.type !== 'dir' && <button onClick={(e) => downloadClickHandler(e)} className="file__btn file__download" >download</button>}
        <button onClick={(e) => deleteClickHandler(e)} className="file__btn file__delete">delete</button>
      </div>
    );
  }

  if (fileView === 'plate') {
    return (
      <div className="file-plate" onClick={() => openDirHandler(props.file)}>
        <img src={props.file.type === 'dir' ? dirLogo : fileLogo} alt="" className="file-plate__img" />
        <div className="file-plate__name">{props.file.name}</div>
        <div className="file-plate__btns">
          {props.file.type !== 'dir' && <button onClick={(e) => downloadClickHandler(e)} className="file-plate__btn file-plate__download" >download</button>}
          <button onClick={(e) => deleteClickHandler(e)} className="file-plate__btn file-plate__delete">delete</button>
        </div>
      </div>
    );
  }
}

export default File;