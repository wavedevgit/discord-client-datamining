/** chunk id: 229673 params = (module,exports,require) **/
n.d(t, {
    A: () => m
});
var i = n(627968);
n(64700);
var l = n(934551),
    a = n(429913),
    r = n(769015),
    s = n(975571),
    o = n(763754),
    c = n(447215),
    u = n(888675),
    d = n(652215),
    _ = n(985018),
    A = n(999255);

function m(e) {
    let {
        message: t,
        channel: n,
        author: m,
        compact: E
    } = e, {
        nick: T
    } = (0, o.d8)(m, n), I = (0, c.P)({
        user: m,
        channelId: n.id,
        guildId: void 0,
        messageId: void 0
    })(), N = (0, a.h)(t.applicationId);
    if (null == N) return null;
    let g = _.intl.format(_.t.m7Lwas, {
        username: T,
        usernameHook: I,
        gameName: N.name,
        gameIconHook: e => (0, i.jsxs)("span", {
            className: A.Y_,
            children: [(0, i.jsx)(r.A, {
                game: N,
                size: r.M.XXSMALL,
                className: A.p4
            }), " ", e]
        }),
        helpdeskArticle: s.A.getArticleURL(d.MVz.SOCIAL_LAYER_CONNECTIONS)
    });
    return (0, i.jsx)(u.A, {
        iconNode: (0, i.jsx)(l.GameControllerIcon, {
            size: "sm"
        }),
        compact: E,
        contentClassName: A.Qs,
        children: (0, i.jsx)("div", {
            children: g
        })
    })
}