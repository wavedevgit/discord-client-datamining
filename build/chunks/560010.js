/** chunk id: 560010, original params: e,l,t (module,exports,require) **/
t.d(l, {
    A: () => c
});
var n, s, o = t(311907),
    i = t(73153);
let r = {};
class a extends(s = o.Ay.Store) {
    getFollowerStatsForChannel(e) {
        return r[e]
    }
}(n = "displayName") in a ? Object.defineProperty(a, n, {
    value: "ChannelFollowerStatsStore",
    enumerable: !0,
    configurable: !0,
    writable: !0
}) : a[n] = "ChannelFollowerStatsStore";
let c = new a(i.h, {
    CONNECTION_OPEN: function() {
        r = {}
    },
    CHANNEL_FOLLOWER_STATS_FETCH_SUCCESS: function(e) {
        let {
            channelId: l,
            stats: t
        } = e;
        t = null != t ? t : {}, r[l] = {
            loadingStatus: "succeeded",
            lastFetched: Date.now(),
            channelsFollowing: t.channels_following,
            guildMembers: t.guild_members,
            guildsFollowing: t.guilds_following,
            usersSeenEver: t.users_seen_ever,
            subscribersGainedSinceLastPost: t.subscribers_gained_since_last_post,
            subscribersLostSinceLastPost: t.subscribers_lost_since_last_post
        }
    },
    CHANNEL_FOLLOWER_STATS_FETCH_FAILURE: function(e) {
        let {
            channelId: l
        } = e;
        r[l] = {
            loadingStatus: "failed",
            lastFetched: Date.now(),
            channelsFollowing: 0,
            guildMembers: 0,
            guildsFollowing: 0,
            usersSeenEver: 0,
            subscribersGainedSinceLastPost: 0,
            subscribersLostSinceLastPost: 0
        }
    }
})