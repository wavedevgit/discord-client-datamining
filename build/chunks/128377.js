/** chunk id: 128377, original params: t,e,r (module,exports,require) **/
"use strict";
r.d(e, {
    H: () => l
});
var s = r(680753),
    i = r(875565),
    n = r(272469),
    o = r(231577),
    a = r(834932),
    c = r(83220),
    u = r(487851),
    h = r(286788);
class d {
    constructor() {
        this._notifyingListeners = !1, this._scopeListeners = [], this._eventProcessors = [], this._breadcrumbs = [], this._attachments = [], this._user = {}, this._tags = {}, this._extra = {}, this._contexts = {}, this._sdkProcessingMetadata = {}, this._propagationContext = {
            traceId: (0, a.el)(),
            spanId: (0, a.ZF)()
        }
    }
    clone() {
        let t = new d;
        return t._breadcrumbs = [...this._breadcrumbs], t._tags = {
            ...this._tags
        }, t._extra = {
            ...this._extra
        }, t._contexts = {
            ...this._contexts
        }, this._contexts.flags && (t._contexts.flags = {
            values: [...this._contexts.flags.values]
        }), t._user = this._user, t._level = this._level, t._session = this._session, t._transactionName = this._transactionName, t._fingerprint = this._fingerprint, t._eventProcessors = [...this._eventProcessors], t._requestSession = this._requestSession, t._attachments = [...this._attachments], t._sdkProcessingMetadata = {
            ...this._sdkProcessingMetadata
        }, t._propagationContext = {
            ...this._propagationContext
        }, t._client = this._client, t._lastEventId = this._lastEventId, (0, h.r)(t, (0, h.f)(this)), t
    }
    setClient(t) {
        this._client = t
    }
    setLastEventId(t) {
        this._lastEventId = t
    }
    getClient() {
        return this._client
    }
    lastEventId() {
        return this._lastEventId
    }
    addScopeListener(t) {
        this._scopeListeners.push(t)
    }
    addEventProcessor(t) {
        return this._eventProcessors.push(t), this
    }
    setUser(t) {
        return this._user = t || {
            email: void 0,
            id: void 0,
            ip_address: void 0,
            username: void 0
        }, this._session && (0, s.qO)(this._session, {
            user: t
        }), this._notifyScopeListeners(), this
    }
    getUser() {
        return this._user
    }
    getRequestSession() {
        return this._requestSession
    }
    setRequestSession(t) {
        return this._requestSession = t, this
    }
    setTags(t) {
        return this._tags = {
            ...this._tags,
            ...t
        }, this._notifyScopeListeners(), this
    }
    setTag(t, e) {
        return this._tags = {
            ...this._tags,
            [t]: e
        }, this._notifyScopeListeners(), this
    }
    setExtras(t) {
        return this._extra = {
            ...this._extra,
            ...t
        }, this._notifyScopeListeners(), this
    }
    setExtra(t, e) {
        return this._extra = {
            ...this._extra,
            [t]: e
        }, this._notifyScopeListeners(), this
    }
    setFingerprint(t) {
        return this._fingerprint = t, this._notifyScopeListeners(), this
    }
    setLevel(t) {
        return this._level = t, this._notifyScopeListeners(), this
    }
    setTransactionName(t) {
        return this._transactionName = t, this._notifyScopeListeners(), this
    }
    setContext(t, e) {
        return null === e ? delete this._contexts[t] : this._contexts[t] = e, this._notifyScopeListeners(), this
    }
    setSession(t) {
        return t ? this._session = t : delete this._session, this._notifyScopeListeners(), this
    }
    getSession() {
        return this._session
    }
    update(t) {
        if (!t) return this;
        let e = "function" == typeof t ? t(this) : t,
            [r, s] = e instanceof l ? [e.getScopeData(), e.getRequestSession()] : (0, i.Qd)(e) ? [t, t.requestSession] : [],
            {
                tags: n,
                extra: o,
                user: a,
                contexts: c,
                level: u,
                fingerprint: h = [],
                propagationContext: d
            } = r || {};
        return this._tags = {
            ...this._tags,
            ...n
        }, this._extra = {
            ...this._extra,
            ...o
        }, this._contexts = {
            ...this._contexts,
            ...c
        }, a && Object.keys(a).length && (this._user = a), u && (this._level = u), h.length && (this._fingerprint = h), d && (this._propagationContext = d), s && (this._requestSession = s), this
    }
    clear() {
        return this._breadcrumbs = [], this._tags = {}, this._extra = {}, this._user = {}, this._contexts = {}, this._level = void 0, this._transactionName = void 0, this._fingerprint = void 0, this._requestSession = void 0, this._session = void 0, (0, h.r)(this, void 0), this._attachments = [], this.setPropagationContext({
            traceId: (0, a.el)()
        }), this._notifyScopeListeners(), this
    }
    addBreadcrumb(t, e) {
        let r = "number" == typeof e ? e : 100;
        if (r <= 0) return this;
        let s = {
            timestamp: (0, c.lu)(),
            ...t
        };
        return this._breadcrumbs.push(s), this._breadcrumbs.length > r && (this._breadcrumbs = this._breadcrumbs.slice(-r), this._client && this._client.recordDroppedEvent("buffer_overflow", "log_item")), this._notifyScopeListeners(), this
    }
    getLastBreadcrumb() {
        return this._breadcrumbs[this._breadcrumbs.length - 1]
    }
    clearBreadcrumbs() {
        return this._breadcrumbs = [], this._notifyScopeListeners(), this
    }
    addAttachment(t) {
        return this._attachments.push(t), this
    }
    clearAttachments() {
        return this._attachments = [], this
    }
    getScopeData() {
        return {
            breadcrumbs: this._breadcrumbs,
            attachments: this._attachments,
            contexts: this._contexts,
            tags: this._tags,
            extra: this._extra,
            user: this._user,
            level: this._level,
            fingerprint: this._fingerprint || [],
            eventProcessors: this._eventProcessors,
            propagationContext: this._propagationContext,
            sdkProcessingMetadata: this._sdkProcessingMetadata,
            transactionName: this._transactionName,
            span: (0, h.f)(this)
        }
    }
    setSDKProcessingMetadata(t) {
        return this._sdkProcessingMetadata = (0, u.h)(this._sdkProcessingMetadata, t, 2), this
    }
    setPropagationContext(t) {
        return this._propagationContext = {
            spanId: (0, a.ZF)(),
            ...t
        }, this
    }
    getPropagationContext() {
        return this._propagationContext
    }
    captureException(t, e) {
        let r = e && e.event_id ? e.event_id : (0, o.eJ)();
        if (!this._client) return n.vF.warn("No client configured on scope - will not capture exception!"), r;
        let s = Error("Sentry syntheticException");
        return this._client.captureException(t, {
            originalException: t,
            syntheticException: s,
            ...e,
            event_id: r
        }, this), r
    }
    captureMessage(t, e, r) {
        let s = r && r.event_id ? r.event_id : (0, o.eJ)();
        if (!this._client) return n.vF.warn("No client configured on scope - will not capture message!"), s;
        let i = Error(t);
        return this._client.captureMessage(t, e, {
            originalException: t,
            syntheticException: i,
            ...r,
            event_id: s
        }, this), s
    }
    captureEvent(t, e) {
        let r = e && e.event_id ? e.event_id : (0, o.eJ)();
        return this._client ? this._client.captureEvent(t, {
            ...e,
            event_id: r
        }, this) : n.vF.warn("No client configured on scope - will not capture event!"), r
    }
    _notifyScopeListeners() {
        this._notifyingListeners || (this._notifyingListeners = !0, this._scopeListeners.forEach(t => {
            t(this)
        }), this._notifyingListeners = !1)
    }
}
let l = d