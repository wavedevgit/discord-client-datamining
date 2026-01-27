/** Chunk was on 92917 **/
/** chunk id: 881268, original params: e,t,n (module,exports,require) **/
n.d(t, {
    X: () => a
});
var r = n(562465),
    i = n(198982),
    l = n(652215);
let a = async (e, t) => {
    try {
        return (await r.Bo.get({
            url: l.Rsh.PRICE_TIERS,
            query: {
                price_tier_type: t,
                guild_id: e
            },
            rejectWithError: !1
        })).body
    } catch (e) {
        throw new i.LG(e)
    }
}