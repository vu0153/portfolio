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
| C. Trang chủ — Đợt 1 (layout tĩnh) | ✅ Xong, đã duyệt |
| C. Trang chủ — Đợt 2 (chuyển động cơ bản) | ✅ Xong toàn bộ — chỉ còn 2 mục chờ ảnh project/photography thật |
| C. Trang chủ — Đợt 3 (tương tác nâng cao) | ✅ Xong phần làm được ngay — cursor "VIEW" chờ ảnh project thật |
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

### Đợt 2 — Chuyển động cơ bản — ✅ Xong (phần không bị chặn), 2 mục hoãn lại

**Đã làm (2026-09-11):**
- ✅ Scroll reveal — `components/landing/Reveal.js` (client component, IntersectionObserver), bọc quanh nội dung chính của IntroStatement/ProjectsPreview/PhotographyPreview/ResumePreview/ContactCTA. Tự tắt hoàn toàn khi bật Reduce Motion (CSS `@media (prefers-reduced-motion: reduce) { .reveal { ... !important } }` — nội dung hiện ngay lập tức, không chờ cuộn).
- ✅ Hiệu ứng hover cho 3 route ở Hero — chữ dãn nhẹ (`letter-spacing`) + mũi tên dịch sang phải khi hover, dùng easing token `--ease-out`.
- ✅ Footer: thêm "Local time" tự cập nhật theo giờ Adelaide (`components/LocalTime.js`, dùng `Intl.DateTimeFormat` với timezone `Australia/Adelaide`, tự xử lý DST, cập nhật mỗi 30s, không gây lệch hydration SSR/client).
- **Đã kiểm tra:** cuộn từ từ (giống người dùng thật) → tất cả 5 section hiện đúng, opacity đạt 1. Reduced motion → hiện ngay lập tức, không cần cuộn. Không lỗi console ở cả 2 chế độ. (Lưu ý: test giả lập "nhảy" 1600px trong 1 lần bỏ lỡ 1 section — đây là hạn chế của công cụ test tự động không tạo đủ khung hình trung gian như cuộn tay thật, không phải lỗi thực tế; đã mở rộng `rootMargin` thêm 150px để tăng độ an toàn dù sao.)

**Đã xác nhận và làm tiếp (2026-09-11):**
- ✅ **Nav thu gọn thành nút tròn hamburger khi cuộn** — áp dụng toàn site (Ricky chọn). `components/Nav.js` viết lại: `sticky top-0`, sau khi cuộn quá 80px thì ẩn link chữ, hiện nút hamburger (giống mobile), bấm mở overlay toàn màn hình (link cỡ lớn, đóng bằng Escape hoặc click lại, khoá scroll nền khi mở). Đã kiểm tra hoạt động đúng trên cả Home và About (trang "tạm dừng") — nhất quán toàn site, không lỗi console.
- ✅ **Tên trôi ngang kiểu marquee** — Ricky chọn đổi sang marquee thật. Desktop: dòng "NGOC LONG VU — RICKY VU" lặp lại, trôi ngang liên tục seamless (CSS `@keyframes marquee`, 40s/vòng), nằm phía sau ảnh chân dung (portrait đè lên trên, z-index cao hơn). Mobile: giữ tĩnh, xếp 2 dòng "NGOC LONG VU" / "RICKY VU" phía trên ảnh (không marquee, tránh rối mắt trên màn hình nhỏ). Tự tắt animation khi bật Reduce Motion (đã kiểm tra: `animationName` trả về "none").
- **Sự cố tự phát hiện và sửa:** khi viết lại bố cục cho marquee, bản mobile bị mất dòng "NGOC LONG VU" (chỉ còn "Ricky Vu") — đã phát hiện qua ảnh chụp kiểm tra và sửa lại đủ 2 dòng như bản đã duyệt.

**Sửa thêm sau khi Ricky gửi ảnh chụp bản gốc thật (2026-09-11):**
- ✅ **Chữ marquee đổi từ "nằm sau ảnh" thành "đè lên trên ảnh"** — đúng như bản gốc (chữ cắt ngang qua người trong ảnh). Dùng kỹ thuật `mix-blend-mode: difference` (màu trắng) để chữ tự đổi độ tương phản theo vùng sáng/tối bên dưới — không cần chọn màu thủ công cho từng vùng ảnh.
- ✅ **Sửa lỗi font toàn site**: phát hiện `body` trong `globals.css` đang ghi đè về Arial/Helvetica mặc định thay vì dùng font Geist đã tải sẵn (lỗi sót lại từ lúc scaffold, không ai để ý). Đã sửa để Geist áp dụng đúng toàn site — giao diện gần với bản mẫu hơn nhiều (chữ tròn, hiện đại hơn Arial).
- ✅ **Tăng cỡ chữ marquee lên đúng tỷ lệ bản mẫu** — từ `clamp(2.4rem…5.5rem)` (quá nhỏ, không nổi bật) lên `clamp(5rem, 2rem + 11vw, 13rem)` — đúng bằng thang "display text" mà chính tài liệu thiết kế đề xuất (mục 8.3) nhưng ban đầu chưa dùng tới. Đã kiểm tra ở 1920px và 1440px, chữ không bị cắt, không tràn ngang.
- ✅ **3 chỉnh sửa theo ảnh chụp thực tế bản mẫu (2026-09-11):** (1) tốc độ marquee chậm lại từ 40s → 90s/vòng; (2) vị trí chữ dịch xuống thấp (dùng `items-end` thay vì `items-center`, cắt ngang qua áo/thân dưới thay vì mặt); (3) bỏ hiệu ứng `mix-blend-difference`, dùng trắng thuần đơn giản — với ảnh nền xám trung tính hiện tại, trắng thuần vẫn đủ tương phản, không cần kỹ thuật blend phức tạp.
- ✅ **Đổi font chữ toàn site sang General Sans** (2026-09-11) — Ricky thấy Geist "giống Arial, không sang". General Sans (Fontshare, miễn phí kể cả dùng thương mại) là lựa chọn phổ biến trong giới thiết kế portfolio cao cấp, gần với "PP Neue Montreal" (font bản mẫu Dennis Snellenberg dùng nhưng có phí, không dùng được). Đã tải 4 file `.woff2` (Regular/Medium/Semibold/Bold, ~90KB tổng) về tự host tại `fonts/general-sans/`, cấu hình qua `next/font/local` trong `app/layout.js` (không dùng CDN ngoài — nhanh và ổn định hơn). Đã gỡ bỏ Geist Mono (không dùng ở đâu trong code). Xác nhận qua `getComputedStyle` — font áp dụng đúng, không lỗi tải font, build/lint sạch.
- ✅ **Thay ảnh hero mới** (2026-09-11) — Ricky cung cấp `public/photos/Ricky.png`, một tấm chân dung chuyên nghiệp chụp phông xám (~màu `#849092`, rất gần với `--hero: #8e9494`, không cần tách nền như tấm ảnh thử nghiệm trước). Đã nén xuống WebP (~151KB, giảm từ ~2MB gốc), ghi đè `public/photos/ricky-hero.webp`, xoá file PNG gốc sau khi nén (đúng quy trình đã thống nhất — không giữ ảnh thô nặng trong repo). Ảnh mới tỷ lệ vuông hơn (1120×1400, chân dung bán thân) so với ảnh cũ (963×1400, toàn thân) — đã cập nhật `width`/`height` trong `LandingHero.js` cho khớp. **Đã hỏi Ricky về viền khung ảnh (2026-09-11):** giữ nguyên tạm thời. Ricky sẽ tự chụp 1 tấm ảnh mới trong tương lai theo **hướng ngang/dàn trải rộng** (giống bố cục ảnh của Dennis Snellenberg — ảnh chụp rộng, người không chiếm toàn bộ khung dọc) và **không cần tách nền** — khi có ảnh đó, cần đổi lại tỷ lệ khung hiển thị (`max-w`, `width`/`height` trong `LandingHero.js`) từ dạng dọc (portrait) hiện tại sang dạng ngang (landscape) để khớp bố cục mới.

**Vẫn hoãn — chưa có ảnh thật để làm:**
- ⏸️ **Hover project → ảnh bám theo con trỏ + nút "View"** — chưa làm được vì chưa có ảnh project thật.
- ⏸️ **Ảnh phóng nhẹ khi hover** — chưa có ảnh project/photography nào để áp dụng.

### Đợt 3 — Tương tác nâng cao — ✅ Xong phần làm được ngay (2026-09-11)

- ✅ **Magnetic button** — áp dụng cho **tất cả** nút tròn (`components/landing/CircleButton.js`), không chỉ riêng "Get in touch": nút dịch nhẹ về phía con trỏ khi rê gần (tối đa 10px), trả về vị trí gốc khi rời chuột. Tự tắt khi bật Reduce Motion (đúng mục 41.1 tài liệu). Đã kiểm tra bằng Playwright: `transform` đổi khi hover, về rỗng khi rời chuột.
- ✅ **Hiệu ứng chuyển trang** — `components/PageTransition.js` (mount trong `app/layout.js`): khi chuyển route, 1 lớp phủ màu tối trượt che rồi mở ra như rèm cửa (0.5s). Đơn giản và an toàn hơn cách "chặn click rồi mới điều hướng" — không có rủi ro làm hỏng nút back/forward của trình duyệt vì chỉ là hiệu ứng trang trí chạy SAU khi Next.js đã điều hướng xong. Tự tắt khi bật Reduce Motion. Đã kiểm tra: lớp phủ xuất hiện đúng lúc bấm link, tự biến mất sau ~550ms, không xuất hiện khi Reduce Motion bật.
- ⏸️ **Cursor tuỳ chỉnh "VIEW"** — sau khi rà lại kỹ tài liệu, tính năng này về bản chất chỉ có ý nghĩa khi hover lên **ảnh** project/photo (thay con trỏ khi rê vào ảnh) — hiện chưa có ảnh project/photo thật nào để gắn hiệu ứng vào, nên **không phải hoãn theo lựa chọn, mà là chưa có đối tượng để áp dụng**. Sẽ làm cùng lúc với việc thêm ảnh thật vào Projects/Photography.

**Tinh chỉnh thêm theo góc nhìn "senior dev" (2026-09-11) — Ricky hỏi tôi sẽ làm gì nếu là chuyên gia có nhiều năm kinh nghiệm:**

Quan điểm: chuyên nghiệp không phải là *thêm* animation, mà là animation *ít, mượt, có lý do*. Không thêm hiệu ứng mới, chỉ tinh chỉnh 4 điểm:
- ✅ **Stagger cho danh sách** — `Reveal.js` thêm chế độ `stagger` (mỗi dòng trong list Projects/Other Projects/Resume xuất hiện lệch nhau 60ms thay vì bật cùng lúc cả khối). Đã kiểm tra: `transitionDelay` mỗi dòng là 0/60/120/180ms.
- ✅ **Marquee tự tạm dừng khi cuộn khỏi màn hình** — tách thành `components/landing/MarqueeText.js`, dùng IntersectionObserver để pause/resume animation, tránh tốn CPU/pin vô ích khi người dùng không nhìn thấy nó. Thêm `will-change: transform` để mượt hơn. Đã kiểm tra: `animationPlayState` chuyển đúng running ⇄ paused.
- ✅ **Magnetic button — tách tốc độ bám và tốc độ bật lại** — bám theo chuột nhanh (90ms), bật lại vị trí gốc chậm hơn có cảm giác đàn hồi (350ms) — thay vì cùng 1 tốc độ cứng nhắc như trước.
- ✅ **Menu overlay có transition mượt** — trước đó bật/tắt đột ngột (thiếu hẳn 1 loại chuyển động theo mục 29.1 tài liệu: "interface transition 300-600ms"). Giờ có fade + scale nhẹ khi mở/đóng, các link hiện lần lượt so le nhau (stagger 40ms/dòng). Đã kiểm tra thêm: link trong menu đóng có `tabIndex=-1` (không thể tab tới bằng bàn phím khi ẩn — đúng chuẩn accessibility).

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
| 2026-09-11 | Đợt 2: làm scroll reveal, hover route, local time footer, Nav thu gọn toàn site khi cuộn, tên marquee trôi ngang (desktop) — tất cả đã xác nhận và hoàn tất |

---

## Câu hỏi mở (chưa chặn tiến độ, nhưng cần trả lời dần)

- Domain riêng hay giữ `*.vercel.app`? (mặc định: subdomain cho v1)
- Có muốn thêm chứng chỉ/dự án mới khi có?
- Ảnh Photography thật — khi nào có để đưa vào?
