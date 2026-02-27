/** chunk id: 324050, original params: t,e,i (module,exports,require) **/
let s;
i.d(e, {
    A: () => a
});
var r = i(311907),
    l = i(73153);
let n = {
    lastGuildDismissedTime: {}
};
class C extends r.Ay.DeviceSettingsStore {
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
let a = new C(l.h, {
    APPLICATION_SUBSCRIPTIONS_CHANNEL_NOTICE_DISMISSED: function(t) {
        let {
            guildId: e
        } = t;
        s.lastGuildDismissedTime[e] = Date.now()
    }
})