/** Chunk was on web.js **/
/** chunk id: 177068, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    DX: () => p,
    MS: () => f
}), n(65821);
var r = n(488428),
    i = n(562465),
    a = n(626584),
    o = n(927813),
    s = n(652215);

function l(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
let c = 5e3,
    u = 5;
class d {
    async fetch(e, t, n) {
        if (!this.isCanceled) try {
            let i = await this.makeRequest({
                rejectWithError: !1
            });
            if (null == i || this.isCanceled) return;
            if (200 === i.status) e(i);
            else if (202 === i.status) {
                var r;
                if (this.query.attempts = (null != (r = this.query.attempts) ? r : 0) + 1, this.query.attempts > u) return;
                let a = parseInt(i.headers["retry-after"]);
                this.retryDelay = isNaN(a) || 0 === a ? c : a * o.A.Millis.SECOND, this.retryLater(e, t, n), t(i)
            }
        } catch (e) {
            new a.A("SearchFetcher").error(e), n(e)
        }
    }
    cancel() {
        this.isCanceled = !0, null != this.indexingPollId && clearTimeout(this.indexingPollId)
    }
    retryLater(e, t, n) {
        null != this.indexingPollId && clearTimeout(this.indexingPollId), this.indexingPollId = setTimeout(this.fetch.bind(this, e, t, n), this.retryDelay)
    }
    constructor(e, t, n) {
        l(this, "indexingPollId", void 0), l(this, "searchId", void 0), l(this, "searchType", void 0), l(this, "query", void 0), l(this, "retryDelay", void 0), l(this, "isCanceled", !1), this.searchId = e, this.searchType = t, this.query = n
    }
}
class f extends d {
    getEndpoint() {
        switch (this.searchType) {
            case s.I4_.FAVORITES:
                return s.Rsh.SEARCH_FAVORITES;
            case s.I4_.GUILD:
                if (null == this.searchId || "" === this.searchId) return;
                return s.Rsh.SEARCH_GUILD(this.searchId);
            case s.I4_.CHANNEL:
                if (null == this.searchId || "" === this.searchId) return;
                return s.Rsh.SEARCH_CHANNEL(this.searchId);
            default:
                throw Error("[SearchFetcher] Unhandled search type: ".concat(this.searchType))
        }
    }
    makeRequest(e) {
        let {
            rejectWithError: t
        } = e, n = this.getEndpoint();
        return null == n ? null : i.Bo.get({
            url: n,
            query: r.stringify(this.query),
            oldFormErrors: !0,
            rejectWithError: t
        })
    }
}
class p extends d {
    getEndpoint() {
        switch (this.searchType) {
            case s.I4_.DMS:
                return s.Rsh.SEARCH_TABS_DMS;
            case s.I4_.GUILD_CHANNEL:
            case s.I4_.GUILD:
            case s.I4_.THREAD:
                if (null == this.searchId || "" === this.searchId) return;
                return s.Rsh.SEARCH_TABS_GUILD(this.searchId);
            case s.I4_.CHANNEL:
                if (null == this.searchId || "" === this.searchId) return;
                return s.Rsh.SEARCH_TABS_CHANNEL(this.searchId);
            default:
                throw Error("[SearchFetcher] Unhandled search type: ".concat(this.searchType))
        }
    }
    makeRequest(e) {
        let {
            rejectWithError: t
        } = e, n = this.getEndpoint();
        return null == n ? null : i.Bo.post({
            url: n,
            body: this.payload,
            oldFormErrors: !0,
            rejectWithError: t
        })
    }
    constructor(e, t, n, r) {
        super(e, t, n), l(this, "payload", void 0), this.payload = r
    }
}