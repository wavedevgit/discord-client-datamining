/** Chunk was on 60667 **/
/** chunk id: 104954, original params: e,t,n (module,exports,require) **/
n.d(t, {
    $: () => o,
    s: () => a
});
var r = n(562465),
    i = n(73153),
    l = n(631670),
    s = n(652215);

function a() {
    return i.h.dispatch({
        type: "LOAD_DATA_HARVEST_TYPE_START"
    }), r.Bo.get({
        url: s.Rsh.USER_HARVEST,
        oldFormErrors: !0,
        rejectWithError: !1
    }).then(e => {
        i.h.dispatch({
            type: "UPDATE_DATA_HARVEST_TYPE",
            harvestType: e.body
        })
    }).catch(e => {
        i.h.dispatch({
            type: "LOAD_DATA_HARVEST_TYPE_FAILURE",
            error: e
        })
    })
}

function o(e) {
    return (0, l.$I)(e).then(e => (null != e && null != e.body && i.h.dispatch({
        type: "UPDATE_DATA_HARVEST_TYPE",
        harvestType: e.body
    }), e))
}