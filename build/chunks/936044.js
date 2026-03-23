/** chunk id: 936044 params = (module,exports,require) **/
n.d(t, {
    A: () => u
});
var i = n(627968);
n(64700);
var a = n(503698),
    l = n.n(a),
    r = n(763754),
    s = n(491182),
    o = n(291812),
    c = n(643204),
    d = n(759522);

function u(e) {
    let {
        message: t,
        channel: n,
        content: a,
        className: u,
        compact: _,
        popoutProps: m,
        hideTimestamp: A = !1,
        withFooter: E = !1,
        ...I
    } = e, T = (0, r.Ay)(t);
    return (0, i.jsx)("div", {
        className: l()({
            [d.Ym]: E
        }, d.gD, {
            [d.oE]: _
        }, u),
        children: (0, i.jsx)(s.A, {
            ...I,
            className: l()(d.zC, {
                [d.oE]: _
            }),
            childrenMessageContent: (0, i.jsx)(o.Ay, {
                className: l()(d.__invalid_messageContent, {
                    [d.oE]: _
                }),
                message: t,
                content: a,
                compact: _ ?? !1
            }),
            childrenHeader: (0, i.jsx)(c.Ay, {
                message: t,
                channel: n,
                author: T,
                guildId: n?.guild_id,
                compact: _,
                hideTimestamp: A,
                className: l()(d.wx, {
                    [d.oE]: _
                }),
                ...m ?? {}
            }),
            compact: _,
            author: T
        })
    })
}