/** Chunk was on web.js **/
/** chunk id: 252453, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    W: () => f
});
var r = n(627968);
n(64700);
var i = n(708418),
    a = n(747243),
    o = n(582754),
    s = n(425763),
    l = n(647245);
let c = (0, a.eV)("keydown", e => !!(0, l.fR)(e) && (e.preventDefault(), !0)),
    u = (0, a.eV)("mousedown", e => -1 === e.type.indexOf("touch") && -1 !== e.type.indexOf("mouse") && ((0, s.ef)(!1), !0)),
    d = {
        backends: [{
            id: "html5",
            backend: i.t,
            transition: u
        }, {
            id: "keyboard",
            backend: l.Ay,
            context: {
                window,
                document
            },
            options: {
                onDndModeChanged: s.ef,
                announcer: o.OR
            },
            preview: !0,
            transition: c
        }]
    };

function f(e) {
    let {
        children: t
    } = e;
    return (0, r.jsx)(a.QP, {
        options: d,
        children: t
    })
}