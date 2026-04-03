/** chunk id: 939344 params = (module,exports,require) **/
n.d(t, {
    A: () => o
});
var i = n(627968);
n(64700);
var l = n(480012),
    a = n(763754),
    r = n(888675),
    s = n(985018);

function o(e) {
    let {
        message: t,
        compact: o,
        missed: c,
        joinable: d,
        usernameHook: u,
        onClickJoinCall: _
    } = e, A = (0, a.Ay)(t), m = A.nick, E = u(A), T = (0, l.A)(t);
    return c ? (0, i.jsx)(r.A, {
        icon: n(130158),
        timestamp: t.timestamp,
        compact: o,
        children: null != T ? s.intl.format(s.t.AcqBmO, {
            username: m,
            usernameHook: E,
            callDuration: T
        }) : s.intl.format(s.t["43phHx"], {
            username: m,
            usernameHook: E
        })
    }) : (0, i.jsxs)(r.A, {
        icon: n(175476),
        timestamp: t.timestamp,
        compact: o,
        children: [null != T ? s.intl.format(s.t["7TeC1P"], {
            username: m,
            usernameHook: E,
            callDuration: T
        }) : s.intl.format(s.t.LuB5RD, {
            username: m,
            usernameHook: E
        }), d ? (0, i.jsx)(r.A.Action, {
            onClick: _,
            children: s.intl.string(s.t.oa9mvZ)
        }) : null]
    })
}