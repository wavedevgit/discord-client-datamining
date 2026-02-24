/** chunk id: 318785, original params: e,t,n (module,exports,require) **/
n.d(t, {
    b: () => r
});
var i = n(311907),
    s = n(696451),
    a = n(71393),
    l = n(685073);

function r() {
    return (0, i.yK)([a.A, s.Ay], () => a.A.getGuildsArray().filter(e => (0, l.Rg)(e) && s.Ay.getSelfMember(e.id)?.joinedAt != null && e.profile?.tag != null))
}