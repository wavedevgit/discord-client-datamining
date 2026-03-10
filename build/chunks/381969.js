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
    R = n(486418),
    S = n(920814),
    m = n(284683),
    h = n(634654),
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
    } = e, s = (0, a.bG)([I.A], () => I.A.getGuild(r)), O = (0, a.bG)([E.A], () => E.A.isViewingServerShop(r)), y = (0, R.P)(s, "guild_shop_page"), x = (0, p.YZ)(r, "guild_shop_page"), P = s?.features.has(g.GuildFeatures.PRODUCTS_AVAILABLE_FOR_PURCHASE) === !0, D = (0, _.Oh)(s?.id), U = (0, u.Tq)(r)?.server_shop_tab_order, f = [], M = S.B.GUILD_SHOP_FULL_PREVIEW;
    O || P && D ? (f.push(U === m.HA.PRODUCTS_FIRST ? S.B.GUILD_PRODUCTS : S.B.GUILD_ROLE_SUBSCRIPTIONS), f.push(U === m.HA.PRODUCTS_FIRST ? S.B.GUILD_ROLE_SUBSCRIPTIONS : S.B.GUILD_PRODUCTS), M = f[0]) : P && !D ? (f.push(S.B.GUILD_PRODUCTS), M = S.B.GUILD_PRODUCTS) : !P && D && (f.push(S.B.GUILD_ROLE_SUBSCRIPTIONS), M = S.B.GUILD_ROLE_SUBSCRIPTIONS, y && f.push(S.B.GUILD_PRODUCTS_PREVIEW)), n = n ?? M;
    let [L, j] = l.useState(n), b = y && !(D && x) || L === S.B.GUILD_PRODUCTS_PREVIEW;
    return l.useEffect(() => {
        j(n)
    }, [n]), (0, i.jsx)(C.Provider, {
        value: {
            selectedTab: L,
            setSelectedTab: j,
            categoryTabs: f,
            isPhantomPreview: b,
            handlePreviewDismiss: e => {
                (0, d.Dr)(o.M.SERVER_SHOP_PHANTOM_PREVIEW);
                let t = {
                    ...(0, c.H$)(r)
                };
                L === S.B.GUILD_PRODUCTS_PREVIEW ? (e.stopPropagation(), j(S.B.GUILD_ROLE_SUBSCRIPTIONS), t.action_taken = h.hN.DISMISS_TAB_PREVIEW) : ((0, T.bG)(g.BVt.CHANNEL(r, A.Ay.getDefaultChannel(r)?.id)), t.action_taken = h.hN.DISMISS_FULL_PREVIEW), N.default.track(g.HAw.GUILD_SHOP_PREVIEW_CLICK, t)
            }
        },
        children: t
    })
}