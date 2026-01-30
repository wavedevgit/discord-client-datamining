/** chunk id: 353171, original params: e,t,n (module,exports,require) **/
n.d(t, {
    s: () => r
});
var i = n(73153),
    l = n(303622);
let s = {};

function r(e) {
    let {
        enabled: t = !l.A.get(e)
    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s;
    i.h.dispatch({
        type: "LAB_FEATURE_TOGGLE",
        labFeature: e,
        enabled: t
    })
}