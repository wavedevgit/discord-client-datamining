/** chunk id: 381969 params = (module,exports,require) **/
a.d(t, {
    A: () => v,
    k: () => f
}), a(321073);
var n = a(627968),
    l = a(64700),
    r = a(284009),
    i = a.n(r),
    s = a(417597),
    c = a(554146),
    o = a(58149),
    u = a(826673),
    _ = a(440293),
    d = a(599941),
    S = a(960253),
    p = a(164956),
    A = a(976860),
    m = a(808728),
    h = a(71393),
    I = a(954571),
    C = a(486418),
    g = a(920814),
    T = a(284683),
    E = a(634654),
    R = a(652215);
let D = 21552 == a.j ? l.createContext(void 0) : null;

function f() {
    let e = l.useContext(D);
    return i()(null != e, "must use useGuildShopDisplayContext within a GuildShopDisplayContextProvider"), e
}

function v(e) {
    let {
        children: t,
        initialTab: a,
        guildId: r
    } = e, i = (0, s.bG)([h.A], () => h.A.getGuild(r)), f = (0, s.bG)([p.A], () => p.A.isViewingServerShop(r)), v = (0, C.P)(i), b = (0, _.w)(r), y = i?.features.has(R.GuildFeatures.PRODUCTS_AVAILABLE_FOR_PURCHASE) === !0, L = (0, S.Oh)(i?.id), P = (0, d.Tq)(r)?.server_shop_tab_order, N = [], G = g.B.GUILD_SHOP_FULL_PREVIEW;
    f || y && L ? (N.push(P === T.HA.PRODUCTS_FIRST ? g.B.GUILD_PRODUCTS : g.B.GUILD_ROLE_SUBSCRIPTIONS), N.push(P === T.HA.PRODUCTS_FIRST ? g.B.GUILD_ROLE_SUBSCRIPTIONS : g.B.GUILD_PRODUCTS), G = N[0]) : y && !L ? (N.push(g.B.GUILD_PRODUCTS), G = g.B.GUILD_PRODUCTS) : !y && L && (N.push(g.B.GUILD_ROLE_SUBSCRIPTIONS), G = g.B.GUILD_ROLE_SUBSCRIPTIONS, v && N.push(g.B.GUILD_PRODUCTS_PREVIEW)), a = a ?? G;
    let [U, O] = l.useState(a), x = v && !(L && b) || U === g.B.GUILD_PRODUCTS_PREVIEW;
    return l.useEffect(() => {
        O(a)
    }, [a]), (0, n.jsx)(D.Provider, {
        value: {
            selectedTab: U,
            setSelectedTab: O,
            categoryTabs: N,
            isPhantomPreview: x,
            handlePreviewDismiss: e => {
                (0, u.Dr)(c.M.SERVER_SHOP_PHANTOM_PREVIEW);
                let t = {
                    ...(0, o.H$)(r)
                };
                U === g.B.GUILD_PRODUCTS_PREVIEW ? (e.stopPropagation(), O(g.B.GUILD_ROLE_SUBSCRIPTIONS), t.action_taken = E.hN.DISMISS_TAB_PREVIEW) : ((0, A.bG)(R.BVt.CHANNEL(r, m.Ay.getDefaultChannel(r)?.id)), t.action_taken = E.hN.DISMISS_FULL_PREVIEW), I.default.track(R.HAw.GUILD_SHOP_PREVIEW_CLICK, t)
            }
        },
        children: t
    })
}