/** chunk id: 936044 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => d
});
var i = n(627968);
n(64700);
var r = n(503698),
    s = n.n(r),
    a = n(763754),
    l = n(491182),
    o = n(291812),
    c = n(643204),
    u = n(153431);

function d(e) {
    let {
        message: t,
        channel: n,
        content: r,
        className: d,
        compact: _,
        popoutProps: E,
        hideTimestamp: A = !1,
        withFooter: m = !1,
        ...I
    } = e, T = (0, a.Ay)(t);
    return (0, i.jsx)("div", {
        className: s()({
            [u.Ym]: m
        }, u.gD, {
            [u.oE]: _
        }, d),
        children: (0, i.jsx)(l.A, {
            ...I,
            className: s()(u.zC, {
                [u.oE]: _
            }),
            childrenMessageContent: (0, i.jsx)(o.Ay, {
                className: s()(u.__invalid_messageContent, {
                    [u.oE]: _
                }),
                message: t,
                content: r,
                compact: _ ?? !1
            }),
            childrenHeader: (0, i.jsx)(c.Ay, {
                message: t,
                channel: n,
                author: T,
                guildId: n?.guild_id,
                compact: _,
                hideTimestamp: A,
                className: s()(u.wx, {
                    [u.oE]: _
                }),
                ...E ?? {}
            }),
            compact: _,
            author: T
        })
    })
}