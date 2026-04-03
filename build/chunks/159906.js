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
    m = n(543767),
    g = n(788868),
    _ = n(652215),
    x = n(985018),
    A = n(816375);

function h(e) {
    let t, {
            subscription: n,
            withOverheadSeparator: s
        } = e,
        {
            analyticsLocations: h
        } = (0, o.Ay)(),
        [p] = (0, m.Kq)({
            subscriptionId: n.id,
            renewal: !0,
            analyticsLocations: h,
            analyticsLocation: r.A.PREMIUM_SUBSCRIPTION_FINE_PRINT_CONTENT
        });
    if (null == p) return null;
    let T = s ? A.r : A.a,
        f = p.invoiceItems.find(e => {
            let {
                subscriptionPlanId: t
            } = e;
            return (0, c.xq)(t)
        });
    if (null == f) return null;
    let S = f.subscriptionPlanId,
        b = d.A.get(S);
    l()(null != b, "Missing plan");
    let E = (0, u.$g)(p.total, p.currency);
    return b.interval === g.WT.YEAR ? t = x.intl.format(x.t["jPz/39"], {
        price: E,
        termsUrl: _.X7G.TERMS,
        paidURL: _.X7G.PAID_TERMS,
        privacyUrl: _.X7G.PRIVACY
    }) : b.interval === g.WT.MONTH && (t = 1 === b.intervalCount ? x.intl.format(x.t.m27GpI, {
        price: E,
        termsUrl: _.X7G.TERMS,
        paidURL: _.X7G.PAID_TERMS,
        privacyUrl: _.X7G.PRIVACY
    }) : x.intl.format(x.t["9xf5Vx"], {
        price: E,
        termsUrl: _.X7G.TERMS,
        paidURL: _.X7G.PAID_TERMS,
        privacyUrl: _.X7G.PRIVACY,
        intervalCount: b.intervalCount
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
    return t.status === _.Dmq.CANCELED || t.isPurchasedExternally ? null : (0, i.jsx)(h, {
        subscription: t,
        withOverheadSeparator: n
    })
}