/** chunk id: 963146, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => l
});
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    o = n(397927),
    s = n(690868);

function l(e) {
    var t;
    let {
        name: n,
        className: i,
        state: l,
        isInline: c,
        onClick: u
    } = e, d = n + (c ? ":" : ""), f = null;
    (null == l ? void 0 : l.isActive) && !c ? f = s.vu : (null == l || null == (t = l.lastValidationResult) ? void 0 : t.success) === !1 ? f = s.z3 : (null == l ? void 0 : l.hasValue) && !c && (f = s.hZ);
    let p = (0, r.jsx)(o.Text, {
        variant: c ? "text-md/normal" : "text-sm/normal",
        color: "text-strong",
        className: a()(s.uK, {
            [s.mG]: c
        }, f, i),
        children: d
    });
    return null == u ? p : (0, r.jsx)(o.DUT, {
        className: s.vk,
        onClick: () => u(n),
        children: p
    })
}