/** chunk id: 455207, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    MZ: () => d,
    NB: () => f,
    sx: () => p
});
var r = n(58149),
    i = n(943667),
    a = n(954571),
    o = n(124759),
    s = n(652215),
    l = n(375577);

function c(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function u(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            c(e, t, n[t])
        })
    }
    return e
}

function d(e) {
    return (0, i.A)(e) && e.messageReference.guild_id === o.Vi || null != e.author && e.author.id === o.hs
}

function f() {
    return l
}
let p = e => {
    a.default.track(s.HAw.USER_FLOW_TRANSITION, u({
        flow_type: o.bK,
        from_step: e.fromStep,
        to_step: e.toStep
    }, (0, r.H$)(e.guildId)))
}