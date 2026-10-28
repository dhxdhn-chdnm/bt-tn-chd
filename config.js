// ═══════════════════════════════════════════════════════
//  config.js — Thí Nghiệm Cơ Học Đất · Đánh Giá Thực Hành
//  ► GV chỉ cần sửa file này → git commit → git push
//  ► Tất cả SV thấy ngay (~1 phút sau khi push)
//  ► KHÔNG cần sửa index.html hay các file bài
// ═══════════════════════════════════════════════════════

// ── Cloudflare Worker URL (nhận kết quả → Google Sheet) ─
//    Trang chủ (GitHub Pages: dhxdhn.github.io/bt-tn-chd/) và Worker
//    (Cloudflare: bt-tn-chd.dhxdhn.workers.dev) là 2 domain KHÁC NHAU
//    → phải ghi rõ URL đầy đủ ở đây (không dùng window.location.origin).
//    Đổi domain Worker sau này → chỉ cần sửa lại đúng 1 dòng này.
window.WORKER_URL = "https://bt-tn-chd.dhxdhn.workers.dev";

// ── % số câu phải LÀM (không cần đúng) để được nộp bài ──
//    Test: 5   |   Chính thức: 70 hoặc 80
window.MIN_ATTEMPT_PCT = 80;

// ── Giới hạn thời gian làm mỗi bài trắc nghiệm (phút) ──
//    0 = không giới hạn. Hết giờ → hệ thống tự nộp phần đã làm.
//    Muốn riêng từng bài: thêm  limitMin: 20  vào CHAPTER_SCHEDULE bên dưới.
window.TIME_LIMIT_MIN = 0;

// ── TỔNG thời gian làm cả 5 mục (phút), dùng chung 1 quỹ thời gian ──
//    Tính từ lúc SV mở mục đầu tiên (bài trắc nghiệm hoặc báo cáo). Hết giờ:
//    mục đang làm tự nộp, các mục còn lại khóa. 0 = không giới hạn tổng.
//    EXAM_ID: đổi chuỗi này (vd "lan2") để mở đợt thi mới — đồng hồ của mọi SV tính lại từ đầu.
window.TOTAL_TIME_LIMIT_MIN = 40;
window.EXAM_ID = "lan1";

// ── Chấm tự động trang Báo cáo (5 mục: c, φ, e₀, C_c, C_s) ──
//    tolPct : dung sai ± % so với giá trị trang tự tính từ số liệu của chính SV
//    ptsEach: điểm mỗi mục (5 mục × 20 = 100)
//    cc / cs: đoạn đường e–lgσ dùng tính C_c, C_s — chỉ số điểm tải (0 = 50, 1 = 100, 2 = 200, 3 = 400 kPa)
//             C_c = độ dốc hồi quy từ điểm from → to ;  C_s = độ dốc đoạn from → to
window.REPORT_GRADING = {
  tolPct: 5,
  ptsEach: 20,
  cc: { from: 1, to: 3 },
  cs: { from: 0, to: 1 }
};

// ── Danh sách lớp (hiện trong dropdown đăng ký của SV) ──────────────
//    id   = classId gửi lên Worker → phải khớp ALLOWED_CLASSES trong worker.js + GAS_V4.js
//    name = tên hiển thị cho sinh viên chọn
window.CLASS_LIST = [
  { id: "KT1",  name: "KT1"  },
  { id: "KT2",  name: "KT2"  },
  { id: "KT3",  name: "KT3"  },
  { id: "KT4",  name: "KT4"  },
  { id: "KT5",  name: "KT5"  },
  { id: "KT6",  name: "KT6"  },
  { id: "KT7",  name: "KT7"  },
  { id: "KT8",  name: "KT8"  },
  { id: "KT9",  name: "KT9"  },
  { id: "KT10", name: "KT10" },
  { id: "BDS1", name: "BDS1" },
  { id: "BDS2", name: "BDS2" },
  { id: "QD1",  name: "QD1"  },
  { id: "QD2",  name: "QD2"  },
  { id: "KTE",  name: "KTE"  },
  { id: "CDQ1", name: "CDQ1" },
  { id: "CDQ2", name: "CDQ2" },
  { id: "NV01", name: "NV01" },
  { id: "NV02", name: "NV02" },
  { id: "NV03", name: "NV03" },
];

// ── Lịch mở/đóng từng bài đánh giá ─────────────────────────────────
//    active : bật/tắt bài
//    open   : null = mở ngay  |  "2026-09-15T07:00:00" = mở lúc 7h 15/09
//    close  : null = không đóng | "2026-09-15T23:59:00" = đóng cuối ngày
//    minPct : % câu tối thiểu phải làm để nộp (ghi đè MIN_ATTEMPT_PCT nếu có)
window.CHAPTER_SCHEDULE = {

  // ── PHẦN I — Trắc nghiệm cuối buổi (nộp qua điện thoại, ~15 phút) ──
  p_ds:  { active: true, open: null, close: null, minPct: 80 },  // Thao tác — Cắt phẳng   (Miền P2)
  p_oed: { active: true, open: null, close: null, minPct: 80 },  // Thao tác — Nén cố kết  (Miền P2)
  c_ds:  { active: true, open: null, close: null, minPct: 80 },  // Hiện tượng — Cắt phẳng  (Miền C)
  c_oed: { active: true, open: null, close: null, minPct: 80 },  // Hiện tượng — Nén cố kết (Miền C)

  // ── PHẦN II — Báo cáo cá nhân (hướng dẫn + rubric, nộp PDF sau 1 tuần) ──
  bc:    { active: true, open: null, close: null, minPct: 0  },  // Xử lý số liệu & Báo cáo

};

// ═══════════════════════════════════════════════════════
//  KHUNG GIỜ ĐĂNG NHẬP & LÀM BÀI  (giờ Việt Nam, UTC+7)
//  ► Áp dụng mỗi ngày cho toàn bộ web (khác CHAPTER_SCHEDULE: lịch từng chương)
//  ► enabled:false  → TẮT kiểm tra (GV test ngoài giờ)
//  ► graceMin: số phút "ân hạn" sau khi hết khung — SV đang làm dở vẫn được
//    hoàn thành & nộp; người mới KHÔNG đăng nhập được ngoài khung.
//  ► ⚠️ Worker (deploy riêng trên Cloudflare) cũng cần cùng khung giờ để ÉP BUỘC
//    thật (từ chối nộp ngoài giờ, dùng đồng hồ server) — xem worker_access_patch.js.
//    Phía web chỉ chặn để SV biết sớm.
// ═══════════════════════════════════════════════════════
window.ACCESS_WINDOWS = {
  enabled:  true,
  slots: [
    { from: "09:00", to: "11:00", label: "Sáng"  },
    { from: "15:00", to: "16:30", label: "Chiều" },
  ],
  days:     [0, 1, 2, 3, 4, 5, 6],   // 0=CN, 1=T2 … 6=T7 (bỏ số nào = không mở ngày đó)
  graceMin: 10,
};

(function () {
  var W = window.ACCESS_WINDOWS;
  var VN = 7 * 3600 * 1000, DAY = 86400000;
  var offset = 0;                              // lệch đồng hồ server ↔ máy SV
  var DOW = ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'];

  function toMin(s) { var p = String(s).split(':'); return (+p[0]) * 60 + (+p[1] || 0); }
  function pad(n) { return (n < 10 ? '0' : '') + n; }
  function now() { return Date.now() + offset; }
  function parts(ms) { var d = new Date(ms + VN); return { dow: d.getUTCDay(), min: d.getUTCHours() * 60 + d.getUTCMinutes() }; }
  function dayOk(dow) { return !W.days || W.days.indexOf(dow) >= 0; }

  // Khung đang mở tại thời điểm ms (cộng thêm `grace` phút sau khi hết), hoặc null
  function slotAt(ms, grace) {
    var p = parts(ms);
    if (!dayOk(p.dow)) return null;
    for (var i = 0; i < W.slots.length; i++) {
      var s = W.slots[i];
      if (p.min >= toMin(s.from) && p.min < toMin(s.to) + (grace || 0)) return s;
    }
    return null;
  }
  // Lần mở cửa kế tiếp (ms) sau thời điểm ms
  function nextOpen(ms) {
    var mid = Math.floor((ms + VN) / DAY) * DAY - VN;
    for (var d = 0; d < 8; d++) {
      var base = mid + d * DAY;
      if (!dayOk(new Date(base + VN).getUTCDay())) continue;
      var best = null;
      W.slots.forEach(function (s) {
        var t = base + toMin(s.from) * 60000;
        if (t > ms && (best === null || t < best)) best = t;
      });
      if (best !== null) return best;
    }
    return null;
  }
  function label(ms) {
    var d = new Date(ms + VN), hm = pad(d.getUTCHours()) + ':' + pad(d.getUTCMinutes());
    var d0 = Math.floor((now() + VN) / DAY), d1 = Math.floor((ms + VN) / DAY);
    if (d1 === d0) return hm + ' hôm nay';
    if (d1 === d0 + 1) return hm + ' ngày mai';
    return hm + ' ' + DOW[d.getUTCDay()] + ' ' + pad(d.getUTCDate()) + '/' + pad(d.getUTCMonth() + 1);
  }
  function windowsText() {
    return W.slots.map(function (s) { return (s.label ? s.label + ' ' : '') + s.from + '–' + s.to; }).join(' · ') + ' (giờ VN)';
  }
  function fmtDur(ms) {
    var m = Math.max(0, Math.round(ms / 60000)), h = Math.floor(m / 60);
    return h ? h + ' giờ ' + (m % 60) + ' phút' : m + ' phút';
  }

  // login: được ĐĂNG NHẬP mới (trong khung, không ân hạn) · work: được LÀM/NỘP (kể cả ân hạn)
  function state() {
    if (!W.enabled) return { enabled: false, login: true, work: true };
    var t = now(), s0 = slotAt(t, 0), s1 = slotAt(t, W.graceMin || 0);
    var st = { enabled: true, login: !!s0, work: !!s1, now: t };
    if (s1) { st.minLeft = toMin(s1.to) - parts(t).min; }        // ≤0 = đang trong ân hạn
    else { st.nextMs = nextOpen(t); st.nextLabel = st.nextMs ? label(st.nextMs) : null; }
    return st;
  }

  // Lấy giờ chuẩn từ Worker (chống chỉnh đồng hồ máy). Lỗi mạng → dùng đồng hồ máy.
  function syncServerTime(cb) {
    var done = false;
    function fin() { if (!done) { done = true; if (cb) cb(); } }
    if (!W.enabled || !window.WORKER_URL || !window.fetch) return fin();
    setTimeout(fin, 4000);
    var t0 = Date.now();
    fetch(String(window.WORKER_URL).replace(/\/$/, '') + '/time', { cache: 'no-store' })
      .then(function (r) { return r.json(); })
      .then(function (d) { if (d && d.now) offset = d.now + (Date.now() - t0) / 2 - Date.now(); fin(); })
      .catch(fin);
  }

  window.NCM_ACCESS = {
    state: state, windowsText: windowsText, fmtDur: fmtDur,
    slotAt: slotAt, nextOpen: nextOpen, syncServerTime: syncServerTime
  };

  // ── Chốt chặn trên các trang bài (trang chủ tự xử lý khi đăng nhập) ──
  function startGuard() {
    if (!W.enabled || document.getElementById('login-wrap')) return;
    var home = new URL('../index.html', location.href).href;
    var ov = document.createElement('div');
    ov.id = 'ncm-closed';
    ov.style.cssText = 'display:none;position:fixed;inset:0;z-index:99999;background:rgba(13,27,42,.94);color:#fff;align-items:center;justify-content:center;padding:24px;font-family:"Plus Jakarta Sans",sans-serif;text-align:center';
    ov.innerHTML = '<div style="max-width:420px"><div style="font-size:46px">⏸️</div>'
      + '<h2 style="font-size:20px;margin:8px 0 6px">Ngoài khung giờ làm bài</h2>'
      + '<p style="font-size:13px;opacity:.8;line-height:1.7">Khung giờ: <b>' + windowsText() + '</b></p>'
      + '<p id="ncm-closed-next" style="font-size:15px;font-weight:700;margin:12px 0 18px;color:#90CAF9"></p>'
      + '<a href="' + home + '" style="display:inline-block;background:#1565C0;color:#fff;text-decoration:none;padding:9px 20px;border-radius:8px;font-weight:700;font-size:13px">← Về trang chủ</a></div>';
    var pill = document.createElement('div');
    pill.style.cssText = 'display:none;position:fixed;left:14px;bottom:68px;z-index:9000;background:#FF8F00;color:#fff;font:700 12px "Plus Jakarta Sans",sans-serif;padding:7px 13px;border-radius:20px;box-shadow:0 2px 10px rgba(0,0,0,.25)';
    document.body.appendChild(ov); document.body.appendChild(pill);

    function tick() {
      var st = state();
      if (!st.work) {
        ov.style.display = 'flex'; document.body.style.overflow = 'hidden'; pill.style.display = 'none';
        document.getElementById('ncm-closed-next').textContent = st.nextLabel
          ? 'Mở lại lúc ' + st.nextLabel + ' (còn ' + fmtDur(st.nextMs - st.now) + ')' : 'Hiện chưa có lịch mở.';
        return;
      }
      ov.style.display = 'none'; document.body.style.overflow = '';
      if (st.minLeft > 0 && st.minLeft <= 10) {
        pill.textContent = '⏰ Còn ' + st.minLeft + ' phút đến hết khung giờ làm bài';
        pill.style.display = 'block';
      } else if (st.minLeft <= 0) {
        pill.textContent = '⏰ Đã hết khung giờ — chỉ còn ' + (st.minLeft + (W.graceMin || 0)) + ' phút để nộp bài';
        pill.style.display = 'block';
      } else { pill.style.display = 'none'; }
    }
    tick(); setInterval(tick, 5000);
    syncServerTime(tick);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', startGuard);
  else startGuard();
})();

// ═══════════════════════════════════════════════════════
//  VÍ DỤ ĐẶT LỊCH THEO BUỔI TN:
//
//  p_ds: { active:true, open:"2026-09-15T07:00:00", close:"2026-09-15T23:59:00", minPct:80 }
//
//  CẤU TRÚC THƯ MỤC:
//
//  📁 SP 9.9/
//  ├── index.html          ← Trang chủ (file này nạp vào)
//  ├── config.js           ← GV chỉ sửa ở đây
//  ├── worker.js            ← Cloudflare Worker (deploy riêng)
//  ├── GAS_V4.js            ← Google Apps Script (deploy riêng)
//  └── (các trang bài — làm sau)
// ═══════════════════════════════════════════════════════
