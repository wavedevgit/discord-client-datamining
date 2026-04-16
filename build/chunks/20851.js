/** chunk id: 20851 params = (module,exports,require) **/
a.d(t, {
    A: () => h
});
var n = a(627968),
    s = a(64700),
    l = a(503698),
    r = a.n(l),
    i = a(384231),
    o = a(903369),
    c = a(491182),
    d = a(538355),
    u = a(699352),
    m = a(715628),
    _ = a(752636),
    p = a(701628);
let h = s.memo(function(e) {
    let {
        message: t,
        channel: a,
        compact: l,
        className: h,
        isGroupStart: x,
        hideSimpleEmbedContent: g = !0,
        disableInteraction: f,
        previewGuildId: C,
        preview: v,
        author: N
    } = e, A = C ?? (0, o.U)(t), j = (0, i.S)((t.editedTimestamp ?? t.timestamp).valueOf()), {
        content: T
    } = (0, d.A)(t, {
        hideSimpleEmbedContent: g,
        allowList: j,
        allowHeading: j,
        allowLinks: !0,
        previewLinkTarget: !0
    }), S = s.useMemo(() => (0, _.A)({
        ...e,
        channel: a,
        guildId: A
    }), [e, a, A]);
    return (0, n.jsx)(c.A, {
        compact: l,
        className: r()(h, {
            [p.iU]: !0,
            [p.HJ]: !l,
            [p._A]: x
        }),
        childrenHeader: S,
        childrenMessageContent: (0, m.A)(e, T),
        childrenAccessories: null != a ? (0, u.J)({
            message: t,
            channel: a,
            compact: l
        }, !1, !1) : null,
        disableInteraction: f,
        author: N,
        preview: v
    })
})