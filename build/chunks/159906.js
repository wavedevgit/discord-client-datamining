/** chunk id: 159906, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => x
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
    g = n(788868),
    m = n(652215),
    A = n(985018),
    h = n(191322);

function p(e) {
    let t, {
            subscription: n,
            withOverheadSeparator: s
        } = e,
        {
            analyticsLocations: p
        } = (0, o.Ay)(),
        [x] = (0, _.Kq)({
            subscriptionId: n.id,
            renewal: !0,
            analyticsLocations: p,
            analyticsLocation: r.A.PREMIUM_SUBSCRIPTION_FINE_PRINT_CONTENT
        });
    if (null == x) return null;
    let E = s ? h.r : h.a,
        T = x.invoiceItems.find(e => {
            let {
                subscriptionPlanId: t
            } = e;
            return (0, c.xq)(t)
        });
    if (null == T) return null;
    let S = T.subscriptionPlanId,
        C = d.A.get(S);
    l()(null != C, "Missing plan");
    let f = (0, u.$g)(x.total, x.currency);
    return C.interval === g.WT.YEAR ? t = A.intl.format(A.t["jPz/39"], {
        price: f,
        termsUrl: m.X7G.TERMS,
        paidURL: m.X7G.PAID_TERMS,
        privacyUrl: m.X7G.PRIVACY
    }) : C.interval === g.WT.MONTH && (t = 1 === C.intervalCount ? A.intl.format(A.t.m27GpI, {
        price: f,
        termsUrl: m.X7G.TERMS,
        paidURL: m.X7G.PAID_TERMS,
        privacyUrl: m.X7G.PRIVACY
    }) : A.intl.format(A.t["9xf5Vx"], {
        price: f,
        termsUrl: m.X7G.TERMS,
        paidURL: m.X7G.PAID_TERMS,
        privacyUrl: m.X7G.PRIVACY,
        intervalCount: C.intervalCount
    })), (0, i.jsx)(a.Text, {
        color: "text-muted",
        className: E,
        variant: "text-xs/normal",
        children: t
    })
}

function x(e) {
    let {
        subscription: t,
        withOverheadSeparator: n
    } = e;
    return t.status === m.Dmq.CANCELED || t.isPurchasedExternally ? null : (0, i.jsx)(p, {
        subscription: t,
        withOverheadSeparator: n
    })
}