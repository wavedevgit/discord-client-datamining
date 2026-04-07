/** chunk id: 941568 params = (module,exports,require) **/
n.d(t, {
    A: () => N
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
    f = n(409626),
    p = n(21091),
    g = n(385064),
    _ = n(305080),
    v = n(954506),
    A = n(652215),
    j = n(985018),
    E = n(95225),
    b = n(782691);

function C(e, t) {
    return m.A.parse(e, !0, {
        allowHeading: !0,
        allowList: !0,
        allowLinks: !0,
        channelId: t
    })
}

function I(e) {
    let {
        variant: t,
        message: n,
        channelId: i,
        onCardClick: d
    } = e, [u, m] = l.useState(!1), f = "main" === t, p = l.useCallback(() => m(!0), []), g = l.useCallback(e => {
        if (!((0, s.vq)(e.target, HTMLAnchorElement) || (0, s.vq)(e.target, HTMLSpanElement) && (0, s.vq)(e.target.parentElement, HTMLAnchorElement))) return d(n.id)
    }, [d, n.id]), _ = n.media?.width != null && n.media?.height != null ? n.media.width / n.media.height : 16 / 9, v = n.media?.proxyUrl ?? n.media?.url, I = (null != v ? (0, h.V)(v) : null) ?? v;
    return (0, a.jsxs)(c.DUT, {
        className: f ? E.cG : E.IU,
        onClick: g,
        children: [null != n.media && null != I && (0, a.jsx)("div", {
            className: f ? E._v : E.eZ,
            children: (0, a.jsx)(o.y, {
                readyState: u ? A.Rv1.READY : A.Rv1.LOADING,
                aspectRatio: _,
                placeholder: n.media.placeholder,
                placeholderVersion: n.media.placeholderVersion,
                placeholderStyle: {
                    width: "100%",
                    height: "100%",
                    objectFit: "cover"
                },
                children: (0, a.jsx)("img", {
                    src: I,
                    className: f ? E.fk : E.v,
                    alt: "",
                    draggable: !1,
                    onLoad: p
                })
            })
        }), (0, a.jsxs)("div", {
            className: f ? E.GT : E.s4,
            children: [null != n.title && (0, a.jsx)(c.Heading, {
                variant: "heading-md/bold",
                color: "text-strong",
                className: f ? E.KX : E._N,
                children: C(n.title, i)
            }), n.body.length > 0 && (0, a.jsx)("div", {
                className: r()(E.h_, f ? E.My : E.Gd, b.PT),
                children: C(n.body, i)
            }), (0, a.jsxs)("div", {
                className: E.ov,
                children: [(0, a.jsx)(c.Text, {
                    variant: "text-xs/medium",
                    color: "text-muted",
                    children: (0, x.i$)(new Date(n.timestamp), "LL")
                }), n.reactionCount > 0 && (0, a.jsxs)("div", {
                    className: E.a5,
                    children: [(0, a.jsx)(c.nm2, {
                        size: "xs",
                        color: "currentColor"
                    }), (0, a.jsx)(c.Text, {
                        variant: "text-xs/medium",
                        color: "text-muted",
                        children: new Intl.NumberFormat(j.intl.currentLocale).format(n.reactionCount)
                    })]
                })]
            })]
        })]
    })
}

function N(e) {
    let {
        gameId: t,
        trackAction: n
    } = e, {
        analyticsLocations: i
    } = (0, d.Ay)(), {
        officialInvite: r,
        closeModal: s
    } = (0, _.c)(), {
        messages: o,
        guildId: c,
        channelId: m
    } = (0, p.A)(t), x = l.useCallback(() => {
        let e = r?.guild?.id ?? c;
        null != e && (n(f.Ws.Announcements), s(), (0, g.A)({
            invite: r,
            guildId: e,
            channelId: m,
            analyticsLocationStack: i
        }))
    }, [n, s, r, c, m, i]), h = l.useCallback(e => {
        let t = r?.guild?.id ?? c;
        null != t && (n(f.Ws.AnnouncementsItem), s(), (0, g.A)({
            invite: r,
            guildId: t,
            channelId: m,
            messageId: e,
            analyticsLocationStack: i
        }))
    }, [n, s, r, c, m, i]);
    if (null == m || 0 === o.length) return null;
    let A = 2 !== o.length,
        b = A ? o[0] : null,
        C = A ? o.slice(1) : o;
    return (0, a.jsx)(v.A, {
        title: j.intl.string(j.t.B0BV3Y),
        onClickViewAll: x,
        children: (0, a.jsxs)("div", {
            className: E.f3,
            children: [null != b && (0, a.jsx)(I, {
                variant: "main",
                message: b,
                channelId: m,
                onCardClick: h
            }), C.length > 0 && (0, a.jsx)(u.A, {
                gap: 16,
                children: C.map(e => (0, a.jsx)(I, {
                    variant: "small",
                    message: e,
                    channelId: m,
                    onCardClick: h
                }, e.id))
            })]
        })
    })
}