/** chunk id: 187559 params = (module,exports,require) **/
n.d(t, {
    MH: () => d,
    j6: () => r
});
var i = n(954571),
    s = n(324593),
    a = n(652215);

function r() {
    i.default.track(a.HAw.USER_SETTINGS_SEARCH_QUERY_ENTERED, {
        search_session_id: s.A.getSearchSessionId()
    })
}

function d(e) {
    let {
        searchSessionDuration: t
    } = e;
    i.default.track(a.HAw.USER_SETTINGS_SEARCH_CLOSED, {
        search_session_id: s.A.getSearchSessionId(),
        search_session_duration_ms: t
    })
}