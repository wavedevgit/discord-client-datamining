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
    d = n(573648),
    c = n(58149),
    u = n(681819),
    p = n(370480),
    f = n(169869),
    m = n(532197),
    A = n(773669),
    x = n(307600),
    g = n(652215),
    j = n(783419),
    h = n(985018),
    b = n(882119);

function v(e) {
    var t, n;
    let i, {
            account: r,
            locale: s,
            userId: A
        } = e,
        v = null != (t = r.metadata) ? t : {},
        I = (0, p.An)(v[j.pK.CREATED_AT], s),
        y = d.A.get((0, u.ML)(r.type));
    return (0, l.jsxs)("li", {
        className: b.FI,
        children: [(0, l.jsx)(o.m, {
            __unsupportedReactNodeAsText: null == y ? void 0 : y.name,
            children: (0, l.jsx)("div", {
                className: b.k_,
                children: (0, l.jsx)("img", {
                    alt: h.intl.formatToPlainString(h.t.rtm15P, {
                        name: null == y ? void 0 : y.name
                    }),
                    className: b.tV,
                    src: null == y ? void 0 : y.icon.lightPNG
                })
            })
        }), (0, l.jsxs)("div", {
            className: b.Hd,
            children: [(0, l.jsxs)("div", {
                children: [null == (i = null == y || null == (n = y.getPlatformUserUrl) ? void 0 : n.call(y, r)) ? (0, l.jsx)(o.m, {
                    overflowOnly: !0,
                    text: r.name,
                    children: (0, l.jsx)(a.Text, {
                        variant: "text-sm/normal",
                        className: b.GW,
                        children: r.name
                    })
                }) : (0, l.jsx)(a.MzZ, {
                    href: i,
                    className: b.Y2,
                    useDefaultUnderlineStyles: !1,
                    "aria-label": (null == y ? void 0 : y.name) != null ? "".concat(y.name, ", ").concat(r.name, ", ").concat(h.intl.string(h.t.q5jLJB)) : "".concat(r.name, ", ").concat(h.intl.string(h.t.q5jLJB)),
                    onClick: e => {
                        (0, c.zV)(g.HAw.CONNECTED_ACCOUNT_VIEWED, {
                            platform_type: r.type,
                            other_user_id: A
                        }), (0, x.h)({
                            href: i,
                            trusted: (null == y ? void 0 : y.type) !== g.fg2.DOMAIN
                        }, e)
                    },
                    children: (0, l.jsxs)("div", {
                        className: b.vi,
                        children: [(0, l.jsx)(o.m, {
                            overflowOnly: !0,
                            text: r.name,
                            children: (0, l.jsx)(a.Text, {
                                variant: "text-sm/normal",
                                className: b.GW,
                                children: r.name
                            })
                        }), (0, l.jsx)(m.A, {
                            className: b.E4,
                            direction: m.A.Directions.RIGHT
                        })]
                    })
                }), null != I && (0, l.jsx)(a.Text, {
                    variant: "text-xs/normal",
                    children: h.intl.format(h.t["9rfonh"], {
                        date: I
                    })
                })]
            }), (0, l.jsx)("div", {
                className: b.yu,
                children: r.type === g.fg2.REDDIT ? (0, f.xE)(v) : r.type === g.fg2.STEAM ? (0, f.dy)(v) : r.type === g.fg2.BLUESKY || r.type === g.fg2.MASTODON || r.type === g.fg2.TWITTER ? (0, f.ED)(v) : r.type === g.fg2.PAYPAL ? (0, f.gZ)(v) : r.type === g.fg2.EBAY ? (0, f.ub)(v) : r.type === g.fg2.TIKTOK ? (0, f.HU)(v) : null
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
        className: r()(b.kL, i),
        children: t.map(e => (0, l.jsx)(v, {
            account: e,
            userId: n,
            locale: o
        }, "".concat(e.type, ":").concat(e.id)))
    })
}