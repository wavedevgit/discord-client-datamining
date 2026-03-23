/** chunk id: 34550 params = (module,exports,require) **/
n.d(t, {
    $b: () => T,
    Cm: () => I,
    JO: () => g,
    dN: () => C,
    h6: () => f,
    mf: () => N
});
var i = n(554146),
    a = n(367727),
    l = n(994500),
    r = n(954571),
    s = n(927813),
    o = n(609415),
    c = n(842524),
    d = n(235390),
    u = n(14594),
    _ = n(652215);
let m = 3 * s.A.Millis.DAY,
    A = s.A.Millis.WEEK,
    E = s.A.Millis.DAYS_30,
    I = () => {
        if (!(0, o.Bv)("block_user_feedback_utils")) return !1;
        let e = l.A.getSinces();
        return Object.keys(e).some(t => {
            let n = Date.now() - Date.parse(e[t]);
            return l.A.isBlocked(t) && n > A && n < E
        })
    },
    T = (e, t, n, i) => {
        r.default.track(_.HAw.BLOCK_USER_FEEDBACK_SUBMITTED, {
            rating: e,
            feedback: t,
            reason: n,
            skipped: i
        })
    },
    f = () => {
        let {
            enabled: e,
            shouldGetShorterIgnoreDuration: t
        } = (0, d.MA)("ignore_user_feedback_utils");
        if (!e) return !1;
        let {
            isDismissed: n
        } = (0, a.FZ)(i.M.NAGBAR_NOTICE_IGNORE_USER_FEEDBACK, {
            cooldownDurationMs: u.aH
        });
        if (n) return !1;
        let r = t ? m : A,
            s = c.A.getIgnoreTimestamps();
        return Object.keys(s).some(e => {
            let t = Date.now() - Number(s[e]);
            return l.A.isIgnored(e) && t > r && t < E
        })
    },
    N = (e, t, n, i) => {
        r.default.track(_.HAw.IGNORE_USER_FEEDBACK_SUBMITTED, {
            rating: e,
            feedback: t,
            reason: n,
            skipped: i
        })
    },
    g = e => e === i.M.AGE_VERIFICATION_SURVEY_MODAL_CLOSE ? u.mg.KID_STARTED : u.mg.GET_STARTED,
    C = (e, t, n, i, a) => {
        r.default.track(_.HAw.AGE_VERIFICATION_FEEDBACK_SUBMITTED, {
            rating: e,
            feedback: t,
            reason: n,
            skipped: i,
            entrypoint: a
        })
    }