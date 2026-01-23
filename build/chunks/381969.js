/** Chunk was on web.js **/
/** chunk id: 381969, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => N,
    k: () => C
}), n(321073), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(284009),
    s = n.n(a),
    o = n(417597),
    l = n(554146),
    c = n(58149),
    u = n(826673),
    d = n(599941),
    f = n(960253),
    p = n(164956),
    _ = n(976860),
    h = n(808728),
    m = n(71393),
    g = n(954571),
    E = n(491026),
    y = n(486418),
    b = n(920814),
    O = n(284683),
    v = n(634654),
    A = n(652215);

function I(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function S(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            I(e, t, n[t])
        })
    }
    return e
}
let T = i.createContext(void 0);

function C() {
    let e = i.useContext(T);
    return s()(null != e, "must use useGuildShopDisplayContext within a GuildShopDisplayContextProvider"), e
}

function N(e) {
    var t;
    let {
        children: n,
        initialTab: a,
        guildId: s
    } = e, I = (0, o.bG)([m.A], () => m.A.getGuild(s)), C = (0, o.bG)([p.A], () => p.A.isViewingServerShop(s)), N = (0, y.P)(I, "guild_shop_page"), w = (0, E.YZ)(s, "guild_shop_page"), R = (null == I ? void 0 : I.features.has(A.GuildFeatures.PRODUCTS_AVAILABLE_FOR_PURCHASE)) === !0, P = (0, f.Oh)(null == I ? void 0 : I.id), D = P && w, x = null == (t = (0, d.Tq)(s)) ? void 0 : t.server_shop_tab_order, L = [], j = b.B.GUILD_SHOP_FULL_PREVIEW;
    C || R && P ? (L.push(x === O.HA.PRODUCTS_FIRST ? b.B.GUILD_PRODUCTS : b.B.GUILD_ROLE_SUBSCRIPTIONS), L.push(x === O.HA.PRODUCTS_FIRST ? b.B.GUILD_ROLE_SUBSCRIPTIONS : b.B.GUILD_PRODUCTS), j = L[0]) : R && !P ? (L.push(b.B.GUILD_PRODUCTS), j = b.B.GUILD_PRODUCTS) : !R && P && (L.push(b.B.GUILD_ROLE_SUBSCRIPTIONS), j = b.B.GUILD_ROLE_SUBSCRIPTIONS, N && L.push(b.B.GUILD_PRODUCTS_PREVIEW)), a = null != a ? a : j;
    let [M, k] = i.useState(a), U = N && !D || M === b.B.GUILD_PRODUCTS_PREVIEW;
    i.useEffect(() => {
        k(a)
    }, [a]);
    let G = e => {
        (0, u.Dr)(l.M.SERVER_SHOP_PHANTOM_PREVIEW);
        let t = S({}, (0, c.H$)(s));
        if (M === b.B.GUILD_PRODUCTS_PREVIEW) e.stopPropagation(), k(b.B.GUILD_ROLE_SUBSCRIPTIONS), t.action_taken = v.hN.DISMISS_TAB_PREVIEW;
        else {
            var n;
            (0, _.bG)(A.BVt.CHANNEL(s, null == (n = h.Ay.getDefaultChannel(s)) ? void 0 : n.id)), t.action_taken = v.hN.DISMISS_FULL_PREVIEW
        }
        g.default.track(A.HAw.GUILD_SHOP_PREVIEW_CLICK, t)
    };
    return (0, r.jsx)(T.Provider, {
        value: {
            selectedTab: M,
            setSelectedTab: k,
            categoryTabs: L,
            isPhantomPreview: U,
            handlePreviewDismiss: G
        },
        children: n
    })
}