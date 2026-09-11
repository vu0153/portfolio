# Roadmap — Portfolio Website

Tài liệu này là nguồn tham chiếu chính (source of truth) cho tiến độ dự án. Cập nhật mỗi khi một giai đoạn hoàn tất hoặc có quyết định quan trọng mới, để bất kỳ ai (bạn hoặc AI ở phiên làm việc sau) đọc vào đều nắm được hiện trạng mà không cần hỏi lại từ đầu.

**Cách đọc file này:** mỗi giai đoạn có trạng thái `✅ Xong` / `🔄 Đang làm` / `⬜ Chưa làm` / `⏸️ Tạm dừng`, và mục "Cần xác nhận" liệt kê những gì cần bạn duyệt trước khi đi tiếp.

**Tài liệu liên quan:**
- `LANDING-PAGE-DESIGN-DIRECTION-DENNIS-SNELLENBERG-INSPIRED.md` (thư mục gốc) — bản thiết kế chi tiết cho trang chủ, là nguồn tham chiếu bắt buộc phải đọc trước khi sửa Home.
- Video tham chiếu (2026-09-11, Ricky tự quay màn hình dennissnellenberg.com, 53s, đã xem và phân tích từng khung hình) — xác nhận tài liệu thiết kế khớp đúng với trang thật này. Các hành vi tương tác cụ thể quan sát được đã đưa vào phần Đợt 2/Đợt 3 bên dưới.
- `data/profile.js` — toàn bộ thông tin cá nhân (bio, kỹ năng, kinh nghiệm, chứng chỉ, học vấn) dùng chung cho cả site.

---

## Tổng quan trạng thái

| Giai đoạn | Trạng thái |
|---|---|
| A. Hạ tầng & Scaffold | ✅ Xong |
| B. Nội dung cơ bản (Nav/Footer/About/Contact) | ✅ Xong |
| C. Trang chủ — Đợt 1 (layout tĩnh) | ✅ Xong, đang chờ bạn xác nhận vài điểm |
| C. Trang chủ — Đợt 2 (chuyển động cơ bản) | ⬜ Chưa làm |
| C. Trang chủ — Đợt 3 (tương tác nâng cao) | ⬜ Chưa làm |
| D. Các trang con (About/Projects/Photography/Contact) | ⏸️ Tạm dừng — bạn sẽ làm chi tiết từng trang riêng |
| E. Vận hành / Deploy bản mới | ⬜ Chưa làm |

---

## A. Hạ tầng & Scaffold — ✅ Xong

- Next.js 16.3.4 + React 19, Tailwind CSS 4, JavaScript thuần (không TypeScript — quyết định có chủ đích vì bạn đang học).
- Repo GitHub: https://github.com/vu0153/portfolio (public)
- Deploy Vercel: https://portfolio-theta-cyan-88.vercel.app/ (tự động deploy lại mỗi khi push lên nhánh `main`)
- Xác thực GitHub qua `gh` CLI đã cài trên máy.

---

## B. Nội dung cơ bản — ✅ Xong

- `data/profile.js` — nguồn dữ liệu chung: tên, headline, bio, skills, certifications, experience, education, interests, contact.
- `components/Nav.js`, `Footer.js`, `SectionHeading.js`
- Trang `/about` — đầy đủ nội dung (Experience, Skills, Certifications, Education, Outside work).
- Trang `/contact` — hoàn chỉnh (mailto + LinkedIn).
- Trang `/projects`, `/photography` — mới có placeholder "coming soon", chưa có nội dung/ảnh thật.

**Quyết định đã chốt trong giai đoạn này** (không cần hỏi lại trừ khi bạn muốn đổi):
- Kinh nghiệm làm việc trên site chỉ hiện 2 vai trò NOC (DIGI-TEXX 2021–2023, FPT Telecom 2012–2015) — **bỏ qua** các job phục vụ/nhà hàng và startup NOWDEAL vì không liên quan vị trí Network/IT Support.
- Contact chỉ dùng email (ngoclong327@gmail.com) + LinkedIn — không đưa số điện thoại/địa chỉ nhà lên public.
- Chứng chỉ dùng bản bạn cung cấp trực tiếp trong chat (CompTIA Security+ 2026, CyberOps Associate 2024, CCNA 2024, MCSA 2011) — **không** dùng ngày trong resume cũ (đã xác nhận resume bị lỗi thời phần này).

---

## C. Trang chủ (Home) — theo tài liệu thiết kế Editorial

### Đợt 1 — Layout tĩnh — ✅ Xong

Đã build:
- Design token (màu be-xám-đen, easing) trong `app/globals.css`
- `components/landing/LandingHero.js` — tên lớn "RICKY / [ảnh] / VU", 3 route điều hướng (Technical Projects → `/projects`, Resume → `/about`, Photography → `/photography`), badge "Based in Adelaide" dạng pill nền tối
- `components/landing/CircleButton.js` — nút tròn dùng chung (đen = điều hướng phụ, accent xanh tím = CTA chính duy nhất ở Contact) — thay cho link text gạch chân ban đầu, sau khi đối chiếu với video mẫu
- `components/landing/IntroStatement.js`, `ProjectsPreview.js`, `PhotographyPreview.js`, `ResumePreview.js`, `ContactCTA.js`
- Đã sửa lỗi accessibility: chỉ còn 1 thẻ `<h1>` mỗi trang (trước đó có 3, sai chuẩn)
- Đã kiểm tra: lint sạch, build production ok, 0 lỗi console, không tràn ngang ở 360/390/1920px, focus bàn phím hiển thị rõ (kiểm tra lại sau mỗi lần chỉnh)

**Đã đối chiếu với video mẫu (dennissnellenberg.com) ngày 2026-09-11 — đã sửa các điểm lệch:**
- ✅ Badge vị trí → đổi từ chữ thường thành pill nền tối bo tròn (giống "Located in the Netherlands" bản gốc)
- ✅ Các link "View more" → đổi thành nút tròn lớn (giống "About me"/"Get in touch" bản gốc), chỉ dùng màu accent cho nút CTA quan trọng nhất (Get in touch), còn lại dùng đen — đúng "quy tắc màu" mục 7.1 tài liệu (accent chỉ xuất hiện ở số ít điểm)
- ✅ **Đo màu chính xác từ pixel trong video** (không áng chừng): nền các section chính là **trắng thật** (#ffffff, không phải be #E9E8E3 như bản nháp đầu), nền Hero là **xám trung tính** (#8e9494, giống màu backdrop chụp ảnh chân dung), accent là xanh dương đậm hơn (#2e3bc5, không phải tím nhạt #5058E8 ban đầu). Token trong `app/globals.css` đã đổi tên: `--paper` (trắng, dùng cho mọi section nội dung), `--hero` (xám, chỉ Hero), `--dark`/`--dark-text` (section Contact), `--accent`.

**✅ Đã xác nhận ở vòng này (2026-09-11) — không cần hỏi lại:**
- [x] Câu Intro Statement giữ nguyên
- [x] Đã thêm 5 project còn lại (Disaster Recovery & BCP, Cloud-based Inventory Management, Data Analytics Pipeline, Indigenous Art Atlas, AquaGuard IoT) vào mục "Other Projects" ngay sau 4 project chủ đạo
- [x] Câu CTA cuối trang đổi thành: *"Let's discuss how I can support your team."*
- [x] Route "02 Resume" giữ nguyên trỏ vào `/about`
- [x] Tên hiển thị lớn đổi thành **"NGOC LONG VU" [ảnh] "RICKY VU"** (trước đó chỉ có "RICKY"/"VU")
- [x] Màu sắc: đã đo chính xác từ video và áp dụng (xem trên)
- [x] Nút tròn đen/accent: kích thước/vị trí được duyệt, giữ nguyên
- [ ] Ảnh hero vẫn là ảnh thử nghiệm — Ricky sẽ gửi ảnh khác sau

### Đợt 2 — Chuyển động cơ bản — ⬜ Chưa làm

Sẽ làm sau khi Đợt 1 được duyệt. Cụ thể hoá từ video mẫu:
- Scroll reveal cho từng section khi cuộn tới
- Nav thu gọn: thanh Nav chữ (Home/About/Projects/...) hiện tại luôn cố định — bản mẫu chỉ hiện link chữ ở đầu trang, sau khi cuộn nhẹ thì **thu lại thành 1 nút tròn hamburger** góc phải, bấm vào mới mở menu overlay toàn màn hình
- Hiệu ứng hover cho 3 route ở Hero (chữ dãn nhẹ, dịch sang phải)
- Hover project trong "Selected Work": ảnh thumbnail hiện ra bám theo vị trí con trỏ (không phải cố định), có nút "View" tròn màu accent ở giữa ảnh — **cần ảnh project trước mới làm được phần này**
- Ảnh phóng nhẹ khi hover (scale 1.0 → 1.025)
- Tên "RICKY VU" trôi ngang rất chậm (30-60s/vòng, tự tắt nếu bật Reduce Motion)
- Footer: thêm "Local time" tự cập nhật theo giờ Adelaide (bản mẫu có, hiện site chưa có)

### Đợt 3 — Tương tác nâng cao — ⬜ Chưa làm

Chỉ làm sau khi Đợt 2 được duyệt. Cụ thể hoá từ video mẫu:
- Cursor tuỳ chỉnh: khi rê vào ảnh project hiện chữ "VIEW" thay con trỏ thường; khi trang đang chuyển (loading) hiện icon crosshair trắng
- Magnetic button cho nút tròn "Get in touch" (di chuyển nhẹ theo hướng con trỏ khi rê gần)
- Hiệu ứng chuyển trang: khi bấm vào 1 project, có màn hình tối chuyển tiếp ngắn hiện tên project + nút "Next case" trước khi trang mới load xong (bản mẫu dùng chính kỹ thuật này giữa các trang project)

---

## D. Các trang con — ⏸️ Tạm dừng

Theo yêu cầu của bạn (2026-09-11): **không polish thêm** các trang `/about`, `/projects`, `/photography`, `/contact` cho đến khi bạn chủ động muốn làm chi tiết từng trang. Ghi chú để nhớ khi quay lại:

- Các trang này hiện dùng giao diện sáng/tối mặc định từ Milestone B, **chưa đồng bộ** token màu editorial (be/xám/đen) của Home mới — cần cân nhắc đồng bộ lại khi làm.
- `/projects` cần: nội dung đầy đủ cho từng project (mục đích, mô tả, hình ảnh) — bạn nói sẽ tự cung cấp ảnh sau.
- `/photography` cần: ảnh thật từ bạn (chưa có ảnh nào).
- `/contact` đã xong nội dung cơ bản, có thể chỉ cần đồng bộ style.
- `/about` đã đầy đủ nội dung, có thể chỉ cần đồng bộ style + rà lại theo hướng "Resume" nếu muốn khớp cách gọi ở Home.

---

## E. Vận hành / Deploy — ⬜ Chưa làm

- [ ] Commit các thay đổi Home Đợt 1 (đang chờ, có thể làm ngay vì bạn đã duyệt bố cục tổng thể)
- [ ] Push lên GitHub
- [ ] Xác nhận Vercel tự deploy đúng bản mới
- [ ] Chạy lại QA đầy đủ sau khi có Đợt 2/3 (nhiều kích thước màn hình, keyboard, reduced motion — theo checklist mục 66 trong tài liệu thiết kế)

---

## Backlog (ý tưởng tương lai, chưa làm)

Dark mode, blog, CMS, analytics, custom domain, contact-form backend thật, automated test suite, TypeScript migration, trang chi tiết từng project, bộ lọc/lightbox cho photo gallery, di chuyển ảnh sang CDN.

---

## Nhật ký quyết định quan trọng (để không hỏi lại)

| Ngày | Quyết định |
|---|---|
| 2026-09-10 | Chọn Vercel thay vì Cloudflare (đã deploy, không đổi trừ khi có lý do cụ thể) |
| 2026-09-11 | Định vị portfolio hướng Network/IT Support/Helpdesk/Cybersecurity — KHÔNG phải web developer portfolio, dù công cụ xây là Next.js |
| 2026-09-11 | Web dev chỉ là chi tiết phụ trong About ("tôi tự build site này"), không phải headline chính |
| 2026-09-11 | Bỏ hẳn phong cách "Network Pulse" (nền tối, canvas mạng, cyber terminal) — chuyển hẳn sang phong cách editorial theo tài liệu Dennis-Snellenberg-inspired |
| 2026-09-11 | Giữ các trang riêng (không gộp thành 1 trang cuộn dài) — Home chỉ thêm preview + link "Xem tất cả" |
| 2026-09-11 | Ảnh hero hiện tại chỉ là thử nghiệm, sẽ đổi ảnh khác sau |
| 2026-09-11 | Xác nhận video mẫu = dennissnellenberg.com thật, khớp tài liệu thiết kế — dùng làm chuẩn tham chiếu cụ thể cho Đợt 2/3 |
| 2026-09-11 | Đổi link chữ thành nút tròn (đen/accent) sau khi đối chiếu video mẫu |
| 2026-09-11 | Đo màu pixel-chính-xác từ video: nền trắng thật (không phải be), Hero xám (#8e9494), accent xanh dương đậm (#2e3bc5) |
| 2026-09-11 | Tên hiển thị lớn ở Hero đổi thành "NGOC LONG VU — RICKY VU" (trước đó chỉ "RICKY VU") |
| 2026-09-11 | Danh sách Projects trên Home có thêm mục "Other Projects" (5 project phụ) ngay sau 4 project chủ đạo |
| 2026-09-11 | Câu CTA cuối trang: "Let's discuss how I can support your team." (thay cho câu gốc "Have something interesting to discuss?") |

---

## Câu hỏi mở (chưa chặn tiến độ, nhưng cần trả lời dần)

- Domain riêng hay giữ `*.vercel.app`? (mặc định: subdomain cho v1)
- Có muốn thêm chứng chỉ/dự án mới khi có?
- Ảnh Photography thật — khi nào có để đưa vào?
