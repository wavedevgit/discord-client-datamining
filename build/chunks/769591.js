/** chunk id: 769591 params = (module,exports,require) **/
"use strict";
n.d(t, {
    b8: () => d,
    ct: () => b,
    os: () => m
}), n(938796);
var a = n(665260),
    i = n(311907),
    r = n(544743),
    c = n(543465),
    o = n(661191),
    _ = n(652215),
    l = n(355097),
    s = n(985018);

function d() {
    return [{
        id: "15-minutes",
        label: s.intl.string(s.t["8ot6gv"]),
        value: l.Xx.MINUTES_15
    }, {
        id: "1-hour",
        label: s.intl.string(s.t.UMWBZr),
        value: l.Xx.HOURS_1
    }, {
        id: "3-hours",
        label: s.intl.string(s.t.QmYWtu),
        value: l.Xx.HOURS_3
    }, {
        id: "8-hours",
        label: s.intl.string(s.t.EpAXPC),
        value: l.Xx.HOURS_8
    }, {
        id: "24-hours",
        label: s.intl.string(s.t["755t4q"]),
        value: l.Xx.HOURS_24
    }, {
        id: "forever",
        label: s.intl.string(s.t.r3LawO),
        value: l.Xx.ALWAYS
    }]
}
let u = {
    ignoreMute: !1,
    ignoreUnreadSetting: !0,
    ignoreNotificationSetting: !1
};

function b(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u;
    return o.default.keys(e).filter(n => {
        let i = e[n].message_notifications !== _.orn.NULL,
            c = a.Lt(e[n].flags ?? 0, l.vv.UNREADS_ALL_MESSAGES) || a.Lt(e[n].flags ?? 0, l.vv.UNREADS_ONLY_MENTIONS);
        return !t.ignoreUnreadSetting && c || !t.ignoreNotificationSetting && i || !t.ignoreMute && (0, r.tG)(e[n])
    })
}

function m(e) {
    return (0, i.bG)([c.Ay], () => c.Ay.useNewNotifications)
}