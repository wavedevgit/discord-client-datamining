/** chunk id: 970573, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => C,
    X: () => j
});
var i, s = n(627968),
    r = n(64700),
    l = n(503698),
    a = n.n(l),
    o = n(311907),
    d = n(397927),
    c = n(830215),
    u = n(442433),
    h = n(427157),
    _ = n(961350),
    p = n(351906),
    g = n(287809),
    m = n(954571),
    f = n(427262),
    A = n(429707),
    E = n(274303),
    x = n(994125),
    I = n(652215),
    N = n(985018),
    v = n(304899),
    j = ((i = {})[i.LOGIN_REQUIRED = 0] = "LOGIN_REQUIRED", i[i.SWITCHED = 1] = "SWITCHED", i[i.REMOVED = 2] = "REMOVED", i);

function S(e) {
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
    })), j = new h.A(n), S = x && r?.id === j.id, C = n.tokenStatus === E.U.INVALID, T = l || j.hasUniqueUsername() ? null : `#${j.discriminator}`, y = null;
    return S ? y = (0, s.jsx)(d.Text, {
        variant: "text-sm/semibold",
        className: v.dx,
        color: "text-feedback-positive",
        children: N.intl.string(N.t.seV8yt)
    }) : C && (y = (0, s.jsx)(d.Text, {
        variant: "text-sm/semibold",
        className: v.dx,
        color: "text-feedback-critical",
        children: N.intl.string(N.t.tYX2ps)
    })), (0, s.jsx)("div", {
        className: v.KJ,
        children: (0, s.jsxs)("div", {
            className: v.yS,
            children: [(0, s.jsx)(d.euF, {
                src: j.getAvatarURL(void 0, 40),
                size: d._3J.SIZE_40,
                "aria-label": n.username
            }), (0, s.jsxs)("div", {
                className: a()(v.K_, {
                    [v.zU]: !S
                }),
                children: [(0, s.jsxs)("div", {
                    className: v.Xh,
                    children: [(0, s.jsx)(d.Text, {
                        variant: "text-md/semibold",
                        color: "text-strong",
                        lineClamp: 1,
                        children: f.Ay.getUserTag(j, {
                            mode: "username",
                            identifiable: l ? "never" : "always"
                        })
                    }), (0, s.jsx)(d.Text, {
                        color: "text-default",
                        variant: "text-sm/normal",
                        children: T
                    })]
                }), y]
            }), (0, s.jsxs)("div", {
                className: v.Xp,
                children: [!S && (0, s.jsx)(d.Button, {
                    variant: "secondary",
                    text: C ? N.intl.string(N.t["DSN+hw"]) : t,
                    onClick: function() {
                        C ? i(0, n.id) : (m.default.track(I.HAw.MULTI_ACCOUNT_SWITCH_ATTEMPT, {
                            location: {
                                section: I.JJy.MANAGE_ACCOUNTS_MODAL
                            }
                        }), A.Mx(n.id), i(1, n.id))
                    }
                }), (0, s.jsx)(d.K0, {
                    icon: d.jNK,
                    onClick: function(e) {
                        (0, u.jA)(e, e => {
                            let {
                                onSelect: t
                            } = e;
                            return (0, s.jsx)(d.W1t, {
                                "data-menu-migrated-auto": !0,
                                "aria-label": N.intl.string(N.t["41qiDU"]),
                                navId: "manage-multi-account",
                                onClose: u.Z_,
                                onSelect: t,
                                children: (0, s.jsx)(d.Drp, {
                                    id: "remove-account",
                                    label: N.intl.string(N.t.lSLMaU),
                                    action: () => {
                                        let e;
                                        c.A.logout("multi_accounts_list", null, n.id).finally(() => {
                                            A.At(n.id)
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

function C(e) {
    let {
        actionText: t,
        onAction: n
    } = e, {
        isLoading: i,
        multiAccountUsers: l
    } = (0, x.K)();
    return (0, s.jsx)("div", {
        className: v.p_,
        children: i ? (0, s.jsx)(d.y$y, {
            className: v.u1
        }) : l.map((e, i) => (0, s.jsxs)(r.Fragment, {
            children: [(0, s.jsx)(S, {
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