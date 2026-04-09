/** chunk id: 941568 params = (module,exports,require) **/
n.d(t, {
    A: () => S
});
var a = n(627968),
    l = n(64700),
    i = n(503698),
    r = n.n(i),
    s = n(621466),
    o = n(649658),
    c = n(397927),
    d = n(688810),
    u = n(951707),
    m = n(46054),
    x = n(405269),
    h = n(890060),
    f = n(60465),
    g = n(409626),
    p = n(21091),
    _ = n(385064),
    v = n(305080),
    A = n(954506),
    b = n(652215),
    E = n(985018),
    j = n(95225),
    I = n(782691);

function C(e, t) {
    return m.A.parse(e, !0, {
        allowHeading: !0,
        allowList: !0,
        allowLinks: !0,
        channelId: t
    })
}

function N(e) {
    let {
        variant: t,
        message: n,
        channelId: i,
        onCardClick: d
    } = e, [u, m] = l.useState(!1), f = "main" === t, g = l.useCallback(() => m(!0), []), p = l.useCallback(e => {
        if (!((0, s.vq)(e.target, HTMLAnchorElement) || (0, s.vq)(e.target, HTMLSpanElement) && (0, s.vq)(e.target.parentElement, HTMLAnchorElement))) return d(n.id)
    }, [d, n.id]), _ = n.media?.width != null && n.media?.height != null ? n.media.width / n.media.height : 16 / 9, v = n.media?.proxyUrl ?? n.media?.url, A = (null != v ? (0, h.V)(v) : null) ?? v;
    return (0, a.jsxs)(c.DUT, {
        className: f ? j.cG : j.IU,
        onClick: p,
        children: [null != n.media && null != A && (0, a.jsx)("div", {
            className: f ? j._v : j.eZ,
            children: (0, a.jsx)(o.y, {
                readyState: u ? b.Rv1.READY : b.Rv1.LOADING,
                aspectRatio: _,
                placeholder: n.media.placeholder,
                placeholderVersion: n.media.placeholderVersion,
                placeholderStyle: {
                    width: "100%",
                    height: "100%",
                    objectFit: "cover"
                },
                children: (0, a.jsx)("img", {
                    src: A,
                    className: f ? j.fk : j.v,
                    alt: "",
                    draggable: !1,
                    onLoad: g
                })
            })
        }), (0, a.jsxs)("div", {
            className: f ? j.GT : j.s4,
            children: [null != n.title && (0, a.jsx)(c.Heading, {
                variant: "heading-md/bold",
                color: "text-strong",
                className: f ? j.KX : j._N,
                children: C(n.title, i)
            }), n.body.length > 0 && (0, a.jsx)("div", {
                className: r()(j.h_, f ? j.My : j.Gd, I.PT),
                children: C(n.body, i)
            }), (0, a.jsxs)("div", {
                className: j.ov,
                children: [(0, a.jsx)(c.Text, {
                    variant: "text-xs/medium",
                    color: "text-muted",
                    children: (0, x.i$)(new Date(n.timestamp), "LL")
                }), n.reactionCount > 0 && (0, a.jsxs)("div", {
                    className: j.a5,
                    children: [(0, a.jsx)(c.nm2, {
                        size: "xs",
                        color: "currentColor"
                    }), (0, a.jsx)(c.Text, {
                        variant: "text-xs/medium",
                        color: "text-muted",
                        children: new Intl.NumberFormat(E.intl.currentLocale).format(n.reactionCount)
                    })]
                })]
            })]
        })]
    })
}

function S(e) {
    let {
        gameId: t,
        trackAction: n
    } = e, {
        analyticsLocations: i
    } = (0, d.Ay)(), {
        officialInvite: r,
        closeModal: s
    } = (0, v.c)(), {
        messages: o,
        guildId: c,
        channelId: m
    } = (0, p.A)(t), x = l.useCallback(() => {
        let e = r?.guild?.id ?? c;
        null != e && null != m && (n(g.Ws.Announcements), f.A.setGameProfilePendingReturn({
            gameId: t,
            channelId: m
        }), s(), (0, _.A)({
            invite: r,
            guildId: e,
            channelId: m,
            analyticsLocationStack: i
        }))
    }, [n, s, r, c, m, i, t]), h = l.useCallback(e => {
        let a = r?.guild?.id ?? c;
        null != a && null != m && (n(g.Ws.AnnouncementsItem), f.A.setGameProfilePendingReturn({
            gameId: t,
            channelId: m
        }), s(), (0, _.A)({
            invite: r,
            guildId: a,
            channelId: m,
            messageId: e,
            analyticsLocationStack: i
        }))
    }, [n, s, r, c, m, i, t]);
    if (null == m || 0 === o.length) return null;
    let b = 2 !== o.length,
        I = b ? o[0] : null,
        C = b ? o.slice(1) : o;
    return (0, a.jsx)(A.A, {
        title: E.intl.string(E.t.B0BV3Y),
        onClickViewAll: x,
        children: (0, a.jsxs)("div", {
            className: j.f3,
            children: [null != I && (0, a.jsx)(N, {
                variant: "main",
                message: I,
                channelId: m,
                onCardClick: h
            }), C.length > 0 && (0, a.jsx)(u.A, {
                gap: 16,
                children: C.map(e => (0, a.jsx)(N, {
                    variant: "small",
                    message: e,
                    channelId: m,
                    onCardClick: h
                }, e.id))
            })]
        })
    })
}