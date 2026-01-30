/** chunk id: 821124, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    NK: () => o,
    Oe: () => s,
    ar: () => a,
    mf: () => i
});
var r = n(513461);

function i(e) {
    return e === r.B5.APPROVED || e === r.B5.REJECTED
}

function a(e) {
    return e === r.B5.SUBMITTED
}

function o(e) {
    return e.applicationStatus === r.B5.APPROVED && null != e.lastSeen
}

function s(e) {
    return i(e.applicationStatus) && null == e.lastSeen
}