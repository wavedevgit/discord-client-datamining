/** Chunk was on 39048 **/
/** chunk id: 317547, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    Ay: () => R,
    Kh: () => E,
    MD: () => T,
    fh: () => A
}), n(321073), n(896048);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(989349),
    o = n.n(a),
    c = n(311907),
    d = n(990078),
    u = n(397927),
    g = n(596719),
    m = n(105917),
    p = n(580630),
    f = n(636194),
    h = n(971630),
    b = n(942117),
    x = n(487552),
    j = n(311237),
    _ = n(652215),
    O = n(311750),
    v = n(985018),
    y = n(921503);
let A = e => {
        let {
            children: t,
            className: n
        } = e;
        return (0, r.jsx)("div", {
            className: s()(y.Hn, n),
            children: t
        })
    },
    E = e => {
        let {
            children: t
        } = e;
        return (0, r.jsx)("div", {
            className: y.Hn,
            children: (0, p.$g)(null != t ? t : 0, _.Yri.USD)
        })
    },
    N = e => {
        let {
            children: t
        } = e;
        return (0, r.jsx)(A, {
            className: y.fo,
            children: null != t ? t : "-"
        })
    },
    S = e => {
        let {
            children: t
        } = e;
        return (0, r.jsx)(A, {
            className: y.wJ,
            children: o()(t).utc().format("MMMM YYYY")
        })
    },
    I = e => {
        var t;
        let {
            listingId: n
        } = e, i = (0, c.bG)([f.A], () => f.A.getSubscriptionListing(n)), l = null != (t = null == i ? void 0 : i.name) ? t : "[".concat(v.intl.string(v.t["4tEmXR"]), "]");
        return (0, r.jsx)(A, {
            children: l
        })
    },
    T = e => {
        let {
            children: t
        } = e;
        return (0, r.jsxs)(A, {
            className: y.u4,
            children: [null != t ? t : "-", " ", (0, r.jsx)(u.nys, {
                size: "md",
                color: "currentColor",
                className: y.BK,
                "aria-hidden": !0
            })]
        })
    },
    C = () => {
        let e = (0, r.jsx)(d.m, {
            text: v.intl.string(v.t.q3PkL5),
            children: (0, r.jsx)(u.mir, {
                size: "xs",
                color: "currentColor",
                className: y.EU
            })
        });
        return (0, r.jsxs)(r.Fragment, {
            children: [v.intl.string(v.t["/MWnxs"]), " ", e]
        })
    },
    P = () => {
        let e = (0, r.jsx)(d.m, {
            text: v.intl.string(v.t.cIGvZI),
            children: (0, r.jsx)(u.mir, {
                size: "xs",
                color: "currentColor",
                className: y.Cg
            })
        });
        return (0, r.jsxs)(r.Fragment, {
            children: [v.intl.string(v.t.oypxxw), " ", e]
        })
    },
    w = [{
        key: "dropdown",
        cellClassName: y.pR,
        renderHeader: () => null,
        render(e, t) {
            let {
                expandedRows: n,
                onToggleExpandRow: i
            } = t, l = n.has(e.key);
            return (0, r.jsx)(u.DUT, {
                className: s()(y.Hn, y.nn),
                onClick: () => i(e.key),
                children: (0, r.jsx)(u._BQ, {
                    size: "md",
                    color: "currentColor",
                    className: s()(y.Rq, {
                        [y.jH]: l
                    })
                })
            })
        }
    }, {
        key: "period",
        cellClassName: y.Ii,
        renderHeader: () => v.intl.string(v.t.fThnXa),
        render(e, t) {
            let {
                expandedRows: n
            } = t, i = [(0, r.jsx)(S, {
                children: e.periodStartingAt
            }, e.key)];
            if (n.has(e.key))
                for (let t in e.ppgs) i.push((0, r.jsx)(I, {
                    listingId: t
                }, t));
            return i
        }
    }, {
        key: "amount",
        cellClassName: s()(y.Fh, y.WI),
        renderHeader: () => (0, r.jsx)(C, {}),
        render(e, t) {
            let {
                expandedRows: n
            } = t, i = [(0, r.jsx)(E, {
                children: e.amount
            }, e.key)];
            if (n.has(e.key))
                for (let t in e.ppgs) {
                    let n = e.ppgs[t];
                    i.push((0, r.jsx)(E, {
                        children: null == n ? void 0 : n.amount
                    }, t))
                }
            return i
        }
    }, {
        key: "status",
        cellClassName: s()(y.xG, y.WI),
        renderHeader: () => (0, r.jsx)(P, {}),
        render(e) {
            let {
                ppgStatus: t,
                payoutStatus: n,
                ppgDeferralReasons: i,
                periodEndDate: l
            } = (0, m.Rs)(e);
            return (0, r.jsx)(N, {
                children: ((e, t, n, i) => {
                    let l = null != i ? o()(i).add(15, "days").toISOString() : void 0,
                        s = (0, h.T4)(l, "MMM D");
                    switch (e) {
                        case O.U1.OPEN:
                            return (0, r.jsxs)(r.Fragment, {
                                children: [null != s ? v.intl.formatToPlainString(v.t.I6YOjS, {
                                    payoutDate: s
                                }) : v.intl.string(v.t.G5ATX6), (0, r.jsx)(x.A, {
                                    className: y.$A
                                })]
                            });
                        case O.U1.CANCELED:
                            return (0, r.jsxs)(r.Fragment, {
                                children: [v.intl.string(v.t["0SrNPx"]), (0, r.jsx)(u.aXh, {
                                    size: "md",
                                    color: "currentColor",
                                    className: y.u5
                                })]
                            });
                        case O.U1.PAYOUT_DEFERRED:
                            if ((null == n ? void 0 : n.includes(O.MC.PAYOUT_SEIZED)) === !0) return (0, r.jsxs)(r.Fragment, {
                                children: [v.intl.string(v.t["0SrNPx"]), (0, r.jsx)(u.aXh, {
                                    size: "md",
                                    color: "currentColor",
                                    className: y.u5
                                })]
                            });
                            return (0, r.jsxs)(r.Fragment, {
                                children: [v.intl.string(v.t.OtZ5kz), (0, r.jsx)(j.A, {
                                    className: y.tK
                                })]
                            })
                    }
                    switch (t) {
                        case O.bp.MANUAL:
                        case O.bp.OPEN:
                        case O.bp.PENDING:
                        case O.bp.PROCESSING:
                        case O.bp.SUBMITTED:
                        case O.bp.PENDING_FUNDS:
                        case O.bp.CANCELED:
                        case O.bp.ERROR:
                            return (0, r.jsxs)(r.Fragment, {
                                children: [null != s ? v.intl.formatToPlainString(v.t.I6YOjS, {
                                    payoutDate: s
                                }) : v.intl.string(v.t.ubdQTt), (0, r.jsx)(x.A, {
                                    className: y.$A
                                })]
                            });
                        case O.bp.PAID:
                            return (0, r.jsxs)(r.Fragment, {
                                children: [v.intl.string(v.t.eoSslJ), (0, r.jsx)(u.yr3, {
                                    size: "md",
                                    color: "currentColor",
                                    className: y.Ql
                                })]
                            });
                        case O.bp.DEFERRED:
                        case O.bp.DEFERRED_INTERNAL:
                        case O.bp.REJECTED:
                        case O.bp.RISK_REVIEW:
                            return (0, r.jsxs)(r.Fragment, {
                                children: [b.A.getStatusErrorText(t), (0, r.jsx)(u.aXh, {
                                    size: "md",
                                    color: "currentColor",
                                    className: y.u5
                                })]
                            })
                    }
                    return null
                })(t, n, i, l)
            })
        }
    }],
    R = e => {
        let {
            payoutsByPeriod: t
        } = e, [n, l] = i.useState(new Set);
        return (0, r.jsx)("div", {
            className: y.CZ,
            children: (0, r.jsx)(g.A, {
                columns: w,
                data: t,
                className: y.tp,
                rowClassName: y.nM,
                headerClassName: y.wx,
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