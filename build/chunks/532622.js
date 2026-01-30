/** chunk id: 532622, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    Ay: () => d,
    qC: () => u
});
var r = n(311907),
    i = n(576705),
    a = n(488926),
    o = n(818348);
let s = [o.xB.SET_VOICE_CHANNEL_STATUS, o.xB.CONNECT, o.xB.VIEW_CHANNEL],
    l = [o.xB.SET_VOICE_CHANNEL_STATUS];

function c(e, t, n, r) {
    return (n ? l : s).every(n => null == r ? t.can(n, e) : a.$3({
        permission: n,
        user: r,
        context: e
    }))
}

function u(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 ? arguments[2] : void 0;
    return c(e, i.A, t, n)
}

function d(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 ? arguments[2] : void 0;
    return (0, r.bG)([i.A], () => c(e, i.A, t, n), [e, t, n])
}