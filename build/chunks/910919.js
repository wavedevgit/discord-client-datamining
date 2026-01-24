/** Chunk was on 47841 **/
/** chunk id: 910919, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => s
});
var r = n(627968);
n(64700);
var i = n(414626),
    l = n(243056);
let s = function(e) {
    let {
        formField: t,
        index: n,
        isDragEnabled: s,
        isDropHovered: a,
        onDrop: o,
        onEdit: c,
        onRemove: d,
        canRemove: u,
        actionsLocation: g,
        fieldStyle: m
    } = e, {
        label: p
    } = t;
    return (0, r.jsx)(l.A, {
        field: t,
        index: n,
        isDragEnabled: s,
        isDropHovered: a,
        onDrop: o,
        onEdit: c,
        onRemove: d,
        title: p,
        canRemove: u,
        actionsLocation: g,
        fieldStyle: m,
        children: (0, r.jsx)(i.mR, {
            field: t,
            value: void 0,
            disabled: !1
        })
    })
}