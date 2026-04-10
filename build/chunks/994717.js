/** chunk id: 994717 params = (module,exports,require) **/
n.d(t, {
    C: () => a
});
var i = n(636401),
    l = n(613057),
    r = n(652215);

function a(e) {
    if (l.z4.IPC !== e && l.z4.POST_MESSAGE !== e) throw new i.A({
        errorCode: r.Lw6.INVALID_COMMAND
    }, "Invalid transport.")
}