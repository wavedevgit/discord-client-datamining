/** chunk id: 156652 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => m,
    x: () => h
});
var i, s = n(627968),
    l = n(64700),
    a = n(503698),
    r = n.n(a),
    o = n(397927),
    c = n(235986),
    d = n(919706),
    u = n(678536),
    h = ((i = {})[i.TOP = 0] = "TOP", i[i.BOTTOM = 1] = "BOTTOM", i);

function A(e) {
    let {
        disableGradients: t = !1,
        renderHeader: n,
        renderBottomLeft: i,
        renderBottomCenter: a,
        renderBottomRight: r,
        renderCenter: d
    } = e, h = l.useRef(null);
    return (0, s.jsx)(o.xpW, {
        containerRef: h,
        children: (0, s.jsxs)("div", {
            className: u._v,
            ref: h,
            children: [0 !== t && !0 !== t && (0, s.jsx)("div", {
                className: u.aw
            }), 1 !== t && !0 !== t && (0, s.jsx)("div", {
                className: u.YA
            }), (0, s.jsx)("div", {
                className: u.K1,
                children: n?.()
            }), d?.(), (0, s.jsxs)("div", {
                className: u.q6,
                children: [(0, s.jsx)(c.A, {
                    grow: 1,
                    align: c.A.Align.CENTER,
                    className: u.i$,
                    children: i?.()
                }), (0, s.jsx)(c.A, {
                    grow: 1,
                    justify: c.A.Justify.CENTER,
                    align: c.A.Align.CENTER,
                    children: a?.()
                }), (0, s.jsx)(c.A, {
                    grow: 1,
                    justify: c.A.Justify.END,
                    align: c.A.Align.CENTER,
                    className: u.i$,
                    children: r?.()
                })]
            })]
        })
    })
}

function m(e) {
    let {
        screenMessage: t,
        onDoubleClick: n,
        onActive: i,
        onForceIdle: l,
        idle: a,
        children: o,
        renderChatToasts: c,
        renderVoiceChannelEffects: h,
        style: m,
        ...p
    } = e;
    return (0, s.jsxs)("div", {
        className: r()(u.zr, {
            [u.N7]: a
        }),
        style: m,
        onMouseMove: i,
        onMouseDown: i,
        onMouseLeave: l,
        onDoubleClick: n,
        children: [o, null != t ? (0, s.jsx)(d.A, {
            size: "large",
            ...t
        }) : null, (0, s.jsx)(A, {
            ...p
        }), c?.(), h?.()]
    })
}