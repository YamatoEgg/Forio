import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import scrollto from 'vue-scrollto'
// BootStrap Add
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const app = createApp(App)
app.use(scrollto, {
  duration: 10, // �X�N���[���A�j���[�V�����̒����i�~���b�j
  easing: "ease-in", // �g�p�����C�[�W���O
  cancelable: false // ���[�U�[���X�N���[�����L�����Z���ł��邩�ǂ���)
});
app.mount('#app');