/** chunk id: 306522 params = (module,exports,require) **/
n.d(t, {
    Oo: () => o,
    P0: () => u,
    Qm: () => a,
    bq: () => c,
    oG: () => d
});
var i = n(562465),
    l = n(198982),
    r = n(371794),
    s = n(652215);
let a = async (e, t, n) => {
    let {
        priceTier: r,
        imageName: a,
        createNewRole: o,
        unlinkRole: d,
        ...c
    } = n;
    try {
        return (await i.Bo.patch({
            url: s.Rsh.GUILD_PRODUCT_LISTINGS(e, t),
            body: {
                ...c,
                image_name: a,
                price_tier: r,
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
            url: s.Rsh.GUILD_PRODUCT_LISTINGS(e, t),
            rejectWithError: !1
        })
    } catch (e) {
        throw new l.LG(e)
    }
}, d = async e => {
    try {
        return (await (0, r.aP)({
            url: s.Rsh.GUILD_PRODUCT_LISTINGS(e),
            rejectWithError: !1
        })).body.listings
    } catch (e) {
        throw new l.LG(e)
    }
}, c = async (e, t) => {
    try {
        return (await (0, r.aP)({
            url: s.Rsh.GUILD_PRODUCT_LISTINGS(e, t),
            rejectWithError: !1
        })).body
    } catch (e) {
        throw new l.LG(e)
    }
}, u = async e => {
    let {
        guildId: t,
        productId: n,
        attachmentId: r
    } = e;
    try {
        return (await i.Bo.post({
            url: s.Rsh.GUILD_PRODUCT_ATTACHMENT_DOWNLOAD(t, n, r),
            rejectWithError: !1
        })).body
    } catch (e) {
        throw new l.LG(e)
    }
}