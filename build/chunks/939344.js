/** chunk id: 939344 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => o
});
var i = n(627968);
n(64700);
var r = n(480012),
    l = n(763754),
    s = n(888675),
    a = n(985018);

function o(e) {
    let {
        message: t,
        compact: o,
        missed: c,
        joinable: u,
        usernameHook: d,
        onClickJoinCall: _
    } = e, A = (0, l.Ay)(t), E = A.nick, m = d(A), I = (0, r.A)(t);
    return c ? (0, i.jsx)(s.A, {
        icon: n(130158),
        timestamp: t.timestamp,
        compact: o,
        children: null != I ? a.intl.format(a.t.AcqBmO, {
            username: E,
            usernameHook: m,
            callDuration: I
        }) : a.intl.format(a.t["43phHx"], {
            username: E,
            usernameHook: m
        })
    }) : (0, i.jsxs)(s.A, {
        icon: n(175476),
        timestamp: t.timestamp,
        compact: o,
        children: [null != I ? a.intl.format(a.t["7TeC1P"], {
            username: E,
            usernameHook: m,
            callDuration: I
        }) : a.intl.format(a.t.LuB5RD, {
            username: E,
            usernameHook: m
        }), u ? (0, i.jsx)(s.A.Action, {
            onClick: _,
            children: a.intl.string(a.t.oa9mvZ)
        }) : null]
    })
}