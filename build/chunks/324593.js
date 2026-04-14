/** chunk id: 324593 params = (module,exports,require) **/
n.d(t, {
    A: () => l
});
var i = n(835245),
    r = n(187559);
let l = new class {
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
        this.searchSessionId = (0, i.A)(), this.searchSessionStartTime = Date.now(), this.isQueryEnteredTracked = !1
    }
    maybeTrackQueryEntered() {
        this.isQueryEnteredTracked || ((0, r.j6)(), this.isQueryEnteredTracked = !0)
    }
    terminate() {
        null != this.searchSessionId && null != this.searchSessionStartTime && ((0, r.MH)({
            searchSessionDuration: Date.now() - this.searchSessionStartTime
        }), this.searchSessionId = null, this.searchSessionStartTime = null, this.isQueryEnteredTracked = !1)
    }
}