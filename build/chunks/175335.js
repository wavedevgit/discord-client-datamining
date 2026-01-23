/** Chunk was on web.js **/
/** chunk id: 175335, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => N
}), n(896048), n(228524);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(110259),
    l = n(311907),
    c = n(827734),
    u = n(732955),
    d = n(397927),
    f = n(58149),
    p = n(139286),
    _ = n(263063),
    h = n(250627),
    m = n(22007),
    g = n(813516),
    E = n(71393),
    y = n(954571),
    b = n(722888),
    O = n(43136),
    v = n(575926),
    A = n(652215),
    I = n(985018),
    S = n(266847);

function T(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function C(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            T(e, t, n[t])
        })
    }
    return e
}

function N(e) {
    var t;
    let {
        guildId: n
    } = e, a = (0, l.bG)([E.A], () => E.A.getGuild(n)), {
        loading: T,
        subscriptionsSettings: N
    } = (0, b.G)(n), {
        listingsLoaded: w
    } = (0, h.bb)(n), R = (0, h.fZ)(n, {
        publishedOnly: !0
    }), P = i.useCallback(async () => {
        y.default.track(A.HAw.GUILD_SHOP_EMBED_CLICKED, C({}, (0, f.H$)(n))), await (0, m.A)(A.BVt.SERVER_SHOP(n))
    }, [n]);
    (0, p.A)({
        type: o.ImpressionTypes.VIEW,
        name: o.ImpressionNames.GUILD_SHOP_EMBED
    }, {
        disableTrack: null == a
    });
    let D = R.length > 0 ? new Date(Math.min(...R.map(e => Date.parse(e.published_at)))) : void 0;
    return T || !w ? (0, r.jsx)("div", {
        className: s()(S.lm, S.dc),
        children: (0, r.jsx)(d.y$y, {})
    }) : null == a || null == N ? null : (0, r.jsxs)("div", {
        className: S.lm,
        children: [(0, r.jsx)(O.C, {
            coverImageAsset: null != (t = N.cover_image_asset) ? t : null
        }), (0, r.jsx)(d.hKd, {
            size: 16
        }), (0, r.jsxs)("div", {
            className: S.qs,
            children: [(0, r.jsx)(v.h, {
                height: "16px",
                width: "16px",
                color: c.A.colors.INTERACTIVE_TEXT_DEFAULT.css
            }), (0, r.jsx)(d.Heading, {
                variant: "heading-sm/semibold",
                color: "interactive-text-default",
                className: S.Nl,
                children: I.intl.string(I.t.al5EXL)
            })]
        }), (0, r.jsx)(d.hKd, {
            size: 16
        }), (0, r.jsx)(d.Heading, {
            variant: "heading-md/semibold",
            color: "text-default",
            children: I.intl.format(I.t.NZeik9, {
                guildName: a.name
            })
        }), (0, r.jsx)(d.hKd, {
            size: 4
        }), (0, r.jsx)(d.Text, {
            variant: "text-sm/normal",
            color: "text-muted",
            lineClamp: 2,
            children: N.description
        }), (0, r.jsx)(d.hKd, {
            size: 16
        }), (0, r.jsx)(g.A, {}), (0, r.jsx)(d.hKd, {
            size: 16
        }), (0, r.jsxs)("div", {
            className: S.kS,
            children: [(0, r.jsx)(_.A, {
                guild: a
            }), (0, r.jsxs)("ul", {
                className: S.q6,
                children: [(0, r.jsx)("li", {
                    children: (0, r.jsx)(d.Text, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: I.intl.format(I.t.tKZNlb, {
                            listingCount: R.length
                        })
                    })
                }), null != D && (0, r.jsx)("li", {
                    children: (0, r.jsx)(d.Text, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: I.intl.format(I.t["kXr8+b"], {
                            createdYear: D.getFullYear()
                        })
                    })
                })]
            }), (0, r.jsx)("div", {
                className: S.$h,
                children: (0, r.jsx)(u.$nd, {
                    onClick: P,
                    icon: v.A,
                    text: I.intl.string(I.t.jXx1CC)
                })
            })]
        })]
    })
}