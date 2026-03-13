/** chunk id: 510059 params = (module,exports,require) **/
n.d(l, {
    A: () => N
});
var i = n(627968);
n(64700);
var t = n(503698),
    s = n.n(t),
    a = n(311907),
    r = n(990078),
    o = n(397927),
    d = n(573648),
    c = n(58149),
    u = n(681819),
    A = n(370480),
    m = n(169869),
    p = n(532197),
    x = n(773669),
    g = n(307600),
    h = n(652215),
    f = n(783419),
    I = n(985018),
    j = n(884293);

function v(e) {
    let l, {
            account: n,
            locale: t,
            userId: s
        } = e,
        a = n.metadata ?? {},
        x = (0, A.An)(a[f.pK.CREATED_AT], t),
        v = d.A.get((0, u.ML)(n.type));
    return (0, i.jsxs)("li", {
        className: j.FI,
        children: [(0, i.jsx)(r.m, {
            __unsupportedReactNodeAsText: v?.name,
            children: (0, i.jsx)("div", {
                className: j.k_,
                children: (0, i.jsx)("img", {
                    alt: I.intl.formatToPlainString(I.t.rtm15P, {
                        name: v?.name
                    }),
                    className: j.tV,
                    src: v?.icon.lightPNG
                })
            })
        }), (0, i.jsxs)("div", {
            className: j.Hd,
            children: [(0, i.jsxs)("div", {
                children: [null == (l = v?.getPlatformUserUrl?.(n)) ? (0, i.jsx)(r.m, {
                    overflowOnly: !0,
                    text: n.name,
                    children: (0, i.jsx)(o.Text, {
                        variant: "text-sm/normal",
                        className: j.GW,
                        children: n.name
                    })
                }) : (0, i.jsx)(o.MzZ, {
                    href: l,
                    className: j.Y2,
                    useDefaultUnderlineStyles: !1,
                    "aria-label": v?.name != null ? `${v.name}, ${n.name}, ${I.intl.string(I.t.q5jLJB)}` : `${n.name}, ${I.intl.string(I.t.q5jLJB)}`,
                    onClick: e => {
                        (0, c.zV)(h.HAw.CONNECTED_ACCOUNT_VIEWED, {
                            platform_type: n.type,
                            other_user_id: s
                        }), (0, g.h)({
                            href: l,
                            trusted: v?.type !== h.fg2.DOMAIN
                        }, e)
                    },
                    children: (0, i.jsxs)("div", {
                        className: j.vi,
                        children: [(0, i.jsx)(r.m, {
                            overflowOnly: !0,
                            text: n.name,
                            children: (0, i.jsx)(o.Text, {
                                variant: "text-sm/normal",
                                className: j.GW,
                                children: n.name
                            })
                        }), (0, i.jsx)(p.A, {
                            className: j.E4,
                            direction: p.A.Directions.RIGHT
                        })]
                    })
                }), null != x && (0, i.jsx)(o.Text, {
                    variant: "text-xs/normal",
                    children: I.intl.format(I.t["9rfonh"], {
                        date: x
                    })
                })]
            }), (0, i.jsx)("div", {
                className: j.yu,
                children: n.type === h.fg2.REDDIT ? (0, m.xE)(a) : n.type === h.fg2.STEAM ? (0, m.dy)(a) : n.type === h.fg2.BLUESKY || n.type === h.fg2.MASTODON || n.type === h.fg2.TWITTER ? (0, m.ED)(a) : n.type === h.fg2.PAYPAL ? (0, m.gZ)(a) : n.type === h.fg2.EBAY ? (0, m.ub)(a) : n.type === h.fg2.TIKTOK ? (0, m.HU)(a) : null
            })]
        })]
    })
}

function N(e) {
    let {
        connections: l,
        userId: n,
        className: t
    } = e, r = (0, a.bG)([x.default], () => x.default.locale);
    return 0 === l.length ? null : (0, i.jsx)("ul", {
        className: s()(j.kL, t),
        children: l.map(e => (0, i.jsx)(v, {
            account: e,
            userId: n,
            locale: r
        }, `${e.type}:${e.id}`))
    })
}