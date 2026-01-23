/** Chunk was on 85157 **/
/** chunk id: 235640, original params: t,e,n (module,exports,require) **/
n.d(e, {
    A: () => c
});
var i = n(627968);
n(64700);
var l = n(311907),
    o = n(397927),
    r = n(565645),
    a = n(508675),
    s = n(824510);

function c(t) {
    let {
        reactionEmoji: e
    } = t, n = (0, l.bG)([a.Ay], () => (null == e ? void 0 : e.emojiId) != null ? a.Ay.getUsableCustomEmojiById(e.emojiId) : null);
    return (0, i.jsxs)("div", {
        className: s.kL,
        children: [(0, i.jsxs)("div", {
            className: s.rf,
            children: [(0, i.jsxs)("div", {
                className: s.lm,
                children: [(0, i.jsx)(d, {
                    width: "100%",
                    marginBottom: 8
                }), (0, i.jsx)(d, {
                    width: "80%",
                    marginBottom: 16
                }), (0, i.jsx)(d, {
                    width: "50%",
                    marginBottom: 8
                }), (0, i.jsx)(d, {
                    width: "60%",
                    marginBottom: 16
                })]
            }), (0, i.jsx)("div", {
                className: s.oW
            })]
        }), (0, i.jsxs)("div", {
            className: s.qr,
            children: [(0, i.jsxs)("div", {
                className: s.mJ,
                children: [null != e ? (0, i.jsx)(r.A, {
                    className: s.Ys,
                    emojiId: e.emojiId,
                    emojiName: e.emojiName,
                    animated: !!(null == n ? void 0 : n.animated)
                }) : (0, i.jsx)(o.nm2, {
                    size: "sm",
                    color: "currentColor",
                    className: s.Ys
                }), (0, i.jsx)(o.Text, {
                    variant: "text-sm/semibold",
                    color: "interactive-text-default",
                    children: 17
                })]
            }), (0, i.jsx)(d, {
                width: "24px",
                marginBottom: 0
            }), (0, i.jsx)("div", {
                className: s.Om
            }), (0, i.jsx)(d, {
                width: "24px",
                marginBottom: 0
            })]
        })]
    })
}

function d(t) {
    let {
        width: e,
        marginBottom: n
    } = t;
    return (0, i.jsx)("div", {
        className: s.E3,
        style: {
            width: e,
            marginBottom: n
        }
    })
}