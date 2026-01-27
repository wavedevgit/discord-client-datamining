/** Chunk was on 41727 **/
/** chunk id: 87941, original params: e,t,n (module,exports,require) **/
n.d(t, {
    q: () => a
});
var r = n(960488),
    l = n(394953),
    i = n(366811),
    s = n(652215);

function a() {
    let e = (0, i.A)(e => e.guildId),
        {
            pathname: t
        } = (0, r.zy)(),
        n = t.startsWith(s.BVt.GUILD_DISCOVERY) || t.startsWith(s.BVt.GLOBAL_DISCOVERY),
        a = t.startsWith(s.BVt.GUILD_MEMBER_VERIFICATION("")),
        o = (0, l.lI)();
    return null == e && !(n || a || o)
}