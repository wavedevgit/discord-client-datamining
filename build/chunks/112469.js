/** chunk id: 112469 params = (module,exports,require) **/
e.d(_, {
    Tx: () => T,
    q9: () => n
});
var E = e(311907),
    A = e(71393),
    I = e(612025),
    S = e(652215);
let T = () => (0, I.xk)().selectedGuildId,
    n = () => {
        let t = T(),
            _ = (0, E.bG)([A.A], () => A.A.getGuild(t));
        return _?.features.has(S.GuildFeatures.HUB) ?? !1
    }