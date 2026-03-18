/** chunk id: 807396 params = (module,exports,require) **/
n.d(t, {
    d: () => Y,
    u: () => w
}), n(321073);
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(158954),
    o = n(311907),
    d = n(827734),
    c = n(990078),
    u = n(582754),
    _ = n(397927),
    m = n(73153),
    g = n(77468),
    A = n(289498),
    x = n(736653),
    h = n(573648),
    p = n(681819),
    T = n(370480),
    E = n(882997),
    S = n(373498),
    f = n(169869),
    C = n(263063),
    b = n(496885),
    N = n(962173),
    I = n(71393),
    v = n(351906),
    j = n(954571),
    y = n(975571),
    R = n(773669),
    O = n(801264),
    D = n(523104),
    L = n(856220),
    P = n(652215),
    G = n(783419),
    M = n(985018),
    U = n(431070);
let k = e => {
    let t, {
            integration: n
        } = e,
        {
            isJoining: s,
            joinErrorMessage: l,
            showJoinErrorMessage: a
        } = (0, o.cf)([N.A], () => ({
            isJoining: N.A.isJoining(n.id),
            joinErrorMessage: "" === N.A.joinErrorMessage(n.id) ? M.intl.string(M.t.j2d6Km) : N.A.joinErrorMessage(n.id),
            showJoinErrorMessage: void 0 !== N.A.joinErrorMessage(n.id)
        }), [n.id]);
    return null != (0, o.bG)([I.A], () => I.A.getGuild(n.guild.id), [n.guild.id]) || (t = (0, i.jsx)(_.Button, {
        size: "sm",
        onClick: function() {
            g.A.joinServer(n.id, () => {})
        },
        disabled: s,
        variant: "primary",
        text: s ? M.intl.string(M.t.RXvQQu) : M.intl.string(M.t.XpeFYr)
    })), (0, i.jsxs)("div", {
        className: U.iA,
        children: [(0, i.jsxs)("div", {
            className: U.XX,
            children: [(0, i.jsx)(C.Ay, {
                size: C.Ay.Sizes.SMALL,
                guild: n.guild,
                className: U.$f
            }), (0, i.jsxs)("div", {
                className: U.Vn,
                children: [(0, i.jsx)(_.Text, {
                    variant: "text-md/semibold",
                    color: "text-strong",
                    children: n.guild.name
                }), (0, i.jsx)(_.MzZ, {
                    href: h.A.get(n.type)?.getPlatformUserUrl?.(n.account),
                    children: (0, i.jsx)(_.Text, {
                        variant: "text-xs/normal",
                        color: "text-default",
                        children: n.account.name
                    })
                })]
            }), t]
        }), a && (0, i.jsx)(_.Text, {
            variant: "text-xs/normal",
            color: "text-feedback-critical",
            className: U.R,
            children: l
        })]
    })
};

function V(e) {
    let t, n, l, a, o, m, A, {
            onDisconnect: x,
            account: C,
            theme: N,
            locale: I
        } = e,
        [v, j] = s.useState(C.friendSync),
        [R, V] = s.useState(C.visibility),
        [w, B] = s.useState(C.metadataVisibility),
        [H, F] = s.useState(C.showActivity),
        [Y, z] = s.useState(null),
        [X, W] = s.useState(null),
        [K, Z] = s.useState(!1),
        [q, J] = s.useState([]),
        Q = (0, p.ML)(C.type),
        $ = h.A.get(Q);
    s.useEffect(() => {
        j(C.friendSync), V(C.visibility), B(C.metadataVisibility), F(C.showActivity)
    }, [C]);
    let ee = {
            inProgressVisibility: Y,
            inProgressMetadataVisibility: X
        },
        et = s.useRef(ee);
    return s.useEffect(() => {
        et.current = ee
    }), s.useEffect(() => {
        if (!1 === C.verified) return;
        let {
            inProgressVisibility: e,
            inProgressMetadataVisibility: t
        } = et.current;
        null != e && (V(e), g.A.setVisibility(C.type, C.id, e), z(null)), null != t && (B(t), g.A.setMetadataVisibility(C.type, C.id, t), W(null))
    }, [C]), (0, i.jsxs)("div", {
        className: U.FI,
        children: [(t = h.A.get(C.type), n = h.A.get(Q), l = "1" === (C.metadata ?? {})[G.pK.TWITTER_VERIFIED], a = null, t.type === P.fg2.TWITTER && l && (a = (0, i.jsx)(c.m, {
            text: M.intl.string(M.t.Jebrww),
            children: (0, i.jsx)(b.A, {
                color: d.A.unsafe_rawColors.TWITTER.css,
                children: (0, i.jsx)(_.Uzd, {
                    size: "xs",
                    color: d.A.unsafe_rawColors.WHITE.css
                })
            })
        })), (0, i.jsxs)("div", {
            className: U.Il,
            children: [(0, i.jsx)("img", {
                alt: n.name,
                className: U.gj,
                src: (0, u.Mw)(N) ? n.icon.darkSVG : n.icon.lightSVG
            }), (0, i.jsxs)("div", {
                children: [(0, i.jsxs)("div", {
                    className: U.$p,
                    children: [(0, i.jsx)(_.Text, {
                        color: "text-strong",
                        variant: "text-md/semibold",
                        className: U.RW,
                        children: C.name
                    }), null != a && (0, i.jsx)("div", {
                        className: U.cG,
                        children: a
                    })]
                }), (0, i.jsx)(_.Text, {
                    variant: "text-xs/normal",
                    color: "text-default",
                    className: U.Au,
                    children: n.name
                })]
            }), (0, i.jsx)(_.DUT, {
                className: U.uH,
                onClick: function() {
                    let e = h.A.get(C.type);
                    (0, _.qfG)(t => (0, i.jsx)(r.Modal, {
                        title: M.intl.formatToPlainString(M.t.U5x12f, {
                            name: e.name
                        }),
                        subtitle: M.intl.format(M.t.VgqIPj, {
                            provider: e.name
                        }),
                        actions: [{
                            text: M.intl.string(M.t["ETE/oC"]),
                            onClick: t.onClose,
                            variant: "secondary"
                        }, {
                            text: M.intl.string(M.t.bsbMVz),
                            onClick: () => {
                                x(), t.onClose()
                            },
                            variant: "primary"
                        }],
                        ...t,
                        children: (0, S.A)(C) && (0, i.jsx)(O.A, {
                            children: M.intl.format(M.t.COW3Xn, {
                                platformName: e.name
                            })
                        })
                    }))
                },
                "aria-label": M.intl.string(M.t.ppppRJ),
                focusProps: {
                    offset: {
                        top: -4,
                        left: -4,
                        right: -4
                    }
                },
                children: (0, i.jsx)(_.PGe, {
                    size: "xs",
                    color: "currentColor"
                })
            })]
        })), C.twoWayLink ? null : C.type === P.fg2.XBOX ? (0, i.jsx)(L._, {}) : C.type === P.fg2.PLAYSTATION ? (0, i.jsx)(D.j, {}) : null, function(e) {
            let t = e.metadata ?? {},
                n = null,
                s = (0, T.An)(t[G.pK.CREATED_AT], I);
            switch (e.type) {
                case P.fg2.REDDIT:
                    n = (0, f.xE)(t, U.Nz);
                    break;
                case P.fg2.STEAM:
                    n = (0, f.dy)(t, U.Nz);
                    break;
                case P.fg2.BLUESKY:
                case P.fg2.TWITTER:
                case P.fg2.MASTODON:
                    n = (0, f.ED)(t, U.Nz);
                    break;
                case P.fg2.EBAY:
                    n = (0, f.ub)(t, U.Nz);
                    break;
                case P.fg2.PAYPAL:
                    n = (0, f.gZ)(t, U.Nz);
                    break;
                case P.fg2.TIKTOK:
                    n = (0, f.HU)(t, U.Nz)
            }
            null !== s && (null == n && (n = []), n?.push((0, i.jsx)(_.Text, {
                variant: "text-xs/normal",
                color: "text-subtle",
                className: U.M4,
                children: M.intl.format(M.t["9rfonh"], {
                    date: s
                })
            }, "member-since")));
            let l = q.includes(e.id),
                a = M.intl.string(M.t.wzzjk9);
            if (null == n || 0 === n.length)
                if (!0 !== h.A.get(e.type).hasMetadata) return null;
                else n = [(0, i.jsx)(_.LpS, {
                    className: U.Z3,
                    text: M.intl.string(M.t.y2b7CA)
                }, "badge"), (0, i.jsx)(_.Text, {
                    variant: "text-xs/normal",
                    className: U.vt,
                    children: M.intl.format(M.t.Up2ni7, {
                        helpdeskUrl: y.A.getArticleURL(P.MVz.CONNECTION_DETAILS)
                    })
                }, "label")], a = M.intl.string(M.t["LVh3/5"]);
            return l && (a = M.intl.string(M.t.i4jeWR)), n.push((0, i.jsx)("div", {
                className: U.jy,
                children: (0, i.jsx)(_.Button, {
                    text: a,
                    variant: "secondary",
                    size: "sm",
                    loading: K,
                    disabled: l,
                    "aria-label": M.intl.string(M.t.sCkLYH),
                    onClick: l ? void 0 : () => {
                        Z(!0), g.A.refresh(e.type, e.id).finally(() => {
                            setTimeout(() => {
                                q.push(e.id), J(q), Z(!1)
                            }, 2e3)
                        })
                    }
                })
            }, "refresh-button")), (0, i.jsx)("div", {
                className: U.tJ,
                children: n
            })
        }(C), (P.txh.has(C.type) && (o = (0, i.jsx)(_.dOG, {
            label: M.intl.string(M.t["+KCMSi"]),
            checked: v,
            onChange: function(e) {
                j(e), g.A.setFriendSync(C.type, C.id, e)
            }
        })), P.ewM.has(C.type) && (m = (0, i.jsx)(_.dOG, {
            label: M.intl.format(M.t["6u6J0q"], {
                platform: $.name
            }),
            checked: H,
            onChange: function(e) {
                F(e), g.A.setShowActivity(C.type, C.id, e)
            }
        })), h.A.get(C.type)?.hasMetadata === !0 && (A = (0, i.jsx)(_.dOG, {
            label: M.intl.string(M.t.FYKGsL),
            checked: 1 === w,
            onChange: function(e) {
                let {
                    verified: t
                } = C, n = +!!e;
                if (e && !t) {
                    W(n), (0, E.A)({
                        platformType: C.type,
                        location: "User Settings"
                    });
                    return
                }
                B(n), g.A.setMetadataVisibility(C.type, C.id, n)
            },
            disabled: 1 !== R || null == C.metadata
        })), (0, i.jsxs)("div", {
            className: U.HZ,
            children: [(0, i.jsx)(_.dOG, {
                label: M.intl.string(M.t.f7yOAX),
                checked: 1 === R,
                onChange: function(e) {
                    let {
                        verified: t
                    } = C, n = +!!e;
                    if (e && !t) {
                        z(n), (0, E.A)({
                            platformType: C.type,
                            location: "User Settings"
                        });
                        return
                    }
                    V(n), g.A.setVisibility(C.type, C.id, n)
                }
            }), A, m, o]
        })), function() {
            if (C.revoked || C.integrations.length > 0) return (0, i.jsx)(_.cGx, {})
        }(), C.revoked ? (0, i.jsx)(r.po8, {
            messageType: r.YCn.INFO,
            children: M.intl.format(M.t["6C4lgA"], {
                onReconnect: function() {
                    (0, E.A)({
                        platformType: C.type,
                        location: "User Settings"
                    })
                }
            })
        }) : C.integrations.length > 0 ? (0, i.jsx)(_.D0$, {
            label: M.intl.string(M.t.fOe3fZ),
            children: C.integrations.map(e => (0, i.jsx)(k, {
                integration: e
            }, e.id))
        }) : void 0]
    })
}

function w() {
    return (0, i.jsx)(_.D0$, {
        label: M.intl.string(M.t.ZeDrUf),
        description: M.intl.format(M.t["oYc+Gz"], {
            privacyPolicyUrl: P.X7G.PRIVACY
        }),
        children: (0, i.jsx)(H, {})
    })
}

function B(e) {
    let t = h.A.get(e);
    (0, E.A)({
        platformType: t.type
    }), j.default.track(P.HAw.ACCOUNT_LINK_STEP, {
        previous_step: "desktop connections",
        current_step: "desktop oauth",
        platform_type: t.type
    })
}

function H() {
    let e = (0, p.gn)();
    return (0, i.jsxs)("div", {
        className: U.lA,
        children: [e.slice(0, 10).map(e => (0, i.jsx)(A.A, {
            type: e.type,
            className: U.__invalid_accountButton,
            innerClassName: U.U$
        }, e.type)), (0, i.jsx)(c.m, {
            text: M.intl.string(M.t.QqTz8b),
            children: (0, i.jsx)("div", {
                className: a()(U.ej, U.__invalid_accountButton),
                children: (0, i.jsx)(_.vN3, {
                    children: (0, i.jsx)("button", {
                        className: a()(U.R8, U.U$),
                        type: "button",
                        onClick: function() {
                            m.h.dispatch({
                                type: "CONNECTIONS_GRID_MODAL_SHOW",
                                onComplete: B
                            })
                        },
                        "aria-label": M.intl.string(M.t.Zhcj9X),
                        children: (0, i.jsx)(_._BQ, {
                            color: "currentColor",
                            size: "md",
                            "aria-label": M.intl.string(M.t.QqTz8b)
                        })
                    })
                })
            })
        })]
    })
}

function F(e) {
    let t, {
        fetching: n,
        accounts: s,
        theme: l,
        locale: a
    } = e;
    return t = n ? (0, i.jsx)(_.y$y, {
        type: _.y$y.Type.SPINNING_CIRCLE
    }) : 0 === s.length ? (0, i.jsx)(_.ppr, {
        theme: l,
        children: (0, i.jsx)(_.SGT, {
            note: M.intl.string(M.t.WenGZ2),
            children: M.intl.string(M.t.aoLS84)
        })
    }) : s.filter(e => h.A.isSupported(e.type)).map((e, t) => (0, i.jsx)(V, {
        theme: l,
        account: e,
        locale: a,
        onDisconnect: () => (function(e) {
            let {
                type: t,
                id: n
            } = e;
            g.A.disconnect(t, n)
        })(e)
    }, t)), (0, i.jsx)("div", {
        className: U.V,
        children: t
    })
}

function Y() {
    let e = (0, o.bG)([v.A], () => v.A.hidePersonalInformation),
        t = (0, o.bG)([N.A], () => N.A.isFetching()),
        n = (0, o.bG)([N.A], () => N.A.getAccounts()),
        s = (0, x.Ay)(),
        l = (0, o.bG)([R.default], () => R.default.locale);
    return e ? null : (0, i.jsx)(F, {
        fetching: t,
        accounts: n,
        theme: s,
        locale: l
    })
}