/** chunk id: 159906, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => b
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
    _ = n(543767),
    p = n(788868),
    m = n(652215),
    g = n(985018),
    A = n(700896);

function f(e) {
    let t, {
            subscription: n,
            withOverheadSeparator: i
        } = e,
        {
            analyticsLocations: f
        } = (0, o.Ay)(),
        [b] = (0, _.Kq)({
            subscriptionId: n.id,
            renewal: !0,
            analyticsLocations: f,
            analyticsLocation: a.A.PREMIUM_SUBSCRIPTION_FINE_PRINT_CONTENT
        });
    if (null == b) return null;
    let h = i ? A.r : A.a,
        E = b.invoiceItems.find(e => {
            let {
                subscriptionPlanId: t
            } = e;
            return (0, d.xq)(t)
        });
    if (null == E) return null;
    let O = E.subscriptionPlanId,
        x = c.A.get(O);
    l()(null != x, "Missing plan");
    let C = (0, u.$g)(b.total, b.currency);
    return x.interval === p.WT.YEAR ? t = g.intl.format(g.t["jPz/39"], {
        price: C,
        termsUrl: m.X7G.TERMS,
        paidURL: m.X7G.PAID_TERMS,
        privacyUrl: m.X7G.PRIVACY
    }) : x.interval === p.WT.MONTH && (t = 1 === x.intervalCount ? g.intl.format(g.t.m27GpI, {
        price: C,
        termsUrl: m.X7G.TERMS,
        paidURL: m.X7G.PAID_TERMS,
        privacyUrl: m.X7G.PRIVACY
    }) : g.intl.format(g.t["9xf5Vx"], {
        price: C,
        termsUrl: m.X7G.TERMS,
        paidURL: m.X7G.PAID_TERMS,
        privacyUrl: m.X7G.PRIVACY,
        intervalCount: x.intervalCount
    })), (0, r.jsx)(s.Text, {
        color: "text-muted",
        className: h,
        variant: "text-xs/normal",
        children: t
    })
}

function b(e) {
    let {
        subscription: t,
        withOverheadSeparator: n
    } = e;
    return t.status === m.Dmq.CANCELED || t.isPurchasedExternally ? null : (0, r.jsx)(f, {
        subscription: t,
        withOverheadSeparator: n
    })
}