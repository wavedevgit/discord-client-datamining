/** chunk id: 779881 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => u
});
var i = n(627968);
n(64700);
var s = n(442433),
    l = n(514179),
    a = n(976860),
    r = n(652793),
    o = n(652215),
    c = n(746080),
    d = n(985018);

function u(e) {
    let {
        guild: t,
        selected: u
    } = e;
    return (0, i.jsx)(r.G, {
        id: `subscriptions-${t.id}`,
        renderIcon: e => (0, i.jsx)(l.A, {
            className: e
        }),
        text: d.intl.string(d.t["KzCF/6"]),
        selected: u,
        onClick: () => {
            (0, a.pX)(o.BVt.CHANNEL(t.id, c.VV.ROLE_SUBSCRIPTIONS))
        },
        onContextMenu: e => {
            null != t && (0, s.L3)(e, async () => {
                let {
                    default: e
                } = await n.e("98126").then(n.bind(n, 650730));
                return n => (0, i.jsx)(e, {
                    ...n,
                    guild: t
                })
            })
        }
    })
}