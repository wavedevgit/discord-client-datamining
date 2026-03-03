/** chunk id: 548392, original params: e,t,n (module,exports,require) **/
n.d(t, {
    AI: () => j,
    N4: () => p,
    cp: () => f
});
var a = n(627968);
n(64700);
var s = n(503698),
    i = n.n(s),
    l = n(284009),
    r = n.n(l),
    d = n(340287),
    o = n(397927),
    c = n(27023),
    u = n(294726),
    m = n(985018),
    x = n(227530);

function g(e) {
    let {
        onNext: t
    } = (0, c.bv)();
    return (0, a.jsx)(o.Button, {
        variant: "primary",
        text: m.intl.string(m.t["3PatSz"]),
        onClick: t,
        icon: o.EdP,
        iconPosition: "end",
        ...e
    })
}

function v(e) {
    let {
        onNext: t,
        stepLoading: n,
        gameServerInstance: s,
        availableBoostCount: i,
        planCost: l
    } = (0, c.bv)(), r = l > 0 && i < l, d = l > 0 ? null != s ? m.intl.string(u.default.e3Q5Kz) : m.intl.string(u.default["cmSy/b"]) : m.intl.string(m.t.K344S7);
    return (0, a.jsx)(o.Button, {
        variant: r || l > 0 ? "expressive" : "primary",
        text: d,
        onClick: t,
        icon: r || l > 0 ? o._Jp : void 0,
        iconPosition: "start",
        loading: n,
        ...e
    })
}

function f(e) {
    let {
        stepAction: t
    } = (0, c.bv)(), n = t?.onNext?.type;
    switch (n) {
        case "go-to-step":
            return (0, a.jsx)(g, {
                ...e
            });
        case "save":
            return (0, a.jsx)(v, {
                ...e
            });
        default:
            r()(null != n, `Invalid stepType ${n}`)
    }
}

function j(e) {
    let t, {
            onBack: n,
            stepAction: s
        } = (0, c.bv)(),
        i = s?.onBack?.type;
    switch (i) {
        case "go-to-step":
            t = m.intl.string(m.t["13/7kX"]);
            break;
        case "close":
            t = m.intl.string(m.t.cpT0Cq)
    }
    return r()(null != t, `Invalid stepType ${i}`), (0, a.jsx)(o.Button, {
        ...e,
        variant: "secondary",
        text: t,
        onClick: n,
        icon: "go-to-step" === i ? o.rJJ : void 0,
        iconPosition: "start"
    })
}

function p(e) {
    let {
        step: t,
        className: n,
        children: s
    } = e, {
        footerNode: l,
        step: r
    } = (0, c.bv)();
    return null == l || r !== t ? null : d.createPortal((0, a.jsx)("div", {
        className: i()(x.q, n),
        children: s
    }), l, t)
}