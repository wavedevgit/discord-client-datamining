/** Chunk was on 47841 **/
/** chunk id: 11725, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => c
});
var r = n(627968);
n(64700);
var i = n(827734),
    l = n(397927),
    s = n(774474),
    a = n(985018),
    o = n(233593);
let c = e => {
    let {
        title: t,
        subtext: n = a.intl.string(a.t.jHpxwo),
        localizedNumber: c,
        isTrendingUp: d,
        isTrendingDown: u,
        tooltipText: g
    } = e, m = null != g ? (0, r.jsx)(l.STz, {
        text: g,
        position: "top",
        "aria-label": "string" == typeof g ? g : t,
        children: e => (0, r.jsx)(l.mir, function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }))), r.forEach(function(t) {
                    var r;
                    r = n[t], t in e ? Object.defineProperty(e, t, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = r
                })
            }
            return e
        }({
            size: "xs",
            color: "currentColor",
            className: o.G
        }, e))
    }) : null;
    return (0, r.jsxs)("div", {
        className: o.Tp,
        children: [(0, r.jsxs)(l.Text, {
            variant: "text-md/medium",
            className: o.tG,
            children: [t, m]
        }), (0, r.jsx)("div", {
            className: o.yz,
            children: (0, r.jsx)(l.Text, {
                className: null != c ? o.MB : o.WY,
                variant: "text-lg/semibold",
                children: null != c ? c : a.intl.string(a.t.jHpxwo)
            })
        }), (0, r.jsxs)("div", {
            className: o.BP,
            children: [d ? (0, r.jsx)(s.A, {
                className: o.Tz,
                color: i.A.unsafe_rawColors.GREEN_360.css,
                "aria-label": a.intl.string(a.t["8mcccd"]),
                width: 14,
                height: 12
            }) : null, u ? (0, r.jsx)(s.A, {
                className: o.AL,
                color: i.A.unsafe_rawColors.RED_400.css,
                "aria-label": a.intl.string(a.t.NLl6Q3),
                width: 14,
                height: 12
            }) : null, (0, r.jsx)(l.Text, {
                variant: "text-xs/normal",
                children: n
            })]
        })]
    })
}