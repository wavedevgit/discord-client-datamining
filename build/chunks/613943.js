/** chunk id: 613943 params = (module,exports,require) **/
n.d(t, {
    A: () => s
}), n(321073);
var r = n(554146),
    i = n(932001),
    l = n(553103);

function s(e) {
    let {
        shouldShow: t,
        notificationConfig: n
    } = (0, l.A)(e, "GuildPowerupNotificationContainer"), s = [];
    t && null != n && s.push(r.M.VANITY_URL_POWERUP_ROLLBACK_NOTIFICATION);
    let [o, a] = (0, i.ww)(s, e);
    return {
        shouldShow: null != o && o === r.M.VANITY_URL_POWERUP_ROLLBACK_NOTIFICATION,
        notificationConfig: n,
        markAsDismissed: a
    }
}