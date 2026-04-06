/** chunk id: 752755 params = (module,exports,require) **/
n.d(t, {
    A: () => c,
    e: () => a
});
var i, l = n(311907),
    s = n(73153),
    a = ((i = {})[i.NOT_FETCHED = 0] = "NOT_FETCHED", i[i.FETCHING = 1] = "FETCHING", i[i.FETCHED = 2] = "FETCHED", i[i.FAILED = 3] = "FAILED", i);
let r = {},
    o = {};
class d extends l.Ay.Store {
    static displayName = "MediaPostEmbedStore";
    getMediaPostEmbed(e) {
        if (null != e) return r[e]
    }
    getEmbedFetchState(e) {
        return o[e] ?? 0
    }
    getMediaPostEmbeds() {
        return r
    }
}
let c = new d(s.h, {
    CONNECTION_OPEN: function() {
        r = {}, o = {}
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
        r = {
            ...r,
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
        e.isSwitchingAccount || (r = {}, o = {})
    }
})