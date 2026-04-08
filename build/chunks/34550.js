/** chunk id: 34550 params = (module,exports,require) **/
r.d(t, {
    $b: () => S,
    Cm: () => g,
    JO: () => f,
    dN: () => I,
    h6: () => A,
    mf: () => p
});
var o = r(554146),
    n = r(367727),
    i = r(994500),
    _ = r(954571),
    a = r(927813),
    s = r(609415),
    l = r(842524),
    c = r(235390),
    u = r(14594),
    d = r(652215);
let b = 3 * a.A.Millis.DAY,
    m = a.A.Millis.WEEK,
    E = a.A.Millis.DAYS_30,
    g = () => {
        if (!(0, s.Bv)("block_user_feedback_utils")) return !1;
        let e = i.A.getSinces();
        return Object.keys(e).some(t => {
            let r = Date.now() - Date.parse(e[t]);
            return i.A.isBlocked(t) && r > m && r < E
        })
    },
    S = (e, t, r, o) => {
        _.default.track(d.HAw.BLOCK_USER_FEEDBACK_SUBMITTED, {
            rating: e,
            feedback: t,
            reason: r,
            skipped: o
        })
    },
    A = () => {
        let {
            enabled: e,
            shouldGetShorterIgnoreDuration: t
        } = (0, c.MA)("ignore_user_feedback_utils");
        if (!e) return !1;
        let {
            isDismissed: r
        } = (0, n.FZ)(o.M.NAGBAR_NOTICE_IGNORE_USER_FEEDBACK, {
            cooldownDurationMs: u.aH
        });
        if (r) return !1;
        let _ = t ? b : m,
            a = l.A.getIgnoreTimestamps();
        return Object.keys(a).some(e => {
            let t = Date.now() - Number(a[e]);
            return i.A.isIgnored(e) && t > _ && t < E
        })
    },
    p = (e, t, r, o) => {
        _.default.track(d.HAw.IGNORE_USER_FEEDBACK_SUBMITTED, {
            rating: e,
            feedback: t,
            reason: r,
            skipped: o
        })
    },
    f = e => e === o.M.AGE_VERIFICATION_SURVEY_MODAL_CLOSE ? u.mg.KID_STARTED : u.mg.GET_STARTED,
    I = (e, t, r, o, n) => {
        _.default.track(d.HAw.AGE_VERIFICATION_FEEDBACK_SUBMITTED, {
            rating: e,
            feedback: t,
            reason: r,
            skipped: o,
            entrypoint: n
        })
    }