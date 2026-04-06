/** chunk id: 699352 params = (module,exports,require) **/
n.d(t, {
    A: () => a,
    J: () => r
});
var i = n(627968);
n(64700);
var l = n(21878),
    s = n(756369);

function a(e) {
    let {
        channelMessageProps: {
            message: t,
            channel: n,
            compact: a = !1
        },
        hasSpoilerEmbeds: r,
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
    return u ? null : (0, i.jsx)(l.A, {
        message: t,
        children: (0, i.jsx)(s.Ay, {
            className: x,
            isInteracting: c,
            message: t,
            channel: n,
            compact: a,
            hasSpoilerEmbeds: r,
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

function r(e, t, n) {
    let {
        message: l,
        channel: a,
        compact: r = !1,
        renderThreadAccessory: o,
        disableReactionCreates: d,
        disableReactionUpdates: c
    } = e;
    return (0, i.jsx)(s.OC, {
        message: l,
        channel: a,
        compact: r,
        hasSpoilerEmbeds: t,
        hasBailedAst: n,
        renderThreadAccessory: o,
        disableReactionCreates: d,
        disableReactionUpdates: c
    })
}