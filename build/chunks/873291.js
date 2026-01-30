/** chunk id: 873291, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    E: () => h
});
var r = n(403992),
    i = n(966209),
    a = n(227510),
    o = n(406985),
    s = n(723906),
    l = n(290424),
    c = n(803082),
    u = n(64700),
    d = n(74172),
    f = n(853590),
    p = n(510281),
    _ = n(564949);

function h(e, t, n) {
    let {
        isVirtualized: h,
        disallowTypeAhead: m,
        keyboardDelegate: g,
        focusMode: E,
        scrollRef: y,
        getRowText: b,
        onRowAction: O,
        onCellAction: v,
        escapeKeyBehavior: A = "clearSelection",
        shouldSelectOnPressUp: I
    } = e, {
        selectionManager: S
    } = t;
    e["aria-label"] || e["aria-labelledby"] || console.warn("An aria-label or aria-labelledby prop is required for accessibility.");
    let T = (0, d.Q)({
            usage: "search",
            sensitivity: "base"
        }),
        {
            direction: C
        } = (0, f.Y)(),
        N = t.selectionManager.disabledBehavior,
        w = (0, u.useMemo)(() => g || new(0, r.J)({
            collection: t.collection,
            disabledKeys: t.disabledKeys,
            disabledBehavior: N,
            ref: n,
            direction: C,
            collator: T,
            focusMode: E
        }), [g, t.collection, t.disabledKeys, N, n, C, T, E]),
        {
            collectionProps: R
        } = (0, _.y)({
            ref: n,
            selectionManager: S,
            keyboardDelegate: w,
            isVirtualized: h,
            scrollRef: y,
            disallowTypeAhead: m,
            escapeKeyBehavior: A
        }),
        P = (0, s.Bi)(e.id);
    i.B.set(t, {
        keyboardDelegate: w,
        actions: {
            onRowAction: O,
            onCellAction: v
        },
        shouldSelectOnPressUp: I
    });
    let D = (0, o.m)({
            selectionManager: S,
            hasItemActions: !!(O || v)
        }),
        L = (0, l.$)(e, {
            labelable: !0
        }),
        x = (0, u.useCallback)(e => {
            if (S.isFocused) {
                e.currentTarget.contains(e.target) || S.setFocused(!1);
                return
            }
            e.currentTarget.contains(e.target) && S.setFocused(!0)
        }, [S]),
        M = (0, u.useMemo)(() => ({
            onBlur: R.onBlur,
            onFocus: x
        }), [x, R.onBlur]),
        j = (0, p.$)(n, {
            isDisabled: 0 !== t.collection.size
        }),
        k = (0, c.v)(L, {
            role: "grid",
            id: P,
            "aria-multiselectable": "multiple" === S.selectionMode ? "true" : void 0
        }, t.isKeyboardNavigationDisabled ? M : R, 0 === t.collection.size && {
            tabIndex: j ? -1 : 0
        } || void 0, D);
    return h && (k["aria-rowcount"] = t.collection.size, k["aria-colcount"] = t.collection.columnCount), (0, a.H)({
        getRowText: b
    }, t), {
        gridProps: k
    }
}