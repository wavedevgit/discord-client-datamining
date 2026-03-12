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
    _ = a(599941),
    d = a(960253),
    S = a(164956),
    p = a(976860),
    A = a(808728),
    m = a(71393),
    h = a(954571),
    I = a(491026),
    g = a(486418),
    C = a(920814),
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
    } = e, i = (0, s.bG)([m.A], () => m.A.getGuild(r)), f = (0, s.bG)([S.A], () => S.A.isViewingServerShop(r)), v = (0, g.P)(i, "guild_shop_page"), b = (0, I.YZ)(r, "guild_shop_page"), y = i?.features.has(R.GuildFeatures.PRODUCTS_AVAILABLE_FOR_PURCHASE) === !0, L = (0, d.Oh)(i?.id), P = (0, _.Tq)(r)?.server_shop_tab_order, N = [], G = C.B.GUILD_SHOP_FULL_PREVIEW;
    f || y && L ? (N.push(P === T.HA.PRODUCTS_FIRST ? C.B.GUILD_PRODUCTS : C.B.GUILD_ROLE_SUBSCRIPTIONS), N.push(P === T.HA.PRODUCTS_FIRST ? C.B.GUILD_ROLE_SUBSCRIPTIONS : C.B.GUILD_PRODUCTS), G = N[0]) : y && !L ? (N.push(C.B.GUILD_PRODUCTS), G = C.B.GUILD_PRODUCTS) : !y && L && (N.push(C.B.GUILD_ROLE_SUBSCRIPTIONS), G = C.B.GUILD_ROLE_SUBSCRIPTIONS, v && N.push(C.B.GUILD_PRODUCTS_PREVIEW)), a = a ?? G;
    let [U, O] = l.useState(a), x = v && !(L && b) || U === C.B.GUILD_PRODUCTS_PREVIEW;
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
                U === C.B.GUILD_PRODUCTS_PREVIEW ? (e.stopPropagation(), O(C.B.GUILD_ROLE_SUBSCRIPTIONS), t.action_taken = E.hN.DISMISS_TAB_PREVIEW) : ((0, p.bG)(R.BVt.CHANNEL(r, A.Ay.getDefaultChannel(r)?.id)), t.action_taken = E.hN.DISMISS_FULL_PREVIEW), h.default.track(R.HAw.GUILD_SHOP_PREVIEW_CLICK, t)
            }
        },
        children: t
    })
}