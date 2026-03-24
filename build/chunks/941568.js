/** chunk id: 941568 params = (module,exports,require) **/
n.d(t, {
    A: () => E
}), n(323874), n(14289), n(35956);
var a = n(627968),
    l = n(64700),
    i = n(503698),
    r = n.n(i),
    s = n(397927),
    o = n(73153),
    c = n(607470),
    d = n(720462),
    u = n(46054),
    m = n(378570),
    x = n(597676),
    _ = n(305080),
    f = n(954506),
    g = n(652215),
    h = n(985018),
    p = n(809222),
    v = n(206314);

function A(e, t) {
    return u.A.parse(e, !0, {
        allowHeading: !0,
        allowList: !0,
        allowLinks: !0,
        channelId: t
    })
}

function j(e) {
    let {
        variant: t,
        message: n,
        channelId: i,
        onCardClick: o
    } = e, [d, u] = l.useState(!1), m = null != n.mediaUrl, x = "video" === n.mediaType, _ = "main" === t, f = l.useCallback(() => u(!0), []), g = l.useCallback(() => o(n.id), [o, n.id]);
    return (0, a.jsxs)(s.DUT, {
        className: _ ? p.cG : p.IU,
        onClick: g,
        children: [m && (0, a.jsxs)("div", {
            className: _ ? p._v : p.eZ,
            children: [x ? (0, a.jsx)(c.A, {
                src: n.mediaUrl,
                poster: function(e) {
                    try {
                        let t = new URL(e);
                        return t.searchParams.append("format", "webp"), t.toString()
                    } catch {
                        return
                    }
                }(n.mediaUrl),
                className: r()(_ ? p.fk : p.v, d ? p.RT : p.YC),
                muted: !0,
                preload: "metadata",
                playsInline: !0,
                onLoadedData: f
            }) : (0, a.jsx)("img", {
                src: n.mediaUrl,
                className: r()(_ ? p.fk : p.v, d ? p.RT : p.YC),
                alt: "",
                onLoad: f
            }), !d && (0, a.jsx)("div", {
                className: p.ns,
                children: (0, a.jsx)(s.y$y, {
                    type: s.tVU.SPINNING_CIRCLE,
                    className: p.u1
                })
            })]
        }), (0, a.jsxs)("div", {
            className: _ ? p.GT : p.s4,
            children: [null != n.title && (0, a.jsx)(s.Heading, {
                variant: _ ? "heading-md/bold" : "heading-sm/bold",
                color: "text-strong",
                className: _ ? p.KX : p._N,
                children: A(n.title, i)
            }), n.body.length > 0 && (0, a.jsx)("div", {
                className: r()(p.h_, _ ? p.My : p.Gd, v.PT),
                children: A(n.body, i)
            })]
        })]
    })
}

function E(e) {
    let {
        detectedGame: t
    } = e, n = t.announcementsChannelId, {
        officialInvite: i,
        isMember: r,
        closeModal: c
    } = (0, _.c)(), {
        messages: u,
        loading: v
    } = (0, x.A)(n), A = l.useCallback(() => {
        null != i && (c(), o.h.dispatch({
            type: "INVITE_MODAL_OPEN",
            invite: i,
            code: i.code,
            context: g.BRT.APP
        }))
    }, [c, i]), E = l.useCallback(() => {
        r && null != n ? (c(), (0, m.iN)(n)) : A()
    }, [c, r, A, n]), I = l.useCallback(e => {
        r && null != n ? (c(), (0, m.ci)(n, e)) : A()
    }, [c, r, A, n]);
    if (null == n || 0 === u.length) return v ? (0, a.jsx)(f.A, {
        title: h.intl.string(h.t.B0BV3Y),
        children: (0, a.jsx)("div", {
            className: p.g4,
            children: (0, a.jsx)(s.y$y, {
                type: s.tVU.SPINNING_CIRCLE,
                className: p.u1
            })
        })
    }) : null;
    let C = 2 !== u.length,
        N = C ? u[0] : null,
        b = C ? u.slice(1) : u;
    return (0, a.jsx)(f.A, {
        title: h.intl.string(h.t.B0BV3Y),
        onClickViewAll: E,
        children: (0, a.jsxs)("div", {
            className: p.f3,
            children: [null != N && (0, a.jsx)(j, {
                variant: "main",
                message: N,
                channelId: n,
                onCardClick: I
            }), b.length > 0 && (0, a.jsx)(d.A, {
                gap: "sm",
                className: p.jG,
                children: b.map(e => (0, a.jsx)(j, {
                    variant: "small",
                    message: e,
                    channelId: n,
                    onCardClick: I
                }, e.id))
            })]
        })
    })
}