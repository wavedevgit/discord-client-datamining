/** chunk id: 994717 params = (module,exports,require) **/
n.d(t, {
    C: () => r
});
var i = n(636401),
    a = n(613057),
    l = n(652215);

function r(e) {
    if (a.z4.IPC !== e && a.z4.POST_MESSAGE !== e) throw new i.A({
        errorCode: l.Lw6.INVALID_COMMAND
    }, "Invalid transport.")
}