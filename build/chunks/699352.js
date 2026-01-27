/** Chunk was on 92917 **/
/** chunk id: 699352, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => a,
    J: () => s
});
var r = n(627968);
n(64700);
var i = n(21878),
    l = n(756369);

function a(e) {
    let {
        channelMessageProps: {
            message: t,
            channel: n,
            compact: a = !1
        },
        hasSpoilerEmbeds: s,
        hasBailedAst: o,
        handleContextMenu: c,
        isInteracting: u,
        isAutomodBlockedMessage: d,
        isMessageSnapshot: p,
        renderThreadAccessory: m,
        renderSuppressEmbeds: f,
        renderReactions: g,
        forceAddReactions: h,
        disableComponentInteractivity: _,
        className: b
    } = e;
    return d ? null : (0, r.jsx)(i.A, {
        message: t,
        children: (0, r.jsx)(l.Ay, {
            className: b,
            isInteracting: u,
            message: t,
            channel: n,
            compact: a,
            hasSpoilerEmbeds: s,
            hasBailedAst: o,
            isMessageSnapshot: p,
            onMediaItemContextMenu: c,
            renderThreadAccessory: m,
            disableComponentInteractivity: _,
            renderSuppressEmbeds: f,
            forceAddReactions: h,
            renderReactions: g
        })
    })
}

function s(e, t, n) {
    let {
        message: i,
        channel: a,
        compact: s = !1,
        renderThreadAccessory: o,
        disableReactionCreates: c,
        disableReactionUpdates: u
    } = e;
    return (0, r.jsx)(l.OC, {
        message: i,
        channel: a,
        compact: s,
        hasSpoilerEmbeds: t,
        hasBailedAst: n,
        renderThreadAccessory: o,
        disableReactionCreates: c,
        disableReactionUpdates: u
    })
}