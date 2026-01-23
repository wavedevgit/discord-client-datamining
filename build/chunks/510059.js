/** Chunk was on 64228 **/
/** chunk id: 510059, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => I
});
var l = n(627968);
n(64700);
var i = n(503698),
    r = n.n(i),
    s = n(311907),
    o = n(990078),
    a = n(397927),
    c = n(573648),
    d = n(58149),
    u = n(681819),
    p = n(370480),
    m = n(169869),
    f = n(532197),
    A = n(773669),
    x = n(307600),
    j = n(652215),
    h = n(783419),
    g = n(985018),
    v = n(882119);

function b(e) {
    var t, n;
    let i, {
            account: r,
            locale: s,
            userId: A
        } = e,
        b = null != (t = r.metadata) ? t : {},
        I = (0, p.An)(b[h.pK.CREATED_AT], s),
        y = c.A.get((0, u.ML)(r.type));
    return (0, l.jsxs)("li", {
        className: v.FI,
        children: [(0, l.jsx)(o.m, {
            __unsupportedReactNodeAsText: null == y ? void 0 : y.name,
            children: (0, l.jsx)("div", {
                className: v.k_,
                children: (0, l.jsx)("img", {
                    alt: g.intl.formatToPlainString(g.t.rtm15P, {
                        name: null == y ? void 0 : y.name
                    }),
                    className: v.tV,
                    src: null == y ? void 0 : y.icon.lightPNG
                })
            })
        }), (0, l.jsxs)("div", {
            className: v.Hd,
            children: [(0, l.jsxs)("div", {
                children: [null == (i = null == y || null == (n = y.getPlatformUserUrl) ? void 0 : n.call(y, r)) ? (0, l.jsx)(o.m, {
                    overflowOnly: !0,
                    text: r.name,
                    children: (0, l.jsx)(a.Text, {
                        variant: "text-sm/normal",
                        className: v.GW,
                        children: r.name
                    })
                }) : (0, l.jsx)(a.MzZ, {
                    href: i,
                    className: v.Y2,
                    useDefaultUnderlineStyles: !1,
                    "aria-label": (null == y ? void 0 : y.name) != null ? "".concat(y.name, ", ").concat(r.name, ", ").concat(g.intl.string(g.t.q5jLJB)) : "".concat(r.name, ", ").concat(g.intl.string(g.t.q5jLJB)),
                    onClick: e => {
                        (0, d.zV)(j.HAw.CONNECTED_ACCOUNT_VIEWED, {
                            platform_type: r.type,
                            other_user_id: A
                        }), (0, x.h)({
                            href: i,
                            trusted: (null == y ? void 0 : y.type) !== j.fg2.DOMAIN
                        }, e)
                    },
                    children: (0, l.jsxs)("div", {
                        className: v.vi,
                        children: [(0, l.jsx)(o.m, {
                            overflowOnly: !0,
                            text: r.name,
                            children: (0, l.jsx)(a.Text, {
                                variant: "text-sm/normal",
                                className: v.GW,
                                children: r.name
                            })
                        }), (0, l.jsx)(f.A, {
                            className: v.E4,
                            direction: f.A.Directions.RIGHT
                        })]
                    })
                }), null != I && (0, l.jsx)(a.Text, {
                    variant: "text-xs/normal",
                    children: g.intl.format(g.t["9rfonh"], {
                        date: I
                    })
                })]
            }), (0, l.jsx)("div", {
                className: v.yu,
                children: r.type === j.fg2.REDDIT ? (0, m.xE)(b) : r.type === j.fg2.STEAM ? (0, m.dy)(b) : r.type === j.fg2.BLUESKY || r.type === j.fg2.MASTODON || r.type === j.fg2.TWITTER ? (0, m.ED)(b) : r.type === j.fg2.PAYPAL ? (0, m.gZ)(b) : r.type === j.fg2.EBAY ? (0, m.ub)(b) : r.type === j.fg2.TIKTOK ? (0, m.HU)(b) : null
            })]
        })]
    })
}

function I(e) {
    let {
        connections: t,
        userId: n,
        className: i
    } = e, o = (0, s.bG)([A.default], () => A.default.locale);
    return 0 === t.length ? null : (0, l.jsx)("ul", {
        className: r()(v.kL, i),
        children: t.map(e => (0, l.jsx)(b, {
            account: e,
            userId: n,
            locale: o
        }, "".concat(e.type, ":").concat(e.id)))
    })
}