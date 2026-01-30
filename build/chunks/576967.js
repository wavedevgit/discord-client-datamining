/** chunk id: 576967, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => o
}), n(896048);
var r = n(627968);
n(64700);
var l = n(503698),
    i = n.n(l),
    s = n(376310),
    a = n(601051);

function o(e) {
    let {
        appliedTags: t,
        setAppliedTags: n,
        wrap: l
    } = e, o = null != n ? e => {
        t.has(e) && (t.delete(e), n(new Set(t)))
    } : void 0;
    return (0, r.jsx)("div", {
        className: i()(a._, {
            [a.L]: l
        }),
        children: Array.from(t).map(e => (0, r.jsx)(s.A, {
            tag: e,
            onRemove: o,
            size: null == o ? s.A.Sizes.SMALL : s.A.Sizes.MEDIUM
        }, e.id))
    })
}