/** chunk id: 209390 params = (module,exports,require) **/
n.d(t, {
    A: () => m
});
var a = n(311907),
    i = n(73153),
    l = n(314542);
let s = new Map,
    r = !1,
    o = Object.freeze({
        channelAffinities: [],
        lastFetched: 0
    }),
    d = {
        ...o
    };

function c() {
    s = new Map(d.channelAffinities.map(e => [e.channelId, e]))
}
class u extends a.Ay.PersistedStore {
    static displayName = "ChannelAffinitiesV2Store";
    static persistKey = "ChannelAffinitiesStoreV2";
    initialize(e) {
        null != e && (d.channelAffinities = e.channelAffinities, d.lastFetched = e.lastFetched, c())
    }
    shouldFetch() {
        if (!r) return Date.now() - d.lastFetched > l.p
    }
    isFetching() {
        return r
    }
    getChannelAffinities() {
        return d.channelAffinities
    }
    getChannelAffinitiesMap() {
        return s
    }
    getChannelAffinity(e) {
        return s.get(e)
    }
    compare(e, t) {
        return (s.get(t)?.score ?? 0) - (s.get(e)?.score ?? 0)
    }
    getState() {
        return d
    }
}
let m = new u(i.h, {
    LOAD_CHANNEL_AFFINITIES_V2: function() {
        r = !0
    },
    LOAD_CHANNEL_AFFINITIES_V2_SUCCESS: function(e) {
        let {
            affineChannels: t
        } = e;
        d.lastFetched = Date.now(), r = !1, d.channelAffinities = t, c()
    },
    LOAD_CHANNEL_AFFINITIES_V2_FAILURE: function() {
        r = !1
    },
    LOGOUT: function() {
        d = {
            ...o
        }, s = new Map, r = !1
    }
})