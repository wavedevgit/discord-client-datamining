/** chunk id: 235640 params = (module,exports,require) **/
i.d(e, {
    A: () => d
});
var n = i(627968);
i(64700);
var l = i(311907),
    a = i(397927),
    o = i(565645),
    s = i(508675),
    r = i(500908);

function d(t) {
    let {
        reactionEmoji: e
    } = t, i = (0, l.bG)([s.Ay], () => e?.emojiId != null ? s.Ay.getUsableCustomEmojiById(e.emojiId) : null);
    return (0, n.jsxs)("div", {
        className: r.kL,
        children: [(0, n.jsxs)("div", {
            className: r.rf,
            children: [(0, n.jsxs)("div", {
                className: r.lm,
                children: [(0, n.jsx)(c, {
                    width: "100%",
                    marginBottom: 8
                }), (0, n.jsx)(c, {
                    width: "80%",
                    marginBottom: 16
                }), (0, n.jsx)(c, {
                    width: "50%",
                    marginBottom: 8
                }), (0, n.jsx)(c, {
                    width: "60%",
                    marginBottom: 16
                })]
            }), (0, n.jsx)("div", {
                className: r.oW
            })]
        }), (0, n.jsxs)("div", {
            className: r.qr,
            children: [(0, n.jsxs)("div", {
                className: r.mJ,
                children: [null != e ? (0, n.jsx)(o.A, {
                    className: r.Ys,
                    emojiId: e.emojiId,
                    emojiName: e.emojiName,
                    animated: !!i?.animated
                }) : (0, n.jsx)(a.nm2, {
                    size: "sm",
                    color: "currentColor",
                    className: r.Ys
                }), (0, n.jsx)(a.Text, {
                    variant: "text-sm/semibold",
                    color: "interactive-text-default",
                    children: 17
                })]
            }), (0, n.jsx)(c, {
                width: "24px",
                marginBottom: 0
            }), (0, n.jsx)("div", {
                className: r.Om
            }), (0, n.jsx)(c, {
                width: "24px",
                marginBottom: 0
            })]
        })]
    })
}

function c(t) {
    let {
        width: e,
        marginBottom: i
    } = t;
    return (0, n.jsx)("div", {
        className: r.E3,
        style: {
            width: e,
            marginBottom: i
        }
    })
}