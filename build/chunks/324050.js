/** chunk id: 324050, original params: e,t,i (module,exports,require) **/
let s;
i.d(t, {
    A: () => a
});
var l = i(311907),
    r = i(73153);
let n = {
    lastGuildDismissedTime: {}
};
class C extends l.Ay.DeviceSettingsStore {
    static displayName = "ApplicationSubscriptionChannelNoticeStore";
    static persistKey = "ApplicationSubscriptionChannelNoticeStore";
    initialize() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : n;
        s = e
    }
    getUserAgnosticState() {
        return s
    }
    getLastGuildDismissedTime(e) {
        return s.lastGuildDismissedTime[e]
    }
}
let a = new C(r.h, {
    APPLICATION_SUBSCRIPTIONS_CHANNEL_NOTICE_DISMISSED: function(e) {
        let {
            guildId: t
        } = e;
        s.lastGuildDismissedTime[t] = Date.now()
    }
})