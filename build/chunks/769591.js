/** chunk id: 769591 params = (module,exports,require) **/
"use strict";
t.d(n, {
    b8: () => d,
    ct: () => E,
    os: () => g
}), t(938796);
var i = t(665260),
    l = t(311907),
    r = t(544743),
    s = t(543465),
    u = t(661191),
    a = t(652215),
    c = t(815968),
    o = t(355097),
    _ = t(985018);

function d() {
    return [{
        id: "15-minutes",
        label: _.intl.string(_.t["8ot6gv"]),
        value: c.Xx.MINUTES_15
    }, {
        id: "1-hour",
        label: _.intl.string(_.t.UMWBZr),
        value: c.Xx.HOURS_1
    }, {
        id: "3-hours",
        label: _.intl.string(_.t.QmYWtu),
        value: c.Xx.HOURS_3
    }, {
        id: "8-hours",
        label: _.intl.string(_.t.EpAXPC),
        value: c.Xx.HOURS_8
    }, {
        id: "24-hours",
        label: _.intl.string(_.t["755t4q"]),
        value: c.Xx.HOURS_24
    }, {
        id: "forever",
        label: _.intl.string(_.t.r3LawO),
        value: c.Xx.ALWAYS
    }]
}
let S = {
    ignoreMute: !1,
    ignoreUnreadSetting: !0,
    ignoreNotificationSetting: !1
};

function E(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : S;
    return u.default.keys(e).filter(t => {
        let l = e[t].message_notifications !== a.orn.NULL,
            s = i.Lt(e[t].flags ?? 0, o.vv.UNREADS_ALL_MESSAGES) || i.Lt(e[t].flags ?? 0, o.vv.UNREADS_ONLY_MENTIONS);
        return !n.ignoreUnreadSetting && s || !n.ignoreNotificationSetting && l || !n.ignoreMute && (0, r.tG)(e[t])
    })
}

function g(e) {
    return (0, l.bG)([s.Ay], () => s.Ay.useNewNotifications)
}