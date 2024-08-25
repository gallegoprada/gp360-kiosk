// Extend the HTMLElement interface to include webkitRequestFullscreen
interface HTMLElement {
  webkitRequestFullscreen?: () => Promise<void>;
}
