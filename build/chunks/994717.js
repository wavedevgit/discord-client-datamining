/** chunk id: 994717 params = (module,exports,require) **/
n.d(t, {
    C: () => r
});
var i = n(636401),
    l = n(613057),
    a = n(652215);

function r(e) {
    if (l.z4.IPC !== e && l.z4.POST_MESSAGE !== e) throw new i.A({
        errorCode: a.Lw6.INVALID_COMMAND
    }, "Invalid transport.")
}