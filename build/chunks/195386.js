/** Chunk was on web.js **/
/** chunk id: 195386, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => i
});
var r = n(643479);
let i = {
        isGifFile: s,
        findOffsets: l
    },
    a = 6,
    o = ["GIF87a", "GIF89a"];

function s(e) {
    return !!e && o.includes((0, r.hT)(e, 0, a))
}

function l() {
    return {
        gifHeaderOffset: 0
    }
}