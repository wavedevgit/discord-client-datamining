/** Chunk was on 1113 **/
/** chunk id: 899584, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => f
});
var r = n(627968);
n(64700);
var l = n(311907),
    i = n(397927),
    s = n(947094),
    a = n(919577),
    o = n(207777),
    c = n(422844),
    u = n(435470),
    d = n(892110),
    h = n(45494),
    p = n(58736),
    g = n(985018);

function f(e) {
    let {
        channel: t
    } = e, n = (0, u.S4)(t), f = (0, l.bG)([s.A], () => s.A.hasHidden(t.id)), m = (0, d.l)(t.id), {
        sortOrder: b,
        tagFilter: A,
        tagSetting: y
    } = (0, c.R)(t.id), O = (0, l.bG)([o.A, h.A], () => !!(o.A.getThreadIds(t.id, b, A, y).length > 0) || !!(h.A.getThreads(t.id, b, A, y).length > 0), [t.id, b, A, y]), _ = t.isMediaChannel();
    if (!n || m || _ && O) return null;
    let x = f ? _ ? g.intl.string(g.t["WP/IE1"]) : g.intl.string(g.t.zfq9V4) : _ ? g.intl.string(g.t.p60yF1) : g.intl.string(g.t.SNOqYC);
    return (0, r.jsx)(p.In, {
        tooltip: x,
        icon: i.mir,
        onClick: () => a.A.hideAdminOnboarding(t.id, !f),
        selected: !f
    })
}