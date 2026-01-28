/** Chunk was on 5606 **/
/** chunk id: 159906, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => h
}), n(896048);
var r = n(627968);
n(64700);
var i = n(284009),
    l = n.n(i),
    s = n(397927),
    a = n(793574),
    o = n(688810),
    c = n(97352),
    d = n(927578),
    u = n(580630),
    p = n(543767),
    _ = n(788868),
    m = n(652215),
    g = n(985018),
    f = n(700896);

function b(e) {
    let t, {
            subscription: n,
            withOverheadSeparator: i
        } = e,
        {
            analyticsLocations: b
        } = (0, o.Ay)(),
        [h] = (0, p.Kq)({
            subscriptionId: n.id,
            renewal: !0,
            analyticsLocations: b,
            analyticsLocation: a.A.PREMIUM_SUBSCRIPTION_FINE_PRINT_CONTENT
        });
    if (null == h) return null;
    let A = i ? f.r : f.a,
        E = h.invoiceItems.find(e => {
            let {
                subscriptionPlanId: t
            } = e;
            return (0, d.xq)(t)
        });
    if (null == E) return null;
    let x = E.subscriptionPlanId,
        O = c.A.get(x);
    l()(null != O, "Missing plan");
    let C = (0, u.$g)(h.total, h.currency);
    return O.interval === _.WT.YEAR ? t = g.intl.format(g.t["jPz/39"], {
        price: C,
        termsUrl: m.X7G.TERMS,
        paidURL: m.X7G.PAID_TERMS,
        privacyUrl: m.X7G.PRIVACY
    }) : O.interval === _.WT.MONTH && (t = 1 === O.intervalCount ? g.intl.format(g.t.m27GpI, {
        price: C,
        termsUrl: m.X7G.TERMS,
        paidURL: m.X7G.PAID_TERMS,
        privacyUrl: m.X7G.PRIVACY
    }) : g.intl.format(g.t["9xf5Vx"], {
        price: C,
        termsUrl: m.X7G.TERMS,
        paidURL: m.X7G.PAID_TERMS,
        privacyUrl: m.X7G.PRIVACY,
        intervalCount: O.intervalCount
    })), (0, r.jsx)(s.Text, {
        color: "text-muted",
        className: A,
        variant: "text-xs/normal",
        children: t
    })
}

function h(e) {
    let {
        subscription: t,
        withOverheadSeparator: n
    } = e;
    return t.status === m.Dmq.CANCELED || t.isPurchasedExternally ? null : (0, r.jsx)(b, {
        subscription: t,
        withOverheadSeparator: n
    })
}