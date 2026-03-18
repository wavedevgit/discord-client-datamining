/** chunk id: 324050 params = (module,exports,require) **/
let s;
i.d(e, {
    A: () => o
});
var r = i(311907),
    a = i(73153);
let n = {
    lastGuildDismissedTime: {}
};
class l extends r.Ay.DeviceSettingsStore {
    static displayName = "ApplicationSubscriptionChannelNoticeStore";
    static persistKey = "ApplicationSubscriptionChannelNoticeStore";
    initialize() {
        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : n;
        s = t
    }
    getUserAgnosticState() {
        return s
    }
    getLastGuildDismissedTime(t) {
        return s.lastGuildDismissedTime[t]
    }
}
let o = new l(a.h, {
    APPLICATION_SUBSCRIPTIONS_CHANNEL_NOTICE_DISMISSED: function(t) {
        let {
            guildId: e
        } = t;
        s.lastGuildDismissedTime[e] = Date.now()
    }
})