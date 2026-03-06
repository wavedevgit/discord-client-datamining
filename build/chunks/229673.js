/** chunk id: 229673 params = (module,exports,require) **/
n.d(t, {
    A: () => A
});
var i = n(627968);
n(64700);
var l = n(934551),
    a = n(429913),
    r = n(769015),
    s = n(975571),
    o = n(763754),
    c = n(447215),
    d = n(888675),
    u = n(652215),
    m = n(985018),
    _ = n(451527);

function A(e) {
    let {
        message: t,
        channel: n,
        author: A,
        compact: f
    } = e, {
        nick: E
    } = (0, o.d8)(A, n), h = (0, c.P)({
        user: A,
        channelId: n.id,
        guildId: void 0,
        messageId: void 0
    })(), g = (0, a.h)(t.applicationId);
    if (null == g) return null;
    let p = m.intl.format(m.t.m7Lwas, {
        username: E,
        usernameHook: h,
        gameName: g.name,
        gameIconHook: e => (0, i.jsxs)("span", {
            className: _.Y_,
            children: [(0, i.jsx)(r.A, {
                game: g,
                size: r.M.XXSMALL,
                className: _.p4
            }), " ", e]
        }),
        helpdeskArticle: s.A.getArticleURL(u.MVz.SOCIAL_LAYER_CONNECTIONS)
    });
    return (0, i.jsx)(d.A, {
        iconNode: (0, i.jsx)(l.GameControllerIcon, {
            size: "sm"
        }),
        compact: f,
        contentClassName: _.Qs,
        children: (0, i.jsx)("div", {
            children: p
        })
    })
}