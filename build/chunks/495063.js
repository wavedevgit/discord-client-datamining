/** chunk id: 495063 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => T
});
var i = n(627968),
    s = n(64700),
    l = n(284009),
    r = n.n(l),
    a = n(989349),
    o = n.n(a),
    d = n(990078),
    c = n(397927),
    u = n(971630),
    m = n(942117),
    g = n(487552),
    x = n(311237),
    h = n(105917),
    _ = n(242564),
    p = n(476719),
    A = n(311750),
    f = n(985018),
    j = n(134249);
let N = e => {
    let {
        dateUtc: t
    } = e;
    return (0, i.jsx)(c.Text, {
        variant: "text-md/medium",
        color: "interactive-text-active",
        children: o()(t).utc().format("MMMM YYYY")
    })
};

function E(e) {
    let {
        item: t
    } = e, {
        ppgStatus: n,
        payoutStatus: s,
        ppgDeferralReasons: l,
        periodEndDate: r
    } = (0, h.Rs)(t), a = null != r ? o()(r).add(15, "days").toISOString() : void 0, d = (0, u.T4)(a, "MMM D");
    switch (n) {
        case A.U1.OPEN:
            return (0, i.jsxs)(i.Fragment, {
                children: [null != d ? f.intl.formatToPlainString(f.t.I6YOjS, {
                    payoutDate: d
                }) : f.intl.string(f.t.G5ATX6), (0, i.jsx)(g.A, {
                    className: j.$A
                })]
            });
        case A.U1.CANCELED:
            return (0, i.jsxs)(i.Fragment, {
                children: [f.intl.string(f.t["0SrNPx"]), (0, i.jsx)(c.aXh, {
                    size: "md",
                    color: "currentColor",
                    className: j.u5
                })]
            });
        case A.U1.PAYOUT_DEFERRED:
            if (l?.includes(A.MC.PAYOUT_SEIZED) === !0) return (0, i.jsxs)(i.Fragment, {
                children: [f.intl.string(f.t["0SrNPx"]), (0, i.jsx)(c.aXh, {
                    size: "md",
                    color: "currentColor",
                    className: j.u5
                })]
            });
            return (0, i.jsxs)(i.Fragment, {
                children: [f.intl.string(f.t.OtZ5kz), (0, i.jsx)(x.A, {
                    className: j.tK
                })]
            })
    }
    switch (s) {
        case A.bp.MANUAL:
        case A.bp.OPEN:
        case A.bp.PENDING:
        case A.bp.PROCESSING:
        case A.bp.SUBMITTED:
        case A.bp.PENDING_FUNDS:
        case A.bp.CANCELED:
        case A.bp.ERROR:
            return (0, i.jsxs)(i.Fragment, {
                children: [null != d ? f.intl.formatToPlainString(f.t.I6YOjS, {
                    payoutDate: d
                }) : f.intl.string(f.t.ubdQTt), (0, i.jsx)(g.A, {
                    className: j.$A
                })]
            });
        case A.bp.PAID:
            return (0, i.jsxs)(i.Fragment, {
                children: [f.intl.string(f.t.eoSslJ), (0, i.jsx)(c.yr3, {
                    size: "md",
                    color: "currentColor",
                    className: j.Ql
                })]
            });
        case A.bp.DEFERRED:
        case A.bp.DEFERRED_INTERNAL:
        case A.bp.REJECTED:
        case A.bp.RISK_REVIEW:
            return (0, i.jsxs)(i.Fragment, {
                children: [m.A.getStatusErrorText(s), (0, i.jsx)(c.aXh, {
                    size: "md",
                    color: "currentColor",
                    className: j.u5
                })]
            })
    }
    return null
}
let C = (0, _.CU)({
        key: "AMOUNT ",
        cellClassName: j.Fh,
        renderHeader() {
            let e = (0, i.jsx)(d.m, {
                text: f.intl.string(f.t.q3PkL5),
                children: (0, i.jsx)(c.mir, {
                    size: "xs",
                    color: "currentColor",
                    className: j.EU
                })
            });
            return (0, i.jsxs)(_.A3, {
                children: [f.intl.string(f.t.VodAGZ), e]
            })
        },
        getAmount: e => e.amount
    }),
    b = (0, p.gE)([(0, p.N7)({
        key: "PERIOD",
        cellClassName: j.Ii,
        renderHeader: () => (0, i.jsx)(_.A3, {
            children: f.intl.string(f.t.fThnXa)
        }),
        renderContent: e => (0, i.jsx)(N, {
            dateUtc: e.periodStartingAt
        }),
        renderExpandedContent(e, t) {
            r()(null != t, "CellProps should always be provided");
            let {
                ListingIdLabel: n
            } = t;
            return (0, i.jsx)(n, {
                listingId: e.listingId
            })
        }
    }), (0, p.N7)({
        ...C,
        renderContent: C.render,
        renderExpandedContent: (e, t) => C.render(e, t)
    }), (0, _.HA)({
        key: "STATUS ",
        cellClassName: j.xG,
        renderHeader() {
            let e = (0, i.jsx)(d.m, {
                text: f.intl.string(f.t.cIGvZI),
                children: (0, i.jsx)(c.mir, {
                    size: "xs",
                    color: "currentColor",
                    className: j.Cg
                })
            });
            return (0, i.jsxs)(_.A3, {
                children: [f.intl.string(f.t.oypxxw), e]
            })
        },
        renderContent: e => (0, i.jsx)(_.fh, {
            className: j.fo,
            children: (0, i.jsx)(E, {
                item: e
            })
        })
    })], {
        expandableToggleColumnKey: "DROPDOWN"
    });

function T(e) {
    let {
        ListingIdLabel: t,
        payoutsByPeriod: n
    } = e, {
        cellProps: l,
        data: r
    } = (0, p.vL)(n, {
        generateExpandedRows: e => Object.keys(e.ppgs).map(t => ({
            key: e.key + t,
            listingId: t,
            amount: e.ppgs[t]?.amount
        }))
    }), a = s.useMemo(() => ({
        ListingIdLabel: t,
        ...l
    }), [l, t]);
    return (0, i.jsx)(_.Ay, {
        columns: b,
        data: r,
        cellProps: a
    })
}