/** chunk id: 34550, original params: e,t,r (module,exports,require) **/
r.d(t, {
    $b: () => g,
    Cm: () => m,
    JO: () => S,
    dN: () => y,
    h6: () => O,
    mf: () => E
});
var n = r(554146),
    o = r(367727),
    i = r(994500),
    c = r(954571),
    a = r(927813),
    l = r(609415),
    s = r(842524),
    _ = r(235390),
    u = r(14594),
    b = r(652215);
let d = 3 * a.A.Millis.DAY,
    f = a.A.Millis.WEEK,
    p = a.A.Millis.DAYS_30,
    m = () => {
        if (!(0, l.Bv)("block_user_feedback_utils")) return !1;
        let e = i.A.getSinces();
        return Object.keys(e).some(t => {
            let r = Date.now() - Date.parse(e[t]);
            return i.A.isBlocked(t) && r > f && r < p
        })
    },
    g = (e, t, r, n) => {
        c.default.track(b.HAw.BLOCK_USER_FEEDBACK_SUBMITTED, {
            rating: e,
            feedback: t,
            reason: r,
            skipped: n
        })
    },
    O = () => {
        let {
            enabled: e,
            shouldGetShorterIgnoreDuration: t
        } = (0, _.MA)("ignore_user_feedback_utils");
        if (!e) return !1;
        let {
            isDismissed: r
        } = (0, o.FZ)(n.M.NAGBAR_NOTICE_IGNORE_USER_FEEDBACK, {
            cooldownDurationMs: u.aH
        });
        if (r) return !1;
        let c = t ? d : f,
            a = s.A.getIgnoreTimestamps();
        return Object.keys(a).some(e => {
            let t = Date.now() - Number(a[e]);
            return i.A.isIgnored(e) && t > c && t < p
        })
    },
    E = (e, t, r, n) => {
        c.default.track(b.HAw.IGNORE_USER_FEEDBACK_SUBMITTED, {
            rating: e,
            feedback: t,
            reason: r,
            skipped: n
        })
    },
    S = e => e === n.M.AGE_VERIFICATION_SURVEY_MODAL_CLOSE ? u.mg.KID_STARTED : u.mg.GET_STARTED,
    y = (e, t, r, n, o) => {
        c.default.track(b.HAw.AGE_VERIFICATION_FEEDBACK_SUBMITTED, {
            rating: e,
            feedback: t,
            reason: r,
            skipped: n,
            entrypoint: o
        })
    }