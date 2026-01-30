/** chunk id: 403727, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => d
});
var r, i = n(311907),
    a = n(73153),
    o = n(860689);

function s(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
let l = {};

function c(e) {
    let {
        invite: t
    } = e, n = t.guild;
    if (null == n) return !1;
    l[n.id] = (0, o.DY)(n)
}
class u extends(r = i.Ay.Store) {
    getGuild(e) {
        return l[e]
    }
}
s(u, "displayName", "AuthInviteStore");
let d = new u(a.h, {
    AUTH_INVITE_UPDATE: c
})