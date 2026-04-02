/** chunk id: 964175 params = (module,exports,require) **/
n.d(t, {
    A: () => s
});
var i = n(311907),
    l = n(961350),
    a = n(309010),
    r = n(312006);

function s(e) {
    return (0, i.bG)([l.default, a.A, r.Ay], () => {
        let t = l.default.getId();
        return a.A.getVoiceChannelId() === e ? r.Ay.getPermissionsForUser(t, e) : null
    }, [e])
}