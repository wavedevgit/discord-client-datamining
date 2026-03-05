/** chunk id: 599167, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => f
});
var i = n(627968),
    s = n(64700),
    l = n(311907),
    r = n(554146),
    a = n(397927),
    o = n(262828),
    d = n(826673),
    c = n(555337),
    u = n(959757),
    m = n(739455),
    g = n(380682),
    x = n(994870),
    h = n(400281),
    _ = n(652215),
    p = n(705751),
    A = n(650433);

function f() {
    let e, t = (0, l.bG)([c.A], () => c.A.getGuild()),
        {
            application: n,
            loading: f
        } = (0, o.A)(t?.id, p.S7.GUILD_ROLE_SUBSCRIPTIONS),
        j = s.useRef(null),
        N = (0, u.A)(t ?? void 0);
    s.useEffect(() => {
        null != t && (0, m.aV)(t) && (0, d.Dr)(r.M.SERVER_SUBSCRIPTION_SETTINGS_NEW_BADGE_TIER_TEMPLATE)
    }, [t]);
    let E = t?.features.has(_.GuildFeatures.CREATOR_MONETIZABLE) === !1 && t?.features.has(_.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL) === !1;
    return e = null == t || f ? (0, i.jsx)(a.y$y, {}) : null != N ? (0, i.jsx)(x.A, {
        guild: t,
        config: N
    }) : E ? (0, i.jsx)(h.A, {
        guild: t
    }) : (0, i.jsx)(g.A, {
        guild: t,
        application: n
    }), (0, i.jsx)("div", {
        className: A.ed,
        children: (0, i.jsx)("div", {
            className: A.V1,
            children: (0, i.jsx)(a.ArX, {
                className: A.iL,
                children: (0, i.jsx)("main", {
                    ref: j,
                    className: A.z1,
                    children: (0, i.jsx)(a.xpW, {
                        containerRef: j,
                        children: e
                    })
                })
            })
        })
    })
}