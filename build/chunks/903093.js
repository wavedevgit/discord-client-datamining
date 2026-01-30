/** chunk id: 903093, original params: e,t,n (module,exports,require) **/
n.d(t, {
    $5: () => b,
    P$: () => d,
    Qm: () => s,
    _J: () => p,
    di: () => D,
    fi: () => O,
    k$: () => c,
    mR: () => f,
    ql: () => y,
    r2: () => g,
    yc: () => o
}), n(321073);
var r = n(989349),
    i = n.n(r),
    l = n(834409),
    a = n(218113),
    u = n(985018);
let o = {
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit"
};

function c(e) {
    return null != e.dmSpamDetectedAt && i()(e.dmSpamDetectedAt).add(a.Qs, "hours") > i()() || null != e.raidDetectedAt && i()(e.raidDetectedAt).add(a.Qs, "hours") > i()()
}

function d(e) {
    return null != e.raidDetectedAt && i()(e.raidDetectedAt).add(a.Qs, "hours") > i()()
}

function s(e) {
    return null != e.dmSpamDetectedAt && i()(e.dmSpamDetectedAt).add(a.Qs, "hours") > i()()
}

function b(e) {
    return null == e ? void 0 : d(e) ? l.V.JOIN_RAID : l.V.DM_RAID
}

function f(e, t) {
    let n = [];
    return e && n.push(l.ZE.INVITES_DISABLED), t && n.push(l.ZE.DMS_DISABLED), n
}

function O(e, t) {
    let n = [];
    return e || n.push(l.ZE.INVITES_DISABLED), t || n.push(l.ZE.DMS_DISABLED), n
}

function p(e) {
    return null != e.dmsDisabledUntil && new Date(e.dmsDisabledUntil) > new Date || null != e.invitesDisabledUntil && new Date(e.invitesDisabledUntil) > new Date
}

function D(e) {
    return (null == e ? void 0 : e.dmsDisabledUntil) != null && new Date(e.dmsDisabledUntil) > new Date
}

function g(e) {
    return (null == e ? void 0 : e.invitesDisabledUntil) != null && new Date(e.invitesDisabledUntil) > new Date
}

function y(e, t) {
    var n;
    let r = null != (n = e.dmsDisabledUntil) ? n : e.invitesDisabledUntil;
    if (null == r) return "";
    let i = null != e.dmsDisabledUntil,
        l = null != e.invitesDisabledUntil;
    switch (!0) {
        case i && l:
            return u.intl.formatToPlainString(u.t.hCZitf, {
                guildName: t,
                time: new Date(r).toLocaleString(u.intl.currentLocale, o)
            });
        case i:
            return u.intl.formatToPlainString(u.t["HNKxf+"], {
                guildName: t,
                time: new Date(r).toLocaleString(u.intl.currentLocale, o)
            });
        case l:
            return u.intl.formatToPlainString(u.t.M3iSyL, {
                guildName: t,
                time: new Date(r).toLocaleString(u.intl.currentLocale, o)
            });
        default:
            return ""
    }
}