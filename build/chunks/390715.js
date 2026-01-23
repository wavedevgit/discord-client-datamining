/** Chunk was on 47841 **/
/** chunk id: 390715, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => o
});
var r = n(627968);
n(64700);
var i = n(53594),
    l = n(767822),
    s = n(692467),
    a = n(690420);

function o(e) {
    let {
        guildId: t,
        rules: n,
        triggerType: o,
        initWithEdit: c
    } = e, {
        perGuildMaxCount: d
    } = i.i$[o], u = 0 === n.length, g = d > n.length && !u;
    return (0, r.jsxs)(r.Fragment, {
        children: [u && (0, r.jsx)(s.A, {
            guildId: t,
            triggerType: o
        }), n.map(e => (0, r.jsx)(a.A, {
            rule: e,
            initWithEdit: c
        }, e.id)), g && (0, r.jsx)(l.A, {
            guildId: t,
            triggerType: o
        })]
    })
}