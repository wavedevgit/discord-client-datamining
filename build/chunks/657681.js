/** chunk id: 657681 params = (module,exports,require) **/
n.d(t, {
    A: () => _
}), n(321073);
var i = n(627968),
    l = n(64700),
    s = n(136722),
    a = n(311907),
    r = n(397927),
    o = n(686956),
    d = n(417454),
    c = n(595738),
    u = n(709066),
    m = n(235986),
    x = n(376092),
    g = n(427157),
    h = n(696451),
    p = n(317525),
    A = n(486020),
    b = n(985018),
    f = n(475942);

function _(e) {
    let {
        guild: t,
        applicationIntegration: n
    } = e, {
        application: _
    } = n, j = null != _.bot ? new g.A(_.bot) : null, N = (0, a.bG)([h.Ay], () => null != j ? h.Ay.getMember(t.id, j.id) : null, [j, t]), v = (0, a.bG)([p.A], () => p.A.getEveryoneRole(t)), T = (0, a.yK)([p.A], () => p.A.getManyRoles(t.id, N?.roles ?? [])), C = j?.id;
    l.useEffect(() => {
        null != C && o.A.requestMembersById(t.id, C)
    }, [t.id, C]);
    let E = l.useMemo(() => s.kg(v.permissions, ...T.map(e => e.permissions)), [T, v]);
    if (null == j) return null;
    let I = A.Ay.getApplicationIconURL({
        id: _.id,
        guildMember: N,
        bot: _.bot,
        icon: _.icon,
        size: 32
    });
    return (0, i.jsx)(r.ZpM, {
        editable: !0,
        className: f.Nr,
        children: (0, i.jsxs)(m.A, {
            direction: m.A.Direction.VERTICAL,
            children: [(0, i.jsxs)(m.A, {
                align: m.A.Align.CENTER,
                children: [(0, i.jsx)("img", {
                    alt: "",
                    src: I,
                    className: f.P0
                }), (0, i.jsx)(r.Text, {
                    color: "text-strong",
                    variant: "text-sm/normal",
                    children: b.intl.format(b.t.GyhzGw, {
                        user: j.toString()
                    })
                }), (0, i.jsx)(u.A, {
                    className: f.Tc,
                    verified: j.isVerifiedBot()
                })]
            }), function(e, t, n, l) {
                let a = [],
                    o = [];
                for (let e of x.Q) s.zy(l, e) ? a.push(e) : o.push(e);
                return (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(r.cGx, {
                        className: f.yF
                    }), n.length > 0 ? (0, i.jsx)(r.D0$, {
                        label: b.intl.format(b.t.PCs0oo, {
                            numRoles: n.length
                        }),
                        children: (0, i.jsx)(d.Ay, {
                            className: f.pf,
                            user: e,
                            guild: t,
                            userRoleIds: n,
                            wrap: !1,
                            readOnly: !0
                        })
                    }) : null, a.length > 0 || o.length > 0 ? (0, i.jsx)(c.A, {
                        grantedPermissions: a,
                        grantedPermissionsHeader: b.intl.string(b.t["hA4+su"]),
                        disabledPermissions: o,
                        disabledPermissionsHeader: b.intl.string(b.t["/rEZ2i"])
                    }) : null]
                })
            }(j, t, N?.roles ?? [], E)]
        })
    })
}