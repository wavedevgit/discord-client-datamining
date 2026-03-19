/** chunk id: 20851 params = (module,exports,require) **/
n.d(t, {
    A: () => x
});
var r = n(627968),
    a = n(64700),
    i = n(503698),
    l = n.n(i),
    s = n(384231),
    o = n(903369),
    c = n(491182),
    d = n(538355),
    u = n(699352),
    m = n(715628),
    h = n(752636),
    p = n(50397);
let x = a.memo(function(e) {
    let {
        message: t,
        channel: n,
        compact: i,
        className: x,
        isGroupStart: f,
        hideSimpleEmbedContent: v = !0,
        disableInteraction: _,
        previewGuildId: g,
        preview: A,
        author: j
    } = e, C = g ?? (0, o.U)(t), N = (0, s.S)((t.editedTimestamp ?? t.timestamp).valueOf()), {
        content: b
    } = (0, d.A)(t, {
        hideSimpleEmbedContent: v,
        allowList: N,
        allowHeading: N,
        allowLinks: !0,
        previewLinkTarget: !0
    }), R = a.useMemo(() => (0, h.A)({
        ...e,
        channel: n,
        guildId: C
    }), [e, n, C]);
    return (0, r.jsx)(c.A, {
        compact: i,
        className: l()(x, {
            [p.iU]: !0,
            [p.HJ]: !i,
            [p._A]: f
        }),
        childrenHeader: R,
        childrenMessageContent: (0, m.A)(e, b),
        childrenAccessories: null != n ? (0, u.J)({
            message: t,
            channel: n,
            compact: i
        }, !1, !1) : null,
        disableInteraction: _,
        author: j,
        preview: A
    })
})