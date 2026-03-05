/** chunk id: 510059, original params: e,t,i (module,exports,require) **/
i.d(t, {
    A: () => N
});
var l = i(627968);
i(64700);
var n = i(503698),
    s = i.n(n),
    a = i(311907),
    r = i(990078),
    o = i(397927),
    d = i(573648),
    c = i(58149),
    u = i(681819),
    A = i(370480),
    m = i(169869),
    x = i(532197),
    p = i(773669),
    g = i(307600),
    h = i(652215),
    I = i(783419),
    f = i(985018),
    j = i(884293);

function v(e) {
    let t, {
            account: i,
            locale: n,
            userId: s
        } = e,
        a = i.metadata ?? {},
        p = (0, A.An)(a[I.pK.CREATED_AT], n),
        v = d.A.get((0, u.ML)(i.type));
    return (0, l.jsxs)("li", {
        className: j.FI,
        children: [(0, l.jsx)(r.m, {
            __unsupportedReactNodeAsText: v?.name,
            children: (0, l.jsx)("div", {
                className: j.k_,
                children: (0, l.jsx)("img", {
                    alt: f.intl.formatToPlainString(f.t.rtm15P, {
                        name: v?.name
                    }),
                    className: j.tV,
                    src: v?.icon.lightPNG
                })
            })
        }), (0, l.jsxs)("div", {
            className: j.Hd,
            children: [(0, l.jsxs)("div", {
                children: [null == (t = v?.getPlatformUserUrl?.(i)) ? (0, l.jsx)(r.m, {
                    overflowOnly: !0,
                    text: i.name,
                    children: (0, l.jsx)(o.Text, {
                        variant: "text-sm/normal",
                        className: j.GW,
                        children: i.name
                    })
                }) : (0, l.jsx)(o.MzZ, {
                    href: t,
                    className: j.Y2,
                    useDefaultUnderlineStyles: !1,
                    "aria-label": v?.name != null ? `${v.name}, ${i.name}, ${f.intl.string(f.t.q5jLJB)}` : `${i.name}, ${f.intl.string(f.t.q5jLJB)}`,
                    onClick: e => {
                        (0, c.zV)(h.HAw.CONNECTED_ACCOUNT_VIEWED, {
                            platform_type: i.type,
                            other_user_id: s
                        }), (0, g.h)({
                            href: t,
                            trusted: v?.type !== h.fg2.DOMAIN
                        }, e)
                    },
                    children: (0, l.jsxs)("div", {
                        className: j.vi,
                        children: [(0, l.jsx)(r.m, {
                            overflowOnly: !0,
                            text: i.name,
                            children: (0, l.jsx)(o.Text, {
                                variant: "text-sm/normal",
                                className: j.GW,
                                children: i.name
                            })
                        }), (0, l.jsx)(x.A, {
                            className: j.E4,
                            direction: x.A.Directions.RIGHT
                        })]
                    })
                }), null != p && (0, l.jsx)(o.Text, {
                    variant: "text-xs/normal",
                    children: f.intl.format(f.t["9rfonh"], {
                        date: p
                    })
                })]
            }), (0, l.jsx)("div", {
                className: j.yu,
                children: i.type === h.fg2.REDDIT ? (0, m.xE)(a) : i.type === h.fg2.STEAM ? (0, m.dy)(a) : i.type === h.fg2.BLUESKY || i.type === h.fg2.MASTODON || i.type === h.fg2.TWITTER ? (0, m.ED)(a) : i.type === h.fg2.PAYPAL ? (0, m.gZ)(a) : i.type === h.fg2.EBAY ? (0, m.ub)(a) : i.type === h.fg2.TIKTOK ? (0, m.HU)(a) : null
            })]
        })]
    })
}

function N(e) {
    let {
        connections: t,
        userId: i,
        className: n
    } = e, r = (0, a.bG)([p.default], () => p.default.locale);
    return 0 === t.length ? null : (0, l.jsx)("ul", {
        className: s()(j.kL, n),
        children: t.map(e => (0, l.jsx)(v, {
            account: e,
            userId: i,
            locale: r
        }, `${e.type}:${e.id}`))
    })
}