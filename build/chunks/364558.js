/** chunk id: 364558 params = (module,exports,require) **/
n.d(t, {
    u: () => m
});
var i = n(627968),
    s = n(397927),
    l = n(975807),
    a = n(95035),
    r = n(975571),
    o = n(975662),
    d = n(88001),
    c = n(652215),
    u = n(519412),
    _ = n(985018),
    g = n(817577);
let A = () => {
        (0, l.A)(r.A.getArticleURL(c.MVz.PREMIUM_GROUP_ABOUT))
    },
    m = () => ({
        name: o.U.PREMIUM_GROUP,
        title: _.intl.string(u.default.YkvksF),
        subtitle: _.intl.formatToPlainString(u.default.JlyGQj, {
            totalSeats: d.aw,
            premiumGroupProductName: (0, d.DP)()
        }),
        description: (0, i.jsx)(a.A, {
            onClick: A,
            children: _.intl.string(u.default.yYyGJH)
        }),
        descriptionCta: _.intl.string(_.t.jVcuVY),
        pillText: _.intl.string(_.t.oW0eUd).toLocaleUpperCase(),
        perkImage: g,
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