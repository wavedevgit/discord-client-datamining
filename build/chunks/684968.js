/** chunk id: 684968, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => b
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
    _ = n(640708),
    d = n(950072),
    g = n(997509),
    A = n(376092),
    T = n(34457),
    I = n(696451),
    O = n(317525),
    h = n(71393),
    N = n(576705),
    m = n(287809),
    f = n(558393),
    S = n(62697),
    p = n(595849),
    G = n(652215),
    R = n(985018),
    D = n(438536),
    C = n(890865);

function L(e) {
    var t, n, a, s;
    let {
        permission: o,
        roleIds: I,
        guild: h,
        specMap: m,
        categoryTitle: f,
        userId: S
    } = e, D = (0, u.yK)([O.A], () => O.A.getManyRoles(h.id, I)), L = G.xBc[o], x = null != (t = null == (a = m[L.toString()]) ? void 0 : a.title) ? t : (0, A.hx)(L), b = null != (n = null == (s = m[L.toString()]) ? void 0 : s.description) ? n : "", M = p.S2.has(L), v = p.yO.includes(o), U = I.length, j = (0, u.bG)([N.A], () => N.A.can(G.xBc.MANAGE_ROLES, h), [h]), y = r.useCallback(async e => {
        j && (await g.A.open(h.id, G.BEX.ROLES), await g.A.selectRole(e))
    }, [j, h.id]);
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
                    children: x
                }), null != f && (0, l.jsxs)("div", {
                    className: C.OQ,
                    children: [(0, l.jsx)(E.Text, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: f
                    }), M && (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)(_.A, {
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
                        children: [(0, l.jsx)(_.A, {
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
                    roleCount: U
                })
            })]
        }), null != b && (0, l.jsx)("div", {
            className: C.Dp,
            children: (0, l.jsx)(E.Text, {
                variant: "text-sm/normal",
                color: "text-subtle",
                children: b
            })
        }), (0, l.jsx)("div", {
            className: C.SY,
            children: D.map(e => (0, p._G)(e.id, S) ? (0, l.jsx)("div", {
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
                    [C.LL]: j && !(0, T.Oy)(e)
                }),
                onClick: () => y(e.id),
                children: (0, l.jsx)(d.A, {
                    role: e,
                    guildId: h.id,
                    className: C.o9
                })
            }, e.id))
        })]
    })
}

function x(e, t) {
    return t.toLowerCase().includes(e.toLowerCase())
}

function b(e) {
    let {
        userId: t,
        guildId: n,
        location: a,
        className: s,
        onNavigate: c
    } = e, _ = (0, u.bG)([m.default], () => m.default.getUser(t), [t]), d = (0, u.bG)([h.A], () => h.A.getGuild(n), [n]), g = (0, u.bG)([I.Ay], () => I.Ay.getMember(n, t), [n, t]), T = (0, p.RP)(t, n, p.lp), O = Object.keys(T).length, N = r.useMemo(() => null != d ? f.A.getGuildPermissionSpecMap(d) : null, [d]), b = r.useMemo(() => null != d ? f.A.generateGuildPermissionSpec(d) : null, [d]), [M, v] = r.useState(""), [U, j] = r.useState(""), y = r.useMemo(() => o()(j, 300), []), k = r.useCallback(e => {
        v(e), y(e)
    }, [y]), P = r.useCallback(() => {
        v(""), j("")
    }, []), F = r.useMemo(() => {
        if (null == d || null == N || null == g) return null;
        if (0 === O) return (0, l.jsx)(E.Text, {
            variant: "text-sm/normal",
            children: R.intl.string(R.t.DEBGqA)
        });
        let e = [];
        return null == b || b.forEach(n => {
            n.permissions.forEach(r => {
                let a = r.flag,
                    i = p.lp.find(e => G.xBc[e] === a);
                if (null == i) return;
                let s = T[i];
                if (null != s) {
                    if (U.length > 0) {
                        var o, u, c, E, _;
                        let e = null != (o = null == (c = N[a.toString()]) ? void 0 : c.title) ? o : (0, A.hx)(a),
                            t = null != (u = null == (_ = N[a.toString()]) || null == (E = _.description) ? void 0 : E.toString()) ? u : "",
                            l = n.title,
                            r = p.S2.has(a),
                            s = p.yO.includes(i),
                            d = r ? R.intl.string(R.t.k7Kqj7) : s ? R.intl.string(R.t.IfqUEM) : null,
                            g = x(U, e),
                            T = x(U, t),
                            I = x(U, l),
                            O = null != d && x(U, d);
                        if (!g && !T && !I && !O) return
                    }
                    e.push((0, l.jsx)(L, {
                        permission: i,
                        roleIds: s,
                        guild: d,
                        specMap: N,
                        categoryTitle: n.title,
                        userId: t
                    }, i))
                }
            })
        }), e
    }, [d, N, g, O, b, T, U, t]);
    return null == _ || null == g ? null : (0, l.jsxs)("div", {
        className: i()(D.kL, s),
        children: [(0, l.jsx)(S.A, {
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