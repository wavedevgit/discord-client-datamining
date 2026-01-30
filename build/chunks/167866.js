/** chunk id: 167866, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    e: () => u
}), n(64700);
var r = n(793574),
    i = n(58149),
    a = n(954571),
    o = n(486974),
    s = n(652215);

function l(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function c(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            l(e, t, n[t])
        })
    }
    return e
}

function u(e, t, n) {
    let l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : r.A.MEMBER_SAFETY_PAGE,
        u = c({
            guild_id: e,
            target_user_id: t,
            subpanel_name: o.n[n],
            location: l
        }, (0, i.H$)(e));
    return a.default.track(s.HAw.GUILD_MOD_VIEW_OPENED, u)
}