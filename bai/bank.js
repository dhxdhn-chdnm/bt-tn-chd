// ═══════════════════════════════════════════════════════════════════
//  bank.js — NGÂN HÀNG CÂU HỎI · Thí Nghiệm Cơ Học Đất
//  Nguồn: tài liệu OBE_TN_CHS (mục 3.1B, 3.2) + bộ câu bản NCM (chuong-TN)
//
//  ► GV thêm câu: copy 1 block { ... } trong "questions", sửa nội dung.
//      type:'mcq'  → options là mảng ; correct = CHỈ SỐ đáp án đúng (0=A,1=B,…)
//      type:'calc' → có hàm gen(stt) trả về {intro, rows, hint, inputs:[{key,label,unit,answer,tol}]}
//  ► domain: 'P' (thao tác) | 'C' (hiện tượng / áp dụng)
// ═══════════════════════════════════════════════════════════════════

// ── tiện ích cho câu tính toán ───────────────────────────────────
function _rng(seed){var s=seed%2147483647;if(s<=0)s+=2147483646;return function(){s=s*16807%2147483647;return(s-1)/2147483646;};}
function _r1(v){return Math.round(v*10)/10;}
function _lsq(xs,ys){var n=xs.length,xb=xs.reduce(function(a,b){return a+b;},0)/n,yb=ys.reduce(function(a,b){return a+b;},0)/n;
  var num=0,den=0;for(var i=0;i<n;i++){num+=(xs[i]-xb)*(ys[i]-yb);den+=(xs[i]-xb)*(xs[i]-xb);}
  var slope=num/den;return {slope:slope,intercept:yb-slope*xb,xb:xb,yb:yb};}

window.QUIZ_BANK = {

  // ───────────────────────────────────────────────────────────────
  //  P·1 — THAO TÁC · THÍ NGHIỆM CẮT PHẲNG   (9 câu)
  // ───────────────────────────────────────────────────────────────
  p_ds: {
    title: "Thao Tác — Thí Nghiệm Cắt Phẳng",
    subtitle: "Miền P2 · Trọng số 30% (chung với P·2) · Làm cuối buổi thực hành",
    domain: "P",
    questions: [
      { id:"P-C1", skill:"Trình tự thao tác",
        text:"Thứ tự đúng khi lắp mẫu vào hộp cắt phẳng là:",
        options:[
          "Mẫu đất → Đá thấm → Tấm truyền lực → Đá thấm",
          "Đá thấm dưới → Mẫu đất → Đá thấm trên → Tấm truyền lực",
          "Tấm truyền lực → Mẫu đất → Đá thấm → Đá thấm",
          "Đá thấm dưới → Tấm truyền lực → Mẫu đất → Đá thấm" ],
        correct:1,
        explain:"Đá thấm kẹp hai mặt mẫu để thoát nước hai chiều; tấm truyền lực nằm trên cùng để truyền tải đứng P." },
      { id:"P-C2", skill:"Nhận biết sự cố",
        text:"Quên rút 2 vít định vị trước khi cắt dẫn đến hậu quả gì?",
        options:[
          "Tốc độ cắt tự động tăng lên",
          "Đồng hồ đo lực bị kẹt không hoạt động",
          "Máy cố gắng cắt hộp kim loại, không cắt mẫu đất, gây hỏng thiết bị",
          "Mẫu đất bị ép chặt không thể cắt" ],
        correct:2,
        explain:"Hai vít định vị khoá cứng hai nửa hộp. Không rút → lực ngang tác dụng lên khối thép chứ không tạo khe cắt trong đất." },
      { id:"P-C3", skill:"Điều chỉnh thông số",
        text:"Với mẫu đất SÉT, tốc độ cắt phù hợp nhất là:",
        options:["5 mm/phút","1–2 mm/phút","0,1–0,5 mm/phút","10 mm/phút"],
        correct:2,
        explain:"Sét cần tốc độ chậm để áp lực nước lỗ rỗng kịp tiêu tán (thí nghiệm cắt thoát nước chậm)." },
      { id:"P-C4", skill:"Hiểu thông số",
        text:"Mẫu thí nghiệm là đất sét chế bị. Vì sao phải cắt với tốc độ chậm (0,1–0,5 mm/phút)?",
        options:[
          "Để mẫu không bị vỡ vụn",
          "Để áp lực nước lỗ rỗng kịp tiêu tán, ứng suất hiệu quả trên mặt cắt đúng bằng σ thiết kế",
          "Để tiết kiệm thời gian thí nghiệm",
          "Để đồng hồ đo lực không bị quá tải" ],
        correct:1,
        explain:"Sét thấm kém: cắt nhanh sẽ sinh áp lực nước lỗ rỗng thặng dư → sức kháng cắt đo được không phản ánh đúng c, φ hữu hiệu." },
      { id:"P-C5", skill:"Đọc số liệu",
        text:"Sau mỗi 0,5 mm chuyển vị ngang, số liệu cần ghi gồm:",
        options:[
          "Chỉ lực cắt T",
          "Lực cắt T và chuyển vị ngang δh",
          "Lực cắt T, chuyển vị ngang δh và chuyển vị đứng δv",
          "Áp lực nước lỗ rỗng và chuyển vị" ],
        correct:2,
        explain:"Cần đủ 3 thành phần: T để tính τ, δh làm trục biến dạng, δv để nhận biết dilatancy (nở/co thể tích)." },
      { id:"P-C6", skill:"Xử lý sự cố",
        text:"Đồng hồ đo chuyển vị ngang không về 0 trước khi bắt đầu cắt. Xử lý đúng là:",
        options:[
          "Tiếp tục và trừ giá trị ban đầu khi tính",
          "Dừng lại, hiệu chỉnh về 0, ghi lại điều kiện ban đầu rồi mới cắt",
          "Báo GV và dừng hẳn thí nghiệm",
          "Tiếp tục bình thường, sai số không đáng kể" ],
        correct:1,
        explain:"Phải căn 0 để số liệu có gốc đúng; ghi lại điều kiện ban đầu để truy vết nếu cần." },
      { id:"P-C7", skill:"Chuẩn bị",
        text:'Mục đích của việc "chờ cố kết" 15–30 phút (sét) trước khi cắt là:',
        options:[
          "Làm mẫu mềm hơn cho dễ cắt",
          "Để mẫu đạt trạng thái ứng suất hiệu quả bằng đúng tải đứng thiết kế σ trước khi cắt",
          "Để tăng nhiệt độ mẫu",
          "Không có tác dụng, chỉ là thói quen" ],
        correct:1,
        explain:"Khi vừa cấp tải, một phần tải do nước lỗ rỗng gánh. Chờ cố kết để u tiêu tán → ứng suất hiệu quả = σ thiết kế." },
      { id:"P-C8", skill:"Điều kiện dừng",
        text:"Thời điểm dừng thí nghiệm cắt phẳng là khi:",
        options:[
          "Đúng sau 3 phút kể từ khi bắt đầu cắt",
          "Đạt 6–8 mm chuyển vị ngang, hoặc khi lực cắt giảm rõ sau đỉnh",
          "Ngay khi lực cắt bắt đầu tăng",
          "Khi chuyển vị đứng bằng 0" ],
        correct:1,
        explain:"Cần đủ biến dạng để thấy rõ đỉnh (τ_peak) và giá trị dư (τ_residual) nếu có." },
      { id:"P-C9", skill:"Hoàn thiện",
        text:"Sau khi cắt xong, cân lại mẫu đất nhằm xác định:",
        options:[
          "Khối lượng riêng hạt",
          "Độ ẩm của mẫu sau thí nghiệm",
          "Diện tích mặt cắt",
          "Tốc độ cắt đã dùng" ],
        correct:1,
        explain:"Cân mẫu (ướt rồi sấy khô) để xác định độ ẩm sau TN — dữ liệu cần cho báo cáo và kiểm tra tính hợp lý." },
      { id:"P-C10", skill:"Vai trò thiết bị",
        text:"Đá thấm (porous stone) trong hộp cắt trực tiếp đặt ở đâu và có tác dụng gì?",
        options:[
          "Dưới quả tạ, phân phối tải đều",
          "Bên cạnh mẫu, hạn chế nở ngang",
          "Trên và dưới mẫu đất, cho phép nước lỗ rỗng thoát ra khi cắt",
          "Dưới đáy hộp, chống ma sát với bàn máy" ],
        correct:2,
        explain:"Đá thấm đảm bảo điều kiện thoát nước, ảnh hưởng trực tiếp đến kết quả cắt CD hay UU." },
      { id:"P-C11", skill:"Tiêu chuẩn — kích thước mẫu",
        text:"Theo ASTM D3080, yêu cầu về kích thước mẫu trong hộp cắt trực tiếp là:",
        options:[
          "Mẫu phải có độ ẩm bằng giới hạn chảy",
          "Chiều cao mẫu bằng chiều rộng hộp cắt",
          "Kích thước ngang tối thiểu 50 mm; tỉ số kích thước ngang / chiều cao ≥ 2,0",
          "Mẫu phải sấy khô hoàn toàn trước khi lắp" ],
        correct:2,
        explain:"Tỉ số ngang/cao ≥ 2 để mặt phá hoại không bị ảnh hưởng bởi điều kiện biên đầu và cuối mẫu." },
      { id:"P-C12", skill:"Tiêu chuẩn — sơ đồ cắt nhanh",
        text:"Theo TCVN 4199:1995, với sơ đồ cắt NHANH, thời gian thực hiện toàn bộ quá trình cắt ngang một mẫu khoảng:",
        options:["24 giờ","1–2 giờ","30 phút","4–5 phút"],
        correct:3,
        explain:"Cắt nhanh: cấp lực cách nhau 15–20 giây, hoàn thành trong 4–5 phút — không cho nước thoát kịp (mô phỏng UU)." },
      { id:"P-C13", skill:"Vì sao cần ≥3 mẫu",
        text:"Vì sao thí nghiệm cắt phẳng phải làm với tối thiểu 3 mẫu ở 3 cấp áp lực nén σ khác nhau, thay vì 1 mẫu?",
        options:[
          "Để tăng độ chính xác của đồng hồ đo",
          "Cần tối thiểu 3 điểm (σ, τ_max) mới hồi quy được đường bao Coulomb → xác định c và φ đáng tin cậy",
          "Vì máy chỉ vận hành liên tục được đúng 3 lần",
          "Để so sánh 3 loại đất khác nhau trong cùng buổi" ],
        correct:1,
        explain:"1 điểm không vẽ được đường thẳng; 2 điểm đủ vẽ nhưng không kiểm tra được độ tuyến tính. ≥3 điểm cho phép hồi quy và đánh giá sai số." },
      { id:"P-C14", skill:"Diện tích tính ứng suất",
        text:"Trong công thức τ = T/A, diện tích A dùng để tính là:",
        options:[
          "Diện tích mặt cắt ngang ban đầu của mẫu (không đổi trong suốt phép tính)",
          "Diện tích ướt của đá thấm",
          "Diện tích đáy toàn bộ hộp cắt (cả 2 nửa)",
          "Diện tích tiếp xúc thực tế đo lại ở từng thời điểm cắt" ],
        correct:0,
        explain:"Theo quy trình TN, A lấy bằng diện tích mặt cắt ngang ban đầu của mẫu (= diện tích dao vòng), dùng thống nhất cho mọi điểm số liệu." },
      { id:"P-C15", skill:"Vai trò thiết bị",
        text:"Tấm/nắp truyền lực đặt trên cùng của hộp cắt có vai trò gì?",
        options:[
          "Phân bố đều tải trọng thẳng đứng lên mặt mẫu, tránh tập trung ứng suất cục bộ",
          "Đo trực tiếp lực cắt T",
          "Ngăn nước thấm vào mẫu",
          "Giữ vai trò như đá thấm, cho nước thoát" ],
        correct:0,
        explain:"Nắp truyền lực (loading cap) truyền tải P từ hệ gia tải xuống toàn bộ mặt mẫu một cách đều, tránh làm lệch/nứt cục bộ mẫu." },
      { id:"P-C16", skill:"Chuẩn bị mẫu",
        text:"Khi đưa mẫu đất sét chế bị vào dao vòng/hộp cắt, cần thao tác nhẹ nhàng chủ yếu để:",
        options:[
          "Tránh làm xáo động, biến dạng kết cấu mẫu trước khi thí nghiệm",
          "Tránh làm bẩn tay",
          "Tiết kiệm thời gian",
          "Tránh mẫu bị nóng lên" ],
        correct:0,
        explain:"Mẫu bị xáo động (nứt, tơi, mất tiếp xúc) trước khi cắt sẽ cho kết quả sức kháng cắt sai lệch, không đại diện đúng trạng thái mẫu." }
    ]
  },

  // ───────────────────────────────────────────────────────────────
  //  P·2 — THAO TÁC · THÍ NGHIỆM NÉN CỐ KẾT   (6 câu)
  // ───────────────────────────────────────────────────────────────
  p_oed: {
    title: "Thao Tác — Thí Nghiệm Nén Cố Kết",
    subtitle: "Miền P2 · Trọng số 30% (chung với P·1) · Làm cuối buổi thực hành",
    domain: "P",
    questions: [
      { id:"P-N1", skill:"Chuẩn bị mẫu",
        text:"Vì sao phải đổ nước vào hộp oedometer và chờ bão hòa trước khi gia tải?",
        options:[
          "Để làm mềm đất, dễ lún hơn",
          "Để đảm bảo điều kiện thoát nước hai chiều và áp lực nước lỗ rỗng ban đầu bằng 0",
          "Để chống dính mẫu vào đá thấm",
          "Để giảm ma sát giữa mẫu và ring" ],
        correct:1,
        explain:"Mẫu chưa bão hòa sẽ có áp lực hút (chân không) làm sai lệch kết quả; bão hòa để mô phỏng đúng cố kết Terzaghi." },
      { id:"P-N2", skill:"Ghi số liệu theo thời gian",
        text:"Thứ tự thời điểm đọc số liệu ngay sau khi cấp một cấp tải mới là:",
        options:[
          "1 phút → 2 phút → 4 phút → 0,25 phút",
          "0,25 phút → 1 → 2 → 4 → 8 → 15 → 30 phút → 1 giờ → …",
          "5 → 10 → 30 phút → 1 giờ",
          "Chỉ cần đọc ở 24 giờ khi lún ổn định" ],
        correct:1,
        explain:"Chuỗi thời gian dày ở giai đoạn đầu (theo √t) để dựng đường s–√t, xác định t₅₀ / t₉₀." },
      { id:"P-N3", skill:"Nhận biết sự cố",
        text:"Sau khi cấp tải 100 kPa, đồng hồ đo lún không thay đổi trong 30 phút đầu. Nguyên nhân có thể là:",
        options:[
          "Đất không thể lún dưới tải đó",
          "Đồng hồ bị kẹt cơ học hoặc tải chưa truyền xuống mẫu",
          "Mẫu đã cố kết hoàn toàn",
          "Thí nghiệm bình thường, không cần lo" ],
        correct:1,
        explain:'Giai đoạn đầu sau gia tải mẫu phải lún nhanh. "Bất động" là dấu hiệu kẹt đồng hồ hoặc tải chưa đặt đúng.' },
      { id:"P-N4", skill:"Điều kiện dừng cấp",
        text:"Khi nào có thể chuyển sang cấp tải tiếp theo?",
        options:[
          "Sau đúng 30 phút kể từ khi gia tải",
          "Khi tốc độ lún < 0,005 mm/giờ (lún đã ổn định thực tế)",
          "Khi đọc được tổng 10 số liệu",
          'Khi nghe tiếng "click" từ máy gia tải' ],
        correct:1,
        explain:"Tiêu chí ổn định lún (≈ kết thúc cố kết sơ cấp) mới cho phép sang cấp mới; thông thường ~24 giờ." },
      { id:"P-N5", skill:"An toàn & hoàn thiện",
        text:"Bước PHẢI thực hiện trước khi tháo mẫu ra khỏi ring là:",
        options:[
          "Xả tải hoàn toàn và đọc độ nở hồi (swelling) theo thời gian",
          "Ngay lập tức tháo để cân khối lượng",
          "Chụp ảnh máy trước khi tháo",
          "Báo GV ngay khi cấp tải cuối xong" ],
        correct:0,
        explain:"Dữ liệu nở hồi cần cho nhánh dỡ tải của đường e–logp (xác định Cs / chỉ số nở)." },
      { id:"P-N6", skill:"Chuỗi tải",
        text:"Trong chuỗi tải tiêu chuẩn 12,5 → 25 → 50 → 100 → 200 → 400 kPa, tỉ lệ tải giữa hai cấp liên tiếp (LIR) bằng:",
        options:["1","1,5","2","4"],
        correct:2,
        explain:"LIR = 2 (mỗi cấp gấp đôi cấp trước) là quy ước chuẩn để đường e–logp có các điểm cách đều trên trục log." },
      { id:"P-N7", skill:"Đọc số liệu",
        text:"Trong nén nhanh cố kết (TCVN 4200:2012), vì sao phải ghi độ lún ở CUỐI mỗi cấp tải (sau vài phút) chứ không phải ngay khi vừa đặt tải?",
        options:[
          "Vì đồng hồ cần thời gian khởi động",
          "Vì tải trọng chưa truyền xuống ngay lập tức",
          "Vì nước lỗ rỗng cần thời gian thoát, biến dạng tiếp tục tăng đến khi ổn định",
          "Vì tiêu chuẩn bắt buộc chờ mà không có lý do kỹ thuật" ],
        correct:2,
        explain:"Bản chất quá trình cố kết: nước thoát → áp lực lỗ rỗng giảm → ứng suất hiệu quả và biến dạng tăng dần đến ổn định." },
      { id:"P-N8", skill:"Chuẩn bị thiết bị",
        text:"Trước khi lắp vào hộp nén, đá thấm nên được xử lý thế nào?",
        options:[
          "Sấy khô hoàn toàn để nhẹ hơn",
          "Làm ẩm/ngâm bão hòa trước khi lắp",
          "Nung nóng để diệt khuẩn",
          "Không cần xử lý gì đặc biệt" ],
        correct:1,
        explain:"Đá thấm khô khi tiếp xúc mẫu ẩm sẽ hút nước ngược từ mẫu, gây sai số ngay ở số đọc ban đầu (trước khi gia tải)." },
      { id:"P-N9", skill:"Vai trò giấy lọc",
        text:"Giấy lọc đặt giữa mẫu đất và đá thấm có tác dụng gì?",
        options:[
          "Tăng ma sát để mẫu không trượt",
          "Ngăn hạt đất mịn lọt vào/làm tắc lỗ rỗng đá thấm, trong khi vẫn cho nước thoát qua",
          "Cách điện giữa mẫu và đá thấm",
          "Giữ nhiệt độ ổn định cho mẫu" ],
        correct:1,
        explain:"Không có giấy lọc → hạt mịn di chuyển theo dòng thấm làm bít lỗ rỗng đá thấm, giảm khả năng thoát nước và có thể dính chặt mẫu vào đá thấm." },
      { id:"P-N10", skill:"Giảm ma sát thành vòng",
        text:"Vì sao mặt trong dao vòng/hộp nén cần nhẵn (đôi khi bôi 1 lớp mỡ mỏng)?",
        options:[
          "Để giảm ma sát giữa thành vòng và mẫu, giúp lực nén truyền đều và đúng xuống mẫu",
          "Để mẫu dễ bị xáo động hơn",
          "Để chống gỉ sét vĩnh viễn",
          "Không có tác dụng kỹ thuật, chỉ thẩm mỹ" ],
        correct:0,
        explain:"Ma sát thành lớn sẽ làm một phần tải bị 'gánh' bởi thành vòng thay vì truyền hết xuống mẫu, gây sai lệch ứng suất nén thực tế." },
      { id:"P-N11", skill:"Mục đích chuỗi đọc √t",
        text:"Việc đọc số liệu lún ở các mốc thời gian 0; 0,25; 1; 2; 4; 8; 15; 30 phút… (chuỗi gần √t) sau mỗi cấp tải nhằm mục đích chính là:",
        options:[
          "Chỉ để có đủ số liệu cho đẹp bảng biểu",
          "Dựng đường s–√t để xác định t₅₀/t₉₀ và tính hệ số cố kết C_v (phương pháp Taylor)",
          "Xác định độ ẩm mẫu theo thời gian",
          "Kiểm tra pin của đồng hồ đo" ],
        correct:1,
        explain:"Chuỗi thời gian dày ở giai đoạn đầu giúp bắt đúng dạng đường cong lún–√t, cần thiết cho phương pháp Taylor xác định C_v." }
    ]
  },

  // ───────────────────────────────────────────────────────────────
  //  C·1 — HIỆN TƯỢNG · THÍ NGHIỆM CẮT PHẲNG   (5 câu + 1 câu tính theo STT)
  // ───────────────────────────────────────────────────────────────
  c_ds: {
    title: "Hiện Tượng — Thí Nghiệm Cắt Phẳng",
    subtitle: "Miền C · Nhớ · Hiểu · Áp dụng · Trọng số 20% (chung với C·2)",
    domain: "C",
    questions: [
      { id:"C-C1", skill:"Dilatancy",
        text:"Cắt phẳng trên mẫu cát CHẶT, thể tích mẫu thay đổi như thế nào?",
        options:[
          "Giảm dần (co lại) suốt quá trình cắt",
          "Tăng lên (nở ra) sau khi vượt qua biến dạng nhỏ ban đầu",
          "Không thay đổi",
          "Tăng rồi giảm về 0" ],
        correct:1,
        explain:'Dilatancy: hạt cát chặt phải "trèo" qua nhau để trượt → mẫu nở thể tích (δv dương).' },
      { id:"C-C1B", skill:"Ứng xử — mẫu sét chế bị",
        text:"Mẫu bạn thí nghiệm là ĐẤT SÉT CHẾ BỊ (cố kết thường). Khi cắt phẳng thoát nước chậm, thể tích và đường τ–δh thường:",
        options:[
          "Nở thể tích mạnh, có đỉnh nhọn rồi tụt sâu (giống cát chặt)",
          "Co thể tích (δv âm), τ–δh tăng đến giá trị tới hạn, đỉnh không rõ hoặc chỉ hơi nhô",
          "Không lún, không nở; τ không đổi",
          "Nở thể tích rồi vỡ giòn đột ngột" ],
        correct:1,
        explain:"Sét chế bị NC có xu hướng co thể tích khi cắt (contractive); ứng xử dẻo, tiến dần về trạng thái tới hạn, không có đỉnh rõ như cát chặt / sét quá cố kết." },
      { id:"C-C2", skill:"Đường cong τ–δh",
        text:"Đường cong ứng suất cắt – biến dạng (τ–δh) của cát CHẶT có đặc điểm:",
        options:[
          "Tăng dần đến phá hoại, không có đỉnh rõ",
          "Có đỉnh rõ (τ_peak) rồi giảm về giá trị dư (τ_residual)",
          "Không đổi suốt quá trình cắt",
          "Giảm dần từ đầu đến cuối" ],
        correct:1,
        explain:"Tính giòn (brittle) + mềm hoá sau đỉnh (strain-softening) là đặc trưng cát chặt / sét quá cố kết." },
      { id:"C-C3", skill:"So sánh cát rời / chặt",
        text:"So sánh đường τ–δh của cát RỜI và cát CHẶT — nhận định ĐÚNG là:",
        options:[
          "Cát rời có τ_peak cao hơn cát chặt",
          "Cát chặt có τ_peak cao hơn, có đỉnh rõ; cát rời tăng đơn điệu và τ_max ≈ τ_residual",
          "Hai loại cho đường cong giống nhau",
          "Cát rời không có sức kháng cắt" ],
        correct:1,
        explain:"Ở biến dạng lớn, cả hai tiến về cùng trạng thái tới hạn (critical state) → τ_residual xấp xỉ nhau." },
      { id:"C-C4", skill:"Mặt phá hoại",
        text:"Sau thí nghiệm cắt phẳng, mặt phá hoại của mẫu nằm ở đâu?",
        options:[
          "Vuông góc với lực cắt",
          "Nằm ngang tại khe giữa hai nửa hộp cắt",
          "Nghiêng 45° so với phương ngang",
          "Không có mặt phá hoại xác định" ],
        correct:1,
        explain:'Mặt phá hoại bị "ép" phải trùng khe hộp — hạn chế của cắt phẳng (forced failure plane), khác nén 3 trục.' },
      { id:"C-C5", skill:"Áp dụng — đường bao Coulomb",
        text:"Ba mẫu cắt phẳng cho σ = 50 / 100 / 200 kPa và τ_max = 35 / 65 / 128 kPa. Đường bao Coulomb τ = c + σ·tanφ có c và φ xấp xỉ:",
        options:["c = 0 ; φ = 30°","c ≈ 3 kPa ; φ ≈ 32°","c = 20 kPa ; φ = 20°","c = 0 ; φ = 45°"],
        correct:1,
        explain:"Hồi quy qua (50;35),(100;65),(200;128): độ dốc ≈ 0,62 → φ ≈ 32°; tung độ gốc ≈ 3 kPa." },
      { id:"C-C6", skill:"Đường cong lực cắt – chuyển vị",
        text:"Khi tăng dần lực cắt ngang, biểu đồ lực cắt – chuyển vị ngang của đất SÉT (quá cố kết) thường có dạng:",
        options:[
          "Tăng tuyến tính mãi, không có đỉnh",
          "Tăng đến giá trị đỉnh (peak) rồi giảm về giá trị dư (residual)",
          "Tăng đột ngột rồi về 0 ngay lập tức",
          "Dao động lên xuống không theo quy luật" ],
        correct:1,
        explain:"Đất sét OC / cát chặt: phá hoại giòn (brittle) — có đỉnh rõ rồi mềm hoá về sức kháng dư." },
      { id:"C-C7", skill:"Áp dụng — tính φ",
        text:"Cắt 3 mẫu cùng loại đất: (σ = 50, τ = 35), (σ = 100, τ = 60), (σ = 150, τ = 85) kPa. Góc ma sát trong φ xấp xỉ:",
        options:["10°","27°","45°","60°"],
        correct:1,
        explain:"tanφ = Δτ/Δσ = (85−35)/(150−50) = 0,5 → φ = arctan(0,5) ≈ 27°;  c = 35 − 50·0,5 = 10 kPa." },
      { id:"C-C8", skill:"Ý nghĩa lực dính c",
        text:"Lực dính c trong đường bao Coulomb (τ = c + σ·tanφ) của đất sét thể hiện điều gì?",
        options:[
          "Thành phần sức kháng cắt không phụ thuộc ứng suất pháp σ, do liên kết/hút bám giữa các hạt sét",
          "Ma sát thuần túy giữa các hạt như ở cát",
          "Áp lực nước lỗ rỗng còn dư trong mẫu",
          "Sai số đo đạc của thí nghiệm" ],
        correct:0,
        explain:"c phản ánh lực liên kết giữa các hạt sét (hút bám tĩnh điện, màng nước dính, xi măng hoá tự nhiên…) — tồn tại ngay cả khi σ = 0." },
      { id:"C-C9", skill:"Ý nghĩa góc ma sát φ",
        text:"Góc ma sát trong φ của đất phản ánh điều gì?",
        options:[
          "Khả năng chống thấm của đất",
          "Ma sát và sự cài móc (interlocking) giữa các hạt — phần sức kháng cắt tăng theo ứng suất pháp σ",
          "Độ ẩm tự nhiên của đất",
          "Khối lượng riêng hạt đất" ],
        correct:1,
        explain:"Thành phần σ·tanφ tăng tuyến tính theo σ — thể hiện ma sát/cài móc giữa hạt, khác với c (không phụ thuộc σ)." },
      { id:"C-C10", skill:"So sánh sơ đồ cắt nhanh/chậm",
        text:"Thí nghiệm cắt NHANH (không cố kết – không thoát nước) khác thí nghiệm cắt CHẬM (cố kết – thoát nước) chủ yếu ở điểm nào?",
        options:[
          "Nhanh dùng mẫu cát, chậm dùng mẫu sét",
          "Thời gian cắt và điều kiện thoát nước khác nhau → thông số thu được khác nhau (sức kháng cắt không thoát nước c_u hay c′, φ′ hữu hiệu)",
          "Nhanh không cần đồng hồ đo, chậm cần đồng hồ đo",
          "Không có khác biệt đáng kể" ],
        correct:1,
        explain:"Cắt nhanh mô phỏng điều kiện tải trọng tác dụng nhanh (không kịp thoát nước) → cho c_u; cắt chậm cho phép thoát nước hoàn toàn → cho c′, φ′ hữu hiệu." },
      { id:"C-C11", skill:"Hiện tượng mềm hoá sau đỉnh",
        text:'"Strain-softening" (mềm hoá sau biến dạng) trong đường cong τ–δh nghĩa là:',
        options:[
          "τ tăng dần đều đến khi kết thúc thí nghiệm",
          "Sau khi đạt đỉnh τ_max, sức kháng cắt giảm dần dù biến dạng vẫn tiếp tục tăng, do cấu trúc hạt bị phá vỡ/sắp xếp lại",
          "τ không đổi trong suốt quá trình cắt",
          "Mẫu bị mềm ra do hút thêm nước" ],
        correct:1,
        explain:"Đặc trưng của đất/cát ở trạng thái chặt: sau đỉnh, kết cấu hạt bị phá vỡ, mẫu giãn nở, sức kháng giảm về giá trị dư (residual)." },
      { id:"C-C12", skill:"Ảnh hưởng tốc độ cắt",
        text:"Vì sao kết quả thí nghiệm cắt phẳng trên đất sét lại phụ thuộc nhiều vào tốc độ cắt (trong khi cát thì ít phụ thuộc hơn)?",
        options:[
          "Vì sét nặng hơn cát nên cần lực lớn hơn",
          "Vì sét thấm kém — cắt quá nhanh khiến áp lực nước lỗ rỗng dư chưa kịp tiêu tán, làm τ_max đo được không phản ánh đúng điều kiện thoát nước",
          "Vì đồng hồ đo lực chỉ chính xác ở tốc độ chậm",
          "Vì cát không có góc ma sát trong" ],
        correct:1,
        explain:"Hệ số thấm của sét rất nhỏ → cần tốc độ chậm (0,1–0,5 mm/phút) để u kịp tiêu tán; cát thấm nhanh nên ít nhạy với tốc độ cắt hơn." },

      // ── Câu tính toán CÁ NHÂN HOÁ theo STT (mục 3.3 / Phần C bản NCM) ──
      { id:"C-C8T", type:"calc", skill:"Xử lý số liệu — hồi quy Coulomb",
        gen:function(stt){
          var r=_rng(stt*7+3301);
          var phi0=25+r()*10, c0=2+r()*12;
          var sig=[100,200,300];   // theo pano cắt phẳng NH 2026-2027 (3 mẫu)
          var tau=sig.map(function(s){var base=c0+s*Math.tan(phi0*Math.PI/180);return Math.round(base+(r()-0.5)*0.06*base);});
          var f=_lsq(sig,tau);
          var phiA=_r1(Math.atan(f.slope)*180/Math.PI);
          var cA=_r1(f.intercept);
          var tauf=_r1(f.intercept+150*f.slope);
          return {
            intro:"Ba thí nghiệm cắt phẳng trên mẫu <b>đất sét chế bị</b> (số liệu riêng theo STT <b>"+stt+"</b>). Dựng đường bao Coulomb bằng hồi quy tuyến tính, xác định φ, c và dự báo τ_f tại σ = 150 kPa.",
            rows:[["Mẫu","σ (kPa)","τ_max (kPa)"],["1",sig[0],tau[0]],["2",sig[1],tau[1]],["3",sig[2],tau[2]]],
            hint:"σ̄ = "+_r1(f.xb)+" kPa · τ̄ = "+_r1(f.yb)+" kPa   |   tanφ = Σ(σ−σ̄)(τ−τ̄) / Σ(σ−σ̄)²   |   c = τ̄ − tanφ·σ̄   |   τ_f(150) = c + 150·tanφ",
            inputs:[
              {key:"phi",   label:"φ — góc ma sát trong", unit:"°",   answer:phiA,  tol:2},
              {key:"c",     label:"c — lực dính",         unit:"kPa", answer:cA,    tol:5},
              {key:"tauf",  label:"τ_f tại σ = 150 kPa",  unit:"kPa", answer:tauf,  tol:8}
            ]
          };
        }
      }
    ]
  },

  // ───────────────────────────────────────────────────────────────
  //  C·2 — HIỆN TƯỢNG · THÍ NGHIỆM NÉN CỐ KẾT  (4 câu + nối câu 6 cặp)
  // ───────────────────────────────────────────────────────────────
  c_oed: {
    title: "Hiện Tượng — Thí Nghiệm Nén Cố Kết",
    subtitle: "Miền C · Nhớ · Hiểu · Trọng số 20% (chung với C·1)",
    domain: "C",
    questions: [
      { id:"C-N1", skill:"Cơ chế cố kết",
        text:"Khi tăng tải lên mẫu sét bão hòa trong TN nén cố kết, thể tích mẫu giảm vì:",
        options:[
          "Hạt đất bị vỡ và nén chặt lại",
          "Nước thoát khỏi lỗ rỗng theo thời gian, làm giảm thể tích lỗ rỗng",
          "Không khí trong đất bị nén lại",
          "Hạt đất biến dạng đàn hồi" ],
        correct:1,
        explain:"Cơ chế Terzaghi: tải chuyển dần từ áp lực nước lỗ rỗng sang ứng suất hiệu quả khi nước thoát ra." },
      { id:"C-N2", skill:"Đường e–logp",
        text:"Trên đường e–logp, điểm nào thể hiện áp lực tiền cố kết p_c?",
        options:[
          "Điểm đầu tiên của đường cong",
          "Điểm gãy cong chuyển từ nhánh nén lại sang nhánh nén nguyên thủy",
          "Điểm cuối cùng khi kết thúc thí nghiệm",
          "Điểm giữa của đoạn thẳng" ],
        correct:1,
        explain:"Xác định bằng phương pháp Casagrande tại điểm cong nhất (bán kính cong nhỏ nhất)." },
      { id:"C-N2B", skill:"e–logp của mẫu sét chế bị",
        text:"Mẫu bạn thí nghiệm là ĐẤT SÉT CHẾ BỊ trong phòng (chưa từng chịu tải lịch sử). Đường e–logp của mẫu này thường:",
        options:[
          "Có điểm gãy rõ ở p_c lớn (đất quá cố kết mạnh)",
          "Gần như thẳng theo nhánh nén nguyên thủy, p_c nhỏ (≈ áp lực chế bị), khó thấy điểm gãy",
          "Đi lên (e tăng) khi tăng tải",
          "Nằm ngang, e không đổi" ],
        correct:1,
        explain:"Sét chế bị là cố kết thường (NC): không có lịch sử ứng suất → nhánh nén lại rất ngắn, đường e–logp gần thẳng, p_c chỉ xấp xỉ áp lực khi chế bị mẫu." },
      { id:"C-N3", skill:"Ý nghĩa Cv",
        text:"Hệ số cố kết C_v phản ánh điều gì?",
        options:[
          "Khả năng chịu tải của đất",
          "Tốc độ tiêu tán áp lực nước lỗ rỗng và tốc độ xảy ra lún cố kết",
          "Độ cứng của khung hạt đất",
          "Lượng nước trong đất" ],
        correct:1,
        explain:"C_v lớn → cố kết / lún nhanh; C_v nhỏ → lún kéo dài nhiều năm.  t = T_v·H_dr² / C_v." },
      { id:"C-N4", skill:"So sánh Cc",
        text:"Hai mẫu có C_c₁ = 0,5 và C_c₂ = 0,15. Khi tăng tải 100 → 200 kPa, mẫu nào lún nhiều hơn?",
        options:["Mẫu 2 (C_c₂ = 0,15)","Mẫu 1 (C_c₁ = 0,5)","Hai mẫu lún như nhau","Không đủ thông tin"],
        correct:1,
        explain:"S = C_c·H/(1+e₀)·log(σ₂/σ₁). Cùng tỉ số tải, C_c lớn hơn → lún lớn hơn." },
      { id:"C-N5", skill:"Thứ tự hiện tượng",
        text:"Ngay sau khi đặt thêm một cấp tải mới trong nén nhanh, các hiện tượng xảy ra theo đúng thứ tự là:",
        options:[
          "Hạt đất vỡ → thể tích giảm → lún",
          "Mẫu nở ngang trước → sau đó lún",
          "Áp lực nước lỗ rỗng tăng đột ngột → nước thoát qua đá thấm → hạt sắp xếp lại → mẫu lún dần đến ổn định",
          "Mẫu lún ngay đến giá trị cuối rồi dừng hẳn" ],
        correct:2,
        explain:"Cơ chế cố kết Terzaghi — nước gánh tải trước, thoát dần, ứng suất hiệu quả tăng, mẫu lún đến ổn định." },
      { id:"C-N6", skill:"Nhận diện lún",
        text:"Sau khi đặt tải, đồng hồ đo lún vẫn tăng trong vài phút mới dừng. Hiện tượng này là:",
        options:[
          "Biến dạng đàn hồi — thiết bị bị uốn cong",
          "Lún tức thời — đất nén chặt ngay",
          "Lún cố kết sơ cấp — nước lỗ rỗng thoát ra dần, độ rỗng giảm, hạt đất dịch chuyển gần nhau",
          "Lún từ biến — đất chảy dẻo theo thời gian" ],
        correct:2,
        explain:"Lún cố kết sơ cấp (primary consolidation) — phân biệt với cố kết thứ cấp (creep) xảy ra sau đó." },
      { id:"C-N7", skill:"Vai trò thiết bị",
        text:"Đá thấm đặt trên và dưới mẫu trong thiết bị nén cố kết có vai trò gì?",
        options:[
          "Tăng độ cứng cho mẫu, chống biến dạng ngang",
          "Phân phối tải trọng đều trên mặt mẫu",
          "Ngăn mẫu trồi ra khỏi vòng nén",
          "Tạo đường thoát nước lỗ rỗng khi nén, đảm bảo quá trình cố kết xảy ra" ],
        correct:3,
        explain:"Không có đá thấm → nước không thoát được → không có cố kết → kết quả sai hoàn toàn." },
      { id:"C-N8", skill:"So sánh tốc độ lún",
        text:"So sánh tốc độ lún trong vài phút đầu của cấp tải ĐẦU TIÊN và cấp tải CUỐI CÙNG. Thông thường:",
        options:[
          "Cấp cuối lún nhanh hơn vì tải nặng hơn",
          "Hai cấp lún tốc độ như nhau",
          "Cấp đầu lún nhanh hơn — đất còn nhiều lỗ rỗng, nước thoát dễ; cấp cuối đất đã chặt, nước thoát chậm",
          "Không thể so sánh vì thời gian giữ tải khác nhau" ],
        correct:2,
        explain:"Hệ số thấm k giảm khi hệ số rỗng e giảm — đất càng chặt càng khó thoát nước, cố kết càng chậm." },
      { id:"C-N9", skill:"Ý nghĩa hệ số nén lún a",
        text:"Hệ số nén lún a (độ dốc đường e–σ, đơn vị 1/kPa) phản ánh điều gì?",
        options:[
          "Mức độ dễ nén của đất trong khoảng tải đang xét — a lớn thì đất dễ nén (mềm) hơn ở khoảng tải đó",
          "Tốc độ thoát nước của đất",
          "Khối lượng riêng hạt đất",
          "Độ bão hòa của mẫu" ],
        correct:0,
        explain:"a = −Δe/Δσ trên đường e–σ (trục thường); a càng lớn, Δe ứng với cùng Δσ càng lớn → đất càng dễ nén. Dùng để tính môđun biến dạng E." },
      { id:"C-N10", skill:"Cc theo loại đất",
        text:"Giữa 2 loại đất sét: dẻo cao (CH, giới hạn chảy lớn) và dẻo thấp (CL, giới hạn chảy nhỏ), loại nào thường có chỉ số nén C_c lớn hơn?",
        options:[
          "Đất dẻo cao (CH) — thường có C_c lớn hơn, nén lún nhiều hơn theo log tải",
          "Đất dẻo thấp (CL) — luôn nén lún nhiều hơn",
          "Hai loại có C_c như nhau",
          "Không liên quan gì đến tính dẻo" ],
        correct:0,
        explain:"Kinh nghiệm chung (vd tương quan Skempton): đất càng dẻo (giới hạn chảy LL càng cao) thì C_c càng lớn — đất dễ nén lún hơn khi chất tải." },
      { id:"C-N11", skill:"So sánh Cs với Cc",
        text:"So với chỉ số nén C_c (nhánh nén nguyên thủy), chỉ số nở C_s (nhánh dỡ tải/nén lại) thường:",
        options:[
          "Lớn hơn nhiều so với C_c",
          "Nhỏ hơn nhiều so với C_c (thường chỉ bằng khoảng 1/5–1/10 C_c)",
          "Bằng đúng C_c",
          "Không thể so sánh vì đơn vị khác nhau" ],
        correct:1,
        explain:"Nhánh dỡ tải/nén lại có độ dốc thoải hơn nhiều so với nhánh nén nguyên thủy — biến dạng phần lớn là đàn hồi, ít hạt bị sắp xếp lại vĩnh viễn." },
      { id:"C-N12", skill:"Cố kết thứ cấp",
        text:"Cố kết thứ cấp (secondary compression / creep) xảy ra khi nào và tuân theo quy luật gì?",
        options:[
          "Xảy ra ngay khi vừa đặt tải, tỉ lệ thuận với √t",
          "Xảy ra SAU khi áp lực nước lỗ rỗng thặng dư đã tiêu tán gần hết (kết thúc cố kết sơ cấp), biến dạng vẫn tiếp tục tăng chậm, gần tuyến tính theo log(thời gian)",
          "Chỉ xảy ra với đất cát, không xảy ra với đất sét",
          "Làm mẫu nở ra thay vì lún thêm" ],
        correct:1,
        explain:"Sau khi u ≈ 0, khung hạt vẫn tiếp tục biến dạng từ từ do từ biến (creep) — biểu diễn gần như đường thẳng trên trục log(t)." },
      { id:"C-N13", skill:"Thoát nước 1 chiều và 2 chiều",
        text:"Vì sao thí nghiệm nén cố kết tiêu chuẩn thường bố trí thoát nước 2 chiều (đá thấm cả trên và dưới) thay vì 1 chiều?",
        options:[
          "Chỉ để tiết kiệm giấy lọc",
          "Giảm quãng đường thoát nước H_dr xuống một nửa → rút ngắn đáng kể thời gian đạt cố kết (t tỉ lệ với H_dr²)",
          "Để mẫu nặng hơn",
          "Không có lý do kỹ thuật, chỉ là thói quen" ],
        correct:1,
        explain:"H_dr = H/2 khi thoát 2 chiều so với H_dr = H khi thoát 1 chiều; vì thời gian cố kết t ∝ H_dr², giảm H_dr một nửa giúp thí nghiệm nhanh hơn ~4 lần." }
    ],
    matching: {
      id:"C-NOI",
      title:"Nối mỗi hiện tượng quan sát được (trái) với giải thích đúng (phải)",
      left:[
        "Đường cong τ–δh có đỉnh rồi giảm",
        "Thể tích mẫu tăng khi cắt",
        "Đường cong τ–δh tăng đơn điệu, không đỉnh",
        "Độ lún tăng nhanh ngay sau gia tải rồi chậm dần",
        "Sau 24 h, độ lún vẫn tiếp tục dù áp lực nước ≈ 0",
        "Điểm gãy trên đường e–logp" ],
      right:[
        "Hiện tượng dilatancy — đặc trưng cát chặt",
        "Cát rời hoặc đất sét mềm — biến dạng dẻo",
        "Tính giòn (brittle) — đất cát chặt",
        "Cố kết sơ cấp — áp lực nước lỗ rỗng tiêu tán",
        "Cố kết thứ cấp (creep / secondary consolidation)",
        "Áp lực tiền cố kết p_c — lịch sử tải của đất" ],
      // 1→C(2), 2→A(0), 3→B(1), 4→D(3), 5→E(4), 6→F(5)
      answer:[2,0,1,3,4,5]
    }
  }

};
