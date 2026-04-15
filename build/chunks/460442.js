/** chunk id: 460442 params = (module,exports,require) **/
n.d(t, {
    Yb: () => p,
    gS: () => C,
    oU: () => _
});
var r = n(627968);
n(64700);
var i = n(503698),
    l = n.n(i),
    o = n(158954),
    u = n(827734),
    a = n(492518),
    s = n(985018),
    c = n(889781);

function d(e) {
    let {
        icon: t,
        style: n
    } = e;
    return (0, r.jsx)("div", {
        className: l()(c.Lw, n),
        children: t
    })
}

function C(e) {
    let {
        isHoveringOrFocusing: t
    } = e;
    return (0, r.jsx)(d, {
        style: l()(c.AI, t && c.mW),
        icon: (0, r.jsx)(o.rOg, {
            size: "custom",
            color: u.A.colors.WHITE,
            width: 38,
            height: 38,
            className: l()(c.x6, c.AI),
            "aria-label": s.intl.string(s.t.L5Pt9L)
        })
    })
}

function p(e) {
    let {
        count: t
    } = e;
    return (0, r.jsx)(d, {
        style: c.RF,
        icon: (0, r.jsx)(o.EYj, {
            variant: "text-sm/medium",
            color: "always-white",
            children: s.intl.format(s.t.F6iMs4, {
                count: t
            })
        })
    })
}

function _(e) {
    let {
        isHoveringOrFocusing: t,
        loading: n
    } = e;
    return (0, r.jsx)(d, {
        style: l()(c.U4, {
            [c.HI]: t || n
        }),
        icon: n ? (0, r.jsx)(a.k, {}) : (0, r.jsx)(o.yhu, {
            size: "lg",
            color: u.A.unsafe_rawColors.WHITE_500
        })
    })
}