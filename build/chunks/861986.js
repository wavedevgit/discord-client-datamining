/** chunk id: 861986 params = (module,exports,require) **/
t.d(a, {
    A: () => i,
    O: () => c
});
var n, r = t(627968);
t(64700);
var o = t(449859),
    s = t(985018),
    _ = t(679740),
    c = ((n = {})[n.WITH_CONTENT = 0] = "WITH_CONTENT", n[n.AFTER_ACCESSORIES = 1] = "AFTER_ACCESSORIES", n);

function i(e) {
    let {
        message: a,
        compact: t,
        location: n
    } = e;
    return a.isEdited() && null != a.editedTimestamp ? n !== (t || null != a.content && 0 !== a.content.length ? 0 : 1) ? null : (0, r.jsxs)(r.Fragment, {
        children: [" ", (0, r.jsx)(o.A, {
            timestamp: a.editedTimestamp,
            isEdited: !0,
            isInline: !1,
            children: (0, r.jsxs)("span", {
                className: _.oh,
                children: ["(", s.intl.string(s.t.C8sXIM), ")"]
            })
        })]
    }) : null
}