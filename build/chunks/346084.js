/** chunk id: 346084 params = (module,exports,require) **/
s.d(t, {
    A: () => S
});
var n = s(735438),
    i = s.n(n),
    a = s(311907),
    o = s(73153),
    r = s(427157),
    c = s(287809),
    l = s(38910),
    u = s(858885);
let _ = {},
    d = 0,
    g = !1,
    h = !1;

function p(e) {
    let t = null != e.contact_names && e.contact_names.length >= 2 ? e.contact_names.slice(0, 2) : [];
    return {
        key: e.suggested_user.id,
        name: i().first(e.reasons)?.name,
        user: new r.A(e.suggested_user),
        mutualFriendsCount: e.mutual_friends_count,
        contactNames: t
    }
}
class m extends a.Ay.Store {
    static displayName = "FriendSuggestionStore";
    initialize() {
        this.waitFor(c.default)
    }
    getSuggestionCount() {
        return d
    }
    getSuggestions() {
        return Object.entries(_).map(e => {
            let [t, s] = e;
            return s
        })
    }
    getSuggestion(e) {
        return _[e]
    }
}
let S = new m(o.h, {
    CONNECTION_OPEN: function(e) {
        _ = {}, (d = e.friendSuggestionCount) > 0 ? (h = !0, !g && h && (g = !0, h = !1, l.A.fetch())) : (0, u.A)()
    },
    FRIEND_SUGGESTION_CREATE: function(e) {
        let t = p(e.suggestion);
        if (null != _[t.key]) return !1;
        d++, _ = {
            ..._,
            [t.key]: t
        }
    },
    FRIEND_SUGGESTION_DELETE: function(e) {
        d = Math.max(0, --d), delete _[e.suggestedUserId]
    },
    LOAD_FRIEND_SUGGESTIONS_SUCCESS: function(e) {
        var t;
        g = !1, t = e.suggestions, _ = i().chain(t).map(e => p(e)).keyBy(e => e.key).value(), d = i().keys(_).length
    },
    LOAD_FRIEND_SUGGESTIONS_FAILURE: function() {
        g = !1, _ = {}
    }
})