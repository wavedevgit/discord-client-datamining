/** chunk id: 709255, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => j
});
var a = n(627968),
    i = n(64700),
    s = n(503698),
    l = n.n(s),
    r = n(311907),
    d = n(435371),
    c = n(397927),
    o = n(363487),
    u = n(890942),
    m = n(522055),
    g = n(225180),
    f = n(146995),
    v = n(136708),
    x = n(985018),
    _ = n(570105);

function p(e) {
    let {
        guildId: t,
        gameInstance: n,
        cost: i
    } = e;
    return (0, a.jsx)(d.un, {
        "aria-label": x.intl.string(v.default.TZsu1U),
        title: x.intl.string(v.default.TZsu1U),
        body: x.intl.formatToPlainString(v.default["5HQUzD"], {
            boostCount: i
        }),
        children: (0, a.jsx)("div", {
            className: _.vI,
            children: (0, a.jsx)(c.Button, {
                icon: {
                    type: "icon",
                    asset: c.x8N
                },
                text: i.toString(),
                variant: "secondary",
                size: "sm",
                "aria-label": x.intl.string(v.default.TZsu1U),
                onClick: e => {
                    e.stopPropagation(), (0, f.m)(t, n)
                }
            })
        })
    })
}

function j(e) {
    let {
        guildId: t,
        gameInstance: n,
        onClick: s
    } = e, d = (0, r.bG)([m.A], () => m.A.getStateForGuild(t)), f = i.useMemo(() => d?.entitlements?.[n.entitlementId], [d?.entitlements, n.entitlementId]), j = f?.ends_at != null, b = f?.sku?.tenant_metadata?.guild_monetization?.game_server?.boost_price, A = (0, g.A)(n.gameId, "icon"), h = (0, o.A)(t);
    return null == b ? null : (0, a.jsxs)(c.DUT, {
        className: l()(_.LO, {
            [_.r9]: !h
        }),
        onClick: h ? () => s(n) : void 0,
        "aria-disabled": !h,
        children: [(0, a.jsx)("img", {
            className: _.Sl,
            alt: "",
            src: A
        }), (0, a.jsxs)("div", {
            className: _.FS,
            children: [(0, a.jsx)(c.Heading, {
                variant: "heading-sm/semibold",
                children: n.name
            }), j ? (0, a.jsx)(u.P5, {
                dateString: f.ends_at
            }) : (0, a.jsx)(u.TG, {
                text: x.intl.string(v.default.FFLkmx)
            })]
        }), h && (0, a.jsx)(p, {
            guildId: t,
            gameInstance: n,
            cost: b
        })]
    })
}