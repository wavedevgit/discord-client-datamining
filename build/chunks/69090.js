/** chunk id: 69090, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => k
}), n(733351), n(867070), n(896048);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(131346),
    o = n(522437),
    c = n(311907),
    d = n(36075),
    u = n(990078),
    g = n(397927),
    m = n(442433),
    p = n(361739),
    f = n(63104),
    h = n(163013),
    b = n(665013),
    x = n(201275),
    j = n(35275),
    _ = n(676608),
    O = n(657048),
    v = n(576705),
    y = n(954571),
    A = n(545868),
    E = n(642133),
    N = n(856644),
    S = n(359837),
    I = n(533448),
    T = n(927573),
    C = n(652215),
    P = n(985018),
    w = n(819644),
    R = n(107550);

function D(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            var r;
            r = n[t], t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r
        })
    }
    return e
}

function G(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
        }
        return n
    })(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}
let L = "DRAGGABLE_ROLE";

function k(e) {
    let {
        setEditRoleId: t,
        guild: n,
        everyoneRole: l,
        otherRoles: s,
        setSelectedSection: a,
        renderHeader: o,
        headerHeight: d,
        query: u
    } = e, g = (0, c.bG)([E.A], () => E.A.getRoleMemberCount(n.id), [n.id]), m = (0, c.bG)([v.A], () => v.A.getHighestRole(n), [n]), f = u.trim();
    i.useEffect(() => {
        (0, A.L)(n.id)
    }, [n.id]);
    let h = i.useRef(!1);
    i.useEffect(() => {
        h.current || "" === u.trimStart() || (y.default.track(C.HAw.SEARCH_STARTED, {
            search_type: "Roles"
        }), h.current = !0)
    }, [u]);
    let b = i.useMemo(() => s.filter(e => (0, N.Vh)(e, f)), [s, f]),
        x = i.useMemo(() => [...s, l], [s, l]),
        {
            draggingId: j,
            handleDragStart: _,
            handleDragReset: O,
            handleDragComplete: S
        } = (0, I.A)(x),
        T = i.useCallback(e => {
            var i;
            let {
                row: l
            } = e;
            if (0 === b.length) return (0, r.jsx)(M, {}, "empty-role");
            let o = b[l];
            return (0, r.jsx)(U, {
                role: o,
                guild: n,
                highestRole: m,
                currentPosition: l,
                memberCount: null != (i = null == g ? void 0 : g[o.id]) ? i : 0,
                onDragStart: _,
                onDragReset: O,
                onDragComplete: S,
                disableHover: null != j,
                disableDrag: s.length !== b.length,
                setEditRoleId: t,
                setSelectedSection: a
            }, o.id)
        }, [b, n, m, g, _, O, S, j, s, t, a]);
    return (0, r.jsx)(p.ic, {
        sections: [Math.max(b.length, 1)],
        sectionHeight: d,
        renderSection: o,
        rowHeight: 61,
        renderRow: T
    })
}

function M() {
    return (0, r.jsxs)("div", {
        className: w.tp,
        children: [(0, r.jsx)("div", {
            className: R._M
        }), (0, r.jsx)(g.nFg, {
            size: "md",
            color: "currentColor"
        }), (0, r.jsx)(g.Text, {
            className: w.Gm,
            variant: "text-md/semibold",
            color: "text-muted",
            children: P.intl.string(P.t["vR7M+y"])
        })]
    })
}

function U(e) {
    var t, l, c;
    let {
        role: d,
        guild: p,
        highestRole: x,
        currentPosition: _,
        memberCount: O,
        onDragStart: v,
        onDragReset: y,
        onDragComplete: A,
        disableHover: E,
        disableDrag: N,
        setEditRoleId: I,
        setSelectedSection: C
    } = e, k = (0, S.c)(p, x, d), M = null != k, [U, F] = i.useState(!1), H = i.useMemo(() => ({
        type: L,
        item: () => (v(d.id), {
            id: d.id,
            position: _
        }),
        canDrag: () => U && !M,
        collect: e => ({
            isDragging: e.isDragging()
        }),
        end: (e, t) => {
            let n = t.getDropResult();
            null == n ? y() : A(n.roleId)
        }
    }), [d, v, y, A, M, U, _]), [{
        isDragging: V
    }, K] = (0, a.i)(H), z = i.useMemo(() => ({
        accept: L,
        canDrop: () => !M,
        collect: e => {
            let t = e.getItem();
            return null != t && e.isOver() && e.canDrop() ? {
                dragSourcePosition: t.position
            } : {
                dragSourcePosition: null
            }
        },
        drop: () => ({
            roleId: d.id
        })
    }), [M, d]), [{
        dragSourcePosition: W
    }, Y] = (0, o.H)(z), X = i.useCallback(e => {
        (0, m.L3)(e, async () => {
            let {
                default: e
            } = await Promise.resolve().then(n.bind(n, 665013));
            return t => (0, r.jsx)(e, G(D({}, t), {
                role: d,
                guild: p
            }))
        })
    }, [p, d]), J = (0, b.x)(p, d);
    if (V) return (0, r.jsx)("div", {
        ref: e => {
            K(e)
        },
        className: s()(w.xf, w.Ao)
    });

    function Z() {
        I(d.id)
    }
    return (0, r.jsxs)(g.DUT, {
        className: s()(w.xf, {
            [w.F2]: E,
            [w.TR]: null != W && _ < W,
            [w.mU]: null != W && _ > W
        }),
        onClick: Z,
        onContextMenu: X,
        innerRef: e => {
            K(Y(e))
        },
        "data-dnd-name": d.name,
        "aria-label": P.intl.formatToPlainString(P.t.Vu0Acc, {
            name: d.name,
            count: "".concat(O)
        }),
        children: [(0, r.jsx)("div", {
            className: s()(w.co, R._M, {
                [w.Y6]: M || N
            }),
            onMouseEnter: () => F(!0),
            onMouseLeave: () => F(!1),
            children: (0, r.jsx)(g.WP0, {
                size: "xs",
                color: "currentColor"
            })
        }), (0, r.jsxs)("div", {
            className: s()(w.Ji, R.N5),
            children: [(null == (t = d.tags) ? void 0 : t.guild_connections) === null ? (0, r.jsx)(f.A, {
                className: w.U4,
                color: d.colorString,
                size: 24
            }) : (0, r.jsx)(B, {
                guildId: p.id,
                role: d,
                size: 24,
                className: w.UT,
                defaultIconClassName: w.a
            }), null != k ? (0, r.jsx)(S.A, {
                className: w.s2,
                tooltipText: k
            }) : null, (0, r.jsx)(g.Text, {
                className: w.S3,
                color: "text-strong",
                variant: "text-md/medium",
                children: d.name
            }), (null == (l = d.tags) ? void 0 : l.subscription_listing_id) != null && (0, r.jsx)(j.A, {
                className: w.tU,
                "aria-label": P.intl.string(P.t.a2Ak8b)
            }), (null == (c = d.tags) ? void 0 : c.is_guild_product_role) === !0 && (0, r.jsx)(h.A, {})]
        }), (0, r.jsx)(u.m, {
            text: P.intl.string(P.t.CW75t0),
            "aria-label": P.intl.formatToPlainString(P.t.Fgs8fD, {
                count: "".concat(O)
            }),
            position: "right",
            children: (0, r.jsxs)(g.DUT, {
                className: s()(w.Tb, R.Hp),
                onClick: function() {
                    Z(), C(T.T$.MEMBERS)
                },
                children: [(0, r.jsx)(g.Text, {
                    variant: "text-md/normal",
                    color: "none",
                    children: O
                }), (0, r.jsx)(g.nys, {
                    size: "custom",
                    color: "currentColor",
                    className: w.MV,
                    width: 20,
                    height: 20
                })]
            })
        }), (0, r.jsxs)("div", {
            className: s()(w.NC, R.DE),
            children: [(0, r.jsx)(u.m, {
                text: M ? P.intl.string(P.t["HO/oXl"]) : P.intl.string(P.t.bt75uw),
                children: (0, r.jsx)(g.K0, {
                    variant: "secondary",
                    "aria-label": M ? P.intl.string(P.t["HO/oXl"]) : P.intl.string(P.t.bt75uw),
                    icon: M ? g.bMW : g.R2l,
                    onClick: Z
                })
            }), (0, r.jsx)(u.m, {
                text: P.intl.string(P.t["UKOtz+"]),
                shouldShow: J,
                children: (0, r.jsx)(g.K0, {
                    variant: "secondary",
                    "aria-label": P.intl.string(P.t["UKOtz+"]),
                    icon: g.jNK,
                    onClick: X,
                    disabled: !J
                })
            })]
        })]
    })
}

function B(e) {
    var t, n, i, l;
    let {
        guildId: a,
        role: o,
        size: c,
        enableTooltip: u,
        className: m,
        defaultIconClassName: p
    } = e, {
        hasGradient: f,
        stops: h,
        gradientId: b
    } = (0, d.RM)(null == (n = o.colorStrings) ? void 0 : n.primaryColor, null == (i = o.colorStrings) ? void 0 : i.secondaryColor, null == (l = o.colorStrings) ? void 0 : l.tertiaryColor), j = (0, _.jV)(a, o), v = (0, x.$7)({
        guildId: a,
        roleId: o.id,
        size: c
    });
    if (null != v) return (0, r.jsx)(O.A, G(D({}, v), {
        className: m,
        enableTooltip: u
    }));
    let y = null != (t = o.colorString) ? t : C.TpD;
    return j && f && (y = "url(#".concat(b, ")")), (0, r.jsxs)(r.Fragment, {
        children: [j && f && (0, r.jsx)("svg", {
            width: "0",
            height: "0",
            style: {
                position: "absolute"
            },
            children: (0, r.jsx)("linearGradient", {
                id: b,
                x1: "0%",
                y1: "0%",
                x2: "0%",
                y2: "100%",
                children: h
            })
        }), (0, r.jsx)(g.iTF, {
            size: "custom",
            className: s()(m, p),
            color: y,
            width: c,
            height: c
        })]
    })
}