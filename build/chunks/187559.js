/** chunk id: 187559, original params: e,t,i (module,exports,require) **/
i.d(t, {
    MH: () => d,
    f1: () => r,
    j6: () => l
});
var n = i(954571),
    s = i(324593),
    a = i(652215);

function r() {
    n.default.track(a.HAw.USER_SETTINGS_SEARCH_PRESS)
}

function l() {
    n.default.track(a.HAw.USER_SETTINGS_SEARCH_QUERY_ENTERED, {
        search_session_id: s.A.getSearchSessionId()
    })
}

function d(e) {
    let {
        searchSessionDuration: t
    } = e;
    n.default.track(a.HAw.USER_SETTINGS_SEARCH_CLOSED, {
        search_session_id: s.A.getSearchSessionId(),
        search_session_duration_ms: t
    })
}