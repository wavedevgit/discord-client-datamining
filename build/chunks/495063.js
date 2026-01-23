/** Chunk was on 47841 **/
/** chunk id: 495063, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => I
});
var r, i, l = n(627968),
    s = n(64700),
    a = n(284009),
    o = n.n(a),
    c = n(989349),
    d = n.n(c),
    u = n(990078),
    g = n(397927),
    m = n(971630),
    p = n(942117),
    f = n(487552),
    b = n(311237),
    h = n(105917),
    x = n(242564),
    j = n(476719),
    _ = n(311750),
    O = n(985018),
    v = n(473711);

function y(e) {
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
let A = e => {
    let {
        dateUtc: t
    } = e;
    return (0, l.jsx)(g.Text, {
        variant: "text-md/medium",
        color: "interactive-text-active",
        children: d()(t).utc().format("MMMM YYYY")
    })
};

function E(e) {
    let {
        item: t
    } = e, {
        ppgStatus: n,
        payoutStatus: r,
        ppgDeferralReasons: i,
        periodEndDate: s
    } = (0, h.Rs)(t), a = null != s ? d()(s).add(15, "days").toISOString() : void 0, o = (0, m.T4)(a, "MMM D");
    switch (n) {
        case _.U1.OPEN:
            return (0, l.jsxs)(l.Fragment, {
                children: [null != o ? O.intl.formatToPlainString(O.t.I6YOjS, {
                    payoutDate: o
                }) : O.intl.string(O.t.G5ATX6), (0, l.jsx)(f.A, {
                    className: v.$A
                })]
            });
        case _.U1.CANCELED:
            return (0, l.jsxs)(l.Fragment, {
                children: [O.intl.string(O.t["0SrNPx"]), (0, l.jsx)(g.aXh, {
                    size: "md",
                    color: "currentColor",
                    className: v.u5
                })]
            });
        case _.U1.PAYOUT_DEFERRED:
            if ((null == i ? void 0 : i.includes(_.MC.PAYOUT_SEIZED)) === !0) return (0, l.jsxs)(l.Fragment, {
                children: [O.intl.string(O.t["0SrNPx"]), (0, l.jsx)(g.aXh, {
                    size: "md",
                    color: "currentColor",
                    className: v.u5
                })]
            });
            return (0, l.jsxs)(l.Fragment, {
                children: [O.intl.string(O.t.OtZ5kz), (0, l.jsx)(b.A, {
                    className: v.tK
                })]
            })
    }
    switch (r) {
        case _.bp.MANUAL:
        case _.bp.OPEN:
        case _.bp.PENDING:
        case _.bp.PROCESSING:
        case _.bp.SUBMITTED:
        case _.bp.PENDING_FUNDS:
        case _.bp.CANCELED:
        case _.bp.ERROR:
            return (0, l.jsxs)(l.Fragment, {
                children: [null != o ? O.intl.formatToPlainString(O.t.I6YOjS, {
                    payoutDate: o
                }) : O.intl.string(O.t.ubdQTt), (0, l.jsx)(f.A, {
                    className: v.$A
                })]
            });
        case _.bp.PAID:
            return (0, l.jsxs)(l.Fragment, {
                children: [O.intl.string(O.t.eoSslJ), (0, l.jsx)(g.yr3, {
                    size: "md",
                    color: "currentColor",
                    className: v.Ql
                })]
            });
        case _.bp.DEFERRED:
        case _.bp.DEFERRED_INTERNAL:
        case _.bp.REJECTED:
        case _.bp.RISK_REVIEW:
            return (0, l.jsxs)(l.Fragment, {
                children: [p.A.getStatusErrorText(r), (0, l.jsx)(g.aXh, {
                    size: "md",
                    color: "currentColor",
                    className: v.u5
                })]
            })
    }
    return null
}
let N = (0, x.CU)({
        key: "AMOUNT ",
        cellClassName: v.Fh,
        renderHeader() {
            let e = (0, l.jsx)(u.m, {
                text: O.intl.string(O.t.q3PkL5),
                children: (0, l.jsx)(g.mir, {
                    size: "xs",
                    color: "currentColor",
                    className: v.EU
                })
            });
            return (0, l.jsxs)(x.A3, {
                children: [O.intl.string(O.t.VodAGZ), e]
            })
        },
        getAmount: e => e.amount
    }),
    S = (0, j.gE)([(0, j.N7)({
        key: "PERIOD",
        cellClassName: v.Ii,
        renderHeader: () => (0, l.jsx)(x.A3, {
            children: O.intl.string(O.t.fThnXa)
        }),
        renderContent: e => (0, l.jsx)(A, {
            dateUtc: e.periodStartingAt
        }),
        renderExpandedContent(e, t) {
            o()(null != t, "CellProps should always be provided");
            let {
                ListingIdLabel: n
            } = t;
            return (0, l.jsx)(n, {
                listingId: e.listingId
            })
        }
    }), (0, j.N7)((r = y({}, N), i = i = {
        renderContent: N.render,
        renderExpandedContent: (e, t) => N.render(e, t)
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
        }
        return n
    })(Object(i)).forEach(function(e) {
        Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(i, e))
    }), r)), (0, x.HA)({
        key: "STATUS ",
        cellClassName: v.xG,
        renderHeader() {
            let e = (0, l.jsx)(u.m, {
                text: O.intl.string(O.t.cIGvZI),
                children: (0, l.jsx)(g.mir, {
                    size: "xs",
                    color: "currentColor",
                    className: v.Cg
                })
            });
            return (0, l.jsxs)(x.A3, {
                children: [O.intl.string(O.t.oypxxw), e]
            })
        },
        renderContent: e => (0, l.jsx)(x.fh, {
            className: v.fo,
            children: (0, l.jsx)(E, {
                item: e
            })
        })
    })], {
        expandableToggleColumnKey: "DROPDOWN"
    });

function I(e) {
    let {
        ListingIdLabel: t,
        payoutsByPeriod: n
    } = e, {
        cellProps: r,
        data: i
    } = (0, j.vL)(n, {
        generateExpandedRows: e => Object.keys(e.ppgs).map(t => {
            var n;
            return {
                key: e.key + t,
                listingId: t,
                amount: null == (n = e.ppgs[t]) ? void 0 : n.amount
            }
        })
    }), a = s.useMemo(() => y({
        ListingIdLabel: t
    }, r), [r, t]);
    return (0, l.jsx)(x.Ay, {
        columns: S,
        data: i,
        cellProps: a
    })
}