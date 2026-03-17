/** chunk id: 912702 params = (module,exports,require) **/
n.d(t, {
    GI: () => a,
    Oo: () => d,
    Qm: () => o,
    py: () => s
});
var i = n(73153),
    l = n(198982),
    r = n(306522);
let a = async e => {
    i.h.dispatch({
        type: "GUILD_PRODUCTS_FETCH",
        guildId: e
    });
    try {
        let t = await r.oG(e);
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
        let n = await r.bq(e, t);
        return i.h.dispatch({
            type: "GUILD_PRODUCT_FETCH_SUCCESS",
            product: n
        }), n
    } catch (e) {
        throw i.h.dispatch({
            type: "GUILD_PRODUCT_FETCH_FAILURE",
            productId: t,
            error: new l.LG(e)
        }), e
    }
};
async function o(e, t, n) {
    let l = await r.Qm(e, t, n);
    return i.h.dispatch({
        type: "GUILD_PRODUCT_UPDATE",
        product: l
    }), l
}
async function d(e, t) {
    return await r.Oo(e, t), i.h.dispatch({
        type: "GUILD_PRODUCT_DELETE",
        productId: t
    }), !0
}