/** chunk id: 460442 params = (module,exports,require) **/
n.d(t, {
    Yb: () => I,
    gS: () => h,
    oU: () => m
});
var s = n(627968);
n(64700);
var i = n(503698),
    l = n.n(i),
    r = n(158954),
    o = n(827734),
    u = n(492518),
    a = n(985018),
    d = n(865444);

function c(e) {
    let {
        icon: t,
        style: n
    } = e;
    return (0, s.jsx)("div", {
        className: l()(d.Lw, n),
        children: t
    })
}

function h(e) {
    let {
        isHoveringOrFocusing: t
    } = e;
    return (0, s.jsx)(c, {
        style: l()(d.AI, t && d.mW),
        icon: (0, s.jsx)(r.rOg, {
            size: "custom",
            color: o.A.colors.WHITE,
            width: 38,
            height: 38,
            className: l()(d.x6, d.AI),
            "aria-label": a.intl.string(a.t.L5Pt9L)
        })
    })
}

function I(e) {
    let {
        count: t
    } = e;
    return (0, s.jsx)(c, {
        style: d.RF,
        icon: (0, s.jsx)(r.EYj, {
            variant: "text-sm/medium",
            color: "always-white",
            children: a.intl.format(a.t.F6iMs4, {
                count: t
            })
        })
    })
}

function m(e) {
    let {
        isHoveringOrFocusing: t,
        loading: n
    } = e;
    return (0, s.jsx)(c, {
        style: l()(d.U4, {
            [d.HI]: t || n
        }),
        icon: n ? (0, s.jsx)(u.k, {}) : (0, s.jsx)(r.yhu, {
            size: "lg",
            color: o.A.unsafe_rawColors.WHITE_500
        })
    })
}