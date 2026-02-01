/** chunk id: 353171, original params: e,t,n (module,exports,require) **/
n.d(t, {
    s: () => s
});
var r = n(73153),
    l = n(303622);
let i = {};

function s(e) {
    let {
        enabled: t = !l.A.get(e)
    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i;
    r.h.dispatch({
        type: "LAB_FEATURE_TOGGLE",
        labFeature: e,
        enabled: t
    })
}