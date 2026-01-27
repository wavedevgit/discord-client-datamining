/** Chunk was on web.js **/
/** chunk id: 478542, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    p: () => d
});
var r = n(627968),
    i = n(64700),
    a = n(158954),
    o = n(732955),
    s = n(985018),
    l = n(161222);

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
    let {
        onClick: t,
        "aria-label": n = s.intl.string(s.t.cpT0Cq)
    } = e, {
        firstFocusableItemProps: c
    } = i.useContext(a.MVj);
    return (0, r.jsx)("div", {
        className: l.b,
        children: (0, r.jsx)(o.JnF, u({
            size: "xs",
            "aria-label": n,
            onClick: t,
            variant: "overlay-secondary"
        }, c))
    })
}