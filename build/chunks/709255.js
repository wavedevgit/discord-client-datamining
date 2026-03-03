/** chunk id: 709255, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => b
});
var a = n(627968),
    s = n(64700),
    i = n(503698),
    l = n.n(i),
    r = n(311907),
    d = n(435371),
    o = n(397927),
    c = n(363487),
    u = n(890942),
    m = n(522055),
    x = n(225180),
    g = n(146995),
    v = n(333354),
    f = n(985018),
    j = n(276079);

function p(e) {
    let {
        guildId: t,
        gameInstance: n,
        cost: s
    } = e;
    return (0, a.jsx)(d.un, {
        "aria-label": f.intl.string(v.default.TZsu1U),
        title: f.intl.string(v.default.TZsu1U),
        body: f.intl.formatToPlainString(v.default["5HQUzD"], {
            boostCount: s
        }),
        children: (0, a.jsx)("div", {
            className: j.vI,
            children: (0, a.jsx)(o.Button, {
                icon: {
                    type: "icon",
                    asset: o.x8N
                },
                text: s.toString(),
                variant: "secondary",
                size: "sm",
                "aria-label": f.intl.string(v.default.TZsu1U),
                onClick: e => {
                    e.stopPropagation(), (0, g.m)(t, n)
                }
            })
        })
    })
}

function b(e) {
    let {
        guildId: t,
        gameInstance: n,
        onClick: i
    } = e, d = (0, r.bG)([m.A], () => m.A.getStateForGuild(t)), g = s.useMemo(() => d?.entitlements?.[n.entitlementId], [d?.entitlements, n.entitlementId]), b = g?.ends_at != null, h = g?.sku?.tenant_metadata?.guild_monetization?.game_server?.boost_price, N = (0, x.A)(n.gameId, "icon"), S = (0, c.A)(t);
    return null == h ? null : (0, a.jsxs)(o.DUT, {
        className: l()(j.LO, {
            [j.r9]: !S
        }),
        onClick: S ? () => i(n) : void 0,
        "aria-disabled": !S,
        children: [(0, a.jsx)("img", {
            className: j.Sl,
            alt: "",
            src: N
        }), (0, a.jsxs)("div", {
            className: j.FS,
            children: [(0, a.jsx)(o.Heading, {
                variant: "heading-sm/semibold",
                children: n.name
            }), b ? (0, a.jsx)(u.P5, {
                dateString: g.ends_at
            }) : (0, a.jsx)(u.TG, {
                text: f.intl.string(v.default.FFLkmx)
            })]
        }), S && (0, a.jsx)(p, {
            guildId: t,
            gameInstance: n,
            cost: h
        })]
    })
}