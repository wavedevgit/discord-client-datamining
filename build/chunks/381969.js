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
    E = n(486418),
    x = n(920814),
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
    } = e, a = (0, r.bG)([g.A], () => g.A.getGuild(s)), S = (0, r.bG)([_.A], () => _.A.isViewingServerShop(s)), b = (0, E.P)(a), y = (0, u.w)(s), v = a?.features.has(N.GuildFeatures.PRODUCTS_AVAILABLE_FOR_PURCHASE) === !0, R = (0, A.Oh)(a?.id), j = (0, h.Tq)(s)?.server_shop_tab_order, O = [], L = x.B.GUILD_SHOP_FULL_PREVIEW;
    S || v && R ? (O.push(j === I.HA.PRODUCTS_FIRST ? x.B.GUILD_PRODUCTS : x.B.GUILD_ROLE_SUBSCRIPTIONS), O.push(j === I.HA.PRODUCTS_FIRST ? x.B.GUILD_ROLE_SUBSCRIPTIONS : x.B.GUILD_PRODUCTS), L = O[0]) : v && !R ? (O.push(x.B.GUILD_PRODUCTS), L = x.B.GUILD_PRODUCTS) : !v && R && (O.push(x.B.GUILD_ROLE_SUBSCRIPTIONS), L = x.B.GUILD_ROLE_SUBSCRIPTIONS, b && O.push(x.B.GUILD_PRODUCTS_PREVIEW)), n = n ?? L;
    let [M, D] = l.useState(n), U = b && !(R && y) || M === x.B.GUILD_PRODUCTS_PREVIEW;
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
                M === x.B.GUILD_PRODUCTS_PREVIEW ? (e.stopPropagation(), D(x.B.GUILD_ROLE_SUBSCRIPTIONS), t.action_taken = C.hN.DISMISS_TAB_PREVIEW) : ((0, m.bG)(N.BVt.CHANNEL(s, p.Ay.getDefaultChannel(s)?.id)), t.action_taken = C.hN.DISMISS_FULL_PREVIEW), f.default.track(N.HAw.GUILD_SHOP_PREVIEW_CLICK, t)
            }
        },
        children: t
    })
}