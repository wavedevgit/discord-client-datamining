/** chunk id: 324050 params = (module,exports,require) **/
let s;
a.d(t, {
    A: () => c
});
var n = a(311907),
    i = a(73153);
let l = {
    lastGuildDismissedTime: {}
};
class r extends n.Ay.DeviceSettingsStore {
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
let c = new r(i.h, {
    APPLICATION_SUBSCRIPTIONS_CHANNEL_NOTICE_DISMISSED: function(e) {
        let {
            guildId: t
        } = e;
        s.lastGuildDismissedTime[t] = Date.now()
    }
})