# Gallery inbox

Thả ảnh gốc (JPG/PNG/WebP/TIFF/BMP) vào thẳng folder này, rồi nhờ Claude xử lý
(hoặc tự chạy `npm run gallery:process`).

Script sẽ:
1. Xoay đúng chiều theo EXIF, resize xuống tối đa 2000px cạnh dài, nén WebP.
2. Lưu ảnh đã nén vào `public/photos/gallery/`.
3. Xoá ảnh gốc khỏi folder này.
4. Tự cập nhật `data/gallery.js` — ảnh sẽ tự xuất hiện trong Gallery ở trang Photography, không cần sửa code.

**Lưu ý:** ảnh định dạng HEIC (mặc định của iPhone) chưa được hỗ trợ — cần chuyển
sang JPG/PNG trước khi thả vào đây (ví dụ qua Preview/Photos trên Mac: File → Export).
