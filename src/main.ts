import './ui/style.css';
import { mountApp } from './app';

const root = document.getElementById('app');
if (!root) throw new Error('#app is missing from index.html');
mountApp(root);
