/** chunk id: 604151, original params: e,t,n (module,exports,require) **/
n.d(t, {
    Ay: () => C,
    LP: () => v,
    nK: () => E
}), n(896048);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(311907),
    o = n(397927),
    c = n(49229),
    u = n(730134),
    d = n(793574),
    p = n(994500),
    h = n(287809),
    g = n(975571),
    f = n(871930),
    m = n(355097),
    b = n(531525),
    A = n(652215),
    y = n(985018),
    O = n(193291);

function j(e) {
    let {
        listType: t,
        numberOfUsers: n
    } = e, l = "blocked" === t;
    return (0, r.jsxs)("div", {
        className: O.wx,
        children: [(0, r.jsx)("div", {
            className: O.zc,
            children: l ? (0, r.jsx)(o.KTN, {}) : (0, r.jsx)(o.G3N, {})
        }), (0, r.jsxs)("div", {
            className: O.Qq,
            children: [(0, r.jsx)(o.Text, {
                variant: "text-md/semibold",
                color: "interactive-text-active",
                children: y.intl.string(l ? y.t.PFOUKW : y.t["93ZDWE"])
            }), (0, r.jsx)(o.Text, {
                variant: "text-md/medium",
                color: "text-default",
                children: l ? y.intl.format(y.t["r91W/h"], {
                    numberOfBlockedUsers: n
                }) : y.intl.format(y.t.rXUeOl, {
                    numberOfIgnoredUsers: n
                })
            })]
        })]
    })
}

function x(e) {
    var t;
    let {
        userId: n,
        last: i
    } = e, g = (0, a.bG)([p.A], () => p.A.isBlocked(n)), f = (0, a.bG)([h.default], () => h.default.getUser(n)), [m, b] = l.useState(!1), A = l.useCallback(() => {
        b(!0), g ? c.A.unblockUser(n).catch(() => {
            b(!1)
        }) : c.A.unignoreUser(n, d.A.USER_SETTINGS).catch(() => {
            b(!1)
        })
    }, [g, n]);
    return null == f ? null : (0, r.jsxs)("div", {
        className: s()(O.nM, {
            [O.fW]: i
        }),
        children: [(0, r.jsxs)("div", {
            className: O.eF,
            children: [(0, r.jsx)(u.A, {
                user: f,
                size: o._3J.SIZE_40
            }), (0, r.jsxs)("div", {
                className: O.Qq,
                children: [(0, r.jsx)(o.Text, {
                    variant: "text-md/semibold",
                    color: "text-strong",
                    children: null != (t = f.globalName) ? t : f.username
                }), (0, r.jsx)(o.Text, {
                    variant: "text-sm/medium",
                    color: "text-default",
                    children: null != f.globalName ? f.username : null
                })]
            })]
        }), (0, r.jsx)(o.Button, {
            variant: "secondary",
            text: y.intl.string(g ? y.t.XyHpKH : y.t["8wXU9B"]),
            onClick: A,
            loading: m
        })]
    })
}

function _(e) {
    let {
        setting: t,
        userIds: n,
        listType: i
    } = e, [s, a] = l.useState(5);
    return (0, r.jsx)(f.h, {
        setting: t,
        children: (0, r.jsxs)("div", {
            className: O.Nr,
            children: [(0, r.jsx)(j, {
                listType: i,
                numberOfUsers: n.length
            }), (0, r.jsx)("div", {
                className: O.jS,
                children: n.slice(0, s).map((e, t) => (0, r.jsx)(x, {
                    userId: e,
                    last: t === n.length - 1
                }, e))
            }), s < n.length ? (0, r.jsx)("div", {
                className: O.vM,
                children: (0, r.jsx)(o.DUT, {
                    onClick: () => {
                        a(e => e + 5)
                    },
                    className: O.Qf,
                    children: (0, r.jsx)(o.Text, {
                        variant: "text-sm/semibold",
                        color: "text-default",
                        children: y.intl.format(y.t.jULEDr, {
                            numberOfUsers: s + 5 < n.length ? 5 : n.length - s
                        })
                    })
                })
            }) : null]
        })
    })
}

function v() {
    let e = (0, a.yK)([p.A], () => p.A.getBlockedIDs());
    return (0, r.jsx)(_, {
        setting: b.H.BLOCKED_USERS,
        userIds: e,
        listType: "blocked"
    })
}

function E() {
    let e = (0, a.yK)([p.A], () => p.A.getIgnoredIDs());
    return (0, r.jsx)(_, {
        setting: b.H.IGNORED_USERS,
        userIds: e,
        listType: "ignored"
    })
}

function C() {
    return (0, r.jsxs)(f.h, {
        setting: b.H.RESTRICTED_USERS,
        scrollPosition: m.d1.RESTRICTED_ACCOUNTS,
        scrollHighlightDelay: 900,
        children: [(0, r.jsx)(f._, {
            header: y.intl.string(y.t["3wRort"]),
            description: y.intl.format(y.t["0aNQo9"], {
                helpArticle: g.A.getArticleURL(A.MVz.STEALTH_REMEDIATION_FEATURE_GUIDE)
            })
        }), (0, r.jsx)(v, {}), (0, r.jsx)(E, {})]
    })
}