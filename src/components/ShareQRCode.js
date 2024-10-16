import React from 'react';
import { QRCodeSVG } from 'qrcode.react';

const ShareQRCode = ({ url }) => <QRCodeSVG value={url} size={150} />;

export default ShareQRCode;
