/** chunk id: 218727 params = (module,exports,require) **/
n.d(t, {
    A: () => o
});
var a = n(311907),
    l = n(73153);
let i = () => ({
        isFetching: !1,
        lastFetchedAt: null,
        error: null
    }),
    s = [],
    r = i();
class c extends a.Ay.Store {
    static displayName = "RecentAvatarsStore";
    get isFetching() {
        return r.isFetching
    }
    get fetchError() {
        return r.error
    }
    get shouldFetch() {
        return Date.now() - (r.lastFetchedAt ?? 0) > 3e5 && !r.isFetching
    }
    getAvatars() {
        return s
    }
}
let o = new c(l.h, {
    RECENT_AVATARS_FETCH_START: function() {
        r.isFetching = !0, r.error = null
    },
    RECENT_AVATARS_FETCH_SUCCESS: function(e) {
        let {
            avatars: t
        } = e;
        s = t, r.isFetching = !1, r.lastFetchedAt = Date.now()
    },
    RECENT_AVATARS_FETCH_FAILURE: function(e) {
        let {
            error: t
        } = e;
        r.isFetching = !1, r.error = t
    },
    RECENT_AVATARS_UPDATE: function() {
        r.lastFetchedAt = 0
    },
    RECENT_AVATAR_DELETE: function(e) {
        let {
            avatarId: t
        } = e;
        s = s.filter(e => e.id !== t)
    },
    LOGOUT: function() {
        s = [], r = i()
    }
})