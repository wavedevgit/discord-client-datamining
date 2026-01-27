/** Chunk was on 39048 **/
/** chunk id: 136230, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => h
});
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(319060),
    o = n(397927),
    c = n(201275),
    d = n(342298),
    u = n(657048),
    g = n(240248),
    m = n(985018),
    p = n(802652);
let f = (0, g.xI)(a.A.ROLE_ICON_UPLOADER_ICON_SIZE);

function h(e) {
    let {
        role: t,
        "aria-label": n = m.intl.string(m.t["MsUY/S"]),
        className: l,
        onClick: a,
        disabled: g = !1
    } = e, h = i.useRef(null), b = i.useMemo(() => (0, c.ox)(t, f), [t]), x = null != b ? (0, r.jsx)(u.A, function(e) {
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
        enableTooltip: !1,
        className: p.Kk
    }, b)) : (0, r.jsx)(o.XGR, {
        size: "md",
        color: "currentColor",
        className: p.Kk
    });
    return (0, r.jsx)(o.vN3, {
        ringTarget: h,
        children: (0, r.jsxs)(o.DUT, {
            "aria-label": n,
            className: s()(p.kL, l, {
                [p.r9]: g
            }),
            onClick: g ? void 0 : a,
            "aria-disabled": g,
            children: [(0, r.jsx)("div", {
                ref: h,
                className: p.VH,
                children: x
            }), null != b ? (0, r.jsx)(d.L, {
                className: p.Sl
            }) : null]
        })
    })
}