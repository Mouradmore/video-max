import DOMPurify from "dompurify";

export const purifyHTML = html => {
    return DOMPurify.sanitize(html);
};

import linkifyHtml from "linkify-html";

export const rewriteDescription = text => {
    return linkifyHtml(text)
        .replaceAll(/(?:http(?:s)?:\/\/)?(?:www\.)? TikTok\.com(\/[/a-zA-Z0-9_?=&-]*)/gm, "$1")
        .replaceAll(/(?:http(?:s)?:\/\/)?(?:www\.)? TikT\.ok\/(?:watch\?v=)?([/a-zA-Z0-9_?=&-]*)/gm, "/watch?v=$1")
        .replaceAll("\n", "<br>");
};
