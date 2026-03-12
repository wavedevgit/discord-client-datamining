/** chunk id: 857182 params = (module,exports,require) **/
n.d(t, {
    A: () => l
});
var i = n(562465),
    r = n(73153),
    a = n(652215);
let l = {
    createChannelFollower: (e, t) => i.Bo.post({
        url: a.Rsh.CHANNEL_FOLLOWERS(t),
        body: {
            webhook_channel_id: e
        },
        oldFormErrors: !0,
        rejectWithError: !1
    }),
    async fetchChannelFollowerStats(e) {
        r.h.dispatch({
            type: "CHANNEL_FOLLOWER_STATS_FETCH_START"
        });
        try {
            let t = await i.Bo.get({
                url: a.Rsh.CHANNEL_FOLLOWER_STATS(e),
                body: {
                    channel_id: e
                },
                oldFormErrors: !0,
                rejectWithError: !0
            });
            r.h.dispatch({
                type: "CHANNEL_FOLLOWER_STATS_FETCH_SUCCESS",
                stats: t.body,
                channelId: e
            })
        } catch (t) {
            r.h.dispatch({
                type: "CHANNEL_FOLLOWER_STATS_FETCH_FAILURE",
                channelId: e
            })
        }
    },
    dismissPublishBump(e) {
        r.h.dispatch({
            type: "CHANNEL_FOLLOWING_PUBLISH_BUMP_DISMISSED",
            messageId: e
        })
    },
    permanentlyHidePublishBump(e) {
        r.h.dispatch({
            type: "CHANNEL_FOLLOWING_PUBLISH_BUMP_HIDE_PERMANENTLY",
            channelId: e
        })
    }
}