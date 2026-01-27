/** Chunk was on web.js **/
/** chunk id: 870570, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => u
});
var r, i = n(311907),
    a = n(73153);

function o(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
let s = null;
class l extends(r = i.Ay.Store) {
    hasAction() {
        return null != s
    }
    getAction() {
        return s
    }
}

function c(e) {
    s = e.requiredAction
}
o(l, "displayName", "UserRequiredActionStore");
let u = new l(a.h, {
    CONNECTION_OPEN: c,
    USER_REQUIRED_ACTION_UPDATE: c
})