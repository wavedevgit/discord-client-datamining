/** Chunk was on 47841 **/
/** chunk id: 286056, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => a
});
var r = n(627968);
n(64700);
var i = n(601047),
    l = n(243056),
    s = n(985018);
let a = function(e) {
    let {
        formField: t,
        index: n,
        isDragEnabled: a,
        isDropHovered: o,
        onDrop: c,
        onEdit: d,
        onRemove: u,
        canRemove: g,
        actionsLocation: m,
        fieldStyle: p
    } = e, {
        label: f,
        placeholder: b
    } = t;
    return (0, r.jsx)(l.A, {
        field: t,
        index: n,
        isDragEnabled: a,
        isDropHovered: o,
        onDrop: c,
        onEdit: d,
        onRemove: u,
        title: f,
        canRemove: g,
        actionsLocation: m,
        fieldStyle: p,
        children: (0, r.jsx)(i.PC, {
            placeholder: null != b ? b : s.intl.string(s.t["Sqn+Wh"]),
            disabled: !0
        })
    })
}