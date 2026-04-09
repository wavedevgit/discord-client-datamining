/** chunk id: 970573 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => j,
    X: () => T
});
var i, s = n(627968),
    r = n(64700),
    l = n(503698),
    a = n.n(l),
    o = n(311907),
    c = n(397927),
    d = n(830215),
    u = n(442433),
    h = n(427157),
    _ = n(961350),
    p = n(351906),
    g = n(287809),
    m = n(954571),
    A = n(427262),
    f = n(429707),
    E = n(274303),
    x = n(994125),
    I = n(652215),
    N = n(985018),
    v = n(795859),
    T = ((i = {})[i.LOGIN_REQUIRED = 0] = "LOGIN_REQUIRED", i[i.SWITCHED = 1] = "SWITCHED", i[i.REMOVED = 2] = "REMOVED", i);

function C(e) {
    let {
        actionText: t,
        user: n,
        onAction: i
    } = e, {
        currentUser: r,
        hidePrivateData: l,
        isAuthenticated: x
    } = (0, o.cf)([g.default, p.A, _.default], () => ({
        currentUser: g.default.getCurrentUser(),
        hidePrivateData: p.A.hidePersonalInformation,
        isAuthenticated: _.default.isAuthenticated()
    })), T = new h.A(n), C = x && r?.id === T.id, j = n.tokenStatus === E.U.INVALID, S = l || T.hasUniqueUsername() ? null : `#${T.discriminator}`, y = null;
    return C ? y = (0, s.jsx)(c.Text, {
        variant: "text-sm/semibold",
        className: v.dx,
        color: "text-feedback-positive",
        children: N.intl.string(N.t.seV8yt)
    }) : j && (y = (0, s.jsx)(c.Text, {
        variant: "text-sm/semibold",
        className: v.dx,
        color: "text-feedback-critical",
        children: N.intl.string(N.t.tYX2ps)
    })), (0, s.jsx)("div", {
        className: v.KJ,
        children: (0, s.jsxs)("div", {
            className: v.yS,
            children: [(0, s.jsx)(c.euF, {
                src: T.getAvatarURL(void 0, 40),
                size: c._3J.SIZE_40,
                "aria-label": n.username
            }), (0, s.jsxs)("div", {
                className: a()(v.K_, {
                    [v.zU]: !C
                }),
                children: [(0, s.jsxs)("div", {
                    className: v.Xh,
                    children: [(0, s.jsx)(c.Text, {
                        variant: "text-md/semibold",
                        color: "text-strong",
                        lineClamp: 1,
                        children: A.Ay.getUserTag(T, {
                            mode: "username",
                            identifiable: l ? "never" : "always"
                        })
                    }), (0, s.jsx)(c.Text, {
                        color: "text-default",
                        variant: "text-sm/normal",
                        children: S
                    })]
                }), y]
            }), (0, s.jsxs)("div", {
                className: v.Xp,
                children: [!C && (0, s.jsx)(c.Button, {
                    variant: "secondary",
                    text: j ? N.intl.string(N.t["DSN+hw"]) : t,
                    onClick: function() {
                        j ? i(0, n.id) : (m.default.track(I.HAw.MULTI_ACCOUNT_SWITCH_ATTEMPT, {
                            location: {
                                section: I.JJy.MANAGE_ACCOUNTS_MODAL
                            }
                        }), f.Mx(n.id), i(1, n.id))
                    }
                }), (0, s.jsx)(c.K0, {
                    icon: c.jNK,
                    onClick: function(e) {
                        (0, u.jA)(e, e => {
                            let {
                                onSelect: t
                            } = e;
                            return (0, s.jsx)(c.W1t, {
                                "data-menu-migrated-auto": !0,
                                "aria-label": N.intl.string(N.t["41qiDU"]),
                                navId: "manage-multi-account",
                                onClose: u.Z_,
                                onSelect: t,
                                children: (0, s.jsx)(c.Drp, {
                                    id: "remove-account",
                                    label: N.intl.string(N.t.lSLMaU),
                                    action: () => {
                                        let e;
                                        d.A.logout("multi_accounts_list", null, n.id).finally(() => {
                                            f.At(n.id)
                                        }), e = {}, null != r ? e.section = I.JJy.MANAGE_ACCOUNTS_MODAL : e.page = I.S3d.LOGIN, m.default.track(I.HAw.MULTI_ACCOUNT_ACCOUNT_REMOVE, {
                                            location: e
                                        }), i(2, n.id), null != t && t()
                                    },
                                    color: "danger"
                                })
                            })
                        })
                    },
                    "aria-label": N.intl.string(N.t.PdRCRg),
                    variant: "icon-only"
                })]
            })]
        })
    })
}

function j(e) {
    let {
        actionText: t,
        onAction: n
    } = e, {
        isLoading: i,
        multiAccountUsers: l
    } = (0, x.K)();
    return (0, s.jsx)("div", {
        className: v.p_,
        children: i ? (0, s.jsx)(c.y$y, {
            className: v.u1
        }) : l.map((e, i) => (0, s.jsxs)(r.Fragment, {
            children: [(0, s.jsx)(C, {
                user: e,
                actionText: t,
                onAction: n
            }, e.id), l.length - 1 !== i && (0, s.jsx)("div", {
                role: "separator",
                className: v.me
            })]
        }, e.id))
    })
}