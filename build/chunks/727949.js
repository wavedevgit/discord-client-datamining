/** chunk id: 727949 params = (module,exports,require) **/
"use strict";
n.d(t, {
    GQ: () => A,
    NF: () => T,
    QG: () => I,
    Tp: () => N,
    ZR: () => m,
    ne: () => g
});
var i = n(311907),
    r = n(554146),
    s = n(826673),
    l = n(367727),
    a = n(927813),
    c = n(661191),
    o = n(851746),
    u = n(894374),
    d = n(103411),
    _ = n(49999),
    E = n(985018);

function A(e) {
    let t = (e - Date.now()) / a.A.Millis.HOUR;
    return t > 24 ? E.intl.formatToPlainString(E.t["g9s+dA"], {
        numDays: Math.floor(t / 24)
    }) : t >= 1 ? E.intl.formatToPlainString(E.t.k9v33y, {
        numHours: Math.floor(t)
    }) : E.intl.formatToPlainString(E.t["/d0GmT"], {
        numMinutes: Math.floor(60 * t)
    })
}
let m = () => (0, s.k8)(r.M.REFERRAL_PROGRAM_NITRO_TAB_BADGE),
    I = () => {
        (0, s.Dr)(r.M.REFERRAL_PROGRAM_NITRO_TAB_BADGE)
    },
    T = e => {
        let {
            trialOffer: t
        } = e;
        if (null == t) return !1;
        let n = void 0 !== t.referrer_id,
            i = void 0 === t.redeemed_at,
            r = new Date(c.default.extractTimestamp(t.id)),
            s = new Date;
        return n && i && s >= r
    },
    g = e => {
        null != e ? (0, l.qr)(r.M.REFERRAL_PROGRAM_POPOVER_V2, e, {
            dismissAction: _.i.INDIRECT_ACTION
        }) : (0, s.Dr)(r.M.REFERRAL_PROGRAM_POPOVER)
    },
    N = () => {
        let e, t = (0, d.m)(!1),
            n = (0, i.bG)([o.A], () => o.A.getReferralsRemaining()),
            l = (0, i.bG)([o.A], () => o.A.getReminderStateId());
        return e = (0, u.A)({
            location: "ReferralProgramUtils"
        }) ? null != l && !(0, s.u$)(r.M.REFERRAL_PROGRAM_POPOVER_V2, l).isDismissed : !(0, s.k8)(r.M.REFERRAL_PROGRAM_POPOVER), t && e && null != n && n > 0
    }