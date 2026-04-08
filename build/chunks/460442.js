/** chunk id: 460442 params = (module,exports,require) **/
i.d(t, {
    Yb: () => h,
    gS: () => I,
    oU: () => m
});
var r = i(627968);
i(64700);
var s = i(503698),
    n = i.n(s),
    l = i(158954),
    u = i(827734),
    o = i(492518),
    a = i(985018),
    d = i(328594);

function c(e) {
    let {
        icon: t,
        style: i
    } = e;
    return (0, r.jsx)("div", {
        className: n()(d.Lw, i),
        children: t
    })
}

function I(e) {
    let {
        isHoveringOrFocusing: t
    } = e;
    return (0, r.jsx)(c, {
        style: n()(d.AI, t && d.mW),
        icon: (0, r.jsx)(l.rOg, {
            size: "custom",
            color: u.A.colors.WHITE,
            width: 38,
            height: 38,
            className: n()(d.x6, d.AI),
            "aria-label": a.intl.string(a.t.L5Pt9L)
        })
    })
}

function h(e) {
    let {
        count: t
    } = e;
    return (0, r.jsx)(c, {
        style: d.RF,
        icon: (0, r.jsx)(l.EYj, {
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
        loading: i
    } = e;
    return (0, r.jsx)(c, {
        style: n()(d.U4, {
            [d.HI]: t || i
        }),
        icon: i ? (0, r.jsx)(o.k, {}) : (0, r.jsx)(l.yhu, {
            size: "lg",
            color: u.A.unsafe_rawColors.WHITE_500
        })
    })
}