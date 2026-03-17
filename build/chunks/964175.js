/** chunk id: 964175 params = (module,exports,require) **/
n.d(t, {
    A: () => s
});
var i = n(311907),
    a = n(961350),
    r = n(309010),
    l = n(312006);

function s(e) {
    return (0, i.bG)([a.default, r.A, l.Ay], () => {
        let t = a.default.getId();
        return r.A.getVoiceChannelId() === e ? l.Ay.getPermissionsForUser(t, e) : null
    }, [e])
}