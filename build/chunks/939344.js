/** chunk id: 939344 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => o
});
var i = n(627968);
n(64700);
var r = n(480012),
    s = n(763754),
    a = n(888675),
    l = n(985018);

function o(e) {
    let {
        message: t,
        compact: o,
        missed: c,
        joinable: u,
        usernameHook: d,
        onClickJoinCall: _
    } = e, E = (0, s.Ay)(t), A = E.nick, m = d(E), I = (0, r.A)(t);
    return c ? (0, i.jsx)(a.A, {
        icon: n(130158),
        timestamp: t.timestamp,
        compact: o,
        children: null != I ? l.intl.format(l.t.AcqBmO, {
            username: A,
            usernameHook: m,
            callDuration: I
        }) : l.intl.format(l.t["43phHx"], {
            username: A,
            usernameHook: m
        })
    }) : (0, i.jsxs)(a.A, {
        icon: n(175476),
        timestamp: t.timestamp,
        compact: o,
        children: [null != I ? l.intl.format(l.t["7TeC1P"], {
            username: A,
            usernameHook: m,
            callDuration: I
        }) : l.intl.format(l.t.LuB5RD, {
            username: A,
            usernameHook: m
        }), u ? (0, i.jsx)(a.A.Action, {
            onClick: _,
            children: l.intl.string(l.t.oa9mvZ)
        }) : null]
    })
}