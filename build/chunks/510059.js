/** chunk id: 510059 params = (module,exports,require) **/
t.d(l, {
    A: () => v
});
var n = t(627968);
t(64700);
var i = t(503698),
    s = t.n(i),
    a = t(311907),
    r = t(990078),
    o = t(397927),
    d = t(573648),
    c = t(58149),
    u = t(681819),
    m = t(370480),
    x = t(169869),
    p = t(773669),
    A = t(307600),
    g = t(652215),
    f = t(783419),
    h = t(985018),
    j = t(276117);

function I(e) {
    let l, {
            account: t,
            locale: i,
            userId: s
        } = e,
        a = t.metadata ?? {},
        p = (0, m.An)(a[f.pK.CREATED_AT], i),
        I = d.A.get((0, u.ML)(t.type));
    return (0, n.jsxs)("li", {
        className: j.FI,
        children: [(0, n.jsx)(r.m, {
            __unsupportedReactNodeAsText: I?.name,
            children: (0, n.jsx)("div", {
                className: j.k_,
                children: (0, n.jsx)("img", {
                    alt: h.intl.formatToPlainString(h.t.rtm15P, {
                        name: I?.name
                    }),
                    className: j.tV,
                    src: I?.icon.lightPNG
                })
            })
        }), (0, n.jsxs)("div", {
            className: j.Hd,
            children: [(0, n.jsxs)("div", {
                children: [null == (l = I?.getPlatformUserUrl?.(t)) ? (0, n.jsx)(r.m, {
                    overflowOnly: !0,
                    text: t.name,
                    children: (0, n.jsx)(o.Text, {
                        variant: "text-sm/normal",
                        className: j.GW,
                        children: t.name
                    })
                }) : (0, n.jsx)(o.MzZ, {
                    href: l,
                    className: j.Y2,
                    useDefaultUnderlineStyles: !1,
                    "aria-label": I?.name != null ? `${I.name}, ${t.name}, ${h.intl.string(h.t.q5jLJB)}` : `${t.name}, ${h.intl.string(h.t.q5jLJB)}`,
                    onClick: e => {
                        (0, c.zV)(g.HAw.CONNECTED_ACCOUNT_VIEWED, {
                            platform_type: t.type,
                            other_user_id: s
                        }), (0, A.h)({
                            href: l,
                            trusted: I?.type !== g.fg2.DOMAIN
                        }, e)
                    },
                    children: (0, n.jsxs)("div", {
                        className: j.vi,
                        children: [(0, n.jsx)(r.m, {
                            overflowOnly: !0,
                            text: t.name,
                            children: (0, n.jsx)(o.Text, {
                                variant: "text-sm/normal",
                                className: j.GW,
                                children: t.name
                            })
                        }), (0, n.jsx)(o.I9m, {
                            size: "xs",
                            color: "currentColor"
                        })]
                    })
                }), null != p && (0, n.jsx)(o.Text, {
                    variant: "text-xs/normal",
                    children: h.intl.format(h.t["9rfonh"], {
                        date: p
                    })
                })]
            }), (0, n.jsx)("div", {
                className: j.yu,
                children: t.type === g.fg2.REDDIT ? (0, x.xE)(a) : t.type === g.fg2.STEAM ? (0, x.dy)(a) : t.type === g.fg2.BLUESKY || t.type === g.fg2.MASTODON || t.type === g.fg2.TWITTER ? (0, x.ED)(a) : t.type === g.fg2.PAYPAL ? (0, x.gZ)(a) : t.type === g.fg2.EBAY ? (0, x.ub)(a) : t.type === g.fg2.TIKTOK ? (0, x.HU)(a) : null
            })]
        })]
    })
}

function v(e) {
    let {
        connections: l,
        userId: t,
        className: i
    } = e, r = (0, a.bG)([p.default], () => p.default.locale);
    return 0 === l.length ? null : (0, n.jsx)("ul", {
        className: s()(j.kL, i),
        children: l.map(e => (0, n.jsx)(I, {
            account: e,
            userId: t,
            locale: r
        }, `${e.type}:${e.id}`))
    })
}