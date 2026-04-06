/** chunk id: 510059 params = (module,exports,require) **/
i.d(l, {
    A: () => v
});
var t = i(627968);
i(64700);
var n = i(503698),
    s = i.n(n),
    a = i(311907),
    r = i(990078),
    o = i(397927),
    d = i(573648),
    c = i(58149),
    u = i(681819),
    m = i(370480),
    x = i(169869),
    A = i(773669),
    p = i(307600),
    g = i(652215),
    f = i(783419),
    h = i(985018),
    j = i(622376);

function I(e) {
    let l, {
            account: i,
            locale: n,
            userId: s
        } = e,
        a = i.metadata ?? {},
        A = (0, m.An)(a[f.pK.CREATED_AT], n),
        I = d.A.get((0, u.ML)(i.type));
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
                children: [null == (l = I?.getPlatformUserUrl?.(i)) ? (0, t.jsx)(r.m, {
                    overflowOnly: !0,
                    text: i.name,
                    children: (0, t.jsx)(o.Text, {
                        variant: "text-sm/normal",
                        className: j.GW,
                        children: i.name
                    })
                }) : (0, t.jsx)(o.MzZ, {
                    href: l,
                    className: j.Y2,
                    useDefaultUnderlineStyles: !1,
                    "aria-label": I?.name != null ? `${I.name}, ${i.name}, ${h.intl.string(h.t.q5jLJB)}` : `${i.name}, ${h.intl.string(h.t.q5jLJB)}`,
                    onClick: e => {
                        (0, c.zV)(g.HAw.CONNECTED_ACCOUNT_VIEWED, {
                            platform_type: i.type,
                            other_user_id: s
                        }), (0, p.h)({
                            href: l,
                            trusted: I?.type !== g.fg2.DOMAIN
                        }, e)
                    },
                    children: (0, t.jsxs)("div", {
                        className: j.vi,
                        children: [(0, t.jsx)(r.m, {
                            overflowOnly: !0,
                            text: i.name,
                            children: (0, t.jsx)(o.Text, {
                                variant: "text-sm/normal",
                                className: j.GW,
                                children: i.name
                            })
                        }), (0, t.jsx)(o.I9m, {
                            size: "xs",
                            color: "currentColor"
                        })]
                    })
                }), null != A && (0, t.jsx)(o.Text, {
                    variant: "text-xs/normal",
                    children: h.intl.format(h.t["9rfonh"], {
                        date: A
                    })
                })]
            }), (0, t.jsx)("div", {
                className: j.yu,
                children: i.type === g.fg2.REDDIT ? (0, x.xE)(a) : i.type === g.fg2.STEAM ? (0, x.dy)(a) : i.type === g.fg2.BLUESKY || i.type === g.fg2.MASTODON || i.type === g.fg2.TWITTER ? (0, x.ED)(a) : i.type === g.fg2.PAYPAL ? (0, x.gZ)(a) : i.type === g.fg2.EBAY ? (0, x.ub)(a) : i.type === g.fg2.TIKTOK ? (0, x.HU)(a) : null
            })]
        })]
    })
}

function v(e) {
    let {
        connections: l,
        userId: i,
        className: n
    } = e, r = (0, a.bG)([A.default], () => A.default.locale);
    return 0 === l.length ? null : (0, t.jsx)("ul", {
        className: s()(j.kL, n),
        children: l.map(e => (0, t.jsx)(I, {
            account: e,
            userId: i,
            locale: r
        }, `${e.type}:${e.id}`))
    })
}