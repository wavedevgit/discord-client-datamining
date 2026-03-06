/** chunk id: 381969 params = (module,exports,require) **/
l.d(t, {
    A: () => L,
    k: () => C
}), l(321073);
var n = l(627968),
    i = l(64700),
    r = l(284009),
    s = l.n(r),
    u = l(417597),
    a = l(554146),
    o = l(58149),
    d = l(826673),
    c = l(599941),
    S = l(960253),
    _ = l(164956),
    A = l(976860),
    p = l(808728),
    I = l(71393),
    h = l(954571),
    E = l(491026),
    R = l(486418),
    T = l(920814),
    g = l(284683),
    f = l(634654),
    D = l(652215);
let m = 21552 == l.j ? i.createContext(void 0) : null;

function C() {
    let e = i.useContext(m);
    return s()(null != e, "must use useGuildShopDisplayContext within a GuildShopDisplayContextProvider"), e
}

function L(e) {
    let {
        children: t,
        initialTab: l,
        guildId: r
    } = e, s = (0, u.bG)([I.A], () => I.A.getGuild(r)), C = (0, u.bG)([_.A], () => _.A.isViewingServerShop(r)), L = (0, R.P)(s, "guild_shop_page"), v = (0, E.YZ)(r, "guild_shop_page"), G = s?.features.has(D.GuildFeatures.PRODUCTS_AVAILABLE_FOR_PURCHASE) === !0, N = (0, S.Oh)(s?.id), P = (0, c.Tq)(r)?.server_shop_tab_order, U = [], O = T.B.GUILD_SHOP_FULL_PREVIEW;
    C || G && N ? (U.push(P === g.HA.PRODUCTS_FIRST ? T.B.GUILD_PRODUCTS : T.B.GUILD_ROLE_SUBSCRIPTIONS), U.push(P === g.HA.PRODUCTS_FIRST ? T.B.GUILD_ROLE_SUBSCRIPTIONS : T.B.GUILD_PRODUCTS), O = U[0]) : G && !N ? (U.push(T.B.GUILD_PRODUCTS), O = T.B.GUILD_PRODUCTS) : !G && N && (U.push(T.B.GUILD_ROLE_SUBSCRIPTIONS), O = T.B.GUILD_ROLE_SUBSCRIPTIONS, L && U.push(T.B.GUILD_PRODUCTS_PREVIEW)), l = l ?? O;
    let [b, y] = i.useState(l), F = L && !(N && v) || b === T.B.GUILD_PRODUCTS_PREVIEW;
    return i.useEffect(() => {
        y(l)
    }, [l]), (0, n.jsx)(m.Provider, {
        value: {
            selectedTab: b,
            setSelectedTab: y,
            categoryTabs: U,
            isPhantomPreview: F,
            handlePreviewDismiss: e => {
                (0, d.Dr)(a.M.SERVER_SHOP_PHANTOM_PREVIEW);
                let t = {
                    ...(0, o.H$)(r)
                };
                b === T.B.GUILD_PRODUCTS_PREVIEW ? (e.stopPropagation(), y(T.B.GUILD_ROLE_SUBSCRIPTIONS), t.action_taken = f.hN.DISMISS_TAB_PREVIEW) : ((0, A.bG)(D.BVt.CHANNEL(r, p.Ay.getDefaultChannel(r)?.id)), t.action_taken = f.hN.DISMISS_FULL_PREVIEW), h.default.track(D.HAw.GUILD_SHOP_PREVIEW_CLICK, t)
            }
        },
        children: t
    })
}