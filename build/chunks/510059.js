/** chunk id: 510059 params = (module,exports,require) **/
t.d(l, {
    A: () => N
});
var i = t(627968);
t(64700);
var n = t(503698),
    s = t.n(n),
    a = t(311907),
    r = t(990078),
    o = t(397927),
    d = t(573648),
    c = t(58149),
    u = t(681819),
    m = t(370480),
    A = t(169869),
    p = t(532197),
    x = t(773669),
    g = t(307600),
    f = t(652215),
    h = t(783419),
    j = t(985018),
    I = t(882119);

function v(e) {
    let l, {
            account: t,
            locale: n,
            userId: s
        } = e,
        a = t.metadata ?? {},
        x = (0, m.An)(a[h.pK.CREATED_AT], n),
        v = d.A.get((0, u.ML)(t.type));
    return (0, i.jsxs)("li", {
        className: I.FI,
        children: [(0, i.jsx)(r.m, {
            __unsupportedReactNodeAsText: v?.name,
            children: (0, i.jsx)("div", {
                className: I.k_,
                children: (0, i.jsx)("img", {
                    alt: j.intl.formatToPlainString(j.t.rtm15P, {
                        name: v?.name
                    }),
                    className: I.tV,
                    src: v?.icon.lightPNG
                })
            })
        }), (0, i.jsxs)("div", {
            className: I.Hd,
            children: [(0, i.jsxs)("div", {
                children: [null == (l = v?.getPlatformUserUrl?.(t)) ? (0, i.jsx)(r.m, {
                    overflowOnly: !0,
                    text: t.name,
                    children: (0, i.jsx)(o.Text, {
                        variant: "text-sm/normal",
                        className: I.GW,
                        children: t.name
                    })
                }) : (0, i.jsx)(o.MzZ, {
                    href: l,
                    className: I.Y2,
                    useDefaultUnderlineStyles: !1,
                    "aria-label": v?.name != null ? `${v.name}, ${t.name}, ${j.intl.string(j.t.q5jLJB)}` : `${t.name}, ${j.intl.string(j.t.q5jLJB)}`,
                    onClick: e => {
                        (0, c.zV)(f.HAw.CONNECTED_ACCOUNT_VIEWED, {
                            platform_type: t.type,
                            other_user_id: s
                        }), (0, g.h)({
                            href: l,
                            trusted: v?.type !== f.fg2.DOMAIN
                        }, e)
                    },
                    children: (0, i.jsxs)("div", {
                        className: I.vi,
                        children: [(0, i.jsx)(r.m, {
                            overflowOnly: !0,
                            text: t.name,
                            children: (0, i.jsx)(o.Text, {
                                variant: "text-sm/normal",
                                className: I.GW,
                                children: t.name
                            })
                        }), (0, i.jsx)(p.A, {
                            className: I.E4,
                            direction: p.A.Directions.RIGHT
                        })]
                    })
                }), null != x && (0, i.jsx)(o.Text, {
                    variant: "text-xs/normal",
                    children: j.intl.format(j.t["9rfonh"], {
                        date: x
                    })
                })]
            }), (0, i.jsx)("div", {
                className: I.yu,
                children: t.type === f.fg2.REDDIT ? (0, A.xE)(a) : t.type === f.fg2.STEAM ? (0, A.dy)(a) : t.type === f.fg2.BLUESKY || t.type === f.fg2.MASTODON || t.type === f.fg2.TWITTER ? (0, A.ED)(a) : t.type === f.fg2.PAYPAL ? (0, A.gZ)(a) : t.type === f.fg2.EBAY ? (0, A.ub)(a) : t.type === f.fg2.TIKTOK ? (0, A.HU)(a) : null
            })]
        })]
    })
}

function N(e) {
    let {
        connections: l,
        userId: t,
        className: n
    } = e, r = (0, a.bG)([x.default], () => x.default.locale);
    return 0 === l.length ? null : (0, i.jsx)("ul", {
        className: s()(I.kL, n),
        children: l.map(e => (0, i.jsx)(v, {
            account: e,
            userId: t,
            locale: r
        }, `${e.type}:${e.id}`))
    })
}