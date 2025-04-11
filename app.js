// إعداد Firebase
const firebaseConfig = {
    apiKey: "AIzaSyD8loT0jeGJFUxPsLzbD-ItHU2UbBxCCSU",
    authDomain: "plastic-app-3d2af.firebaseapp.com",
    projectId: "plastic-app-3d2af",
    storageBucket: "plastic-app-3d2af.appspot.com",
    messagingSenderId: "847266877084",
    appId: "1:847266877084:web:7b1881d1d8c6744bd82759",
    measurementId: "G-0108S3D9ML"
};

// تهيئة Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// تسجيل الدخول
document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    auth.signInWithEmailAndPassword(email, password)
        .then(userCredential => {
            // تسجيل الدخول ناجح
            alert('تم تسجيل الدخول بنجاح');
            // هنا يمكنك الانتقال إلى صفحة الطلبات
        })
        .catch(error => {
            alert(error.message);
        });
});

// تسجيل حساب جديد
document.getElementById('register-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('new-email').value;
    const password = document.getElementById('new-password').value;

    auth.createUserWithEmailAndPassword(email, password)
        .then(userCredential => {
            // تسجيل الحساب ناجح
            alert('تم تسجيل الحساب بنجاح');
            // يمكنك إغلاق النافذة المنبثقة هنا
        })
        .catch(error => {
            alert(error.message);
        });
});
