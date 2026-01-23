/** Chunk was on 5241 **/
/** chunk id: 480254, original params: e,t,r (module,exports,require) **/
r.d(t, {
    m: () => C
}), r(896048);
var n = r(627968),
    a = r(64700),
    i = r(158954),
    o = r(311907),
    c = r(397927),
    l = r(158032),
    s = r(925847),
    d = r(773669),
    b = r(469778),
    _ = r(954571),
    p = r(927578),
    u = r(580630),
    m = r(501957),
    y = r(232392),
    g = r(788868),
    S = r(652215),
    f = r(985018),
    x = r(938822);
let C = e => {
    let {
        analyticsLocations: t,
        onClose: r,
        transitionState: C,
        premiumSubscription: h,
        currentInvoicePreview: O,
        renewalInvoicePreview: v,
        fractionalPremiumInfo: j,
        setStep: w
    } = e, P = (0, o.bG)([d.default], () => d.default.locale), I = new Date(v.subscriptionPeriodStart);
    h.isBoostOnly || (I = p.Ay.extendDateWithUnconsumedFractionalPremium(I, j.unactivatedUnits));
    let E = (0, o.bG)([b.A], () => b.A.getForApplication(g.tv)),
        T = (0, u.$g)(O.total, O.currency),
        [A, M] = (0, a.useState)(!1),
        [k, R] = (0, a.useState)(!1),
        D = I.toLocaleDateString(P, {
            month: "long",
            day: "numeric",
            year: "numeric"
        }),
        F = a.useMemo(() => (0, s.A)(), []);
    a.useEffect(() => {
        _.default.track(S.HAw.PREMIUM_RESUBSCRIBE_FLOW_STARTED, function(e) {
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
        }, (0, m.j)(h)))
    }, [t, h, F]);
    let L = async () => {
        M(!0), R(!1);
        try {
            await l.Ir(h, t), w(y.g.SUCCESS)
        } catch (e) {
            R(!0), M(!1)
        }
    }, N = [{
        text: f.intl.string(f.t["cY+Oob"]),
        onClick: () => L(),
        variant: "primary",
        loading: A,
        disabled: A
    }], U = f.intl.format(f.t.dbGGui, {
        price: T,
        date: D
    }), B = h.premiumPlanIdFromItems;
    if (p.Ay.hasUnconsumedGiftForSubscriptionPlan(E, B)) {
        let e = (0, u.$g)(v.total, v.currency),
            t = p.Ay.getIntervalForInvoice(v),
            r = {
                discountedPrice: e,
                regularPrice: T,
                date: D,
                billingPeriod: p.Ay.getIntervalStringAsNoun(t.intervalType)
            };
        U = v.taxInclusive ? f.intl.format(f.t.G8IxyE, r) : f.intl.format(f.t.kXtIIn, r)
    }
    return (0, n.jsxs)(i.ExpressiveModal, {
        graphic: {
            type: "image",
            src: x.A
        },
        gradientColor: "nitro-pink",
        transitionState: C,
        title: f.intl.string(f.t.fYEWlq),
        actions: N,
        onClose: async () => r(),
        children: [(0, n.jsxs)(c.Text, {
            variant: "text-md/normal",
            style: {
                textAlign: "center"
            },
            children: [(0, n.jsx)("p", {
                children: U
            }), (0, n.jsx)("p", {
                children: f.intl.string(f.t.UQolSy)
            })]
        }), k ? (0, n.jsx)(i.wx6, {
            type: "critical",
            children: f.intl.string(f.t["5mlOCW"])
        }) : null]
    })
}