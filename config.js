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
window.TIME_LIMIT_MIN = 30;

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
