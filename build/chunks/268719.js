/** Chunk was on 92917 **/
/** chunk id: 268719, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => o
});
var r = n(627968);
n(64700);
var i = n(311907),
    l = n(994500),
    a = n(301960);

function s(e) {
    let {
        message: t,
        channel: n,
        compact: s
    } = e, o = (0, i.bG)([l.A], () => null != t.interaction && l.A.isBlocked(t.interaction.user.id), [t.interaction]);
    return (0, r.jsx)(a.A, {
        message: t,
        channel: n,
        compact: s,
        isInteractionUserBlocked: o
    })
}

function o(e, t, n) {
    return null != e.interaction && "" !== e.interaction.displayName ? (0, r.jsx)(s, {
        message: e,
        channel: t,
        compact: n
    }) : null
}