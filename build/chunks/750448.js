/** chunk id: 750448 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => E
});
var i = n(627968),
    s = n(64700),
    l = n(311907),
    a = n(173860),
    r = n(383394),
    o = n(458294),
    c = n(131677),
    d = n(711014),
    u = n(871697),
    h = n(531685),
    A = n(583613),
    m = n(652215),
    p = n(985018);
let g = "app-download-item",
    _ = "add-server-item";

function f() {
    return !1
}

function x(e) {
    let t = o.default.getMutableGuildStates();
    return e === m.sFm.SERVER_DISCOVERY_BADGE && !u.A.hasViewed(m.sFm.SERVER_DISCOVERY_BADGE) || e !== g && e !== _ && t[e ?? "null"]?.highImportanceMentionCount > 0
}
let C = (0, A.L_)((e, t, n) => ["null", ...t, ...e, _, m.sFm.E3_SERVER_DISCOVERY_BADGE, g]),
    E = s.forwardRef(function(e, t) {
        let n = (0, l.yK)([d.Ay, c.A, o.default], () => C(d.Ay.getGuildFolders(), c.A.getUnreadPrivateChannelIds(), o.default.getStoreChangeSentinel())),
            s = (0, l.bG)([h.A], () => h.A.isFocused()),
            u = (0, l.bG)([r.A], () => r.A.getExpandedFolders());
        return (0, i.jsx)(a.A, {
            ...e,
            ref: t,
            items: n,
            isUnread: f,
            textUnread: p.intl.string(p.t.y2b7CA),
            textMention: p.intl.string(p.t.y2b7CA),
            isMentioned: x,
            animate: s,
            expandedFolders: u
        })
    })