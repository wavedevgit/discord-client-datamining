/** chunk id: 468287, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => c
});
var r = n(627968);
n(64700);
var i = n(453016),
    l = n(243056),
    o = n(985018);
let c = function(e) {
    let {
        formField: t,
        index: n,
        isDragEnabled: c,
        isDropHovered: s,
        onDrop: a,
        onEdit: d,
        onRemove: u,
        canRemove: f,
        actionsLocation: j,
        fieldStyle: p
    } = e, {
        label: b,
        placeholder: y
    } = t;
    return (0, r.jsx)(l.A, {
        field: t,
        index: n,
        isDragEnabled: c,
        isDropHovered: s,
        onDrop: a,
        onEdit: d,
        onRemove: u,
        title: b,
        canRemove: f,
        actionsLocation: j,
        fieldStyle: p,
        children: (0, r.jsx)(i._V, {
            placeholder: null != y ? y : o.intl.string(o.t["Sqn+Wh"]),
            disabled: !0
        })
    })
}