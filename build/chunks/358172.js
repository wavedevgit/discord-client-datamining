/** chunk id: 358172 params = (module,exports,require) **/
n.d(t, {
    A: () => p
});
var i = n(627968);
n(64700);
var s = n(503698),
    l = n.n(s),
    r = n(417597),
    a = n(421380),
    o = n(397927),
    d = n(263063),
    c = n(509536),
    u = n(721923),
    _ = n(864310),
    m = n(71393),
    g = n(473145),
    A = n(652215),
    h = n(985018),
    x = n(725048);
let p = function(e) {
    let {
        className: t,
        guildId: n,
        boostingVariant: s
    } = e, p = (0, r.bG)([m.A], () => m.A.getGuild(n), [n]), T = (0, _.A)(p?.id).total;
    return null == p ? (0, i.jsx)("div", {
        className: l()(t, x.bo),
        children: (0, i.jsx)("div", {
            className: x.$g,
            children: (0, i.jsx)(o.Text, {
                variant: "text-lg/bold",
                children: h.intl.string(h.t["6Kwwuo"])
            })
        })
    }) : (0, i.jsxs)("div", {
        className: l()(t, x.bo),
        children: [(0, i.jsx)(d.Ay, {
            className: x.__invalid_guildIcon,
            guild: p,
            size: d.Ay.Sizes.LARGER
        }), (0, i.jsxs)("div", {
            className: x.$g,
            children: [(0, i.jsx)(o.Text, {
                variant: "text-lg/bold",
                children: p.name
            }), (0, i.jsxs)("div", {
                className: x.TZ,
                children: [(0, i.jsx)(o._Jp, {
                    color: o.LU0.unsafe_rawColors.GUILD_BOOSTING_PINK,
                    className: x.Me
                }), (0, i.jsx)(o.Text, {
                    variant: "text-sm/bold",
                    color: "text-muted",
                    children: h.intl.format(h.t["pob/cL"], {
                        subscriptions: T
                    })
                }), (0, i.jsx)("div", {
                    className: x.me
                }), (0, i.jsx)(o.Text, {
                    variant: "text-sm/bold",
                    color: "text-muted",
                    children: (0, g.gb)(p.premiumTier, {
                        useLevels: !1
                    })
                })]
            })]
        }), s ? (0, i.jsx)(u.A, {
            guild: p,
            analyticsLocation: {
                page: A.liQ.GUILD_BOOSTING_USER_SETTINGS,
                section: A.JJy.GUILD_BOOSTING_RECOMMENDED_SERVER_BOOST_THIS_SERVER_CTA,
                object: A.ZSU.BUTTON_CTA,
                objectType: A.AnalyticsObjectTypes.BUY
            },
            pauseAnimation: !0,
            size: a.$n.Sizes.MEDIUM,
            color: a.$n.Colors.PRIMARY,
            buttonText: h.intl.string(h.t.aBHecF)
        }) : (0, i.jsx)(o.Button, {
            variant: "secondary",
            text: h.intl.string(h.t.KLOhbO),
            onClick: () => {
                (0, c.K)({
                    guildId: p.id,
                    location: {
                        section: A.JJy.GUILD_BOOSTING_RECOMMENDED_SERVER_GO_TO_SERVER_CTA
                    }
                })
            }
        })]
    })
}