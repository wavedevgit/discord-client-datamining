/** chunk id: 460442, original params: e,t,l (module,exports,require) **/
l.d(t, {
    Yb: () => I,
    gS: () => h,
    oU: () => f
});
var r = l(627968);
l(64700);
var i = l(503698),
    n = l.n(i),
    s = l(158954),
    u = l(827734),
    a = l(492518),
    o = l(985018),
    d = l(865444);

function c(e) {
    let {
        icon: t,
        style: l
    } = e;
    return (0, r.jsx)("div", {
        className: n()(d.Lw, l),
        children: t
    })
}

function h(e) {
    let {
        isHoveringOrFocusing: t
    } = e;
    return (0, r.jsx)(c, {
        style: n()(d.AI, t && d.mW),
        icon: (0, r.jsx)(s.rOg, {
            size: "custom",
            color: u.A.colors.WHITE,
            width: 38,
            height: 38,
            className: n()(d.x6, d.AI),
            "aria-label": o.intl.string(o.t.L5Pt9L)
        })
    })
}

function I(e) {
    let {
        count: t
    } = e;
    return (0, r.jsx)(c, {
        style: d.RF,
        icon: (0, r.jsx)(s.EYj, {
            variant: "text-sm/medium",
            color: "always-white",
            children: o.intl.format(o.t.F6iMs4, {
                count: t
            })
        })
    })
}

function f(e) {
    let {
        isHoveringOrFocusing: t,
        loading: l
    } = e;
    return (0, r.jsx)(c, {
        style: n()(d.U4, {
            [d.HI]: t || l
        }),
        icon: l ? (0, r.jsx)(a.k, {}) : (0, r.jsx)(s.yhu, {
            size: "lg",
            color: u.A.unsafe_rawColors.WHITE_500
        })
    })
}