/** chunk id: 34550, original params: e,t,r (module,exports,require) **/
r.d(t, {
    $b: () => f,
    Cm: () => g,
    JO: () => p,
    dN: () => I,
    h6: () => A,
    mf: () => S
});
var n = r(554146),
    o = r(367727),
    i = r(994500),
    a = r(954571),
    _ = r(927813),
    l = r(609415),
    s = r(842524),
    c = r(235390),
    u = r(14594),
    d = r(652215);
let b = 3 * _.A.Millis.DAY,
    m = _.A.Millis.WEEK,
    E = _.A.Millis.DAYS_30,
    g = () => {
        if (!(0, l.Bv)("block_user_feedback_utils")) return !1;
        let e = i.A.getSinces();
        return Object.keys(e).some(t => {
            let r = Date.now() - Date.parse(e[t]);
            return i.A.isBlocked(t) && r > m && r < E
        })
    },
    f = (e, t, r, n) => {
        a.default.track(d.HAw.BLOCK_USER_FEEDBACK_SUBMITTED, {
            rating: e,
            feedback: t,
            reason: r,
            skipped: n
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
        } = (0, o.FZ)(n.M.NAGBAR_NOTICE_IGNORE_USER_FEEDBACK, {
            cooldownDurationMs: u.aH
        });
        if (r) return !1;
        let a = t ? b : m,
            _ = s.A.getIgnoreTimestamps();
        return Object.keys(_).some(e => {
            let t = Date.now() - Number(_[e]);
            return i.A.isIgnored(e) && t > a && t < E
        })
    },
    S = (e, t, r, n) => {
        a.default.track(d.HAw.IGNORE_USER_FEEDBACK_SUBMITTED, {
            rating: e,
            feedback: t,
            reason: r,
            skipped: n
        })
    },
    p = e => e === n.M.AGE_VERIFICATION_SURVEY_MODAL_CLOSE ? u.mg.KID_STARTED : u.mg.GET_STARTED,
    I = (e, t, r, n, o) => {
        a.default.track(d.HAw.AGE_VERIFICATION_FEEDBACK_SUBMITTED, {
            rating: e,
            feedback: t,
            reason: r,
            skipped: n,
            entrypoint: o
        })
    }