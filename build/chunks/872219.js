/** Chunk was on web.js **/
/** chunk id: 872219, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    K: () => E
});
var r = n(224507),
    i = n(825733),
    a = n(442058),
    o = n(217512),
    s = n(873291),
    l = n(723906),
    c = n(807177),
    u = n(98909),
    d = n(803082),
    f = n(790637),
    p = n(74172),
    _ = n(853590),
    h = n(47276),
    m = n(64700);

function g(e) {
    return e && e.__esModule ? e.default : e
}

function E(e, t, n) {
    let {
        keyboardDelegate: E,
        isVirtualized: y,
        layoutDelegate: b,
        layout: O
    } = e, v = (0, p.Q)({
        usage: "search",
        sensitivity: "base"
    }), {
        direction: A
    } = (0, _.Y)(), I = t.selectionManager.disabledBehavior, S = (0, m.useMemo)(() => E || new(0, a.h)({
        collection: t.collection,
        disabledKeys: t.disabledKeys,
        disabledBehavior: I,
        ref: n,
        direction: A,
        collator: v,
        layoutDelegate: b,
        layout: O
    }), [E, t.collection, t.disabledKeys, I, n, A, v, b, O]), T = (0, l.Bi)(e.id);
    r.V4.set(t, T);
    let {
        gridProps: C
    } = (0, s.E)({
        ...e,
        id: T,
        keyboardDelegate: S
    }, t, n);
    y && (C["aria-rowcount"] = t.collection.size + t.collection.headerRows.length), (0, f.D5)() && "expandedKeys" in t && (C.role = "treegrid");
    let {
        column: N,
        direction: w
    } = t.sortDescriptor || {}, R = (0, h.o)(g(i.A), "@react-aria/table"), P = (0, m.useMemo)(() => {
        var e, n;
        let r = null != (n = null == (e = t.collection.columns.find(e => e.key === N)) ? void 0 : e.textValue) ? n : "";
        return w && N ? R.format(`${w}Sort`, {
            columnName: r
        }) : void 0
    }, [w, N, t.collection.columns]), D = (0, c.I)(P);
    return (0, u.w)(() => {
        P && (0, o.iP)(P, "assertive", 500)
    }, [P]), {
        gridProps: (0, d.v)(C, D, {
            "aria-describedby": [D["aria-describedby"], C["aria-describedby"]].filter(Boolean).join(" ")
        })
    }
}