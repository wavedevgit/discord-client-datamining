/** chunk id: 112469 params = (module,exports,require) **/
n.d(e, {
    Tx: () => d,
    q9: () => s
});
var i = n(311907),
    l = n(71393),
    r = n(612025),
    u = n(652215);
let d = () => (0, r.xk)().selectedGuildId,
    s = () => {
        let t = d(),
            e = (0, i.bG)([l.A], () => l.A.getGuild(t));
        return e?.features.has(u.GuildFeatures.HUB) ?? !1
    }