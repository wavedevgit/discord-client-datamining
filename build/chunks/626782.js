/** Chunk was on web.js **/
/** chunk id: 626782, original params: e,t,n (module,exports,require) **/
"use strict";
n(186659), n(104074), n(340818);
let r = /url\((['"]?)([^'"]+?)\1\)/g,
    i = /url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g,
    a = /src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;

function o(e) {
    let t = e.replace(/([.*+?^${}()|\[\]\/\\])/g, "\\$1");
    return RegExp(`(url\\(['"]?)(${t})(['"]?\\))`, "g")
}