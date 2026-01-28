/** Chunk was on 5606 **/
/** chunk id: 318785, original params: e,t,n (module,exports,require) **/
n.d(t, {
    b: () => a
});
var r = n(311907),
    i = n(696451),
    l = n(71393),
    s = n(685073);

function a() {
    return (0, r.yK)([l.A, i.Ay], () => l.A.getGuildsArray().filter(e => {
        var t, n;
        return (0, s.Rg)(e) && (null == (t = i.Ay.getSelfMember(e.id)) ? void 0 : t.joinedAt) != null && (null == (n = e.profile) ? void 0 : n.tag) != null
    }))
}