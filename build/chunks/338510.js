/** chunk id: 338510, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    u: () => a
});
var i = n(617641),
    s = n(168447),
    l = n(546140);

function a(e) {
    let t = (0, i.Lc)({
            location: "safety-tools-button"
        }),
        n = (0, l.L)(),
        a = (0, s.Y)(e);
    if (!t || !n) return;
    let r = a.filter(e => null != e.dismiss_timestamp);
    if (0 !== r.length) return r.sort((e, t) => e.type > t.type || e.dismiss_timestamp < t.dismiss_timestamp ? 1 : -1)[0]
}