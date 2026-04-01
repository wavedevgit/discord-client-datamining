/** chunk id: 175335 params = (module,exports,require) **/
n.d(t, {
    A: () => y
});
var i = n(627968),
    a = n(64700),
    r = n(503698),
    l = n.n(r),
    s = n(110259),
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
    I = n(43136),
    E = n(575926),
    b = n(652215),
    v = n(985018),
    T = n(952372);

function y(e) {
    let {
        guildId: t
    } = e, n = (0, o.bG)([x.A], () => x.A.getGuild(t)), {
        loading: r,
        subscriptionsSettings: y
    } = (0, C.G)(t), {
        listingsLoaded: S
    } = (0, p.bb)(t), N = (0, p.fZ)(t, {
        publishedOnly: !0
    }), j = a.useCallback(async () => {
        f.default.track(b.HAw.GUILD_SHOP_EMBED_CLICKED, {
            ...(0, _.H$)(t)
        }), await (0, g.A)(b.BVt.SERVER_SHOP(t))
    }, [t]);
    (0, m.A)({
        type: s.ImpressionTypes.VIEW,
        name: s.ImpressionNames.GUILD_SHOP_EMBED
    }, {
        disableTrack: null == n
    });
    let L = N.length > 0 ? new Date(Math.min(...N.map(e => Date.parse(e.published_at)))) : void 0;
    return r || !S ? (0, i.jsx)("div", {
        className: l()(T.lm, T.dc),
        children: (0, i.jsx)(u.y$y, {})
    }) : null == n || null == y ? null : (0, i.jsxs)("div", {
        className: T.lm,
        children: [(0, i.jsx)(I.C, {
            coverImageAsset: y.cover_image_asset ?? null
        }), (0, i.jsx)(u.hKd, {
            size: 16
        }), (0, i.jsxs)("div", {
            className: T.qs,
            children: [(0, i.jsx)(E.h, {
                height: "16px",
                width: "16px",
                color: d.A.colors.INTERACTIVE_TEXT_DEFAULT.css
            }), (0, i.jsx)(u.Heading, {
                variant: "heading-sm/semibold",
                color: "interactive-text-default",
                className: T.Nl,
                children: v.intl.string(v.t.al5EXL)
            })]
        }), (0, i.jsx)(u.hKd, {
            size: 16
        }), (0, i.jsx)(u.Heading, {
            variant: "heading-md/semibold",
            color: "text-default",
            children: v.intl.format(v.t.NZeik9, {
                guildName: n.name
            })
        }), (0, i.jsx)(u.hKd, {
            size: 4
        }), (0, i.jsx)(u.Text, {
            variant: "text-sm/normal",
            color: "text-muted",
            lineClamp: 2,
            children: y.description
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
                        children: v.intl.format(v.t.tKZNlb, {
                            listingCount: N.length
                        })
                    })
                }), null != L && (0, i.jsx)("li", {
                    children: (0, i.jsx)(u.Text, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: v.intl.format(v.t["kXr8+b"], {
                            createdYear: L.getFullYear()
                        })
                    })
                })]
            }), (0, i.jsx)("div", {
                className: T.$h,
                children: (0, i.jsx)(c.$nd, {
                    onClick: j,
                    icon: E.A,
                    text: v.intl.string(v.t.jXx1CC)
                })
            })]
        })]
    })
}