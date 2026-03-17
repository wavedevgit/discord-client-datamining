/** chunk id: 112469 params = (module,exports,require) **/
E.d(t, {
    Tx: () => T,
    q9: () => n
});
var e = E(311907),
    A = E(71393),
    I = E(612025),
    S = E(652215);
let T = () => (0, I.xk)().selectedGuildId,
    n = () => {
        let _ = T(),
            t = (0, e.bG)([A.A], () => A.A.getGuild(_));
        return t?.features.has(S.GuildFeatures.HUB) ?? !1
    }