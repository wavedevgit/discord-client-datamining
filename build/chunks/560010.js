/** Chunk was on 97492 **/
/** chunk id: 560010, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => c
});
var r, l, i = n(311907),
    s = n(73153);
let a = {};
class o extends(l = i.Ay.Store) {
    getFollowerStatsForChannel(e) {
        return a[e]
    }
}(r = "displayName") in o ? Object.defineProperty(o, r, {
    value: "ChannelFollowerStatsStore",
    enumerable: !0,
    configurable: !0,
    writable: !0
}) : o[r] = "ChannelFollowerStatsStore";
let c = new o(s.h, {
    CONNECTION_OPEN: function() {
        a = {}
    },
    CHANNEL_FOLLOWER_STATS_FETCH_SUCCESS: function(e) {
        let {
            channelId: t,
            stats: n
        } = e;
        n = null != n ? n : {}, a[t] = {
            loadingStatus: "succeeded",
            lastFetched: Date.now(),
            channelsFollowing: n.channels_following,
            guildMembers: n.guild_members,
            guildsFollowing: n.guilds_following,
            usersSeenEver: n.users_seen_ever,
            subscribersGainedSinceLastPost: n.subscribers_gained_since_last_post,
            subscribersLostSinceLastPost: n.subscribers_lost_since_last_post
        }
    },
    CHANNEL_FOLLOWER_STATS_FETCH_FAILURE: function(e) {
        let {
            channelId: t
        } = e;
        a[t] = {
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