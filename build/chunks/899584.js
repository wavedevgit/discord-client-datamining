/** chunk id: 899584 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => g
});
var i = n(627968);
n(64700);
var s = n(311907),
    l = n(397927),
    a = n(947094),
    r = n(919577),
    o = n(207777),
    c = n(200463),
    d = n(435470),
    u = n(892110),
    h = n(45494),
    A = n(58736),
    m = n(985018);

function g(e) {
    let {
        channel: t
    } = e, n = (0, d.S4)(t), g = (0, s.bG)([a.A], () => a.A.hasHidden(t.id)), p = (0, u.l)(t.id), {
        sortOrder: _,
        tagFilter: f,
        tagSetting: x
    } = (0, c.R)(t.id), C = (0, s.bG)([o.A, h.A], () => !!(o.A.getThreadIds(t.id, _, f, x).length > 0) || !!(h.A.getThreads(t.id, _, f, x).length > 0), [t.id, _, f, x]), E = t.isMediaChannel();
    if (!n || p || E && C) return null;
    let I = g ? E ? m.intl.string(m.t["WP/IE1"]) : m.intl.string(m.t.zfq9V4) : E ? m.intl.string(m.t.p60yF1) : m.intl.string(m.t.SNOqYC);
    return (0, i.jsx)(A.In, {
        tooltip: I,
        icon: l.mir,
        onClick: () => r.A.hideAdminOnboarding(t.id, !g),
        selected: !g
    })
}