/** chunk id: 769591 params = (module,exports,require) **/
"use strict";
n.d(t, {
    b8: () => u,
    ct: () => b,
    os: () => I
}), n(938796);
var a = n(665260),
    i = n(311907),
    r = n(544743),
    c = n(543465),
    o = n(661191),
    s = n(652215),
    l = n(815968),
    _ = n(355097),
    d = n(985018);

function u() {
    return [{
        id: "15-minutes",
        label: d.intl.string(d.t["8ot6gv"]),
        value: l.Xx.MINUTES_15
    }, {
        id: "1-hour",
        label: d.intl.string(d.t.UMWBZr),
        value: l.Xx.HOURS_1
    }, {
        id: "3-hours",
        label: d.intl.string(d.t.QmYWtu),
        value: l.Xx.HOURS_3
    }, {
        id: "8-hours",
        label: d.intl.string(d.t.EpAXPC),
        value: l.Xx.HOURS_8
    }, {
        id: "24-hours",
        label: d.intl.string(d.t["755t4q"]),
        value: l.Xx.HOURS_24
    }, {
        id: "forever",
        label: d.intl.string(d.t.r3LawO),
        value: l.Xx.ALWAYS
    }]
}
let g = {
    ignoreMute: !1,
    ignoreUnreadSetting: !0,
    ignoreNotificationSetting: !1
};

function b(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : g;
    return o.default.keys(e).filter(n => {
        let i = e[n].message_notifications !== s.orn.NULL,
            c = a.Lt(e[n].flags ?? 0, _.vv.UNREADS_ALL_MESSAGES) || a.Lt(e[n].flags ?? 0, _.vv.UNREADS_ONLY_MENTIONS);
        return !t.ignoreUnreadSetting && c || !t.ignoreNotificationSetting && i || !t.ignoreMute && (0, r.tG)(e[n])
    })
}

function I(e) {
    return (0, i.bG)([c.Ay], () => c.Ay.useNewNotifications)
}