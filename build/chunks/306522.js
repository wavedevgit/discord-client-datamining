/** chunk id: 306522 params = (module,exports,require) **/
n.d(t, {
    Oo: () => o,
    P0: () => u,
    Qm: () => s,
    bq: () => c,
    oG: () => d
});
var i = n(562465),
    r = n(198982),
    l = n(371794),
    a = n(652215);
let s = async (e, t, n) => {
    let {
        priceTier: l,
        imageName: s,
        createNewRole: o,
        unlinkRole: d,
        ...c
    } = n;
    try {
        return (await i.Bo.patch({
            url: a.Rsh.GUILD_PRODUCT_LISTINGS(e, t),
            body: {
                ...c,
                image_name: s,
                price_tier: l,
                create_new_role: o,
                unlink_role: d
            },
            rejectWithError: !1
        })).body
    } catch (e) {
        throw new r.LG(e)
    }
}, o = async (e, t) => {
    try {
        await i.Bo.del({
            url: a.Rsh.GUILD_PRODUCT_LISTINGS(e, t),
            rejectWithError: !1
        })
    } catch (e) {
        throw new r.LG(e)
    }
}, d = async e => {
    try {
        return (await (0, l.aP)({
            url: a.Rsh.GUILD_PRODUCT_LISTINGS(e),
            rejectWithError: !1
        })).body.listings
    } catch (e) {
        throw new r.LG(e)
    }
}, c = async (e, t) => {
    try {
        return (await (0, l.aP)({
            url: a.Rsh.GUILD_PRODUCT_LISTINGS(e, t),
            rejectWithError: !1
        })).body
    } catch (e) {
        throw new r.LG(e)
    }
}, u = async e => {
    let {
        guildId: t,
        productId: n,
        attachmentId: l
    } = e;
    try {
        return (await i.Bo.post({
            url: a.Rsh.GUILD_PRODUCT_ATTACHMENT_DOWNLOAD(t, n, l),
            rejectWithError: !1
        })).body
    } catch (e) {
        throw new r.LG(e)
    }
}