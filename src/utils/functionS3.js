import React, { useState } from 'react';
import { uploadFile, deleteFile } from 'react-s3';
import api from '../api/api';
window.Buffer = window.Buffer || require("buffer").Buffer;

const S3_BUCKET = process.env.REACT_APP_S3_BUCKET;
const REGION = process.env.REACT_APP_REGION;
const ACCESS_KEY = process.env.REACT_APP_ACCESS_KEY;
const SECRET_ACCESS_KEY = process.env.REACT_APP_SECRET_ACCESS_KEY;

const config = {
    bucketName: S3_BUCKET,
    region: REGION,
    accessKeyId: ACCESS_KEY,
    secretAccessKey: SECRET_ACCESS_KEY,
    dirName: 'wines'
}

export async function UploadImageToS3(file) {
    let location = '';

    await uploadFile(file, config)
        .then((data) => { console.log(data); location = data.location })
        .catch((err) => console.error(err))

    return location
}

export async function DeleteImageToS3(wineId) {

    let filename = '';

    await api.get(`/wine/find/${wineId}`)
        .then(response => {
            // pegando a string da imagem e retirando o somente o nome
            filename = response.data.image.substr(42, response.data.image.length);
        })
        .catch(e => console.error(e))

    await deleteFile(filename, config)
        .then((data) => console.log(data))
        .catch((err) => console.error(err))
}