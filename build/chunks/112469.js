/** chunk id: 112469 params = (module,exports,require) **/
A.d(t, {
    Tx: () => I,
    q9: () => S
});
var E = A(311907),
    e = A(71393),
    C = A(612025),
    T = A(652215);
let I = () => (0, C.xk)().selectedGuildId,
    S = () => {
        let _ = I(),
            t = (0, E.bG)([e.A], () => e.A.getGuild(_));
        return t?.features.has(T.GuildFeatures.HUB) ?? !1
    }