/** chunk id: 899584 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => _
});
var i = n(627968);
n(64700);
var s = n(311907),
    l = n(397927),
    r = n(947094),
    a = n(919577),
    o = n(207777),
    c = n(200463),
    d = n(435470),
    u = n(892110),
    h = n(45494),
    A = n(58736),
    m = n(985018);

function _(e) {
    let {
        channel: t
    } = e, n = (0, d.S4)(t), _ = (0, s.bG)([r.A], () => r.A.hasHidden(t.id)), p = (0, u.l)(t.id), {
        sortOrder: g,
        tagFilter: f,
        tagSetting: x
    } = (0, c.R)(t.id), E = (0, s.bG)([o.A, h.A], () => !!(o.A.getThreadIds(t.id, g, f, x).length > 0) || !!(h.A.getThreads(t.id, g, f, x).length > 0), [t.id, g, f, x]), C = t.isMediaChannel();
    if (!n || p || C && E) return null;
    let I = _ ? C ? m.intl.string(m.t["WP/IE1"]) : m.intl.string(m.t.zfq9V4) : C ? m.intl.string(m.t.p60yF1) : m.intl.string(m.t.SNOqYC);
    return (0, i.jsx)(A.In, {
        tooltip: I,
        icon: l.mir,
        onClick: () => a.A.hideAdminOnboarding(t.id, !_),
        selected: !_
    })
}