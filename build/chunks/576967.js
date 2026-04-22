/** chunk id: 576967 params = (module,exports,require) **/
n.d(t, {
    A: () => o
});
var i = n(627968);
n(64700);
var l = n(503698),
    s = n.n(l),
    a = n(376310),
    r = n(42362);

function o(e) {
    let {
        appliedTags: t,
        setAppliedTags: n,
        wrap: l
    } = e, o = null != n ? e => {
        t.has(e) && (t.delete(e), n(new Set(t)))
    } : void 0;
    return (0, i.jsx)("div", {
        className: s()(r._, {
            [r.L]: l
        }),
        children: Array.from(t).map(e => (0, i.jsx)(a.A, {
            tag: e,
            onRemove: o,
            size: null == o ? a.A.Sizes.SMALL : a.A.Sizes.MEDIUM
        }, e.id))
    })
}