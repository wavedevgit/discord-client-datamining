/** chunk id: 324050, original params: e,t,n (module,exports,require) **/
let r;
n.d(t, {
    A: () => _
});
var i = n(311907),
    a = n(73153);
let o = {
    lastGuildDismissedTime: {}
};
class l extends i.Ay.DeviceSettingsStore {
    static displayName = "ApplicationSubscriptionChannelNoticeStore";
    static persistKey = "ApplicationSubscriptionChannelNoticeStore";
    initialize() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o;
        r = e
    }
    getUserAgnosticState() {
        return r
    }
    getLastGuildDismissedTime(e) {
        return r.lastGuildDismissedTime[e]
    }
}
let _ = new l(a.h, {
    APPLICATION_SUBSCRIPTIONS_CHANNEL_NOTICE_DISMISSED: function(e) {
        let {
            guildId: t
        } = e;
        r.lastGuildDismissedTime[t] = Date.now()
    }
})