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
    N = n(954571),
    p = n(491026),
    m = n(486418),
    R = n(920814),
    h = n(284683),
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
    } = e, s = (0, a.bG)([I.A], () => I.A.getGuild(r)), O = (0, a.bG)([E.A], () => E.A.isViewingServerShop(r)), y = (0, m.P)(s, "guild_shop_page"), x = (0, p.YZ)(r, "guild_shop_page"), f = s?.features.has(g.GuildFeatures.PRODUCTS_AVAILABLE_FOR_PURCHASE) === !0, P = (0, _.Oh)(s?.id), D = (0, u.Tq)(r)?.server_shop_tab_order, U = [], M = R.B.GUILD_SHOP_FULL_PREVIEW;
    O || f && P ? (U.push(D === h.HA.PRODUCTS_FIRST ? R.B.GUILD_PRODUCTS : R.B.GUILD_ROLE_SUBSCRIPTIONS), U.push(D === h.HA.PRODUCTS_FIRST ? R.B.GUILD_ROLE_SUBSCRIPTIONS : R.B.GUILD_PRODUCTS), M = U[0]) : f && !P ? (U.push(R.B.GUILD_PRODUCTS), M = R.B.GUILD_PRODUCTS) : !f && P && (U.push(R.B.GUILD_ROLE_SUBSCRIPTIONS), M = R.B.GUILD_ROLE_SUBSCRIPTIONS, y && U.push(R.B.GUILD_PRODUCTS_PREVIEW)), n = n ?? M;
    let [L, j] = l.useState(n), b = y && !(P && x) || L === R.B.GUILD_PRODUCTS_PREVIEW;
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
                L === R.B.GUILD_PRODUCTS_PREVIEW ? (e.stopPropagation(), j(R.B.GUILD_ROLE_SUBSCRIPTIONS), t.action_taken = S.hN.DISMISS_TAB_PREVIEW) : ((0, T.bG)(g.BVt.CHANNEL(r, A.Ay.getDefaultChannel(r)?.id)), t.action_taken = S.hN.DISMISS_FULL_PREVIEW), N.default.track(g.HAw.GUILD_SHOP_PREVIEW_CLICK, t)
            }
        },
        children: t
    })
}