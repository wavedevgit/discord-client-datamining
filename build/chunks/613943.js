/** chunk id: 613943, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => o
}), n(321073), n(896048);
var r = n(554146),
    l = n(379848),
    i = n(553103);

function o(e) {
    let {
        shouldShow: t,
        notificationConfig: n
    } = (0, i.A)(e, "GuildPowerupNotificationContainer"), o = [];
    t && null != n && o.push(r.M.VANITY_URL_POWERUP_ROLLBACK_NOTIFICATION);
    let [s, a] = (0, l.ww)(o, e);
    return {
        shouldShow: null != s && s === r.M.VANITY_URL_POWERUP_ROLLBACK_NOTIFICATION,
        notificationConfig: n,
        markAsDismissed: a
    }
}