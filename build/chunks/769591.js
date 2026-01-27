/** Chunk was on 59461 **/
/** chunk id: 769591, original params: e,n,t (module,exports,require) **/
"use strict";
t.d(n, {
    b8: () => d,
    ct: () => E,
    os: () => g
}), t(896048), t(938796);
var i = t(665260),
    l = t(311907),
    r = t(544743),
    u = t(543465),
    a = t(661191),
    o = t(652215),
    s = t(815968),
    c = t(355097),
    _ = t(985018);

function d() {
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
let S = {
    ignoreMute: !1,
    ignoreUnreadSetting: !0,
    ignoreNotificationSetting: !1
};

function E(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : S;
    return a.default.keys(e).filter(t => {
        var l, u;
        let a = e[t].message_notifications !== o.orn.NULL,
            s = i.Lt(null != (l = e[t].flags) ? l : 0, c.vv.UNREADS_ALL_MESSAGES) || i.Lt(null != (u = e[t].flags) ? u : 0, c.vv.UNREADS_ONLY_MENTIONS);
        return !n.ignoreUnreadSetting && s || !n.ignoreNotificationSetting && a || !n.ignoreMute && (0, r.tG)(e[t])
    })
}

function g(e) {
    return (0, l.bG)([u.Ay], () => u.Ay.useNewNotifications)
}