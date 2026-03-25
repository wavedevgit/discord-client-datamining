/** chunk id: 293260 params = (module,exports,require) **/
"use strict";
n.d(t, {
    Ay: () => d,
    CB: () => u,
    c0: () => c
});
var l = n(627968);
n(64700);
var i = n(311907),
    s = n(397927),
    r = n(317525),
    a = n(370480),
    o = n(985018);
let u = "guild-connection-roles";

function c(e) {
    (0, s.mMO)(async () => {
        let {
            default: t
        } = await n.e("92837").then(n.bind(n, 480900));
        return n => (0, l.jsx)(t, {
            ...n,
            guildId: e
        })
    }, {
        modalKey: u,
        contextKey: s.SYi,
        onCloseRequest: () => {
            (0, s.OoC)(u, s.SYi)
        }
    })
}

function d(e) {
    return (0, i.bG)([r.A], () => (0, a.N8)(r.A.getSortedRoles(e.id)), [e]) ? (0, l.jsx)(s.Drp, {
        id: "guild-connection-roles",
        label: o.intl.string(o.t.ghtnss),
        icon: s.qYV,
        leadingAccessory: {
            type: "icon",
            icon: s.qYV
        },
        action: () => c(e.id)
    }) : null
}