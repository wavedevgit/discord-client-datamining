/** Chunk was on 92917 **/
/** chunk id: 903093, original params: e,t,n (module,exports,require) **/
n.d(t, {
    $5: () => p,
    P$: () => u,
    Qm: () => d,
    _J: () => g,
    di: () => h,
    fi: () => f,
    k$: () => c,
    mR: () => m,
    ql: () => b,
    r2: () => _,
    yc: () => o
}), n(321073);
var r = n(989349),
    i = n.n(r),
    l = n(834409),
    a = n(218113),
    s = n(985018);
let o = {
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit"
};

function c(e) {
    return null != e.dmSpamDetectedAt && i()(e.dmSpamDetectedAt).add(a.Qs, "hours") > i()() || null != e.raidDetectedAt && i()(e.raidDetectedAt).add(a.Qs, "hours") > i()()
}

function u(e) {
    return null != e.raidDetectedAt && i()(e.raidDetectedAt).add(a.Qs, "hours") > i()()
}

function d(e) {
    return null != e.dmSpamDetectedAt && i()(e.dmSpamDetectedAt).add(a.Qs, "hours") > i()()
}

function p(e) {
    return null == e ? void 0 : u(e) ? l.V.JOIN_RAID : l.V.DM_RAID
}

function m(e, t) {
    let n = [];
    return e && n.push(l.ZE.INVITES_DISABLED), t && n.push(l.ZE.DMS_DISABLED), n
}

function f(e, t) {
    let n = [];
    return e || n.push(l.ZE.INVITES_DISABLED), t || n.push(l.ZE.DMS_DISABLED), n
}

function g(e) {
    return null != e.dmsDisabledUntil && new Date(e.dmsDisabledUntil) > new Date || null != e.invitesDisabledUntil && new Date(e.invitesDisabledUntil) > new Date
}

function h(e) {
    return (null == e ? void 0 : e.dmsDisabledUntil) != null && new Date(e.dmsDisabledUntil) > new Date
}

function _(e) {
    return (null == e ? void 0 : e.invitesDisabledUntil) != null && new Date(e.invitesDisabledUntil) > new Date
}

function b(e, t) {
    var n;
    let r = null != (n = e.dmsDisabledUntil) ? n : e.invitesDisabledUntil;
    if (null == r) return "";
    let i = null != e.dmsDisabledUntil,
        l = null != e.invitesDisabledUntil;
    switch (!0) {
        case i && l:
            return s.intl.formatToPlainString(s.t.hCZitf, {
                guildName: t,
                time: new Date(r).toLocaleString(s.intl.currentLocale, o)
            });
        case i:
            return s.intl.formatToPlainString(s.t["HNKxf+"], {
                guildName: t,
                time: new Date(r).toLocaleString(s.intl.currentLocale, o)
            });
        case l:
            return s.intl.formatToPlainString(s.t.M3iSyL, {
                guildName: t,
                time: new Date(r).toLocaleString(s.intl.currentLocale, o)
            });
        default:
            return ""
    }
}