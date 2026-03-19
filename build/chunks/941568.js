/** chunk id: 941568 params = (module,exports,require) **/
n.d(t, {
    A: () => E
}), n(323874), n(14289), n(35956);
var a = n(627968),
    l = n(64700),
    i = n(503698),
    r = n.n(i),
    s = n(397927),
    c = n(73153),
    o = n(607470),
    d = n(720462),
    u = n(46054),
    m = n(378570),
    x = n(597676),
    f = n(305080),
    h = n(954506),
    g = n(652215),
    p = n(985018),
    _ = n(184868),
    v = n(830412);

function j(e, t) {
    return u.A.parse(e, !0, {
        allowHeading: !0,
        allowList: !0,
        allowLinks: !0,
        channelId: t
    })
}

function A(e) {
    let {
        variant: t,
        message: n,
        channelId: i,
        onCardClick: c
    } = e, [d, u] = l.useState(!1), m = null != n.mediaUrl, x = "video" === n.mediaType, f = "main" === t, h = l.useCallback(() => u(!0), []), g = l.useCallback(() => c(n.id), [c, n.id]);
    return (0, a.jsxs)(s.DUT, {
        className: f ? _.cG : _.IU,
        onClick: g,
        children: [m && (0, a.jsxs)("div", {
            className: f ? _._v : _.eZ,
            children: [x ? (0, a.jsx)(o.A, {
                src: n.mediaUrl,
                poster: function(e) {
                    try {
                        let t = new URL(e);
                        return t.searchParams.append("format", "webp"), t.toString()
                    } catch {
                        return
                    }
                }(n.mediaUrl),
                className: r()(f ? _.fk : _.v, d ? _.RT : _.YC),
                muted: !0,
                preload: "metadata",
                playsInline: !0,
                onLoadedData: h
            }) : (0, a.jsx)("img", {
                src: n.mediaUrl,
                className: r()(f ? _.fk : _.v, d ? _.RT : _.YC),
                alt: "",
                onLoad: h
            }), !d && (0, a.jsx)("div", {
                className: _.ns,
                children: (0, a.jsx)(s.y$y, {
                    type: s.tVU.SPINNING_CIRCLE,
                    className: _.u1
                })
            })]
        }), (0, a.jsxs)("div", {
            className: f ? _.GT : _.s4,
            children: [null != n.title && (0, a.jsx)(s.Heading, {
                variant: f ? "heading-md/bold" : "heading-sm/bold",
                color: "text-strong",
                className: f ? _.KX : _._N,
                children: j(n.title, i)
            }), n.body.length > 0 && (0, a.jsx)("div", {
                className: r()(_.h_, f ? _.My : _.Gd, v.PT),
                children: j(n.body, i)
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
        closeModal: o
    } = (0, f.c)(), {
        messages: u,
        loading: v
    } = (0, x.A)(n), j = l.useCallback(() => {
        null != i && (o(), c.h.dispatch({
            type: "INVITE_MODAL_OPEN",
            invite: i,
            code: i.code,
            context: g.BRT.APP
        }))
    }, [o, i]), E = l.useCallback(() => {
        r && null != n ? (o(), (0, m.iN)(n)) : j()
    }, [o, r, j, n]), I = l.useCallback(e => {
        r && null != n ? (o(), (0, m.ci)(n, e)) : j()
    }, [o, r, j, n]);
    if (null == n || 0 === u.length) return v ? (0, a.jsx)(h.A, {
        title: p.intl.string(p.t.B0BV3Y),
        children: (0, a.jsx)("div", {
            className: _.g4,
            children: (0, a.jsx)(s.y$y, {
                type: s.tVU.SPINNING_CIRCLE,
                className: _.u1
            })
        })
    }) : null;
    let b = 2 !== u.length,
        N = b ? u[0] : null,
        C = b ? u.slice(1) : u;
    return (0, a.jsx)(h.A, {
        title: p.intl.string(p.t.B0BV3Y),
        onClickViewAll: E,
        children: (0, a.jsxs)("div", {
            className: _.f3,
            children: [null != N && (0, a.jsx)(A, {
                variant: "main",
                message: N,
                channelId: n,
                onCardClick: I
            }), C.length > 0 && (0, a.jsx)(d.A, {
                gap: "sm",
                className: _.jG,
                children: C.map(e => (0, a.jsx)(A, {
                    variant: "small",
                    message: e,
                    channelId: n,
                    onCardClick: I
                }, e.id))
            })]
        })
    })
}