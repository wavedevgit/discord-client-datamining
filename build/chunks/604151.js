/** chunk id: 604151, original params: e,t,n (module,exports,require) **/
n.d(t, {
    Ay: () => y,
    LP: () => C,
    nK: () => v
}), n(896048);
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(311907),
    o = n(397927),
    c = n(49229),
    d = n(730134),
    u = n(793574),
    h = n(994500),
    g = n(287809),
    x = n(975571),
    p = n(871930),
    m = n(355097),
    A = n(531525),
    b = n(652215),
    j = n(985018),
    O = n(193291);

function E(e) {
    let {
        listType: t,
        numberOfUsers: n
    } = e, l = "blocked" === t;
    return (0, i.jsxs)("div", {
        className: O.wx,
        children: [(0, i.jsx)("div", {
            className: O.zc,
            children: l ? (0, i.jsx)(o.KTN, {}) : (0, i.jsx)(o.G3N, {})
        }), (0, i.jsxs)("div", {
            className: O.Qq,
            children: [(0, i.jsx)(o.Text, {
                variant: "text-md/semibold",
                color: "interactive-text-active",
                children: j.intl.string(l ? j.t.PFOUKW : j.t["93ZDWE"])
            }), (0, i.jsx)(o.Text, {
                variant: "text-md/medium",
                color: "text-default",
                children: l ? j.intl.format(j.t["r91W/h"], {
                    numberOfBlockedUsers: n
                }) : j.intl.format(j.t.rXUeOl, {
                    numberOfIgnoredUsers: n
                })
            })]
        })]
    })
}

function S(e) {
    var t;
    let {
        userId: n,
        last: s
    } = e, x = (0, a.bG)([h.A], () => h.A.isBlocked(n)), p = (0, a.bG)([g.default], () => g.default.getUser(n)), [m, A] = l.useState(!1), b = l.useCallback(() => {
        A(!0), x ? c.A.unblockUser(n).catch(() => {
            A(!1)
        }) : c.A.unignoreUser(n, u.A.USER_SETTINGS).catch(() => {
            A(!1)
        })
    }, [x, n]);
    return null == p ? null : (0, i.jsxs)("div", {
        className: r()(O.nM, {
            [O.fW]: s
        }),
        children: [(0, i.jsxs)("div", {
            className: O.eF,
            children: [(0, i.jsx)(d.A, {
                user: p,
                size: o._3J.SIZE_40
            }), (0, i.jsxs)("div", {
                className: O.Qq,
                children: [(0, i.jsx)(o.Text, {
                    variant: "text-md/semibold",
                    color: "text-strong",
                    children: null != (t = p.globalName) ? t : p.username
                }), (0, i.jsx)(o.Text, {
                    variant: "text-sm/medium",
                    color: "text-default",
                    children: null != p.globalName ? p.username : null
                })]
            })]
        }), (0, i.jsx)(o.Button, {
            variant: "secondary",
            text: j.intl.string(x ? j.t.XyHpKH : j.t["8wXU9B"]),
            onClick: b,
            loading: m
        })]
    })
}

function f(e) {
    let {
        setting: t,
        userIds: n,
        listType: s
    } = e, [r, a] = l.useState(5);
    return (0, i.jsx)(p.h, {
        setting: t,
        children: (0, i.jsxs)("div", {
            className: O.Nr,
            children: [(0, i.jsx)(E, {
                listType: s,
                numberOfUsers: n.length
            }), (0, i.jsx)("div", {
                className: O.jS,
                children: n.slice(0, r).map((e, t) => (0, i.jsx)(S, {
                    userId: e,
                    last: t === n.length - 1
                }, e))
            }), r < n.length ? (0, i.jsx)("div", {
                className: O.vM,
                children: (0, i.jsx)(o.DUT, {
                    onClick: () => {
                        a(e => e + 5)
                    },
                    className: O.Qf,
                    children: (0, i.jsx)(o.Text, {
                        variant: "text-sm/semibold",
                        color: "text-default",
                        children: j.intl.format(j.t.jULEDr, {
                            numberOfUsers: r + 5 < n.length ? 5 : n.length - r
                        })
                    })
                })
            }) : null]
        })
    })
}

function C() {
    let e = (0, a.yK)([h.A], () => h.A.getBlockedIDs());
    return (0, i.jsx)(f, {
        setting: A.H.BLOCKED_USERS,
        userIds: e,
        listType: "blocked"
    })
}

function v() {
    let e = (0, a.yK)([h.A], () => h.A.getIgnoredIDs());
    return (0, i.jsx)(f, {
        setting: A.H.IGNORED_USERS,
        userIds: e,
        listType: "ignored"
    })
}

function y() {
    return (0, i.jsxs)(p.h, {
        setting: A.H.RESTRICTED_USERS,
        scrollPosition: m.d1.RESTRICTED_ACCOUNTS,
        scrollHighlightDelay: 900,
        children: [(0, i.jsx)(p._, {
            header: j.intl.string(j.t["3wRort"]),
            description: j.intl.format(j.t["0aNQo9"], {
                helpArticle: x.A.getArticleURL(b.MVz.STEALTH_REMEDIATION_FEATURE_GUIDE)
            })
        }), (0, i.jsx)(C, {}), (0, i.jsx)(v, {})]
    })
}