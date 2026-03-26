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
    u = n(826673),
    d = n(440293),
    _ = n(599941),
    E = n(960253),
    A = n(164956),
    T = n(976860),
    I = n(808728),
    N = n(71393),
    p = n(954571),
    h = n(486418),
    m = n(920814),
    S = n(284683),
    C = n(634654),
    R = n(652215);
let g = l.createContext(void 0);

function O() {
    let e = l.useContext(g);
    return s()(null != e, "must use useGuildShopDisplayContext within a GuildShopDisplayContextProvider"), e
}

function y(e) {
    let {
        children: t,
        initialTab: n,
        guildId: r
    } = e, s = (0, a.bG)([N.A], () => N.A.getGuild(r)), O = (0, a.bG)([A.A], () => A.A.isViewingServerShop(r)), y = (0, h.P)(s), P = (0, d.w)(r), x = s?.features.has(R.GuildFeatures.PRODUCTS_AVAILABLE_FOR_PURCHASE) === !0, f = (0, E.Oh)(s?.id), D = (0, _.Tq)(r)?.server_shop_tab_order, L = [], U = m.B.GUILD_SHOP_FULL_PREVIEW;
    O || x && f ? (L.push(D === S.HA.PRODUCTS_FIRST ? m.B.GUILD_PRODUCTS : m.B.GUILD_ROLE_SUBSCRIPTIONS), L.push(D === S.HA.PRODUCTS_FIRST ? m.B.GUILD_ROLE_SUBSCRIPTIONS : m.B.GUILD_PRODUCTS), U = L[0]) : x && !f ? (L.push(m.B.GUILD_PRODUCTS), U = m.B.GUILD_PRODUCTS) : !x && f && (L.push(m.B.GUILD_ROLE_SUBSCRIPTIONS), U = m.B.GUILD_ROLE_SUBSCRIPTIONS, y && L.push(m.B.GUILD_PRODUCTS_PREVIEW)), n = n ?? U;
    let [M, j] = l.useState(n), b = y && !(f && P) || M === m.B.GUILD_PRODUCTS_PREVIEW;
    return l.useEffect(() => {
        j(n)
    }, [n]), (0, i.jsx)(g.Provider, {
        value: {
            selectedTab: M,
            setSelectedTab: j,
            categoryTabs: L,
            isPhantomPreview: b,
            handlePreviewDismiss: e => {
                (0, u.Dr)(o.M.SERVER_SHOP_PHANTOM_PREVIEW);
                let t = {
                    ...(0, c.H$)(r)
                };
                M === m.B.GUILD_PRODUCTS_PREVIEW ? (e.stopPropagation(), j(m.B.GUILD_ROLE_SUBSCRIPTIONS), t.action_taken = C.hN.DISMISS_TAB_PREVIEW) : ((0, T.bG)(R.BVt.CHANNEL(r, I.Ay.getDefaultChannel(r)?.id)), t.action_taken = C.hN.DISMISS_FULL_PREVIEW), p.default.track(R.HAw.GUILD_SHOP_PREVIEW_CLICK, t)
            }
        },
        children: t
    })
}