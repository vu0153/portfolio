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

---

## Câu hỏi mở (chưa chặn tiến độ, nhưng cần trả lời dần)

- Domain riêng hay giữ `*.vercel.app`? (mặc định: subdomain cho v1)
- Có muốn thêm chứng chỉ/dự án mới khi có?
- Ảnh Photography thật — khi nào có để đưa vào?
