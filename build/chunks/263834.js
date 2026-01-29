/** Chunk was on 32502 **/
/** chunk id: 263834, original params: e,t,n (module,exports,require) **/
n.d(t, {
    L: () => s
});
var i = n(73153),
    l = n(865116);

function s(e, t) {
    let n = "boolean" == typeof t ? t : !l.Ay.get(e);
    i.h.dispatch({
        type: "DEV_TOOLS_DEV_SETTING_SET",
        toggle: e,
        value: n
    })
}