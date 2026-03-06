/** chunk id: 480254 params = (module,exports,require) **/
r.d(t, {
    m: () => I
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
    S = r(938822);
let I = e => {
    let {
        analyticsLocations: t,
        onClose: r,
        transitionState: I,
        premiumSubscription: f,
        currentInvoicePreview: y,
        renewalInvoicePreview: T,
        fractionalPremiumInfo: v,
        setStep: w
    } = e, F = (0, i.bG)([c.default], () => c.default.locale), E = new Date(T.subscriptionPeriodStart);
    f.isBoostOnly || (E = u.Ay.extendDateWithUnconsumedFractionalPremium(E, v.unactivatedUnits));
    let P = (0, i.bG)([d.A], () => d.A.getForApplication(h.tv)),
        A = (0, m.$g)(y.total, y.currency),
        [j, M] = (0, n.useState)(!1),
        [R, U] = (0, n.useState)(!1),
        k = E.toLocaleDateString(F, {
            month: "long",
            day: "numeric",
            year: "numeric"
        }),
        B = n.useMemo(() => (0, l.A)(), []);
    n.useEffect(() => {
        p.default.track(x.HAw.PREMIUM_RESUBSCRIBE_FLOW_STARTED, {
            location_stack: t,
            load_id: B,
            ...(0, b.j)(f)
        })
    }, [t, f, B]);
    let L = async () => {
        M(!0), U(!1);
        try {
            await s.Ir(f, t), w(C.g.SUCCESS)
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
        price: A,
        date: k
    }), G = f.premiumPlanIdFromItems;
    if (u.Ay.hasUnconsumedGiftForSubscriptionPlan(P, G)) {
        let e = (0, m.$g)(T.total, T.currency),
            t = u.Ay.getIntervalForInvoice(T),
            r = {
                discountedPrice: e,
                regularPrice: A,
                date: k,
                billingPeriod: u.Ay.getIntervalStringAsNoun(t.intervalType)
            };
        D = T.taxInclusive ? g.intl.format(g.t.G8IxyE, r) : g.intl.format(g.t.kXtIIn, r)
    }
    return (0, o.jsxs)(a.ExpressiveModal, {
        graphic: {
            type: "image",
            src: S.A
        },
        gradientColor: "nitro-pink",
        transitionState: I,
        title: g.intl.string(g.t.fYEWlq),
        actions: O,
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