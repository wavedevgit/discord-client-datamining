/** chunk id: 175335 params = (module,exports,require) **/
n.d(t, {
    A: () => N
});
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(110259),
    o = n(311907),
    d = n(827734),
    c = n(732955),
    u = n(397927),
    _ = n(58149),
    m = n(139286),
    h = n(263063),
    p = n(250627),
    g = n(22007),
    A = n(813516),
    x = n(71393),
    f = n(954571),
    C = n(722888),
    E = n(43136),
    I = n(575926),
    v = n(652215),
    b = n(985018),
    T = n(952372);

function N(e) {
    let {
        guildId: t
    } = e, n = (0, o.bG)([x.A], () => x.A.getGuild(t)), {
        loading: s,
        subscriptionsSettings: N
    } = (0, C.G)(t), {
        listingsLoaded: y
    } = (0, p.bb)(t), S = (0, p.fZ)(t, {
        publishedOnly: !0
    }), j = l.useCallback(async () => {
        f.default.track(v.HAw.GUILD_SHOP_EMBED_CLICKED, {
            ...(0, _.H$)(t)
        }), await (0, g.A)(v.BVt.SERVER_SHOP(t))
    }, [t]);
    (0, m.A)({
        type: a.ImpressionTypes.VIEW,
        name: a.ImpressionNames.GUILD_SHOP_EMBED
    }, {
        disableTrack: null == n
    });
    let L = S.length > 0 ? new Date(Math.min(...S.map(e => Date.parse(e.published_at)))) : void 0;
    return s || !y ? (0, i.jsx)("div", {
        className: r()(T.lm, T.dc),
        children: (0, i.jsx)(u.y$y, {})
    }) : null == n || null == N ? null : (0, i.jsxs)("div", {
        className: T.lm,
        children: [(0, i.jsx)(E.C, {
            coverImageAsset: N.cover_image_asset ?? null
        }), (0, i.jsx)(u.hKd, {
            size: 16
        }), (0, i.jsxs)("div", {
            className: T.qs,
            children: [(0, i.jsx)(I.h, {
                height: "16px",
                width: "16px",
                color: d.A.colors.INTERACTIVE_TEXT_DEFAULT.css
            }), (0, i.jsx)(u.Heading, {
                variant: "heading-sm/semibold",
                color: "interactive-text-default",
                className: T.Nl,
                children: b.intl.string(b.t.al5EXL)
            })]
        }), (0, i.jsx)(u.hKd, {
            size: 16
        }), (0, i.jsx)(u.Heading, {
            variant: "heading-md/semibold",
            color: "text-default",
            children: b.intl.format(b.t.NZeik9, {
                guildName: n.name
            })
        }), (0, i.jsx)(u.hKd, {
            size: 4
        }), (0, i.jsx)(u.Text, {
            variant: "text-sm/normal",
            color: "text-muted",
            lineClamp: 2,
            children: N.description
        }), (0, i.jsx)(u.hKd, {
            size: 16
        }), (0, i.jsx)(A.A, {}), (0, i.jsx)(u.hKd, {
            size: 16
        }), (0, i.jsxs)("div", {
            className: T.kS,
            children: [(0, i.jsx)(h.Ay, {
                guild: n
            }), (0, i.jsxs)("ul", {
                className: T.q6,
                children: [(0, i.jsx)("li", {
                    children: (0, i.jsx)(u.Text, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: b.intl.format(b.t.tKZNlb, {
                            listingCount: S.length
                        })
                    })
                }), null != L && (0, i.jsx)("li", {
                    children: (0, i.jsx)(u.Text, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: b.intl.format(b.t["kXr8+b"], {
                            createdYear: L.getFullYear()
                        })
                    })
                })]
            }), (0, i.jsx)("div", {
                className: T.$h,
                children: (0, i.jsx)(c.$nd, {
                    onClick: j,
                    icon: I.A,
                    text: b.intl.string(b.t.jXx1CC)
                })
            })]
        })]
    })
}