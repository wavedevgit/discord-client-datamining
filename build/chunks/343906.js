/** chunk id: 343906, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => Y,
    O: () => w
});
var i = n(627968),
    s = n(64700),
    a = n(503698),
    l = n.n(a),
    r = n(284009),
    o = n.n(r),
    c = n(417597),
    d = n(843282),
    u = n(397927),
    _ = n(954571),
    m = n(661191),
    A = n(695515),
    g = n(923531),
    h = n(294433),
    x = n(10005),
    p = n(400641),
    E = n(438732),
    C = n(500470),
    T = n(153739),
    S = n(834981),
    I = n(607822),
    f = n(254847),
    N = n(436805),
    b = n(773349),
    j = n(283900),
    v = n(475833),
    O = n(469696),
    R = n(400553),
    y = n(191627),
    P = n(652215),
    L = n(870236),
    D = n(985018),
    G = n(715770),
    M = n(609132);

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

function k(e) {
    let {
        displayType: t
    } = e, n = s.useCallback(() => {
        (0, u.showToast)((0, u.createToast)(D.intl.string(L.default.Wu8BK2), u.ToastType.FAILURE))
    }, []), a = (0, E.A)(), r = (0, p._w)(t), c = (0, p.Gn)(t), d = (0, p.Ju)(t), {
        loadMore: _,
        isMoreLoading: h
    } = (0, x.A)({
        onError: n
    }), C = (0, g.kN)().get(t), [T, S] = s.useState(y.PH), I = s.useCallback(() => {
        S(e => e + y.PH), _(t)
    }, [t, _]);
    o()(C, `No text for action type: ${t}`);
    let j = t === y.NV.PURCHASES && null != d ? C.sectionHeader(d) : C.sectionHeader(c),
        v = s.useCallback(e => {
            let {
                row: t
            } = e, n = r[t];
            if ((0, g.aq)(n)) {
                let e = m.default.extractTimestamp(n.event_id),
                    t = (0, g.i6)(e, C.timestampFormatter);
                return (0, i.jsx)(b.A, {
                    userId: n.entity_id,
                    subText: t
                }, n.event_id)
            }
            if ((0, g.Is)(n)) return (0, i.jsx)(f.A, {
                guildId: n.entity_id
            }, n.event_id);
            if ((0, g.u7)(n)) {
                let e = A.A.getPurchaseInfo(n.entity_id);
                return null == e ? null : (0, i.jsx)(N.A, {
                    skuId: e.sku_id,
                    subscriptionPlanId: e.subscription_plan_id,
                    total: e.total,
                    currency: e.currency
                }, n.event_id)
            }
            return null
        }, [r, C.timestampFormatter]),
        O = s.useCallback(() => (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(u.Text, {
                className: G.bV,
                variant: "text-md/semibold",
                children: j
            }), void 0 !== C.sectionDescription ? (0, i.jsx)(u.Text, {
                className: G.yV,
                variant: "text-md/medium",
                color: "text-muted",
                children: C.sectionDescription(a ?? !1)
            }) : null]
        }), [j, C, a]);
    if (0 === r.length) return null;
    let R = r.slice(0, T);
    return (0, i.jsxs)("div", {
        className: G.A2,
        children: [O(), (0, i.jsx)("div", {
            className: G.o1,
            style: {
                maxHeight: 65 * R.length
            },
            children: R.map((e, t) => v({
                row: t
            }))
        }), R.length < c ? (0, i.jsx)(u.DUT, {
            className: l()(G.FQ, {
                [G.r9]: h
            }),
            onClick: I,
            role: "button",
            "aria-disabled": h,
            children: h ? (0, i.jsx)(u.y$y, {
                type: u.y$y.Type.PULSING_ELLIPSIS,
                className: G.u1
            }) : (0, i.jsx)(u.Text, {
                className: G.UX,
                variant: "text-sm/bold",
                children: D.intl.format(L.default["7dMmJY"], {
                    pageSize: Math.max(1, Math.min(c - R.length, y.PH))
                })
            })
        }) : null]
    })
}
let V = () => {
        let e = (0, E.A)(),
            t = (0, S.vx)(),
            n = (0, h.y)(D.intl.formatToPlainString(L.default["7hqFl9"], {
                activeLinks: t.length
            }), D.intl.string(L.default["Q/D/0Q"])),
            s = (0, g.cV)(!!e),
            a = (0, S.v4)(s);
        return e && t.length > 1 ? (0, i.jsx)(u.Text, {
            variant: "eyebrow",
            children: a
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
    w = s.memo(e => {
        let {
            userId: t,
            subText: n,
            avatarSize: s = u._3J.SIZE_40,
            hideUserTag: a = !1
        } = e, l = (0, T.F7)(t);
        return void 0 === l ? null : (0, i.jsxs)("div", {
            className: G.iO,
            children: [(0, i.jsx)(j.H, {
                user: l,
                avatarSize: s
            }), (0, i.jsxs)("div", {
                className: G.TK,
                children: [(0, i.jsx)(v.A, {
                    user: l,
                    hideUserTag: a
                }), void 0 !== n ? (0, i.jsx)(u.Text, {
                    variant: "text-sm/medium",
                    color: "text-muted",
                    children: n
                }) : null]
            })]
        })
    });
w.displayName = "FamilyCenterActivityCardAccountRow";
let H = () => {
        let e = (0, S.GR)(),
            t = (0, c.bG)([A.A], () => A.A.getSelectedTeenId()),
            {
                selectTeenUser: n
            } = (0, x.A)({}),
            a = e.map(e => ({
                label: e.id,
                value: e.id
            })),
            l = s.useCallback(e => (0, i.jsx)(w, {
                userId: e.value,
                avatarSize: u._3J.SIZE_24
            }), []);
        return (0, i.jsx)(d.Pw, {
            className: G.Lt,
            renderOptionLabel: l,
            renderOptionValue: e => {
                let [t] = e;
                return l(t)
            },
            serialize: e => e,
            select: e => {
                n(e), _.default.track(P.HAw.FAMILY_CENTER_ACTION, {
                    action: y.qb.SelectTeen
                })
            },
            isSelected: e => e === t,
            options: a,
            "data-migration-pending": !0
        })
    },
    B = () => {
        let e = (0, C.k)(),
            t = (0, E.A)(),
            n = (0, S.vx)(),
            s = (0, g.cV)(!!t),
            a = (0, S.v4)(s);
        return null === e ? null : t && 1 !== n.length ? (0, i.jsx)(H, {}) : (0, i.jsx)(w, {
            userId: e,
            subText: a
        })
    },
    Y = () => {
        let e = (0, g.Mo)(),
            t = (0, p.lI)(),
            n = (0, g.jp)(),
            s = (0, S.v4)(n);
        return (0, i.jsxs)("div", {
            className: G.kL,
            children: [(0, i.jsxs)("div", {
                className: G.vF,
                children: [(0, i.jsx)(V, {}), (0, i.jsx)(U, {})]
            }), (0, i.jsxs)("div", {
                className: M.a,
                children: [(0, i.jsx)("div", {
                    className: G.wx,
                    children: (0, i.jsx)(B, {})
                }), (0, i.jsxs)(u.BJc, {
                    gap: 32,
                    padding: 32,
                    fullWidth: !1,
                    children: [(0, i.jsx)("div", {
                        className: G.O2,
                        children: e.map(e => {
                            let [t, n] = e;
                            return (0, i.jsx)(I.A, {
                                displayType: t,
                                header: n.tooltipHeader()
                            }, `counter-${t}`)
                        })
                    }), (0, i.jsxs)("div", {
                        className: G.RJ,
                        children: [(0, i.jsx)(R.A, {}), t ? e.map(e => {
                            let [t] = e;
                            return (0, i.jsx)(k, {
                                displayType: t
                            }, `${t}-list`)
                        }) : (0, i.jsx)(O.A, {
                            className: G.RL,
                            text: s ?? ""
                        })]
                    })]
                })]
            })]
        })
    }