/** chunk id: 655237, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => f
});
var r, l, i = n(311907),
    a = n(73153),
    o = n(600975),
    s = n(961350);
let c = {},
    u = (0, o.C)({
        kind: "user",
        id: "2025-03_slayer_notif_supression_killswitch",
        label: "Disable suppressing notifications with slayer game active",
        defaultConfig: {
            enabled: !1
        },
        treatments: [{
            id: 1,
            label: "Disable suppressing",
            config: {
                enabled: !0
            }
        }]
    });
class d extends(l = i.Ay.Store) {
    initialize() {
        this.waitFor(s.default)
    }
    areSlayerNotificationsSuppressed() {
        if (u.getCurrentConfig({
                location: "Store"
            }, {
                autoTrackExposure: !1
            }).enabled) return !1;
        for (let e in c)
            if (c[e] === s.default.getId()) return !0;
        return !1
    }
}(r = "displayName") in d ? Object.defineProperty(d, r, {
    value: "RpcNotificationSettingsStore",
    enumerable: !0,
    configurable: !0,
    writable: !0
}) : d[r] = "RpcNotificationSettingsStore";
let f = new d(a.h, {
    RPC_APP_DISCONNECTED: function(e) {
        delete c[e.socketId]
    },
    SET_RPC_NOTIFICATION_SETTINGS: function(e) {
        delete c[e.socketId], e.suppressNotifications && (c[e.socketId] = e.targetUserId)
    }
})