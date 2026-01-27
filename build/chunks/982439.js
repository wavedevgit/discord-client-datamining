/** Chunk was on web.js **/
/** chunk id: 982439, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    a: () => a
});
var r = n(224507),
    i = n(788951);

function a(e, t, n) {
    var a;
    let {
        gridCellProps: o,
        isPressed: s
    } = (0, i.Q)(e, t, n), l = null == (a = e.node.column) ? void 0 : a.key;
    return null != l && t.collection.rowHeaderColumnKeys.has(l) && (o.role = "rowheader", o.id = (0, r.un)(t, e.node.parentKey, l)), {
        gridCellProps: o,
        isPressed: s
    }
}