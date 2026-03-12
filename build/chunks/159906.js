/** chunk id: 159906 params = (module,exports,require) **/
n.d(t, {
    A: () => p
});
var i = n(627968);
n(64700);
var s = n(284009),
    l = n.n(s),
    r = n(397927),
    a = n(793574),
    o = n(688810),
    d = n(97352),
    c = n(927578),
    u = n(580630),
    _ = n(543767),
    m = n(788868),
    g = n(652215),
    A = n(985018),
    h = n(191322);

function x(e) {
    let t, {
            subscription: n,
            withOverheadSeparator: s
        } = e,
        {
            analyticsLocations: x
        } = (0, o.Ay)(),
        [p] = (0, _.Kq)({
            subscriptionId: n.id,
            renewal: !0,
            analyticsLocations: x,
            analyticsLocation: a.A.PREMIUM_SUBSCRIPTION_FINE_PRINT_CONTENT
        });
    if (null == p) return null;
    let T = s ? h.r : h.a,
        E = p.invoiceItems.find(e => {
            let {
                subscriptionPlanId: t
            } = e;
            return (0, c.xq)(t)
        });
    if (null == E) return null;
    let C = E.subscriptionPlanId,
        S = d.A.get(C);
    l()(null != S, "Missing plan");
    let f = (0, u.$g)(p.total, p.currency);
    return S.interval === m.WT.YEAR ? t = A.intl.format(A.t["jPz/39"], {
        price: f,
        termsUrl: g.X7G.TERMS,
        paidURL: g.X7G.PAID_TERMS,
        privacyUrl: g.X7G.PRIVACY
    }) : S.interval === m.WT.MONTH && (t = 1 === S.intervalCount ? A.intl.format(A.t.m27GpI, {
        price: f,
        termsUrl: g.X7G.TERMS,
        paidURL: g.X7G.PAID_TERMS,
        privacyUrl: g.X7G.PRIVACY
    }) : A.intl.format(A.t["9xf5Vx"], {
        price: f,
        termsUrl: g.X7G.TERMS,
        paidURL: g.X7G.PAID_TERMS,
        privacyUrl: g.X7G.PRIVACY,
        intervalCount: S.intervalCount
    })), (0, i.jsx)(r.Text, {
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
    return t.status === g.Dmq.CANCELED || t.isPurchasedExternally ? null : (0, i.jsx)(x, {
        subscription: t,
        withOverheadSeparator: n
    })
}