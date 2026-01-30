/** chunk id: 39304, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    HV: () => s,
    WQ: () => a,
    lK: () => o
}), n(321073);
let r = 10,
    i = [];

function a(e) {
    for (i.push(e); i.length > r;) i.shift()
}

function o() {
    return i.join(" -> ")
}

function s() {
    return i.length > 0 ? i[i.length - 1] : null
}