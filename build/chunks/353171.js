/** chunk id: 353171 params = (module,exports,require) **/
n.d(t, {
    s: () => a
});
var i = n(73153),
    s = n(303622);
let l = {};

function a(e) {
    let {
        enabled: t = !s.A.get(e)
    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l;
    i.h.dispatch({
        type: "LAB_FEATURE_TOGGLE",
        labFeature: e,
        enabled: t
    })
}