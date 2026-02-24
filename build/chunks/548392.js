/** chunk id: 548392, original params: e,t,n (module,exports,require) **/
n.d(t, {
    AI: () => _,
    N4: () => p,
    cp: () => x
});
var a = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    l = n(284009),
    r = n.n(l),
    d = n(340287),
    c = n(397927),
    o = n(27023),
    u = n(738072),
    m = n(985018),
    g = n(269372);

function f(e) {
    let {
        onNext: t
    } = (0, o.bv)();
    return (0, a.jsx)(c.Button, {
        variant: "primary",
        text: m.intl.string(m.t["3PatSz"]),
        onClick: t,
        icon: c.EdP,
        iconPosition: "end",
        ...e
    })
}

function v(e) {
    let {
        onNext: t,
        stepLoading: n,
        gameServerInstance: i,
        availableBoostCount: s,
        planCost: l
    } = (0, o.bv)(), r = l > 0 && s < l, d = l > 0 ? null != i ? m.intl.string(u.default.e3Q5Kz) : m.intl.string(u.default["cmSy/b"]) : m.intl.string(m.t.K344S7);
    return (0, a.jsx)(c.Button, {
        variant: r || l > 0 ? "expressive" : "primary",
        text: d,
        onClick: t,
        icon: r || l > 0 ? c._Jp : void 0,
        iconPosition: "start",
        loading: n,
        ...e
    })
}

function x(e) {
    let {
        stepAction: t
    } = (0, o.bv)(), n = t?.onNext?.type;
    switch (n) {
        case "go-to-step":
            return (0, a.jsx)(f, {
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

function _(e) {
    let t, {
            onBack: n,
            stepAction: i
        } = (0, o.bv)(),
        s = i?.onBack?.type;
    switch (s) {
        case "go-to-step":
            t = m.intl.string(m.t["13/7kX"]);
            break;
        case "close":
            t = m.intl.string(m.t.cpT0Cq)
    }
    return r()(null != t, `Invalid stepType ${s}`), (0, a.jsx)(c.Button, {
        ...e,
        variant: "secondary",
        text: t,
        onClick: n,
        icon: "go-to-step" === s ? c.rJJ : void 0,
        iconPosition: "start"
    })
}

function p(e) {
    let {
        step: t,
        className: n,
        children: i
    } = e, {
        footerNode: l,
        step: r
    } = (0, o.bv)();
    return null == l || r !== t ? null : d.createPortal((0, a.jsx)("div", {
        className: s()(g.q, n),
        children: i
    }), l, t)
}