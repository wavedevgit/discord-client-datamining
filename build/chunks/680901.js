/** chunk id: 680901 params = (module,exports,require) **/
a.d(t, {
    L: () => l
});
var n = a(627968),
    r = a(397927),
    o = a(538451),
    i = a(151755);
let l = e => {
    let {
        users: t,
        guildId: a,
        "aria-label": l,
        "aria-labelledby": c
    } = e;
    return (0, n.jsx)(r.lGe, {
        "aria-label": l,
        "aria-labelledby": c,
        className: i.X,
        children: (0, n.jsx)(r.HOs, {
            className: i.o,
            children: t.map(e => (0, n.jsx)(o.A, {
                user: e,
                guildId: a,
                onClick: e => e.stopPropagation()
            }, e.id))
        })
    })
}