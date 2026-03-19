/** chunk id: 263834 params = (module,exports,require) **/
n.d(t, {
    L: () => l
});
var a = n(73153),
    i = n(865116);

function l(e, t) {
    let n = "boolean" == typeof t ? t : !i.Ay.get(e);
    a.h.dispatch({
        type: "DEV_TOOLS_DEV_SETTING_SET",
        toggle: e,
        value: n
    })
}