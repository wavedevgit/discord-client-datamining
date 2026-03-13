/** chunk id: 692457 params = (module,exports,require) **/
n.d(t, {
    A: () => u
});
var i = n(627968);
n(64700);
var l = n(311907),
    r = n(397927),
    a = n(843472),
    s = n(406704),
    o = n(961350),
    d = n(697470),
    c = n(985018);

function u(e, t) {
    let n = (0, l.bG)([o.default], () => o.default.getId()),
        u = (0, s.Id)(t),
        g = (0, s.s5)(t);
    return (0, d.A)(e, n) && u && !g ? (0, i.jsx)(r.Drp, {
        id: "edit",
        label: c.intl.string(c.t.fsBWmS),
        action: () => a.A.startEditMessageRecord(t.id, e),
        leadingAccessory: {
            type: "icon",
            icon: r.R2l
        },
        icon: r.R2l
    }) : null
}