/** Chunk was on 49607 **/
/** chunk id: 811546, original params: e,t,u (module,exports,require) **/
u.d(t, {
    openGuildProductLink: () => o
});
var n = u(627968);
u(64700);
var r = u(397927),
    l = u(22007),
    i = u(71393),
    d = u(871109),
    c = u(652215);

function o(e, t) {
    var o;
    let a = i.A.getGuild(e);
    d.A.getGuildProductFetchState(t) === d.e.FETCHED && (null == (o = d.A.getGuildProduct(t)) ? void 0 : o.published) !== !0 && null != a ? (0, r.mMO)(async () => {
        let {
            default: e
        } = await u.e("57968").then(u.bind(u, 558067));
        return t => (0, n.jsx)(e, function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var u = null != arguments[t] ? arguments[t] : {},
                    n = Object.keys(u);
                "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(u).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(u, e).enumerable
                }))), n.forEach(function(t) {
                    var n;
                    n = u[t], t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n
                })
            }
            return e
        }({}, t))
    }) : (null == a ? void 0 : a.features.has(c.GuildFeatures.PRODUCTS_AVAILABLE_FOR_PURCHASE)) ? (0, l.A)(c.BVt.GUILD_PRODUCT(e, t)) : (0, l.A)(c.BVt.CHANNEL(e))
}