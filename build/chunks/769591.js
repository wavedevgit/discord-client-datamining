/** chunk id: 769591 params = (module,exports,require) **/
"use strict";
n.d(t, {
    b8: () => _,
    ct: () => S,
    os: () => g
}), n(938796);
var i = n(665260),
    r = n(311907),
    l = n(544743),
    a = n(543465),
    c = n(661191),
    o = n(652215),
    s = n(355097),
    u = n(985018);

function _() {
    return [{
        id: "15-minutes",
        label: u.intl.string(u.t["8ot6gv"]),
        value: s.Xx.MINUTES_15
    }, {
        id: "1-hour",
        label: u.intl.string(u.t.UMWBZr),
        value: s.Xx.HOURS_1
    }, {
        id: "3-hours",
        label: u.intl.string(u.t.QmYWtu),
        value: s.Xx.HOURS_3
    }, {
        id: "8-hours",
        label: u.intl.string(u.t.EpAXPC),
        value: s.Xx.HOURS_8
    }, {
        id: "24-hours",
        label: u.intl.string(u.t["755t4q"]),
        value: s.Xx.HOURS_24
    }, {
        id: "forever",
        label: u.intl.string(u.t.r3LawO),
        value: s.Xx.ALWAYS
    }]
}
let d = {
    ignoreMute: !1,
    ignoreUnreadSetting: !0,
    ignoreNotificationSetting: !1
};

function S(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d;
    return c.default.keys(e).filter(n => {
        let r = e[n].message_notifications !== o.orn.NULL,
            a = i.Lt(e[n].flags ?? 0, s.vv.UNREADS_ALL_MESSAGES) || i.Lt(e[n].flags ?? 0, s.vv.UNREADS_ONLY_MENTIONS);
        return !t.ignoreUnreadSetting && a || !t.ignoreNotificationSetting && r || !t.ignoreMute && (0, l.tG)(e[n])
    })
}

function g(e) {
    return (0, r.bG)([a.Ay], () => a.Ay.useNewNotifications)
}