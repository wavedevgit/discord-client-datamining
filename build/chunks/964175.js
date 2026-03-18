/** chunk id: 964175 params = (module,exports,require) **/
n.d(t, {
    A: () => s
});
var i = n(311907),
    a = n(961350),
    l = n(309010),
    r = n(312006);

function s(e) {
    return (0, i.bG)([a.default, l.A, r.Ay], () => {
        let t = a.default.getId();
        return l.A.getVoiceChannelId() === e ? r.Ay.getPermissionsForUser(t, e) : null
    }, [e])
}