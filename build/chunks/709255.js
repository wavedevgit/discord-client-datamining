/** chunk id: 709255 params = (module,exports,require) **/
n.d(t, {
    A: () => p
});
var a = n(627968),
    s = n(64700),
    l = n(503698),
    i = n.n(l),
    r = n(311907),
    d = n(435371),
    o = n(397927),
    c = n(363487),
    u = n(890942),
    m = n(522055),
    x = n(225180),
    v = n(146995),
    g = n(136708),
    b = n(985018),
    f = n(570105);

function j(e) {
    let {
        guildId: t,
        gameInstance: n,
        cost: s
    } = e;
    return (0, a.jsx)(d.un, {
        "aria-label": b.intl.string(g.default.TZsu1U),
        title: b.intl.string(g.default.TZsu1U),
        body: b.intl.formatToPlainString(g.default["5HQUzD"], {
            boostCount: s
        }),
        children: (0, a.jsx)("div", {
            className: f.vI,
            children: (0, a.jsx)(o.Button, {
                icon: {
                    type: "icon",
                    asset: o.x8N
                },
                text: s.toString(),
                variant: "secondary",
                size: "sm",
                "aria-label": b.intl.string(g.default.TZsu1U),
                onClick: e => {
                    e.stopPropagation(), (0, v.m)(t, n)
                }
            })
        })
    })
}

function p(e) {
    let {
        guildId: t,
        gameInstance: n,
        onClick: l
    } = e, d = (0, r.bG)([m.A], () => m.A.getStateForGuild(t)), v = s.useMemo(() => d?.entitlements?.[n.entitlementId], [d?.entitlements, n.entitlementId]), p = v?.ends_at != null, h = v?.sku?.tenant_metadata?.guild_monetization?.game_server?.boost_price, N = (0, x.A)(n.gameId, "icon"), S = (0, c.A)(t);
    return null == h ? null : (0, a.jsxs)(o.DUT, {
        className: i()(f.LO, {
            [f.r9]: !S
        }),
        onClick: S ? () => l(n) : void 0,
        "aria-disabled": !S,
        children: [(0, a.jsx)("img", {
            className: f.Sl,
            alt: "",
            src: N
        }), (0, a.jsxs)("div", {
            className: f.FS,
            children: [(0, a.jsx)(o.Heading, {
                variant: "heading-sm/semibold",
                children: n.name
            }), p ? (0, a.jsx)(u.P5, {
                dateString: v.ends_at
            }) : (0, a.jsx)(u.TG, {
                text: b.intl.string(g.default.FFLkmx)
            })]
        }), S && (0, a.jsx)(j, {
            guildId: t,
            gameInstance: n,
            cost: h
        })]
    })
}