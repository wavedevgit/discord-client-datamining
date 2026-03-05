/** chunk id: 229673, original params: e,t,n (module,exports,require) **/
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
        nick: h
    } = (0, o.d8)(A, n), g = (0, c.P)({
        user: A,
        channelId: n.id,
        guildId: void 0,
        messageId: void 0
    })(), E = (0, a.h)(t.applicationId);
    if (null == E) return null;
    let p = m.intl.format(m.t.m7Lwas, {
        username: h,
        usernameHook: g,
        gameName: E.name,
        gameIconHook: e => (0, i.jsxs)("span", {
            className: _.Y_,
            children: [(0, i.jsx)(r.A, {
                game: E,
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