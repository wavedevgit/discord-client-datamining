/** chunk id: 510059 params = (module,exports,require) **/
n.d(l, {
    A: () => v
});
var t = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    a = n(311907),
    r = n(990078),
    o = n(397927),
    d = n(573648),
    c = n(58149),
    u = n(681819),
    m = n(370480),
    p = n(169869),
    x = n(773669),
    A = n(307600),
    g = n(652215),
    f = n(783419),
    h = n(985018),
    j = n(276117);

function I(e) {
    let l, {
            account: n,
            locale: i,
            userId: s
        } = e,
        a = n.metadata ?? {},
        x = (0, m.An)(a[f.pK.CREATED_AT], i),
        I = d.A.get((0, u.ML)(n.type));
    return (0, t.jsxs)("li", {
        className: j.FI,
        children: [(0, t.jsx)(r.m, {
            __unsupportedReactNodeAsText: I?.name,
            children: (0, t.jsx)("div", {
                className: j.k_,
                children: (0, t.jsx)("img", {
                    alt: h.intl.formatToPlainString(h.t.rtm15P, {
                        name: I?.name
                    }),
                    className: j.tV,
                    src: I?.icon.lightPNG
                })
            })
        }), (0, t.jsxs)("div", {
            className: j.Hd,
            children: [(0, t.jsxs)("div", {
                children: [null == (l = I?.getPlatformUserUrl?.(n)) ? (0, t.jsx)(r.m, {
                    overflowOnly: !0,
                    text: n.name,
                    children: (0, t.jsx)(o.Text, {
                        variant: "text-sm/normal",
                        className: j.GW,
                        children: n.name
                    })
                }) : (0, t.jsx)(o.MzZ, {
                    href: l,
                    className: j.Y2,
                    useDefaultUnderlineStyles: !1,
                    "aria-label": I?.name != null ? `${I.name}, ${n.name}, ${h.intl.string(h.t.q5jLJB)}` : `${n.name}, ${h.intl.string(h.t.q5jLJB)}`,
                    onClick: e => {
                        (0, c.zV)(g.HAw.CONNECTED_ACCOUNT_VIEWED, {
                            platform_type: n.type,
                            other_user_id: s
                        }), (0, A.h)({
                            href: l,
                            trusted: I?.type !== g.fg2.DOMAIN
                        }, e)
                    },
                    children: (0, t.jsxs)("div", {
                        className: j.vi,
                        children: [(0, t.jsx)(r.m, {
                            overflowOnly: !0,
                            text: n.name,
                            children: (0, t.jsx)(o.Text, {
                                variant: "text-sm/normal",
                                className: j.GW,
                                children: n.name
                            })
                        }), (0, t.jsx)(o.I9m, {
                            size: "xs",
                            color: "currentColor"
                        })]
                    })
                }), null != x && (0, t.jsx)(o.Text, {
                    variant: "text-xs/normal",
                    children: h.intl.format(h.t["9rfonh"], {
                        date: x
                    })
                })]
            }), (0, t.jsx)("div", {
                className: j.yu,
                children: n.type === g.fg2.REDDIT ? (0, p.xE)(a) : n.type === g.fg2.STEAM ? (0, p.dy)(a) : n.type === g.fg2.BLUESKY || n.type === g.fg2.MASTODON || n.type === g.fg2.TWITTER ? (0, p.ED)(a) : n.type === g.fg2.PAYPAL ? (0, p.gZ)(a) : n.type === g.fg2.EBAY ? (0, p.ub)(a) : n.type === g.fg2.TIKTOK ? (0, p.HU)(a) : null
            })]
        })]
    })
}

function v(e) {
    let {
        connections: l,
        userId: n,
        className: i
    } = e, r = (0, a.bG)([x.default], () => x.default.locale);
    return 0 === l.length ? null : (0, t.jsx)("ul", {
        className: s()(j.kL, i),
        children: l.map(e => (0, t.jsx)(I, {
            account: e,
            userId: n,
            locale: r
        }, `${e.type}:${e.id}`))
    })
}