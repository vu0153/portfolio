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
| C. Intro splash (màn hình chào) | ✅ Xong (2026-09-14) |
| **C2. Home — chuyển sang Card Slider 3D** | ✅ Xong (2026-09-15) — **thay thế hoàn toàn** bố cục cuộn dọc mô tả ở Đợt 1/2/3 bên dưới, xem chi tiết cuối mục C |
| D. Trang Photography | ✅ Xong — trang câu chuyện đầy đủ, 21 ảnh (2026-09-14) |
| D2. Gallery ảnh cá nhân | ✅ Xong — tag + overlay + quy trình nén ảnh tự động (2026-09-14) |
| E. Trang About/Projects/Contact | ⏸️ Tạm dừng — bạn sẽ làm chi tiết từng trang riêng |
| F. Vận hành / Deploy bản mới | ⬜ Chưa làm |

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

**Bỏ mục Resume preview khỏi trang chủ (2026-09-14):** Ricky không thích giao diện mục này trên Home. Đã bỏ `<ResumePreview />` khỏi `app/page.js` (giữ lại file component, không xoá, phòng khi cần dùng lại chỗ khác). Trang chủ giờ còn: Hero → Intro → Projects → Photography → Contact. Route "02 Resume" ở Hero và link "View full resume" vẫn trỏ đúng tới `/about` (nơi có đầy đủ Experience/Skills/Certifications) — không mất khả năng điều hướng tới thông tin resume, chỉ là không có section riêng lặp lại trên Home nữa.

**Bài học kiểm tra:** khi chụp ảnh toàn trang (`--full-page`) bằng CLI `playwright screenshot`, các section dùng `Reveal` (hiệu ứng hiện dần khi cuộn, dựa trên `IntersectionObserver`) có thể chụp ra **trống rỗng** nếu công cụ resize khung nhìn thay vì cuộn thật — không phải lỗi trang, chỉ là IntersectionObserver chưa kịp kích hoạt. Cách chụp đúng: dùng script cuộn dần (`mouse.wheel` nhiều lần + đợi) trước khi chụp `fullPage`, không dùng CLI `--full-page` trực tiếp cho các trang có hiệu ứng này.

**Headline + Nav tinh chỉnh thêm (2026-09-14):**
- ✅ Headline đổi từ 1 dòng "Network & IT Support Professional" thành **3 dòng riêng biệt, đậm (`font-bold`), to hơn**: "Network" / "Cybersecurity" / "IT Support" — canh phải. Dữ liệu thêm `headlineItems` (mảng) trong `data/profile.js`, giữ `headline` (chuỗi 1 dòng "Network · Cybersecurity · IT Support") riêng cho thẻ `<title>` trang.
- ✅ Nav: bỏ tên "Ngoc Long (Ricky) Vu" khỏi thanh menu (Ricky thấy thừa) — menu giờ **canh giữa** thanh Nav, nút hamburger (khi cuộn/mobile) neo cố định góc phải.
- ✅ Thêm hiệu ứng hover mới cho menu chữ: **gạch chân trượt vào** (scale từ trái sang phải, 300ms, dùng đúng easing token đã có) thay cho gạch chân mặc định của trình duyệt — trang hiện tại vẫn giữ gạch chân cố định.
- **Lưu ý kỹ thuật phát hiện khi test:** Tailwind v4 đổi cách hiện thực `scale-x-*` — dùng thuộc tính CSS `scale` (`scale: var(--tw-scale-x) var(--tw-scale-y)`) thay vì `transform: scale()` như v3. Nếu sau này cần kiểm tra `scale-x-*`/`rotate-*`/`translate-*` bằng script, phải đọc đúng `getComputedStyle(el).scale` / `.rotate` / `.translate` (thuộc tính CSS riêng), không phải `.transform` — nhầm chỗ này từng khiến 1 lần kiểm tra ra kết quả sai (tưởng lỗi nhưng thực ra hoạt động đúng).

**Tinh chỉnh chữ marquee sau khi có ảnh nền mới (2026-09-14):**
- ✅ Đẩy vị trí lên cao hơn (`bottom-10 sm:bottom-14` thay vì `bottom-0`) — tránh bị cắt sát mép dưới Hero
- ✅ Đổi độ đậm chữ từ `font-normal` sang `font-semibold` (dùng đúng file General Sans Semibold đã tải sẵn) — dày hơn, nổi bật hơn trên ảnh
- ✅ Đổi nội dung lặp từ "NGOC LONG VU — RICKY VU" (em-dash giữa) thành **"NGOC LONG VU - RICKY VU -"** (thêm dấu gạch ngang cuối) — tránh cảm giác dính chữ khi vòng lặp nối tiếp nhau

**Sự cố cache ảnh đã xử lý (2026-09-14):** Ricky báo trình duyệt local vẫn hiện ảnh cũ dù đã đổi ảnh mới, kể cả ở cửa sổ ẩn danh. Đã xác minh qua 3 lớp độc lập (MD5 file trên đĩa, MD5 file server trả về qua `curl`, ảnh chụp từ trình duyệt Playwright hoàn toàn sạch) — server luôn đúng. Đã xoá sạch `.next` cache và khởi động lại để loại trừ khả năng cache build phía server. Kết luận: vấn đề nằm ở phía trình duyệt/máy Ricky (rất có thể là cache ảnh cũ của Chrome hoặc 1 extension), không phải lỗi code — Ricky xác nhận đã thấy đúng ảnh sau đó. **Ghi nhớ cho lần sau:** nếu Ricky báo "vẫn thấy cái cũ" sau khi đổi asset, quy trình xác minh nhanh là (1) so `md5` file trên đĩa vs. `curl` từ server, (2) nếu khớp, chụp màn hình bằng Playwright (trình duyệt sạch) để chứng minh server đúng, (3) hướng dẫn Ricky thử link ảnh trực tiếp + trình duyệt khác để khoanh vùng về phía máy họ.

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
- ✅ **Thay ảnh hero mới** (2026-09-11) — Ricky cung cấp `public/photos/Ricky.png`, một tấm chân dung chuyên nghiệp chụp phông xám (~màu `#849092`, rất gần với `--hero: #8e9494`, không cần tách nền như tấm ảnh thử nghiệm trước). Đã nén xuống WebP (~151KB, giảm từ ~2MB gốc), ghi đè `public/photos/ricky-hero.webp`, xoá file PNG gốc sau khi nén (đúng quy trình đã thống nhất — không giữ ảnh thô nặng trong repo). Ảnh mới tỷ lệ vuông hơn (1120×1400, chân dung bán thân) so với ảnh cũ (963×1400, toàn thân) — đã cập nhật `width`/`height` trong `LandingHero.js` cho khớp. **Đã hỏi Ricky về viền khung ảnh (2026-09-11):** giữ nguyên tạm thời, Ricky nói sẽ tự chụp ảnh ngang sau. → **Đã thực hiện ngày 2026-09-14**, xem mục "Hero đổi hẳn sang ảnh nền phủ toàn khung" bên dưới — không còn viền khung nữa, ảnh giờ phủ toàn bộ Hero.

**Vẫn hoãn — chưa có ảnh thật để làm:**
- ⏸️ **Hover project → ảnh bám theo con trỏ + nút "View"** — chưa làm được vì chưa có ảnh project thật.
- ⏸️ **Ảnh phóng nhẹ khi hover** — chưa có ảnh project/photography nào để áp dụng.

### Đợt 3 — Tương tác nâng cao — ✅ Xong phần làm được ngay (2026-09-11)

- ✅ **Magnetic button** — áp dụng cho **tất cả** nút tròn (`components/landing/CircleButton.js`), không chỉ riêng "Get in touch": nút dịch nhẹ về phía con trỏ khi rê gần (tối đa 10px), trả về vị trí gốc khi rời chuột. Tự tắt khi bật Reduce Motion (đúng mục 41.1 tài liệu). Đã kiểm tra bằng Playwright: `transform` đổi khi hover, về rỗng khi rời chuột.
- ✅ **Hiệu ứng chuyển trang** — `components/PageTransition.js` (mount trong `app/layout.js`): khi chuyển route, 1 lớp phủ màu tối trượt che rồi mở ra như rèm cửa (0.5s). Đơn giản và an toàn hơn cách "chặn click rồi mới điều hướng" — không có rủi ro làm hỏng nút back/forward của trình duyệt vì chỉ là hiệu ứng trang trí chạy SAU khi Next.js đã điều hướng xong. Tự tắt khi bật Reduce Motion. Đã kiểm tra: lớp phủ xuất hiện đúng lúc bấm link, tự biến mất sau ~550ms, không xuất hiện khi Reduce Motion bật.
- ⏸️ **Cursor tuỳ chỉnh "VIEW"** — sau khi rà lại kỹ tài liệu, tính năng này về bản chất chỉ có ý nghĩa khi hover lên **ảnh** project/photo (thay con trỏ khi rê vào ảnh) — hiện chưa có ảnh project/photo thật nào để gắn hiệu ứng vào, nên **không phải hoãn theo lựa chọn, mà là chưa có đối tượng để áp dụng**. Sẽ làm cùng lúc với việc thêm ảnh thật vào Projects/Photography.

**Hero đổi hẳn sang ảnh nền phủ toàn khung (2026-09-14) — thay đổi lớn nhất từ đầu dự án:**

Ricky cung cấp ảnh thật của mình (`Ricky.jpg`, chụp máy Sony ILCE-7M4, chỉnh Lightroom, bố cục ngang 16:9, ngồi trên cầu tàu, biển phía sau) và yêu cầu đổi hẳn Hero từ "ảnh nhỏ đứng giữa" sang "ảnh nền phủ toàn khung" giống bản mẫu thật. Đây là thay đổi cấu trúc, không chỉ thay file ảnh:
- Ảnh nén xuống 2400×1350 WebP (~150KB, từ ~4.7MB gốc 4672×2628), file gốc đã xoá sau khi nén
- `LandingHero.js` viết lại hoàn toàn: `<section>` giờ có `min-h-[560px] sm:min-h-[720px] lg:min-h-[860px]`, ảnh dùng `next/image` với `fill` + `object-cover object-[50%_30%]` (lệch điểm neo lên 30% từ trên để giữ mặt trong khung khi bị cắt ở màn hình hẹp) phủ toàn bộ section, mọi nội dung khác (badge, headline, tên marquee, 3 route) giờ là lớp phủ (`relative z-10`) đè lên ảnh
- Route ở cuối Hero đổi từ `text-ink` sang `text-white` (đọc được trên ảnh)
- **Chủ động thêm bóng đổ nhẹ** (`text-shadow`) cho dòng headline — vùng đó nằm trên nền trời sáng trong ảnh, chữ trắng thuần hơi giảm tương phản; bóng đổ giúp chắc chắn dễ đọc mà không cần biết trước ảnh sẽ sáng/tối ra sao
- Đã kiểm tra: lint/build sạch, không lỗi console, không tràn ngang, hiển thị đúng ở 1920/1440/mobile

**Headline "Network & IT Support Professional" (2026-09-14):** đổi từ chữ nhỏ/màu tối/in hoa sang chữ trắng, to, không in hoa — giống cách bản mẫu hiển thị "Freelance / Designer & Developer" nổi bật trên nền Hero.

**Badge "Based in" làm lại theo đúng bản mẫu (2026-09-14):** Ricky gửi ảnh chụp bản gốc chỉ rõ badge cần to hơn, chữ canh giữa theo chiều dọc, và có icon quả địa cầu tự xoay. Tạo `components/landing/LocationBadge.js` — icon SVG địa cầu (vòng tròn + kinh tuyến + đường xích đạo) đặt trong 1 vòng tròn riêng bên trong badge, tự xoay chậm (10s/vòng, `@keyframes globe-spin`), tự tắt khi bật Reduce Motion. Đã kiểm tra: `animationName` = "globe-spin" ở chế độ thường, "none" khi Reduce Motion bật; không lỗi console; hiển thị đúng cả desktop và mobile.

**Tinh chỉnh thêm theo góc nhìn "senior dev" (2026-09-11) — Ricky hỏi tôi sẽ làm gì nếu là chuyên gia có nhiều năm kinh nghiệm:**

Quan điểm: chuyên nghiệp không phải là *thêm* animation, mà là animation *ít, mượt, có lý do*. Không thêm hiệu ứng mới, chỉ tinh chỉnh 4 điểm:
- ✅ **Stagger cho danh sách** — `Reveal.js` thêm chế độ `stagger` (mỗi dòng trong list Projects/Other Projects/Resume xuất hiện lệch nhau 60ms thay vì bật cùng lúc cả khối). Đã kiểm tra: `transitionDelay` mỗi dòng là 0/60/120/180ms.
- ✅ **Marquee tự tạm dừng khi cuộn khỏi màn hình** — tách thành `components/landing/MarqueeText.js`, dùng IntersectionObserver để pause/resume animation, tránh tốn CPU/pin vô ích khi người dùng không nhìn thấy nó. Thêm `will-change: transform` để mượt hơn. Đã kiểm tra: `animationPlayState` chuyển đúng running ⇄ paused.
- ✅ **Magnetic button — tách tốc độ bám và tốc độ bật lại** — bám theo chuột nhanh (90ms), bật lại vị trí gốc chậm hơn có cảm giác đàn hồi (350ms) — thay vì cùng 1 tốc độ cứng nhắc như trước.
- ✅ **Menu overlay có transition mượt** — trước đó bật/tắt đột ngột (thiếu hẳn 1 loại chuyển động theo mục 29.1 tài liệu: "interface transition 300-600ms"). Giờ có fade + scale nhẹ khi mở/đóng, các link hiện lần lượt so le nhau (stagger 40ms/dòng). Đã kiểm tra thêm: link trong menu đóng có `tabIndex=-1` (không thể tab tới bằng bàn phím khi ẩn — đúng chuẩn accessibility).

**Intro splash màn hình chào (2026-09-14):** Ricky yêu cầu khi vừa vào web lần đầu, hiện màn hình đen với chữ "Welcome to Ricky's Portfolio" giữa màn hình trong 1.5 giây, rồi chuyển mượt sang Home.

- Component mới `components/IntroSplash.js`, mount đầu tiên trong `app/layout.js` (trước cả `PageTransition`, `Nav`).
- Dùng `sessionStorage` (key `introShown`) để chỉ hiện đúng 1 lần mỗi phiên tab trình duyệt — điều hướng nội bộ sau đó (About/Projects/...) không hiện lại.
- Tái dùng đúng hiệu ứng "rèm cửa" (`page-reveal` keyframe) đã có ở `PageTransition.js` cho lúc biến mất, để đồng bộ cảm giác chuyển cảnh toàn site — thêm class riêng `.intro-splash-leave` (0.6s) + `.intro-splash-text` (chữ mờ dần hiện lên) trong `globals.css`.
- Tự tắt hoàn toàn khi bật `prefers-reduced-motion: reduce` (không hiện overlay, vào thẳng Home).
- Khoá cuộn trang (`document.body.style.overflow = "hidden"`) trong lúc overlay hiện, mở lại ngay khi biến mất.
- z-index `[200]` — cao hơn `PageTransition` (`[100]`) và Nav (`50`) để không bị đè khi cả hai cùng chạy lúc tải trang lần đầu.
- **Lỗi gặp phải khi build:** `react-hooks/set-state-in-effect` — gọi `setState` ngay trong thân `useEffect`. Khác với 3 lần gặp lỗi này trước đó trong dự án (Nav/PageTransition — đều là state "phái sinh" từ 1 giá trị đổi theo render), lần này là state khởi tạo 1 lần khi mount nên không thể sửa bằng cách so sánh giá trị lúc render. Sửa bằng cách bọc `setPhase("holding")` trong `setTimeout(..., 0)` để lùi việc gọi setState ra khỏi thân effect đồng bộ.
- **Bug thật phát hiện khi kiểm tra bằng Playwright** (không phải chỉ là lỗi lint): React Strict Mode (chỉ bật ở `next dev`) chạy effect kiểu mount → cleanup → mount lại ngay lập tức để kiểm tra độ bền. Bản đầu tiên ghi `sessionStorage.setItem("introShown", "1")` ngay trong thân effect (đồng bộ) — lần mount "giả" đầu tiên ghi cờ này trước, rồi bị cleanup huỷ timer; đến lần mount "thật" thứ hai, code đọc thấy cờ đã "1" nên bỏ qua luôn, kết quả là **splash không bao giờ hiện ra** dù lint/build đều sạch. Root-cause bằng cách thêm log tạm thời vào từng effect, thấy rõ 2 lần "effect run" liên tiếp. Sửa bằng cách dời `sessionStorage.setItem` vào bên trong callback của chính timer (chỉ timer nào sống sót qua cleanup mới ghi cờ) — cách này an toàn với cả Strict Mode lẫn production (không có Strict Mode double-invoke).
- Đã kiểm tra bằng Playwright (script tạm, đã xoá sau khi xong): hiện đúng lúc tải trang lần đầu, giữ ~1.5s, chuyển cảnh mượt rồi biến mất; không hiện lại khi điều hướng nội bộ trong cùng tab; bỏ qua hoàn toàn khi bật Reduce Motion; cuộn trang bị khoá lúc hiện và mở lại đúng lúc biến mất; hiển thị đúng ở mobile (390px). `npm run lint` và `npm run build` đều sạch.
- Vòng tròn đen nhỏ có chữ "N" ở góc dưới trái trong ảnh chụp màn hình lúc `npm run dev` là **Next.js Dev Indicator** (Next tự chèn, chỉ có ở dev, không xuất hiện ở bản production) — không phải lỗi của site.

**Hero làm lại — giảm độ chiếm ưu thế của ảnh chân dung, ưu tiên tín hiệu năng lực (2026-09-14):** một người bạn của Ricky xem web nhận xét rằng thấy ảnh mặt trước tiên thay vì các dự án, cảm giác giống "khoe bản thân" hơn là gây ấn tượng về năng lực — đặc biệt đáng lưu ý vì Ricky định vị là ứng viên Network/IT Support, không phải designer/photographer nơi chân dung cá nhân hợp lý làm yếu tố dẫn dắt.

- Bỏ layout ảnh phủ toàn khung (full-bleed) đã làm ở bản trước — ảnh giờ là 1 khung chứa vừa phải (`aspect-[4/3]`, rộng tối đa 380px ở desktop), đặt bên phải, không còn là nền của cả section.
- Đưa nội dung "năng lực" lên hàng đầu bên trái: tên (nhỏ, khiêm tốn, không phải yếu tố nổi bật), headline 3 dòng Network/Cybersecurity/IT Support (giữ nguyên, đổi từ chữ trắng-trên-ảnh sang chữ đậm màu ink trên nền `bg-hero`), thêm câu tagline định vị (`profile.tagline`), và **thêm mới** 1 hàng "pill" hiển thị nhanh 4 chứng chỉ (CCNA, Cisco CyberOps Associate, CompTIA Security+, MCSA) — tín hiệu năng lực cụ thể, dễ quét mắt, thay vì phải cuộn xuống mới thấy.
- **Bỏ hẳn hiệu ứng tên chạy ngang (marquee) trên ảnh** — đây là chi tiết mang tính "personal-brand" (kiểu Dennis Snellenberg) mà Ricky không cần nữa khi mục tiêu là tuyển dụng kỹ thuật, không phải xây thương hiệu cá nhân. Component `MarqueeText.js` vẫn giữ nguyên file (không dùng ở đâu khác), có thể dùng lại sau nếu muốn.
- Thứ tự đọc trên mobile (xếp dọc): tên → headline → tagline → chứng chỉ → ảnh — đúng ý "thấy năng lực trước, ảnh sau" mà không cần CSS reorder phức tạp, chỉ nhờ thứ tự DOM tự nhiên.
- Đã kiểm tra: lint/build sạch, 1 `h1` duy nhất, không lỗi console, hiển thị đúng ở desktop (1440px), laptop (1024px) và mobile (390px), route links + LocationBadge vẫn hoạt động đúng.

**Hero đổi hướng lần 2 — quay lại ảnh lớn, nhưng theo kiểu "khung đen chuyển gradient" thay vì full-bleed trắng như trước (2026-09-14, ngay sau bản trên):** sau khi xem bản thu nhỏ ảnh, Ricky lại muốn ảnh lớn/ấn tượng trở lại — nhưng lần này theo hướng khác hẳn bản full-bleed gốc: nửa trái là khung nền đen, chuyển gradient dần sang ảnh gương mặt ở bên phải, nội dung nằm trong vùng đen đó với độ tương phản cao (chữ trắng trên nền đen) thay vì nằm đè trực tiếp lên ảnh — vẫn giữ đúng tinh thần "nội dung phải nổi bật" từ góp ý của bạn Ricky, chỉ đổi cách đạt được (tương phản mạnh thay vì ảnh nhỏ).

- Ảnh `object-position` chỉnh riêng theo từng breakpoint để mặt luôn rõ, không bị khung đen che — **đã sửa 2 lần theo phản hồi trực tiếp của Ricky** ("hình bị che nửa mặt", rồi "dịch qua thêm, mặt phải nằm chính giữa phần rõ"). Lần sửa thứ 2 phát hiện ra: ở màn hình rộng (≥1280px, chế độ width-constrained), toàn bộ chiều rộng ảnh gốc đã hiển thị đủ nên chỉnh `object-position` theo trục X **không còn tác dụng gì cả** — thứ thực sự cần chỉnh là độ rộng vùng gradient đen (thu hẹp điểm "trong suốt hoàn toàn" từ 85% xuống còn 50%). Ở màn hình hẹp hơn (1024-1279px, chế độ height-constrained), `object-position` vẫn có tác dụng nhưng bị giới hạn hình học (không đủ "khoảng trống" trong ảnh gốc để dịch mặt vào hẳn vùng rõ) — đã chấp nhận đây là điểm trung gian chưa hoàn hảo ở dải laptop hẹp, ưu tiên tối ưu cho dải rộng hơn (nơi Ricky thực sự đang xem).
- Gradient: `to_right` (đen bên trái → trong suốt bên phải) ở desktop/tablet, `to_top` (đen bên dưới → trong suốt bên trên) ở mobile — đổi hướng theo breakpoint vì bố cục mobile xếp dọc (ảnh lộ ra ở trên, nội dung ở khối đen bên dưới) thay vì xếp ngang.
- **Thêm mới `components/landing/CircuitPattern.js`** — hoạ tiết mạch điện/network chạy phía sau nội dung, tự vẽ bằng SVG thuần (không dùng thư viện/icon ngoài): các đường kẻ dạng mạch in (circuit trace) với hiệu ứng "dòng chảy" (`stroke-dashoffset` animate), cùng 4 icon tự vẽ theo đúng phong cách icon sẵn có của site (line-art, `stroke="currentColor"`, giống icon địa cầu ở `LocationBadge` và icon máy ảnh ở `Gallery`): **khiên bảo mật, ổ khoá, sóng wifi, chip điện tử** — đúng chủ đề Network/Cybersecurity theo yêu cầu, tự nhấp nháy nhẹ (opacity pulse) độc lập với đường mạch. Toàn bộ hoạ tiết để độ mờ rất thấp (~14%) để không cạnh tranh với nội dung, tắt hẳn animation khi bật Reduce Motion.
- **Nav overlay trong khung hero (chỉ ở trang Home)**: `components/Nav.js` thêm biến `isHome`/`overlay` — khi ở Home và chưa cuộn, header chuyển từ `sticky` (chiếm chỗ trong luồng layout như mọi trang khác) sang `fixed` (nổi đè lên Hero, không chiếm chỗ), nền trong suốt, chữ trắng — tạo cảm giác menu "nằm trong" khung hình đen của Hero đúng như yêu cầu. Khi cuộn quá 80px, hoặc ở bất kỳ trang nào khác ngoài Home, Nav giữ nguyên hành vi cũ (sticky, nền trắng, chữ đen) — **không đụng đến bất kỳ trang nào khác**, đã kiểm tra riêng trang `/about` để xác nhận không bị ảnh hưởng. Cố tình không chuyển đổi qua lại giữa `fixed`/`sticky` theo scroll ngay trên Home (chỉ đổi màu/nền) để tránh hiện tượng giật layout khi vừa cuộn qua ngưỡng 80px.
- Đã kiểm tra: lint/build sạch, 1 `h1` duy nhất, không lỗi console ở cả Home lẫn About, hiển thị đúng ở 1920px/1440px/mobile (390px), circuit pattern tắt animation đúng khi bật Reduce Motion, Nav chuyển đúng giữa trong suốt ⇄ trắng khi cuộn, trang About/Projects/Contact hoàn toàn không đổi.

**3 mục điều hướng cuối Hero chuyển thành cột dọc bên phải, có icon + hover nổi bật kiểu nút Gallery (2026-09-14, cùng chuỗi yêu cầu):** trước đó "Technical Projects / Resume / Photography" nằm thành 1 hàng ngang cuối Hero, chỉ có chữ. Ricky muốn dịch cả 3 qua hẳn bên phải, xếp dọc, có icon, hover nổi bật giống nút tròn Gallery, và thêm 1 vùng đen gradient từ ảnh sang bên phải để làm nền cho khu vực đó (tương tự khung đen bên trái nhưng ở phía đối diện).

- **Component mới `components/landing/HeroRoutes.js`** (`"use client"`) — tách riêng khỏi `LandingHero.js` vì cần state/interactivity (hover magnetic) mà Hero không cần. Mỗi mục có icon tự vẽ bằng SVG (cùng phong cách line-art với các icon khác của site, không dùng thư viện ngoài): **folder** (Technical Projects), **tài liệu/document** (Resume), **máy ảnh** (Photography, cùng kiểu với icon ở `Gallery.js`).
- **Hover "nổi bật giống nút Gallery"**: áp dụng đúng kỹ thuật "magnetic hover" đã có ở `CircleButton.js`/`Gallery.js` (bám nhẹ theo chuột khi rê gần, `translate` + `scale(1.05)`, tự tắt khi bật Reduce Motion) cho từng mục — thay vì chỉ đổi màu chữ như link thường. Thêm nền pill (`hover:bg-dark-text/10`) hiện ra sau icon+chữ khi hover để tăng độ nổi bật.
- Gradient của Hero mở rộng thêm 2 điểm dừng mới để tạo vùng đen thứ 2 ở bên phải: `black 0% → black 32% → trong suốt 50%-64% (vùng mặt hiện rõ) → black 84%-100%` (vùng chứa cột điều hướng mới) — ảnh giờ nằm "kẹp giữa" 2 khung đen (trái: nội dung chính, phải: điều hướng), đúng ý yêu cầu.
- Bố cục: `HeroRoutes` là con trực tiếp của `<section>` Hero (không lồng trong khối nội dung có padding) — mobile: xếp dọc bình thường trong luồng trang (xuất hiện sau các pill chứng chỉ, đúng thứ tự đọc từ trên xuống); desktop (`sm:` trở lên): `position:absolute`, `inset-y-0 right-0`, canh giữa theo chiều dọc, không chiếm chỗ trong layout — cùng kỹ thuật overlay đã dùng cho Nav.
- Đã kiểm tra: lint/build sạch, không có link trùng lặp trong DOM (đếm được đúng 3 link "01/02/03" trong Hero, tách biệt với link cùng tên ở Nav), hiệu ứng magnetic tắt đúng khi bật Reduce Motion (`transform` rỗng sau hover), hiển thị đúng ở 2000px/1440px/1024px/mobile.

---

## C2. Home — chuyển hẳn sang Card Slider 3D (2026-09-15) — **THAY ĐỔI KIẾN TRÚC LỚN**

Ricky nhận góp ý và muốn đổi hẳn cách trình bày Home: thay vì cuộn dọc qua từng section (Hero → giới thiệu → preview Projects → preview Photography → CTA liên hệ) như mô tả ở mục C phía trên, Home giờ là **5 "card" toàn màn hình, trượt ngang qua lại** kiểu hiệu ứng khối lập phương 3D, nền đen toàn bộ:

1. Home (Hero — giữ nguyên ảnh + gradient + hoạ tiết mạch điện đã làm)
2. Projects (rút gọn, có nút "View all projects" → `/projects`)
3. Photography (rút gọn, có nút "View photography" → `/photography`)
4. About (**card hoàn toàn mới**, có nút "View full background" → `/about`)
5. Contact (giữ nguyên, không cần nút "View more" vì đã đủ ngắn gọn)

**Quyết định phạm vi quan trọng** (đã hỏi Ricky trước khi làm, tránh đoán sai làm lại từ đầu): các trang con `/about`, `/projects`, `/photography`, `/contact` **giữ nguyên 100%, không đụng vào** — chúng vẫn là nơi chứa đầy đủ chi tiết (Experience/Skills/Certs/Education, toàn bộ danh sách project, câu chuyện + Gallery 21+25 ảnh...). Mỗi card trên Home chỉ là **bản tóm tắt/preview**, có nút "View more" dẫn sang trang đầy đủ cho các card nhiều thông tin (Projects/Photography/About); Home và Contact không cần vì đã đủ ngắn.

**Đã làm:**
- **`components/landing/CardSlider.js`** (mới) — cơ chế trượt 3D kiểu khối lập phương: dùng CSS `perspective` + `transform-style: preserve-3d`, mỗi card xoay `rotateY(offset * 90deg) translateZ(50vw)` (offset = vị trí card trừ card đang active). Card đang active có offset=0 nên đứng thẳng nhìn chính diện; 2 card liền kề xoay 90 độ nằm ở 2 "mặt bên" của khối lập phương, sẵn sàng xoay vào khi chuyển slide.
  - **Lỗi toán học gặp phải lúc đầu**: card active bị phóng to/méo bất thường (như đang zoom sát mặt). Nguyên nhân: `translateZ(50vw)` đẩy card active ra phía trước (gần camera hơn) dù `rotateY(0deg)` — thiếu bước "kéo lùi cả khối" lại. Sửa bằng cách thêm `transform: translateZ(-50vw)` cho toàn bộ container cha (kỹ thuật chuẩn khi làm 3D cube gallery: mỗi mặt tự đẩy ra theo trục Z cục bộ của nó, container mẹ phải lùi lại đúng bằng bán kính để mặt trước nằm đúng vị trí "phẳng" ban đầu).
  - Điều khiển: nút mũi tên trái/phải, chấm tròn chỉ số (dot indicator) ở dưới cùng, phím mũi tên trái/phải bàn phím, cuộn chuột (chuyển bánh xe dọc thành chuyển slide ngang, có khoá 700ms tránh trượt qua nhiều slide 1 lần), và vuốt chạm thật trên di động (dùng cơ chế chạm tự viết — theo dõi toạ độ X lúc bắt đầu/kết thúc chạm, vuốt quá 60px thì chuyển slide).
  - Card không active được gắn `inert` + `aria-hidden` để người dùng bàn phím không lỡ Tab vào link/nút ẩn (Next.js/React 19 hỗ trợ thuộc tính `inert` trực tiếp — lưu ý: phải truyền `inert={boolean}`, **không** truyền chuỗi rỗng `inert=""` vì React sẽ cảnh báo và coi là `false`).
  - Tự tắt hiệu ứng xoay 3D khi bật Reduce Motion (`transition: none` trên `.cube-face`) — vẫn chuyển slide được, chỉ là chuyển ngay lập tức không có animation.
- **Bỏ Nav (thanh menu) hoàn toàn khỏi Home**: Ricky nói "nếu đã dùng kiểu này thì không cần nav menu" vì bản thân slider đã là điều hướng. `components/Nav.js` thêm `if (pathname === "/") return null;` — **chỉ ẩn ở Home**, các trang `/about /projects /photography /contact` vẫn hiện Nav bình thường để có đường quay lại/đi các trang khác. Đã bỏ luôn phần logic "overlay trong suốt" đã làm ở mục C phía trên vì không còn cần thiết (Nav không còn render trên Home nữa).
- **Component mới `components/landing/AboutPreview.js`** — card tóm tắt About: câu giới thiệu ngắn (lấy lại từ `IntroStatement.js` cũ), vai trò gần nhất + học vấn (2 cột), nút "View full background". **Lưu ý tính chính xác**: ban đầu định ghi nhãn vai trò gần nhất là "Currently" (hiện tại) — nhưng vai trò đó (DIGI-TEXX, 2021-2023) đã kết thúc, Ricky hiện đang đi tìm việc chứ không phải đang làm ở đó. Đã sửa thành "Most recent role" để không nói sai sự thật.
- **`ProjectsPreview.js` / `PhotographyPreview.js` / `ContactCTA.js`**: đổi nền từ `bg-paper` (sáng) / `bg-dark` sang `bg-black` thuần, chữ sang tông `dark-text`, thêm `h-full flex flex-col justify-center` để vừa khít 1 "card". `ProjectsPreview` bỏ phần "Other Projects" khỏi card (chỉ giữ 4 project chính) vì nút "View more" đã dẫn sang trang đầy đủ.
- **`IntroStatement.js` không còn dùng ở Home** — nội dung đã chuyển vào `AboutPreview.js`, file gốc vẫn giữ (không dùng ở đâu khác), theo đúng quy ước "giữ file phòng khi cần lại" đã dùng cho `ResumePreview.js`/`MarqueeText.js` trước đây.
- **`app/page.js`** viết lại hoàn toàn: bọc 5 card trong `<CardSlider>` thay vì render tuần tự như trước.
- Đã kiểm tra: lint/build sạch, không lỗi console; xác nhận bằng Playwright: Nav vắng mặt trên Home (đếm `<header>` = 0) nhưng vẫn hiện ở `/about` (= 1); chuyển slide đúng bằng nút mũi tên, chấm tròn, phím mũi tên bàn phím; vuốt chạm thật (giả lập qua CDP `Input.dispatchTouchEvent`, không phải giả lập bằng chuột vì không phản ánh đúng cử chỉ chạm) hoạt động đúng trên di động; slide cuối cùng tự ẩn nút "Next", slide đầu tự ẩn nút "Previous"; Reduce Motion tắt đúng animation xoay (`transitionDuration: 0s`) nhưng vẫn chuyển được slide.
- **Hạn chế đã biết, chưa tối ưu**: ở màn hình di động hẹp, một số card nhiều nội dung (Home với đủ 3 mục điều hướng có icon, Projects với 4 project) hơi vượt quá 1 màn hình — đã có `overflow-y-auto` để cuộn được bên trong card nên không bị vỡ layout, nhưng chưa thật sự "gọn đúng 1 màn hình không cuộn" như tinh thần ban đầu. Có thể cần giảm khoảng cách/cỡ chữ trên mobile nếu Ricky muốn hoàn thiện thêm.

**Cards thu nhỏ thành "cửa sổ" nổi giữa nền đen (2026-09-15, cùng ngày):** Ricky gửi 1 video quay màn hình 1 portfolio khác (dùng ffmpeg tách khung hình từ file `.MOV` để xem, vì tool đọc file không đọc trực tiếp được video) làm ví dụ — card ở đó không phủ kín màn hình mà là 1 "cửa sổ" bo góc, có đổ bóng, nằm giữa nền đen, thấy rõ khoảng đen xung quanh, card kế bên hé lộ một phần lúc xoay 3D.

- Đổi cấu trúc `CardSlider.js`: thêm 1 "stage" chứa cube nhỏ hơn hẳn viewport (`w-[90vw] max-w-[1300px] h-[80vh] max-h-[760px]`, canh giữa màn hình đen full-bleed) thay vì để mỗi card phủ kín `100vw x 100dvh` như bản đầu. Bán kính `translateZ` của khối lập phương đổi theo tương ứng (`45vw` thay vì `50vw`, ăn khớp với kích thước stage mới).
- Mỗi card thêm `rounded-2xl` + viền mờ (`border-dark-text/10`) + đổ bóng đậm (`shadow-[0_40px_100px_rgba(0,0,0,0.65)]`) — viền mờ đặc biệt cần thiết vì các card đều nền đen thuần, không có viền thì ranh giới "cửa sổ" so với nền đen phía sau gần như vô hình (đã tự phát hiện vấn đề này khi chụp thử card Projects — sau đó mới thêm viền).
- Đã kiểm tra lại toàn bộ sau khi đổi kích thước: lint/build sạch, Nav vẫn vắng mặt đúng ở Home/hiện đúng ở `/about`, chuyển slide bằng nút/phím/cuộn/vuốt chạm đều hoạt động, Reduce Motion vẫn tắt đúng animation xoay.

---

## C3. Home — viết lại `CardSlider.js` thành coverflow liên tục thay vì khối lập phương rời rạc (2026-09-15, cùng ngày) — **THAY ĐỔI KIẾN TRÚC LỚN LẦN 2**

Ricky gửi 1 bản đặc tả rất chi tiết (bằng tiếng Anh, dài, có code mẫu) yêu cầu bỏ hẳn kiểu "xoay khối lập phương rời rạc" (nhảy thẳng giữa 2 trạng thái 0°/90°) đã làm ở mục C2, thay bằng 1 hệ thống **liên tục theo vị trí** kiểu "coverflow": mọi thuộc tính hình ảnh của mọi card (vị trí ngang, độ phóng to, góc xoay, độ mờ, độ sáng, độ nhoè, z-index) đều được tính liên tục từ khoảng cách của card đó tới vị trí đang xem — không có bước nhảy trạng thái đột ngột nào, kể cả khi đang kéo/cuộn dở dang.

**Đã làm — viết lại hoàn toàn `CardSlider.js`:**
- Thay biến `active` (số nguyên, rời rạc) bằng `position` (số thực liên tục) — ví dụ `position = 1.37` nghĩa là đang ở giữa card 1 và card 2, lệch 37%.
- Với mỗi card, tính `relative = index - position`, `distance = |relative|`, rồi suy ra toàn bộ style bằng nội suy tuyến tính (hàm `lerp`): `translateX = relative * 58vw`, `scale` từ 1 (ở giữa) giảm dần còn ~0.88 khi cách 1 card, `rotateY` từ 0° tăng dần tới ~8° nghiêng theo hướng ngược lại của `relative`, `opacity`/`brightness`/`blur` cũng giảm dần liên tục theo `distance` — card càng xa trung tâm càng mờ, tối, nhoè, nhỏ, nghiêng — không có ngưỡng nhảy bậc nào.
- **3 cách tương tác đều cập nhật `position` liên tục theo thời gian thực** thay vì nhảy thẳng:
  - Cuộn chuột (wheel): cộng dồn `deltaY` vào `position` mỗi lần cuộn, có khoá debounce 160ms — hết 160ms không cuộn nữa mới "chốt" (snap) về số nguyên gần nhất.
  - Kéo chuột / vuốt chạm (drag): dùng chung 1 cơ chế Pointer Events cho cả chuột lẫn cảm ứng — bám theo đúng vị trí con trỏ/ngón tay theo thời gian thực trong lúc kéo (không có độ trễ), chỉ "chốt" về số nguyên gần nhất khi thả tay.
  - Phím mũi tên / nút bấm / chấm tròn: chốt thẳng tới vị trí đích, có transition mượt (dùng `var(--ease-out)` đã có sẵn của dự án — đường cong "vào nhanh, dừng êm" đúng như Ricky mô tả).
- Trong lúc đang kéo/cuộn dở dang, tắt hẳn CSS `transition` (để bám sát input tức thời, không lag); chỉ bật lại `transition` sau khi buông tay/cuộn xong để có hiệu ứng "chốt" mượt vào vị trí cuối.
- Reduce Motion: tắt hẳn hiệu ứng `perspective`/xoay/mờ/nhoè (rơi thẳng về trạng thái phẳng, không nội suy) — vẫn chuyển được card bình thường qua mọi cách tương tác.

**2 lỗi thật gặp phải trong lúc làm, cả hai đều phát hiện qua kiểm tra kỹ chứ không phải đoán:**

1. **`react-hooks/set-state-in-effect`** khi phát hiện Reduce Motion lúc mount — cùng dạng lỗi đã gặp 2 lần trước trong dự án (ở `IntroSplash.js`), sửa bằng đúng kỹ thuật cũ: lùi lần gọi `setState` đầu tiên vào trong `setTimeout(...,0)` thay vì gọi thẳng trong thân effect.

2. **Bug thật khá tinh vi: kéo chuột bị "huỷ" (`pointercancel`) ngay sau bước di chuyển đầu tiên, chỉ khi bắt đầu kéo từ đúng vị trí các nút "Technical Projects/Resume/Photography" (`HeroRoutes.js`) hoặc nút tròn CTA (`CircleButton.js`).**
   - Quá trình tìm nguyên nhân: ban đầu nghi ngờ do `setPointerCapture`, do cấu trúc CSS 3D (`perspective`/`transform`/`overflow-y-auto` lồng nhau) — đã tạo 1 trang HTML tĩnh cô lập y hệt cấu trúc CSS để loại trừ, kết quả trang tĩnh chạy hoàn hảo → xác nhận không phải do CSS. Tiếp tục thu hẹp bằng cách kéo chuột bắt đầu ở các toạ độ khác nhau trên cùng 1 card → phát hiện: kéo bắt đầu ở vùng ảnh/nội dung thường thì chạy tốt, kéo bắt đầu đúng trên các nút có hiệu ứng "bám chuột" (magnetic hover, đã làm ở `CircleButton.js`/`HeroRoutes.js` từ trước) thì luôn bị huỷ.
   - **Nguyên nhân thật**: các nút magnetic-hover có `onMouseMove` riêng, tự gán `el.style.transform` để tạo hiệu ứng bám chuột — khi đang kéo cả slider (cũng liên tục ghi đè `transform` của card cha qua state React), 2 nơi cùng lúc chỉnh `transform` trên 2 phần tử lồng nhau theo cùng 1 sự kiện di chuột khiến Chromium huỷ hẳn phiên con trỏ (`pointercancel`) — hành vi này xảy ra thật ở trình duyệt thật (đã xác nhận bằng addEventListener thuần, không qua React), không phải lỗi riêng của công cụ test.
   - **Cách sửa**: thêm 1 dòng chặn ở đầu `handleMouseMove` của cả `CircleButton.js` và `HeroRoutes.js`: bỏ qua nếu `e.buttons !== 0` (đang giữ chuột — tức đang kéo/click dở, không phải đang "hover" thông thường) — hiệu ứng bám chuột vốn chỉ có ý nghĩa khi rê chuột không bấm gì, nên chặn này không mất tính năng gì, chỉ tránh xung đột khi đang kéo.
- Đã kiểm tra lại toàn bộ sau khi sửa: lint/build sạch, kéo chuột bắt đầu ở bất kỳ đâu trên card (kể cả ngay trên nút) đều hoạt động đúng, nút "View full background"/"View all projects" bấm được sau khi chuyển card bằng kéo, cuộn chuột nhiều nấc chuyển đúng slide, vuốt chạm thật trên di động (giả lập qua CDP) hoạt động đúng, Nav vẫn vắng mặt ở Home/hiện đúng ở các trang khác, Reduce Motion tắt đúng hiệu ứng nhưng vẫn điều hướng được.

---

## C4. Home — 6 tinh chỉnh giao diện cho CardSlider (2026-09-15, cùng ngày)

Ricky gửi 6 góp ý cụ thể sau khi xem bản coverflow liên tục. Đã làm từng mục:

1. **Nền và card trùng màu đen** → đổi nền ngoài cùng của `CardSlider.js` từ `bg-black` sang `bg-[#222225]` (xám đen), giữ nguyên các card màu đen thuần — giờ phân biệt rõ ranh giới "cửa sổ" với nền phía sau ngay cả khi không hover.
2. **Viền card quá mỏng** → tăng từ `border` (1px, 10% opacity) lên `border-2` (2px, 30% opacity).
3. **Mũi tên trái/phải quá nhỏ, không nổi bật** → bọc trong 1 vòng tròn có viền + nền mờ (`bg-black/30`, `border-dark-text/25`), khi hover phóng to (`hover:scale-110`) và chuyển nền sang màu xanh accent (`hover:bg-accent`).
4. **3 nút Technical Projects/Resume/Photography quá nhỏ** → viết lại `HeroRoutes.js`: đổi bố cục từ xếp dọc (icon trên, chữ dưới) sang dạng thanh ngang (icon trái, chữ phải) rõ ràng là 1 button — có viền, nền mờ, bo góc. Hover chuyển nền sang xanh dương (`bg-accent`) bằng hiệu ứng "cửa sổ mở ra": 1 lớp phủ màu xanh nằm sẵn bên trong nút ở trạng thái `scale-x-0` (thu về 0 bề rộng, neo bên trái), khi hover phóng ra `scale-x-100` như rèm/cửa kéo mở từ trái sang phải. Đồng thời bỏ đoạn gradient đen thứ 2 ở phía phải Hero (không cần nữa vì bản thân nút đã có nền riêng đủ tương phản) và đổi nhãn "Resume" thành "About" (href vẫn `/about`).
5. **Câu giới thiệu không nên nói "đang tìm việc full-time"** → sửa `profile.tagline` trong `data/profile.js` từ "...seeking full-time Network, IT Support or Helpdesk roles in Australia" thành câu chung chung hơn: "Master of IT graduate specialising in Network and Cybersecurity, based in Adelaide, Australia." (dùng chung cho cả Hero và thẻ meta description ở `layout.js`).
6. **Thêm timeline ở cuối trang với các cột mốc Home/Technical Projects/Photography/About/Get in touch** → thay hẳn hàng chấm tròn đơn giản trước đó bằng 1 timeline có đường kẻ ngang nối liền + node tại mỗi card + nhãn tên bên dưới (ẩn nhãn ở mobile, chỉ còn chấm+đường kẻ cho gọn). `CardSlider.js` nhận thêm prop `labels`, `app/page.js` truyền vào `["Home", "Technical Projects", "Photography", "About", "Get in touch"]`.

**Bug thật thứ 2 phát hiện trong lúc kiểm tra kỹ (khác với bug `pointercancel` đã sửa trước đó):** sau khi làm nút "About"/"Technical Projects"/"Photography" to và rõ ràng hơn (mục 4), kéo chuột bắt đầu **ngay trên các nút này** lại không chuyển card được nữa dù không báo lỗi gì — khác với bug trước (không phải do 2 nơi cùng chỉnh `transform` nữa, vì đã có chặn `e.buttons !== 0`). Nguyên nhân lần này: thẻ `<a>`/`<Link>` trong trình duyệt (Chrome) **mặc định cho phép kéo-thả gốc** (native drag — kiểu kéo 1 link ra ngoài để tạo bookmark) — khi bắt đầu kéo đúng trên 1 link, trình duyệt hiểu nhầm thành đang kéo-thả cái link đó thay vì tiếp tục gửi sự kiện con trỏ cho slider, nên sự kiện `pointermove` ngừng hẳn (không có `pointercancel`, không có lỗi — chỉ đơn giản là các sự kiện không tới nữa). **Cách sửa**: thêm `draggable={false}` vào các thẻ `Link`/`a` ở `HeroRoutes.js` và `CircleButton.js` để tắt hẳn hành vi kéo-thả gốc của trình duyệt trên các phần tử này.
- Đã kiểm tra lại: lint/build sạch, kéo chuột với khoảng cách lớn bắt đầu chính xác trên nút "About" (đo toạ độ thật bằng `getBoundingClientRect`) chuyển card đúng, không lỗi console; Reduce Motion, Nav vắng/hiện đúng theo trang, vuốt chạm di động vẫn hoạt động bình thường sau khi sửa.

---

## C5. Nền động dạng mạng lưới network/cyber phía sau các card (2026-09-15, cùng ngày)

Ricky thấy nền xám đen đặc (`bg-[#222225]`) hơi nhàm chán, muốn có hoạ tiết chuyển động liên quan đến cyber/network và yêu cầu rõ "phải thật đẹp".

**Đã làm — `components/landing/NetworkBackground.js` (mới)**: nền động dạng lưới mạng vẽ bằng `<canvas>` thuần (không dùng thư viện ngoài như particles.js):
- Các "node" (chấm tròn nhỏ) trôi chậm, ngẫu nhiên, dội ngược lại khi chạm biên màn hình — số lượng node co giãn theo kích thước màn hình (34 ở mobile, 55 tablet, 75 desktop) để không nặng máy ở điện thoại.
- Node nào đủ gần nhau tự động nối bằng 1 đường kẻ mờ, độ đậm giảm dần theo khoảng cách — đúng hiệu ứng "mạng lưới" kinh điển.
- Thỉnh thoảng sinh ra 1 "gói tin" (chấm sáng màu xanh accent của site, có glow) chạy dọc theo 1 đường nối ngẫu nhiên rồi biến mất — mô phỏng dữ liệu di chuyển qua mạng, đúng tinh thần "cyber/network".
- Thêm 1 lớp phủ gradient hình tròn (`radial-gradient`) ở giữa để hoạ tiết mờ dần ra 2 bên/góc màn hình, không cạnh tranh thị giác với các card ở giữa — card vẫn luôn là tâm điểm.
- Tự tạm dừng hẳn animation khi tab trình duyệt không hiển thị (`document.visibilitychange`) để tiết kiệm pin/CPU, và tắt hẳn chuyển động khi bật Reduce Motion (chỉ vẽ 1 khung hình tĩnh — node+đường nối, không có gói tin chạy — thay vì animate liên tục).
- Đặt `pointer-events-none` nên không ảnh hưởng gì đến việc kéo/vuốt/bấm nút của slider.
- Đã kiểm tra: lint/build sạch, canvas vẽ đúng kích thước theo viewport, xác nhận animation thực sự chuyển động (so sánh 2 khung hình cách nhau 1.5s, thấy rõ gói tin xanh di chuyển + node đổi vị trí), Reduce Motion đứng yên đúng, hiển thị tốt cả mobile, không lỗi console, không ảnh hưởng tương tác của slider.

---

## C6. Mũi tên trái/phải đổi theo đúng phong cách nút Gallery (2026-09-15, cùng ngày)

Ricky muốn 2 nút điều hướng trái/phải của CardSlider trông và hoạt động giống hệt nút "Gallery" ở trang Photography (`components/photography/Gallery.js`) — vòng tròn to, có hiệu ứng pulse lan toả, bám nhẹ theo chuột (magnetic hover).

**Đã làm:**
- Áp dụng đúng 3 đặc điểm của nút Gallery cho 2 mũi tên: vòng pulse lan toả phía sau (`gallery-pulse`, dùng lại đúng class CSS đã có sẵn — không tạo mới vì bản chất là hiệu ứng chung, không riêng gì Gallery), phóng to nhẹ khi hover (`group-hover:scale-105`), và bám theo chuột (magnetic hover) khi rê gần — dùng đúng công thức tính offset đã dùng ở `CircleButton.js`/`Gallery.js`/`HeroRoutes.js`.
- Kích thước tăng từ `h-12 w-12` lên `h-16 w-16 sm:h-20 sm:w-20` (nhỏ hơn nút Gallery gốc `h-24/h-28` một chút vì đây là 2 nút điều hướng luôn hiện diện trên mọi card, không phải 1 nút gọi-hành-động đơn lẻ — giữ tỷ lệ hợp lý hơn nếu để full size).
- Đổi từ cách ẩn bằng `disabled:opacity-0` sang **không render hẳn** nút khi đang ở slide đầu/cuối (thay vì chỉ làm mờ) — sạch hơn cho accessibility (không còn nút disabled lửng lơ trong tab order).
- **Lỗi lint mới gặp lần đầu trong dự án**: `react-hooks/refs` — không cho phép truyền thẳng 1 ref làm tham số của hàm ngay trong lúc render (kiểu `onMouseMove={handleMove(someRef)}`), dù ref đó chỉ thực sự được đọc bên trong hàm con (không đọc ngay lúc gọi). Sửa bằng cách viết 2 handler riêng biệt không nhận tham số (`handlePrevMouseMove`, `handleNextMouseMove`), mỗi hàm tự đóng gói đúng 1 ref của mình — khớp đúng cách `CircleButton.js`/`Gallery.js`/`HeroRoutes.js` đã làm từ trước (không truyền ref qua tham số hàm).
- Đã kiểm tra: lint/build sạch, nút trái vắng mặt đúng ở slide đầu, nút phải vắng mặt đúng ở slide cuối, hiệu ứng bám chuột hoạt động đúng (so sánh ảnh chụp trước/sau khi rê chuột lệch tâm), pulse tắt đúng khi bật Reduce Motion nhưng vẫn điều hướng được bình thường, không lỗi console.

---

## C7. Ảnh thật cho card Photography + đổi toàn bộ nút CTA từ hình tròn sang chữ nhật bo góc (2026-09-15, cùng ngày)

**Ảnh Photography**: Ricky gửi `Photocard.jpg` (ảnh phong cảnh đồng quê Nam Úc lúc hoàng hôn, con đường xuyên cánh đồng, hàng rào 2 bên, bầu trời chuyển màu xanh-hồng-vàng rất đẹp — ảnh gốc 7008×4117px, ~16MB) yêu cầu dùng cho card Photography, "phải thật đẹp và chuyên nghiệp".
- Xử lý ảnh theo đúng quy trình đã thiết lập: xoay theo EXIF, resize xuống 2200px cạnh dài, nén WebP chất lượng 88 → còn ~320KB, lưu tại `public/photos/photography-card.webp`, xoá ảnh gốc khỏi thư mục dự án.
- Viết lại `PhotographyPreview.js` theo đúng kỹ thuật đã dùng cho Hero: ảnh phủ toàn bộ card (`fill` + `object-cover`), gradient đen từ trái (giữ vùng chữ dễ đọc) tận dụng đúng vùng trời tối tự nhiên bên trái của ảnh gốc — không cần làm tối nhân tạo nhiều, giữ được màu hoàng hôn ấm áp bên phải.

**Đổi nút CTA sang hình chữ nhật bo góc**: Ricky thấy các nút tròn ("View all projects", "View photography"...) không đủ nổi bật, muốn đổi thành nút chữ nhật bo góc, nằm ở cuối mỗi card, nổi bật hơn.
- **Component mới `components/landing/PillButton.js`** — không sửa trực tiếp `CircleButton.js` vì component đó vẫn đang dùng ở trang `/photography` thật (nút tròn "Explore Memory Lane" chưa ai yêu cầu đổi) — tách riêng để không ảnh hưởng ngoài ý muốn. `PillButton` giữ đúng hiệu ứng bám chuột (magnetic hover) đã dùng ở `CircleButton`, nhưng đổi hình dạng: `rounded-2xl`, chữ đậm cỡ lớn, có mũi tên hiện ra khi hover, đổ bóng đậm để nổi hẳn trên nền đen.
- Màu sắc phân cấp rõ: 3 nút "xem thêm" (Projects/Photography/About) dùng nền trắng ngà (`bg-dark-text`) + chữ đen — tương phản mạnh nhất có thể trên nền đen của card; riêng nút "Get in touch" ở card Contact giữ màu xanh accent (`variant="accent"`) để vẫn là điểm nhấn khác biệt, đúng vai trò lời gọi hành động chính của cả trải nghiệm.
- Bố cục lại 4 card (`ProjectsPreview.js`, `PhotographyPreview.js`, `AboutPreview.js`, `ContactCTA.js`): tách nút ra khỏi khối nội dung chính, đặt ở 1 hàng riêng dưới cùng (dùng `flex-1` cho khối nội dung để tự đẩy phần nút xuống đúng đáy card) — đúng yêu cầu "nằm ở bottom của card" thay vì chỉ "nằm sau đoạn văn bản, tình cờ gần cuối".
- Đã kiểm tra: lint/build sạch, cả 4 nút hiển thị đúng vị trí/màu trên từng card, link đích đúng (`/projects`, `/photography`, `/about`, `mailto:`), không lỗi console, hiển thị tốt trên mobile (nút vẫn có thể cuộn tới được dù card hơi nhiều nội dung — hạn chế mobile đã ghi nhận từ trước, không phải lỗi mới).

---

## C8. Sửa lỗi khuôn mặt bị che ở card Home tuỳ theo tỉ lệ màn hình (2026-09-16) — ✅ Xong

Ricky báo: ở các tỉ lệ màn hình khác nhau, card Home bị lệch và che mất khuôn mặt; yêu cầu dịch vùng crop ảnh chân dung lệch hẳn về bên phải để giảm rủi ro.

**Nguyên nhân gốc**: className của `.cover-card` trong `CardSlider.js` là `h-[78vh] max-h-[760px] w-[68vw] max-w-[980px]` — tỉ lệ khung hình thực tế của card thay đổi tuỳ theo việc vh/max-h hay vw/max-w đang là giới hạn "chặn" tại một kích thước màn hình cụ thể. `object-fit: cover` tính `scale = max(Cw/Sw, Ch/Sh)`; khi tỉ lệ khung (Ca = Cw/Ch) ≥ tỉ lệ ảnh gốc (Sa = Sw/Sh), khung bị "chặn theo chiều rộng" và `object-position` trục X **hoàn toàn không có tác dụng** (chỉ trục Y có tác dụng); ngược lại khi Ca < Sa thì chặn theo chiều cao và chỉ trục X có tác dụng. Vì kích thước card không cố định, quy tắc này "lật" qua lại một cách khó đoán tuỳ hình dạng màn hình — đúng như hiện tượng Ricky mô tả.

**Cách sửa duy nhất triệt để**: khoá khung hình card về một tỉ lệ CỐ ĐỊNH, nhỏ hơn tỉ lệ ảnh gốc — đảm bảo luôn ở chế độ "chặn theo chiều cao" (trục X luôn có tác dụng) ở mọi kích thước màn hình.

- `CardSlider.js`: thêm `sm:h-auto sm:aspect-[8/5]` vào `.cover-card` — khoá tỉ lệ 1.6 (nhỏ hơn tỉ lệ ảnh hero gốc 1.778) từ breakpoint `sm:` trở lên.
- `LandingHero.js`: gộp `object-[50%_20%] sm:object-[85%_20%] lg:object-[95%_15%]` thành 1 mức duy nhất `sm:object-[100%_25%]` (không cần chia nhỏ theo `lg:`/`xl:` nữa vì tỉ lệ card giờ cố định) — đẩy X lên mức tối đa 100% theo đúng yêu cầu "lệch hẳn về bên phải"; đồng thời siết gradient từ `black_32%, transparent_55%` xuống `black_28%, transparent_48%` để bù lại việc card khung cố định có ít "khoảng trống" ngang hơn để dịch chuyển vùng crop so với trước.
- Đã kiểm tra bằng Playwright trên **6 tỉ lệ màn hình khác nhau** cố ý chọn để bao trùm cả 2 chế độ lỗi cũ: 1440×900, 1920×1080, 2560×1080 (siêu rộng/thấp), 1280×1024 (gần vuông), 1366×768, 1024×1366 (dọc, iPad) — khuôn mặt hiển thị rõ ràng, đúng vị trí ở cả 6 trường hợp.
- Regression check: lint/build sạch; reduced-motion vẫn đúng (card Home tĩnh, không lỗi); cuộn qua đủ cả 5 card (Home/Technical Projects/Photography/About/Get in touch) — card Photography (cũng dùng ảnh nền + `object-position` riêng) không bị ảnh hưởng bởi tỉ lệ khung mới; 3 card chữ (Projects/About/Contact) không bị tràn nội dung do đổi chiều cao.

**Phát hiện thêm (chưa sửa, không thuộc phạm vi yêu cầu lần này)**: Ở độ rộng điện thoại (dưới breakpoint `sm:`, ví dụ 400px), card Home vẫn dùng công thức kích thước động cũ (`h-[78vh] w-[68vw]`, chưa có bản `sm:` ghi đè) nên card rất hẹp/cao. Tuy nhiên nguyên nhân khuôn mặt khó thấy trên mobile **không phải** do lỗi "lật chế độ" nói trên (đã kiểm chứng: toàn bộ chiều cao ảnh vẫn hiển thị đúng), mà do gradient tối dành riêng cho mobile (`to_top, black 0%→68%`) kết hợp với card khá thấp khiến phần lớn ảnh bị phủ đen để chữ dễ đọc — đây là hành vi đã có từ trước, không bị ảnh hưởng bởi lần sửa này. Nếu Ricky muốn khuôn mặt rõ hơn cả trên điện thoại, sẽ cần chỉnh riêng layout/gradient mobile (việc riêng, chưa làm).

---

## D. Trang Photography — ✅ Xong (2026-09-14)

Ricky cung cấp 1 file Word (`story/story.docx`, đã xoá sau khi xử lý xong) kể câu chuyện nhiếp ảnh của mình bằng tiếng Việt, chú thích ảnh bằng `[số]`, cùng 21 ảnh (15 ảnh đánh số `[1]`-`[15]` theo câu chuyện + 6 ảnh phong cảnh đồng quê Adelaide không đánh số, Ricky cho phép tự viết thêm 1 đoạn cho nhóm ảnh này).

**Đã làm:**
- Viết lại toàn bộ câu chuyện bằng tiếng Anh, chau chuốt hơn, chia thành 6 phần theo dòng thời gian: (01) mua máy ảnh đầu tiên 2012 → (02) học cách nhìn + câu nói của bà ngoại → (03) chụp đám cưới/chân dung cho bạn bè → (04) đặt chân đến Úc 2018 → (05) đồng sáng lập Memory Lane Photography với Mark Lee → (06) *phần tự viết thêm*: những chuyến đi cuối tuần quanh Adelaide, dùng 6 ảnh phong cảnh không đánh số.
- Xử lý 21 ảnh: chỉnh hướng xoay theo EXIF, resize, nén WebP — tổng dung lượng từ hơn 200MB gốc xuống còn **4.1MB**, lưu tại `public/photos/photography/` (`photo1`-`photo15`, `trip1`-`trip6`).
- Xây `app/photography/page.js` hoàn toàn mới, dùng đúng token thiết kế editorial của Home (`bg-paper`, `text-ink`, `text-muted`, `Reveal` cho hiệu ứng cuộn) — **là trang con đầu tiên được đồng bộ theo phong cách mới**, không phải "coming soon" nữa.
- Component mới: `components/photography/StoryPhoto.js` (ảnh + chú thích dùng chung).
- Bố cục ảnh: đơn lẻ vừa phải cho các mốc chính, lưới 2x2 cho nhóm ảnh đám cưới, lưới 2 cột cho portrait/Úc/Memory Lane — theo đúng yêu cầu "không to quá không nhỏ quá".
- Cập nhật câu giới thiệu Photography ở Home (bỏ "coming soon").
- Đã kiểm tra: lint/build sạch, 21/21 ảnh tải đúng (xác nhận sau khi cuộn qua, tránh nhầm lẫn do lazy-load), 1 h1 duy nhất, 0 lỗi console, reduced motion hoạt động đúng, mobile hiển thị tốt.
- Đã xoá thư mục `story/` (ảnh gốc + docx) sau khi xử lý xong — không giữ file thô nặng trong repo, đúng quy trình đã thống nhất từ trước.
- **Viết lại lần 2 theo yêu cầu "humanize"**: Ricky gửi bộ nguyên tắc phát hiện văn phong AI (tài liệu Wikipedia WP:AITELL) và yêu cầu áp dụng cho toàn bộ nội dung vừa viết. Đã lưu thành memory `humanizer` (áp dụng cho mọi nội dung dài viết sau này, không chỉ trang này) và viết lại câu chuyện: bỏ các dấu hiệu văn AI (từ vựng sáo rỗng như "underscore/testament/vibrant", câu đối lập kiểu "not just X but Y", liệt kê 3 vế ép buộc, gạch ngang em-dash lặp lại, thay is/was bằng serves as/stands as...) — giữ nguyên nghĩa và sự kiện, không thêm thông tin mới. Câu nói của bà ngoại (trích dẫn trực tiếp) giữ nguyên không đổi.

**Việc còn lại:** Ricky sẽ tạo các project riêng trong mục nhiếp ảnh sau (không phải bây giờ). Câu chuyện tiếng Anh đã gửi kèm bản dịch tiếng Việt cho Ricky xem lại (xem cuối cuộc trò chuyện lúc bàn giao).

**Thêm phần 07 — Champion Wildlife Print, Royal Adelaide Show 2026 (2026-09-16):** Ricky thả 3 ảnh mới vào `gallery-inbox/` (không phải để đưa vào Gallery cá nhân — lần này dùng cho STORY) và kể: ngày 5/9/2026 (ngày đầu Royal Adelaide Show), ảnh "Little Gull" của anh đoạt giải Champion Wildlife Print in Show — 1 cột mốc mới trong hành trình.

- 3 ảnh: ảnh gốc "Little Gull" (con mòng biển lúc hoàng hôn), ảnh cận cảnh ruy băng giải thưởng + nhãn triển lãm (ghi rõ tên Ricky), và ảnh Ricky đứng cạnh tác phẩm đoạt giải tại triển lãm.
- Ricky lưu ý: trước đây đôi khi giữ đúng tỷ lệ gốc làm bố cục không đẹp, lần này **cho phép crop tự do** để bố cục hợp lý hơn. Đã crop ảnh Ricky-đứng-tại-triển-lãm (gốc 5712×3213, rất rộng) — cắt bớt khoảng đen thừa 2 bên và bức ảnh thứ 3 gây phân tán ở rìa phải, giữ lại đúng Ricky + tác phẩm đoạt giải + ruy băng. Ảnh "Little Gull" và ảnh cận cảnh ruy băng giữ nguyên bố cục gốc (đã đẹp sẵn).
- Xử lý theo đúng quy trình cũ (EXIF-transpose, resize 2000px cạnh dài, nén WebP ~85), lưu thành `photo16/17/18.webp` (nối tiếp số thứ tự ảnh story hiện có), xoá ảnh gốc khỏi `gallery-inbox/`.
- Viết thêm mục "07 — September 2026: Champion Wildlife Print" vào cuối story (trước CTA đóng trang) — theo đúng văn phong "humanize" đã thống nhất: giữ đúng sự thật (ngày 5/9, tên giải, tên ảnh "Little Gull"), không tự bịa thêm chi tiết không xác nhận được (ví dụ không tự thêm "lần đầu tham gia cuộc thi" vì Ricky không nói rõ điều đó), giọng văn khiêm tốn/chân thật khớp với "tôi vinh dự được là champion" mà Ricky dùng, không phóng đại.
- Bố cục ảnh: ảnh "Little Gull" đặt lớn, nổi bật ngay sau đoạn văn (vì đây chính là tác phẩm đoạt giải); 2 ảnh còn lại (Ricky tại triển lãm + cận cảnh ruy băng) xếp cạnh nhau thành 1 hàng ngang bên dưới.
- Đã kiểm tra: lint/build sạch, cuộn qua toàn trang bằng script (đúng theo gotcha Reveal/IntersectionObserver đã ghi nhận trước đây, không dùng flag `--full-page` trần), cả 3 ảnh tải đúng không vỡ, đúng 1 `h1`, tính năng Gallery cá nhân (mục D2) không bị ảnh hưởng, hiển thị tốt cả mobile.

---

## D2. Gallery ảnh cá nhân trên trang Photography — ✅ Xong (2026-09-14)

Ricky muốn có 1 tag "Gallery" cạnh bên khi đọc story, ấn vào mở 1 cửa sổ riêng hiển thị ảnh anh tự chụp (khác với ảnh minh hoạ câu chuyện) — và muốn 1 quy trình để tự thêm ảnh mới về sau mà không cần sửa code mỗi lần.

**Đã làm:**
- `components/photography/Gallery.js` — nút tròn nổi "GALLERY" (icon máy ảnh + chữ đậm, có vòng pulse lan toả để thu hút mắt, hiệu ứng "magnetic" bám nhẹ theo chuột khi rê gần — dùng lại đúng kỹ thuật của `CircleButton.js`) ở cạnh phải màn hình, chỉ hiện trên trang `/photography`. **Bản đầu tiên chỉ là 1 tag chữ dọc nhỏ — Ricky phản hồi "quá nhỏ, không ai để ý", đã làm lại to/đậm/nổi bật hơn hẳn theo góp ý.** Ấn vào mở overlay toàn màn hình nền tối, ảnh trượt lên từ dưới (0.5s, dùng lại easing đã có), đóng bằng nút X / phím Esc / tự tắt khi bật Reduce Motion (đóng gần như tức thì thay vì chờ hết animation). Ảnh trong lưới hiện so le (stagger) khi mở.
- Lưới ảnh responsive: 2 cột (mobile) → 3 (tablet) → 4 cột (desktop), khung tỉ lệ 4:5 đồng đều dù ảnh gốc ngang/dọc khác nhau. Có trạng thái rỗng ("New photos will show up here soon.") khi chưa có ảnh nào.
- **Quy trình thêm ảnh cho Ricky**: folder `gallery-inbox/` ở thư mục gốc (có `README.md` hướng dẫn bằng tiếng Việt) — Ricky thả ảnh gốc vào đó, báo Claude (hoặc tự chạy `npm run gallery:process`), script `scripts/process_gallery.py` (Python + Pillow, cùng kỹ thuật đã dùng cho ảnh story: xoay theo EXIF, resize tối đa 2000px cạnh dài, nén WebP chất lượng 85) sẽ tự nén, lưu vào `public/photos/gallery/`, xoá ảnh gốc khỏi inbox, và tự viết lại `data/gallery.js` (file này có ghi chú "auto-generated, đừng sửa tay"). Ảnh sẽ tự xuất hiện trong Gallery, không cần đụng code. **Giới hạn cần biết:** ảnh định dạng HEIC (mặc định iPhone) chưa được hỗ trợ, cần export sang JPG/PNG trước.
- `gallery-inbox/*` được thêm vào `.gitignore` (chỉ giữ lại `README.md`) — không bao giờ commit ảnh gốc chưa nén.
- Ricky gửi 25 ảnh thật (chân dung, ảnh cưới chụp cho khách, phong cảnh) — đã xử lý bằng script, tổng dung lượng còn **3.6MB**. 2 file định dạng `.HIF` (Canon) lúc đầu bị script báo "unsupported, export sang JPG/PNG trước" (đã thêm log rõ ràng cho trường hợp này thay vì bỏ qua âm thầm) — Ricky tự export lại bằng JPEG rồi gửi lại, đã xử lý xong nốt 2 ảnh này.
- **Bug thật nghiêm trọng phát hiện khi kiểm tra 25 ảnh thật (không phải lỗi cache, không phải lỗi code của mình)**: khi mở Gallery, một số ảnh hiển thị sai — không phải ảnh thật mà là màu đặc (dấu vết ảnh test đã dùng lúc code). Đã mất khá nhiều bước loại trừ (xoá cache `.next`, restart dev server, so sánh byte-cho-byte file gốc vs. file server trả về — file gốc luôn đúng) mới xác định được: đây là **race condition thật bên trong bộ tối ưu ảnh tích hợp của Next.js (`/_next/image`)** — khi nhiều ảnh có CÙNG kích thước đầu ra (ví dụ nhiều ảnh cùng resize về đúng 384×288px) được request gần như đồng thời (đúng như khi mở 1 lưới Gallery nhiều ảnh cùng lúc), kết quả bị "lẫn" giữa các ảnh khác nhau. Đã xác nhận bug này **tái hiện cả ở bản production** (`next build && next start`), không phải chỉ lỗi riêng của `next dev` — nên nếu bỏ qua sẽ ảnh hưởng thật đến người dùng cuối trên bản deploy. Test từng ảnh riêng lẻ (không đồng thời) luôn cho kết quả đúng — xác nhận đúng là race condition do tải đồng thời, không phải ảnh bị hỏng.
  - **Cách sửa**: vì ảnh trong Gallery đã được script Python nén sẵn về kích thước hợp lý cho web (tối đa 2000px, WebP chất lượng 85) từ trước, không cần Next.js tối ưu lại lần nữa — thêm prop `unoptimized` vào `<Image>` trong `Gallery.js` để bỏ qua hẳn `/_next/image`, ảnh được phục vụ trực tiếp dạng file tĩnh. Vừa loại bỏ hoàn toàn race condition, vừa nhanh hơn (không tốn CPU server xử lý lại mỗi lần request).
  - Đã xác nhận hết bug bằng cách chạy lại đúng kịch bản gây lỗi (mở Gallery, tải đồng thời cả 25 ảnh) nhiều lần liên tiếp trên bản production fresh — 0/25 ảnh sai, lặp lại 3 lần đều sạch.
- **Bug thật phát hiện khi kiểm tra bằng Playwright** (không phải bug của riêng tính năng Gallery): `IntroSplash`, `Nav`, và `Gallery` đều tự ý gán thẳng `document.body.style.overflow` để khoá/mở cuộn trang — component nào chạy cleanup sau cùng sẽ "thắng" và ghi đè giá trị của component kia. Cụ thể: nếu người dùng ấn tag Gallery trong lúc intro splash vẫn đang chạy nốt hiệu ứng biến mất (trong ~2.1s đầu tiên), lúc intro splash dọn dẹp xong sẽ vô tình mở khoá cuộn trang dù Gallery vẫn đang mở. Sửa tận gốc bằng cách tạo `lib/scrollLock.js` — 1 bộ đếm dùng chung (`lockScroll()`/`unlockScroll()`), thay vì mỗi component tự gán trực tiếp; cả 3 nơi (`IntroSplash.js`, `Nav.js`, `Gallery.js`) đều đã chuyển sang dùng chung hàm này.
- Đã kiểm tra bằng Playwright: tag hiện đúng vị trí, ấn mở overlay đúng ảnh + đúng số lượng, khoá/mở cuộn trang chính xác (kể cả khi 2 overlay có thể chồng thời điểm), đóng được bằng cả 3 cách (X, Esc, đã test), hiển thị đúng mobile (390px), bỏ qua animation khi bật Reduce Motion. Đã test full quy trình xử lý ảnh bằng 1 ảnh giả (tạo — xử lý — kiểm tra hiển thị — xoá sạch dấu vết) để xác nhận script hoạt động đúng trước khi bàn giao; gallery hiện tại trống, sẵn sàng cho ảnh thật của Ricky. `npm run lint` và `npm run build` đều sạch.

---

## E. Các trang con còn lại (About/Projects/Contact) — ⏸️ Tạm dừng

Theo yêu cầu của bạn (2026-09-11): **không polish thêm** các trang `/about`, `/projects`, `/contact` cho đến khi bạn chủ động muốn làm chi tiết từng trang. Ghi chú để nhớ khi quay lại:

- Các trang này hiện dùng giao diện sáng/tối mặc định từ Milestone B, **chưa đồng bộ** token màu editorial (be/xám/đen) của Home mới — `/photography` đã đồng bộ (xem mục D), có thể dùng làm mẫu tham khảo khi làm các trang còn lại.
- `/projects` cần: nội dung đầy đủ cho từng project (mục đích, mô tả, hình ảnh) — bạn nói sẽ tự cung cấp ảnh sau, và mỗi project sẽ có trang riêng.
- `/contact` đã xong nội dung cơ bản, có thể chỉ cần đồng bộ style.
- `/about` đã đầy đủ nội dung, có thể chỉ cần đồng bộ style + rà lại theo hướng "Resume" nếu muốn khớp cách gọi ở Home.

---

## F. Vận hành / Deploy — ⬜ Chưa làm

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
| 2026-09-14 | Đổi font từ Geist sang General Sans (self-host qua Fontshare) |
| 2026-09-14 | Badge "Based in" làm lại to hơn, có icon địa cầu SVG tự xoay |
| 2026-09-14 | Headline "Network & IT Support Professional" đổi thành chữ trắng, to, nổi bật |
| 2026-09-14 | **Hero đổi cấu trúc lớn**: từ "ảnh nhỏ đứng giữa" sang "ảnh nền phủ toàn khung" dùng ảnh ngang thật của Ricky (không còn ảnh thử nghiệm) |
| 2026-09-14 | Thêm intro splash (màn hình chào đen, 1.5s, chỉ hiện 1 lần/phiên tab) trước khi vào Home |
| 2026-09-14 | Thêm Gallery ảnh cá nhân ở trang Photography, kèm quy trình `gallery-inbox/` + script nén ảnh tự động để Ricky tự thêm ảnh về sau |
| 2026-09-14 | Tạo `lib/scrollLock.js` dùng chung cho mọi overlay khoá cuộn trang (IntroSplash/Nav/Gallery) — tránh lỗi ghi đè lẫn nhau khi 2 overlay hoạt động cùng lúc |
| 2026-09-14 | Gallery ảnh dùng prop `unoptimized` trên `next/image` để né race condition thật trong bộ tối ưu ảnh của Next.js (xem mục D2) |
| 2026-09-14 | Hero bỏ layout ảnh full-bleed, ảnh thu nhỏ lại làm yếu tố phụ, ưu tiên headline/tagline/chứng chỉ lên trước — theo phản hồi từ bạn của Ricky rằng ảnh mặt che mất tín hiệu năng lực. Bỏ hẳn marquee tên chạy ngang trên ảnh (chi tiết personal-brand không cần thiết cho mục tiêu xin việc IT) |
| 2026-09-14 | Hero đổi hướng lần nữa (cùng ngày, theo yêu cầu trực tiếp của Ricky): ảnh lớn trở lại, nhưng dạng "khung đen chuyển gradient sang ảnh" — giữ tinh thần "nội dung nổi bật" bằng tương phản mạnh thay vì ảnh nhỏ. Thêm hoạ tiết mạch điện/network + icon bảo mật tự vẽ (SVG, không dùng thư viện ngoài) chạy phía sau nội dung. Nav chuyển thành overlay trong suốt trên Hero — chỉ áp dụng ở Home, các trang khác không đổi |

---

## Câu hỏi mở (chưa chặn tiến độ, nhưng cần trả lời dần)

- Domain riêng hay giữ `*.vercel.app`? (mặc định: subdomain cho v1)
- Có muốn thêm chứng chỉ/dự án mới khi có?
- Ảnh Photography thật — khi nào có để đưa vào?
