/** chunk id: 908247 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => u
});
var l = n(627968);
n(64700);
var i = n(311907),
    s = n(17447),
    r = n(256331),
    a = n(736339),
    o = n(627168);

function u(e) {
    let {
        channelId: t,
        messageId: n
    } = e, u = s.L.useConfig({
        location: "message_header"
    }).enabled, c = (0, i.bG)([a.A, r.A], () => u && r.A.isHighlightingEnabled() ? a.A.getMessageModerationLabel(t, n) : null, [t, n, u]);
    return null == c || "" === c ? null : (0, l.jsx)("span", {
        className: o.R,
        children: c
    })
}