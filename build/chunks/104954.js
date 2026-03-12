/** chunk id: 104954 params = (module,exports,require) **/
n.d(t, {
    $: () => o,
    s: () => a
});
var i = n(562465),
    s = n(73153),
    l = n(631670),
    r = n(652215);

function a() {
    return s.h.dispatch({
        type: "LOAD_DATA_HARVEST_TYPE_START"
    }), i.Bo.get({
        url: r.Rsh.USER_HARVEST,
        oldFormErrors: !0,
        rejectWithError: !1
    }).then(e => {
        s.h.dispatch({
            type: "UPDATE_DATA_HARVEST_TYPE",
            harvestType: e.body
        })
    }).catch(e => {
        s.h.dispatch({
            type: "LOAD_DATA_HARVEST_TYPE_FAILURE",
            error: e
        })
    })
}

function o(e) {
    return (0, l.$I)(e).then(e => (null != e && null != e.body && s.h.dispatch({
        type: "UPDATE_DATA_HARVEST_TYPE",
        harvestType: e.body
    }), e))
}