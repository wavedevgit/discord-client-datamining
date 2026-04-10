/** chunk id: 920603 params = (module,exports,require) **/
n.d(t, {
    v: () => a
});
var i = n(562465),
    s = n(73153),
    l = n(74396),
    r = n(652215);

function a() {
    l.A.isFetching() || (s.h.dispatch({
        type: "SAVED_CUSTOM_THEMES_FETCH_START"
    }), i.Bo.get({
        url: r.Rsh.USERS_ME_CUSTOM_THEMES,
        oldFormErrors: !0,
        rejectWithError: !0
    }).then(e => {
        s.h.dispatch({
            type: "SAVED_CUSTOM_THEMES_FETCH_SUCCESS",
            themes: e.body?.custom_themes ?? []
        })
    }).catch(e => {
        s.h.dispatch({
            type: "SAVED_CUSTOM_THEMES_FETCH_FAILURE",
            error: e
        })
    }))
}