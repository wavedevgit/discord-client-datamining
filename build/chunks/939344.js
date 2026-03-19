/** chunk id: 939344 params = (module,exports,require) **/
n.d(t, {
    A: () => o
});
var i = n(627968);
n(64700);
var a = n(763754),
    l = n(888675),
    r = n(502197),
    s = n(985018);

function o(e) {
    let {
        message: t,
        compact: o,
        missed: c,
        joinable: d,
        usernameHook: u,
        onClickJoinCall: _
    } = e, m = (0, a.Ay)(t), A = m.nick, E = u(m), I = (0, r.K)(t);
    return c ? (0, i.jsx)(l.A, {
        icon: n(130158),
        timestamp: t.timestamp,
        compact: o,
        children: null != I ? s.intl.format(s.t.AcqBmO, {
            username: A,
            usernameHook: E,
            callDuration: I
        }) : s.intl.format(s.t["43phHx"], {
            username: A,
            usernameHook: E
        })
    }) : (0, i.jsxs)(l.A, {
        icon: n(175476),
        timestamp: t.timestamp,
        compact: o,
        children: [null != I ? s.intl.format(s.t["7TeC1P"], {
            username: A,
            usernameHook: E,
            callDuration: I
        }) : s.intl.format(s.t.LuB5RD, {
            username: A,
            usernameHook: E
        }), d ? (0, i.jsx)(l.A.Action, {
            onClick: _,
            children: s.intl.string(s.t.oa9mvZ)
        }) : null]
    })
}