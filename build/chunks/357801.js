/** chunk id: 357801, original params: e,t,n (module,exports,require) **/
n.d(t, {
    F: () => a
});
var r = n(989349),
    l = n.n(r),
    i = n(661191),
    s = n(988794);

function a(e, t, n, r) {
    let a = l()(),
        o = new Date(e.scheduled_start_time).getTime(),
        c = {
            start: o - s.Oz,
            end: o
        };
    if (a.isBetween(c.start, c.end)) {
        if (null != t) {
            let e = l()(t),
                n = e.isBetween(c.start, c.end),
                i = e.isBetween(l()(o).subtract(s.nN, "days"), o);
            return n || i && !r ? void 0 : s.w0.EVENT_STARTING_SOON
        }
        return s.w0.EVENT_STARTING_SOON
    }
    let u = i.default.extractTimestamp(e.id),
        d = Math.min((null != n ? n : u) + s.aj, o);
    if (a.isBetween(u, d) && null == t && !r) return s.w0.NEW_EVENT
}