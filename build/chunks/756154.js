/** Chunk was on 99583 **/
/** chunk id: 756154, original params: e,t,l (module,exports,require) **/
l.r(t), l.d(t, {
    default: () => F
}), l(896048);
var n = l(627968),
    r = l(64700),
    i = l(503698),
    s = l.n(i),
    a = l(311907),
    o = l(397927),
    c = l(793574),
    d = l(688810),
    u = l(726249),
    x = l(985925),
    m = l(624458),
    j = l(513461),
    b = l(496767),
    h = l(663997),
    f = l(417718),
    g = l(324023),
    v = l(786180),
    _ = l(742589),
    A = l(976860),
    p = l(761640),
    T = l(808728),
    E = l(71393),
    S = l(836872),
    y = l(134413),
    O = l(202309),
    N = l(841933),
    I = l(836501),
    R = l(735937),
    C = l(823712),
    D = l(606326),
    P = l(856768),
    M = l(332352),
    w = l(652215),
    G = l(746080),
    L = l(985018),
    U = l(947256),
    k = l(638990);

function B(e) {
    let {
        guild: t,
        currentTab: l,
        onTabSelect: r
    } = e, i = (0, b.W)(t.id), s = L.intl.string(L.t.oclz3Z), a = L.intl.string(L.t.oclz3Z);
    return (0, u.HU)({
        location: t.name,
        subsection: s
    }), (0, n.jsxs)(_.A, {
        className: U.wx,
        innerClassname: U.__invalid_innerHeader,
        channelId: G.VV.MEMBER_SAFETY,
        guildId: t.id,
        hideSearch: !0,
        children: [(0, n.jsx)(_.A.Icon, {
            icon: o.nFg,
            "aria-hidden": !0
        }), (0, n.jsx)(_.A.Title, {
            children: a
        }), i && (0, n.jsx)(C.A, {
            guildId: t.id,
            currentTab: l,
            onTabSelect: r
        })]
    })
}

function F(e) {
    var t;
    let {
        guildId: l
    } = e, i = null != (t = (0, v.H)({
        guildId: l
    })) ? t : 0, [u, b] = r.useState(i > 0 ? S.D.PENDING : S.D.ALL_MEMBERS), _ = (0, a.bG)([E.A], () => E.A.getGuild(l)), {
        analyticsLocations: C
    } = (0, d.Ay)(c.A.MEMBER_SAFETY_PAGE), G = (0, f.n)({
        guildId: l
    }), {
        guildJoinRequests: L
    } = (0, g.K)({
        guildId: l,
        applicationStatus: "ALL_MEMBERS" === u ? j.B5.SUBMITTED : u,
        sortOrder: G
    });
    r.useEffect(() => {
        (null == _ ? void 0 : _.features.has(w.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL)) || b(S.D.ALL_MEMBERS)
    }, [_]);
    let F = (0, y.fw)(l),
        V = (0, x.q)(l),
        z = r.useRef(null);
    (0, O.e)(l);
    let {
        fetchNextPage: H
    } = (0, h.K)({
        guildId: l,
        guildJoinRequests: L
    }), q = r.useCallback(async () => {
        var e;
        if (u === S.D.ALL_MEMBERS) return;
        let t = null == (e = z.current) ? void 0 : e.getScrollerState();
        null == t || t.scrollHeight - t.scrollTop - t.offsetHeight < 200 && await H(G, u)
    }, [u, u, G, H]), Q = r.useCallback(async e => {
        u === e || (b(e), m.A.setSelectedGuildJoinRequest(l, null), "ALL_MEMBERS" !== e && await H(G, e))
    }, [u, l, H, G]);
    r.useEffect(() => {
        if (!F && null != _) {
            var e;
            let t = null == (e = T.Ay.getDefaultChannel(_.id)) ? void 0 : e.id;
            (0, A.uh)(_.id, t)
        }
    }, [_, F]);
    let W = (0, a.bG)([p.Ay], () => null != p.Ay.getGuildSidebarState(l), [l]);
    return null != _ && F ? (0, n.jsxs)(d.f5, {
        value: C,
        children: [(0, n.jsxs)("div", {
            className: s()(k.TE, U.MY, {
                [k.js]: W
            }),
            children: [(0, n.jsx)(B, {
                guild: _,
                currentTab: u,
                onTabSelect: Q
            }), (0, n.jsx)(o.T7Y, {
                onScroll: q,
                ref: z,
                orientation: "vertical",
                children: (0, n.jsx)("div", {
                    className: s()(k.Qs, U.kL),
                    children: u === S.D.ALL_MEMBERS ? (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)(R.A, {
                            guild: _
                        }), (0, n.jsx)(M.A, {
                            guild: _
                        })]
                    }) : (0, n.jsx)(I.A, {
                        guildId: _.id,
                        currentTab: u
                    })
                })
            }), (0, n.jsx)(P.A, {
                guildId: _.id
            })]
        }), V && (u === S.D.ALL_MEMBERS ? (0, n.jsx)(D.A, {
            guildId: _.id
        }) : (0, n.jsx)(N.A, {
            guildId: _.id
        }))]
    }) : null
}