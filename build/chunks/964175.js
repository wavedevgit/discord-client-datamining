/** chunk id: 964175 params = (module,exports,require) **/
n.d(t, {
    A: () => s
});
var i = n(311907),
    l = n(961350),
    r = n(309010),
    a = n(312006);

function s(e) {
    return (0, i.bG)([l.default, r.A, a.Ay], () => {
        let t = l.default.getId();
        return r.A.getVoiceChannelId() === e ? a.Ay.getPermissionsForUser(t, e) : null
    }, [e])
}