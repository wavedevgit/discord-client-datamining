/** Chunk was on 86142 **/
/** chunk id: 970573, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => S,
    X: () => O
}), n(492834);
var r, i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    o = n(311907),
    c = n(397927),
    u = n(830215),
    d = n(442433),
    h = n(30058),
    p = n(427157),
    g = n(961350),
    f = n(351906),
    _ = n(287809),
    m = n(954571),
    A = n(427262),
    x = n(429707),
    E = n(274303),
    v = n(994125),
    y = n(652215),
    b = n(985018),
    j = n(364877),
    O = ((r = {})[r.LOGIN_REQUIRED = 0] = "LOGIN_REQUIRED", r[r.SWITCHED = 1] = "SWITCHED", r[r.REMOVED = 2] = "REMOVED", r);

function I(e) {
    let {
        actionText: t,
        user: n,
        onAction: r
    } = e, {
        currentUser: s,
        hidePrivateData: l,
        isAuthenticated: v
    } = (0, o.cf)([_.default, f.A, g.default], () => ({
        currentUser: _.default.getCurrentUser(),
        hidePrivateData: f.A.hidePersonalInformation,
        isAuthenticated: g.default.isAuthenticated()
    })), O = new p.A(n), I = v && (null == s ? void 0 : s.id) === O.id, S = n.tokenStatus === E.U.INVALID, N = l || O.hasUniqueUsername() ? null : "#".concat(O.discriminator), C = null;
    return h.A.useConfig({
        location: "Account card load"
    }), I ? C = (0, i.jsx)(c.Text, {
        variant: "text-sm/semibold",
        className: j.dx,
        color: "text-feedback-positive",
        children: b.intl.string(b.t.seV8yt)
    }) : S && (C = (0, i.jsx)(c.Text, {
        variant: "text-sm/semibold",
        className: j.dx,
        color: "text-feedback-critical",
        children: b.intl.string(b.t.tYX2ps)
    })), (0, i.jsx)("div", {
        className: j.KJ,
        children: (0, i.jsxs)("div", {
            className: j.yS,
            children: [(0, i.jsx)(c.euF, {
                src: O.getAvatarURL(void 0, 40),
                size: c._3J.SIZE_40,
                "aria-label": n.username
            }), (0, i.jsxs)("div", {
                className: a()(j.K_, {
                    [j.zU]: !I
                }),
                children: [(0, i.jsxs)("div", {
                    className: j.Xh,
                    children: [(0, i.jsx)(c.Text, {
                        variant: "text-md/semibold",
                        color: "text-strong",
                        lineClamp: 1,
                        children: A.Ay.getUserTag(O, {
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
                children: [!I && (0, i.jsx)(c.Button, {
                    variant: "secondary",
                    text: S ? b.intl.string(b.t["DSN+hw"]) : t,
                    onClick: function() {
                        S ? r(0, n.id) : (m.default.track(y.HAw.MULTI_ACCOUNT_SWITCH_ATTEMPT, {
                            location: {
                                section: y.JJy.MANAGE_ACCOUNTS_MODAL
                            }
                        }), x.Mx(n.id), r(1, n.id))
                    }
                }), (0, i.jsx)(c.K0, {
                    icon: c.jNK,
                    onClick: function(e) {
                        (0, d.jA)(e, e => {
                            let {
                                onSelect: t
                            } = e;
                            return (0, i.jsx)(c.W1t, {
                                "data-menu-migrated-auto": !0,
                                "aria-label": b.intl.string(b.t["41qiDU"]),
                                navId: "manage-multi-account",
                                onClose: d.Z_,
                                onSelect: t,
                                children: (0, i.jsx)(c.Drp, {
                                    id: "remove-account",
                                    label: b.intl.string(b.t.lSLMaU),
                                    action: () => {
                                        let e;
                                        u.A.logout("multi_accounts_list", null, n.id).finally(() => {
                                            x.At(n.id)
                                        }), e = {}, null != s ? e.section = y.JJy.MANAGE_ACCOUNTS_MODAL : e.page = y.S3d.LOGIN, m.default.track(y.HAw.MULTI_ACCOUNT_ACCOUNT_REMOVE, {
                                            location: e
                                        }), r(2, n.id), null != t && t()
                                    },
                                    color: "danger"
                                })
                            })
                        })
                    },
                    "aria-label": b.intl.string(b.t.PdRCRg),
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
            children: [(0, i.jsx)(I, {
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