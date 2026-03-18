/** chunk id: 112469 params = (module,exports,require) **/
e.d(_, {
    Tx: () => S,
    q9: () => n
});
var E = e(311907),
    A = e(71393),
    I = e(612025),
    T = e(652215);
let S = () => (0, I.xk)().selectedGuildId,
    n = () => {
        let t = S(),
            _ = (0, E.bG)([A.A], () => A.A.getGuild(t));
        return _?.features.has(T.GuildFeatures.HUB) ?? !1
    }