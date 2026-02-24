/** chunk id: 460442, original params: e,t,i (module,exports,require) **/
i.d(t, {
    Yb: () => _,
    gS: () => m,
    oU: () => f
});
var n = i(627968);
i(64700);
var s = i(503698),
    r = i.n(s),
    l = i(158954),
    o = i(827734),
    a = i(492518),
    d = i(985018),
    c = i(85474);

function u(e) {
    let {
        icon: t,
        style: i
    } = e;
    return (0, n.jsx)("div", {
        className: r()(c.Lw, i),
        children: t
    })
}

function m(e) {
    let {
        isHoveringOrFocusing: t
    } = e;
    return (0, n.jsx)(u, {
        style: r()(c.AI, t && c.mW),
        icon: (0, n.jsx)(l.rOg, {
            size: "custom",
            color: o.A.colors.WHITE,
            width: 38,
            height: 38,
            className: r()(c.x6, c.AI),
            "aria-label": d.intl.string(d.t.L5Pt9L)
        })
    })
}

function _(e) {
    let {
        count: t
    } = e;
    return (0, n.jsx)(u, {
        style: c.RF,
        icon: (0, n.jsx)(l.EYj, {
            variant: "text-sm/medium",
            color: "always-white",
            children: d.intl.format(d.t.F6iMs4, {
                count: t
            })
        })
    })
}

function f(e) {
    let {
        isHoveringOrFocusing: t,
        loading: i
    } = e;
    return (0, n.jsx)(u, {
        style: r()(c.U4, {
            [c.HI]: t || i
        }),
        icon: i ? (0, n.jsx)(a.k, {}) : (0, n.jsx)(l.pa$, {
            size: "lg",
            color: o.A.unsafe_rawColors.WHITE_500
        })
    })
}