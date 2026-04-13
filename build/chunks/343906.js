/** chunk id: 343906 params = (module,exports,require) **/
n.d(t, {
    A: () => H,
    O: () => V
});
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(284009),
    o = n.n(a),
    d = n(417597),
    c = n(843282),
    u = n(397927),
    m = n(954571),
    g = n(661191),
    _ = n(695515),
    x = n(923531),
    A = n(294433),
    h = n(10005),
    p = n(400641),
    T = n(438732),
    f = n(500470),
    S = n(153739),
    E = n(834981),
    b = n(607822),
    C = n(254847),
    v = n(436805),
    N = n(773349),
    I = n(283900),
    j = n(475833),
    y = n(469696),
    O = n(400553),
    R = n(191627),
    L = n(652215),
    P = n(221425),
    D = n(985018),
    G = n(407765),
    M = n(452567);

function k() {
    let e = s.useCallback(() => {
        (0, u.mMO)(async () => {
            let {
                default: e
            } = await n.e("59276").then(n.bind(n, 549223));
            return t => (0, i.jsx)(e, {
                ...t
            })
        })
    }, []);
    return (0, i.jsx)(u.DUT, {
        className: G.YL,
        onClick: e,
        children: (0, i.jsx)(u.mir, {
            size: "custom",
            color: "currentColor",
            className: G.Kk,
            width: 15,
            height: 15
        })
    })
}

function U(e) {
    let {
        displayType: t
    } = e, n = s.useCallback(() => {
        (0, u.showToast)((0, u.createToast)(D.intl.string(P.default.Wu8BK2), u.ToastType.FAILURE))
    }, []), l = (0, T.A)(), a = (0, p._w)(t), d = (0, p.Gn)(t), c = (0, p.Ju)(t), {
        loadMore: m,
        isMoreLoading: A
    } = (0, h.A)({
        onError: n
    }), f = (0, x.kN)().get(t), [S, E] = s.useState(R.PH), b = s.useCallback(() => {
        E(e => e + R.PH), m(t)
    }, [t, m]);
    o()(f, `No text for action type: ${t}`);
    let I = t === R.NV.PURCHASES && null != c ? f.sectionHeader(c) : f.sectionHeader(d),
        j = s.useCallback(e => {
            let {
                row: t
            } = e, n = a[t];
            if ((0, x.aq)(n)) {
                let e = g.default.extractTimestamp(n.event_id),
                    t = (0, x.i6)(e, f.timestampFormatter);
                return (0, i.jsx)(N.A, {
                    userId: n.entity_id,
                    subText: t
                }, n.event_id)
            }
            if ((0, x.Is)(n)) return (0, i.jsx)(C.A, {
                guildId: n.entity_id
            }, n.event_id);
            if ((0, x.u7)(n)) {
                let e = _.A.getPurchaseInfo(n.entity_id);
                return null == e ? null : (0, i.jsx)(v.A, {
                    skuId: e.sku_id,
                    subscriptionPlanId: e.subscription_plan_id,
                    total: e.total,
                    currency: e.currency
                }, n.event_id)
            }
            return null
        }, [a, f.timestampFormatter]),
        y = s.useCallback(() => (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(u.Text, {
                className: G.bV,
                variant: "text-md/semibold",
                children: I
            }), void 0 !== f.sectionDescription ? (0, i.jsx)(u.Text, {
                className: G.yV,
                variant: "text-md/medium",
                color: "text-muted",
                children: f.sectionDescription(l ?? !1)
            }) : null]
        }), [I, f, l]);
    if (0 === a.length) return null;
    let O = a.slice(0, S);
    return (0, i.jsxs)("div", {
        className: G.A2,
        children: [y(), (0, i.jsx)("div", {
            className: G.o1,
            style: {
                maxHeight: 65 * O.length
            },
            children: O.map((e, t) => j({
                row: t
            }))
        }), O.length < d ? (0, i.jsx)(u.DUT, {
            className: r()(G.FQ, {
                [G.r9]: A
            }),
            onClick: b,
            role: "button",
            "aria-disabled": A,
            children: A ? (0, i.jsx)(u.y$y, {
                type: u.y$y.Type.PULSING_ELLIPSIS,
                className: G.u1
            }) : (0, i.jsx)(u.Text, {
                className: G.UX,
                variant: "text-sm/bold",
                children: D.intl.format(P.default["7dMmJY"], {
                    pageSize: Math.max(1, Math.min(d - O.length, R.PH))
                })
            })
        }) : null]
    })
}
let w = () => {
        let e = (0, T.A)(),
            t = (0, E.vx)(),
            n = (0, A.y)(D.intl.formatToPlainString(P.default["7hqFl9"], {
                activeLinks: t.length
            }), D.intl.string(P.default["Q/D/0Q"])),
            s = (0, x.cV)(!!e),
            l = (0, E.v4)(s);
        return e && t.length > 1 ? (0, i.jsx)(u.Text, {
            variant: "eyebrow",
            children: l
        }) : (0, i.jsxs)(i.Fragment, {
            children: [e ? null : (0, i.jsx)(u.bMW, {
                size: "xs",
                color: "currentColor",
                className: G.Kk
            }), (0, i.jsx)(u.Text, {
                variant: "eyebrow",
                children: n
            })]
        })
    },
    V = s.memo(e => {
        let {
            userId: t,
            subText: n,
            avatarSize: s = u._3J.SIZE_40,
            hideUserTag: l = !1
        } = e, r = (0, S.F7)(t);
        return void 0 === r ? null : (0, i.jsxs)("div", {
            className: G.iO,
            children: [(0, i.jsx)(I.H, {
                user: r,
                avatarSize: s
            }), (0, i.jsxs)("div", {
                className: G.TK,
                children: [(0, i.jsx)(j.A, {
                    user: r,
                    hideUserTag: l
                }), void 0 !== n ? (0, i.jsx)(u.Text, {
                    variant: "text-sm/medium",
                    color: "text-muted",
                    children: n
                }) : null]
            })]
        })
    });
V.displayName = "FamilyCenterActivityCardAccountRow";
let B = () => {
        let e = (0, E.GR)(),
            t = (0, d.bG)([_.A], () => _.A.getSelectedTeenId()),
            {
                selectTeenUser: n
            } = (0, h.A)({}),
            l = e.map(e => ({
                label: e.id,
                value: e.id
            })),
            r = s.useCallback(e => (0, i.jsx)(V, {
                userId: e.value,
                avatarSize: u._3J.SIZE_24
            }), []);
        return (0, i.jsx)(c.Pw, {
            className: G.Lt,
            renderOptionLabel: r,
            renderOptionValue: e => {
                let [t] = e;
                return r(t)
            },
            serialize: e => e,
            select: e => {
                n(e), m.default.track(L.HAw.FAMILY_CENTER_ACTION, {
                    action: R.qb.SelectTeen
                })
            },
            isSelected: e => e === t,
            options: l,
            "data-migration-pending": !0
        })
    },
    F = () => {
        let e = (0, f.k)(),
            t = (0, T.A)(),
            n = (0, E.vx)(),
            s = (0, x.cV)(!!t),
            l = (0, E.v4)(s);
        return null === e ? null : t && 1 !== n.length ? (0, i.jsx)(B, {}) : (0, i.jsx)(V, {
            userId: e,
            subText: l
        })
    },
    H = () => {
        let e = (0, x.Mo)(),
            t = (0, p.lI)(),
            n = (0, x.jp)(),
            s = (0, E.v4)(n);
        return (0, i.jsxs)("div", {
            className: G.kL,
            children: [(0, i.jsxs)("div", {
                className: G.vF,
                children: [(0, i.jsx)(w, {}), (0, i.jsx)(k, {})]
            }), (0, i.jsxs)("div", {
                className: M.a,
                children: [(0, i.jsx)("div", {
                    className: G.wx,
                    children: (0, i.jsx)(F, {})
                }), (0, i.jsxs)(u.BJc, {
                    gap: 32,
                    padding: 32,
                    fullWidth: !1,
                    children: [(0, i.jsx)("div", {
                        className: G.O2,
                        children: e.map(e => {
                            let [t, n] = e;
                            return (0, i.jsx)(b.A, {
                                displayType: t,
                                header: n.tooltipHeader()
                            }, `counter-${t}`)
                        })
                    }), (0, i.jsxs)("div", {
                        className: G.RJ,
                        children: [(0, i.jsx)(O.A, {}), t ? e.map(e => {
                            let [t] = e;
                            return (0, i.jsx)(U, {
                                displayType: t
                            }, `${t}-list`)
                        }) : (0, i.jsx)(y.A, {
                            className: G.RL,
                            text: s ?? ""
                        })]
                    })]
                })]
            })]
        })
    }