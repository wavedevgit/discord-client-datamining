/** chunk id: 769591 params = (module,exports,require) **/
"use strict";
n.d(t, {
    b8: () => d,
    ct: () => g,
    os: () => b
}), n(938796);
var i = n(665260),
    a = n(311907),
    r = n(544743),
    l = n(543465),
    s = n(661191),
    o = n(652215),
    _ = n(355097),
    c = n(985018);

function d() {
    return [{
        id: "15-minutes",
        label: c.intl.string(c.t["8ot6gv"]),
        value: _.Xx.MINUTES_15
    }, {
        id: "1-hour",
        label: c.intl.string(c.t.UMWBZr),
        value: _.Xx.HOURS_1
    }, {
        id: "3-hours",
        label: c.intl.string(c.t.QmYWtu),
        value: _.Xx.HOURS_3
    }, {
        id: "8-hours",
        label: c.intl.string(c.t.EpAXPC),
        value: _.Xx.HOURS_8
    }, {
        id: "24-hours",
        label: c.intl.string(c.t["755t4q"]),
        value: _.Xx.HOURS_24
    }, {
        id: "forever",
        label: c.intl.string(c.t.r3LawO),
        value: _.Xx.ALWAYS
    }]
}
let u = {
    ignoreMute: !1,
    ignoreUnreadSetting: !0,
    ignoreNotificationSetting: !1
};

function g(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u;
    return s.default.keys(e).filter(n => {
        let a = e[n].message_notifications !== o.orn.NULL,
            l = i.Lt(e[n].flags ?? 0, _.vv.UNREADS_ALL_MESSAGES) || i.Lt(e[n].flags ?? 0, _.vv.UNREADS_ONLY_MENTIONS);
        return !t.ignoreUnreadSetting && l || !t.ignoreNotificationSetting && a || !t.ignoreMute && (0, r.tG)(e[n])
    })
}

function b(e) {
    return (0, a.bG)([l.Ay], () => l.Ay.useNewNotifications)
}