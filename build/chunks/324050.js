/** chunk id: 324050 params = (module,exports,require) **/
let s;
i.d(t, {
    A: () => c
});
var r = i(311907),
    n = i(73153);
let l = {
    lastGuildDismissedTime: {}
};
class a extends r.Ay.DeviceSettingsStore {
    static displayName = "ApplicationSubscriptionChannelNoticeStore";
    static persistKey = "ApplicationSubscriptionChannelNoticeStore";
    initialize() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l;
        s = e
    }
    getUserAgnosticState() {
        return s
    }
    getLastGuildDismissedTime(e) {
        return s.lastGuildDismissedTime[e]
    }
}
let c = new a(n.h, {
    APPLICATION_SUBSCRIPTIONS_CHANNEL_NOTICE_DISMISSED: function(e) {
        let {
            guildId: t
        } = e;
        s.lastGuildDismissedTime[t] = Date.now()
    }
})