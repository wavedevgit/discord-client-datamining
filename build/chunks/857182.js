/** chunk id: 857182 params = (module,exports,require) **/
n.d(t, {
    A: () => r
});
var i = n(562465),
    a = n(73153),
    l = n(652215);
let r = {
    createChannelFollower: (e, t) => i.Bo.post({
        url: l.Rsh.CHANNEL_FOLLOWERS(t),
        body: {
            webhook_channel_id: e
        },
        oldFormErrors: !0,
        rejectWithError: !1
    }),
    async fetchChannelFollowerStats(e) {
        a.h.dispatch({
            type: "CHANNEL_FOLLOWER_STATS_FETCH_START"
        });
        try {
            let t = await i.Bo.get({
                url: l.Rsh.CHANNEL_FOLLOWER_STATS(e),
                body: {
                    channel_id: e
                },
                oldFormErrors: !0,
                rejectWithError: !0
            });
            a.h.dispatch({
                type: "CHANNEL_FOLLOWER_STATS_FETCH_SUCCESS",
                stats: t.body,
                channelId: e
            })
        } catch (t) {
            a.h.dispatch({
                type: "CHANNEL_FOLLOWER_STATS_FETCH_FAILURE",
                channelId: e
            })
        }
    },
    dismissPublishBump(e) {
        a.h.dispatch({
            type: "CHANNEL_FOLLOWING_PUBLISH_BUMP_DISMISSED",
            messageId: e
        })
    },
    permanentlyHidePublishBump(e) {
        a.h.dispatch({
            type: "CHANNEL_FOLLOWING_PUBLISH_BUMP_HIDE_PERMANENTLY",
            channelId: e
        })
    }
}