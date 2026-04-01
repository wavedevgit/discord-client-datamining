/** chunk id: 329482 params = (module,exports,require) **/
n.d(t, {
    A: () => b
});
var a = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    l = n(136722),
    r = n(311907),
    o = n(397927),
    d = n(47167),
    c = n(734057),
    u = n(71393),
    m = n(576705),
    h = n(309010),
    x = n(967198),
    p = n(558393),
    g = n(737045),
    _ = n(150921),
    f = n(310086);

function v(e) {
    let {
        title: t,
        can: n
    } = e, i = n ? o.A9s : o.PGe, l = (0, a.jsx)("div", {
        className: s()(_.v_, n ? _.uU : _.Ss),
        children: (0, a.jsx)(i, {
            className: _.Kk
        })
    });
    return (0, a.jsxs)("div", {
        className: _.z8,
        children: [l, (0, a.jsx)("div", {
            className: _.rv,
            children: (0, a.jsx)(o.Text, {
                variant: "text-md/normal",
                children: t
            })
        })]
    })
}

function b() {
    let e = (0, r.bG)([h.A], () => h.A.getChannelId()),
        t = (0, r.bG)([x.A], () => x.A.getGuildId()),
        n = (0, r.bG)([c.A], () => c.A.getChannel(e)),
        i = (0, r.bG)([u.A], () => u.A.getGuild(t)),
        b = (0, r.bG)([m.A], () => m.A.computePermissions(n)),
        j = (0, r.bG)([m.A], () => m.A.computePermissions(i)),
        A = (0, d.Ay)(n, !0),
        C = null != n ? (0, g.mW)(n, !1) : null,
        y = null != i ? p.A.getGuildPermissionSpecMap(i) : null,
        S = Object.values(C ?? {}).map(e => {
            let {
                title: t,
                flag: n
            } = e, i = l.zy(b, n);
            return (0, a.jsx)(v, {
                title: t,
                can: i
            }, t)
        }),
        T = Object.values(y ?? {}).map(e => {
            let {
                title: t,
                flag: n
            } = e, i = l.zy(j, n);
            return (0, a.jsx)(v, {
                title: t,
                can: i
            }, t)
        });
    return (0, a.jsx)("div", {
        className: s()(f.nd, _.nd),
        children: (0, a.jsxs)("div", {
            className: _.l$,
            children: [(0, a.jsxs)("section", {
                className: _.uW,
                children: [(0, a.jsx)(o.Heading, {
                    variant: "heading-md/semibold",
                    children: null != A ? `Permissions in ${A}` : "No channel selected"
                }), S]
            }), (0, a.jsxs)("section", {
                className: _.uW,
                children: [(0, a.jsx)(o.Heading, {
                    variant: "heading-md/semibold",
                    children: null != i ? `Permissions in ${i.name}` : "No guild selected"
                }), T]
            })]
        })
    })
}