/** Chunk was on 11810 **/
/** chunk id: 910919, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => o
});
var r = n(627968);
n(64700);
var i = n(414626),
    l = n(243056);
let o = function(e) {
    let {
        formField: t,
        index: n,
        isDragEnabled: o,
        isDropHovered: c,
        onDrop: s,
        onEdit: a,
        onRemove: d,
        canRemove: u,
        actionsLocation: f,
        fieldStyle: j
    } = e, {
        label: p
    } = t;
    return (0, r.jsx)(l.A, {
        field: t,
        index: n,
        isDragEnabled: o,
        isDropHovered: c,
        onDrop: s,
        onEdit: a,
        onRemove: d,
        title: p,
        canRemove: u,
        actionsLocation: f,
        fieldStyle: j,
        children: (0, r.jsx)(i.mR, {
            field: t,
            value: void 0,
            disabled: !1
        })
    })
}