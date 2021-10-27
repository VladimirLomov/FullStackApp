import UploadFile from "./UploadFile"
import './uploader.css'
import { useDispatch, useSelector } from "react-redux"
import { hideUploader } from "../../reducers/uploadReducer"

const Uploader = () => {
    //const files = [{ id: 1, name: "file", progress: 50 },{ id: 2, name: "file2", progress: 0 }]
    const files = useSelector(state => state.upload.files)
    const isVisible = useSelector(state => state.upload.isVisible)
    const dispatch = useDispatch()


    return ( isVisible &&
        <dir className="uploader">
            <div className="uploader__header">
                <div className="uploader__title">Загрузки</div>
                <button className="uploader__close" onClick={()=> dispatch(hideUploader())} >X</button>
            </div>
            
            {files.map(file=> <UploadFile key={file.id} file={file} />) }
        </dir>
    )
}

export default Uploader