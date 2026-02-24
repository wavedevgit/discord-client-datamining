/** chunk id: 263834, original params: e,t,n (module,exports,require) **/
n.d(t, {
    L: () => a
});
var i = n(73153),
    s = n(865116);

function a(e, t) {
    let n = "boolean" == typeof t ? t : !s.Ay.get(e);
    i.h.dispatch({
        type: "DEV_TOOLS_DEV_SETTING_SET",
        toggle: e,
        value: n
    })
}