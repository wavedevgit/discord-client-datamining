/** chunk id: 881268 params = (module,exports,require) **/
n.d(t, {
    X: () => l
});
var i = n(562465),
    a = n(198982),
    r = n(652215);
let l = async (e, t) => {
    try {
        return (await i.Bo.get({
            url: r.Rsh.PRICE_TIERS,
            query: {
                price_tier_type: t,
                guild_id: e
            },
            rejectWithError: !1
        })).body
    } catch (e) {
        throw new a.LG(e)
    }
}