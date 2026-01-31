/** chunk id: 560010, original params: e,l,t (module,exports,require) **/
t.d(l, {
    A: () => u
});
var s, n, i = t(311907),
    o = t(73153);
let a = {};
class r extends(n = i.Ay.Store) {
    getFollowerStatsForChannel(e) {
        return a[e]
    }
}(s = "displayName") in r ? Object.defineProperty(r, s, {
    value: "ChannelFollowerStatsStore",
    enumerable: !0,
    configurable: !0,
    writable: !0
}) : r[s] = "ChannelFollowerStatsStore";
let u = new r(o.h, {
    CONNECTION_OPEN: function() {
        a = {}
    },
    CHANNEL_FOLLOWER_STATS_FETCH_SUCCESS: function(e) {
        let {
            channelId: l,
            stats: t
        } = e;
        t = null != t ? t : {}, a[l] = {
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
        a[l] = {
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