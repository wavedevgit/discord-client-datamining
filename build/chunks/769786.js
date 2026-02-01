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
    _ = n(317525),
    d = n(71393),
    g = n(558393),
    A = n(829887),
    T = n(595849),
    I = n(486974),
    O = n(652215),
    h = n(985018),
    N = n(636376);

function m(e) {
    var t, n;
    let {
        permission: r,
        roleIds: a,
        guild: d,
        specMap: g
    } = e, A = O.xBc[r], I = null != (t = null == (n = g[A.toString()]) ? void 0 : n.title) ? t : (0, E.hx)(A), m = T.S2.has(A), f = (0, s.yK)([_.A], () => _.A.getManyRoles(d.id, a), [d.id, a]);
    return (0, l.jsx)(o.m, {
        "aria-label": h.intl.string(h.t["0g8Xd/"]),
        __unsupportedReactNodeAsText: (0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsx)(u.Text, {
                variant: "text-sm/normal",
                children: m ? h.intl.string(h.t["GEuu/O"]) : h.intl.string(h.t.wgGiCk)
            }), f.map(e => (0, l.jsx)("div", {
                className: N.Zf,
                children: (0, l.jsx)(c.A, {
                    role: e,
                    guildId: d.id
                })
            }, e.id))]
        }),
        children: (0, l.jsxs)(u.DUT, {
            className: i()(N.t2, {
                [N.aE]: m
            }),
            children: [m && (0, l.jsx)(u.m5V, {
                size: "custom",
                width: 16,
                height: 16,
                color: u.LU0.colors.TEXT_BRAND
            }), (0, l.jsx)(u.Text, {
                variant: "text-xs/medium",
                color: "interactive-text-default",
                children: I
            })]
        })
    })
}
let f = r.memo(function(e) {
    let {
        member: t,
        onNavigate: n
    } = e, a = (0, s.bG)([d.A], () => d.A.getGuild(t.guildId), [t.guildId]), o = (0, T.RP)(t.userId, t.guildId, T.yO), c = (0, T.RP)(t.userId, t.guildId, T.lp), E = Object.keys(o).length, _ = Object.keys(c).length, f = r.useMemo(() => null != a ? g.A.getGuildPermissionSpecMap(a) : null, [a]), S = r.useMemo(() => null != a ? g.A.generateGuildPermissionSpec(a) : null, [a]), p = r.useMemo(() => {
        if (null == a || null == f) return null;
        if (0 === E) return (0, l.jsx)("div", {
            className: i()(N.t2, N.FI),
            children: (0, l.jsx)(u.Text, {
                variant: "text-sm/normal",
                color: "text-feedback-positive",
                children: h.intl.string(h.t.sXhykX)
            })
        });
        let e = [];
        return null == S || S.forEach(t => {
            t.permissions.forEach(t => {
                let n = t.flag,
                    r = T.lp.find(e => O.xBc[e] === n);
                if (null == r) return;
                let i = o[r];
                null != i && e.push((0, l.jsx)(m, {
                    permission: r,
                    roleIds: i,
                    guild: a,
                    specMap: f
                }, r))
            })
        }), e
    }, [a, E, o, S, f]);
    return null == a ? null : (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsxs)("div", {
            className: N.N1,
            children: [(0, l.jsx)(u.Text, {
                variant: "eyebrow",
                color: "text-default",
                children: h.intl.string(h.t.ZCq2nC)
            }), (0, l.jsxs)(u.DUT, {
                className: N.bz,
                onClick: () => n(I.g.PERMISSIONS),
                children: [(0, l.jsx)(u.Text, {
                    variant: "eyebrow",
                    color: "interactive-text-default",
                    children: h.intl.format(h.t["0x6aTm"], {
                        count: _
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
                    className: N.SL,
                    children: p
                })
            })
        })]
    })
})