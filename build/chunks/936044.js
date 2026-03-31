/** chunk id: 936044 params = (module,exports,require) **/
n.d(t, {
    A: () => u
});
var i = n(627968);
n(64700);
var l = n(503698),
    a = n.n(l),
    r = n(763754),
    s = n(491182),
    o = n(291812),
    c = n(643204),
    d = n(153431);

function u(e) {
    let {
        message: t,
        channel: n,
        content: l,
        className: u,
        compact: _,
        popoutProps: A,
        hideTimestamp: m = !1,
        withFooter: E = !1,
        ...T
    } = e, I = (0, r.Ay)(t);
    return (0, i.jsx)("div", {
        className: a()({
            [d.Ym]: E
        }, d.gD, {
            [d.oE]: _
        }, u),
        children: (0, i.jsx)(s.A, {
            ...T,
            className: a()(d.zC, {
                [d.oE]: _
            }),
            childrenMessageContent: (0, i.jsx)(o.Ay, {
                className: a()(d.__invalid_messageContent, {
                    [d.oE]: _
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
                className: a()(d.wx, {
                    [d.oE]: _
                }),
                ...A ?? {}
            }),
            compact: _,
            author: I
        })
    })
}