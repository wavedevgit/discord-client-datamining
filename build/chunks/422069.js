/** chunk id: 422069 params = (module,exports,require) **/
n.d(t, {
    A: () => f
});
var a = n(311907),
    l = n(73153);
let i = {},
    r = {},
    s = {},
    o = {},
    c = {},
    d = {},
    u = {},
    m = {},
    x = null;
class h extends a.Ay.Store {
    static displayName = "GameProfileStore";
    getSimilarGames(e) {
        return i[e]
    }
    getSimilarGamesError(e) {
        return r[e]
    }
    getShopCollectionSkuIds(e) {
        return s[e]
    }
    hasShopCollectionBeenFetched(e) {
        return o[e] ?? !1
    }
    isShopCollectionFetching(e) {
        return c[e] ?? !1
    }
    getAnnouncements(e) {
        return d[e]
    }
    hasAnnouncementsBeenFetched(e) {
        return u[e] ?? !1
    }
    isAnnouncementsFetching(e) {
        return m[e] ?? !1
    }
    getPendingReturn() {
        return x
    }
}
let f = new h(l.h, {
    GAME_PROFILE_GET_SIMILAR_GAMES_SUCCESS: function(e) {
        let {
            applicationId: t,
            games: n
        } = e;
        i[t] = n
    },
    GAME_PROFILE_GET_SIMILAR_GAMES_ERROR: function(e) {
        let {
            applicationId: t,
            error: n
        } = e;
        r[t] = n
    },
    GAME_PROFILE_GET_SHOP_COLLECTION_START: function(e) {
        let {
            collectionId: t
        } = e;
        c[t] = !0
    },
    GAME_PROFILE_GET_SHOP_COLLECTION_SUCCESS: function(e) {
        let {
            collectionId: t,
            skuIds: n
        } = e;
        s[t] = n, o[t] = !0, c[t] = !1
    },
    GAME_PROFILE_GET_SHOP_COLLECTION_ERROR: function(e) {
        let {
            collectionId: t
        } = e;
        o[t] = !0, c[t] = !1
    },
    GAME_PROFILE_GET_ANNOUNCEMENTS_START: function(e) {
        let {
            gameId: t
        } = e;
        m[t] = !0
    },
    GAME_PROFILE_GET_ANNOUNCEMENTS_SUCCESS: function(e) {
        let {
            gameId: t,
            messages: n,
            channelId: a,
            guildId: l
        } = e;
        d[t] = {
            messages: n,
            channelId: a,
            guildId: l
        }, u[t] = !0, m[t] = !1
    },
    GAME_PROFILE_GET_ANNOUNCEMENTS_ERROR: function(e) {
        let {
            gameId: t
        } = e;
        u[t] = !0, m[t] = !1
    },
    GAME_PROFILE_SET_PENDING_RETURN: function(e) {
        let {
            gameId: t,
            channelId: n
        } = e;
        if (x?.gameId === t && x?.channelId === n) return !1;
        x = {
            gameId: t,
            channelId: n
        }
    },
    GAME_PROFILE_CLEAR_PENDING_RETURN: function(e) {
        let {
            gameId: t
        } = e;
        if (null == x || x.gameId !== t) return !1;
        x = null
    }
})