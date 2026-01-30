/** chunk id: 134584, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    x: () => i
});
var r = n(790637);

function i(e, t, n) {
    let {
        node: i,
        isVirtualized: a
    } = e, o = {
        role: "row"
    };
    return a && !((0, r.D5)() && "expandedKeys" in t) && (o["aria-rowindex"] = i.index + 1), {
        rowProps: o
    }
}