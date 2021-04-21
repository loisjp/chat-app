import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import styled from "styled-components";
import AttachFileIcon from '@material-ui/icons/AttachFile';
import AttachmentIcon from '@material-ui/icons/Attachment';

function DropZone() {
    const onDrop = useCallback(acceptedFiles => {
        // Do something with the files
    }, [])
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

    return (
        <DropZoneContainer {...getRootProps()}>
            <input type="file" {...getInputProps()} />
            {
                isDragActive ?
                    <AttachmentIcon /> :
                    <AttachFileIcon />
            }
        </DropZoneContainer>
    )
}

export default DropZone;

const DropZoneContainer = styled.h4`
    display: flex;
    background-color: #1A2833;
    color: #ffffff;
    justify-content: center;
    position: fixed;
    bottom: 35px;
    width: 1%;
    padding: 10px;
    right: 10%;
    border: 1px solid gray;
    border-radius: 3px;
    outline: none;
    cursor: pointer;

    :hover {
        opacity: 0.8;
    }
`;