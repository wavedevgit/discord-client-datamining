/** chunk id: 699352 params = (module,exports,require) **/
n.d(t, {
    A: () => l,
    J: () => s
});
var i = n(627968);
n(64700);
var a = n(21878),
    r = n(756369);

function l(e) {
    let {
        channelMessageProps: {
            message: t,
            channel: n,
            compact: l = !1
        },
        hasSpoilerEmbeds: s,
        hasBailedAst: o,
        handleContextMenu: d,
        isInteracting: c,
        isAutomodBlockedMessage: u,
        isMessageSnapshot: _,
        renderThreadAccessory: m,
        renderSuppressEmbeds: h,
        renderReactions: p,
        forceAddReactions: g,
        disableComponentInteractivity: A,
        className: x
    } = e;
    return u ? null : (0, i.jsx)(a.A, {
        message: t,
        children: (0, i.jsx)(r.Ay, {
            className: x,
            isInteracting: c,
            message: t,
            channel: n,
            compact: l,
            hasSpoilerEmbeds: s,
            hasBailedAst: o,
            isMessageSnapshot: _,
            onMediaItemContextMenu: d,
            renderThreadAccessory: m,
            disableComponentInteractivity: A,
            renderSuppressEmbeds: h,
            forceAddReactions: g,
            renderReactions: p
        })
    })
}

function s(e, t, n) {
    let {
        message: a,
        channel: l,
        compact: s = !1,
        renderThreadAccessory: o,
        disableReactionCreates: d,
        disableReactionUpdates: c
    } = e;
    return (0, i.jsx)(r.OC, {
        message: a,
        channel: l,
        compact: s,
        hasSpoilerEmbeds: t,
        hasBailedAst: n,
        renderThreadAccessory: o,
        disableReactionCreates: d,
        disableReactionUpdates: c
    })
}