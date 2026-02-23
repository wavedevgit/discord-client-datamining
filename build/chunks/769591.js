/** chunk id: 769591, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    b8: () => u,
    ct: () => b,
    os: () => m
}), n(938796);
var a = n(665260),
    i = n(311907),
    r = n(544743),
    o = n(543465),
    l = n(661191),
    c = n(652215),
    s = n(815968),
    _ = n(355097),
    d = n(985018);

function u() {
    return [{
        id: "15-minutes",
        label: d.intl.string(d.t["8ot6gv"]),
        value: s.Xx.MINUTES_15
    }, {
        id: "1-hour",
        label: d.intl.string(d.t.UMWBZr),
        value: s.Xx.HOURS_1
    }, {
        id: "3-hours",
        label: d.intl.string(d.t.QmYWtu),
        value: s.Xx.HOURS_3
    }, {
        id: "8-hours",
        label: d.intl.string(d.t.EpAXPC),
        value: s.Xx.HOURS_8
    }, {
        id: "24-hours",
        label: d.intl.string(d.t["755t4q"]),
        value: s.Xx.HOURS_24
    }, {
        id: "forever",
        label: d.intl.string(d.t.r3LawO),
        value: s.Xx.ALWAYS
    }]
}
let g = {
    ignoreMute: !1,
    ignoreUnreadSetting: !0,
    ignoreNotificationSetting: !1
};

function b(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : g;
    return l.default.keys(e).filter(n => {
        let i = e[n].message_notifications !== c.orn.NULL,
            o = a.Lt(e[n].flags ?? 0, _.vv.UNREADS_ALL_MESSAGES) || a.Lt(e[n].flags ?? 0, _.vv.UNREADS_ONLY_MENTIONS);
        return !t.ignoreUnreadSetting && o || !t.ignoreNotificationSetting && i || !t.ignoreMute && (0, r.tG)(e[n])
    })
}

function m(e) {
    return (0, i.bG)([o.Ay], () => o.Ay.useNewNotifications)
}