/** chunk id: 394388 params = (module,exports,require) **/
n.d(t, {
    A: () => M
});
var i = n(627968),
    l = n(64700),
    a = n(311907),
    r = n(554146),
    s = n(397927),
    o = n(155718),
    c = n(775602),
    d = n(793574),
    u = n(367727),
    _ = n(509536),
    m = n(881635),
    A = n(363487),
    E = n(828162),
    I = n(71393),
    T = n(888675),
    N = n(652215),
    f = n(49999),
    C = n(985018),
    g = n(333354),
    h = n(468406),
    p = n(274993),
    R = n(218924);

function S(e) {
    let {
        title: t,
        body: n,
        guild: l,
        analyticsLocations: r
    } = e, o = (0, a.bG)([c.A], () => c.A.useReducedMotion);
    return (0, i.jsxs)("div", {
        className: h.kL,
        children: [(0, i.jsx)("div", {
            className: h.ZS,
            children: (0, i.jsx)("img", {
                className: h.Sl,
                src: o ? R.A : p.A,
                alt: "Boost gem"
            })
        }), (0, i.jsxs)("div", {
            className: h.Qs,
            children: [(0, i.jsx)(s.Heading, {
                variant: "heading-md/semibold",
                style: {
                    marginTop: 0,
                    marginBottom: "var(--space-4)"
                },
                children: t
            }), (0, i.jsx)(s.Text, {
                color: "text-muted",
                className: h.rf,
                variant: "text-sm/medium",
                children: n
            })]
        }), (0, i.jsx)("div", {
            children: (0, i.jsx)(m.A, {
                guild: l,
                analyticsLocations: r,
                analyticsLocation: {
                    page: N.liQ.GUILD_CHANNEL,
                    section: N.JJy.CHANNEL_TEXT_AREA
                }
            })
        })]
    })
}

function x(e) {
    let {
        guild: t
    } = e;
    l.useEffect(() => {
        (0, u.uh)(r.M.FIRST_BOOSTER_UPSELL_OVERSEER, {
            dismissAction: f.i.AUTO_DISMISS,
            guildId: t.id
        })
    }, [t.id]);
    let n = (0, A.A)(t.id);
    return (0, i.jsx)(S, {
        title: C.intl.string(g.default.qGDEON),
        body: C.intl.format(g.default["s+HTdX"], {
            viewAllPerks: e => (0, i.jsx)(s.DUT, {
                tag: "a",
                role: "link",
                onClick: () => {
                    n ? (0, E.A)(t.id, d.A.GUILD_BOOSTING_FIRST_TIME_BOOSTER_UPSELL) : (0, _.K)({
                        guildId: t.id,
                        location: {
                            section: N.JJy.CHANNEL_TEXT_AREA,
                            object: N.ZSU.BOOST_ANNOUNCEMENT_UPSELL
                        }
                    })
                },
                children: e
            })
        }),
        guild: t,
        analyticsLocations: [d.A.GUILD_BOOSTING_FIRST_TIME_BOOSTER_UPSELL]
    })
}

function O(e) {
    let {
        boostingPrompt: t,
        guild: n
    } = e;
    return t.guildBoostUpsellType === o.Mk.FIRST_BOOSTER ? (0, i.jsx)(x, {
        guild: n
    }) : null
}

function M(e) {
    let {
        boostingPrompt: t,
        channel: n
    } = e, l = n.guild_id, r = (0, a.bG)([I.A], () => I.A.getGuild(l), [l]);
    return null == r ? null : (0, i.jsx)(T.A, {
        contentClassName: h.FG,
        iconContainerClassName: h.zc,
        iconNode: (0, i.jsx)(s.XFE, {
            colorClass: h.Kk
        }),
        children: (0, i.jsx)(O, {
            boostingPrompt: t,
            guild: r
        })
    })
}