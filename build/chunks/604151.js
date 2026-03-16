/** chunk id: 604151 params = (module,exports,require) **/
n.d(t, {
    Ay: () => I,
    LP: () => b,
    nK: () => N
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
    m = n(287809),
    g = n(975571),
    A = n(871930),
    h = n(355097),
    x = n(531525),
    p = n(652215),
    T = n(985018),
    E = n(193291);

function S(e) {
    let {
        listType: t,
        numberOfUsers: n
    } = e, s = "blocked" === t;
    return (0, i.jsxs)("div", {
        className: E.wx,
        children: [(0, i.jsx)("div", {
            className: E.zc,
            children: s ? (0, i.jsx)(o.KTN, {}) : (0, i.jsx)(o.G3N, {})
        }), (0, i.jsxs)("div", {
            className: E.Qq,
            children: [(0, i.jsx)(o.Text, {
                variant: "text-md/semibold",
                color: "interactive-text-active",
                children: T.intl.string(s ? T.t.PFOUKW : T.t["93ZDWE"])
            }), (0, i.jsx)(o.Text, {
                variant: "text-md/medium",
                color: "text-default",
                children: s ? T.intl.format(T.t["r91W/h"], {
                    numberOfBlockedUsers: n
                }) : T.intl.format(T.t.rXUeOl, {
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
    } = e, l = (0, r.bG)([_.A], () => _.A.isBlocked(t)), g = (0, r.bG)([m.default], () => m.default.getUser(t)), [A, h] = s.useState(!1), x = s.useCallback(() => {
        h(!0), l ? d.A.unblockUser(t).catch(() => {
            h(!1)
        }) : d.A.unignoreUser(t, u.A.USER_SETTINGS).catch(() => {
            h(!1)
        })
    }, [l, t]);
    return null == g ? null : (0, i.jsxs)("div", {
        className: a()(E.nM, {
            [E.fW]: n
        }),
        children: [(0, i.jsxs)("div", {
            className: E.eF,
            children: [(0, i.jsx)(c.A, {
                user: g,
                size: o._3J.SIZE_40
            }), (0, i.jsxs)("div", {
                className: E.Qq,
                children: [(0, i.jsx)(o.Text, {
                    variant: "text-md/semibold",
                    color: "text-strong",
                    children: g.globalName ?? g.username
                }), (0, i.jsx)(o.Text, {
                    variant: "text-sm/medium",
                    color: "text-default",
                    children: null != g.globalName ? g.username : null
                })]
            })]
        }), (0, i.jsx)(o.Button, {
            variant: "secondary",
            text: T.intl.string(l ? T.t.XyHpKH : T.t["8wXU9B"]),
            onClick: x,
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
            className: E.Nr,
            children: [(0, i.jsx)(S, {
                listType: l,
                numberOfUsers: n.length
            }), (0, i.jsx)("div", {
                className: E.jS,
                children: n.slice(0, a).map((e, t) => (0, i.jsx)(C, {
                    userId: e,
                    last: t === n.length - 1
                }, e))
            }), a < n.length ? (0, i.jsx)("div", {
                className: E.vM,
                children: (0, i.jsx)(o.DUT, {
                    onClick: () => {
                        r(e => e + 5)
                    },
                    className: E.Qf,
                    children: (0, i.jsx)(o.Text, {
                        variant: "text-sm/semibold",
                        color: "text-default",
                        children: T.intl.format(T.t.jULEDr, {
                            numberOfUsers: a + 5 < n.length ? 5 : n.length - a
                        })
                    })
                })
            }) : null]
        })
    })
}

function b() {
    let e = (0, r.yK)([_.A], () => _.A.getBlockedIDs());
    return (0, i.jsx)(f, {
        setting: x.H.BLOCKED_USERS,
        userIds: e,
        listType: "blocked"
    })
}

function N() {
    let e = (0, r.yK)([_.A], () => _.A.getIgnoredIDs());
    return (0, i.jsx)(f, {
        setting: x.H.IGNORED_USERS,
        userIds: e,
        listType: "ignored"
    })
}

function I() {
    return (0, i.jsxs)(A.h, {
        setting: x.H.RESTRICTED_USERS,
        scrollPosition: h.d1.RESTRICTED_ACCOUNTS,
        scrollHighlightDelay: 900,
        children: [(0, i.jsx)(A._, {
            header: T.intl.string(T.t["3wRort"]),
            description: T.intl.format(T.t["0aNQo9"], {
                helpArticle: g.A.getArticleURL(p.MVz.STEALTH_REMEDIATION_FEATURE_GUIDE)
            })
        }), (0, i.jsx)(b, {}), (0, i.jsx)(N, {})]
    })
}