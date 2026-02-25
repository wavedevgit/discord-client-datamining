/** chunk id: 460442, original params: e,t,i (module,exports,require) **/
i.d(t, {
    Yb: () => _,
    gS: () => m,
    oU: () => f
});
var n = i(627968);
i(64700);
var s = i(503698),
    l = i.n(s),
    r = i(158954),
    o = i(827734),
    a = i(492518),
    d = i(985018),
    u = i(85474);

function c(e) {
    let {
        icon: t,
        style: i
    } = e;
    return (0, n.jsx)("div", {
        className: l()(u.Lw, i),
        children: t
    })
}

function m(e) {
    let {
        isHoveringOrFocusing: t
    } = e;
    return (0, n.jsx)(c, {
        style: l()(u.AI, t && u.mW),
        icon: (0, n.jsx)(r.rOg, {
            size: "custom",
            color: o.A.colors.WHITE,
            width: 38,
            height: 38,
            className: l()(u.x6, u.AI),
            "aria-label": d.intl.string(d.t.L5Pt9L)
        })
    })
}

function _(e) {
    let {
        count: t
    } = e;
    return (0, n.jsx)(c, {
        style: u.RF,
        icon: (0, n.jsx)(r.EYj, {
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
    return (0, n.jsx)(c, {
        style: l()(u.U4, {
            [u.HI]: t || i
        }),
        icon: i ? (0, n.jsx)(a.k, {}) : (0, n.jsx)(r.yhu, {
            size: "lg",
            color: o.A.unsafe_rawColors.WHITE_500
        })
    })
}