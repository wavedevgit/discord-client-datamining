/** chunk id: 881268 params = (module,exports,require) **/
n.d(t, {
    X: () => a
});
var i = n(562465),
    r = n(198982),
    l = n(652215);
let a = async (e, t) => {
    try {
        return (await i.Bo.get({
            url: l.Rsh.PRICE_TIERS,
            query: {
                price_tier_type: t,
                guild_id: e
            },
            rejectWithError: !1
        })).body
    } catch (e) {
        throw new r.LG(e)
    }
}