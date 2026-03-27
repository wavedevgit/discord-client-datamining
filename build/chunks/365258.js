/** chunk id: 365258 params = (module,exports,require) **/
n.d(e, {
    AB: () => L,
    AI: () => h,
    Xc: () => g,
    ae: () => O,
    g8: () => T,
    gF: () => I,
    gS: () => p,
    vz: () => f
});
var i, r = n(873298),
    l = n(253932),
    s = n(205761),
    a = n(498642),
    o = n(71393),
    c = n(711014),
    d = n(115063),
    u = n(985018),
    h = ((i = {}).RESTRICTING = "restricting", i.EXPANDING = "expanding", i);
let _ = r.Qd;

function C(t) {
    switch (t) {
        case _.ACTIVITY_STATUS_OFF:
            return 2;
        case _.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS:
            return 1;
        case _.ACTIVITY_STATUS_ON:
            return 0;
        default:
            return -1
    }
}
let A = new Map([
    [r.KP.FRIENDS_AND_ALL_GUILDS, _.ACTIVITY_STATUS_OFF],
    [r.KP.FRIENDS_AND_SMALL_GUILDS, _.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS],
    [r.KP.FRIENDS_ONLY, _.ACTIVITY_STATUS_ON]
]);

function E(t) {
    return A.get(t) ?? _.ACTIVITY_STATUS_OFF
}

function T(t, e) {
    if (t === e) return null;
    let n = C(t),
        i = C(e);
    if (n < 0 || i < 0) return null;
    let r = i < n ? "restricting" : "expanding",
        l = (0, d.Kk)(),
        s = c.Ay.getFlattenedGuildIds(),
        u = t === _.ACTIVITY_STATUS_OFF && e === _.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS || t === _.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS && e === _.ACTIVITY_STATUS_OFF ? "large_only" : t === _.ACTIVITY_STATUS_ON && e === _.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS || t === _.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS && e === _.ACTIVITY_STATUS_ON ? "small_only" : "all",
        h = s.filter(t => {
            if (null == o.A.getGuild(t)) return !1;
            let e = l.has(t);
            if ("restricting" === r && e || "expanding" === r && !e) return !1;
            if ("all" === u) return !0;
            let n = a.A.getMemberCount(t);
            return null == n ? "restricting" === r : "large_only" === u ? n > 200 : n <= 200
        });
    return 0 === h.length ? null : (h.sort((t, e) => {
        let n = o.A.getGuild(t),
            i = o.A.getGuild(e);
        return n?.joinedAt == null && i?.joinedAt == null ? 0 : n?.joinedAt == null ? 1 : i?.joinedAt == null ? -1 : new Date(i.joinedAt).getTime() - new Date(n.joinedAt).getTime()
    }), {
        affectedGuildIds: h,
        direction: r
    })
}

function g(t) {
    switch (t) {
        case _.ACTIVITY_STATUS_OFF:
            return u.intl.string(u.t.FzgQna).toLowerCase();
        case _.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS:
            return u.intl.string(u.t["1hvuGH"]).toLowerCase();
        case _.ACTIVITY_STATUS_ON:
            return u.intl.string(u.t.fQc5la).toLowerCase();
        default:
            return ""
    }
}

function f(t, e) {
    return {
        title: u.intl.string(t ? u.t.eYDA7D : u.t["9jYwjo"]),
        subtitle: u.intl.format(t ? u.t["c5/jDc"] : u.t.ajzh8S, {
            settingName: e
        }),
        confirmText: u.intl.string(t ? u.t["6uPZV1"] : u.t.a9PIyD),
        toastContent: u.intl.string(t ? u.t.AdpgML : u.t["Q7E+QF"])
    }
}

function O(t, e) {
    return {
        title: u.intl.string(t ? u.t.jRx1Aa : u.t.S0Y0bh),
        subtitle: u.intl.format(t ? u.t.Fs96LO : u.t.GcoYX8, {
            settingName: e
        }),
        confirmText: u.intl.string(t ? u.t["4DM5HJ"] : u.t.WRrDtI),
        toastContent: u.intl.string(t ? u.t.AdpgML : u.t["Q7E+QF"])
    }
}

function p(t, e) {
    let n = E(e),
        i = l._Z.getSetting();
    if (i === n || C(E(t)) > C(n) != C(i) > C(n)) return null;
    let s = T(i, n);
    if (null == s) return null;
    let a = function(t) {
        switch (t) {
            case r.KP.FRIENDS_AND_ALL_GUILDS:
                return u.intl.string(u.t.Boxc8R).toLowerCase();
            case r.KP.FRIENDS_AND_SMALL_GUILDS:
                return u.intl.string(u.t.YOIKBt).toLowerCase();
            case r.KP.FRIENDS_ONLY:
                return u.intl.string(u.t.u0nlJv).toLowerCase();
            default:
                return ""
        }
    }(e);
    return {
        affectedGuildIds: s.affectedGuildIds,
        direction: s.direction,
        settingName: a,
        mappedActivityValue: n
    }
}

function L(t) {
    return [...t].sort((t, e) => s.A.getScoreWithoutFetchingLatest(e) - s.A.getScoreWithoutFetchingLatest(t))
}

function I(t, e) {
    let n = (0, d.Kk)(),
        i = new Set(e);
    if ("restricting" === t) {
        let t = new Set([...n, ...i]);
        l.JG.updateSetting([...t])
    } else {
        let t = [...n].filter(t => !i.has(t));
        l.JG.updateSetting(t)
    }
}