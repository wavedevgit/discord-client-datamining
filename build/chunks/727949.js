/** chunk id: 727949 params = (module,exports,require) **/
n.d(t, {
    GQ: () => A,
    NF: () => T,
    QG: () => I,
    Tp: () => f,
    ZR: () => E,
    ne: () => N
});
var i = n(311907),
    l = n(554146),
    a = n(826673),
    r = n(367727),
    s = n(927813),
    o = n(661191),
    c = n(851746),
    d = n(894374),
    u = n(103411),
    _ = n(49999),
    m = n(985018);

function A(e) {
    let t = (e - Date.now()) / s.A.Millis.HOUR;
    return t > 24 ? m.intl.formatToPlainString(m.t["g9s+dA"], {
        numDays: Math.floor(t / 24)
    }) : t >= 1 ? m.intl.formatToPlainString(m.t.k9v33y, {
        numHours: Math.floor(t)
    }) : m.intl.formatToPlainString(m.t["/d0GmT"], {
        numMinutes: Math.floor(60 * t)
    })
}
let E = () => (0, a.k8)(l.M.REFERRAL_PROGRAM_NITRO_TAB_BADGE),
    I = () => {
        (0, a.Dr)(l.M.REFERRAL_PROGRAM_NITRO_TAB_BADGE)
    },
    T = e => {
        let {
            trialOffer: t
        } = e;
        if (null == t) return !1;
        let n = void 0 !== t.referrer_id,
            i = void 0 === t.redeemed_at,
            l = new Date(o.default.extractTimestamp(t.id)),
            a = new Date;
        return n && i && a >= l
    },
    N = e => {
        null != e ? (0, r.qr)(l.M.REFERRAL_PROGRAM_POPOVER_V2, e, {
            dismissAction: _.i.INDIRECT_ACTION
        }) : (0, a.Dr)(l.M.REFERRAL_PROGRAM_POPOVER)
    },
    f = () => {
        let e, t = (0, u.m)(!1),
            n = (0, i.bG)([c.A], () => c.A.getReferralsRemaining()),
            r = (0, i.bG)([c.A], () => c.A.getReminderStateId());
        return e = (0, d.A)({
            location: "ReferralProgramUtils"
        }) ? null != r && !(0, a.u$)(l.M.REFERRAL_PROGRAM_POPOVER_V2, r).isDismissed : !(0, a.k8)(l.M.REFERRAL_PROGRAM_POPOVER), t && e && null != n && n > 0
    }