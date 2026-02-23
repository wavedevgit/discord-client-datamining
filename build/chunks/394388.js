/** chunk id: 394388, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => C
});
var i = n(627968);
n(64700);
var l = n(311907),
    a = n(397927),
    r = n(155718),
    s = n(775602),
    o = n(509536),
    c = n(881635),
    d = n(71393),
    u = n(888675),
    m = n(652215),
    _ = n(985018),
    A = n(333354),
    h = n(468406),
    f = n(274993),
    E = n(218924);

function g(e) {
    let {
        title: t,
        body: n,
        guild: r
    } = e, o = (0, l.bG)([s.A], () => s.A.useReducedMotion);
    return (0, i.jsxs)("div", {
        className: h.kL,
        children: [(0, i.jsx)("div", {
            className: h.ZS,
            children: (0, i.jsx)("img", {
                className: h.Sl,
                src: o ? E.A : f.A,
                alt: "Guild Boost Upsell"
            })
        }), (0, i.jsxs)("div", {
            className: h.Qs,
            children: [(0, i.jsx)(a.Heading, {
                variant: "heading-md/semibold",
                children: t
            }), (0, i.jsx)(a.Text, {
                color: "text-muted",
                className: h.rf,
                variant: "text-sm/medium",
                children: n
            })]
        }), (0, i.jsx)("div", {
            children: (0, i.jsx)(c.A, {
                guild: r
            })
        })]
    })
}

function p(e) {
    let {
        guild: t
    } = e;
    return (0, i.jsx)(g, {
        title: _.intl.string(A.default.qGDEON),
        body: _.intl.format(A.default["s+HTdX"], {
            viewAllPerks: e => (0, i.jsx)(a.DUT, {
                tag: "a",
                role: "link",
                onClick: () => {
                    (0, o.K)({
                        guildId: t.id,
                        location: {
                            section: m.JJy.CHANNEL_TEXT_AREA,
                            object: m.ZSU.BOOST_ANNOUNCEMENT_UPSELL
                        }
                    })
                },
                children: e
            })
        }),
        guild: t
    })
}

function x(e) {
    let {
        boostingPrompt: t,
        guild: n
    } = e;
    return t.guildBoostUpsellType === r.Mk.FIRST_BOOSTER ? (0, i.jsx)(p, {
        guild: n
    }) : null
}

function C(e) {
    let {
        boostingPrompt: t,
        channel: n,
        compact: r
    } = e, s = n.guild_id, o = (0, l.bG)([d.A], () => d.A.getGuild(s), [s]);
    return null == o ? null : (0, i.jsx)(u.A, {
        contentClassName: h.FG,
        iconContainerClassName: h.zc,
        iconNode: (0, i.jsx)(a.XFE, {
            colorClass: h.Kk
        }),
        compact: r,
        children: (0, i.jsx)(x, {
            boostingPrompt: t,
            guild: o
        })
    })
}