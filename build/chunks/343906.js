/** chunk id: 343906 params = (module,exports,require) **/
n.d(t, {
    A: () => F,
    O: () => w
});
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(284009),
    o = n.n(r),
    d = n(417597),
    c = n(843282),
    u = n(397927),
    _ = n(954571),
    m = n(661191),
    g = n(695515),
    A = n(923531),
    x = n(294433),
    h = n(10005),
    p = n(400641),
    T = n(438732),
    E = n(500470),
    S = n(153739),
    C = n(834981),
    f = n(607822),
    b = n(254847),
    N = n(436805),
    I = n(773349),
    v = n(283900),
    j = n(475833),
    y = n(469696),
    R = n(400553),
    O = n(191627),
    D = n(652215),
    L = n(842130),
    P = n(985018),
    G = n(976744),
    M = n(896498);

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
        (0, u.showToast)((0, u.createToast)(P.intl.string(L.default.Wu8BK2), u.ToastType.FAILURE))
    }, []), l = (0, T.A)(), r = (0, p._w)(t), d = (0, p.Gn)(t), c = (0, p.Ju)(t), {
        loadMore: _,
        isMoreLoading: x
    } = (0, h.A)({
        onError: n
    }), E = (0, A.kN)().get(t), [S, C] = s.useState(O.PH), f = s.useCallback(() => {
        C(e => e + O.PH), _(t)
    }, [t, _]);
    o()(E, `No text for action type: ${t}`);
    let v = t === O.NV.PURCHASES && null != c ? E.sectionHeader(c) : E.sectionHeader(d),
        j = s.useCallback(e => {
            let {
                row: t
            } = e, n = r[t];
            if ((0, A.aq)(n)) {
                let e = m.default.extractTimestamp(n.event_id),
                    t = (0, A.i6)(e, E.timestampFormatter);
                return (0, i.jsx)(I.A, {
                    userId: n.entity_id,
                    subText: t
                }, n.event_id)
            }
            if ((0, A.Is)(n)) return (0, i.jsx)(b.A, {
                guildId: n.entity_id
            }, n.event_id);
            if ((0, A.u7)(n)) {
                let e = g.A.getPurchaseInfo(n.entity_id);
                return null == e ? null : (0, i.jsx)(N.A, {
                    skuId: e.sku_id,
                    subscriptionPlanId: e.subscription_plan_id,
                    total: e.total,
                    currency: e.currency
                }, n.event_id)
            }
            return null
        }, [r, E.timestampFormatter]),
        y = s.useCallback(() => (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(u.Text, {
                className: G.bV,
                variant: "text-md/semibold",
                children: v
            }), void 0 !== E.sectionDescription ? (0, i.jsx)(u.Text, {
                className: G.yV,
                variant: "text-md/medium",
                color: "text-muted",
                children: E.sectionDescription(l ?? !1)
            }) : null]
        }), [v, E, l]);
    if (0 === r.length) return null;
    let R = r.slice(0, S);
    return (0, i.jsxs)("div", {
        className: G.A2,
        children: [y(), (0, i.jsx)("div", {
            className: G.o1,
            style: {
                maxHeight: 65 * R.length
            },
            children: R.map((e, t) => j({
                row: t
            }))
        }), R.length < d ? (0, i.jsx)(u.DUT, {
            className: a()(G.FQ, {
                [G.r9]: x
            }),
            onClick: f,
            role: "button",
            "aria-disabled": x,
            children: x ? (0, i.jsx)(u.y$y, {
                type: u.y$y.Type.PULSING_ELLIPSIS,
                className: G.u1
            }) : (0, i.jsx)(u.Text, {
                className: G.UX,
                variant: "text-sm/bold",
                children: P.intl.format(L.default["7dMmJY"], {
                    pageSize: Math.max(1, Math.min(d - R.length, O.PH))
                })
            })
        }) : null]
    })
}
let V = () => {
        let e = (0, T.A)(),
            t = (0, C.vx)(),
            n = (0, x.y)(P.intl.formatToPlainString(L.default["7hqFl9"], {
                activeLinks: t.length
            }), P.intl.string(L.default["Q/D/0Q"])),
            s = (0, A.cV)(!!e),
            l = (0, C.v4)(s);
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
    w = s.memo(e => {
        let {
            userId: t,
            subText: n,
            avatarSize: s = u._3J.SIZE_40,
            hideUserTag: l = !1
        } = e, a = (0, S.F7)(t);
        return void 0 === a ? null : (0, i.jsxs)("div", {
            className: G.iO,
            children: [(0, i.jsx)(v.H, {
                user: a,
                avatarSize: s
            }), (0, i.jsxs)("div", {
                className: G.TK,
                children: [(0, i.jsx)(j.A, {
                    user: a,
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
        let e = (0, C.GR)(),
            t = (0, d.bG)([g.A], () => g.A.getSelectedTeenId()),
            {
                selectTeenUser: n
            } = (0, h.A)({}),
            l = e.map(e => ({
                label: e.id,
                value: e.id
            })),
            a = s.useCallback(e => (0, i.jsx)(w, {
                userId: e.value,
                avatarSize: u._3J.SIZE_24
            }), []);
        return (0, i.jsx)(c.Pw, {
            className: G.Lt,
            renderOptionLabel: a,
            renderOptionValue: e => {
                let [t] = e;
                return a(t)
            },
            serialize: e => e,
            select: e => {
                n(e), _.default.track(D.HAw.FAMILY_CENTER_ACTION, {
                    action: O.qb.SelectTeen
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
            n = (0, C.vx)(),
            s = (0, A.cV)(!!t),
            l = (0, C.v4)(s);
        return null === e ? null : t && 1 !== n.length ? (0, i.jsx)(B, {}) : (0, i.jsx)(w, {
            userId: e,
            subText: l
        })
    },
    F = () => {
        let e = (0, A.Mo)(),
            t = (0, p.lI)(),
            n = (0, A.jp)(),
            s = (0, C.v4)(n);
        return (0, i.jsxs)("div", {
            className: G.kL,
            children: [(0, i.jsxs)("div", {
                className: G.vF,
                children: [(0, i.jsx)(V, {}), (0, i.jsx)(U, {})]
            }), (0, i.jsxs)("div", {
                className: M.a,
                children: [(0, i.jsx)("div", {
                    className: G.wx,
                    children: (0, i.jsx)(H, {})
                }), (0, i.jsxs)(u.BJc, {
                    gap: 32,
                    padding: 32,
                    fullWidth: !1,
                    children: [(0, i.jsx)("div", {
                        className: G.O2,
                        children: e.map(e => {
                            let [t, n] = e;
                            return (0, i.jsx)(f.A, {
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
                        }) : (0, i.jsx)(y.A, {
                            className: G.RL,
                            text: s ?? ""
                        })]
                    })]
                })]
            })]
        })
    }