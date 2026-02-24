/** chunk id: 994717, original params: e,t,n (module,exports,require) **/
n.d(t, {
    C: () => a
});
var i = n(636401),
    r = n(613057),
    l = n(652215);

function a(e) {
    if (r.z4.IPC !== e && r.z4.POST_MESSAGE !== e) throw new i.A({
        errorCode: l.Lw6.INVALID_COMMAND
    }, "Invalid transport.")
}