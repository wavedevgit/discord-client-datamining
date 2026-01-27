/** Chunk was on web.js **/
/** chunk id: 50268, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => c
});
var r = n(627968);
n(64700);
var i = n(284009),
    a = n.n(i),
    o = n(397927),
    s = n(253932),
    l = n(957565);

function c(e) {
    let {
        id: t,
        label: n,
        onSuccess: i,
        shiftId: c,
        showIconFirst: u,
        showWithoutDeveloperMode: d
    } = e, f = s.Q_.useSetting();

    function p(e) {
        let n = null != c && e.shiftKey ? c : t;
        a()(null != n, "cannot copy null text"), (0, l.C)(n, i)
    }
    let _ = d || f;
    if (__OVERLAY__ || !_ || !l.p5 || null == t) return null;
    let h = "devmode-copy-id-".concat(t);
    return (0, r.jsx)(o.Drp, {
        id: h,
        label: n,
        action: p,
        icon: u ? void 0 : o.L9S,
        iconLeft: u ? o.L9S : void 0,
        leadingAccessory: {
            type: "icon",
            icon: o.L9S
        }
    }, h)
}