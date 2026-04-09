/** chunk id: 317547 params = (module,exports,require) **/
"use strict";
n.d(t, {
    Ay: () => L,
    Kh: () => I,
    MD: () => y,
    fh: () => T
}), n(321073);
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(989349),
    o = n.n(a),
    d = n(311907),
    c = n(990078),
    u = n(397927),
    m = n(596719),
    g = n(105917),
    x = n(580630),
    h = n(636194),
    _ = n(971630),
    A = n(942117),
    p = n(487552),
    f = n(311237),
    j = n(652215),
    N = n(311750),
    E = n(985018),
    C = n(432245);
let T = e => {
        let {
            children: t,
            className: n
        } = e;
        return (0, i.jsx)("div", {
            className: r()(C.Hn, n),
            children: t
        })
    },
    I = e => {
        let {
            children: t
        } = e;
        return (0, i.jsx)("div", {
            className: C.Hn,
            children: (0, x.$g)(t ?? 0, j.Yri.USD)
        })
    },
    b = e => {
        let {
            children: t
        } = e;
        return (0, i.jsx)(T, {
            className: C.fo,
            children: null != t ? t : "-"
        })
    },
    v = e => {
        let {
            children: t
        } = e;
        return (0, i.jsx)(T, {
            className: C.wJ,
            children: o()(t).utc().format("MMMM YYYY")
        })
    },
    S = e => {
        let {
            listingId: t
        } = e, n = (0, d.bG)([h.A], () => h.A.getSubscriptionListing(t)), s = n?.name ?? `[${E.intl.string(E.t["4tEmXR"])}]`;
        return (0, i.jsx)(T, {
            children: s
        })
    },
    y = e => {
        let {
            children: t
        } = e;
        return (0, i.jsxs)(T, {
            className: C.u4,
            children: [t ?? "-", " ", (0, i.jsx)(u.nys, {
                size: "md",
                color: "currentColor",
                className: C.BK,
                "aria-hidden": !0
            })]
        })
    },
    R = () => {
        let e = (0, i.jsx)(c.m, {
            text: E.intl.string(E.t.q3PkL5),
            children: (0, i.jsx)(u.mir, {
                size: "xs",
                color: "currentColor",
                className: C.EU
            })
        });
        return (0, i.jsxs)(i.Fragment, {
            children: [E.intl.string(E.t["/MWnxs"]), " ", e]
        })
    },
    O = () => {
        let e = (0, i.jsx)(c.m, {
            text: E.intl.string(E.t.cIGvZI),
            children: (0, i.jsx)(u.mir, {
                size: "xs",
                color: "currentColor",
                className: C.Cg
            })
        });
        return (0, i.jsxs)(i.Fragment, {
            children: [E.intl.string(E.t.oypxxw), " ", e]
        })
    },
    G = [{
        key: "dropdown",
        cellClassName: C.pR,
        renderHeader: () => null,
        render(e, t) {
            let {
                expandedRows: n,
                onToggleExpandRow: s
            } = t, l = n.has(e.key);
            return (0, i.jsx)(u.DUT, {
                className: r()(C.Hn, C.nn),
                onClick: () => s(e.key),
                children: (0, i.jsx)(u._BQ, {
                    size: "md",
                    color: "currentColor",
                    className: r()(C.Rq, {
                        [C.jH]: l
                    })
                })
            })
        }
    }, {
        key: "period",
        cellClassName: C.Ii,
        renderHeader: () => E.intl.string(E.t.fThnXa),
        render(e, t) {
            let {
                expandedRows: n
            } = t, s = [(0, i.jsx)(v, {
                children: e.periodStartingAt
            }, e.key)];
            if (n.has(e.key))
                for (let t in e.ppgs) s.push((0, i.jsx)(S, {
                    listingId: t
                }, t));
            return s
        }
    }, {
        key: "amount",
        cellClassName: r()(C.Fh, C.WI),
        renderHeader: () => (0, i.jsx)(R, {}),
        render(e, t) {
            let {
                expandedRows: n
            } = t, s = [(0, i.jsx)(I, {
                children: e.amount
            }, e.key)];
            if (n.has(e.key))
                for (let t in e.ppgs) {
                    let n = e.ppgs[t];
                    s.push((0, i.jsx)(I, {
                        children: n?.amount
                    }, t))
                }
            return s
        }
    }, {
        key: "status",
        cellClassName: r()(C.xG, C.WI),
        renderHeader: () => (0, i.jsx)(O, {}),
        render(e) {
            let {
                ppgStatus: t,
                payoutStatus: n,
                ppgDeferralReasons: s,
                periodEndDate: l
            } = (0, g.Rs)(e);
            return (0, i.jsx)(b, {
                children: ((e, t, n, s) => {
                    let l = null != s ? o()(s).add(15, "days").toISOString() : void 0,
                        r = (0, _.T4)(l, "MMM D");
                    switch (e) {
                        case N.U1.OPEN:
                            return (0, i.jsxs)(i.Fragment, {
                                children: [null != r ? E.intl.formatToPlainString(E.t.I6YOjS, {
                                    payoutDate: r
                                }) : E.intl.string(E.t.G5ATX6), (0, i.jsx)(p.A, {
                                    className: C.$A
                                })]
                            });
                        case N.U1.CANCELED:
                            return (0, i.jsxs)(i.Fragment, {
                                children: [E.intl.string(E.t["0SrNPx"]), (0, i.jsx)(u.aXh, {
                                    size: "md",
                                    color: "currentColor",
                                    className: C.u5
                                })]
                            });
                        case N.U1.PAYOUT_DEFERRED:
                            if (n?.includes(N.MC.PAYOUT_SEIZED) === !0) return (0, i.jsxs)(i.Fragment, {
                                children: [E.intl.string(E.t["0SrNPx"]), (0, i.jsx)(u.aXh, {
                                    size: "md",
                                    color: "currentColor",
                                    className: C.u5
                                })]
                            });
                            return (0, i.jsxs)(i.Fragment, {
                                children: [E.intl.string(E.t.OtZ5kz), (0, i.jsx)(f.A, {
                                    className: C.tK
                                })]
                            })
                    }
                    switch (t) {
                        case N.bp.MANUAL:
                        case N.bp.OPEN:
                        case N.bp.PENDING:
                        case N.bp.PROCESSING:
                        case N.bp.SUBMITTED:
                        case N.bp.PENDING_FUNDS:
                        case N.bp.CANCELED:
                        case N.bp.ERROR:
                            return (0, i.jsxs)(i.Fragment, {
                                children: [null != r ? E.intl.formatToPlainString(E.t.I6YOjS, {
                                    payoutDate: r
                                }) : E.intl.string(E.t.ubdQTt), (0, i.jsx)(p.A, {
                                    className: C.$A
                                })]
                            });
                        case N.bp.PAID:
                            return (0, i.jsxs)(i.Fragment, {
                                children: [E.intl.string(E.t.eoSslJ), (0, i.jsx)(u.yr3, {
                                    size: "md",
                                    color: "currentColor",
                                    className: C.Ql
                                })]
                            });
                        case N.bp.DEFERRED:
                        case N.bp.DEFERRED_INTERNAL:
                        case N.bp.REJECTED:
                        case N.bp.RISK_REVIEW:
                            return (0, i.jsxs)(i.Fragment, {
                                children: [A.A.getStatusErrorText(t), (0, i.jsx)(u.aXh, {
                                    size: "md",
                                    color: "currentColor",
                                    className: C.u5
                                })]
                            })
                    }
                    return null
                })(t, n, s, l)
            })
        }
    }],
    L = e => {
        let {
            payoutsByPeriod: t
        } = e, [n, l] = s.useState(new Set);
        return (0, i.jsx)("div", {
            className: C.CZ,
            children: (0, i.jsx)(m.A, {
                columns: G,
                data: t,
                className: C.tp,
                rowClassName: C.nM,
                headerClassName: C.wx,
                cellProps: {
                    onToggleExpandRow: e => {
                        l(t => {
                            let n = new Set(t);
                            return n.has(e) ? n.delete(e) : n.add(e), n
                        })
                    },
                    expandedRows: n
                }
            })
        })
    }