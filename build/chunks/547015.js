/** Chunk was on 38985 **/
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
    d = n(80682),
    _ = n(793574),
    g = n(688810),
    A = n(221950),
    T = n(950191),
    h = n(454719),
    I = n(946356),
    O = n(696451),
    m = n(287809),
    N = n(985925),
    f = n(295191),
    p = n(586387),
    S = n(12999);

function G(e) {
    let {
        userId: t,
        guildId: n,
        onClose: a,
        className: G,
        infoPanelClassName: R,
        style: D,
        moderatorReportId: C
    } = e, L = (0, N.q)(n), b = (0, s.bG)([m.default], () => m.default.getUser(t), [t]), x = (0, s.bG)([O.Ay], () => O.Ay.getMember(n, t), [n, t]), [M, v] = r.useState(null == b || null == x), j = (0, c.A)(x), U = r.useRef(null), {
        analyticsLocations: y
    } = (0, g.Ay)(_.A.GUILD_MEMBER_MOD_VIEW), k = (0, T.Ay)(t, n), P = (0, E.Ay)();
    return (r.useEffect(() => {
        L || a()
    }, [L, a]), r.useEffect(() => {
        null == j || null != x || M || a()
    }, [M, x, a, j]), r.useEffect(() => {
        null != b && null != x && v(!1)
    }, [b, x]), r.useEffect(() => {
        let e = null == x;
        return !M && e && (U.current = window.setTimeout(a, 500)), () => {
            null != U.current && window.clearTimeout(U.current)
        }
    }, [M, x, a]), (0, d.E)({
        [n]: [t]
    }, "GuildMemberModViewSidebar"), r.useEffect(() => {
        !async function() {
            let e = [u.A.requestMembersById(n, [t]), (0, A.jo)(n, [t]), (0, h.A)(t, void 0, {
                guildId: n,
                dispatchWait: !0
            })];
            await Promise.all(e), v(!1)
        }()
    }, [n, t]), L) ? M || null == b || null == x ? (0, l.jsx)("div", {
        className: i()(S.so, S.g4, G),
        style: D,
        children: (0, l.jsx)(o.y$y, {
            animated: !0,
            type: M ? o.y$y.Type.SPINNING_CIRCLE : o.y$y.Type.CHASING_DOTS
        })
    }) : (0, l.jsx)(g.f5, {
        value: y,
        children: (0, l.jsx)("div", {
            className: i()(S.so, G),
            style: D,
            children: (0, l.jsx)(I.A, {
                user: b,
                displayProfile: k,
                themeType: null,
                themeOverride: P,
                forceShowPremium: !0,
                className: S.a2,
                children: (0, l.jsxs)("div", {
                    className: S.WH,
                    children: [(0, l.jsx)(p.Ay, {
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