/** chunk id: 769591, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    b8: () => d,
    ct: () => g,
    os: () => m
}), n(896048), n(938796);
var i = n(665260),
    r = n(311907),
    l = n(544743),
    a = n(543465),
    o = n(661191),
    s = n(652215),
    c = n(815968),
    _ = n(355097),
    u = n(985018);

function d() {
    return [{
        id: "15-minutes",
        label: u.intl.string(u.t["8ot6gv"]),
        value: c.Xx.MINUTES_15
    }, {
        id: "1-hour",
        label: u.intl.string(u.t.UMWBZr),
        value: c.Xx.HOURS_1
    }, {
        id: "3-hours",
        label: u.intl.string(u.t.QmYWtu),
        value: c.Xx.HOURS_3
    }, {
        id: "8-hours",
        label: u.intl.string(u.t.EpAXPC),
        value: c.Xx.HOURS_8
    }, {
        id: "24-hours",
        label: u.intl.string(u.t["755t4q"]),
        value: c.Xx.HOURS_24
    }, {
        id: "forever",
        label: u.intl.string(u.t.r3LawO),
        value: c.Xx.ALWAYS
    }]
}
let b = {
    ignoreMute: !1,
    ignoreUnreadSetting: !0,
    ignoreNotificationSetting: !1
};

function g(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : b;
    return o.default.keys(e).filter(n => {
        var r, a;
        let o = e[n].message_notifications !== s.orn.NULL,
            c = i.Lt(null != (r = e[n].flags) ? r : 0, _.vv.UNREADS_ALL_MESSAGES) || i.Lt(null != (a = e[n].flags) ? a : 0, _.vv.UNREADS_ONLY_MENTIONS);
        return !t.ignoreUnreadSetting && c || !t.ignoreNotificationSetting && o || !t.ignoreMute && (0, l.tG)(e[n])
    })
}

function m(e) {
    return (0, r.bG)([a.Ay], () => a.Ay.useNewNotifications)
}