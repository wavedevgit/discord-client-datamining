/** chunk id: 343906 params = (module,exports,require) **/
n.d(t, {
    A: () => F,
    O: () => w
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
    _ = n(954571),
    m = n(661191),
    g = n(695515),
    A = n(923531),
    h = n(294433),
    x = n(10005),
    p = n(400641),
    T = n(438732),
    E = n(500470),
    C = n(153739),
    S = n(834981),
    f = n(607822),
    N = n(254847),
    b = n(436805),
    I = n(773349),
    v = n(283900),
    j = n(475833),
    O = n(469696),
    y = n(400553),
    R = n(191627),
    P = n(652215),
    D = n(870236),
    L = n(985018),
    M = n(715770),
    G = n(609132);

function U() {
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
        className: M.YL,
        onClick: e,
        children: (0, i.jsx)(u.mir, {
            size: "custom",
            color: "currentColor",
            className: M.Kk,
            width: 15,
            height: 15
        })
    })
}

function k(e) {
    let {
        displayType: t
    } = e, n = s.useCallback(() => {
        (0, u.showToast)((0, u.createToast)(L.intl.string(D.default.Wu8BK2), u.ToastType.FAILURE))
    }, []), l = (0, T.A)(), a = (0, p._w)(t), d = (0, p.Gn)(t), c = (0, p.Ju)(t), {
        loadMore: _,
        isMoreLoading: h
    } = (0, x.A)({
        onError: n
    }), E = (0, A.kN)().get(t), [C, S] = s.useState(R.PH), f = s.useCallback(() => {
        S(e => e + R.PH), _(t)
    }, [t, _]);
    o()(E, `No text for action type: ${t}`);
    let v = t === R.NV.PURCHASES && null != c ? E.sectionHeader(c) : E.sectionHeader(d),
        j = s.useCallback(e => {
            let {
                row: t
            } = e, n = a[t];
            if ((0, A.aq)(n)) {
                let e = m.default.extractTimestamp(n.event_id),
                    t = (0, A.i6)(e, E.timestampFormatter);
                return (0, i.jsx)(I.A, {
                    userId: n.entity_id,
                    subText: t
                }, n.event_id)
            }
            if ((0, A.Is)(n)) return (0, i.jsx)(N.A, {
                guildId: n.entity_id
            }, n.event_id);
            if ((0, A.u7)(n)) {
                let e = g.A.getPurchaseInfo(n.entity_id);
                return null == e ? null : (0, i.jsx)(b.A, {
                    skuId: e.sku_id,
                    subscriptionPlanId: e.subscription_plan_id,
                    total: e.total,
                    currency: e.currency
                }, n.event_id)
            }
            return null
        }, [a, E.timestampFormatter]),
        O = s.useCallback(() => (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(u.Text, {
                className: M.bV,
                variant: "text-md/semibold",
                children: v
            }), void 0 !== E.sectionDescription ? (0, i.jsx)(u.Text, {
                className: M.yV,
                variant: "text-md/medium",
                color: "text-muted",
                children: E.sectionDescription(l ?? !1)
            }) : null]
        }), [v, E, l]);
    if (0 === a.length) return null;
    let y = a.slice(0, C);
    return (0, i.jsxs)("div", {
        className: M.A2,
        children: [O(), (0, i.jsx)("div", {
            className: M.o1,
            style: {
                maxHeight: 65 * y.length
            },
            children: y.map((e, t) => j({
                row: t
            }))
        }), y.length < d ? (0, i.jsx)(u.DUT, {
            className: r()(M.FQ, {
                [M.r9]: h
            }),
            onClick: f,
            role: "button",
            "aria-disabled": h,
            children: h ? (0, i.jsx)(u.y$y, {
                type: u.y$y.Type.PULSING_ELLIPSIS,
                className: M.u1
            }) : (0, i.jsx)(u.Text, {
                className: M.UX,
                variant: "text-sm/bold",
                children: L.intl.format(D.default["7dMmJY"], {
                    pageSize: Math.max(1, Math.min(d - y.length, R.PH))
                })
            })
        }) : null]
    })
}
let V = () => {
        let e = (0, T.A)(),
            t = (0, S.vx)(),
            n = (0, h.y)(L.intl.formatToPlainString(D.default["7hqFl9"], {
                activeLinks: t.length
            }), L.intl.string(D.default["Q/D/0Q"])),
            s = (0, A.cV)(!!e),
            l = (0, S.v4)(s);
        return e && t.length > 1 ? (0, i.jsx)(u.Text, {
            variant: "eyebrow",
            children: l
        }) : (0, i.jsxs)(i.Fragment, {
            children: [e ? null : (0, i.jsx)(u.bMW, {
                size: "xs",
                color: "currentColor",
                className: M.Kk
            }), (0, i.jsx)(u.Text, {
                variant: "eyebrow",
                children: n
            })]
        })
    },
    w = s.memo(e => {
        let {
            userId: t,
            subText: n,
            avatarSize: s = u._3J.SIZE_40,
            hideUserTag: l = !1
        } = e, r = (0, C.F7)(t);
        return void 0 === r ? null : (0, i.jsxs)("div", {
            className: M.iO,
            children: [(0, i.jsx)(v.H, {
                user: r,
                avatarSize: s
            }), (0, i.jsxs)("div", {
                className: M.TK,
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
w.displayName = "FamilyCenterActivityCardAccountRow";
let B = () => {
        let e = (0, S.GR)(),
            t = (0, d.bG)([g.A], () => g.A.getSelectedTeenId()),
            {
                selectTeenUser: n
            } = (0, x.A)({}),
            l = e.map(e => ({
                label: e.id,
                value: e.id
            })),
            r = s.useCallback(e => (0, i.jsx)(w, {
                userId: e.value,
                avatarSize: u._3J.SIZE_24
            }), []);
        return (0, i.jsx)(c.Pw, {
            className: M.Lt,
            renderOptionLabel: r,
            renderOptionValue: e => {
                let [t] = e;
                return r(t)
            },
            serialize: e => e,
            select: e => {
                n(e), _.default.track(P.HAw.FAMILY_CENTER_ACTION, {
                    action: R.qb.SelectTeen
                })
            },
            isSelected: e => e === t,
            options: l,
            "data-migration-pending": !0
        })
    },
    H = () => {
        let e = (0, E.k)(),
            t = (0, T.A)(),
            n = (0, S.vx)(),
            s = (0, A.cV)(!!t),
            l = (0, S.v4)(s);
        return null === e ? null : t && 1 !== n.length ? (0, i.jsx)(B, {}) : (0, i.jsx)(w, {
            userId: e,
            subText: l
        })
    },
    F = () => {
        let e = (0, A.Mo)(),
            t = (0, p.lI)(),
            n = (0, A.jp)(),
            s = (0, S.v4)(n);
        return (0, i.jsxs)("div", {
            className: M.kL,
            children: [(0, i.jsxs)("div", {
                className: M.vF,
                children: [(0, i.jsx)(V, {}), (0, i.jsx)(U, {})]
            }), (0, i.jsxs)("div", {
                className: G.a,
                children: [(0, i.jsx)("div", {
                    className: M.wx,
                    children: (0, i.jsx)(H, {})
                }), (0, i.jsxs)(u.BJc, {
                    gap: 32,
                    padding: 32,
                    fullWidth: !1,
                    children: [(0, i.jsx)("div", {
                        className: M.O2,
                        children: e.map(e => {
                            let [t, n] = e;
                            return (0, i.jsx)(f.A, {
                                displayType: t,
                                header: n.tooltipHeader()
                            }, `counter-${t}`)
                        })
                    }), (0, i.jsxs)("div", {
                        className: M.RJ,
                        children: [(0, i.jsx)(y.A, {}), t ? e.map(e => {
                            let [t] = e;
                            return (0, i.jsx)(k, {
                                displayType: t
                            }, `${t}-list`)
                        }) : (0, i.jsx)(O.A, {
                            className: M.RL,
                            text: s ?? ""
                        })]
                    })]
                })]
            })]
        })
    }