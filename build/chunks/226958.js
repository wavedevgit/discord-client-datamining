/** chunk id: 226958, original params: e,i,n (module,exports,require) **/
n.d(i, {
    A: () => u
});
var t = n(627968);
n(64700);
var l = n(735438),
    a = n.n(l),
    r = n(311907),
    d = n(397927),
    s = n(970278),
    c = n(406704),
    o = n(985018);

function u(e) {
    let i = (0, c.H_)(e),
        l = (0, r.bG)([s.A], () => !a().isEmpty(s.A.getThreadsForGuild(e.id)));
    return i && l ? (0, t.jsx)(d.Drp, {
        id: "active-threads",
        label: o.intl.string(o.t.TM6err),
        icon: d.oyn,
        leadingAccessory: {
            type: "icon",
            icon: d.oyn
        },
        action: () => {
            (0, d.mMO)(async () => {
                let {
                    default: i
                } = await n.e("70215").then(n.bind(n, 400954));
                return n => (0, t.jsx)(i, {
                    guildId: e.id,
                    ...n
                })
            })
        }
    }) : null
}