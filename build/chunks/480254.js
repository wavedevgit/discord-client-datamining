/** chunk id: 480254, original params: e,t,r (module,exports,require) **/
r.d(t, {
    m: () => x
}), r(896048);
var n = r(627968),
    a = r(64700),
    o = r(158954),
    i = r(311907),
    l = r(397927),
    s = r(158032),
    c = r(925847),
    d = r(773669),
    p = r(469778),
    u = r(954571),
    b = r(927578),
    m = r(580630),
    _ = r(501957),
    y = r(232392),
    g = r(788868),
    f = r(652215),
    S = r(985018),
    C = r(938822);
let x = e => {
    let {
        analyticsLocations: t,
        onClose: r,
        transitionState: x,
        premiumSubscription: h,
        currentInvoicePreview: O,
        renewalInvoicePreview: j,
        fractionalPremiumInfo: v,
        setStep: P
    } = e, w = (0, i.bG)([d.default], () => d.default.locale), I = new Date(j.subscriptionPeriodStart);
    h.isBoostOnly || (I = b.Ay.extendDateWithUnconsumedFractionalPremium(I, v.unactivatedUnits));
    let E = (0, i.bG)([p.A], () => p.A.getForApplication(g.tv)),
        M = (0, m.$g)(O.total, O.currency),
        [T, A] = (0, a.useState)(!1),
        [k, R] = (0, a.useState)(!1),
        D = I.toLocaleDateString(w, {
            month: "long",
            day: "numeric",
            year: "numeric"
        }),
        F = a.useMemo(() => (0, c.A)(), []);
    a.useEffect(() => {
        u.default.track(f.HAw.PREMIUM_RESUBSCRIBE_FLOW_STARTED, function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {},
                    n = Object.keys(r);
                "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable
                }))), n.forEach(function(t) {
                    var n;
                    n = r[t], t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n
                })
            }
            return e
        }({
            location_stack: t,
            load_id: F
        }, (0, _.j)(h)))
    }, [t, h, F]);
    let N = async () => {
        A(!0), R(!1);
        try {
            await s.Ir(h, t), P(y.g.SUCCESS)
        } catch (e) {
            R(!0), A(!1)
        }
    }, U = [{
        text: S.intl.string(S.t["cY+Oob"]),
        onClick: () => N(),
        variant: "primary",
        loading: T,
        disabled: T
    }], B = S.intl.format(S.t.dbGGui, {
        price: M,
        date: D
    }), L = h.premiumPlanIdFromItems;
    if (b.Ay.hasUnconsumedGiftForSubscriptionPlan(E, L)) {
        let e = (0, m.$g)(j.total, j.currency),
            t = b.Ay.getIntervalForInvoice(j),
            r = {
                discountedPrice: e,
                regularPrice: M,
                date: D,
                billingPeriod: b.Ay.getIntervalStringAsNoun(t.intervalType)
            };
        B = j.taxInclusive ? S.intl.format(S.t.G8IxyE, r) : S.intl.format(S.t.kXtIIn, r)
    }
    return (0, n.jsxs)(o.ExpressiveModal, {
        graphic: {
            type: "image",
            src: C.A
        },
        gradientColor: "nitro-pink",
        transitionState: x,
        title: S.intl.string(S.t.fYEWlq),
        actions: U,
        onClose: async () => r(),
        children: [(0, n.jsxs)(l.Text, {
            variant: "text-md/normal",
            style: {
                textAlign: "center"
            },
            children: [(0, n.jsx)("p", {
                children: B
            }), (0, n.jsx)("p", {
                children: S.intl.string(S.t.UQolSy)
            })]
        }), k ? (0, n.jsx)(o.wx6, {
            type: "critical",
            children: S.intl.string(S.t["5mlOCW"])
        }) : null]
    })
}