/** Chunk was on web.js **/
/** chunk id: 205710, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => i
});
var r = n(668459);
let i = {
        read: s
    },
    a = 4,
    o = 7;

function s(e, t) {
    let n = {},
        i = r.A.getByteAt(e, t);
    return n.Alpha = l(i), n.Animation = c(i), n.ImageWidth = u(e, t + a), n.ImageHeight = u(e, t + o), n
}

function l(e) {
    let t = 16 & e;
    return {
        value: +!!t,
        description: t ? "Yes" : "No"
    }
}

function c(e) {
    let t = 2 & e;
    return {
        value: +!!t,
        description: t ? "Yes" : "No"
    }
}

function u(e, t) {
    let n = r.A.getByteAt(e, t) + 256 * r.A.getByteAt(e, t + 1) + 65536 * r.A.getByteAt(e, t + 2) + 1;
    return {
        value: n,
        description: n + "px"
    }
}