/** chunk id: 324050 params = (module,exports,require) **/
let n;
a.d(t, {
    A: () => c
});
var r = a(311907),
    l = a(73153);
let i = {
    lastGuildDismissedTime: {}
};
class s extends r.Ay.DeviceSettingsStore {
    static displayName = "ApplicationSubscriptionChannelNoticeStore";
    static persistKey = "ApplicationSubscriptionChannelNoticeStore";
    initialize() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i;
        n = e
    }
    getUserAgnosticState() {
        return n
    }
    getLastGuildDismissedTime(e) {
        return n.lastGuildDismissedTime[e]
    }
}
let c = new s(l.h, {
    APPLICATION_SUBSCRIPTIONS_CHANNEL_NOTICE_DISMISSED: function(e) {
        let {
            guildId: t
        } = e;
        n.lastGuildDismissedTime[t] = Date.now()
    }
})