/** Chunk was on web.js **/
/** chunk id: 320061, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => s
});
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(710133),
    o = n(985018);

function s(e) {
    let {
        analyticsSection: t,
        buttonText: n
    } = e;
    return (0, r.jsx)(i.Button, {
        variant: "expressive",
        icon: i.tvc,
        text: null != n ? n : o.intl.string(o.t["8Sh5fg"]),
        onClick: () => (0, a.A)({
            section: t
        })
    })
}