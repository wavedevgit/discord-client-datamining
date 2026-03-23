/** chunk id: 159906 params = (module,exports,require) **/
n.d(t, {
    A: () => h
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
    m = n(543767),
    _ = n(788868),
    g = n(652215),
    A = n(985018),
    x = n(700896);

function p(e) {
    let t, {
            subscription: n,
            withOverheadSeparator: s
        } = e,
        {
            analyticsLocations: p
        } = (0, o.Ay)(),
        [h] = (0, m.Kq)({
            subscriptionId: n.id,
            renewal: !0,
            analyticsLocations: p,
            analyticsLocation: r.A.PREMIUM_SUBSCRIPTION_FINE_PRINT_CONTENT
        });
    if (null == h) return null;
    let f = s ? x.r : x.a,
        T = h.invoiceItems.find(e => {
            let {
                subscriptionPlanId: t
            } = e;
            return (0, c.xq)(t)
        });
    if (null == T) return null;
    let E = T.subscriptionPlanId,
        S = d.A.get(E);
    l()(null != S, "Missing plan");
    let b = (0, u.$g)(h.total, h.currency);
    return S.interval === _.WT.YEAR ? t = A.intl.format(A.t["jPz/39"], {
        price: b,
        termsUrl: g.X7G.TERMS,
        paidURL: g.X7G.PAID_TERMS,
        privacyUrl: g.X7G.PRIVACY
    }) : S.interval === _.WT.MONTH && (t = 1 === S.intervalCount ? A.intl.format(A.t.m27GpI, {
        price: b,
        termsUrl: g.X7G.TERMS,
        paidURL: g.X7G.PAID_TERMS,
        privacyUrl: g.X7G.PRIVACY
    }) : A.intl.format(A.t["9xf5Vx"], {
        price: b,
        termsUrl: g.X7G.TERMS,
        paidURL: g.X7G.PAID_TERMS,
        privacyUrl: g.X7G.PRIVACY,
        intervalCount: S.intervalCount
    })), (0, i.jsx)(a.Text, {
        color: "text-muted",
        className: f,
        variant: "text-xs/normal",
        children: t
    })
}

function h(e) {
    let {
        subscription: t,
        withOverheadSeparator: n
    } = e;
    return t.status === g.Dmq.CANCELED || t.isPurchasedExternally ? null : (0, i.jsx)(p, {
        subscription: t,
        withOverheadSeparator: n
    })
}