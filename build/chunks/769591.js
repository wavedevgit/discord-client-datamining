/** chunk id: 769591 params = (module,exports,require) **/
"use strict";
n.d(t, {
    b8: () => u,
    ct: () => b,
    os: () => g
}), n(938796);
var i = n(665260),
    r = n(311907),
    a = n(544743),
    o = n(543465),
    l = n(661191),
    s = n(652215),
    c = n(355097),
    _ = n(985018);

function u() {
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
let d = {
    ignoreMute: !1,
    ignoreUnreadSetting: !0,
    ignoreNotificationSetting: !1
};

function b(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d;
    return l.default.keys(e).filter(n => {
        let r = e[n].message_notifications !== s.orn.NULL,
            o = i.Lt(e[n].flags ?? 0, c.vv.UNREADS_ALL_MESSAGES) || i.Lt(e[n].flags ?? 0, c.vv.UNREADS_ONLY_MENTIONS);
        return !t.ignoreUnreadSetting && o || !t.ignoreNotificationSetting && r || !t.ignoreMute && (0, a.tG)(e[n])
    })
}

function g(e) {
    return (0, r.bG)([o.Ay], () => o.Ay.useNewNotifications)
}