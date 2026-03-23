/** chunk id: 112469 params = (module,exports,require) **/
n.d(t, {
    Tx: () => d,
    q9: () => s
});
var l = n(311907),
    r = n(71393),
    i = n(612025),
    u = n(652215);
let d = () => (0, i.xk)().selectedGuildId,
    s = () => {
        let e = d(),
            t = (0, l.bG)([r.A], () => r.A.getGuild(e));
        return t?.features.has(u.GuildFeatures.HUB) ?? !1
    }