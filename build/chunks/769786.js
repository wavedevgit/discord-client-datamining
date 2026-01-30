/** chunk id: 769786, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => f
}), n(321073);
var l = n(627968),
    r = n(64700),
    a = n(503698),
    i = n.n(a),
    s = n(417597),
    o = n(990078),
    u = n(397927),
    c = n(950072),
    E = n(376092),
    d = n(317525),
    _ = n(71393),
    g = n(558393),
    A = n(829887),
    T = n(595849),
    h = n(486974),
    I = n(652215),
    O = n(985018),
    m = n(636376);

function N(e) {
    var t, n;
    let {
        permission: r,
        roleIds: a,
        guild: _,
        specMap: g
    } = e, A = I.xBc[r], h = null != (t = null == (n = g[A.toString()]) ? void 0 : n.title) ? t : (0, E.hx)(A), N = T.S2.has(A), f = (0, s.yK)([d.A], () => d.A.getManyRoles(_.id, a), [_.id, a]);
    return (0, l.jsx)(o.m, {
        "aria-label": O.intl.string(O.t["0g8Xd/"]),
        __unsupportedReactNodeAsText: (0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsx)(u.Text, {
                variant: "text-sm/normal",
                children: N ? O.intl.string(O.t["GEuu/O"]) : O.intl.string(O.t.wgGiCk)
            }), f.map(e => (0, l.jsx)("div", {
                className: m.Zf,
                children: (0, l.jsx)(c.A, {
                    role: e,
                    guildId: _.id
                })
            }, e.id))]
        }),
        children: (0, l.jsxs)(u.DUT, {
            className: i()(m.t2, {
                [m.aE]: N
            }),
            children: [N && (0, l.jsx)(u.m5V, {
                size: "custom",
                width: 16,
                height: 16,
                color: u.LU0.colors.TEXT_BRAND
            }), (0, l.jsx)(u.Text, {
                variant: "text-xs/medium",
                color: "interactive-text-default",
                children: h
            })]
        })
    })
}
let f = r.memo(function(e) {
    let {
        member: t,
        onNavigate: n
    } = e, a = (0, s.bG)([_.A], () => _.A.getGuild(t.guildId), [t.guildId]), o = (0, T.RP)(t.userId, t.guildId, T.yO), c = (0, T.RP)(t.userId, t.guildId, T.lp), E = Object.keys(o).length, d = Object.keys(c).length, f = r.useMemo(() => null != a ? g.A.getGuildPermissionSpecMap(a) : null, [a]), p = r.useMemo(() => null != a ? g.A.generateGuildPermissionSpec(a) : null, [a]), S = r.useMemo(() => {
        if (null == a || null == f) return null;
        if (0 === E) return (0, l.jsx)("div", {
            className: i()(m.t2, m.FI),
            children: (0, l.jsx)(u.Text, {
                variant: "text-sm/normal",
                color: "text-feedback-positive",
                children: O.intl.string(O.t.sXhykX)
            })
        });
        let e = [];
        return null == p || p.forEach(t => {
            t.permissions.forEach(t => {
                let n = t.flag,
                    r = T.lp.find(e => I.xBc[e] === n);
                if (null == r) return;
                let i = o[r];
                null != i && e.push((0, l.jsx)(N, {
                    permission: r,
                    roleIds: i,
                    guild: a,
                    specMap: f
                }, r))
            })
        }), e
    }, [a, E, o, p, f]);
    return null == a ? null : (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsxs)("div", {
            className: m.N1,
            children: [(0, l.jsx)(u.Text, {
                variant: "eyebrow",
                color: "text-default",
                children: O.intl.string(O.t.ZCq2nC)
            }), (0, l.jsxs)(u.DUT, {
                className: m.bz,
                onClick: () => n(h.g.PERMISSIONS),
                children: [(0, l.jsx)(u.Text, {
                    variant: "eyebrow",
                    color: "interactive-text-default",
                    children: O.intl.format(O.t["0x6aTm"], {
                        count: d
                    })
                }), (0, l.jsx)(u._BQ, {
                    size: "custom",
                    width: 16,
                    height: 16
                })]
            })]
        }), (0, l.jsx)(A.SQ, {
            children: (0, l.jsx)(A.RU, {
                description: (0, l.jsx)("div", {
                    className: m.SL,
                    children: S
                })
            })
        })]
    })
})