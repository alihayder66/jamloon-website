# جملون — الموقع

صفحة عامة عربية لتطبيق جملون. فيها روابط App Store و Google Play و TikTok و Instagram و Facebook.

## تشغيل محلي

```bash
cd walcard/website
npm install
npm run dev
```

ثم افتح العنوان الذي يطبعه Vite.

للتحقق من نسخة الإنتاج:

```bash
npm run build
npm run preview
```

## Vercel

المستودع جذوره أعلى من هذا المجلد. في مشروع Vercel:

- Root Directory: `walcard/website`
- Framework: Vite
- Build command: `npm run build`
- Output directory: `dist`

لا يحتاج الموقع متغيرات بيئة.

رابط سياسة الخصوصية ثابت في `src/lib/links.ts` باسم `PRIVACY_URL`. اتركه فارغاً إلى أن يُنشر موقع الخصوصية، ثم ضع الرابط الحي.
