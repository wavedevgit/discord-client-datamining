/** chunk id: 756154 params = (module,exports,require) **/
l.r(t), l.d(t, {
    default: () => F
});
var n = l(627968),
    s = l(64700),
    i = l(503698),
    a = l.n(i),
    r = l(311907),
    d = l(397927),
    o = l(793574),
    c = l(688810),
    u = l(726249),
    x = l(985925),
    m = l(624458),
    h = l(513461),
    j = l(496767),
    _ = l(663997),
    g = l(417718),
    A = l(324023),
    f = l(786180),
    b = l(742589),
    v = l(976860),
    T = l(761640),
    N = l(808728),
    E = l(71393),
    S = l(836872),
    C = l(134413),
    I = l(202309),
    R = l(841933),
    p = l(836501),
    M = l(735937),
    D = l(823712),
    y = l(606326),
    G = l(856768),
    L = l(332352),
    P = l(652215),
    k = l(746080),
    U = l(985018),
    w = l(256177),
    B = l(964623);

function O(e) {
    let {
        guild: t,
        currentTab: l,
        onTabSelect: s
    } = e, i = (0, j.W)(t.id), a = U.intl.string(U.t.oclz3Z), r = U.intl.string(U.t.oclz3Z);
    return (0, u.HU)({
        location: t.name,
        subsection: a
    }), (0, n.jsxs)(b.A, {
        className: w.wx,
        innerClassname: w.__invalid_innerHeader,
        channelId: k.VV.MEMBER_SAFETY,
        guildId: t.id,
        hideSearch: !0,
        children: [(0, n.jsx)(b.A.Icon, {
            icon: d.nFg,
            "aria-hidden": !0
        }), (0, n.jsx)(b.A.Title, {
            children: r
        }), i && (0, n.jsx)(D.A, {
            guildId: t.id,
            currentTab: l,
            onTabSelect: s
        })]
    })
}

function F(e) {
    let {
        guildId: t
    } = e, l = (0, f.H)({
        guildId: t
    }) ?? 0, [i, u] = s.useState(l > 0 ? S.D.PENDING : S.D.ALL_MEMBERS), j = (0, r.bG)([E.A], () => E.A.getGuild(t)), {
        analyticsLocations: b
    } = (0, c.Ay)(o.A.MEMBER_SAFETY_PAGE), D = (0, g.n)({
        guildId: t
    }), {
        guildJoinRequests: k
    } = (0, A.K)({
        guildId: t,
        applicationStatus: "ALL_MEMBERS" === i ? h.B5.SUBMITTED : i,
        sortOrder: D
    });
    s.useEffect(() => {
        j?.features.has(P.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL) || u(S.D.ALL_MEMBERS)
    }, [j]);
    let U = (0, C.fw)(t),
        F = (0, x.q)(t),
        q = s.useRef(null);
    (0, I.e)(t);
    let {
        fetchNextPage: z
    } = (0, _.K)({
        guildId: t,
        guildJoinRequests: k
    }), H = s.useCallback(async () => {
        if (i === S.D.ALL_MEMBERS) return;
        let e = q.current?.getScrollerState();
        null == e || e.scrollHeight - e.scrollTop - e.offsetHeight < 200 && await z(D, i)
    }, [i, i, D, z]), V = s.useCallback(async e => {
        i === e || (u(e), m.A.setSelectedGuildJoinRequest(t, null), "ALL_MEMBERS" !== e && await z(D, e))
    }, [i, t, z, D]);
    s.useEffect(() => {
        if (!U && null != j) {
            let e = N.Ay.getDefaultChannel(j.id)?.id;
            (0, v.uh)(j.id, e)
        }
    }, [j, U]);
    let Q = (0, r.bG)([T.Ay], () => null != T.Ay.getGuildSidebarState(t), [t]);
    return null != j && U ? (0, n.jsxs)(c.f5, {
        value: b,
        children: [(0, n.jsxs)("div", {
            className: a()(B.TE, w.MY, {
                [B.js]: Q
            }),
            children: [(0, n.jsx)(O, {
                guild: j,
                currentTab: i,
                onTabSelect: V
            }), (0, n.jsx)(d.T7Y, {
                onScroll: H,
                ref: q,
                orientation: "vertical",
                children: (0, n.jsx)("div", {
                    className: a()(B.Qs, w.kL),
                    children: i === S.D.ALL_MEMBERS ? (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)(M.A, {
                            guild: j
                        }), (0, n.jsx)(L.A, {
                            guild: j
                        })]
                    }) : (0, n.jsx)(p.A, {
                        guildId: j.id,
                        currentTab: i
                    })
                })
            }), (0, n.jsx)(G.A, {
                guildId: j.id
            })]
        }), F && (i === S.D.ALL_MEMBERS ? (0, n.jsx)(y.A, {
            guildId: j.id
        }) : (0, n.jsx)(R.A, {
            guildId: j.id
        }))]
    }) : null
}