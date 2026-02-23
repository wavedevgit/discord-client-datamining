/** chunk id: 604151, original params: e,t,n (module,exports,require) **/
n.d(t, {
    Ay: () => b,
    LP: () => f,
    nK: () => N
});
var i = n(627968),
    s = n(64700),
    a = n(503698),
    r = n.n(a),
    l = n(311907),
    o = n(397927),
    c = n(49229),
    d = n(730134),
    u = n(793574),
    _ = n(994500),
    m = n(287809),
    A = n(975571),
    g = n(871930),
    h = n(355097),
    x = n(531525),
    p = n(652215),
    E = n(985018),
    C = n(193291);

function T(e) {
    let {
        listType: t,
        numberOfUsers: n
    } = e, s = "blocked" === t;
    return (0, i.jsxs)("div", {
        className: C.wx,
        children: [(0, i.jsx)("div", {
            className: C.zc,
            children: s ? (0, i.jsx)(o.KTN, {}) : (0, i.jsx)(o.G3N, {})
        }), (0, i.jsxs)("div", {
            className: C.Qq,
            children: [(0, i.jsx)(o.Text, {
                variant: "text-md/semibold",
                color: "interactive-text-active",
                children: E.intl.string(s ? E.t.PFOUKW : E.t["93ZDWE"])
            }), (0, i.jsx)(o.Text, {
                variant: "text-md/medium",
                color: "text-default",
                children: s ? E.intl.format(E.t["r91W/h"], {
                    numberOfBlockedUsers: n
                }) : E.intl.format(E.t.rXUeOl, {
                    numberOfIgnoredUsers: n
                })
            })]
        })]
    })
}

function S(e) {
    let {
        userId: t,
        last: n
    } = e, a = (0, l.bG)([_.A], () => _.A.isBlocked(t)), A = (0, l.bG)([m.default], () => m.default.getUser(t)), [g, h] = s.useState(!1), x = s.useCallback(() => {
        h(!0), a ? c.A.unblockUser(t).catch(() => {
            h(!1)
        }) : c.A.unignoreUser(t, u.A.USER_SETTINGS).catch(() => {
            h(!1)
        })
    }, [a, t]);
    return null == A ? null : (0, i.jsxs)("div", {
        className: r()(C.nM, {
            [C.fW]: n
        }),
        children: [(0, i.jsxs)("div", {
            className: C.eF,
            children: [(0, i.jsx)(d.A, {
                user: A,
                size: o._3J.SIZE_40
            }), (0, i.jsxs)("div", {
                className: C.Qq,
                children: [(0, i.jsx)(o.Text, {
                    variant: "text-md/semibold",
                    color: "text-strong",
                    children: A.globalName ?? A.username
                }), (0, i.jsx)(o.Text, {
                    variant: "text-sm/medium",
                    color: "text-default",
                    children: null != A.globalName ? A.username : null
                })]
            })]
        }), (0, i.jsx)(o.Button, {
            variant: "secondary",
            text: E.intl.string(a ? E.t.XyHpKH : E.t["8wXU9B"]),
            onClick: x,
            loading: g
        })]
    })
}

function I(e) {
    let {
        setting: t,
        userIds: n,
        listType: a
    } = e, [r, l] = s.useState(5);
    return (0, i.jsx)(g.h, {
        setting: t,
        children: (0, i.jsxs)("div", {
            className: C.Nr,
            children: [(0, i.jsx)(T, {
                listType: a,
                numberOfUsers: n.length
            }), (0, i.jsx)("div", {
                className: C.jS,
                children: n.slice(0, r).map((e, t) => (0, i.jsx)(S, {
                    userId: e,
                    last: t === n.length - 1
                }, e))
            }), r < n.length ? (0, i.jsx)("div", {
                className: C.vM,
                children: (0, i.jsx)(o.DUT, {
                    onClick: () => {
                        l(e => e + 5)
                    },
                    className: C.Qf,
                    children: (0, i.jsx)(o.Text, {
                        variant: "text-sm/semibold",
                        color: "text-default",
                        children: E.intl.format(E.t.jULEDr, {
                            numberOfUsers: r + 5 < n.length ? 5 : n.length - r
                        })
                    })
                })
            }) : null]
        })
    })
}

function f() {
    let e = (0, l.yK)([_.A], () => _.A.getBlockedIDs());
    return (0, i.jsx)(I, {
        setting: x.H.BLOCKED_USERS,
        userIds: e,
        listType: "blocked"
    })
}

function N() {
    let e = (0, l.yK)([_.A], () => _.A.getIgnoredIDs());
    return (0, i.jsx)(I, {
        setting: x.H.IGNORED_USERS,
        userIds: e,
        listType: "ignored"
    })
}

function b() {
    return (0, i.jsxs)(g.h, {
        setting: x.H.RESTRICTED_USERS,
        scrollPosition: h.d1.RESTRICTED_ACCOUNTS,
        scrollHighlightDelay: 900,
        children: [(0, i.jsx)(g._, {
            header: E.intl.string(E.t["3wRort"]),
            description: E.intl.format(E.t["0aNQo9"], {
                helpArticle: A.A.getArticleURL(p.MVz.STEALTH_REMEDIATION_FEATURE_GUIDE)
            })
        }), (0, i.jsx)(f, {}), (0, i.jsx)(N, {})]
    })
}