/** Chunk was on 86142 **/
/** chunk id: 970573, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => S,
    X: () => I
}), n(492834);
var r, i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    o = n(311907),
    c = n(397927),
    d = n(830215),
    u = n(442433),
    h = n(30058),
    p = n(427157),
    g = n(961350),
    _ = n(351906),
    f = n(287809),
    m = n(954571),
    A = n(427262),
    x = n(429707),
    E = n(274303),
    v = n(994125),
    b = n(652215),
    y = n(985018),
    j = n(364877),
    I = ((r = {})[r.LOGIN_REQUIRED = 0] = "LOGIN_REQUIRED", r[r.SWITCHED = 1] = "SWITCHED", r[r.REMOVED = 2] = "REMOVED", r);

function O(e) {
    let {
        actionText: t,
        user: n,
        onAction: r
    } = e, {
        currentUser: s,
        hidePrivateData: l,
        isAuthenticated: v
    } = (0, o.cf)([f.default, _.A, g.default], () => ({
        currentUser: f.default.getCurrentUser(),
        hidePrivateData: _.A.hidePersonalInformation,
        isAuthenticated: g.default.isAuthenticated()
    })), I = new p.A(n), O = v && (null == s ? void 0 : s.id) === I.id, S = n.tokenStatus === E.U.INVALID, N = l || I.hasUniqueUsername() ? null : "#".concat(I.discriminator), C = null;
    return h.A.useConfig({
        location: "Account card load"
    }), O ? C = (0, i.jsx)(c.Text, {
        variant: "text-sm/semibold",
        className: j.dx,
        color: "text-feedback-positive",
        children: y.intl.string(y.t.seV8yt)
    }) : S && (C = (0, i.jsx)(c.Text, {
        variant: "text-sm/semibold",
        className: j.dx,
        color: "text-feedback-critical",
        children: y.intl.string(y.t.tYX2ps)
    })), (0, i.jsx)("div", {
        className: j.KJ,
        children: (0, i.jsxs)("div", {
            className: j.yS,
            children: [(0, i.jsx)(c.euF, {
                src: I.getAvatarURL(void 0, 40),
                size: c._3J.SIZE_40,
                "aria-label": n.username
            }), (0, i.jsxs)("div", {
                className: a()(j.K_, {
                    [j.zU]: !O
                }),
                children: [(0, i.jsxs)("div", {
                    className: j.Xh,
                    children: [(0, i.jsx)(c.Text, {
                        variant: "text-md/semibold",
                        color: "text-strong",
                        lineClamp: 1,
                        children: A.Ay.getUserTag(I, {
                            mode: "username",
                            identifiable: l ? "never" : "always"
                        })
                    }), (0, i.jsx)(c.Text, {
                        color: "text-default",
                        variant: "text-sm/normal",
                        children: N
                    })]
                }), C]
            }), (0, i.jsxs)("div", {
                className: j.Xp,
                children: [!O && (0, i.jsx)(c.Button, {
                    variant: "secondary",
                    text: S ? y.intl.string(y.t["DSN+hw"]) : t,
                    onClick: function() {
                        S ? r(0, n.id) : (m.default.track(b.HAw.MULTI_ACCOUNT_SWITCH_ATTEMPT, {
                            location: {
                                section: b.JJy.MANAGE_ACCOUNTS_MODAL
                            }
                        }), x.Mx(n.id), r(1, n.id))
                    }
                }), (0, i.jsx)(c.K0, {
                    icon: c.jNK,
                    onClick: function(e) {
                        (0, u.jA)(e, e => {
                            let {
                                onSelect: t
                            } = e;
                            return (0, i.jsx)(c.W1t, {
                                "data-menu-migrated-auto": !0,
                                "aria-label": y.intl.string(y.t["41qiDU"]),
                                navId: "manage-multi-account",
                                onClose: u.Z_,
                                onSelect: t,
                                children: (0, i.jsx)(c.Drp, {
                                    id: "remove-account",
                                    label: y.intl.string(y.t.lSLMaU),
                                    action: () => {
                                        let e;
                                        d.A.logout("multi_accounts_list", null, n.id).finally(() => {
                                            x.At(n.id)
                                        }), e = {}, null != s ? e.section = b.JJy.MANAGE_ACCOUNTS_MODAL : e.page = b.S3d.LOGIN, m.default.track(b.HAw.MULTI_ACCOUNT_ACCOUNT_REMOVE, {
                                            location: e
                                        }), r(2, n.id), null != t && t()
                                    },
                                    color: "danger"
                                })
                            })
                        })
                    },
                    "aria-label": y.intl.string(y.t.PdRCRg),
                    variant: "icon-only"
                })]
            })]
        })
    })
}

function S(e) {
    let {
        actionText: t,
        onAction: n
    } = e, {
        isLoading: r,
        multiAccountUsers: l
    } = (0, v.K)();
    return (0, i.jsx)("div", {
        className: j.p_,
        children: r ? (0, i.jsx)(c.y$y, {
            className: j.u1
        }) : l.map((e, r) => (0, i.jsxs)(s.Fragment, {
            children: [(0, i.jsx)(O, {
                user: e,
                actionText: t,
                onAction: n
            }, e.id), l.length - 1 !== r && (0, i.jsx)("div", {
                role: "separator",
                className: j.me
            })]
        }, e.id))
    })
}