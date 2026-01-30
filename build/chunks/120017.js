/** chunk id: 120017, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => a
});
var r = n(627968),
    l = n(64700),
    i = n(763793),
    s = n(532485);
let a = l.memo(function(e) {
    let {
        channel: t,
        participants: n,
        tileWidth: l,
        selectedParticipant: a,
        popoutType: o
    } = e;
    return (0, r.jsx)("div", {
        className: s.q,
        children: n.map(e => e.id === (null == a ? void 0 : a.id) ? null : (0, r.jsx)(i.A, {
            channel: t,
            participant: e,
            width: l,
            popoutType: o
        }, e.id))
    })
})