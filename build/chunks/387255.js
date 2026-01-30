/** chunk id: 387255, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    N: () => c,
    i: () => o
}), n(896048), n(638769);
var r = n(136722),
    l = n(495273),
    i = n(34457),
    a = n(488926),
    s = n(652215);

function o(e) {
    return [...e].sort(l.uh).map(e => (0, l.B4)(e))
}

function c(e, t, n) {
    return e.filter(e => (0, i._m)(e, s.xBc.ADMINISTRATOR) || ((e, t, n) => {
        if (null == e.id) return !1;
        let l = a.aH({
            forceRoles: {
                [e.id]: e
            },
            context: n
        });
        return r.zy(l, t)
    })(e, n, t))
}