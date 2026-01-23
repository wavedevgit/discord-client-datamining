/** Chunk was on 41917 **/
/** chunk id: 51937, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => c
});
var r = n(627968);
n(64700);
var o = n(55187),
    s = n(652215),
    i = n(985018),
    a = n(698395),
    l = n(169764);

function c(e) {
    let {
        isWaitingForConnection: t,
        onWaitingForConnection: n,
        expectedCallbackState: c,
        onAuthToken: d,
        onError: p,
        onClose: u
    } = e, f = t ? (0, r.jsx)("img", {
        src: l.A,
        width: "231",
        height: "172",
        alt: ""
    }) : (0, r.jsx)("img", {
        src: a.A,
        width: "231",
        height: "160",
        alt: ""
    }), b = t ? i.intl.string(i.t.EuwcxO) : i.intl.string(i.t["e/z3na"]), g = t ? i.intl.string(i.t["1GjS/W"]) : i.intl.string(i.t["7tXu0i"]);
    return (0, r.jsx)(o.b, {
        platformType: s.fg2.XBOX,
        isWaitingForConnection: t,
        onWaitingForConnection: n,
        expectedCallbackState: c,
        onAuthToken: d,
        onError: p,
        onClose: u,
        img: f,
        title: b,
        body: g
    })
}