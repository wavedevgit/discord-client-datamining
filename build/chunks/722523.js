/** chunk id: 722523 params = (module,exports,require) **/
"use strict";
n.d(t, {
    Ay: () => x,
    GU: () => p
});
var i = n(627968);
n(64700);
var s = n(503698),
    l = n.n(s),
    a = n(732955),
    r = n(438874),
    o = n(363487),
    c = n(439156),
    d = n(689906),
    u = n(224331),
    h = n(568065),
    A = n(333354),
    m = n(985018),
    _ = n(58962);

function p(e) {
    let {
        className: t,
        guildId: n,
        powerup: s,
        onClick: r
    } = e, o = (0, d.A)(n, s), c = (0, u.A)(n, s), p = h.HO.has(s.skuId);
    return (0, i.jsx)("div", {
        className: l()(_.FS, t),
        children: (0, i.jsx)(a.$nd, {
            variant: "primary",
            fullWidth: !0,
            text: p ? m.intl.string(A.default.g5Ds69) : m.intl.string(m.t["0Q61kF"]),
            onClick: e => {
                r?.(e), p ? o?.(e) : c?.()
            }
        })
    })
}

function g(e) {
    let {
        className: t,
        guildId: n,
        powerup: s
    } = e, r = (0, u.A)(n, s);
    return (0, i.jsx)("div", {
        className: l()(_.kL, t),
        children: (0, i.jsx)("div", {
            className: _.FS,
            children: (0, i.jsx)(a.$nd, {
                variant: "primary",
                fullWidth: !0,
                text: s.type === h.o9.LEVEL ? m.intl.string(m.t["0Q61kF"]) : m.intl.string(m.t.Xa11Ep),
                onClick: r
            })
        })
    })
}

function f(e) {
    let {
        className: t,
        guildId: n,
        powerup: s,
        expressiveCta: a,
        onError: o
    } = e, {
        showToggleButton: d,
        isPowerupActive: u
    } = (0, r.A)(n, s), h = !u;
    return (0, i.jsxs)("div", {
        className: l()(_.kL, t),
        children: [d && (0, i.jsx)(c.A, {
            guildId: n,
            powerup: s,
            onError: o,
            grow: h,
            compact: !h,
            expressiveCta: a
        }), u && (0, i.jsx)(p, {
            guildId: n,
            powerup: s
        })]
    })
}

function x(e) {
    let {
        ...t
    } = e;
    return (0, o.A)(t.guildId) ? (0, i.jsx)(f, {
        ...t
    }) : (0, i.jsx)(g, {
        ...t
    })
}