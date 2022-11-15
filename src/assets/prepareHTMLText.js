import parse, { domToReact, htmlToDOM } from 'html-react-parser';
import DOMPurify from 'dompurify';

export default function prepareHTMLText(html) {
  return parse(DOMPurify.sanitize(html));
}