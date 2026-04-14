/** chunk id: 307794 params = (module,exports,require) **/
t.d(n, {
    default: () => p
});
var a = t(627968);
t(64700);
var s = t(827734),
    i = t(397927),
    l = t(688810),
    r = t(87719),
    c = t(244975),
    o = t(788868),
    d = t(652215),
    _ = t(985018),
    u = t(167520),
    m = t(790344),
    A = t(929103);

function x(e, n) {
    return (0, a.jsx)(i.LpS, {
        text: e,
        className: m.Ad,
        color: s.A.unsafe_rawColors.BRAND_500.css
    }, n)
}

function p(e) {
    let {
        guildCount: n,
        onClose: t,
        analyticsLocations: s,
        ...m
    } = e, p = function(e, n) {
        return (0, a.jsx)(i.DUT, {
            className: u.C,
            tag: "span",
            onClick: () => {
                t(), (0, r.e)()
            },
            children: e
        }, n)
    }, {
        analyticsLocations: L
    } = (0, l.Ay)(s);
    return (0, a.jsx)(l.f5, {
        value: L,
        children: (0, a.jsx)(c.A, {
            artURL: A.A,
            onClose: t,
            type: o.e.GUILD_CAP_MODAL_UPSELL,
            title: _.intl.string(_.t["CoNXB+"]),
            body: n < d.qlD ? _.intl.format(_.t["5qLH7B"], {
                guildCount: n,
                onAndMore: p,
                newBadgeHook: x
            }) : _.intl.format(_.t.mk9CS6, {
                onAndMore: p,
                newBadgeHook: x
            }),
            context: n < d.qlD ? _.intl.formatToPlainString(_.t["C+Hqzs"], {
                guildCount: n
            }) : _.intl.string(_.t.m0xavd),
            glowUp: _.intl.format(_.t["6Dl5X1"], {
                onAndMore: p
            }),
            ...m
        })
    })
}