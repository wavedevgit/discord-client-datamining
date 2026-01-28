/** Chunk was on 5606 **/
/** chunk id: 358172, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => h
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
    p = n(864310),
    _ = n(71393),
    m = n(473145),
    g = n(652215),
    f = n(985018),
    b = n(246930);
let h = function(e) {
    let {
        className: t,
        guildId: n,
        boostingVariant: i
    } = e, h = (0, s.bG)([_.A], () => _.A.getGuild(n), [n]), A = (0, p.A)(null == h ? void 0 : h.id).total;
    return null == h ? (0, r.jsx)("div", {
        className: l()(t, b.bo),
        children: (0, r.jsx)("div", {
            className: b.$g,
            children: (0, r.jsx)(o.Text, {
                variant: "text-lg/bold",
                children: f.intl.string(f.t["6Kwwuo"])
            })
        })
    }) : (0, r.jsxs)("div", {
        className: l()(t, b.bo),
        children: [(0, r.jsx)(c.A, {
            className: b.__invalid_guildIcon,
            guild: h,
            size: c.A.Sizes.LARGER
        }), (0, r.jsxs)("div", {
            className: b.$g,
            children: [(0, r.jsx)(o.Text, {
                variant: "text-lg/bold",
                children: h.name
            }), (0, r.jsxs)("div", {
                className: b.TZ,
                children: [(0, r.jsx)(o._Jp, {
                    color: o.LU0.unsafe_rawColors.GUILD_BOOSTING_PINK,
                    className: b.Me
                }), (0, r.jsx)(o.Text, {
                    variant: "text-sm/bold",
                    color: "text-muted",
                    children: f.intl.format(f.t["pob/cL"], {
                        subscriptions: A
                    })
                }), (0, r.jsx)("div", {
                    className: b.me
                }), (0, r.jsx)(o.Text, {
                    variant: "text-sm/bold",
                    color: "text-muted",
                    children: (0, m.gb)(h.premiumTier, {
                        useLevels: !1
                    })
                })]
            })]
        }), i ? (0, r.jsx)(u.A, {
            guild: h,
            analyticsLocation: {
                page: g.liQ.GUILD_BOOSTING_USER_SETTINGS,
                section: g.JJy.GUILD_BOOSTING_RECOMMENDED_SERVER_BOOST_THIS_SERVER_CTA,
                object: g.ZSU.BUTTON_CTA,
                objectType: g.AnalyticsObjectTypes.BUY
            },
            pauseAnimation: !0,
            size: a.$n.Sizes.MEDIUM,
            color: a.$n.Colors.PRIMARY,
            buttonText: f.intl.string(f.t.aBHecF)
        }) : (0, r.jsx)(o.Button, {
            variant: "secondary",
            text: f.intl.string(f.t.KLOhbO),
            onClick: () => {
                (0, d.K)({
                    guildId: h.id,
                    location: {
                        section: g.JJy.GUILD_BOOSTING_RECOMMENDED_SERVER_GO_TO_SERVER_CTA
                    }
                })
            }
        })]
    })
}