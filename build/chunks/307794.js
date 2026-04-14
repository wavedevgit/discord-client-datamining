/** chunk id: 307794 params = (module,exports,require) **/
t.d(n, {
    default: () => h
});
var a = t(627968);
t(64700);
var i = t(827734),
    s = t(397927),
    r = t(688810),
    l = t(87719),
    c = t(244975),
    o = t(788868),
    d = t(652215),
    _ = t(985018),
    u = t(167520),
    m = t(790344),
    f = t(929103);

function x(e, n) {
    return (0, a.jsx)(s.LpS, {
        text: e,
        className: m.Ad,
        color: i.A.unsafe_rawColors.BRAND_500.css
    }, n)
}

function h(e) {
    let {
        guildCount: n,
        onClose: t,
        analyticsLocations: i,
        ...m
    } = e, h = function(e, n) {
        return (0, a.jsx)(s.DUT, {
            className: u.C,
            tag: "span",
            onClick: () => {
                t(), (0, l.e)()
            },
            children: e
        }, n)
    }, {
        analyticsLocations: A
    } = (0, r.Ay)(i);
    return (0, a.jsx)(r.f5, {
        value: A,
        children: (0, a.jsx)(c.A, {
            artURL: f.A,
            onClose: t,
            type: o.e.GUILD_CAP_MODAL_UPSELL,
            title: _.intl.string(_.t["CoNXB+"]),
            body: n < d.qlD ? _.intl.format(_.t["5qLH7B"], {
                guildCount: n,
                onAndMore: h,
                newBadgeHook: x
            }) : _.intl.format(_.t.mk9CS6, {
                onAndMore: h,
                newBadgeHook: x
            }),
            context: n < d.qlD ? _.intl.formatToPlainString(_.t["C+Hqzs"], {
                guildCount: n
            }) : _.intl.string(_.t.m0xavd),
            glowUp: _.intl.format(_.t["6Dl5X1"], {
                onAndMore: h
            }),
            ...m
        })
    })
}