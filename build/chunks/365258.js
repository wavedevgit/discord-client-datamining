/** chunk id: 365258 params = (module,exports,require) **/
n.d(e, {
    AB: () => p,
    AI: () => u,
    Xc: () => T,
    ae: () => O,
    g8: () => g,
    gF: () => I,
    gS: () => S,
    vz: () => L
});
var i, r = n(873298),
    s = n(253932),
    l = n(205761),
    a = n(498642),
    o = n(71393),
    c = n(711014),
    d = n(115063),
    h = n(985018),
    u = ((i = {}).RESTRICTING = "restricting", i.EXPANDING = "expanding", i);
let C = r.Qd;

function _(t) {
    switch (t) {
        case C.ACTIVITY_STATUS_OFF:
            return 2;
        case C.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS:
            return 1;
        case C.ACTIVITY_STATUS_ON:
            return 0;
        default:
            return -1
    }
}
let A = new Map([
    [r.KP.FRIENDS_AND_ALL_GUILDS, C.ACTIVITY_STATUS_OFF],
    [r.KP.FRIENDS_AND_SMALL_GUILDS, C.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS],
    [r.KP.FRIENDS_ONLY, C.ACTIVITY_STATUS_ON]
]);

function E(t) {
    return A.get(t) ?? C.ACTIVITY_STATUS_OFF
}

function g(t, e) {
    if (t === e) return null;
    let n = _(t),
        i = _(e);
    if (n < 0 || i < 0) return null;
    let r = i < n ? "restricting" : "expanding",
        s = (0, d.Kk)(),
        l = c.Ay.getFlattenedGuildIds(),
        h = t === C.ACTIVITY_STATUS_OFF && e === C.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS || t === C.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS && e === C.ACTIVITY_STATUS_OFF ? "large_only" : t === C.ACTIVITY_STATUS_ON && e === C.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS || t === C.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS && e === C.ACTIVITY_STATUS_ON ? "small_only" : "all",
        u = l.filter(t => {
            if (null == o.A.getGuild(t)) return !1;
            let e = s.has(t);
            if ("restricting" === r && e || "expanding" === r && !e) return !1;
            if ("all" === h) return !0;
            let n = a.A.getMemberCount(t);
            return null == n ? "restricting" === r : "large_only" === h ? n > 200 : n <= 200
        });
    return 0 === u.length ? null : (u.sort((t, e) => {
        let n = o.A.getGuild(t),
            i = o.A.getGuild(e);
        return n?.joinedAt == null && i?.joinedAt == null ? 0 : n?.joinedAt == null ? 1 : i?.joinedAt == null ? -1 : new Date(i.joinedAt).getTime() - new Date(n.joinedAt).getTime()
    }), {
        affectedGuildIds: u,
        direction: r
    })
}

function T(t) {
    switch (t) {
        case C.ACTIVITY_STATUS_OFF:
            return h.intl.string(h.t.FzgQna).toLowerCase();
        case C.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS:
            return h.intl.string(h.t["1hvuGH"]).toLowerCase();
        case C.ACTIVITY_STATUS_ON:
            return h.intl.string(h.t.fQc5la).toLowerCase();
        default:
            return ""
    }
}

function L(t, e) {
    return {
        title: h.intl.string(t ? h.t.eYDA7D : h.t["9jYwjo"]),
        subtitle: h.intl.format(t ? h.t["c5/jDc"] : h.t.ajzh8S, {
            settingName: e
        }),
        confirmText: h.intl.string(t ? h.t["6uPZV1"] : h.t.a9PIyD),
        toastContent: h.intl.string(t ? h.t.AdpgML : h.t["Q7E+QF"])
    }
}

function O(t, e) {
    return {
        title: h.intl.string(t ? h.t.jRx1Aa : h.t.S0Y0bh),
        subtitle: h.intl.format(t ? h.t.Fs96LO : h.t.GcoYX8, {
            settingName: e
        }),
        confirmText: h.intl.string(t ? h.t["4DM5HJ"] : h.t.WRrDtI),
        toastContent: h.intl.string(t ? h.t.AdpgML : h.t["Q7E+QF"])
    }
}

function S(t, e) {
    let n = E(e),
        i = s._Z.getSetting();
    if (i === n || _(E(t)) > _(n) != _(i) > _(n)) return null;
    let l = g(i, n);
    if (null == l) return null;
    let a = function(t) {
        switch (t) {
            case r.KP.FRIENDS_AND_ALL_GUILDS:
                return h.intl.string(h.t.Boxc8R).toLowerCase();
            case r.KP.FRIENDS_AND_SMALL_GUILDS:
                return h.intl.string(h.t.YOIKBt).toLowerCase();
            case r.KP.FRIENDS_ONLY:
                return h.intl.string(h.t.u0nlJv).toLowerCase();
            default:
                return ""
        }
    }(e);
    return {
        affectedGuildIds: l.affectedGuildIds,
        direction: l.direction,
        settingName: a,
        mappedActivityValue: n
    }
}

function p(t) {
    return [...t].sort((t, e) => l.A.getScoreWithoutFetchingLatest(e) - l.A.getScoreWithoutFetchingLatest(t))
}

function I(t, e) {
    let n = (0, d.Kk)(),
        i = new Set(e);
    if ("restricting" === t) {
        let t = new Set([...n, ...i]);
        s.JG.updateSetting([...t])
    } else {
        let t = [...n].filter(t => !i.has(t));
        s.JG.updateSetting(t)
    }
}