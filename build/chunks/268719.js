/** chunk id: 268719 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => o
});
var i = n(627968);
n(64700);
var r = n(311907),
    s = n(994500),
    a = n(301960);

function l(e) {
    let {
        message: t,
        channel: n,
        compact: l
    } = e, o = (0, r.bG)([s.A], () => null != t.interaction && s.A.isBlocked(t.interaction.user.id), [t.interaction]);
    return (0, i.jsx)(a.A, {
        message: t,
        channel: n,
        compact: l,
        isInteractionUserBlocked: o
    })
}

function o(e, t, n) {
    return null != e.interaction && "" !== e.interaction.displayName ? (0, i.jsx)(l, {
        message: e,
        channel: t,
        compact: n
    }) : null
}