/** Chunk was on web.js **/
/** chunk id: 547576, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    b: () => s
});
var r = n(199407),
    i = n(723906),
    a = n(47276);

function o(e) {
    return e && e.__esModule ? e.default : e
}

function s(e, t) {
    let {
        key: n
    } = e, s = t.selectionManager, l = (0, i.Bi)(), c = !t.selectionManager.canSelectItem(n), u = t.selectionManager.isSelected(n), d = () => s.toggleSelection(n);
    return {
        checkboxProps: {
            id: l,
            "aria-label": (0, a.o)(o(r.A), "@react-aria/grid").format("select"),
            isSelected: u,
            isDisabled: c,
            onChange: d
        }
    }
}