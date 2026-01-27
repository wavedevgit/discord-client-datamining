/** Chunk was on web.js **/
/** chunk id: 664741, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => u
});
var r = n(643479),
    i = n(890167),
    a = n(105423),
    o = n(801765);
let s = "Exif IFD Pointer",
    l = "GPS Info IFD Pointer",
    c = "Interoperability IFD Pointer",
    u = {
        read: d
    };

function d(e, t, n) {
    let r = i.A.getByteOrder(e, t),
        a = f(e, t, r, n);
    return {
        tags: a = h(a = _(a = p(a, e, t, r, n), e, t, r, n), e, t, r, n),
        byteOrder: r
    }
}

function f(e, t, n, r) {
    return (0, o.y)(e, a.eY, t, (0, o.x)(e, t, n), n, r)
}

function p(e, t, n, i, l) {
    return void 0 !== e[s] ? (0, r.dP)(e, (0, o.y)(t, a.Ct, n, n + e[s].value, i, l)) : e
}

function _(e, t, n, i, s) {
    return void 0 !== e[l] ? (0, r.dP)(e, (0, o.y)(t, a.eU, n, n + e[l].value, i, s)) : e
}

function h(e, t, n, i, s) {
    return void 0 !== e[c] ? (0, r.dP)(e, (0, o.y)(t, a.MJ, n, n + e[c].value, i, s)) : e
}