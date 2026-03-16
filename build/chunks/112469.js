/** chunk id: 112469 params = (module,exports,require) **/
_.d(e, {
    Tx: () => S,
    q9: () => T
});
var E = _(311907),
    A = _(71393),
    I = _(612025),
    n = _(652215);
let S = () => (0, I.xk)().selectedGuildId,
    T = () => {
        let t = S(),
            e = (0, E.bG)([A.A], () => A.A.getGuild(t));
        return e?.features.has(n.GuildFeatures.HUB) ?? !1
    }