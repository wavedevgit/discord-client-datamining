/** chunk id: 659859, original params: e,s,t (module,exports,require) **/
t.d(s, {
    HN: () => f,
    _W: () => E,
    _x: () => v
}), t(896048);
var n = t(627968),
    l = t(64700),
    a = t(503698),
    i = t.n(a),
    r = t(934551),
    o = t(990078),
    c = t(397927),
    u = t(565645),
    m = t(763754),
    d = t(930101),
    h = t(888675),
    g = t(649963),
    p = t(486020),
    j = t(203982),
    A = t(395031),
    x = t(652215),
    N = t(985018),
    C = t(696007);

function f(e) {
    let {
        message: s,
        rendered: t
    } = e;
    return null == (0, A.Ys)(s.content) ? N.intl.format(N.t.k6Jc9Y, {
        username: null,
        usernameHook: () => null
    }) : N.intl.format(N.t.IihHB0, {
        emojiPreview: t,
        emojiName: null,
        username: null,
        usernameHook: () => null
    })
}

function v(e) {
    let {
        message: s,
        className: t
    } = e, [a, r] = l.useState(!1), m = s.getChannelId(), d = (0, A.Ys)(s.content), h = l.useCallback(() => {
        null != d && (0, g.BB)(m, s.id, {
            id: d.id,
            name: d.name
        }, g.qN.MESSAGE)
    }, [m, d, s.id]);
    return null == d ? null : (0, n.jsx)(o.m, {
        asContainer: !0,
        "aria-label": !1,
        __unsupportedReactNodeAsText: (0, n.jsx)(u.A, {
            emojiName: d.name,
            size: "jumbo",
            emojiId: d.id,
            animated: d.animated,
            isInteracting: !0,
            channelId: m,
            messageId: s.id
        }),
        children: (0, n.jsx)(c.DUT, {
            className: i()(t, C.qx),
            onClick: h,
            onMouseEnter: () => {
                r(!0)
            },
            onMouseLeave: () => {
                r(!1)
            },
            children: (0, n.jsx)(c.Text, {
                variant: "text-sm/semibold",
                color: "text-subtle",
                className: C.Ic,
                children: N.intl.format(N.t.z5Rnl8, {
                    renderedEmoji: (0, n.jsx)(u.A, {
                        emojiName: d.name,
                        size: "default",
                        emojiId: d.id,
                        animated: d.animated,
                        isInteracting: a,
                        channelId: m,
                        messageId: s.id,
                        className: C.ti
                    })
                })
            })
        })
    })
}

function E(e) {
    let {
        message: s,
        compact: t,
        usernameHook: a
    } = e, i = s.content, [o, u] = l.useState(!1), g = (0, m.Ay)(s), f = a(g), v = (0, A.Ys)(i), E = l.useCallback(() => {
        null != v && j._.dispatchToLastSubscribed(x.jej.INSERT_TEXT, {
            plainText: ":".concat(v.name, ":"),
            rawText: i,
            addSpace: !0
        })
    }, [v, i]), I = l.useMemo(() => null == v ? null : {
        src: p.Ay.getEmojiURL({
            id: v.id,
            animated: v.animated,
            size: 48
        }),
        emojiId: v.id,
        name: ":".concat(v.name, ":"),
        animated: v.animated
    }, [v]);
    return (0, n.jsx)(h.A, {
        iconNode: (0, n.jsx)(r.ReactionIcon, {
            size: "refresh_sm",
            color: "currentColor"
        }),
        iconContainerClassName: C.zc,
        timestamp: s.timestamp,
        compact: t,
        contentClassName: C.Qs,
        children: (0, n.jsx)("span", {
            children: null == v || null == I ? N.intl.format(N.t.k6Jc9Y, {
                username: g.nick,
                usernameHook: f
            }) : N.intl.format(N.t.IihHB0, {
                username: g.nick,
                usernameHook: f,
                emojiPreview: (0, n.jsx)(d.X, {
                    node: I,
                    isInteracting: o
                }),
                emojiName: (0, n.jsx)(c.DUT, {
                    className: C.hX,
                    tag: "span",
                    onClick: E,
                    onMouseEnter: () => u(!0),
                    onMouseLeave: () => u(!1),
                    children: (0, n.jsx)(c.Text, {
                        tag: "span",
                        variant: "text-md/medium",
                        color: "text-strong",
                        children: ":".concat(v.name, ":")
                    })
                })
            })
        })
    })
}