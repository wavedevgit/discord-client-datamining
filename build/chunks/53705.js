/** chunk id: 53705, original params: e,t,n (module,exports,require) **/
n.d(t, {
    $: () => s,
    L: () => i
});
var r = n(73153),
    l = n(154323);

function i(e, t) {
    let n = "boolean" == typeof t ? t : !l.A.get(e);
    r.h.dispatch({
        type: "DEV_TOOLS_DESIGN_TOGGLE_WEB_SET",
        toggle: e,
        value: n
    })
}

function s() {
    for (let e in l.A.enabled()) i(e, !1)
}