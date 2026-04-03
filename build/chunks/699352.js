/** chunk id: 699352 params = (module,exports,require) **/
n.d(t, {
    A: () => s,
    J: () => a
});
var i = n(627968);
n(64700);
var l = n(21878),
    r = n(756369);

function s(e) {
    let {
        channelMessageProps: {
            message: t,
            channel: n,
            compact: s = !1
        },
        hasSpoilerEmbeds: a,
        hasBailedAst: o,
        handleContextMenu: d,
        isInteracting: c,
        isAutomodBlockedMessage: u,
        isMessageSnapshot: m,
        renderThreadAccessory: _,
        renderSuppressEmbeds: h,
        renderReactions: p,
        forceAddReactions: g,
        disableComponentInteractivity: A,
        className: x
    } = e;
    return u ? null : (0, i.jsx)(l.A, {
        message: t,
        children: (0, i.jsx)(r.Ay, {
            className: x,
            isInteracting: c,
            message: t,
            channel: n,
            compact: s,
            hasSpoilerEmbeds: a,
            hasBailedAst: o,
            isMessageSnapshot: m,
            onMediaItemContextMenu: d,
            renderThreadAccessory: _,
            disableComponentInteractivity: A,
            renderSuppressEmbeds: h,
            forceAddReactions: g,
            renderReactions: p
        })
    })
}

function a(e, t, n) {
    let {
        message: l,
        channel: s,
        compact: a = !1,
        renderThreadAccessory: o,
        disableReactionCreates: d,
        disableReactionUpdates: c
    } = e;
    return (0, i.jsx)(r.OC, {
        message: l,
        channel: s,
        compact: a,
        hasSpoilerEmbeds: t,
        hasBailedAst: n,
        renderThreadAccessory: o,
        disableReactionCreates: d,
        disableReactionUpdates: c
    })
}