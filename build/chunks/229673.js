/** chunk id: 229673 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => E
});
var i = n(627968);
n(64700);
var r = n(934551),
    l = n(429913),
    s = n(769015),
    a = n(975571),
    o = n(763754),
    c = n(447215),
    u = n(888675),
    d = n(652215),
    _ = n(985018),
    A = n(479978);

function E(e) {
    let {
        message: t,
        channel: n,
        author: E,
        compact: m
    } = e, {
        nick: I
    } = (0, o.d8)(E, n), T = (0, c.P)({
        user: E,
        channelId: n.id,
        guildId: void 0,
        messageId: void 0
    })(), g = (0, l.h)(t.applicationId);
    if (null == g) return null;
    let N = _.intl.format(_.t.m7Lwas, {
        username: I,
        usernameHook: T,
        gameName: g.name,
        gameIconHook: e => (0, i.jsxs)("span", {
            className: A.Y_,
            children: [(0, i.jsx)(s.A, {
                game: g,
                size: s.M.XXSMALL,
                className: A.p4
            }), " ", e]
        }),
        helpdeskArticle: a.A.getArticleURL(d.MVz.SOCIAL_LAYER_CONNECTIONS)
    });
    return (0, i.jsx)(u.A, {
        iconNode: (0, i.jsx)(r.GameControllerIcon, {
            size: "sm"
        }),
        compact: m,
        contentClassName: A.Qs,
        children: (0, i.jsx)("div", {
            children: N
        })
    })
}