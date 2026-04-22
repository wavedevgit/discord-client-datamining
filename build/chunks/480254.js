/** chunk id: 480254 params = (module,exports,require) **/
r.d(t, {
    m: () => f
});
var o = r(627968),
    n = r(64700),
    a = r(158954),
    i = r(311907),
    _ = r(397927),
    s = r(158032),
    l = r(925847),
    c = r(773669),
    d = r(469778),
    p = r(954571),
    u = r(927578),
    m = r(580630),
    b = r(501957),
    C = r(232392),
    h = r(788868),
    x = r(652215),
    g = r(985018),
    S = r(977544);
let f = e => {
    let {
        analyticsLocations: t,
        onClose: r,
        transitionState: f,
        premiumSubscription: I,
        currentInvoicePreview: y,
        renewalInvoicePreview: v,
        fractionalPremiumInfo: T,
        setStep: A
    } = e, F = (0, i.bG)([c.default], () => c.default.locale), w = new Date(v.subscriptionPeriodStart);
    I.isBoostOnly || (w = u.Ay.extendDateWithUnconsumedFractionalPremium(w, T.unactivatedUnits));
    let j = (0, i.bG)([d.A], () => d.A.getForApplication(h.tv)),
        E = (0, m.$g)(y.total, y.currency),
        [P, M] = (0, n.useState)(!1),
        [R, U] = (0, n.useState)(!1),
        k = w.toLocaleDateString(F, {
            month: "long",
            day: "numeric",
            year: "numeric"
        }),
        O = n.useMemo(() => (0, l.A)(), []);
    n.useEffect(() => {
        p.default.track(x.HAw.PREMIUM_RESUBSCRIBE_FLOW_STARTED, {
            location_stack: t,
            load_id: O,
            ...(0, b.j)(I)
        })
    }, [t, I, O]);
    let B = async () => {
        M(!0), U(!1);
        try {
            await s.Ir(I, t), A(C.g.SUCCESS)
        } catch (e) {
            U(!0), M(!1)
        }
    }, L = [{
        text: g.intl.string(g.t["cY+Oob"]),
        onClick: () => B(),
        variant: "primary",
        loading: P,
        disabled: P
    }], D = g.intl.format(g.t.dbGGui, {
        price: E,
        date: k
    }), G = I.premiumPlanIdFromItems;
    if (u.Ay.hasUnconsumedGiftForSubscriptionPlan(j, G)) {
        let e = (0, m.$g)(v.total, v.currency),
            t = u.Ay.getIntervalForInvoice(v),
            r = {
                discountedPrice: e,
                regularPrice: E,
                date: k,
                billingPeriod: u.Ay.getIntervalStringAsNoun(t.intervalType)
            };
        D = v.taxInclusive ? g.intl.format(g.t.G8IxyE, r) : g.intl.format(g.t.kXtIIn, r)
    }
    return (0, o.jsxs)(a.ExpressiveModal, {
        graphic: {
            type: "image",
            src: S.A
        },
        gradientColor: "nitro-pink",
        transitionState: f,
        title: g.intl.string(g.t.fYEWlq),
        actions: L,
        onClose: async () => r(),
        children: [(0, o.jsxs)(_.Text, {
            variant: "text-md/normal",
            style: {
                textAlign: "center"
            },
            children: [(0, o.jsx)("p", {
                children: D
            }), (0, o.jsx)("p", {
                children: g.intl.string(g.t.UQolSy)
            })]
        }), R ? (0, o.jsx)(a.wx6, {
            type: "critical",
            children: g.intl.string(g.t["5mlOCW"])
        }) : null]
    })
}