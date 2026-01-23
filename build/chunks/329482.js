/** Chunk was on 36054 **/
/** chunk id: 329482, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => j
});
var a = n(627968);
n(64700);
var l = n(503698),
    r = n.n(l),
    i = n(136722),
    s = n(311907),
    o = n(397927),
    c = n(47167),
    d = n(734057),
    u = n(71393),
    m = n(576705),
    p = n(309010),
    h = n(967198),
    x = n(558393),
    g = n(737045),
    f = n(574068),
    b = n(661251);

function v(e) {
    let {
        title: t,
        can: n
    } = e, l = n ? o.A9s : o.PGe, i = (0, a.jsx)("div", {
        className: r()(f.v_, n ? f.uU : f.Ss),
        children: (0, a.jsx)(l, {
            className: f.Kk
        })
    });
    return (0, a.jsxs)("div", {
        className: f.z8,
        children: [i, (0, a.jsx)("div", {
            className: f.rv,
            children: (0, a.jsx)(o.Text, {
                variant: "text-md/normal",
                children: t
            })
        })]
    })
}

function j() {
    let e = (0, s.bG)([p.A], () => p.A.getChannelId()),
        t = (0, s.bG)([h.A], () => h.A.getGuildId()),
        n = (0, s.bG)([d.A], () => d.A.getChannel(e)),
        l = (0, s.bG)([u.A], () => u.A.getGuild(t)),
        j = (0, s.bG)([m.A], () => m.A.computePermissions(n)),
        _ = (0, s.bG)([m.A], () => m.A.computePermissions(l)),
        y = (0, c.Ay)(n, !0),
        A = null != n ? (0, g.mW)(n, !1) : null,
        C = null != l ? x.A.getGuildPermissionSpecMap(l) : null,
        S = Object.values(null != A ? A : {}).map(e => {
            let {
                title: t,
                flag: n
            } = e, l = i.zy(j, n);
            return (0, a.jsx)(v, {
                title: t,
                can: l
            }, t)
        }),
        O = Object.values(null != C ? C : {}).map(e => {
            let {
                title: t,
                flag: n
            } = e, l = i.zy(_, n);
            return (0, a.jsx)(v, {
                title: t,
                can: l
            }, t)
        });
    return (0, a.jsx)("div", {
        className: r()(b.nd, f.nd),
        children: (0, a.jsxs)("div", {
            className: f.l$,
            children: [(0, a.jsxs)("section", {
                className: f.uW,
                children: [(0, a.jsx)(o.Heading, {
                    variant: "heading-md/semibold",
                    children: null != y ? "Permissions in ".concat(y) : "No channel selected"
                }), S]
            }), (0, a.jsxs)("section", {
                className: f.uW,
                children: [(0, a.jsx)(o.Heading, {
                    variant: "heading-md/semibold",
                    children: null != l ? "Permissions in ".concat(l.name) : "No guild selected"
                }), O]
            })]
        })
    })
}