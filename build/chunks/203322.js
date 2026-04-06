/** chunk id: 203322 params = (module,exports,require) **/
n.d(t, {
    A: () => r
});
var i = n(73153),
    a = n(395011);

function r(e, t) {
    a.A.getPopoutInitializationStages()[e] !== t && i.h.dispatch({
        type: "OVERLAY_OOP_POPOUT_INITIALIZATION_STAGE_CHANGED",
        update: {
            [e]: t
        }
    })
}
n(96175)