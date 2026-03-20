/** chunk id: 156652 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => _,
    x: () => A
});
var i, s = n(627968),
    l = n(64700),
    a = n(503698),
    r = n.n(a),
    o = n(397927),
    c = n(765671),
    d = n(401685),
    u = n(919706),
    h = n(678536),
    A = ((i = {})[i.TOP = 0] = "TOP", i[i.BOTTOM = 1] = "BOTTOM", i);

function m(e) {
    let {
        disableGradients: t = !1,
        renderHeader: n,
        renderBottomLeft: i,
        renderBottomCenter: a,
        renderBottomRight: r,
        renderCenter: u
    } = e, A = l.useRef(null), {
        width: m,
        ref: _
    } = (0, c.Ay)(), p = (0, d.bf)(m);
    return (0, s.jsx)(o.xpW, {
        containerRef: A,
        children: (0, s.jsxs)("div", {
            className: h._v,
            ref: A,
            children: [0 !== t && !0 !== t && (0, s.jsx)("div", {
                className: h.aw
            }), 1 !== t && !0 !== t && (0, s.jsx)("div", {
                className: h.YA
            }), (0, s.jsx)("div", {
                className: h.K1,
                children: n?.()
            }), u?.(), (0, s.jsx)(d.Ay.Provider, {
                value: p,
                children: (0, s.jsxs)("div", {
                    className: h.q6,
                    ref: _,
                    children: [(0, s.jsx)("div", {
                        className: h.i$,
                        children: i?.()
                    }), (0, s.jsx)("div", {
                        className: h.Kz,
                        children: a?.()
                    }), (0, s.jsx)("div", {
                        className: h.i$,
                        children: r?.()
                    })]
                })
            })]
        })
    })
}

function _(e) {
    let {
        screenMessage: t,
        onDoubleClick: n,
        onActive: i,
        onForceIdle: l,
        idle: a,
        children: o,
        renderChatToasts: c,
        renderVoiceChannelEffects: d,
        style: A,
        ..._
    } = e;
    return (0, s.jsxs)("div", {
        className: r()(h.zr, {
            [h.N7]: a
        }),
        style: A,
        onMouseMove: i,
        onMouseDown: i,
        onMouseLeave: l,
        onDoubleClick: n,
        children: [o, null != t ? (0, s.jsx)(u.A, {
            size: "large",
            ...t
        }) : null, (0, s.jsx)(m, {
            ..._
        }), c?.(), d?.()]
    })
}