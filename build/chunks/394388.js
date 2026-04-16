/** chunk id: 394388 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => M
});
var i = n(627968),
    r = n(64700),
    s = n(311907),
    a = n(554146),
    l = n(397927),
    o = n(155718),
    c = n(775602),
    u = n(793574),
    d = n(367727),
    _ = n(509536),
    E = n(881635),
    A = n(363487),
    m = n(828162),
    I = n(71393),
    T = n(888675),
    N = n(652215),
    g = n(49999),
    p = n(985018),
    C = n(853513),
    f = n(829687),
    h = n(274993),
    S = n(218924);

function R(e) {
    let {
        title: t,
        body: n,
        guild: r,
        analyticsLocations: a
    } = e, o = (0, s.bG)([c.A], () => c.A.useReducedMotion);
    return (0, i.jsxs)("div", {
        className: f.kL,
        children: [(0, i.jsx)("div", {
            className: f.ZS,
            children: (0, i.jsx)("img", {
                className: f.Sl,
                src: o ? S.A : h.A,
                alt: "Boost gem"
            })
        }), (0, i.jsxs)("div", {
            className: f.Qs,
            children: [(0, i.jsx)(l.Heading, {
                variant: "heading-md/semibold",
                style: {
                    marginTop: 0,
                    marginBottom: "var(--space-4)"
                },
                children: t
            }), (0, i.jsx)(l.Text, {
                color: "text-muted",
                className: f.rf,
                variant: "text-sm/medium",
                children: n
            })]
        }), (0, i.jsx)("div", {
            children: (0, i.jsx)(E.A, {
                guild: r,
                analyticsLocations: a,
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
    r.useEffect(() => {
        (0, d.uh)(a.M.FIRST_BOOSTER_UPSELL_OVERSEER, {
            dismissAction: g.i.AUTO_DISMISS,
            guildId: t.id
        })
    }, [t.id]);
    let n = (0, A.A)(t.id);
    return (0, i.jsx)(R, {
        title: p.intl.string(C.default.qGDEON),
        body: p.intl.format(C.default["s+HTdX"], {
            viewAllPerks: e => (0, i.jsx)(l.DUT, {
                tag: "a",
                role: "link",
                onClick: () => {
                    n ? (0, m.A)(t.id, u.A.GUILD_BOOSTING_FIRST_TIME_BOOSTER_UPSELL) : (0, _.K4)({
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
        analyticsLocations: [u.A.GUILD_BOOSTING_FIRST_TIME_BOOSTER_UPSELL]
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
    } = e, r = n.guild_id, a = (0, s.bG)([I.A], () => I.A.getGuild(r), [r]);
    return null == a ? null : (0, i.jsx)(T.A, {
        contentClassName: f.FG,
        iconContainerClassName: f.zc,
        iconNode: (0, i.jsx)(l.XFE, {
            colorClass: f.Kk
        }),
        children: (0, i.jsx)(O, {
            boostingPrompt: t,
            guild: a
        })
    })
}