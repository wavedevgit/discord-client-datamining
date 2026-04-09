/** chunk id: 709255 params = (module,exports,require) **/
n.d(t, {
    A: () => p
});
var a = n(627968),
    l = n(64700),
    s = n(503698),
    i = n.n(s),
    r = n(311907),
    d = n(435371),
    o = n(397927),
    c = n(363487),
    u = n(410212),
    m = n(890942),
    x = n(522055),
    v = n(225180),
    g = n(146995),
    f = n(333354),
    j = n(985018),
    b = n(779836);

function h(e) {
    let {
        guildId: t,
        gameInstance: n,
        cost: l
    } = e;
    return (0, a.jsx)(d.un, {
        "aria-label": j.intl.string(f.default.TZsu1U),
        title: j.intl.string(f.default.TZsu1U),
        body: j.intl.formatToPlainString(f.default["5HQUzD"], {
            boostCount: l
        }),
        children: (0, a.jsx)("div", {
            className: b.vI,
            children: (0, a.jsx)(o.Button, {
                icon: {
                    type: "icon",
                    asset: o.x8N
                },
                text: l.toString(),
                variant: "secondary",
                size: "sm",
                "aria-label": j.intl.string(f.default.TZsu1U),
                onClick: e => {
                    e.stopPropagation(), (0, g.m)(t, n)
                }
            })
        })
    })
}

function p(e) {
    let {
        guildId: t,
        gameInstance: n,
        onClick: s
    } = e, d = (0, r.bG)([x.A], () => x.A.getStateForGuild(t)), g = l.useMemo(() => d?.entitlements?.[n.entitlementId], [d?.entitlements, n.entitlementId]), p = g?.ends_at != null, N = (0, u.A)(g), S = (0, v.A)(n.gameId, "icon"), I = (0, c.A)(t);
    return null == N ? null : (0, a.jsxs)(o.DUT, {
        className: i()(b.LO, {
            [b.r9]: !I
        }),
        onClick: I ? () => s(n) : void 0,
        "aria-disabled": !I,
        children: [(0, a.jsx)("img", {
            className: b.Sl,
            alt: "",
            src: S
        }), (0, a.jsxs)("div", {
            className: b.FS,
            children: [(0, a.jsx)(o.Heading, {
                variant: "heading-sm/semibold",
                children: n.name
            }), p ? (0, a.jsx)(m.P5, {
                dateString: g.ends_at
            }) : (0, a.jsx)(m.TG, {
                text: j.intl.string(f.default.FFLkmx)
            })]
        }), I && (0, a.jsx)(h, {
            guildId: t,
            gameInstance: n,
            cost: N
        })]
    })
}