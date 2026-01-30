/** chunk id: 481638, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    f: () => _
});
var r = n(224507),
    i = n(825733),
    a = n(408713),
    o = n(807177),
    s = n(803082),
    l = n(64700),
    c = n(8321),
    u = n(946020),
    d = n(788951),
    f = n(47276);

function p(e) {
    return e && e.__esModule ? e.default : e
}

function _(e, t, n) {
    var _, h;
    let m, g, {
            node: E
        } = e,
        y = E.props.allowsSorting,
        {
            gridCellProps: b
        } = (0, d.Q)({
            ...e,
            focusMode: "child"
        }, t, n),
        O = E.props.isSelectionCell && "single" === t.selectionManager.selectionMode,
        {
            pressProps: v
        } = (0, c.d)({
            isDisabled: !y || O,
            onPress() {
                t.sort(E.key)
            },
            ref: n
        }),
        {
            focusableProps: A
        } = (0, u.Wc)({}, n),
        I = (null == (_ = t.sortDescriptor) ? void 0 : _.column) === E.key,
        S = null == (h = t.sortDescriptor) ? void 0 : h.direction;
    E.props.allowsSorting && !(0, a.m0)() && (g = I ? S : "none");
    let T = (0, f.o)(p(i.A), "@react-aria/table");
    y && (m = `${T.format("sortable")}`, I && S && (0, a.m0)() && (m = `${m}, ${T.format(S)}`));
    let C = (0, o.I)(m),
        N = 0 === t.collection.size;
    return (0, l.useEffect)(() => {
        N && t.selectionManager.focusedKey === E.key && t.selectionManager.setFocusedKey(null)
    }, [N, t.selectionManager, E.key]), {
        columnHeaderProps: {
            ...(0, s.v)(A, b, v, C, N ? {
                tabIndex: -1
            } : null),
            role: "columnheader",
            id: (0, r.zD)(t, E.key),
            "aria-colspan": E.colSpan && E.colSpan > 1 ? E.colSpan : void 0,
            "aria-sort": g
        }
    }
}