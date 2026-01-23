/** Chunk was on 47841 **/
/** chunk id: 599167, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => j
});
var r = n(627968),
    i = n(64700),
    l = n(311907),
    s = n(554146),
    a = n(397927),
    o = n(262828),
    c = n(826673),
    d = n(555337),
    u = n(959757),
    g = n(739455),
    m = n(380682),
    p = n(994870),
    f = n(400281),
    b = n(652215),
    h = n(705751),
    x = n(280215);

function j() {
    let e, t = (0, l.bG)([d.A], () => d.A.getGuild()),
        {
            application: n,
            loading: j
        } = (0, o.A)(null == t ? void 0 : t.id, h.S7.GUILD_ROLE_SUBSCRIPTIONS),
        _ = i.useRef(null),
        O = (0, u.A)(null != t ? t : void 0);
    i.useEffect(() => {
        null != t && (0, g.aV)(t) && (0, c.Dr)(s.M.SERVER_SUBSCRIPTION_SETTINGS_NEW_BADGE_TIER_TEMPLATE)
    }, [t]);
    let v = (null == t ? void 0 : t.features.has(b.GuildFeatures.CREATOR_MONETIZABLE)) === !1 && (null == t ? void 0 : t.features.has(b.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL)) === !1;
    return e = null == t || j ? (0, r.jsx)(a.y$y, {}) : null != O ? (0, r.jsx)(p.A, {
        guild: t,
        config: O
    }) : v ? (0, r.jsx)(f.A, {
        guild: t
    }) : (0, r.jsx)(m.A, {
        guild: t,
        application: n
    }), (0, r.jsx)("div", {
        className: x.ed,
        children: (0, r.jsx)("div", {
            className: x.V1,
            children: (0, r.jsx)(a.ArX, {
                className: x.iL,
                children: (0, r.jsx)("main", {
                    ref: _,
                    className: x.z1,
                    children: (0, r.jsx)(a.xpW, {
                        containerRef: _,
                        children: e
                    })
                })
            })
        })
    })
}