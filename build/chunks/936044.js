/** chunk id: 936044 params = (module,exports,require) **/
n.d(t, {
    A: () => d
});
var i = n(627968);
n(64700);
var l = n(503698),
    a = n.n(l),
    r = n(763754),
    s = n(491182),
    o = n(291812),
    c = n(643204),
    u = n(153431);

function d(e) {
    let {
        message: t,
        channel: n,
        content: l,
        className: d,
        compact: _,
        popoutProps: A,
        hideTimestamp: m = !1,
        withFooter: E = !1,
        ...T
    } = e, I = (0, r.Ay)(t);
    return (0, i.jsx)("div", {
        className: a()({
            [u.Ym]: E
        }, u.gD, {
            [u.oE]: _
        }, d),
        children: (0, i.jsx)(s.A, {
            ...T,
            className: a()(u.zC, {
                [u.oE]: _
            }),
            childrenMessageContent: (0, i.jsx)(o.Ay, {
                className: a()(u.__invalid_messageContent, {
                    [u.oE]: _
                }),
                message: t,
                content: l,
                compact: _ ?? !1
            }),
            childrenHeader: (0, i.jsx)(c.Ay, {
                message: t,
                channel: n,
                author: I,
                guildId: n?.guild_id,
                compact: _,
                hideTimestamp: m,
                className: a()(u.wx, {
                    [u.oE]: _
                }),
                ...A ?? {}
            }),
            compact: _,
            author: I
        })
    })
}