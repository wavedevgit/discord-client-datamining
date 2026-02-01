/** chunk id: 436136, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => u
});
var l = n(627968);
n(64700);
var r = n(397927),
    i = n(989095),
    a = n(868048),
    s = n(355097),
    o = n(985018),
    c = n(709994);

function u(e) {
    let {
        channel: t,
        clearUnreadsNotice: n
    } = e;
    return (0, l.jsxs)("div", {
        className: c.l,
        children: [(0, l.jsx)(i.A, {
            id: t.id
        }), (0, l.jsx)("div", {
            className: c.p,
            children: (0, l.jsx)(r.Text, {
                variant: "text-sm/medium",
                children: o.intl.format(o.t.P6Y2N1, {})
            })
        }), (0, l.jsx)(r.Button, {
            variant: "secondary",
            text: o.intl.string(o.t.KyUKhT),
            icon: r.ejX,
            size: "sm",
            onClick: () => {
                (0, a.A)(t.guild_id, t.id, s.vv.UNREADS_ONLY_MENTIONS), n()
            }
        })]
    })
}