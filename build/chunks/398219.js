/** chunk id: 398219 params = (module,exports,require) **/
"use strict";
n.d(t, {
    F: () => a
}), n(667532);
var i = n(735438),
    s = n.n(i),
    l = n(403362);

function a(e, t) {
    return s()(e).map(t.getUser).unshift(t.getCurrentUser()).filter(l.Vq).sortBy(e => e.username.toLowerCase()).value()
}