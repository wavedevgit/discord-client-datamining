/** Chunk was on 65298 **/
/** chunk id: 556499, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => T
}), n(896048), n(747238), n(321073);
var a = n(627968),
    l = n(64700),
    r = n(503698),
    i = n.n(r),
    s = n(989349),
    o = n.n(s),
    c = n(158954),
    d = n(562465),
    u = n(397927),
    m = n(147925),
    p = n(405269),
    h = n(661191),
    x = n(666055),
    g = n(776935),
    f = n(652215),
    b = n(601107),
    v = n(788868),
    j = n(815907),
    _ = n(935391);

function y(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            a = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), a.forEach(function(t) {
            var a;
            a = n[t], t in e ? Object.defineProperty(e, t, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = a
        })
    }
    return e
}
let A = {
        [f.Dmq.UNPAID]: "Unpaid",
        [f.Dmq.ACTIVE]: "Active",
        [f.Dmq.PAST_DUE]: "Past Due",
        [f.Dmq.CANCELED]: "Canceled",
        [f.Dmq.ENDED]: "Ended",
        [f.Dmq.ACCOUNT_HOLD]: "Account Hold",
        [f.Dmq.BILLING_RETRY]: "Billing Retry",
        [f.Dmq.PAUSED]: "Paused",
        [f.Dmq.PAUSE_PENDING]: "Pause Pending"
    },
    C = {
        [b.qf.UNKNOWN]: "Unknown",
        [b.qf.ADMIN]: "Admin",
        [b.qf.USER]: "User",
        [b.qf.FRACTIONAL_PREMIUM]: "Fractional Premium",
        [b.qf.DEFERRED_START]: "Deferred Start",
        [b.qf.USER_TEMPORARY_BAN]: "User Temp Ban"
    },
    S = [{
        id: "unpaid",
        label: "Unpaid",
        value: f.Dmq.UNPAID
    }, {
        id: "active",
        label: "Active",
        value: f.Dmq.ACTIVE
    }, {
        id: "pastDue",
        label: "Past Due",
        value: f.Dmq.PAST_DUE
    }, {
        id: "canceled",
        label: "Canceled",
        value: f.Dmq.CANCELED
    }, {
        id: "ended",
        label: "Ended",
        value: f.Dmq.ENDED
    }, {
        id: "accountHold",
        label: "Account Hold",
        value: f.Dmq.ACCOUNT_HOLD
    }, {
        id: "billingRetry",
        label: "Billing Retry",
        value: f.Dmq.BILLING_RETRY
    }, {
        id: "paused",
        label: "Paused",
        value: f.Dmq.PAUSED
    }, {
        id: "pausePending",
        label: "Pause Pending",
        value: f.Dmq.PAUSE_PENDING
    }];

function O(e) {
    let {
        subscription: t,
        onClose: n,
        onUpdated: r,
        transitionState: i
    } = e, [s, d] = l.useState(o()()), [m, p] = l.useState(o()().format("HH:mm")), [h, x] = l.useState(!1), [f, b] = l.useState(void 0), v = async () => {
        if (null == s) return void b("Please select a target date");
        let [e, a] = m.split(":").map(Number), l = s.clone().hours(e).minutes(a).seconds(0).milliseconds(0);
        x(!0), b(void 0);
        try {
            await g.tB(t.id, g.H7.TIME_TRAVEL, {
                targetDate: l,
                paymentType: g.J7.DEFAULT,
                sendReminderEmail: !1
            }), r(), n()
        } catch (e) {
            var i;
            b((null == (i = e.body) ? void 0 : i.message) || e.message || "Failed to time travel")
        } finally {
            x(!1)
        }
    };
    return (0, a.jsx)(c.Modal, {
        transitionState: i,
        onClose: () => (n(), Promise.resolve()),
        title: "Time Travel Subscription",
        size: "sm",
        actions: [{
            text: "Cancel",
            variant: "secondary",
            onClick: n
        }, {
            text: "Time Travel",
            variant: "primary",
            onClick: v,
            disabled: h || null == s
        }],
        children: (0, a.jsxs)(u.BJc, {
            gap: 16,
            children: [(0, a.jsx)(u.Text, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: "Select the target date and time to travel the subscription to. This will adjust the subscription period and trigger any necessary invoice operations."
            }), (0, a.jsx)(u.J3s, {
                label: "Target Date",
                value: s,
                onSelect: d
            }), (0, a.jsx)(u.nVY, {
                label: "Target Time (HH:mm)",
                children: (0, a.jsx)("input", {
                    type: "time",
                    value: m,
                    onChange: e => {
                        p(e.target.value)
                    },
                    className: _.Qn
                })
            }), (0, a.jsxs)(u.BJc, {
                gap: 8,
                children: [(0, a.jsx)(u.Text, {
                    variant: "text-xs/semibold",
                    color: "text-muted",
                    children: "Current Period"
                }), (0, a.jsxs)(u.BJc, {
                    gap: 4,
                    children: [(0, a.jsxs)(u.Text, {
                        variant: "text-xs/normal",
                        className: _.JX,
                        children: ["Start: ", o()(t.currentPeriodStart).format("YYYY-MM-DD HH:mm")]
                    }), (0, a.jsxs)(u.Text, {
                        variant: "text-xs/normal",
                        className: _.JX,
                        children: ["End: ", o()(t.currentPeriodEnd).format("YYYY-MM-DD HH:mm")]
                    })]
                })]
            }), null != f && (0, a.jsx)(u.wx6, {
                type: "critical",
                children: f
            })]
        })
    })
}

function T(e) {
    var t, n, r, s, c, b, T, E;
    let N, {
            subscription: w,
            onUpdated: I
        } = e,
        [k, P] = l.useState(!1),
        [R, D] = l.useState(!1),
        [M, L] = l.useState(!1),
        [U, B] = l.useState(!1),
        [G, F] = l.useState(null),
        [V, W] = l.useState(""),
        H = e => {
            let t = new Date(e);
            return h.default.fromTimestamp(t.getTime())
        },
        K = async e => {
            let {
                status: t = w.status,
                premiumStreakStart: n,
                endedAt: a
            } = e, l = y({
                subscription_status: t
            }, null != n ? {
                premium_streak_started_at: H(n)
            } : null, null != a ? {
                ended_at: H(a)
            } : null);
            await d.Bo.patch({
                url: "/debug/subscriptions/".concat(w.id),
                body: l,
                rejectWithError: !1
            }), I()
        }, z = async () => {
            try {
                await g.tB(w.id, g.H7.RENEW, {
                    targetDate: o()(new Date),
                    paymentType: g.J7.DEFAULT,
                    sendReminderEmail: !1
                })
            } catch (t) {
                var e;
                F((null == (e = t.body) ? void 0 : e.message) || t.message || "Failed to renew subscription")
            }
            I()
        }, q = async e => {
            let {
                accepted: t
            } = e;
            try {
                await d.Bo.post({
                    url: "/debug/subscriptions/".concat(w.id, "/members/").concat(V),
                    body: y({}, t ? {
                        accepted: !0
                    } : {}),
                    rejectWithError: !1
                }), W("")
            } catch (e) {
                var n;
                F((null == (n = e.body) ? void 0 : n.message) || e.message || "Failed to add user to group")
            }
        }, Q = async () => {
            try {
                await d.Bo.del({
                    url: "/debug/subscriptions/".concat(w.id, "/members/").concat(V),
                    rejectWithError: !1
                }), W("")
            } catch (t) {
                var e;
                F((null == (e = t.body) ? void 0 : e.message) || t.message || "Failed to remove user from group")
            }
        }, Y = (null == (t = v.hd[w.planIdFromItems]) ? void 0 : t.premiumType) === v.PremiumTypes.TIER_0, J = null == (n = w.metadata) ? void 0 : n.ended_at, X = null != J ? new Date(J).toISOString().substring(0, 10) : "", $ = [{
            id: "id",
            label: "ID: ".concat(w.id),
            isDisabled: !1
        }, {
            id: "status",
            label: "Status: ".concat((null == E && (E = w.status), E in A) ? A[E] : "Unknown status ".concat(E)),
            isDisabled: !1
        }], Z = w.hasActiveTrial, ee = (null == (r = w.metadata) ? void 0 : r.active_discount_id) != null;
    return Z && $.push({
        id: "trial",
        label: "Has Trial",
        isDisabled: !1
    }), ee && $.push({
        id: "active-discount",
        label: "Has Active Discount",
        isDisabled: !1
    }), w.status !== f.Dmq.ACTIVE && $.push({
        id: "dates",
        label: "Dates: ".concat((0, p.i$)(w.createdAt, "LL"), " - ").concat((0, p.i$)(w.currentPeriodEnd, "LL")),
        isDisabled: !1
    }), w.status === f.Dmq.PAUSED && $.push({
        id: "pause-reason",
        label: "Pause Reason: ".concat(w.pauseReason in C ? C[w.pauseReason] : "Unknown pause reason ".concat(w.pauseReason)),
        isDisabled: !1
    }), (0, a.jsx)("div", {
        className: i()(j.Nr, Y ? j.Qf : j.C1),
        children: (0, a.jsxs)(u.nVY, {
            label: "Type: ".concat(null == (N = w.planIdFromItems) ? "No plan id" : N in v.hd ? v.hd[N].name : "Unknown plan id ".concat(N)),
            className: _.lI,
            children: [(0, a.jsx)(u.CR_, {
                items: $,
                label: "Tags",
                selectionMode: "none",
                selectionBehavior: "replace",
                disabledKeys: new Set
            }), Z && (0, a.jsxs)("div", {
                className: _.VK,
                children: [(0, a.jsxs)(u.DUT, {
                    onClick: () => {
                        L(!M)
                    },
                    className: _.Eh,
                    children: [(0, a.jsx)("div", {
                        children: (0, a.jsx)(u.Text, {
                            variant: "text-md/bold",
                            children: "Trial Info"
                        })
                    }), (0, a.jsx)(m.A, {
                        direction: M ? m.A.Directions.UP : m.A.Directions.DOWN
                    })]
                }), M && (0, a.jsxs)("ul", {
                    className: _.j3,
                    children: [(0, a.jsxs)("li", {
                        children: [(0, a.jsx)(u.Text, {
                            variant: "text-md/bold",
                            children: "trial_id"
                        }), (0, a.jsx)(u.Text, {
                            variant: "text-sm/normal",
                            children: w.trialId
                        })]
                    }), (0, a.jsxs)("li", {
                        children: [(0, a.jsx)(u.Text, {
                            variant: "text-md/bold",
                            children: "trial_ends_at"
                        }), (0, a.jsx)(u.Text, {
                            variant: "text-sm/normal",
                            children: null != w.trialEndsAt ? (0, p.i$)(w.trialEndsAt, "LL") : "N/A"
                        })]
                    })]
                })]
            }), ee && (0, a.jsxs)("div", {
                className: _.VK,
                children: [(0, a.jsxs)(u.DUT, {
                    onClick: () => {
                        B(!U)
                    },
                    className: _.Eh,
                    children: [(0, a.jsx)("div", {
                        children: (0, a.jsx)(u.Text, {
                            variant: "text-md/bold",
                            children: "Active Discount Info"
                        })
                    }), (0, a.jsx)(m.A, {
                        direction: U ? m.A.Directions.UP : m.A.Directions.DOWN
                    })]
                }), U && (0, a.jsxs)("ul", {
                    className: _.j3,
                    children: [(0, a.jsxs)("li", {
                        children: [(0, a.jsx)(u.Text, {
                            variant: "text-md/bold",
                            children: "active_discount_id"
                        }), (0, a.jsx)(u.Text, {
                            variant: "text-sm/normal",
                            children: null == (s = w.metadata) ? void 0 : s.active_discount_id
                        })]
                    }), (0, a.jsxs)("li", {
                        children: [(0, a.jsx)(u.Text, {
                            variant: "text-md/bold",
                            children: "active_discount_expires_at"
                        }), (0, a.jsx)(u.Text, {
                            variant: "text-sm/normal",
                            children: (null == (c = w.metadata) ? void 0 : c.active_discount_expires_at) != null ? (0, p.i$)(new Date(null == (b = w.metadata) ? void 0 : b.active_discount_expires_at), "LL") : "N/A"
                        })]
                    })]
                })]
            }), null != w.metadata && (0, a.jsxs)("div", {
                className: _.VK,
                children: [(0, a.jsxs)(u.DUT, {
                    onClick: () => {
                        P(!k)
                    },
                    className: _.Eh,
                    children: [(0, a.jsx)("div", {
                        children: (0, a.jsx)(u.Text, {
                            variant: "text-md/bold",
                            children: "Metadata"
                        })
                    }), (0, a.jsx)(m.A, {
                        direction: k ? m.A.Directions.UP : m.A.Directions.DOWN
                    })]
                }), k && (0, a.jsx)("ul", {
                    className: _.j3,
                    children: Object.entries(w.metadata).map(e => {
                        let [t, n] = e;
                        return (0, a.jsxs)("li", {
                            children: [(0, a.jsx)(u.Text, {
                                variant: "text-md/bold",
                                children: t
                            }), (0, a.jsx)(u.Text, {
                                variant: "text-sm/normal",
                                children: n
                            })]
                        }, t)
                    })
                })]
            }), (0, a.jsxs)("div", {
                className: _.VK,
                children: [(0, a.jsxs)(u.DUT, {
                    onClick: () => {
                        D(!R)
                    },
                    className: _.Eh,
                    children: [(0, a.jsx)("div", {
                        children: (0, a.jsx)(u.Text, {
                            variant: "text-md/bold",
                            children: "Modifications"
                        })
                    }), (0, a.jsx)(m.A, {
                        direction: R ? m.A.Directions.UP : m.A.Directions.DOWN
                    })]
                }), R && (0, a.jsxs)(u.BJc, {
                    gap: 24,
                    children: [(0, a.jsx)(u.l6P, {
                        label: "Status",
                        value: w.status,
                        options: S,
                        onSelectionChange: e => {
                            K({
                                status: e
                            })
                        },
                        selectionMode: "single",
                        fullWidth: !0
                    }), (0, a.jsxs)("div", {
                        children: [(0, a.jsxs)(u.BJc, {
                            gap: 12,
                            children: [(0, a.jsx)(u.Button, {
                                variant: "primary",
                                size: "sm",
                                text: "Renew Subscription",
                                onClick: e => z()
                            }), (0, a.jsx)(u.Button, {
                                variant: "secondary",
                                size: "sm",
                                text: "Time Travel",
                                onClick: () => {
                                    (0, u.mMO)(() => Promise.resolve(e => (0, a.jsx)(O, y({
                                        subscription: w,
                                        onUpdated: I
                                    }, e))))
                                }
                            })]
                        }), null !== G && (0, a.jsx)("div", {
                            className: _.z3,
                            children: (0, a.jsx)(u.wx6, {
                                type: "critical",
                                children: G
                            })
                        })]
                    }), (0, a.jsxs)(u.BJc, {
                        gap: 16,
                        children: [(0, a.jsx)(u.J3s, {
                            label: "Premium Streak Start Date",
                            value: o()(null == (T = w.premiumSince) ? void 0 : T.toISOString().substring(0, 10)),
                            onSelect: e => K({
                                premiumStreakStart: e.toISOString()
                            })
                        }), (0, a.jsx)(x.A, {})]
                    }), (0, a.jsx)(u.J3s, {
                        label: "Metadata Ended At Date",
                        value: o()(X),
                        onSelect: e => K({
                            endedAt: e.toISOString()
                        })
                    }), (null == w ? void 0 : w.planIdFromItems) === v.gD.PREMIUM_GROUP_MONTH && (0, a.jsxs)(u.BJc, {
                        gap: 8,
                        children: [(0, a.jsx)(u.ksK, {
                            label: "Subscription Group Member User ID",
                            value: V,
                            onChange: W
                        }), (0, a.jsxs)(u.BJc, {
                            gap: 8,
                            direction: "horizontal",
                            children: [(0, a.jsx)(u.Button, {
                                variant: "primary",
                                size: "sm",
                                text: "Add",
                                onClick: () => q({
                                    accepted: !0
                                }),
                                disabled: "" === V
                            }), (0, a.jsx)(u.Button, {
                                variant: "secondary",
                                size: "sm",
                                text: "Remove",
                                onClick: () => Q(),
                                disabled: "" === V
                            })]
                        })]
                    })]
                })]
            })]
        })
    })
}