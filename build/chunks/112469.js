/** chunk id: 112469 params = (module,exports,require) **/
I.d(_, {
    Tx: () => O,
    q9: () => t
});
var S = I(311907),
    A = I(71393),
    T = I(612025),
    C = I(652215);
let O = () => (0, T.xk)().selectedGuildId,
    t = () => {
        let E = O(),
            _ = (0, S.bG)([A.A], () => A.A.getGuild(E));
        return _?.features.has(C.GuildFeatures.HUB) ?? !1
    }