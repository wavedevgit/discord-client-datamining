/** chunk id: 855104, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    gN: () => a,
    kj: () => o,
    r_: () => s
});
var r = n(311907),
    i = n(505274);

function a() {
    return (0, r.bG)([i.A], () => i.A.balance)
}

function o(e) {
    return (0, r.bG)([i.A], () => {
        var t;
        return null != e && (null != (t = i.A.balance) ? t : 0) >= e
    })
}

function s() {
    return i.A.getCurrentBalance()
}