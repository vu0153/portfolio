// Reference-counted so overlapping overlays (e.g. intro splash still closing
// while the gallery opens) don't clobber each other's lock on cleanup.
let lockCount = 0;

export function lockScroll() {
  if (typeof document === "undefined") return;
  lockCount += 1;
  document.body.style.overflow = "hidden";
}

export function unlockScroll() {
  if (typeof document === "undefined") return;
  lockCount = Math.max(0, lockCount - 1);
  if (lockCount === 0) {
    document.body.style.overflow = "";
  }
}
