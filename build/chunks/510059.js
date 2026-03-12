/** chunk id: 510059 params = (module,exports,require) **/
n.d(t, {
    A: () => N
});
var l = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
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
    let t, {
            account: n,
            locale: i,
            userId: s
        } = e,
        a = n.metadata ?? {},
        x = (0, A.An)(a[f.pK.CREATED_AT], i),
        v = d.A.get((0, u.ML)(n.type));
    return (0, l.jsxs)("li", {
        className: j.FI,
        children: [(0, l.jsx)(r.m, {
            __unsupportedReactNodeAsText: v?.name,
            children: (0, l.jsx)("div", {
                className: j.k_,
                children: (0, l.jsx)("img", {
                    alt: I.intl.formatToPlainString(I.t.rtm15P, {
                        name: v?.name
                    }),
                    className: j.tV,
                    src: v?.icon.lightPNG
                })
            })
        }), (0, l.jsxs)("div", {
            className: j.Hd,
            children: [(0, l.jsxs)("div", {
                children: [null == (t = v?.getPlatformUserUrl?.(n)) ? (0, l.jsx)(r.m, {
                    overflowOnly: !0,
                    text: n.name,
                    children: (0, l.jsx)(o.Text, {
                        variant: "text-sm/normal",
                        className: j.GW,
                        children: n.name
                    })
                }) : (0, l.jsx)(o.MzZ, {
                    href: t,
                    className: j.Y2,
                    useDefaultUnderlineStyles: !1,
                    "aria-label": v?.name != null ? `${v.name}, ${n.name}, ${I.intl.string(I.t.q5jLJB)}` : `${n.name}, ${I.intl.string(I.t.q5jLJB)}`,
                    onClick: e => {
                        (0, c.zV)(h.HAw.CONNECTED_ACCOUNT_VIEWED, {
                            platform_type: n.type,
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
                            text: n.name,
                            children: (0, l.jsx)(o.Text, {
                                variant: "text-sm/normal",
                                className: j.GW,
                                children: n.name
                            })
                        }), (0, l.jsx)(p.A, {
                            className: j.E4,
                            direction: p.A.Directions.RIGHT
                        })]
                    })
                }), null != x && (0, l.jsx)(o.Text, {
                    variant: "text-xs/normal",
                    children: I.intl.format(I.t["9rfonh"], {
                        date: x
                    })
                })]
            }), (0, l.jsx)("div", {
                className: j.yu,
                children: n.type === h.fg2.REDDIT ? (0, m.xE)(a) : n.type === h.fg2.STEAM ? (0, m.dy)(a) : n.type === h.fg2.BLUESKY || n.type === h.fg2.MASTODON || n.type === h.fg2.TWITTER ? (0, m.ED)(a) : n.type === h.fg2.PAYPAL ? (0, m.gZ)(a) : n.type === h.fg2.EBAY ? (0, m.ub)(a) : n.type === h.fg2.TIKTOK ? (0, m.HU)(a) : null
            })]
        })]
    })
}

function N(e) {
    let {
        connections: t,
        userId: n,
        className: i
    } = e, r = (0, a.bG)([x.default], () => x.default.locale);
    return 0 === t.length ? null : (0, l.jsx)("ul", {
        className: s()(j.kL, i),
        children: t.map(e => (0, l.jsx)(v, {
            account: e,
            userId: n,
            locale: r
        }, `${e.type}:${e.id}`))
    })
}