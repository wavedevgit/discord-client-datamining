/** Chunk was on web.js **/
/** chunk id: 356826, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => i
});
var r = n(872863);
let i = {
    isAvifFile: a,
    findAvifOffsets: o
};

function a(e) {
    if (!e) return !1;
    try {
        let t = (0, r.vN)(e, 0);
        return t && "avif" === t.majorBrand
    } catch (e) {
        return !1
    }
}

function o(e) {
    return (0, r.OH)(e)
}