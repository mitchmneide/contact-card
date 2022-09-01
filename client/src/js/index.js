// Import modules
import './form';
import './submit';
// Import css files
import "../css/index.css"
import { initdb } from './database';
import { Tooltip,Toast,Popover } from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../images/logo.png';
import Bear from '../images/bear.png';
import Dog from '../images/dog.png'
window.addEventListener('load',function () {
    initdb();
    document.getElementById('logo').src= Logo;
    document.getElementById('bearThumbnail').src = Bear;
    document.getElementById('dogThumbnail').src= Dog;
});