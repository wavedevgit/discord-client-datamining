/** chunk id: 769591 params = (module,exports,require) **/
e.d(n, {
    b8: () => u,
    ct: () => c,
    os: () => _
}), e(938796);
var i = e(665260),
    r = e(311907),
    s = e(544743),
    l = e(543465),
    a = e(661191),
    o = e(652215),
    d = e(355097),
    g = e(985018);

function u() {
    return [{
        id: "15-minutes",
        label: g.intl.string(g.t["8ot6gv"]),
        value: d.Xx.MINUTES_15
    }, {
        id: "1-hour",
        label: g.intl.string(g.t.UMWBZr),
        value: d.Xx.HOURS_1
    }, {
        id: "3-hours",
        label: g.intl.string(g.t.QmYWtu),
        value: d.Xx.HOURS_3
    }, {
        id: "8-hours",
        label: g.intl.string(g.t.EpAXPC),
        value: d.Xx.HOURS_8
    }, {
        id: "24-hours",
        label: g.intl.string(g.t["755t4q"]),
        value: d.Xx.HOURS_24
    }, {
        id: "forever",
        label: g.intl.string(g.t.r3LawO),
        value: d.Xx.ALWAYS
    }]
}
let S = {
    ignoreMute: !1,
    ignoreUnreadSetting: !0,
    ignoreNotificationSetting: !1
};

function c(t) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : S;
    return a.default.keys(t).filter(e => {
        let r = t[e].message_notifications !== o.orn.NULL,
            l = i.Lt(t[e].flags ?? 0, d.vv.UNREADS_ALL_MESSAGES) || i.Lt(t[e].flags ?? 0, d.vv.UNREADS_ONLY_MENTIONS);
        return !n.ignoreUnreadSetting && l || !n.ignoreNotificationSetting && r || !n.ignoreMute && (0, s.tG)(t[e])
    })
}

function _(t) {
    return (0, r.bG)([l.Ay], () => l.Ay.useNewNotifications)
}