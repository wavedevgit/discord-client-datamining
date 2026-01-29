/** Chunk was on 2827 **/
/** chunk id: 920603, original params: e,t,n (module,exports,require) **/
n.d(t, {
    v: () => a
});
var r = n(562465),
    i = n(73153),
    l = n(74396),
    s = n(652215);

function a() {
    l.A.isFetching() || (i.h.dispatch({
        type: "SAVED_CUSTOM_THEMES_FETCH_START"
    }), r.Bo.get({
        url: s.Rsh.USERS_ME_CUSTOM_THEMES,
        oldFormErrors: !0,
        rejectWithError: !0
    }).then(e => {
        var t, n;
        i.h.dispatch({
            type: "SAVED_CUSTOM_THEMES_FETCH_SUCCESS",
            themes: null != (t = null == (n = e.body) ? void 0 : n.custom_themes) ? t : []
        })
    }).catch(e => {
        i.h.dispatch({
            type: "SAVED_CUSTOM_THEMES_FETCH_FAILURE",
            error: e
        })
    }))
}