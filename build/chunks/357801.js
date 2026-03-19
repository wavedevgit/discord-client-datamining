/** chunk id: 357801 params = (module,exports,require) **/
"use strict";
n.d(t, {
    F: () => r
});
var i = n(989349),
    s = n.n(i),
    l = n(661191),
    a = n(988794);

function r(e, t, n, i) {
    let r = s()(),
        o = new Date(e.scheduled_start_time).getTime(),
        c = {
            start: o - a.Oz,
            end: o
        };
    if (r.isBetween(c.start, c.end)) {
        if (null != t) {
            let e = s()(t),
                n = e.isBetween(c.start, c.end),
                l = e.isBetween(s()(o).subtract(a.nN, "days"), o);
            return n || l && !i ? void 0 : a.w0.EVENT_STARTING_SOON
        }
        return a.w0.EVENT_STARTING_SOON
    }
    let d = l.default.extractTimestamp(e.id),
        u = Math.min((n ?? d) + a.aj, o);
    if (r.isBetween(d, u) && null == t && !i) return a.w0.NEW_EVENT
}