/** chunk id: 370365 params = (module,exports,require) **/
n.d(t, {
    A: () => A
});
var i = n(627968),
    s = n(64700),
    l = n(311907),
    a = n(397927),
    r = n(587895),
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
    } = e, a = s.useMemo(() => null == t ? null : "pid" in t ? t.pid : null, [t]), o = (0, l.bG)([r.A], () => null != n ? n : r.A.getApplication(t?.id), [n, t]);
    return (0, i.jsx)(d.A, {
        game: o,
        pid: a,
        size: d.M.SMALL
    })
}

function A(e) {
    let {
        rawGame: t,
        gameApplication: n,
        supportDisabled: r,
        getEnabledFromStatus: d,
        onChange: A,
        clientSettingType: h,
        ariaLabel: p
    } = e, T = (0, l.cf)([o.Ay, u.A, m.A], () => (0, o.xU)(t, o.Ay, u.A, m.A)), f = (0, l.cf)([u.A, m.A], () => (0, o.hw)(t, !1, [u.A, m.A]), [t]), S = d(f), [b, E] = s.useState(S);
    return s.useEffect(() => {
        E(S)
    }, [S]), (0, i.jsx)(g.A, {
        title: t.name,
        icon: (0, i.jsx)(x, {
            game: T,
            gameApplication: n
        }),
        "aria-label": p,
        action: (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(a.dOG, {
                checked: b,
                disabled: r,
                onChange: e => {
                    let n;
                    return n = !e && b, void(E(e), A(e, T, f), n && (0, c.L)(h, T.id ?? t?.id ?? null))
                }
            }), (0, i.jsx)("div", {
                className: _.Kz
            })]
        })
    })
}