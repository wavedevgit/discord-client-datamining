/** chunk id: 34550, original params: e,t,n (module,exports,require) **/
n.d(t, {
    $b: () => f,
    Cm: () => h,
    JO: () => x,
    dN: () => C,
    h6: () => g,
    mf: () => p
});
var i = n(554146),
    l = n(367727),
    a = n(994500),
    r = n(954571),
    s = n(927813),
    o = n(609415),
    c = n(842524),
    d = n(235390),
    u = n(14594),
    m = n(652215);
let _ = 3 * s.A.Millis.DAY,
    A = s.A.Millis.WEEK,
    E = s.A.Millis.DAYS_30,
    h = () => {
        if (!(0, o.Bv)("block_user_feedback_utils")) return !1;
        let e = a.A.getSinces();
        return Object.keys(e).some(t => {
            let n = Date.now() - Date.parse(e[t]);
            return a.A.isBlocked(t) && n > A && n < E
        })
    },
    f = (e, t, n, i) => {
        r.default.track(m.HAw.BLOCK_USER_FEEDBACK_SUBMITTED, {
            rating: e,
            feedback: t,
            reason: n,
            skipped: i
        })
    },
    g = () => {
        let {
            enabled: e,
            shouldGetShorterIgnoreDuration: t
        } = (0, d.MA)("ignore_user_feedback_utils");
        if (!e) return !1;
        let {
            isDismissed: n
        } = (0, l.FZ)(i.M.NAGBAR_NOTICE_IGNORE_USER_FEEDBACK, {
            cooldownDurationMs: u.aH
        });
        if (n) return !1;
        let r = t ? _ : A,
            s = c.A.getIgnoreTimestamps();
        return Object.keys(s).some(e => {
            let t = Date.now() - Number(s[e]);
            return a.A.isIgnored(e) && t > r && t < E
        })
    },
    p = (e, t, n, i) => {
        r.default.track(m.HAw.IGNORE_USER_FEEDBACK_SUBMITTED, {
            rating: e,
            feedback: t,
            reason: n,
            skipped: i
        })
    },
    x = e => e === i.M.AGE_VERIFICATION_SURVEY_MODAL_CLOSE ? u.mg.KID_STARTED : u.mg.GET_STARTED,
    C = (e, t, n, i, l) => {
        r.default.track(m.HAw.AGE_VERIFICATION_FEEDBACK_SUBMITTED, {
            rating: e,
            feedback: t,
            reason: n,
            skipped: i,
            entrypoint: l
        })
    }