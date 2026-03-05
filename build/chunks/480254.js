/** chunk id: 480254 params = (module,exports,require) **/
r.d(t, {
    m: () => f
});
var a = r(627968),
    o = r(64700),
    n = r(158954),
    i = r(311907),
    _ = r(397927),
    l = r(158032),
    s = r(925847),
    c = r(773669),
    d = r(469778),
    p = r(954571),
    m = r(927578),
    u = r(580630),
    b = r(501957),
    C = r(232392),
    h = r(788868),
    x = r(652215),
    g = r(985018),
    S = r(938822);
let f = e => {
    let {
        analyticsLocations: t,
        onClose: r,
        transitionState: f,
        premiumSubscription: I,
        currentInvoicePreview: y,
        renewalInvoicePreview: v,
        fractionalPremiumInfo: T,
        setStep: w
    } = e, P = (0, i.bG)([c.default], () => c.default.locale), F = new Date(v.subscriptionPeriodStart);
    I.isBoostOnly || (F = m.Ay.extendDateWithUnconsumedFractionalPremium(F, T.unactivatedUnits));
    let A = (0, i.bG)([d.A], () => d.A.getForApplication(h.tv)),
        E = (0, u.$g)(y.total, y.currency),
        [j, M] = (0, o.useState)(!1),
        [R, U] = (0, o.useState)(!1),
        k = F.toLocaleDateString(P, {
            month: "long",
            day: "numeric",
            year: "numeric"
        }),
        B = o.useMemo(() => (0, s.A)(), []);
    o.useEffect(() => {
        p.default.track(x.HAw.PREMIUM_RESUBSCRIBE_FLOW_STARTED, {
            location_stack: t,
            load_id: B,
            ...(0, b.j)(I)
        })
    }, [t, I, B]);
    let L = async () => {
        M(!0), U(!1);
        try {
            await l.Ir(I, t), w(C.g.SUCCESS)
        } catch (e) {
            U(!0), M(!1)
        }
    }, O = [{
        text: g.intl.string(g.t["cY+Oob"]),
        onClick: () => L(),
        variant: "primary",
        loading: j,
        disabled: j
    }], D = g.intl.format(g.t.dbGGui, {
        price: E,
        date: k
    }), G = I.premiumPlanIdFromItems;
    if (m.Ay.hasUnconsumedGiftForSubscriptionPlan(A, G)) {
        let e = (0, u.$g)(v.total, v.currency),
            t = m.Ay.getIntervalForInvoice(v),
            r = {
                discountedPrice: e,
                regularPrice: E,
                date: k,
                billingPeriod: m.Ay.getIntervalStringAsNoun(t.intervalType)
            };
        D = v.taxInclusive ? g.intl.format(g.t.G8IxyE, r) : g.intl.format(g.t.kXtIIn, r)
    }
    return (0, a.jsxs)(n.ExpressiveModal, {
        graphic: {
            type: "image",
            src: S.A
        },
        gradientColor: "nitro-pink",
        transitionState: f,
        title: g.intl.string(g.t.fYEWlq),
        actions: O,
        onClose: async () => r(),
        children: [(0, a.jsxs)(_.Text, {
            variant: "text-md/normal",
            style: {
                textAlign: "center"
            },
            children: [(0, a.jsx)("p", {
                children: D
            }), (0, a.jsx)("p", {
                children: g.intl.string(g.t.UQolSy)
            })]
        }), R ? (0, a.jsx)(n.wx6, {
            type: "critical",
            children: g.intl.string(g.t["5mlOCW"])
        }) : null]
    })
}