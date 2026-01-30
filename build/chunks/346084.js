/** chunk id: 346084, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => m
}), n(896048);
var r, i = n(735438),
    o = n.n(i),
    s = n(311907),
    c = n(73153),
    a = n(427157),
    l = n(287809),
    u = n(38910),
    p = n(858885);

function g(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
let _ = {},
    d = 0,
    f = !1,
    b = !1;

function O(e) {
    var t;
    let n = null != e.contact_names && e.contact_names.length >= 2 ? e.contact_names.slice(0, 2) : [];
    return {
        key: e.suggested_user.id,
        name: null == (t = o().first(e.reasons)) ? void 0 : t.name,
        user: new a.A(e.suggested_user),
        mutualFriendsCount: e.mutual_friends_count,
        contactNames: n
    }
}
class y extends(r = s.Ay.Store) {
    initialize() {
        this.waitFor(l.default)
    }
    getSuggestionCount() {
        return d
    }
    getSuggestions() {
        return Object.entries(_).map(e => {
            let [t, n] = e;
            return n
        })
    }
    getSuggestion(e) {
        return _[e]
    }
}
g(y, "displayName", "FriendSuggestionStore");
let m = new y(c.h, {
    CONNECTION_OPEN: function(e) {
        _ = {}, (d = e.friendSuggestionCount) > 0 ? (b = !0, !f && b && (f = !0, b = !1, u.A.fetch())) : (0, p.A)()
    },
    FRIEND_SUGGESTION_CREATE: function(e) {
        var t, n;
        let r = O(e.suggestion);
        if (null != _[r.key]) return !1;
        d++, t = function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }))), r.forEach(function(t) {
                    g(e, t, n[t])
                })
            }
            return e
        }({}, _), n = n = {
            [r.key]: r
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
            }
            return n
        })(Object(n)).forEach(function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
        }), _ = t
    },
    FRIEND_SUGGESTION_DELETE: function(e) {
        d = Math.max(0, --d), delete _[e.suggestedUserId]
    },
    LOAD_FRIEND_SUGGESTIONS_SUCCESS: function(e) {
        var t;
        f = !1, t = e.suggestions, _ = o().chain(t).map(e => O(e)).keyBy(e => e.key).value(), d = o().keys(_).length
    },
    LOAD_FRIEND_SUGGESTIONS_FAILURE: function() {
        f = !1, _ = {}
    }
})