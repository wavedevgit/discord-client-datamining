/** chunk id: 604151 params = (module,exports,require) **/
n.d(t, {
    Ay: () => I,
    LP: () => N,
    nK: () => b
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
    _ = n(994500),
    g = n(287809),
    m = n(975571),
    A = n(871930),
    h = n(355097),
    p = n(531525),
    x = n(652215),
    E = n(985018),
    T = n(938937);

function S(e) {
    let {
        listType: t,
        numberOfUsers: n
    } = e, s = "blocked" === t;
    return (0, i.jsxs)("div", {
        className: T.wx,
        children: [(0, i.jsx)("div", {
            className: T.zc,
            children: s ? (0, i.jsx)(o.KTN, {}) : (0, i.jsx)(o.G3N, {})
        }), (0, i.jsxs)("div", {
            className: T.Qq,
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

function C(e) {
    let {
        userId: t,
        last: n
    } = e, l = (0, r.bG)([_.A], () => _.A.isBlocked(t)), m = (0, r.bG)([g.default], () => g.default.getUser(t)), [A, h] = s.useState(!1), p = s.useCallback(() => {
        h(!0), l ? d.A.unblockUser(t).catch(() => {
            h(!1)
        }) : d.A.unignoreUser(t, u.A.USER_SETTINGS).catch(() => {
            h(!1)
        })
    }, [l, t]);
    return null == m ? null : (0, i.jsxs)("div", {
        className: a()(T.nM, {
            [T.fW]: n
        }),
        children: [(0, i.jsxs)("div", {
            className: T.eF,
            children: [(0, i.jsx)(c.A, {
                user: m,
                size: o._3J.SIZE_40
            }), (0, i.jsxs)("div", {
                className: T.Qq,
                children: [(0, i.jsx)(o.Text, {
                    variant: "text-md/semibold",
                    color: "text-strong",
                    children: m.globalName ?? m.username
                }), (0, i.jsx)(o.Text, {
                    variant: "text-sm/medium",
                    color: "text-default",
                    children: null != m.globalName ? m.username : null
                })]
            })]
        }), (0, i.jsx)(o.Button, {
            variant: "secondary",
            text: E.intl.string(l ? E.t.XyHpKH : E.t["8wXU9B"]),
            onClick: p,
            loading: A
        })]
    })
}

function f(e) {
    let {
        setting: t,
        userIds: n,
        listType: l
    } = e, [a, r] = s.useState(5);
    return (0, i.jsx)(A.h, {
        setting: t,
        children: (0, i.jsxs)("div", {
            className: T.Nr,
            children: [(0, i.jsx)(S, {
                listType: l,
                numberOfUsers: n.length
            }), (0, i.jsx)("div", {
                className: T.jS,
                children: n.slice(0, a).map((e, t) => (0, i.jsx)(C, {
                    userId: e,
                    last: t === n.length - 1
                }, e))
            }), a < n.length ? (0, i.jsx)("div", {
                className: T.vM,
                children: (0, i.jsx)(o.DUT, {
                    onClick: () => {
                        r(e => e + 5)
                    },
                    className: T.Qf,
                    children: (0, i.jsx)(o.Text, {
                        variant: "text-sm/semibold",
                        color: "text-default",
                        children: E.intl.format(E.t.jULEDr, {
                            numberOfUsers: a + 5 < n.length ? 5 : n.length - a
                        })
                    })
                })
            }) : null]
        })
    })
}

function N() {
    let e = (0, r.yK)([_.A], () => _.A.getBlockedIDs());
    return (0, i.jsx)(f, {
        setting: p.H.BLOCKED_USERS,
        userIds: e,
        listType: "blocked"
    })
}

function b() {
    let e = (0, r.yK)([_.A], () => _.A.getIgnoredIDs());
    return (0, i.jsx)(f, {
        setting: p.H.IGNORED_USERS,
        userIds: e,
        listType: "ignored"
    })
}

function I() {
    return (0, i.jsxs)(A.h, {
        setting: p.H.RESTRICTED_USERS,
        scrollPosition: h.d1.RESTRICTED_ACCOUNTS,
        scrollHighlightDelay: 900,
        children: [(0, i.jsx)(A._, {
            header: E.intl.string(E.t["3wRort"]),
            description: E.intl.format(E.t["0aNQo9"], {
                helpArticle: m.A.getArticleURL(x.MVz.STEALTH_REMEDIATION_FEATURE_GUIDE)
            })
        }), (0, i.jsx)(N, {}), (0, i.jsx)(b, {})]
    })
}