/** chunk id: 163233 params = (module,exports,require) **/
n.d(t, {
    A: () => y
}), n(321073);
var a = n(627968),
    i = n(64700),
    s = n(311907),
    l = n(342494),
    r = n(688810),
    o = n(704824),
    d = n(362490),
    c = n(395332),
    u = n(429913),
    m = n(379848),
    h = n(183555),
    x = n(633075),
    p = n(735321),
    g = n(667049),
    f = n(657331),
    _ = n(606758),
    v = n(961350),
    b = n(403362),
    j = n(49999),
    A = n(518477),
    C = n(985018);

function y(e) {
    let {
        targetElementRef: t,
        onClose: n
    } = e, [y, T] = i.useState(!1), {
        trackUserProfileEditAction: S
    } = (0, h.NJ)(), E = (0, s.bG)([v.default], () => v.default.getId()), N = function() {
        let e, t, n = (0, s.bG)([v.default], () => v.default.getId()),
            a = (0, g.A)(n),
            l = i.useMemo(() => a.filter(e => e instanceof x.R), [a]),
            r = (e = (0, c.ul)({
                location: "UserProfileAccountPopoutApplicationWidgetCoachmark"
            }), i.useMemo(() => e?.filter(e => e.isEligibleForEditProfileUpsell()), [e])),
            m = i.useMemo(() => r?.map(e => e.applicationId) ?? [], [r]),
            h = (t = (0, u.A)(m), i.useMemo(() => t.filter(b.Vq), [t])),
            {
                tokens: p,
                fetched: f
            } = (0, o.j)(m),
            _ = (0, d.U9)(h);
        return i.useMemo(() => {
            if (null == r || null == p || !f) return null;
            let e = [],
                t = [];
            for (let n of r) {
                let a = p.find(e => e.application.id === n.applicationId),
                    i = l.find(e => e.applicationId === n.applicationId),
                    s = h.find(e => e.id === n.applicationId),
                    r = _.find(e => e.context.application.id === n.applicationId);
                if (null == s) return null;
                null != a && null == i ? e.push({
                    type: "linked",
                    config: n,
                    application: s,
                    dismissibleContent: n.editProfileLinkedDc
                }) : null == a && r?.preferredFlow != null && t.push({
                    type: "unlinked",
                    config: n,
                    application: s,
                    dismissibleContent: n.editProfileUnlinkedDc,
                    authFlow: r.preferredFlow
                })
            }
            return [...e, ...t]
        }, [r, p, f, l, h, _])
    }(), {
        analyticsLocations: I
    } = (0, r.Ay)();
    return null == N || 0 === N.length ? null : (0, a.jsx)(m.Ay, {
        contentTypes: N.map(e => e.dismissibleContent),
        children: e => {
            let {
                visibleContent: i,
                markAsDismissed: s
            } = e, r = N.find(e => e.dismissibleContent === i);
            if (null == r) return null;
            let o = "linked" === r.type,
                d = () => (0, f.openUserProfileModal)({
                    userId: E,
                    tabSection: A.RP.WIDGETS
                }).then(() => {
                    s(j.i.TAKE_ACTION), n()
                });
            return (0, a.jsx)(l.AM, {
                targetElementRef: t,
                position: "right",
                gradientColor: "blue",
                graphic: null != r.config.editProfileUpsellImage ? {
                    type: "image",
                    src: r.config.editProfileUpsellImage
                } : void 0,
                title: C.intl.format(C.t.TXDztH, {
                    applicationName: r.application.name
                }),
                body: o ? C.intl.string(C.t["63Kso0"]) : C.intl.string(C.t.HwXoeC),
                onRequestClose: () => s(j.i.USER_DISMISS),
                actions: [o ? {
                    text: C.intl.string(C.t.VSLDly),
                    onClick: () => {
                        T(!0), d().then(() => {
                            let e;
                            return e = new x.R({
                                applicationId: r.application.id
                            }), void((0, p.Y5)(e), S({
                                action: "WIDGET_ADDED",
                                ...e.getProfileEditAnalyticsOptions()
                            }), (0, _.XA)(A.jM.WIDGET_ADDED))
                        }).finally(() => T(!1))
                    },
                    loading: y
                } : {
                    text: C.intl.string(C.t["DSJi3+"]),
                    onClick: () => {
                        r.authFlow.initiate({
                            onConfirm: () => {
                                T(!0), d().finally(() => T(!1))
                            },
                            analyticsLocations: I
                        })
                    },
                    loading: y
                }]
            })
        }
    })
}