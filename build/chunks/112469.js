/** chunk id: 112469 params = (module,exports,require) **/
I.d(_, {
    Tx: () => t,
    q9: () => O
});
var A = I(311907),
    S = I(71393),
    T = I(612025),
    C = I(652215);
let t = () => (0, T.xk)().selectedGuildId,
    O = () => {
        let E = t(),
            _ = (0, A.bG)([S.A], () => S.A.getGuild(E));
        return _?.features.has(C.GuildFeatures.HUB) ?? !1
    }