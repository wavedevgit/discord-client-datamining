/** chunk id: 159906 params = (module,exports,require) **/
n.d(t, {
    A: () => p
});
var i = n(627968);
n(64700);
var s = n(284009),
    l = n.n(s),
    a = n(397927),
    r = n(793574),
    o = n(688810),
    d = n(97352),
    c = n(927578),
    u = n(580630),
    _ = n(543767),
    m = n(788868),
    g = n(652215),
    A = n(985018),
    x = n(700896);

function h(e) {
    let t, {
            subscription: n,
            withOverheadSeparator: s
        } = e,
        {
            analyticsLocations: h
        } = (0, o.Ay)(),
        [p] = (0, _.Kq)({
            subscriptionId: n.id,
            renewal: !0,
            analyticsLocations: h,
            analyticsLocation: r.A.PREMIUM_SUBSCRIPTION_FINE_PRINT_CONTENT
        });
    if (null == p) return null;
    let T = s ? x.r : x.a,
        E = p.invoiceItems.find(e => {
            let {
                subscriptionPlanId: t
            } = e;
            return (0, c.xq)(t)
        });
    if (null == E) return null;
    let S = E.subscriptionPlanId,
        f = d.A.get(S);
    l()(null != f, "Missing plan");
    let C = (0, u.$g)(p.total, p.currency);
    return f.interval === m.WT.YEAR ? t = A.intl.format(A.t["jPz/39"], {
        price: C,
        termsUrl: g.X7G.TERMS,
        paidURL: g.X7G.PAID_TERMS,
        privacyUrl: g.X7G.PRIVACY
    }) : f.interval === m.WT.MONTH && (t = 1 === f.intervalCount ? A.intl.format(A.t.m27GpI, {
        price: C,
        termsUrl: g.X7G.TERMS,
        paidURL: g.X7G.PAID_TERMS,
        privacyUrl: g.X7G.PRIVACY
    }) : A.intl.format(A.t["9xf5Vx"], {
        price: C,
        termsUrl: g.X7G.TERMS,
        paidURL: g.X7G.PAID_TERMS,
        privacyUrl: g.X7G.PRIVACY,
        intervalCount: f.intervalCount
    })), (0, i.jsx)(a.Text, {
        color: "text-muted",
        className: T,
        variant: "text-xs/normal",
        children: t
    })
}

function p(e) {
    let {
        subscription: t,
        withOverheadSeparator: n
    } = e;
    return t.status === g.Dmq.CANCELED || t.isPurchasedExternally ? null : (0, i.jsx)(h, {
        subscription: t,
        withOverheadSeparator: n
    })
}