/** chunk id: 364558, original params: e,t,n (module,exports,require) **/
n.d(t, {
    u: () => g
});
var i = n(627968),
    s = n(397927),
    a = n(975807),
    l = n(95035),
    r = n(975571),
    o = n(975662),
    c = n(88001),
    d = n(652215),
    u = n(518582),
    _ = n(985018),
    m = n(817577);
let A = () => {
        (0, a.A)(r.A.getArticleURL(d.MVz.PREMIUM_GROUP_ABOUT))
    },
    g = () => ({
        name: o.U.PREMIUM_GROUP,
        title: _.intl.string(u.default.YkvksF),
        subtitle: _.intl.formatToPlainString(u.default.JlyGQj, {
            totalSeats: c.aw,
            premiumGroupProductName: (0, c.DP)()
        }),
        description: (0, i.jsx)(l.A, {
            onClick: A,
            children: _.intl.string(u.default.yYyGJH)
        }),
        descriptionCta: _.intl.string(_.t.jVcuVY),
        pillText: _.intl.string(_.t.oW0eUd).toLocaleUpperCase(),
        perkImage: m,
        onCtaClick: () => {
            (0, s.mMO)(async () => {
                let {
                    default: e
                } = await n.e("69595").then(n.bind(n, 526710));
                return t => (0, i.jsx)(e, {
                    ...t
                })
            })
        }
    })