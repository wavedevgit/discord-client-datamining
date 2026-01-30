/** chunk id: 386077, original params: t,e,n (module,exports,require) **/
n.d(e, {
    default: () => O
}), n(896048);
var i = n(627968),
    a = n(64700),
    l = n(158954),
    r = n(397927),
    s = n(384904),
    c = n(793574),
    o = n(688810),
    _ = n(964404),
    u = n(954571),
    C = n(163437),
    A = n(910804),
    d = n(574475),
    p = n(652215),
    I = n(985018),
    N = n(508025);

function O(t) {
    let {
        transitionState: e,
        application: n,
        storeListing: O,
        subscription: S,
        guild: E,
        onClose: T
    } = t, {
        analyticsLocations: P
    } = (0, o.Ay)(c.A.APPLICATION_SUBSCRIPTION_CANCELLATION_MODAL), {
        cancelSubscription: m,
        error: g,
        submitting: b
    } = (t => {
        let [e, n] = a.useState(!1), [i, l] = a.useState(null);
        return {
            cancelSubscription: async e => {
                try {
                    return n(!0), await s.M2(e, t), !0
                } catch (t) {
                    l(t)
                } finally {
                    n(!1)
                }
            },
            error: i,
            submitting: e
        }
    })(P), f = async () => {
        await m(S.id) && (_.Ay.disableApplicationSubscriptionCancellationSurvey ? T() : (0, r.mMO)(async () => (await T(), t => (0, i.jsx)(d.A, function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {},
                    i = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
                    return Object.getOwnPropertyDescriptor(n, t).enumerable
                }))), i.forEach(function(e) {
                    var i;
                    i = n[e], e in t ? Object.defineProperty(t, e, {
                        value: i,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : t[e] = i
                })
            }
            return t
        }({
            application: n,
            subscriptionId: S.id
        }, t)))))
    };
    a.useEffect(() => {
        u.default.track(p.HAw.CANCELLATION_FLOW_STARTED, {
            location_stack: P
        })
    }, [P]);
    let L = (0, C.bg)(O.skuFlags);
    return (0, i.jsx)(l.ExpressiveModal, {
        actions: [{
            loading: b,
            onClick: f,
            text: I.intl.string(I.t.KSqyfW),
            variant: "critical-primary"
        }],
        graphic: {
            type: "dynamic",
            component: r.Z86.APPLICATION_IMAGE_HEADER,
            aspectRatio: "16/9",
            props: {
                application: n,
                className: N.Sb
            }
        },
        title: I.intl.string(I.t.CeCHk1),
        subtitle: L ? I.intl.format(I.t.fZP9QD, {
            applicationName: n.name,
            timestamp: S.currentPeriodEnd.getTime()
        }) : I.intl.format(I.t["3LeWBF"], {
            guild: null == E ? void 0 : E.name,
            applicationName: n.name,
            timestamp: S.currentPeriodEnd.getTime()
        }),
        transitionState: e,
        onClose: T,
        children: (0, i.jsxs)("div", {
            className: N.oV,
            children: [null != g ? (0, i.jsx)(l.wx6, {
                type: "critical",
                children: g.message
            }) : null, (0, i.jsx)(A.iH, {
                applicationId: n.id,
                storeListingBenefits: O.benefits,
                className: N.iq
            })]
        })
    })
}