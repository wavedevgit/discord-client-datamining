/** chunk id: 609822 params = (module,exports,require) **/
"use strict";
r.d(t, {
    A: () => b
});
var a = r(1139),
    n = r(106526),
    o = r(64700),
    s = r(223108),
    i = r.n(s),
    c = r(431384),
    l = ["data"];

function u(e) {
    return "".concat(e.length, " ").concat(1 !== e.length ? "items" : "item")
}
var f = function(e) {
    var t = e.data,
        r = (0, n.A)(e, l);
    return o.createElement(c.A, (0, a.A)({}, r, {
        data: t,
        nodeType: "Array",
        nodeTypeIndicator: "[]",
        createItemString: u,
        expandable: t.length > 0
    }))
};
f.propTypes = {
    data: i().array
};
let b = f