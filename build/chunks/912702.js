/** chunk id: 912702 params = (module,exports,require) **/
n.d(t, {
    GI: () => s,
    Oo: () => d,
    Qm: () => o,
    py: () => r
});
var i = n(73153),
    a = n(198982),
    l = n(306522);
let s = async e => {
    i.h.dispatch({
        type: "GUILD_PRODUCTS_FETCH",
        guildId: e
    });
    try {
        let t = await l.oG(e);
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
}, r = async (e, t) => {
    i.h.dispatch({
        type: "GUILD_PRODUCT_FETCH",
        productId: t
    });
    try {
        let n = await l.bq(e, t);
        return i.h.dispatch({
            type: "GUILD_PRODUCT_FETCH_SUCCESS",
            product: n
        }), n
    } catch (e) {
        throw i.h.dispatch({
            type: "GUILD_PRODUCT_FETCH_FAILURE",
            productId: t,
            error: new a.LG(e)
        }), e
    }
};
async function o(e, t, n) {
    let a = await l.Qm(e, t, n);
    return i.h.dispatch({
        type: "GUILD_PRODUCT_UPDATE",
        product: a
    }), a
}
async function d(e, t) {
    return await l.Oo(e, t), i.h.dispatch({
        type: "GUILD_PRODUCT_DELETE",
        productId: t
    }), !0
}