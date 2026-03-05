/** chunk id: 263834 params = (module,exports,require) **/
n.d(t, {
    L: () => l
});
var i = n(73153),
    s = n(865116);

function l(e, t) {
    let n = "boolean" == typeof t ? t : !s.Ay.get(e);
    i.h.dispatch({
        type: "DEV_TOOLS_DEV_SETTING_SET",
        toggle: e,
        value: n
    })
}