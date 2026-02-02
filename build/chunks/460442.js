/** chunk id: 460442, original params: e,t,r (module,exports,require) **/
r.d(t, {
    BF: () => f,
    Yb: () => h,
    gS: () => d
});
var n = r(627968);
r(64700);
var i = r(503698),
    l = r.n(i),
    s = r(158954),
    a = r(827734),
    u = r(985018),
    o = r(865444);

function c(e) {
    let {
        icon: t,
        style: r
    } = e;
    return (0, n.jsx)("div", {
        className: l()(o.Lw, r),
        children: t
    })
}

function d(e) {
    let {
        isHoveringOrFocusing: t
    } = e;
    return (0, n.jsx)(c, {
        style: l()(o.AI, t && o.mW),
        icon: (0, n.jsx)(s.rOg, {
            size: "custom",
            color: a.A.colors.WHITE,
            width: 38,
            height: 38,
            className: l()(o.x6, o.AI),
            "aria-label": u.intl.string(u.t.L5Pt9L)
        })
    })
}

function f(e) {
    let {
        count: t
    } = e;
    return (0, n.jsx)(c, {
        style: o.RF,
        icon: (0, n.jsxs)(s.EYj, {
            variant: "text-sm/medium",
            color: "always-white",
            children: ["+", t + 1]
        })
    })
}

function h(e) {
    let {
        count: t
    } = e;
    return (0, n.jsx)(c, {
        style: o.RF,
        icon: (0, n.jsx)(s.EYj, {
            variant: "text-sm/medium",
            color: "always-white",
            children: u.intl.format(u.t.F6iMs4, {
                count: t
            })
        })
    })
}