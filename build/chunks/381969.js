/** chunk id: 381969 params = (module,exports,require) **/
n.d(t, {
    A: () => y,
    k: () => O
}), n(321073);
var i = n(627968),
    l = n(64700),
    r = n(284009),
    s = n.n(r),
    a = n(417597),
    o = n(554146),
    c = n(58149),
    d = n(826673),
    u = n(599941),
    _ = n(960253),
    E = n(164956),
    T = n(976860),
    A = n(808728),
    I = n(71393),
    p = n(954571),
    N = n(491026),
    m = n(486418),
    h = n(920814),
    R = n(284683),
    S = n(634654),
    g = n(652215);
let C = l.createContext(void 0);

function O() {
    let e = l.useContext(C);
    return s()(null != e, "must use useGuildShopDisplayContext within a GuildShopDisplayContextProvider"), e
}

function y(e) {
    let {
        children: t,
        initialTab: n,
        guildId: r
    } = e, s = (0, a.bG)([I.A], () => I.A.getGuild(r)), O = (0, a.bG)([E.A], () => E.A.isViewingServerShop(r)), y = (0, m.P)(s, "guild_shop_page"), x = (0, N.YZ)(r, "guild_shop_page"), f = s?.features.has(g.GuildFeatures.PRODUCTS_AVAILABLE_FOR_PURCHASE) === !0, P = (0, _.Oh)(s?.id), D = (0, u.Tq)(r)?.server_shop_tab_order, U = [], M = h.B.GUILD_SHOP_FULL_PREVIEW;
    O || f && P ? (U.push(D === R.HA.PRODUCTS_FIRST ? h.B.GUILD_PRODUCTS : h.B.GUILD_ROLE_SUBSCRIPTIONS), U.push(D === R.HA.PRODUCTS_FIRST ? h.B.GUILD_ROLE_SUBSCRIPTIONS : h.B.GUILD_PRODUCTS), M = U[0]) : f && !P ? (U.push(h.B.GUILD_PRODUCTS), M = h.B.GUILD_PRODUCTS) : !f && P && (U.push(h.B.GUILD_ROLE_SUBSCRIPTIONS), M = h.B.GUILD_ROLE_SUBSCRIPTIONS, y && U.push(h.B.GUILD_PRODUCTS_PREVIEW)), n = n ?? M;
    let [L, j] = l.useState(n), b = y && !(P && x) || L === h.B.GUILD_PRODUCTS_PREVIEW;
    return l.useEffect(() => {
        j(n)
    }, [n]), (0, i.jsx)(C.Provider, {
        value: {
            selectedTab: L,
            setSelectedTab: j,
            categoryTabs: U,
            isPhantomPreview: b,
            handlePreviewDismiss: e => {
                (0, d.Dr)(o.M.SERVER_SHOP_PHANTOM_PREVIEW);
                let t = {
                    ...(0, c.H$)(r)
                };
                L === h.B.GUILD_PRODUCTS_PREVIEW ? (e.stopPropagation(), j(h.B.GUILD_ROLE_SUBSCRIPTIONS), t.action_taken = S.hN.DISMISS_TAB_PREVIEW) : ((0, T.bG)(g.BVt.CHANNEL(r, A.Ay.getDefaultChannel(r)?.id)), t.action_taken = S.hN.DISMISS_FULL_PREVIEW), p.default.track(g.HAw.GUILD_SHOP_PREVIEW_CLICK, t)
            }
        },
        children: t
    })
}