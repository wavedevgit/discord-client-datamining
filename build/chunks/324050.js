/** chunk id: 324050, original params: e,t,r (module,exports,require) **/
let i;
r.d(t, {
    A: () => C
});
var n, l = r(311907),
    s = r(73153);

function o(e, t, r) {
    return t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e
}
let c = {
    lastGuildDismissedTime: {}
};
class a extends(n = l.Ay.DeviceSettingsStore) {
    initialize() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c;
        i = e
    }
    getUserAgnosticState() {
        return i
    }
    getLastGuildDismissedTime(e) {
        return i.lastGuildDismissedTime[e]
    }
}
o(a, "displayName", "ApplicationSubscriptionChannelNoticeStore"), o(a, "persistKey", "ApplicationSubscriptionChannelNoticeStore");
let C = new a(s.h, {
    APPLICATION_SUBSCRIPTIONS_CHANNEL_NOTICE_DISMISSED: function(e) {
        let {
            guildId: t
        } = e;
        i.lastGuildDismissedTime[t] = Date.now()
    }
})