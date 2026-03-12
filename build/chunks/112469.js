/** chunk id: 112469 params = (module,exports,require) **/
A.d(_, {
    Tx: () => e,
    q9: () => C
});
var I = A(311907),
    T = A(71393),
    S = A(612025),
    t = A(652215);
let e = () => (0, S.xk)().selectedGuildId,
    C = () => {
        let E = e(),
            _ = (0, I.bG)([T.A], () => T.A.getGuild(E));
        return _?.features.has(t.GuildFeatures.HUB) ?? !1
    }