/** Chunk was on 2827 **/
/** chunk id: 358172, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => b
});
var r = n(627968);
n(64700);
var i = n(503698),
    l = n.n(i),
    s = n(417597),
    a = n(421380),
    o = n(397927),
    c = n(263063),
    d = n(509536),
    u = n(721923),
    _ = n(864310),
    p = n(71393),
    m = n(473145),
    g = n(652215),
    A = n(985018),
    f = n(246930);
let b = function(e) {
    let {
        className: t,
        guildId: n,
        boostingVariant: i
    } = e, b = (0, s.bG)([p.A], () => p.A.getGuild(n), [n]), h = (0, _.A)(null == b ? void 0 : b.id).total;
    return null == b ? (0, r.jsx)("div", {
        className: l()(t, f.bo),
        children: (0, r.jsx)("div", {
            className: f.$g,
            children: (0, r.jsx)(o.Text, {
                variant: "text-lg/bold",
                children: A.intl.string(A.t["6Kwwuo"])
            })
        })
    }) : (0, r.jsxs)("div", {
        className: l()(t, f.bo),
        children: [(0, r.jsx)(c.A, {
            className: f.__invalid_guildIcon,
            guild: b,
            size: c.A.Sizes.LARGER
        }), (0, r.jsxs)("div", {
            className: f.$g,
            children: [(0, r.jsx)(o.Text, {
                variant: "text-lg/bold",
                children: b.name
            }), (0, r.jsxs)("div", {
                className: f.TZ,
                children: [(0, r.jsx)(o._Jp, {
                    color: o.LU0.unsafe_rawColors.GUILD_BOOSTING_PINK,
                    className: f.Me
                }), (0, r.jsx)(o.Text, {
                    variant: "text-sm/bold",
                    color: "text-muted",
                    children: A.intl.format(A.t["pob/cL"], {
                        subscriptions: h
                    })
                }), (0, r.jsx)("div", {
                    className: f.me
                }), (0, r.jsx)(o.Text, {
                    variant: "text-sm/bold",
                    color: "text-muted",
                    children: (0, m.gb)(b.premiumTier, {
                        useLevels: !1
                    })
                })]
            })]
        }), i ? (0, r.jsx)(u.A, {
            guild: b,
            analyticsLocation: {
                page: g.liQ.GUILD_BOOSTING_USER_SETTINGS,
                section: g.JJy.GUILD_BOOSTING_RECOMMENDED_SERVER_BOOST_THIS_SERVER_CTA,
                object: g.ZSU.BUTTON_CTA,
                objectType: g.AnalyticsObjectTypes.BUY
            },
            pauseAnimation: !0,
            size: a.$n.Sizes.MEDIUM,
            color: a.$n.Colors.PRIMARY,
            buttonText: A.intl.string(A.t.aBHecF)
        }) : (0, r.jsx)(o.Button, {
            variant: "secondary",
            text: A.intl.string(A.t.KLOhbO),
            onClick: () => {
                (0, d.K)({
                    guildId: b.id,
                    location: {
                        section: g.JJy.GUILD_BOOSTING_RECOMMENDED_SERVER_GO_TO_SERVER_CTA
                    }
                })
            }
        })]
    })
}