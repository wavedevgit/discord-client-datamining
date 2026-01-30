/** chunk id: 969611, original params: t,e,i (module,exports,require) **/
i.d(e, {
    default: () => f
});
var n = i(627968),
    l = i(64700),
    a = i(397927),
    o = i(930932),
    c = i(612479),
    r = i(954571),
    _ = i(545125),
    d = i(86039),
    s = i(360469),
    u = i(652215),
    b = i(670455),
    p = i(985018);
let m = [s.CS.OTHER, s.CS.ADS, s.CS.NOT_FUN];

function f(t) {
    var e;
    let {
        channel: f,
        embeddedActivityLocation: v,
        activityApplication: g,
        onClose: y,
        transitionState: O,
        analyticsData: S
    } = t;
    l.useEffect(() => {
        r.default.track(u.HAw.OPEN_MODAL, {
            type: "Activity Feedback Modal",
            application_id: g.id,
            application_name: g.name,
            game_id: g.id,
            source: "Activity End"
        })
    }, [g]);
    let A = (null == (e = g.embeddedActivityConfig) ? void 0 : e.displays_advertisements) === !0;
    return (0, n.jsx)(c.A, {
        modalType: "activity",
        header: p.intl.formatToPlainString(p.t.QXYwoD, {
            applicationName: g.name
        }),
        body: p.intl.string(p.t["9hk2KF"]),
        problemTitle: p.intl.string(p.t.g1q5fr),
        problems: (0, _.A)(!0, A),
        freeformNeededProblems: m,
        onSubmit: function(t) {
            var e;
            let {
                rating: l,
                problem: c,
                dontShowAgain: _,
                feedback: s
            } = t;
            _ && (r.default.track(u.HAw.ACTIVITY_REPORT_DONT_SHOW, {
                application_id: g.id,
                rating: l
            }), (0, o.n3)({
                feedbackType: b.MW.ACTIVITY,
                location: "ActivityFeedback"
            })), null == l || ((0, d.A)({
                problem: null != (e = null == c ? void 0 : c.value) ? e : null,
                channel: f,
                embeddedActivityLocation: v,
                feedback: s,
                activityApplication: g,
                analyticsData: S,
                location: "Activity End",
                rating: l
            }), null != c && (0, a.mMO)(async () => {
                let {
                    default: t
                } = await i.e("37836").then(i.bind(i, 845671));
                return e => (0, n.jsx)(t, function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var i = null != arguments[e] ? arguments[e] : {},
                            n = Object.keys(i);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(i).filter(function(t) {
                            return Object.getOwnPropertyDescriptor(i, t).enumerable
                        }))), n.forEach(function(e) {
                            var n;
                            n = i[e], e in t ? Object.defineProperty(t, e, {
                                value: n,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : t[e] = n
                        })
                    }
                    return t
                }({
                    body: p.intl.string(p.t["zuHR+y"])
                }, e))
            }))
        },
        onClose: y,
        transitionState: O,
        otherKey: s.CS.OTHER
    })
}