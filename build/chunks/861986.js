/** Chunk was on web.js **/
/** chunk id: 861986, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => c,
    O: () => s
});
var r = n(627968);
n(64700);
var i = n(449859),
    a = n(985018),
    o = n(679740),
    s = function(e) {
        return e[e.WITH_CONTENT = 0] = "WITH_CONTENT", e[e.AFTER_ACCESSORIES = 1] = "AFTER_ACCESSORIES", e
    }({});

function l(e, t) {
    return t || null != e.content && 0 !== e.content.length ? 0 : 1
}

function c(e) {
    let {
        message: t,
        compact: n,
        location: s
    } = e;
    return t.isEdited() && null != t.editedTimestamp && s === l(t, n) ? (0, r.jsxs)(r.Fragment, {
        children: [" ", (0, r.jsx)(i.A, {
            timestamp: t.editedTimestamp,
            isEdited: !0,
            isInline: !1,
            children: (0, r.jsxs)("span", {
                className: o.oh,
                children: ["(", a.intl.string(a.t.C8sXIM), ")"]
            })
        })]
    }) : null
}