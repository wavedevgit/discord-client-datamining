/** chunk id: 941568 params = (module,exports,require) **/
n.d(t, {
    A: () => I
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
    g = n(954506),
    f = n(652215),
    p = n(985018),
    h = n(809222),
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
    } = e, [d, u] = l.useState(!1), m = null != n.mediaUrl, x = "video" === n.mediaType, _ = "main" === t, g = l.useCallback(() => u(!0), []), f = l.useCallback(() => o(n.id), [o, n.id]);
    return (0, a.jsxs)(s.DUT, {
        className: _ ? h.cG : h.IU,
        onClick: f,
        children: [m && (0, a.jsxs)("div", {
            className: _ ? h._v : h.eZ,
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
                className: r()(_ ? h.fk : h.v, d ? h.RT : h.YC),
                muted: !0,
                preload: "metadata",
                playsInline: !0,
                onLoadedData: g
            }) : (0, a.jsx)("img", {
                src: n.mediaUrl,
                className: r()(_ ? h.fk : h.v, d ? h.RT : h.YC),
                alt: "",
                onLoad: g
            }), !d && (0, a.jsx)("div", {
                className: h.ns,
                children: (0, a.jsx)(s.y$y, {
                    type: s.tVU.SPINNING_CIRCLE,
                    className: h.u1
                })
            })]
        }), (0, a.jsxs)("div", {
            className: _ ? h.GT : h.s4,
            children: [null != n.title && (0, a.jsx)(s.Heading, {
                variant: _ ? "heading-md/bold" : "heading-sm/bold",
                color: "text-strong",
                className: _ ? h.KX : h._N,
                children: A(n.title, i)
            }), n.body.length > 0 && (0, a.jsx)("div", {
                className: r()(h.h_, _ ? h.My : h.Gd, v.PT),
                children: A(n.body, i)
            })]
        })]
    })
}

function I(e) {
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
            context: f.BRT.APP
        }))
    }, [c, i]), I = l.useCallback(() => {
        r && null != n ? (c(), (0, m.iN)(n)) : A()
    }, [c, r, A, n]), b = l.useCallback(e => {
        r && null != n ? (c(), (0, m.ci)(n, e)) : A()
    }, [c, r, A, n]);
    if (null == n || 0 === u.length) return v ? (0, a.jsx)(g.A, {
        title: p.intl.string(p.t.B0BV3Y),
        children: (0, a.jsx)("div", {
            className: h.g4,
            children: (0, a.jsx)(s.y$y, {
                type: s.tVU.SPINNING_CIRCLE,
                className: h.u1
            })
        })
    }) : null;
    let C = 2 !== u.length,
        E = C ? u[0] : null,
        N = C ? u.slice(1) : u;
    return (0, a.jsx)(g.A, {
        title: p.intl.string(p.t.B0BV3Y),
        onClickViewAll: I,
        children: (0, a.jsxs)("div", {
            className: h.f3,
            children: [null != E && (0, a.jsx)(j, {
                variant: "main",
                message: E,
                channelId: n,
                onCardClick: b
            }), N.length > 0 && (0, a.jsx)(d.A, {
                gap: "sm",
                className: h.jG,
                children: N.map(e => (0, a.jsx)(j, {
                    variant: "small",
                    message: e,
                    channelId: n,
                    onCardClick: b
                }, e.id))
            })]
        })
    })
}