/** chunk id: 891341, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    l: () => o
});
var r = n(64700),
    i = n(55960),
    a = n(434194);
let o = e => {
    let t, n = (0, i.g)();
    if (!n.display) return null;
    let {
        display: o,
        ...s
    } = n;
    return t = "children" in e ? "function" == typeof e.children ? e.children(s) : e.children : e.generator(s), r.createElement(a.o.Provider, {
        value: s
    }, t)
}