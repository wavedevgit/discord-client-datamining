/** chunk id: 306522 params = (module,exports,require) **/
n.d(t, {
    Oo: () => o,
    P0: () => u,
    Qm: () => r,
    bq: () => c,
    oG: () => d
});
var i = n(562465),
    l = n(198982),
    s = n(371794),
    a = n(652215);
let r = async (e, t, n) => {
    let {
        priceTier: s,
        imageName: r,
        createNewRole: o,
        unlinkRole: d,
        ...c
    } = n;
    try {
        return (await i.Bo.patch({
            url: a.Rsh.GUILD_PRODUCT_LISTINGS(e, t),
            body: {
                ...c,
                image_name: r,
                price_tier: s,
                create_new_role: o,
                unlink_role: d
            },
            rejectWithError: !1
        })).body
    } catch (e) {
        throw new l.LG(e)
    }
}, o = async (e, t) => {
    try {
        await i.Bo.del({
            url: a.Rsh.GUILD_PRODUCT_LISTINGS(e, t),
            rejectWithError: !1
        })
    } catch (e) {
        throw new l.LG(e)
    }
}, d = async e => {
    try {
        return (await (0, s.aP)({
            url: a.Rsh.GUILD_PRODUCT_LISTINGS(e),
            rejectWithError: !1
        })).body.listings
    } catch (e) {
        throw new l.LG(e)
    }
}, c = async (e, t) => {
    try {
        return (await (0, s.aP)({
            url: a.Rsh.GUILD_PRODUCT_LISTINGS(e, t),
            rejectWithError: !1
        })).body
    } catch (e) {
        throw new l.LG(e)
    }
}, u = async e => {
    let {
        guildId: t,
        productId: n,
        attachmentId: s
    } = e;
    try {
        return (await i.Bo.post({
            url: a.Rsh.GUILD_PRODUCT_ATTACHMENT_DOWNLOAD(t, n, s),
            rejectWithError: !1
        })).body
    } catch (e) {
        throw new l.LG(e)
    }
}