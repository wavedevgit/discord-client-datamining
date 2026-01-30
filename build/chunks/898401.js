/** Chunk was on 64935 **/
/** chunk id: 898401, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => p
});
var r = n(627968);
n(64700);
var i = n(421380),
    l = n(397927),
    a = n(465794),
    s = n(888675),
    o = n(652215),
    c = n(788868),
    u = n(985018),
    d = n(801741);

function p(e) {
    let {
        message: t,
        channel: n
    } = e, p = null != n.guild_id ? o.JJy.TEXT_IN_VOICE : o.JJy.CHANNEL_TEXT_AREA;
    return (0, r.jsx)(s.A, {
        contentClassName: d.o9,
        iconContainerClassName: d.zc,
        iconNode: (0, r.jsx)(l.XFE, {
            colorClass: d.Kk
        }),
        children: (0, r.jsxs)("div", {
            className: d.kL,
            children: [(0, r.jsxs)("div", {
                children: [(0, r.jsx)(l.Text, {
                    variant: "text-sm/medium",
                    children: t.content
                }), (0, r.jsxs)("div", {
                    className: d.C5,
                    children: [(0, r.jsx)(l.tvc, {
                        size: "xs",
                        colorClass: d.bu
                    }), (0, r.jsx)(l.Text, {
                        variant: "text-xs/medium",
                        className: d.vp,
                        children: u.intl.string(u.t["BMw+7I"])
                    })]
                })]
            }), (0, r.jsx)("div", {
                className: d.UD,
                children: (0, r.jsx)(a.A, {
                    showGradient: !0,
                    iconClassName: d.PC,
                    subscriptionTier: c.pe.TIER_2,
                    textOptions: {
                        textOverride: u.intl.string(u.t.Y2WKTl)
                    },
                    size: i.$n.Sizes.SMALL,
                    premiumModalAnalyticsLocation: {
                        section: p,
                        object: o.ZSU.MESSAGE
                    }
                })
            })]
        })
    })
}