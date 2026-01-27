/** Chunk was on 82575 **/
/** chunk id: 353171, original params: e,t,n (module,exports,require) **/
n.d(t, {
    s: () => r
});
var i = n(73153),
    s = n(303622);
let l = {};

function r(e) {
    let {
        enabled: t = !s.A.get(e)
    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l;
    i.h.dispatch({
        type: "LAB_FEATURE_TOGGLE",
        labFeature: e,
        enabled: t
    })
}