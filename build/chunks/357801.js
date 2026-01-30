/** chunk id: 357801, original params: e,t,n (module,exports,require) **/
n.d(t, {
    F: () => a
});
var r = n(989349),
    l = n.n(r),
    i = n(661191),
    u = n(988794);

function a(e, t, n, r) {
    let a = l()(),
        o = new Date(e.scheduled_start_time).getTime(),
        c = {
            start: o - u.Oz,
            end: o
        };
    if (a.isBetween(c.start, c.end)) {
        if (null != t) {
            let e = l()(t),
                n = e.isBetween(c.start, c.end),
                i = e.isBetween(l()(o).subtract(u.nN, "days"), o);
            return n || i && !r ? void 0 : u.w0.EVENT_STARTING_SOON
        }
        return u.w0.EVENT_STARTING_SOON
    }
    let d = i.default.extractTimestamp(e.id),
        s = Math.min((null != n ? n : d) + u.aj, o);
    if (a.isBetween(d, s) && null == t && !r) return u.w0.NEW_EVENT
}