/** chunk id: 892110 params = (module,exports,require) **/
"use strict";
n.d(t, {
    l: () => a
});
var i = n(989349),
    s = n.n(i),
    l = n(661191);
let a = e => {
    let t = l.default.extractTimestamp(e);
    return !s()().isBefore(s()(t).add(s().duration(15, "days")))
}