/** chunk id: 324593, original params: e,t,i (module,exports,require) **/
i.d(t, {
    A: () => a
});
var n = i(835245),
    s = i(187559);
let a = new class {
    searchSessionId = null;
    searchSessionStartTime = null;
    isQueryEnteredTracked = !1;
    getSearchSessionId() {
        return this.searchSessionId
    }
    isSessionActive() {
        return null != this.searchSessionId
    }
    initialize() {
        this.searchSessionId = (0, n.A)(), this.searchSessionStartTime = Date.now(), this.isQueryEnteredTracked = !1
    }
    maybeTrackQueryEntered() {
        this.isQueryEnteredTracked || ((0, s.j6)(), this.isQueryEnteredTracked = !0)
    }
    terminate() {
        null != this.searchSessionId && null != this.searchSessionStartTime && ((0, s.MH)({
            searchSessionDuration: Date.now() - this.searchSessionStartTime
        }), this.searchSessionId = null, this.searchSessionStartTime = null, this.isQueryEnteredTracked = !1)
    }
}