/** chunk id: 964175, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => s
});
var i = n(311907),
    r = n(961350),
    l = n(309010),
    a = n(312006);

function s(e) {
    return (0, i.bG)([r.default, l.A, a.Ay], () => {
        let t = r.default.getId();
        return l.A.getVoiceChannelId() === e ? a.Ay.getPermissionsForUser(t, e) : null
    }, [e])
}