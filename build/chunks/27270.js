/** chunk id: 27270, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    O: () => h
});
var r = n(567359),
    i = n(301982),
    a = n(723906),
    o = n(807177),
    s = n(290424),
    l = n(132716),
    c = n(803082),
    u = n(885714),
    d = n(946020),
    f = n(795122),
    p = n(47276);

function _(e) {
    return e && e.__esModule ? e.default : e
}

function h(e, t, n) {
    let {
        item: h
    } = e, m = (0, p.o)(_(i.A), "@react-aria/tag"), g = (0, a.Bi)(), {
        onRemove: E
    } = r.O.get(t) || {}, {
        rowProps: y,
        gridCellProps: b,
        ...O
    } = (0, f.n)({
        node: h
    }, t, n), {
        descriptionProps: v,
        ...A
    } = O, I = t.disabledKeys.has(h.key) || h.props.isDisabled, S = e => {
        ("Delete" === e.key || "Backspace" === e.key) && (I || (e.preventDefault(), t.selectionManager.isSelected(h.key) ? null == E || E(new Set(t.selectionManager.selectedKeys)) : null == E || E(new Set([h.key]))))
    }, T = (0, u.lb)();
    "virtual" === T && "u" > typeof window && "ontouchstart" in window && (T = "pointer");
    let C = E && ("keyboard" === T || "virtual" === T) ? m.format("removeDescription") : "",
        N = (0, o.I)(C),
        w = h.key === t.selectionManager.focusedKey,
        R = null != t.selectionManager.focusedKey,
        P = -1;
    I || !w && R || (P = 0);
    let D = (0, s.$)(h.props),
        L = (0, l.HI)(h.props),
        {
            focusableProps: x
        } = (0, d.Wc)({
            isDisabled: I
        }, n);
    return {
        removeButtonProps: {
            "aria-label": m.format("removeButtonLabel"),
            "aria-labelledby": `${g} ${y.id}`,
            isDisabled: I,
            id: g,
            onPress: () => E ? E(new Set([h.key])) : null
        },
        rowProps: (0, c.v)(x, y, D, L, {
            tabIndex: P,
            onKeyDown: E ? S : void 0,
            "aria-describedby": N["aria-describedby"]
        }),
        gridCellProps: (0, c.v)(b, {
            "aria-errormessage": e["aria-errormessage"],
            "aria-label": e["aria-label"]
        }),
        ...A,
        allowsRemoving: !!E
    }
}