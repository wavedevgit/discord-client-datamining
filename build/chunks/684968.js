/** chunk id: 684968, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => x
}), n(228524), n(896048), n(321073);
var l = n(627968),
    r = n(64700),
    a = n(503698),
    i = n.n(a),
    s = n(111956),
    o = n.n(s),
    u = n(417597),
    c = n(990078),
    E = n(397927),
    d = n(640708),
    _ = n(950072),
    g = n(997509),
    A = n(376092),
    T = n(34457),
    h = n(696451),
    I = n(317525),
    O = n(71393),
    m = n(576705),
    N = n(287809),
    f = n(558393),
    p = n(62697),
    S = n(595849),
    G = n(652215),
    R = n(985018),
    D = n(438536),
    C = n(890865);

function L(e) {
    var t, n, a, s;
    let {
        permission: o,
        roleIds: h,
        guild: O,
        specMap: N,
        categoryTitle: f,
        userId: p
    } = e, D = (0, u.yK)([I.A], () => I.A.getManyRoles(O.id, h)), L = G.xBc[o], b = null != (t = null == (a = N[L.toString()]) ? void 0 : a.title) ? t : (0, A.hx)(L), x = null != (n = null == (s = N[L.toString()]) ? void 0 : s.description) ? n : "", M = S.S2.has(L), v = S.yO.includes(o), j = h.length, U = (0, u.bG)([m.A], () => m.A.can(G.xBc.MANAGE_ROLES, O), [O]), y = r.useCallback(async e => {
        U && (await g.A.open(O.id, G.BEX.ROLES), await g.A.selectRole(e))
    }, [U, O.id]);
    return (0, l.jsxs)("div", {
        className: i()(C.wT, {
            [C.aE]: M
        }),
        children: [(0, l.jsxs)("div", {
            className: C.iY,
            children: [(0, l.jsxs)("div", {
                className: C.gH,
                children: [(0, l.jsx)(E.Text, {
                    variant: "text-md/medium",
                    color: "text-strong",
                    children: b
                }), null != f && (0, l.jsxs)("div", {
                    className: C.OQ,
                    children: [(0, l.jsx)(E.Text, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: f
                    }), M && (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)(d.A, {
                            height: 4,
                            width: 4,
                            "aria-hidden": "true",
                            color: E.LU0.colors.ICON_MUTED.css
                        }), (0, l.jsx)(c.m, {
                            text: R.intl.string(R.t.GZvXuP),
                            children: (0, l.jsxs)(E.DUT, {
                                className: C.Dc,
                                children: [(0, l.jsx)(E.m5V, {
                                    size: "custom",
                                    width: 12,
                                    height: 12,
                                    color: E.LU0.colors.TEXT_BRAND
                                }), (0, l.jsx)(E.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-brand",
                                    children: R.intl.string(R.t.k7Kqj7)
                                })]
                            })
                        })]
                    }), !M && v && (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)(d.A, {
                            height: 4,
                            width: 4,
                            "aria-hidden": "true",
                            color: E.LU0.colors.ICON_MUTED.css
                        }), (0, l.jsx)("div", {
                            className: C.Dc,
                            children: (0, l.jsx)(E.Text, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                children: R.intl.string(R.t.IfqUEM)
                            })
                        })]
                    })]
                })]
            }), (0, l.jsx)(E.Text, {
                variant: "text-sm/medium",
                color: "text-default",
                children: R.intl.format(R.t.KmJI4A, {
                    roleCount: j
                })
            })]
        }), null != x && (0, l.jsx)("div", {
            className: C.Dp,
            children: (0, l.jsx)(E.Text, {
                variant: "text-sm/normal",
                color: "text-subtle",
                children: x
            })
        }), (0, l.jsx)("div", {
            className: C.SY,
            children: D.map(e => (0, S._G)(e.id, p) ? (0, l.jsx)("div", {
                className: C.Zf,
                children: (0, l.jsx)("div", {
                    className: C.o9,
                    children: (0, l.jsx)(E.Text, {
                        variant: "text-xs/medium",
                        color: "text-default",
                        children: R.intl.string(R.t.pclUFJ)
                    })
                })
            }, e.id) : (0, l.jsx)(E.DUT, {
                className: i()(C.Zf, {
                    [C.LL]: U && !(0, T.Oy)(e)
                }),
                onClick: () => y(e.id),
                children: (0, l.jsx)(_.A, {
                    role: e,
                    guildId: O.id,
                    className: C.o9
                })
            }, e.id))
        })]
    })
}

function b(e, t) {
    return t.toLowerCase().includes(e.toLowerCase())
}

function x(e) {
    let {
        userId: t,
        guildId: n,
        location: a,
        className: s,
        onNavigate: c
    } = e, d = (0, u.bG)([N.default], () => N.default.getUser(t), [t]), _ = (0, u.bG)([O.A], () => O.A.getGuild(n), [n]), g = (0, u.bG)([h.Ay], () => h.Ay.getMember(n, t), [n, t]), T = (0, S.RP)(t, n, S.lp), I = Object.keys(T).length, m = r.useMemo(() => null != _ ? f.A.getGuildPermissionSpecMap(_) : null, [_]), x = r.useMemo(() => null != _ ? f.A.generateGuildPermissionSpec(_) : null, [_]), [M, v] = r.useState(""), [j, U] = r.useState(""), y = r.useMemo(() => o()(U, 300), []), k = r.useCallback(e => {
        v(e), y(e)
    }, [y]), P = r.useCallback(() => {
        v(""), U("")
    }, []), F = r.useMemo(() => {
        if (null == _ || null == m || null == g) return null;
        if (0 === I) return (0, l.jsx)(E.Text, {
            variant: "text-sm/normal",
            children: R.intl.string(R.t.DEBGqA)
        });
        let e = [];
        return null == x || x.forEach(n => {
            n.permissions.forEach(r => {
                let a = r.flag,
                    i = S.lp.find(e => G.xBc[e] === a);
                if (null == i) return;
                let s = T[i];
                if (null != s) {
                    if (j.length > 0) {
                        var o, u, c, E, d;
                        let e = null != (o = null == (c = m[a.toString()]) ? void 0 : c.title) ? o : (0, A.hx)(a),
                            t = null != (u = null == (d = m[a.toString()]) || null == (E = d.description) ? void 0 : E.toString()) ? u : "",
                            l = n.title,
                            r = S.S2.has(a),
                            s = S.yO.includes(i),
                            _ = r ? R.intl.string(R.t.k7Kqj7) : s ? R.intl.string(R.t.IfqUEM) : null,
                            g = b(j, e),
                            T = b(j, t),
                            h = b(j, l),
                            I = null != _ && b(j, _);
                        if (!g && !T && !h && !I) return
                    }
                    e.push((0, l.jsx)(L, {
                        permission: i,
                        roleIds: s,
                        guild: _,
                        specMap: m,
                        categoryTitle: n.title,
                        userId: t
                    }, i))
                }
            })
        }), e
    }, [_, m, g, I, x, T, j, t]);
    return null == d || null == g ? null : (0, l.jsxs)("div", {
        className: i()(D.kL, s),
        children: [(0, l.jsx)(p.A, {
            guildId: n,
            userId: t,
            onNavigate: c
        }), (0, l.jsx)(E.HOs, {
            className: C.b3,
            children: (0, l.jsx)(E.nVY, {
                label: R.intl.string(R.t.BBWnpr),
                children: (0, l.jsxs)("div", {
                    className: C.xV,
                    children: [(0, l.jsx)(E.IWV, {
                        size: "sm",
                        query: M,
                        placeholder: R.intl.string(R.t["yD9+dN"]),
                        onChange: k,
                        onClear: P,
                        autoComplete: "off",
                        inputProps: {
                            autoCapitalize: "none",
                            autoCorrect: "off",
                            spellCheck: "false"
                        }
                    }), F]
                })
            })
        })]
    })
}