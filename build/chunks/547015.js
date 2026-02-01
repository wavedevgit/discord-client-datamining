/** chunk id: 547015, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => G
}), n(896048);
var l = n(627968),
    r = n(64700),
    a = n(503698),
    i = n.n(a),
    s = n(311907),
    o = n(397927),
    u = n(686956),
    c = n(475743),
    E = n(736653),
    _ = n(80682),
    d = n(793574),
    g = n(688810),
    A = n(221950),
    T = n(950191),
    I = n(454719),
    O = n(946356),
    h = n(696451),
    N = n(287809),
    m = n(985925),
    f = n(295191),
    S = n(586387),
    p = n(12999);

function G(e) {
    let {
        userId: t,
        guildId: n,
        onClose: a,
        className: G,
        infoPanelClassName: R,
        style: D,
        moderatorReportId: C
    } = e, L = (0, m.q)(n), x = (0, s.bG)([N.default], () => N.default.getUser(t), [t]), b = (0, s.bG)([h.Ay], () => h.Ay.getMember(n, t), [n, t]), [M, v] = r.useState(null == x || null == b), U = (0, c.A)(b), j = r.useRef(null), {
        analyticsLocations: y
    } = (0, g.Ay)(d.A.GUILD_MEMBER_MOD_VIEW), k = (0, T.Ay)(t, n), P = (0, E.Ay)();
    return (r.useEffect(() => {
        L || a()
    }, [L, a]), r.useEffect(() => {
        null == U || null != b || M || a()
    }, [M, b, a, U]), r.useEffect(() => {
        null != x && null != b && v(!1)
    }, [x, b]), r.useEffect(() => {
        let e = null == b;
        return !M && e && (j.current = window.setTimeout(a, 500)), () => {
            null != j.current && window.clearTimeout(j.current)
        }
    }, [M, b, a]), (0, _.E)({
        [n]: [t]
    }, "GuildMemberModViewSidebar"), r.useEffect(() => {
        !async function() {
            let e = [u.A.requestMembersById(n, [t]), (0, A.jo)(n, [t]), (0, I.A)(t, void 0, {
                guildId: n,
                dispatchWait: !0
            })];
            await Promise.all(e), v(!1)
        }()
    }, [n, t]), L) ? M || null == x || null == b ? (0, l.jsx)("div", {
        className: i()(p.so, p.g4, G),
        style: D,
        children: (0, l.jsx)(o.y$y, {
            animated: !0,
            type: M ? o.y$y.Type.SPINNING_CIRCLE : o.y$y.Type.CHASING_DOTS
        })
    }) : (0, l.jsx)(g.f5, {
        value: y,
        children: (0, l.jsx)("div", {
            className: i()(p.so, G),
            style: D,
            children: (0, l.jsx)(O.A, {
                user: x,
                displayProfile: k,
                themeType: null,
                themeOverride: P,
                forceShowPremium: !0,
                className: p.a2,
                children: (0, l.jsxs)("div", {
                    className: p.WH,
                    children: [(0, l.jsx)(S.Ay, {
                        userId: t,
                        guildId: n,
                        onClose: a,
                        moderatorReportId: C
                    }), (0, l.jsx)(f.A, {
                        userId: t,
                        guildId: n,
                        onClose: a,
                        className: R
                    })]
                })
            })
        })
    }) : null
}