/** chunk id: 898401 params = (module,exports,require) **/
n.d(t, {
    A: () => _
});
var i = n(627968);
n(64700);
var l = n(421380),
    a = n(397927),
    r = n(725807),
    s = n(888675),
    o = n(652215),
    c = n(788868),
    u = n(985018),
    d = n(988020);

function _(e) {
    let {
        message: t,
        channel: n
    } = e, _ = null != n.guild_id ? o.JJy.TEXT_IN_VOICE : o.JJy.CHANNEL_TEXT_AREA;
    return (0, i.jsx)(s.A, {
        contentClassName: d.o9,
        iconContainerClassName: d.zc,
        iconNode: (0, i.jsx)(a.XFE, {
            colorClass: d.Kk
        }),
        children: (0, i.jsxs)("div", {
            className: d.kL,
            children: [(0, i.jsxs)("div", {
                children: [(0, i.jsx)(a.Text, {
                    variant: "text-sm/medium",
                    children: t.content
                }), (0, i.jsxs)("div", {
                    className: d.C5,
                    children: [(0, i.jsx)(a.tvc, {
                        size: "xs",
                        colorClass: d.bu
                    }), (0, i.jsx)(a.Text, {
                        variant: "text-xs/medium",
                        className: d.vp,
                        children: u.intl.string(u.t["BMw+7I"])
                    })]
                })]
            }), (0, i.jsx)("div", {
                className: d.UD,
                children: (0, i.jsx)(r.A, {
                    showGradient: !0,
                    iconClassName: d.PC,
                    subscriptionTier: c.pe.TIER_2,
                    textOptions: {
                        textOverride: u.intl.string(u.t.Y2WKTl)
                    },
                    size: l.$n.Sizes.SMALL,
                    premiumModalAnalyticsLocation: {
                        section: _,
                        object: o.ZSU.MESSAGE
                    }
                })
            })]
        })
    })
}