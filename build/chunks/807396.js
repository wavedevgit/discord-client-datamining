/** chunk id: 807396 params = (module,exports,require) **/
n.d(t, {
    d: () => z,
    u: () => V
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
    m = n(397927),
    _ = n(73153),
    g = n(77468),
    A = n(289498),
    x = n(736653),
    p = n(573648),
    h = n(681819),
    f = n(370480),
    T = n(882997),
    E = n(373498),
    S = n(169869),
    b = n(263063),
    C = n(496885),
    N = n(962173),
    v = n(71393),
    I = n(351906),
    j = n(954571),
    y = n(975571),
    O = n(773669),
    R = n(801264),
    L = n(523104),
    P = n(856220),
    D = n(652215),
    G = n(783419),
    M = n(985018),
    k = n(431070);
let U = e => {
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
    return null != (0, o.bG)([v.A], () => v.A.getGuild(n.guild.id), [n.guild.id]) || (t = (0, i.jsx)(m.Button, {
        size: "sm",
        onClick: function() {
            g.A.joinServer(n.id, () => {})
        },
        disabled: s,
        variant: "primary",
        text: s ? M.intl.string(M.t.RXvQQu) : M.intl.string(M.t.XpeFYr)
    })), (0, i.jsxs)("div", {
        className: k.iA,
        children: [(0, i.jsxs)("div", {
            className: k.XX,
            children: [(0, i.jsx)(b.Ay, {
                size: b.Ay.Sizes.SMALL,
                guild: n.guild,
                className: k.$f
            }), (0, i.jsxs)("div", {
                className: k.Vn,
                children: [(0, i.jsx)(m.Text, {
                    variant: "text-md/semibold",
                    color: "text-strong",
                    children: n.guild.name
                }), (0, i.jsx)(m.MzZ, {
                    href: p.A.get(n.type)?.getPlatformUserUrl?.(n.account),
                    children: (0, i.jsx)(m.Text, {
                        variant: "text-xs/normal",
                        color: "text-default",
                        children: n.account.name
                    })
                })]
            }), t]
        }), a && (0, i.jsx)(m.Text, {
            variant: "text-xs/normal",
            color: "text-feedback-critical",
            className: k.R,
            children: l
        })]
    })
};

function w(e) {
    let t, n, l, a, o, _, A, {
            onDisconnect: x,
            account: b,
            theme: N,
            locale: v
        } = e,
        [I, j] = s.useState(b.friendSync),
        [O, w] = s.useState(b.visibility),
        [V, B] = s.useState(b.metadataVisibility),
        [F, H] = s.useState(b.showActivity),
        [z, Y] = s.useState(null),
        [X, W] = s.useState(null),
        [K, Z] = s.useState(!1),
        [q, J] = s.useState([]),
        Q = (0, h.ML)(b.type),
        $ = p.A.get(Q);
    s.useEffect(() => {
        j(b.friendSync), w(b.visibility), B(b.metadataVisibility), H(b.showActivity)
    }, [b]);
    let ee = {
            inProgressVisibility: z,
            inProgressMetadataVisibility: X
        },
        et = s.useRef(ee);
    return s.useEffect(() => {
        et.current = ee
    }), s.useEffect(() => {
        if (!1 === b.verified) return;
        let {
            inProgressVisibility: e,
            inProgressMetadataVisibility: t
        } = et.current;
        null != e && (w(e), g.A.setVisibility(b.type, b.id, e), Y(null)), null != t && (B(t), g.A.setMetadataVisibility(b.type, b.id, t), W(null))
    }, [b]), (0, i.jsxs)("div", {
        className: k.FI,
        children: [(t = p.A.get(b.type), n = p.A.get(Q), l = "1" === (b.metadata ?? {})[G.pK.TWITTER_VERIFIED], a = null, t.type === D.fg2.TWITTER && l && (a = (0, i.jsx)(c.m, {
            text: M.intl.string(M.t.Jebrww),
            children: (0, i.jsx)(C.A, {
                color: d.A.unsafe_rawColors.TWITTER.css,
                children: (0, i.jsx)(m.Uzd, {
                    size: "xs",
                    color: d.A.unsafe_rawColors.WHITE.css
                })
            })
        })), (0, i.jsxs)("div", {
            className: k.Il,
            children: [(0, i.jsx)("img", {
                alt: n.name,
                className: k.gj,
                src: (0, u.Mw)(N) ? n.icon.darkSVG : n.icon.lightSVG
            }), (0, i.jsxs)("div", {
                children: [(0, i.jsxs)("div", {
                    className: k.$p,
                    children: [(0, i.jsx)(m.Text, {
                        color: "text-strong",
                        variant: "text-md/semibold",
                        className: k.RW,
                        children: b.name
                    }), null != a && (0, i.jsx)("div", {
                        className: k.cG,
                        children: a
                    })]
                }), (0, i.jsx)(m.Text, {
                    variant: "text-xs/normal",
                    color: "text-default",
                    className: k.Au,
                    children: n.name
                })]
            }), (0, i.jsx)(m.DUT, {
                className: k.uH,
                onClick: function() {
                    let e = p.A.get(b.type);
                    (0, m.qfG)(t => (0, i.jsx)(r.Modal, {
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
                        children: (0, E.A)(b) && (0, i.jsx)(R.A, {
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
                children: (0, i.jsx)(m.PGe, {
                    size: "xs",
                    color: "currentColor"
                })
            })]
        })), b.twoWayLink ? null : b.type === D.fg2.XBOX ? (0, i.jsx)(P._, {}) : b.type === D.fg2.PLAYSTATION ? (0, i.jsx)(L.j, {}) : null, function(e) {
            let t = e.metadata ?? {},
                n = null,
                s = (0, f.An)(t[G.pK.CREATED_AT], v);
            switch (e.type) {
                case D.fg2.REDDIT:
                    n = (0, S.xE)(t, k.Nz);
                    break;
                case D.fg2.STEAM:
                    n = (0, S.dy)(t, k.Nz);
                    break;
                case D.fg2.BLUESKY:
                case D.fg2.TWITTER:
                case D.fg2.MASTODON:
                    n = (0, S.ED)(t, k.Nz);
                    break;
                case D.fg2.EBAY:
                    n = (0, S.ub)(t, k.Nz);
                    break;
                case D.fg2.PAYPAL:
                    n = (0, S.gZ)(t, k.Nz);
                    break;
                case D.fg2.TIKTOK:
                    n = (0, S.HU)(t, k.Nz)
            }
            null !== s && (null == n && (n = []), n?.push((0, i.jsx)(m.Text, {
                variant: "text-xs/normal",
                color: "text-subtle",
                className: k.M4,
                children: M.intl.format(M.t["9rfonh"], {
                    date: s
                })
            }, "member-since")));
            let l = q.includes(e.id),
                a = M.intl.string(M.t.wzzjk9);
            if (null == n || 0 === n.length)
                if (!0 !== p.A.get(e.type).hasMetadata) return null;
                else n = [(0, i.jsx)(m.LpS, {
                    className: k.Z3,
                    text: M.intl.string(M.t.y2b7CA)
                }, "badge"), (0, i.jsx)(m.Text, {
                    variant: "text-xs/normal",
                    className: k.vt,
                    children: M.intl.format(M.t.Up2ni7, {
                        helpdeskUrl: y.A.getArticleURL(D.MVz.CONNECTION_DETAILS)
                    })
                }, "label")], a = M.intl.string(M.t["LVh3/5"]);
            return l && (a = M.intl.string(M.t.i4jeWR)), n.push((0, i.jsx)("div", {
                className: k.jy,
                children: (0, i.jsx)(m.Button, {
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
                className: k.tJ,
                children: n
            })
        }(b), (D.txh.has(b.type) && (o = (0, i.jsx)(m.dOG, {
            label: M.intl.string(M.t["+KCMSi"]),
            checked: I,
            onChange: function(e) {
                j(e), g.A.setFriendSync(b.type, b.id, e)
            }
        })), D.ewM.has(b.type) && (_ = (0, i.jsx)(m.dOG, {
            label: M.intl.format(M.t["6u6J0q"], {
                platform: $.name
            }),
            checked: F,
            onChange: function(e) {
                H(e), g.A.setShowActivity(b.type, b.id, e)
            }
        })), p.A.get(b.type)?.hasMetadata === !0 && (A = (0, i.jsx)(m.dOG, {
            label: M.intl.string(M.t.FYKGsL),
            checked: 1 === V,
            onChange: function(e) {
                let {
                    verified: t
                } = b, n = +!!e;
                if (e && !t) {
                    W(n), (0, T.A)({
                        platformType: b.type,
                        location: "User Settings"
                    });
                    return
                }
                B(n), g.A.setMetadataVisibility(b.type, b.id, n)
            },
            disabled: 1 !== O || null == b.metadata
        })), (0, i.jsxs)("div", {
            className: k.HZ,
            children: [(0, i.jsx)(m.dOG, {
                label: M.intl.string(M.t.f7yOAX),
                checked: 1 === O,
                onChange: function(e) {
                    let {
                        verified: t
                    } = b, n = +!!e;
                    if (e && !t) {
                        Y(n), (0, T.A)({
                            platformType: b.type,
                            location: "User Settings"
                        });
                        return
                    }
                    w(n), g.A.setVisibility(b.type, b.id, n)
                }
            }), A, _, o]
        })), function() {
            if (b.revoked || b.integrations.length > 0) return (0, i.jsx)(m.cGx, {})
        }(), b.revoked ? (0, i.jsx)(r.po8, {
            messageType: r.YCn.INFO,
            children: M.intl.format(M.t["6C4lgA"], {
                onReconnect: function() {
                    (0, T.A)({
                        platformType: b.type,
                        location: "User Settings"
                    })
                }
            })
        }) : b.integrations.length > 0 ? (0, i.jsx)(m.D0$, {
            label: M.intl.string(M.t.fOe3fZ),
            children: b.integrations.map(e => (0, i.jsx)(U, {
                integration: e
            }, e.id))
        }) : void 0]
    })
}

function V() {
    return (0, i.jsx)(m.D0$, {
        label: M.intl.string(M.t.ZeDrUf),
        description: M.intl.format(M.t["oYc+Gz"], {
            privacyPolicyUrl: D.X7G.PRIVACY
        }),
        children: (0, i.jsx)(F, {})
    })
}

function B(e) {
    let t = p.A.get(e);
    (0, T.A)({
        platformType: t.type
    }), j.default.track(D.HAw.ACCOUNT_LINK_STEP, {
        previous_step: "desktop connections",
        current_step: "desktop oauth",
        platform_type: t.type
    })
}

function F() {
    let e = (0, h.gn)();
    return (0, i.jsxs)("div", {
        className: k.lA,
        children: [e.slice(0, 10).map(e => (0, i.jsx)(A.A, {
            type: e.type,
            className: k.__invalid_accountButton,
            innerClassName: k.U$
        }, e.type)), (0, i.jsx)(c.m, {
            text: M.intl.string(M.t.QqTz8b),
            children: (0, i.jsx)("div", {
                className: a()(k.ej, k.__invalid_accountButton),
                children: (0, i.jsx)(m.vN3, {
                    children: (0, i.jsx)("button", {
                        className: a()(k.R8, k.U$),
                        type: "button",
                        onClick: function() {
                            _.h.dispatch({
                                type: "CONNECTIONS_GRID_MODAL_SHOW",
                                onComplete: B
                            })
                        },
                        "aria-label": M.intl.string(M.t.Zhcj9X),
                        children: (0, i.jsx)(m._BQ, {
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

function H(e) {
    let t, {
        fetching: n,
        accounts: s,
        theme: l,
        locale: a
    } = e;
    return t = n ? (0, i.jsx)(m.y$y, {
        type: m.y$y.Type.SPINNING_CIRCLE
    }) : 0 === s.length ? (0, i.jsx)(m.ppr, {
        theme: l,
        children: (0, i.jsx)(m.SGT, {
            note: M.intl.string(M.t.WenGZ2),
            children: M.intl.string(M.t.aoLS84)
        })
    }) : s.filter(e => p.A.isSupported(e.type)).map((e, t) => (0, i.jsx)(w, {
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
        className: k.V,
        children: t
    })
}

function z() {
    let e = (0, o.bG)([I.A], () => I.A.hidePersonalInformation),
        t = (0, o.bG)([N.A], () => N.A.isFetching()),
        n = (0, o.bG)([N.A], () => N.A.getAccounts()),
        s = (0, x.Ay)(),
        l = (0, o.bG)([O.default], () => O.default.locale);
    return e ? null : (0, i.jsx)(H, {
        fetching: t,
        accounts: n,
        theme: s,
        locale: l
    })
}