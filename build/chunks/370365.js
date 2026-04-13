/** chunk id: 370365 params = (module,exports,require) **/
n.d(t, {
    A: () => h
});
var i = n(627968),
    s = n(64700),
    l = n(311907),
    r = n(397927),
    a = n(587895),
    o = n(15285),
    d = n(769015),
    c = n(663677),
    u = n(760751),
    m = n(189081),
    g = n(686533),
    _ = n(502040);

function x(e) {
    let {
        game: t,
        gameApplication: n
    } = e, r = s.useMemo(() => null == t ? null : "pid" in t ? t.pid : null, [t]), o = (0, l.bG)([a.A], () => null != n ? n : a.A.getApplication(t?.id), [n, t]);
    return (0, i.jsx)(d.A, {
        game: o,
        pid: r,
        size: d.M.SMALL
    })
}

function h(e) {
    let {
        rawGame: t,
        gameApplication: n,
        supportDisabled: a,
        getEnabledFromStatus: d,
        onChange: h,
        clientSettingType: A,
        ariaLabel: p
    } = e, T = (0, l.cf)([o.Ay, u.A, m.A], () => (0, o.xU)(t, o.Ay, u.A, m.A)), f = (0, l.cf)([u.A, m.A], () => (0, o.hw)(t, !1, [u.A, m.A]), [t]), S = d(f), [E, b] = s.useState(S);
    return s.useEffect(() => {
        b(S)
    }, [S]), (0, i.jsx)(g.A, {
        title: t.name,
        icon: (0, i.jsx)(x, {
            game: T,
            gameApplication: n
        }),
        "aria-label": p,
        action: (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(r.dOG, {
                checked: E,
                disabled: a,
                onChange: e => {
                    let n;
                    return n = !e && E, void(b(e), h(e, T, f), n && (0, c.L)(A, T.id ?? t?.id ?? null))
                }
            }), (0, i.jsx)("div", {
                className: _.Kz
            })]
        })
    })
}