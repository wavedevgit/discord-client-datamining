/** chunk id: 441358 params = (module,exports,require) **/
l.d(t, {
    default: () => D
});
var n = l(627968),
    i = l(64700),
    s = l(503698),
    a = l.n(s),
    C = l(111956),
    r = l.n(C),
    o = l(33851),
    d = l.n(o),
    c = l(417597),
    u = l(397927),
    m = l(71393),
    x = l(351906),
    h = l(509402),
    g = l(282054),
    H = l(266047),
    p = l(221950),
    j = l(11541),
    _ = l(836968),
    f = l(652215),
    b = l(985018),
    A = l(921815),
    v = l(32271);
let V = [j.UP.DISCOVERY, j.UP.VANITY_URL, j.UP.BOT, j.UP.HUB, j.UP.MANUAL_MEMBER_VERIFICATION, j.UP.SOCIAL_LAYER_INTEGRATION_LINKED_CHANNEL];

function L(e) {
    let {
        type: t,
        text: l,
        size: i,
        vanityUrl: s,
        isFocused: C
    } = e, r = i ?? 16, o = function(e, t) {
        switch (e) {
            case j.UP.BOT:
                return (0, n.jsx)(u.CnV, {
                    size: "custom",
                    color: "currentColor",
                    className: A.Kk,
                    height: t,
                    width: t
                });
            case j.UP.INTEGRATION:
                return (0, n.jsx)(u.XC7, {
                    size: "custom",
                    color: "currentColor",
                    className: A.Kk,
                    height: t,
                    width: t
                });
            case j.UP.DISCOVERY:
                return (0, n.jsx)(u.QGJ, {
                    size: "custom",
                    color: "currentColor",
                    className: A.Kk,
                    height: t,
                    width: t
                });
            case j.UP.HUB:
                return (0, n.jsx)(u.Pfh, {
                    size: "custom",
                    color: "currentColor",
                    className: A.Kk,
                    height: t,
                    width: t
                });
            case j.UP.INVITE:
            case j.UP.VANITY_URL:
                return (0, n.jsx)(u.qYV, {
                    size: "custom",
                    color: "currentColor",
                    className: A.Kk,
                    height: t,
                    width: t
                });
            case j.UP.MANUAL_MEMBER_VERIFICATION:
                return (0, n.jsx)(h.A, {
                    className: A.Kk,
                    height: t,
                    width: t
                });
            case j.UP.SOCIAL_LAYER_INTEGRATION_LINKED_CHANNEL:
                return (0, n.jsx)(u._xR, {
                    size: "custom",
                    color: "currentColor",
                    className: A.Kk,
                    height: t,
                    width: t
                });
            default:
                return null
        }
    }(t, r), d = (0, j.CI)(t, s);
    return (0, n.jsxs)("div", {
        className: A.$E,
        "aria-label": d,
        children: [null != o ? o : null, (0, n.jsx)(u.Text, {
            variant: 12 === r ? "text-xs/medium" : "text-sm/medium",
            className: a()(A.QK, {
                [A.in]: C
            }),
            children: l
        })]
    })
}

function D(e) {
    let {
        guildId: t,
        onClose: l
    } = e, s = (0, c.bG)([H.A], () => H.A.getSearchStateByGuildId(t), [t], d()), {
        inviteCodes: C
    } = (0, _.N)(t), o = (0, c.bG)([m.A], () => m.A.getGuild(t)), h = o?.vanityURLCode ?? null, [D, R] = i.useState(!1), {
        selectedSourceInviteCode: M,
        selectedJoinSourceType: N
    } = s, S = null != N && N !== j.UP.UNSPECIFIED, E = (0, c.bG)([x.A], () => x.A.hideInstantInvites, []);
    E && (C = []);
    let I = i.useMemo(() => r()(e => {
        let l = e.trim();
        (0, p.Ld)(t, {
            selectedSourceInviteCode: "" !== l ? l : void 0,
            selectedJoinSourceType: void 0
        })
    }, 300), [t]);
    i.useEffect(() => () => {
        I.cancel()
    }, [I]);
    let y = i.useCallback(e => {
            let l = e.trim();
            (0, p.Ld)(t, {
                selectedSourceInviteCode: "" !== l ? l : void 0,
                selectedJoinSourceType: void 0
            })
        }, [t]),
        T = i.useCallback(e => {
            e === N ? (0, p.Ld)(t, {
                selectedSourceInviteCode: void 0,
                selectedJoinSourceType: void 0
            }) : (0, p.Ld)(t, {
                selectedSourceInviteCode: null,
                selectedJoinSourceType: e
            }), R(!1)
        }, [t, N]),
        Z = i.useCallback(e => {
            (0, p.Ld)(t, {
                selectedSourceInviteCode: e,
                selectedJoinSourceType: void 0
            }), I(e)
        }, [t, I]);
    return (0, n.jsx)(u.W1t, {
        "data-menu-needs-migration": !0,
        navId: "members-table-join-method-menu",
        onClose: () => {
            l()
        },
        "aria-label": b.intl.string(b.t["u/7Rdc"]),
        onSelect: f.tEg,
        children: D ? (0, n.jsxs)(u.rXV, {
            children: [(0, n.jsx)(u.Drp, {
                id: "back",
                action: () => R(!1),
                render: e => (0, n.jsxs)("span", {
                    ...e,
                    className: A.RX,
                    children: [(0, n.jsx)(u.n2b, {
                        size: "custom",
                        color: "currentColor",
                        width: 16,
                        height: 16,
                        className: A.__invalid_caret
                    }), (0, n.jsx)(u.Text, {
                        variant: "eyebrow",
                        color: "text-strong",
                        children: b.intl.string(b.t["Kz/cho"])
                    })]
                })
            }), V.map(e => (0, n.jsx)(u.iDA, {
                id: `join-source-type-option-${e}`,
                void_label: t => (0, n.jsx)(L, {
                    ...t,
                    type: e,
                    vanityUrl: h,
                    text: (0, j.CI)(e, h, E)
                }),
                checked: N === e,
                disabled: !1,
                action: () => T(e),
                group: "join-source-type-options"
            }, `join-source-type-option-${e}`))]
        }) : (0, n.jsxs)(u.rXV, {
            children: [(0, n.jsx)(u.aK1, {
                id: "members-table-invite-code-search",
                control: (e, t) => (0, n.jsx)(u.VPO, {
                    ...e,
                    query: M ?? "",
                    onChange: Z,
                    ref: t,
                    placeholder: b.intl.string(b.t.YwJnGz)
                })
            }, "invite-code-filter-search"), (0, n.jsx)(u.bXX, {}), (0, n.jsx)(u.iDA, {
                id: "join-source-type-option-all",
                label: b.intl.string(b.t.an9Ry3),
                checked: null == M && null == N,
                disabled: !1,
                action: () => T(null),
                group: "join-source-type-options"
            }, "join-source-type-option-all"), C.map(e => (0, n.jsx)(u.iDA, {
                id: `join-source-type-option-${e}`,
                void_label: t => (0, n.jsx)(L, {
                    ...t,
                    type: j.UP.INVITE,
                    vanityUrl: h,
                    text: e
                }),
                checked: M === e,
                disabled: !1,
                action: () => y(e),
                group: "join-source-type-options"
            }, `join-source-type-option-${e}`)), (0, n.jsx)(u.bXX, {}), (0, n.jsx)(u.Drp, {
                id: "other-join-methods",
                action: () => R(!0),
                render: e => (0, n.jsxs)("div", {
                    className: a()(A.RI, A.RX),
                    children: [(0, n.jsxs)("div", {
                        className: v.label,
                        children: [(0, n.jsx)(u.Text, {
                            variant: "text-sm/medium",
                            className: a()(A.__invalid_selectedRadio, A.QK, {
                                [A.in]: e.isFocused
                            }),
                            children: b.intl.string(b.t["Kz/cho"])
                        }), S ? (0, n.jsx)("div", {
                            className: A.TF,
                            children: (0, n.jsx)(L, {
                                ...e,
                                size: 12,
                                text: (0, j.CI)(N, h, E),
                                type: N,
                                vanityUrl: h
                            })
                        }) : null]
                    }), S ? (0, n.jsx)(g.A, {
                        background: A.__invalid_radio,
                        foreground: A.QE,
                        width: 16,
                        height: 16
                    }) : (0, n.jsx)(u._BQ, {
                        size: "custom",
                        color: "currentColor",
                        width: 16,
                        height: 16,
                        className: A.__invalid_caret
                    })]
                })
            }, "other-join-methods")]
        })
    })
}