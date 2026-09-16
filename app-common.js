// ============================================================
// ORTAK YARDIMCI FONKSİYONLAR
// Bu dosya hem index.html (sipariş) hem admin.html (yönetim)
// tarafından kullanılıyor.
// ============================================================

// Bugünün tarihini "YYYY-MM-DD" formatında verir (cihazın yerel saatine göre)
function todayStr() {
  const d = new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

// Şu anki saati "HH:MM" formatında verir
function nowTimeStr() {
  const d = new Date();
  const h = String(d.getHours()).padStart(2, '0');
  const m = String(d.getMinutes()).padStart(2, '0');
  return `${h}:${m}`;
}

// "08:30" gibi bir cutoff saatini geçip geçmediğimizi kontrol eder
function isPastCutoff(cutoffStr) {
  if (!cutoffStr) return false;
  return nowTimeStr() >= cutoffStr;
}

// Bir dosyayı (fotoğraf) sıkıştırıp base64 string'e çevirir.
// maxWidth: görselin genişliği bu değeri geçmeyecek şekilde küçültülür.
// quality: JPEG kalitesi (0-1 arası).
function fileToCompressedBase64(file, maxWidth = 300, quality = 0.75) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        let w = img.width;
        let h = img.height;
        if (w > maxWidth) {
          h = Math.round(h * (maxWidth / w));
          w = maxWidth;
        }
        const canvas = document.createElement('canvas');
        canvas.width = w;
        canvas.height = h;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, w, h);
        resolve(canvas.toDataURL('image/jpeg', quality));
      };
      img.onerror = reject;
      img.src = e.target.result;
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

// HTML özel karakterlerini escape eder (XSS önlemi)
function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, c => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[c]));
}

// Para formatı
function fmt(n) {
  return (Math.round(n * 20) / 20).toFixed(2);
}
