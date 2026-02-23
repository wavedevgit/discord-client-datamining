/** chunk id: 112469, original params: e,t,n (module,exports,require) **/
n.d(t, {
    Tx: () => l,
    q9: () => o
});
var i = n(311907),
    s = n(71393),
    a = n(612025),
    r = n(652215);
let l = () => (0, a.xk)().selectedGuildId,
    o = () => {
        let e = l(),
            t = (0, i.bG)([s.A], () => s.A.getGuild(e));
        return t?.features.has(r.GuildFeatures.HUB) ?? !1
    }