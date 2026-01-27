/** Chunk was on web.js **/
/** chunk id: 516085, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    Fm: () => c,
    IS: () => u,
    Ij: () => l
});
var r = n(627968);
n(64700);
var i = n(875731),
    a = n(516607),
    o = n(270582);
let s = {
    [a.SS]: new i.d
};

function l(e) {
    var t;
    let n = e.application_id;
    if (null == n) return;
    let r = s[n];
    if (null != r && (null == (t = r.shouldShow) ? void 0 : t.call(r, e)) !== !1) return r.createHeader(e)
}

function c(e) {
    var t;
    let n = e.application_id;
    if (null == n) return;
    let i = s[n];
    if ((null == i ? void 0 : i.body) != null && (null == (t = i.shouldShow) ? void 0 : t.call(i, e)) !== !1) {
        let t = i.body;
        return (0, r.jsx)("section", {
            className: o.uW,
            children: (0, r.jsx)(t, {
                activity: e
            })
        }, "delegate-".concat(n))
    }
}

function u(e) {
    var t;
    let n = e.application_id;
    if (null == n) return !0;
    let r = s[n];
    return null == r || (null == (t = r.shouldShow) ? void 0 : t.call(r, e)) !== !1
}