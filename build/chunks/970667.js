/** chunk id: 970667, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => i
});
var r = n(643479);
let i = {
        isXMLFile: s,
        findOffsets: l
    },
    a = 0,
    o = "<?xpacket begin";

function s(e) {
    return !!e && (0, r.hT)(e, a, o.length) === o
}

function l(e) {
    let t = [];
    return t.push({
        dataOffset: a,
        length: e.byteLength
    }), {
        xmpChunks: t
    }
}