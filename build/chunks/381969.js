/** chunk id: 381969 params = (module,exports,require) **/
n.d(t, {
    A: () => b,
    k: () => S
}), n(321073);
var i = n(627968),
    l = n(64700),
    s = n(284009),
    a = n.n(s),
    r = n(417597),
    o = n(554146),
    d = n(58149),
    c = n(826673),
    u = n(440293),
    h = n(599941),
    A = n(960253),
    _ = n(164956),
    m = n(976860),
    p = n(808728),
    g = n(71393),
    f = n(954571),
    x = n(486418),
    E = n(920814),
    I = n(284683),
    C = n(634654),
    N = n(652215);
let T = l.createContext(void 0);

function S() {
    let e = l.useContext(T);
    return a()(null != e, "must use useGuildShopDisplayContext within a GuildShopDisplayContextProvider"), e
}

function b(e) {
    let {
        children: t,
        initialTab: n,
        guildId: s
    } = e, a = (0, r.bG)([g.A], () => g.A.getGuild(s)), S = (0, r.bG)([_.A], () => _.A.isViewingServerShop(s)), b = (0, x.P)(a), v = (0, u.w)(s), y = a?.features.has(N.GuildFeatures.PRODUCTS_AVAILABLE_FOR_PURCHASE) === !0, j = (0, A.Oh)(a?.id), R = (0, h.Tq)(s)?.server_shop_tab_order, O = [], L = E.B.GUILD_SHOP_FULL_PREVIEW;
    S || y && j ? (O.push(R === I.HA.PRODUCTS_FIRST ? E.B.GUILD_PRODUCTS : E.B.GUILD_ROLE_SUBSCRIPTIONS), O.push(R === I.HA.PRODUCTS_FIRST ? E.B.GUILD_ROLE_SUBSCRIPTIONS : E.B.GUILD_PRODUCTS), L = O[0]) : y && !j ? (O.push(E.B.GUILD_PRODUCTS), L = E.B.GUILD_PRODUCTS) : !y && j && (O.push(E.B.GUILD_ROLE_SUBSCRIPTIONS), L = E.B.GUILD_ROLE_SUBSCRIPTIONS, b && O.push(E.B.GUILD_PRODUCTS_PREVIEW)), n = n ?? L;
    let [M, D] = l.useState(n), U = b && !(j && v) || M === E.B.GUILD_PRODUCTS_PREVIEW;
    return l.useEffect(() => {
        D(n)
    }, [n]), (0, i.jsx)(T.Provider, {
        value: {
            selectedTab: M,
            setSelectedTab: D,
            categoryTabs: O,
            isPhantomPreview: U,
            handlePreviewDismiss: e => {
                (0, c.Dr)(o.M.SERVER_SHOP_PHANTOM_PREVIEW);
                let t = {
                    ...(0, d.H$)(s)
                };
                M === E.B.GUILD_PRODUCTS_PREVIEW ? (e.stopPropagation(), D(E.B.GUILD_ROLE_SUBSCRIPTIONS), t.action_taken = C.hN.DISMISS_TAB_PREVIEW) : ((0, m.bG)(N.BVt.CHANNEL(s, p.Ay.getDefaultChannel(s)?.id)), t.action_taken = C.hN.DISMISS_FULL_PREVIEW), f.default.track(N.HAw.GUILD_SHOP_PREVIEW_CLICK, t)
            }
        },
        children: t
    })
}