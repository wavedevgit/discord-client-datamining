/** chunk id: 903093 params = (module,exports,require) **/
n.d(t, {
    $5: () => _,
    P$: () => u,
    Qm: () => d,
    _J: () => E,
    di: () => T,
    fi: () => m,
    k$: () => c,
    mR: () => A,
    ql: () => N,
    r2: () => I,
    yc: () => o
}), n(321073);
var i = n(989349),
    l = n.n(i),
    a = n(834409),
    r = n(218113),
    s = n(985018);
let o = {
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit"
};

function c(e) {
    return null != e.dmSpamDetectedAt && l()(e.dmSpamDetectedAt).add(r.Qs, "hours") > l()() || null != e.raidDetectedAt && l()(e.raidDetectedAt).add(r.Qs, "hours") > l()()
}

function u(e) {
    return null != e.raidDetectedAt && l()(e.raidDetectedAt).add(r.Qs, "hours") > l()()
}

function d(e) {
    return null != e.dmSpamDetectedAt && l()(e.dmSpamDetectedAt).add(r.Qs, "hours") > l()()
}

function _(e) {
    return null == e ? void 0 : u(e) ? a.V.JOIN_RAID : a.V.DM_RAID
}

function A(e, t) {
    let n = [];
    return e && n.push(a.ZE.INVITES_DISABLED), t && n.push(a.ZE.DMS_DISABLED), n
}

function m(e, t) {
    let n = [];
    return e || n.push(a.ZE.INVITES_DISABLED), t || n.push(a.ZE.DMS_DISABLED), n
}

function E(e) {
    return null != e.dmsDisabledUntil && new Date(e.dmsDisabledUntil) > new Date || null != e.invitesDisabledUntil && new Date(e.invitesDisabledUntil) > new Date
}

function T(e) {
    return e?.dmsDisabledUntil != null && new Date(e.dmsDisabledUntil) > new Date
}

function I(e) {
    return e?.invitesDisabledUntil != null && new Date(e.invitesDisabledUntil) > new Date
}

function N(e, t) {
    let n = e.dmsDisabledUntil ?? e.invitesDisabledUntil;
    if (null == n) return "";
    let i = null != e.dmsDisabledUntil,
        l = null != e.invitesDisabledUntil;
    switch (!0) {
        case i && l:
            return s.intl.formatToPlainString(s.t.hCZitf, {
                guildName: t,
                time: new Date(n).toLocaleString(s.intl.currentLocale, o)
            });
        case i:
            return s.intl.formatToPlainString(s.t["HNKxf+"], {
                guildName: t,
                time: new Date(n).toLocaleString(s.intl.currentLocale, o)
            });
        case l:
            return s.intl.formatToPlainString(s.t.M3iSyL, {
                guildName: t,
                time: new Date(n).toLocaleString(s.intl.currentLocale, o)
            });
        default:
            return ""
    }
}