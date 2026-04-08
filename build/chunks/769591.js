/** chunk id: 769591 params = (module,exports,require) **/
"use strict";
n.d(t, {
    b8: () => u,
    ct: () => m,
    os: () => b
}), n(938796);
var a = n(665260),
    i = n(311907),
    r = n(544743),
    o = n(543465),
    l = n(661191),
    c = n(652215),
    s = n(355097),
    _ = n(985018);

function u() {
    return [{
        id: "15-minutes",
        label: _.intl.string(_.t["8ot6gv"]),
        value: s.Xx.MINUTES_15
    }, {
        id: "1-hour",
        label: _.intl.string(_.t.UMWBZr),
        value: s.Xx.HOURS_1
    }, {
        id: "3-hours",
        label: _.intl.string(_.t.QmYWtu),
        value: s.Xx.HOURS_3
    }, {
        id: "8-hours",
        label: _.intl.string(_.t.EpAXPC),
        value: s.Xx.HOURS_8
    }, {
        id: "24-hours",
        label: _.intl.string(_.t["755t4q"]),
        value: s.Xx.HOURS_24
    }, {
        id: "forever",
        label: _.intl.string(_.t.r3LawO),
        value: s.Xx.ALWAYS
    }]
}
let d = {
    ignoreMute: !1,
    ignoreUnreadSetting: !0,
    ignoreNotificationSetting: !1
};

function m(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d;
    return l.default.keys(e).filter(n => {
        let i = e[n].message_notifications !== c.orn.NULL,
            o = a.Lt(e[n].flags ?? 0, s.vv.UNREADS_ALL_MESSAGES) || a.Lt(e[n].flags ?? 0, s.vv.UNREADS_ONLY_MENTIONS);
        return !t.ignoreUnreadSetting && o || !t.ignoreNotificationSetting && i || !t.ignoreMute && (0, r.tG)(e[n])
    })
}

function b(e) {
    return (0, i.bG)([o.Ay], () => o.Ay.useNewNotifications)
}