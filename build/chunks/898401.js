/** chunk id: 898401 params = (module,exports,require) **/
n.d(t, {
    A: () => _
});
var i = n(627968);
n(64700);
var a = n(421380),
    l = n(397927),
    r = n(465794),
    s = n(888675),
    o = n(652215),
    c = n(788868),
    d = n(985018),
    u = n(145151);

function _(e) {
    let {
        message: t,
        channel: n
    } = e, _ = null != n.guild_id ? o.JJy.TEXT_IN_VOICE : o.JJy.CHANNEL_TEXT_AREA;
    return (0, i.jsx)(s.A, {
        contentClassName: u.o9,
        iconContainerClassName: u.zc,
        iconNode: (0, i.jsx)(l.XFE, {
            colorClass: u.Kk
        }),
        children: (0, i.jsxs)("div", {
            className: u.kL,
            children: [(0, i.jsxs)("div", {
                children: [(0, i.jsx)(l.Text, {
                    variant: "text-sm/medium",
                    children: t.content
                }), (0, i.jsxs)("div", {
                    className: u.C5,
                    children: [(0, i.jsx)(l.tvc, {
                        size: "xs",
                        colorClass: u.bu
                    }), (0, i.jsx)(l.Text, {
                        variant: "text-xs/medium",
                        className: u.vp,
                        children: d.intl.string(d.t["BMw+7I"])
                    })]
                })]
            }), (0, i.jsx)("div", {
                className: u.UD,
                children: (0, i.jsx)(r.A, {
                    showGradient: !0,
                    iconClassName: u.PC,
                    subscriptionTier: c.pe.TIER_2,
                    textOptions: {
                        textOverride: d.intl.string(d.t.Y2WKTl)
                    },
                    size: a.$n.Sizes.SMALL,
                    premiumModalAnalyticsLocation: {
                        section: _,
                        object: o.ZSU.MESSAGE
                    }
                })
            })]
        })
    })
}