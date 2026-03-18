/** chunk id: 293260 params = (module,exports,require) **/
"use strict";
n.d(t, {
    Ay: () => d,
    CB: () => u,
    c0: () => c
});
var l = n(627968);
n(64700);
var s = n(311907),
    i = n(397927),
    a = n(317525),
    r = n(370480),
    o = n(985018);
let u = "guild-connection-roles";

function c(e) {
    (0, i.mMO)(async () => {
        let {
            default: t
        } = await n.e("92837").then(n.bind(n, 480900));
        return n => (0, l.jsx)(t, {
            ...n,
            guildId: e
        })
    }, {
        modalKey: u,
        contextKey: i.SYi,
        onCloseRequest: () => {
            (0, i.OoC)(u, i.SYi)
        }
    })
}

function d(e) {
    return (0, s.bG)([a.A], () => (0, r.N8)(a.A.getSortedRoles(e.id)), [e]) ? (0, l.jsx)(i.Drp, {
        id: "guild-connection-roles",
        label: o.intl.string(o.t.ghtnss),
        icon: i.qYV,
        leadingAccessory: {
            type: "icon",
            icon: i.qYV
        },
        action: () => c(e.id)
    }) : null
}