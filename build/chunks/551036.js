/** chunk id: 551036 params = (module,exports,require) **/
n.d(t, {
    A: () => O
});
var i = n(627968),
    a = n(64700),
    l = n(607399),
    r = n(311907),
    s = n(397927),
    o = n(384904),
    d = n(9113),
    c = n(726249),
    u = n(683271),
    A = n(936555),
    h = n(465932),
    _ = n(142120),
    m = n(742589),
    p = n(71393),
    g = n(615405),
    E = n(300233),
    I = n(217976),
    f = n(514179),
    C = n(715837),
    T = n(457830),
    N = n(167010),
    S = n(139613),
    x = n(746080),
    v = n(985018),
    b = n(599368);

function y(e) {
    let {
        guildId: t
    } = e, n = (0, r.bG)([p.A], () => p.A.getGuild(t), [t]), y = (0, r.bG)([_.A], () => _.A.isConnected()), O = (0, A.A)(t), L = (0, I.A)(t), R = (0, r.bG)([g.A], () => g.A.isSubscriptionFetching), P = (0, E.X)(), {
        shouldHideGuildPurchaseEntryPoints: D,
        restrictionsLoading: M
    } = (0, h.MH)(t), j = null == n || !P || R || M;
    (0, c.HU)({
        subsection: v.intl.string(v.t["KzCF/6"]),
        location: n?.name
    }), (0, d.A)(l.Fr ? "role-subscriptions-overview" : void 0);
    let w = y && (null == n || !(O || L) || D && !M);
    if (a.useEffect(() => {
            o.hP()
        }, []), a.useEffect(() => {
            w && !l.Fr && (0, u.B)(t, x.VV.ROLE_SUBSCRIPTIONS)
        }, [t, w]), l.Fr && w) {
        let e = null == n ? T.b.NOT_GUILD_MEMBER : T.b.GUILD_NOT_ELIGIBLE;
        return (0, i.jsx)(T.k, {
            errorType: e
        })
    }
    return (0, i.jsxs)("div", {
        className: b.kL,
        children: [(0, i.jsxs)(m.A, {
            toolbar: (0, i.jsx)(a.Fragment, {}),
            className: b.jr,
            children: [(0, i.jsx)(m.A.Icon, {
                icon: (0, s.kHD)(f.A),
                "aria-hidden": !0
            }), (0, i.jsx)(m.A.Title, {
                children: v.intl.string(v.t["KzCF/6"])
            })]
        }), (0, i.jsx)("div", {
            id: S.K
        }), (0, i.jsx)("div", {
            className: b.Qs,
            children: O ? (0, i.jsx)(s.d_W, {
                className: b.XG,
                children: (0, i.jsx)("div", {
                    className: b.gT,
                    children: j ? (0, i.jsx)(s.y$y, {}) : (0, i.jsx)(C.A, {
                        guild: n
                    })
                })
            }) : (0, i.jsx)(N.A, {})
        })]
    })
}

function O(e) {
    let {
        guildId: t
    } = e;
    return (0, i.jsx)(E.H, {
        guildId: t,
        refetchOnMount: !0,
        children: (0, i.jsx)(y, {
            guildId: t
        })
    })
}