/** Chunk was on web.js **/
/** chunk id: 659859, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    HN: () => O,
    _W: () => A,
    _x: () => v
}), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(934551),
    l = n(990078),
    c = n(397927),
    u = n(565645),
    d = n(763754),
    f = n(930101),
    p = n(888675),
    _ = n(649963),
    h = n(486020),
    m = n(203982),
    g = n(395031),
    E = n(652215),
    y = n(985018),
    b = n(696007);

function O(e) {
    let {
        message: t,
        rendered: n
    } = e;
    return null == (0, g.Ys)(t.content) ? y.intl.format(y.t.k6Jc9Y, {
        username: null,
        usernameHook: () => null
    }) : y.intl.format(y.t.IihHB0, {
        emojiPreview: n,
        emojiName: null,
        username: null,
        usernameHook: () => null
    })
}

function v(e) {
    let {
        message: t,
        className: n
    } = e, [a, o] = i.useState(!1), d = t.getChannelId(), f = (0, g.Ys)(t.content), p = i.useCallback(() => {
        null != f && (0, _.BB)(d, t.id, {
            id: f.id,
            name: f.name
        }, _.qN.MESSAGE)
    }, [d, f, t.id]);
    return null == f ? null : (0, r.jsx)(l.m, {
        asContainer: !0,
        "aria-label": !1,
        __unsupportedReactNodeAsText: (0, r.jsx)(u.A, {
            emojiName: f.name,
            size: "jumbo",
            emojiId: f.id,
            animated: f.animated,
            isInteracting: !0,
            channelId: d,
            messageId: t.id
        }),
        children: (0, r.jsx)(c.DUT, {
            className: s()(n, b.qx),
            onClick: p,
            onMouseEnter: () => {
                o(!0)
            },
            onMouseLeave: () => {
                o(!1)
            },
            children: (0, r.jsx)(c.Text, {
                variant: "text-sm/semibold",
                color: "text-subtle",
                className: b.Ic,
                children: y.intl.format(y.t.z5Rnl8, {
                    renderedEmoji: (0, r.jsx)(u.A, {
                        emojiName: f.name,
                        size: "default",
                        emojiId: f.id,
                        animated: f.animated,
                        isInteracting: a,
                        channelId: d,
                        messageId: t.id,
                        className: b.ti
                    })
                })
            })
        })
    })
}

function A(e) {
    let {
        message: t,
        compact: n,
        usernameHook: a
    } = e, s = t.content, [l, u] = i.useState(!1), _ = (0, d.Ay)(t), O = a(_), v = (0, g.Ys)(s), A = i.useCallback(() => {
        null != v && m._.dispatchToLastSubscribed(E.jej.INSERT_TEXT, {
            plainText: ":".concat(v.name, ":"),
            rawText: s,
            addSpace: !0
        })
    }, [v, s]), I = i.useMemo(() => null == v ? null : {
        src: h.Ay.getEmojiURL({
            id: v.id,
            animated: v.animated,
            size: 48
        }),
        emojiId: v.id,
        name: ":".concat(v.name, ":"),
        animated: v.animated
    }, [v]);
    return (0, r.jsx)(p.A, {
        iconNode: (0, r.jsx)(o.ReactionIcon, {
            size: "refresh_sm",
            color: "currentColor"
        }),
        iconContainerClassName: b.zc,
        timestamp: t.timestamp,
        compact: n,
        contentClassName: b.Qs,
        children: (0, r.jsx)("span", {
            children: null == v || null == I ? y.intl.format(y.t.k6Jc9Y, {
                username: _.nick,
                usernameHook: O
            }) : y.intl.format(y.t.IihHB0, {
                username: _.nick,
                usernameHook: O,
                emojiPreview: (0, r.jsx)(f.X, {
                    node: I,
                    isInteracting: l
                }),
                emojiName: (0, r.jsx)(c.DUT, {
                    className: b.hX,
                    tag: "span",
                    onClick: A,
                    onMouseEnter: () => u(!0),
                    onMouseLeave: () => u(!1),
                    children: (0, r.jsx)(c.Text, {
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