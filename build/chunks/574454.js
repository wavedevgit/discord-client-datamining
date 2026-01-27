/** Chunk was on 86142 **/
/** chunk id: 574454, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => p
});
var r, i, s = n(635377),
    l = n.n(s),
    a = n(311907),
    o = n(73153),
    c = n(927813);
let d = {
        taken: null,
        error: void 0,
        rateLimited: !0
    },
    u = {
        validations: new(l())({
            max: 100,
            maxAge: 6e4
        }),
        currentUsernameInvalid: !1,
        retryAfterTime: null,
        suggestions: {
            migration: {
                suggestion: {
                    username: void 0
                },
                fetched: !1,
                usernameSuggestionLoading: !1
            },
            registration: {
                suggestion: {
                    username: void 0
                },
                source: void 0,
                fetched: !1
            }
        }
    };
class h extends(i = a.Ay.Store) {
    isRateLimited() {
        return null != u.retryAfterTime && Date.now() < u.retryAfterTime
    }
    validate(e) {
        let t = u.validations.get(e);
        return this.isRateLimited() && (null == t || t.rateLimited) ? d : this.isRateLimited() || null == t || !t.rateLimited ? t : void 0
    }
    registrationUsernameSuggestion() {
        return u.suggestions.registration.suggestion.username
    }
    usernameSuggestion() {
        return u.suggestions.migration.suggestion.username
    }
    usernameSuggestionLoading() {
        return u.suggestions.migration.usernameSuggestionLoading
    }
    isCurrentUsernameInvalid() {
        return u.currentUsernameInvalid
    }
    wasRegistrationSuggestionFetched(e) {
        return u.suggestions.registration.source === e && u.suggestions.registration.fetched
    }
    wasSuggestionsFetched() {
        return u.suggestions.migration.fetched
    }
}(r = "displayName") in h ? Object.defineProperty(h, r, {
    value: "PomeloStore",
    enumerable: !0,
    configurable: !0,
    writable: !0
}) : h[r] = "PomeloStore";
let p = new h(o.h, {
    POMELO_ATTEMPT_SUCCESS: function(e) {
        let {
            username: t,
            taken: n
        } = e;
        u.validations.set(t, {
            taken: n
        })
    },
    POMELO_ATTEMPT_FAILURE: function(e) {
        let {
            username: t,
            error: n,
            statusCode: r,
            retryAfter: i
        } = e;
        429 === r ? u.validations.set(t, {
            taken: null,
            error: n,
            rateLimited: !0
        }, (null != i ? i : 7) * c.A.Millis.SECOND) : u.validations.set(t, {
            taken: null,
            error: n
        }), null != i && (u.retryAfterTime = Date.now() + i * c.A.Millis.SECOND)
    },
    POMELO_SUGGESTIONS_RESET: function() {
        u.suggestions.migration = {
            suggestion: {
                username: void 0
            },
            fetched: !1,
            usernameSuggestionLoading: !1
        }, u.suggestions.registration = {
            suggestion: {
                username: void 0
            },
            source: void 0,
            fetched: !1
        }
    },
    POMELO_SUGGESTIONS_SUCCESS: function(e) {
        let {
            suggestion: t
        } = e;
        u.suggestions.migration = {
            suggestion: t,
            fetched: !0,
            usernameSuggestionLoading: !1
        }, (null == t ? void 0 : t.invalid_current_username) === !0 && (u.currentUsernameInvalid = !0)
    },
    POMELO_SUGGESTIONS_FETCH: function(e) {
        let {
            usernameSuggestionLoading: t
        } = e;
        u.suggestions.migration.usernameSuggestionLoading = t
    },
    POMELO_REGISTRATION_SUGGESTIONS_SUCCESS: function(e) {
        let {
            suggestion: t,
            source: n
        } = e;
        u.suggestions.registration = {
            suggestion: t,
            source: n,
            fetched: !0
        }, (null == t ? void 0 : t.username) != null && u.validations.set(t.username, {
            taken: !1
        })
    }
})