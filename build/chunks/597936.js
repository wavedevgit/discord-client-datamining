/** chunk id: 597936, original params: e,t,n (module,exports,require) **/
n.d(t, {
    BN: () => c,
    li: () => E
});
var r = n(989349),
    i = n.n(r),
    l = n(335871),
    a = n(594061),
    o = n(617617),
    s = n(431162);
let c = e => {
        var t;
        if (!u(e)) return !1;
        let n = null == (t = o.A.settings.userContent) ? void 0 : t.safetyUserSentimentNoticeDismissedAt,
            r = null != n ? l.D.toDate(n) : void 0,
            a = null != r ? i()().diff(r, "days") : null;
        if (null != n && !(null != a && a > 30)) return !1;
        let {
            isEligible: c
        } = s.O.getCurrentConfig({
            location: "657a81_1"
        }, {
            autoTrackExposure: !0
        });
        return c
    },
    u = e => null != e && Date.now() - e.createdAt.getTime() > 2592e6,
    E = () => {
        let e = l.D.now();
        a.wc.updateAsync("userContent", t => {
            t.safetyUserSentimentNoticeDismissedAt = e
        }, a.Sb.INFREQUENT_USER_ACTION)
    }