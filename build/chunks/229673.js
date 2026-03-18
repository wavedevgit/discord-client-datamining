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
    _ = n(985018),
    m = n(953837);

function A(e) {
    let {
        message: t,
        channel: n,
        author: A,
        compact: E
    } = e, {
        nick: I
    } = (0, o.d8)(A, n), T = (0, c.P)({
        user: A,
        channelId: n.id,
        guildId: void 0,
        messageId: void 0
    })(), N = (0, a.h)(t.applicationId);
    if (null == N) return null;
    let f = _.intl.format(_.t.m7Lwas, {
        username: I,
        usernameHook: T,
        gameName: N.name,
        gameIconHook: e => (0, i.jsxs)("span", {
            className: m.Y_,
            children: [(0, i.jsx)(r.A, {
                game: N,
                size: r.M.XXSMALL,
                className: m.p4
            }), " ", e]
        }),
        helpdeskArticle: s.A.getArticleURL(u.MVz.SOCIAL_LAYER_CONNECTIONS)
    });
    return (0, i.jsx)(d.A, {
        iconNode: (0, i.jsx)(l.GameControllerIcon, {
            size: "sm"
        }),
        compact: E,
        contentClassName: m.Qs,
        children: (0, i.jsx)("div", {
            children: f
        })
    })
}