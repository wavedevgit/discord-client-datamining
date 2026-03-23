/** chunk id: 358172 params = (module,exports,require) **/
n.d(t, {
    A: () => h
});
var i = n(627968);
n(64700);
var s = n(503698),
    l = n.n(s),
    a = n(417597),
    r = n(421380),
    o = n(397927),
    d = n(263063),
    c = n(509536),
    u = n(721923),
    m = n(864310),
    _ = n(71393),
    g = n(473145),
    A = n(652215),
    x = n(985018),
    p = n(246930);
let h = function(e) {
    let {
        className: t,
        guildId: n,
        boostingVariant: s
    } = e, h = (0, a.bG)([_.A], () => _.A.getGuild(n), [n]), f = (0, m.A)(h?.id).total;
    return null == h ? (0, i.jsx)("div", {
        className: l()(t, p.bo),
        children: (0, i.jsx)("div", {
            className: p.$g,
            children: (0, i.jsx)(o.Text, {
                variant: "text-lg/bold",
                children: x.intl.string(x.t["6Kwwuo"])
            })
        })
    }) : (0, i.jsxs)("div", {
        className: l()(t, p.bo),
        children: [(0, i.jsx)(d.Ay, {
            className: p.__invalid_guildIcon,
            guild: h,
            size: d.Ay.Sizes.LARGER
        }), (0, i.jsxs)("div", {
            className: p.$g,
            children: [(0, i.jsx)(o.Text, {
                variant: "text-lg/bold",
                children: h.name
            }), (0, i.jsxs)("div", {
                className: p.TZ,
                children: [(0, i.jsx)(o._Jp, {
                    color: o.LU0.unsafe_rawColors.GUILD_BOOSTING_PINK,
                    className: p.Me
                }), (0, i.jsx)(o.Text, {
                    variant: "text-sm/bold",
                    color: "text-muted",
                    children: x.intl.format(x.t["pob/cL"], {
                        subscriptions: f
                    })
                }), (0, i.jsx)("div", {
                    className: p.me
                }), (0, i.jsx)(o.Text, {
                    variant: "text-sm/bold",
                    color: "text-muted",
                    children: (0, g.gb)(h.premiumTier, {
                        useLevels: !1
                    })
                })]
            })]
        }), s ? (0, i.jsx)(u.A, {
            guild: h,
            analyticsLocation: {
                page: A.liQ.GUILD_BOOSTING_USER_SETTINGS,
                section: A.JJy.GUILD_BOOSTING_RECOMMENDED_SERVER_BOOST_THIS_SERVER_CTA,
                object: A.ZSU.BUTTON_CTA,
                objectType: A.AnalyticsObjectTypes.BUY
            },
            pauseAnimation: !0,
            size: r.$n.Sizes.MEDIUM,
            color: r.$n.Colors.PRIMARY,
            buttonText: x.intl.string(x.t.aBHecF)
        }) : (0, i.jsx)(o.Button, {
            variant: "secondary",
            text: x.intl.string(x.t.KLOhbO),
            onClick: () => {
                (0, c.K)({
                    guildId: h.id,
                    location: {
                        section: A.JJy.GUILD_BOOSTING_RECOMMENDED_SERVER_GO_TO_SERVER_CTA
                    }
                })
            }
        })]
    })
}