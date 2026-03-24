/** chunk id: 752755 params = (module,exports,require) **/
n.d(t, {
    A: () => c,
    e: () => l
});
var i, a = n(311907),
    r = n(73153),
    l = ((i = {})[i.NOT_FETCHED = 0] = "NOT_FETCHED", i[i.FETCHING = 1] = "FETCHING", i[i.FETCHED = 2] = "FETCHED", i[i.FAILED = 3] = "FAILED", i);
let s = {},
    o = {};
class d extends a.Ay.Store {
    static displayName = "MediaPostEmbedStore";
    getMediaPostEmbed(e) {
        if (null != e) return s[e]
    }
    getEmbedFetchState(e) {
        return o[e] ?? 0
    }
    getMediaPostEmbeds() {
        return s
    }
}
let c = new d(r.h, {
    CONNECTION_OPEN: function() {
        s = {}, o = {}
    },
    MEDIA_POST_EMBED_FETCH: function(e) {
        let {
            threadId: t
        } = e;
        o[t] = 1
    },
    MEDIA_POST_EMBED_FETCH_SUCCESS: function(e) {
        let {
            threadId: t,
            mediaPostEmbed: n
        } = e;
        s = {
            ...s,
            [t]: n
        }, o[t] = 2
    },
    MEDIA_POST_EMBED_FETCH_FAILURE: function(e) {
        let {
            threadId: t
        } = e;
        o[t] = 3
    },
    LOGOUT: function(e) {
        e.isSwitchingAccount || (s = {}, o = {})
    }
})