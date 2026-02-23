/** chunk id: 20851, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => p
});
var i = n(627968),
    l = n(64700),
    r = n(503698),
    o = n.n(r),
    a = n(384231),
    s = n(903369),
    u = n(491182),
    c = n(538355),
    d = n(699352),
    m = n(715628),
    f = n(752636),
    g = n(119907);
let p = l.memo(function(e) {
    let {
        message: t,
        channel: n,
        compact: r,
        className: p,
        isGroupStart: A,
        hideSimpleEmbedContent: _ = !0,
        disableInteraction: v,
        previewGuildId: S,
        preview: y,
        author: E
    } = e, h = S ?? (0, s.U)(t), b = (0, a.S)((t.editedTimestamp ?? t.timestamp).valueOf()), {
        content: C
    } = (0, c.A)(t, {
        hideSimpleEmbedContent: _,
        allowList: b,
        allowHeading: b,
        allowLinks: !0,
        previewLinkTarget: !0
    }), N = l.useMemo(() => (0, f.A)({
        ...e,
        channel: n,
        guildId: h
    }), [e, n, h]);
    return (0, i.jsx)(u.A, {
        compact: r,
        className: o()(p, {
            [g.iU]: !0,
            [g.HJ]: !r,
            [g._A]: A
        }),
        childrenHeader: N,
        childrenMessageContent: (0, m.A)(e, C),
        childrenAccessories: null != n ? (0, d.J)({
            message: t,
            channel: n,
            compact: r
        }, !1, !1) : null,
        disableInteraction: v,
        author: E,
        preview: y
    })
})