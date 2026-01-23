/** Chunk was on 80123 **/
/** chunk id: 333179, original params: t,e,l (module,exports,require) **/
l.d(e, {
    default: () => y
}), l(896048), l(733351), l(321073);
var n = l(627968),
    i = l(64700),
    r = l(503698),
    a = l.n(r),
    u = l(158954),
    s = l(311907),
    o = l(397927),
    c = l(686956),
    d = l(504049),
    g = l(734057),
    v = l(927813),
    h = l(562153),
    p = l(226698),
    b = l(652215),
    f = l(641131),
    m = l(985018),
    A = l(533503);

function S() {
    return [{
        id: "none",
        value: 0,
        label: m.intl.string(m.t["4obaMS"])
    }, {
        id: "1hour",
        value: +v.A.Seconds.HOUR,
        label: m.intl.string(m.t.RKpitY)
    }, {
        id: "6hours",
        value: 6 * v.A.Seconds.HOUR,
        label: m.intl.string(m.t["8WfJZ8"])
    }, {
        id: "12hours",
        value: 12 * v.A.Seconds.HOUR,
        label: m.intl.string(m.t.p1up7u)
    }, {
        id: "1day",
        value: +v.A.Seconds.DAY,
        label: m.intl.string(m.t.XuVkkD)
    }, {
        id: "3days",
        value: 3 * v.A.Seconds.DAY,
        label: m.intl.string(m.t["gMcDS+"])
    }, {
        id: "7days",
        value: 7 * v.A.Seconds.DAY,
        label: m.intl.string(m.t.FA7IUk)
    }]
}
let j = S()[1].value,
    x = S()[0].value;

function y(t) {
    let e, {
            guildId: l,
            user: r,
            location: v,
            userIds: y,
            onBanMultiple: C,
            transitionState: k,
            onClose: M,
            canBulkBan: O = !1,
            modReportId: R
        } = t,
        [w, T] = i.useState(null != R ? x : j),
        [U, D] = i.useState(""),
        [I, P] = i.useState(null),
        {
            isModReportClosed: Y,
            isModReport: B
        } = (0, s.cf)([g.A], () => {
            let t = g.A.getChannel(R);
            return {
                isModReportClosed: null == t ? void 0 : t.isArchivedThread(),
                isModReport: null == t ? void 0 : t.isModeratorReportChannel()
            }
        }),
        [E, K] = i.useState(!1),
        [_, H] = i.useState(!1),
        J = (0, d.$9)(l, {
            location: v,
            targetUserId: null == r ? void 0 : r.id,
            targets: y
        }),
        X = i.useCallback(() => {
            let t = null != I ? I : U;
            if (null != C) {
                if (!(null != y && (null == y ? void 0 : y.size) > 0 && O) || E) return;
                if ("" === U.trim() && !E) return void K(!0);
                C(l, [...y], w, t)
            } else {
                if (null == r) return;
                c.A.banUser(l, null == r ? void 0 : r.id, w, t, R).then(() => {
                    _ && null != R && p.A.resolveFlag(R)
                })
            }
            J(d.Nj.BAN), M()
        }, [I, U, C, J, M, y, O, E, l, w, r, R, _]),
        F = i.useCallback(t => {
            T(t)
        }, []),
        L = i.useCallback(t => {
            D(t), K(!1), P(null)
        }, []),
        N = i.useCallback(t => {
            P(t), E && K(!1)
        }, [E]),
        W = B && !Y && null != R,
        z = [{
            name: m.intl.string(m.t.tamLhT),
            value: m.intl.string(m.t.tamLhT)
        }, {
            name: m.intl.string(m.t.UmxjMg),
            value: m.intl.string(m.t.UmxjMg)
        }, {
            name: m.intl.string(m.t.EXY1d8),
            value: m.intl.string(m.t.EXY1d8)
        }, {
            name: m.intl.string(m.t.BcZTKu),
            value: "other"
        }],
        V = (() => {
            if (null != C && null != y) return m.intl.formatToPlainString(m.t.HVJexf, {
                count: null == y ? void 0 : y.size
            });
            if (null == r) return "";
            let t = h.Ay.getName(l, null, r);
            return m.intl.formatToPlainString(null != R ? m.t.WDR8Xd : m.t.jeKpok, {
                username: "@".concat(t)
            })
        })(),
        Z = null == R ? null : m.intl.string(m.t.pQjhIK);
    return (0, n.jsx)(u.Modal, {
        onClose: M,
        transitionState: k,
        title: V,
        subtitle: null != Z ? Z : void 0,
        actions: (e = [], B || e.push({
            variant: "secondary",
            text: m.intl.string(m.t["ETE/oC"]),
            onClick: M
        }), e.push({
            variant: "critical-primary",
            text: m.intl.string(m.t["5MBJ5M"]),
            onClick: X
        }), e),
        actionBarInput: W ? (0, n.jsx)(o.Checkbox, {
            checked: _,
            onChange: t => H(t),
            label: m.intl.string(f.default["8yIKem"])
        }) : void 0,
        children: (0, n.jsxs)(o.BJc, {
            direction: "vertical",
            gap: 24,
            children: [(0, n.jsxs)(o.BJc, {
                direction: "vertical",
                gap: 8,
                children: [E && (0, n.jsx)(o.wx6, {
                    type: "critical",
                    children: m.intl.string(m.t.IrYX1y)
                }), (0, n.jsx)(o.z6M, {
                    required: !0,
                    label: m.intl.string(null != R ? m.t["+KCLVp"] : m.t.w4Ivys),
                    value: U,
                    options: z.map(t => (function(t) {
                        for (var e = 1; e < arguments.length; e++) {
                            var l = null != arguments[e] ? arguments[e] : {},
                                n = Object.keys(l);
                            "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(l).filter(function(t) {
                                return Object.getOwnPropertyDescriptor(l, t).enumerable
                            }))), n.forEach(function(e) {
                                var n;
                                n = l[e], e in t ? Object.defineProperty(t, e, {
                                    value: n,
                                    enumerable: !0,
                                    configurable: !0,
                                    writable: !0
                                }) : t[e] = n
                            })
                        }
                        return t
                    })({}, t)),
                    onChange: L
                }), (0, n.jsx)("div", {
                    className: a()(A.Ar, {
                        [A.R]: "other" !== U
                    }),
                    children: (0, n.jsx)(o.fs1, {
                        maxLength: b.hlA,
                        onChange: N,
                        value: null != I ? I : "",
                        rows: 5,
                        autoFocus: !0
                    })
                })]
            }), (0, n.jsx)(o.l6P, {
                label: m.intl.string(null != R ? m.t.ERSM8H : m.t["8l3W0y"]),
                options: S(),
                value: w,
                onSelectionChange: F,
                selectionMode: "single",
                fullWidth: !0
            })]
        })
    })
}