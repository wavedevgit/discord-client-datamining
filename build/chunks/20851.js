/** chunk id: 20851 params = (module,exports,require) **/
"use strict";
r.d(t, {
    A: () => x
});
var n = r(627968),
    i = r(64700),
    s = r(503698),
    a = r.n(s),
    l = r(384231),
    o = r(903369),
    c = r(491182),
    d = r(538355),
    u = r(699352),
    m = r(715628),
    p = r(752636),
    h = r(480972);
let x = i.memo(function(e) {
    let {
        message: t,
        channel: r,
        compact: s,
        className: x,
        isGroupStart: f,
        hideSimpleEmbedContent: v = !0,
        disableInteraction: g,
        previewGuildId: _,
        preview: A,
        author: j
    } = e, C = _ ?? (0, o.U)(t), N = (0, l.S)((t.editedTimestamp ?? t.timestamp).valueOf()), {
        content: b
    } = (0, d.A)(t, {
        hideSimpleEmbedContent: v,
        allowList: N,
        allowHeading: N,
        allowLinks: !0,
        previewLinkTarget: !0
    }), I = i.useMemo(() => (0, p.A)({
        ...e,
        channel: r,
        guildId: C
    }), [e, r, C]);
    return (0, n.jsx)(c.A, {
        compact: s,
        className: a()(x, {
            [h.iU]: !0,
            [h.HJ]: !s,
            [h._A]: f
        }),
        childrenHeader: I,
        childrenMessageContent: (0, m.A)(e, b),
        childrenAccessories: null != r ? (0, u.J)({
            message: t,
            channel: r,
            compact: s
        }, !1, !1) : null,
        disableInteraction: g,
        author: j,
        preview: A
    })
})