export default function() {
  return document.querySelector('meta[name="csrf-token"]').attributes.content.nodeValue;
}
