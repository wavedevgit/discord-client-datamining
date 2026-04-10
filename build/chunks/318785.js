/** chunk id: 318785 params = (module,exports,require) **/
n.d(t, {
    b: () => a
});
var i = n(311907),
    s = n(696451),
    l = n(71393),
    r = n(685073);

function a() {
    return (0, i.yK)([l.A, s.Ay], () => l.A.getGuildsArray().filter(e => (0, r.Rg)(e) && s.Ay.getSelfMember(e.id)?.joinedAt != null && e.profile?.tag != null))
}