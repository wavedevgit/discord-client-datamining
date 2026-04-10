/** chunk id: 346084 params = (module,exports,require) **/
n.d(t, {
    A: () => I
});
var i = n(735438),
    l = n.n(i),
    r = n(311907),
    s = n(73153),
    a = n(427157),
    o = n(287809),
    u = n(38910),
    d = n(858885);
let c = {},
    h = 0,
    g = !1,
    m = !1;

function f(e) {
    let t = null != e.contact_names && e.contact_names.length >= 2 ? e.contact_names.slice(0, 2) : [];
    return {
        key: e.suggested_user.id,
        name: l().first(e.reasons)?.name,
        user: new a.A(e.suggested_user),
        mutualFriendsCount: e.mutual_friends_count,
        contactNames: t
    }
}
class A extends r.Ay.Store {
    static displayName = "FriendSuggestionStore";
    initialize() {
        this.waitFor(o.default)
    }
    getSuggestionCount() {
        return h
    }
    getSuggestions() {
        return Object.entries(c).map(e => {
            let [t, n] = e;
            return n
        })
    }
    getSuggestion(e) {
        return c[e]
    }
}
let I = new A(s.h, {
    CONNECTION_OPEN: function(e) {
        c = {}, (h = e.friendSuggestionCount) > 0 ? (m = !0, !g && m && (g = !0, m = !1, u.A.fetch())) : (0, d.A)()
    },
    FRIEND_SUGGESTION_CREATE: function(e) {
        let t = f(e.suggestion);
        if (null != c[t.key]) return !1;
        h++, c = {
            ...c,
            [t.key]: t
        }
    },
    FRIEND_SUGGESTION_DELETE: function(e) {
        h = Math.max(0, --h), delete c[e.suggestedUserId]
    },
    LOAD_FRIEND_SUGGESTIONS_SUCCESS: function(e) {
        var t;
        g = !1, t = e.suggestions, c = l().chain(t).map(e => f(e)).keyBy(e => e.key).value(), h = l().keys(c).length
    },
    LOAD_FRIEND_SUGGESTIONS_FAILURE: function() {
        g = !1, c = {}
    }
})