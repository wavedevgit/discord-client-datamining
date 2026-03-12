/** chunk id: 912702 params = (module,exports,require) **/
n.d(t, {
    GI: () => l,
    Oo: () => d,
    Qm: () => o,
    py: () => s
});
var i = n(73153),
    r = n(198982),
    a = n(306522);
let l = async e => {
    i.h.dispatch({
        type: "GUILD_PRODUCTS_FETCH",
        guildId: e
    });
    try {
        let t = await a.oG(e);
        i.h.dispatch({
            type: "GUILD_PRODUCTS_FETCH_SUCCESS",
            guildId: e,
            products: t
        })
    } catch (t) {
        i.h.dispatch({
            type: "GUILD_PRODUCTS_FETCH_FAILURE",
            guildId: e
        })
    }
}, s = async (e, t) => {
    i.h.dispatch({
        type: "GUILD_PRODUCT_FETCH",
        productId: t
    });
    try {
        let n = await a.bq(e, t);
        return i.h.dispatch({
            type: "GUILD_PRODUCT_FETCH_SUCCESS",
            product: n
        }), n
    } catch (e) {
        throw i.h.dispatch({
            type: "GUILD_PRODUCT_FETCH_FAILURE",
            productId: t,
            error: new r.LG(e)
        }), e
    }
};
async function o(e, t, n) {
    let r = await a.Qm(e, t, n);
    return i.h.dispatch({
        type: "GUILD_PRODUCT_UPDATE",
        product: r
    }), r
}
async function d(e, t) {
    return await a.Oo(e, t), i.h.dispatch({
        type: "GUILD_PRODUCT_DELETE",
        productId: t
    }), !0
}