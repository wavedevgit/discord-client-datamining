/** chunk id: 869125, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    y: () => s
});
var r = n(564949),
    i = n(138026),
    a = n(74172),
    o = n(64700);

function s(e) {
    let {
        selectionManager: t,
        collection: n,
        disabledKeys: s,
        ref: l,
        keyboardDelegate: c,
        layoutDelegate: u
    } = e, d = (0, a.Q)({
        usage: "search",
        sensitivity: "base"
    }), f = t.disabledBehavior, p = (0, o.useMemo)(() => c || new(0, i.n)({
        collection: n,
        disabledKeys: s,
        disabledBehavior: f,
        ref: l,
        collator: d,
        layoutDelegate: u
    }), [c, u, n, s, l, d, f]), {
        collectionProps: _
    } = (0, r.y)({
        ...e,
        ref: l,
        selectionManager: t,
        keyboardDelegate: p
    });
    return {
        listProps: _
    }
}