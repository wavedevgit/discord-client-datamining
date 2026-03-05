/** chunk id: 120017, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => r
});
var i = n(627968),
    s = n(64700),
    l = n(763793),
    a = n(532485);
let r = s.memo(function(e) {
    let {
        channel: t,
        participants: n,
        tileWidth: s,
        selectedParticipant: r,
        popoutType: o
    } = e;
    return (0, i.jsx)("div", {
        className: a.q,
        children: n.map(e => e.id === r?.id ? null : (0, i.jsx)(l.A, {
            channel: t,
            participant: e,
            width: s,
            popoutType: o
        }, e.id))
    })
})