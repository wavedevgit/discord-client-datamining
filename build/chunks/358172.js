/** chunk id: 358172 params = (module,exports,require) **/
n.d(t, {
    A: () => x
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
    _ = n(864310),
    g = n(71393),
    m = n(473145),
    A = n(652215),
    h = n(985018),
    p = n(246930);
let x = function(e) {
    let {
        className: t,
        guildId: n,
        boostingVariant: s
    } = e, x = (0, a.bG)([g.A], () => g.A.getGuild(n), [n]), E = (0, _.A)(x?.id).total;
    return null == x ? (0, i.jsx)("div", {
        className: l()(t, p.bo),
        children: (0, i.jsx)("div", {
            className: p.$g,
            children: (0, i.jsx)(o.Text, {
                variant: "text-lg/bold",
                children: h.intl.string(h.t["6Kwwuo"])
            })
        })
    }) : (0, i.jsxs)("div", {
        className: l()(t, p.bo),
        children: [(0, i.jsx)(d.Ay, {
            className: p.__invalid_guildIcon,
            guild: x,
            size: d.Ay.Sizes.LARGER
        }), (0, i.jsxs)("div", {
            className: p.$g,
            children: [(0, i.jsx)(o.Text, {
                variant: "text-lg/bold",
                children: x.name
            }), (0, i.jsxs)("div", {
                className: p.TZ,
                children: [(0, i.jsx)(o._Jp, {
                    color: o.LU0.unsafe_rawColors.GUILD_BOOSTING_PINK,
                    className: p.Me
                }), (0, i.jsx)(o.Text, {
                    variant: "text-sm/bold",
                    color: "text-muted",
                    children: h.intl.format(h.t["pob/cL"], {
                        subscriptions: E
                    })
                }), (0, i.jsx)("div", {
                    className: p.me
                }), (0, i.jsx)(o.Text, {
                    variant: "text-sm/bold",
                    color: "text-muted",
                    children: (0, m.gb)(x.premiumTier, {
                        useLevels: !1
                    })
                })]
            })]
        }), s ? (0, i.jsx)(u.A, {
            guild: x,
            analyticsLocation: {
                page: A.liQ.GUILD_BOOSTING_USER_SETTINGS,
                section: A.JJy.GUILD_BOOSTING_RECOMMENDED_SERVER_BOOST_THIS_SERVER_CTA,
                object: A.ZSU.BUTTON_CTA,
                objectType: A.AnalyticsObjectTypes.BUY
            },
            pauseAnimation: !0,
            size: r.$n.Sizes.MEDIUM,
            color: r.$n.Colors.PRIMARY,
            buttonText: h.intl.string(h.t.aBHecF)
        }) : (0, i.jsx)(o.Button, {
            variant: "secondary",
            text: h.intl.string(h.t.KLOhbO),
            onClick: () => {
                (0, c.K)({
                    guildId: x.id,
                    location: {
                        section: A.JJy.GUILD_BOOSTING_RECOMMENDED_SERVER_GO_TO_SERVER_CTA
                    }
                })
            }
        })]
    })
}