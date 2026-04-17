/** chunk id: 460442 params = (module,exports,require) **/
i.d(t, {
    Yb: () => p,
    gS: () => C,
    oU: () => _
});
var n = i(627968);
i(64700);
var r = i(503698),
    l = i.n(r),
    o = i(158954),
    u = i(827734),
    s = i(492518),
    a = i(985018),
    c = i(916101);

function d(e) {
    let {
        icon: t,
        style: i
    } = e;
    return (0, n.jsx)("div", {
        className: l()(c.Lw, i),
        children: t
    })
}

function C(e) {
    let {
        isHoveringOrFocusing: t
    } = e;
    return (0, n.jsx)(d, {
        style: l()(c.AI, t && c.mW),
        icon: (0, n.jsx)(o.rOg, {
            size: "custom",
            color: u.A.colors.WHITE,
            width: 38,
            height: 38,
            className: l()(c.x6, c.AI),
            "aria-label": a.intl.string(a.t.L5Pt9L)
        })
    })
}

function p(e) {
    let {
        count: t
    } = e;
    return (0, n.jsx)(d, {
        style: c.RF,
        icon: (0, n.jsx)(o.EYj, {
            variant: "text-sm/medium",
            color: "always-white",
            children: a.intl.format(a.t.F6iMs4, {
                count: t
            })
        })
    })
}

function _(e) {
    let {
        isHoveringOrFocusing: t,
        loading: i
    } = e;
    return (0, n.jsx)(d, {
        style: l()(c.U4, {
            [c.HI]: t || i
        }),
        icon: i ? (0, n.jsx)(s.k, {}) : (0, n.jsx)(o.yhu, {
            size: "lg",
            color: u.A.unsafe_rawColors.WHITE_500
        })
    })
}