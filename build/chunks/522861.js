/** chunk id: 522861 params = (module,exports,require) **/
n.d(t, {
    LP: () => f,
    nK: () => S
});
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(311907),
    o = n(397927),
    d = n(49229),
    c = n(730134),
    u = n(793574),
    m = n(994500),
    g = n(287809);
n(975571);
var _ = n(106148);
n(652215);
var x = n(985018),
    A = n(714920);

function h(e) {
    let {
        listType: t,
        numberOfUsers: n
    } = e, s = "blocked" === t;
    return (0, i.jsxs)("div", {
        className: A.wx,
        children: [(0, i.jsx)("div", {
            className: A.zc,
            children: s ? (0, i.jsx)(o.KTN, {}) : (0, i.jsx)(o.G3N, {})
        }), (0, i.jsxs)("div", {
            className: A.Qq,
            children: [(0, i.jsx)(o.Text, {
                variant: "text-md/semibold",
                color: "interactive-text-active",
                children: x.intl.string(s ? x.t.PFOUKW : x.t["93ZDWE"])
            }), (0, i.jsx)(o.Text, {
                variant: "text-md/medium",
                color: "text-default",
                children: s ? x.intl.format(x.t["r91W/h"], {
                    numberOfBlockedUsers: n
                }) : x.intl.format(x.t.rXUeOl, {
                    numberOfIgnoredUsers: n
                })
            })]
        })]
    })
}

function p(e) {
    let {
        userId: t,
        last: n
    } = e, l = (0, r.bG)([m.A], () => m.A.isBlocked(t)), _ = (0, r.bG)([g.default], () => g.default.getUser(t)), [h, p] = s.useState(!1), T = s.useCallback(() => {
        p(!0), l ? d.A.unblockUser(t).catch(() => {
            p(!1)
        }) : d.A.unignoreUser(t, u.A.USER_SETTINGS).catch(() => {
            p(!1)
        })
    }, [l, t]);
    return null == _ ? null : (0, i.jsxs)("div", {
        className: a()(A.nM, {
            [A.fW]: n
        }),
        children: [(0, i.jsxs)("div", {
            className: A.eF,
            children: [(0, i.jsx)(c.A, {
                user: _,
                size: o._3J.SIZE_40
            }), (0, i.jsxs)("div", {
                className: A.Qq,
                children: [(0, i.jsx)(o.Text, {
                    variant: "text-md/semibold",
                    color: "text-strong",
                    children: _.globalName ?? _.username
                }), (0, i.jsx)(o.Text, {
                    variant: "text-sm/medium",
                    color: "text-default",
                    children: null != _.globalName ? _.username : null
                })]
            })]
        }), (0, i.jsx)(o.Button, {
            variant: "secondary",
            text: x.intl.string(l ? x.t.XyHpKH : x.t["8wXU9B"]),
            onClick: T,
            loading: h
        })]
    })
}

function T(e) {
    let {
        userIds: t,
        listType: n
    } = e, [l, a] = s.useState(5);
    return (0, i.jsx)(_.h, {
        children: (0, i.jsxs)("div", {
            className: A.Nr,
            children: [(0, i.jsx)(h, {
                listType: n,
                numberOfUsers: t.length
            }), (0, i.jsx)("div", {
                className: A.jS,
                children: t.slice(0, l).map((e, n) => (0, i.jsx)(p, {
                    userId: e,
                    last: n === t.length - 1
                }, e))
            }), l < t.length ? (0, i.jsx)("div", {
                className: A.vM,
                children: (0, i.jsx)(o.DUT, {
                    onClick: () => {
                        a(e => e + 5)
                    },
                    className: A.Qf,
                    children: (0, i.jsx)(o.Text, {
                        variant: "text-sm/semibold",
                        color: "text-default",
                        children: x.intl.format(x.t.jULEDr, {
                            numberOfUsers: l + 5 < t.length ? 5 : t.length - l
                        })
                    })
                })
            }) : null]
        })
    })
}

function f() {
    let e = (0, r.yK)([m.A], () => m.A.getBlockedIDs());
    return (0, i.jsx)(T, {
        userIds: e,
        listType: "blocked"
    })
}

function S() {
    let e = (0, r.yK)([m.A], () => m.A.getIgnoredIDs());
    return (0, i.jsx)(T, {
        userIds: e,
        listType: "ignored"
    })
}