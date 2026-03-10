/** chunk id: 899584 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => p
});
var i = n(627968);
n(64700);
var s = n(311907),
    l = n(397927),
    a = n(947094),
    r = n(919577),
    o = n(207777),
    c = n(422844),
    d = n(435470),
    u = n(892110),
    h = n(45494),
    A = n(58736),
    m = n(985018);

function p(e) {
    let {
        channel: t
    } = e, n = (0, d.S4)(t), p = (0, s.bG)([a.A], () => a.A.hasHidden(t.id)), g = (0, u.l)(t.id), {
        sortOrder: _,
        tagFilter: f,
        tagSetting: x
    } = (0, c.R)(t.id), C = (0, s.bG)([o.A, h.A], () => !!(o.A.getThreadIds(t.id, _, f, x).length > 0) || !!(h.A.getThreads(t.id, _, f, x).length > 0), [t.id, _, f, x]), E = t.isMediaChannel();
    if (!n || g || E && C) return null;
    let I = p ? E ? m.intl.string(m.t["WP/IE1"]) : m.intl.string(m.t.zfq9V4) : E ? m.intl.string(m.t.p60yF1) : m.intl.string(m.t.SNOqYC);
    return (0, i.jsx)(A.In, {
        tooltip: I,
        icon: l.mir,
        onClick: () => r.A.hideAdminOnboarding(t.id, !p),
        selected: !p
    })
}