/** Chunk was on 21968 **/
/** chunk id: 784309, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => E
}), n(747238), n(896048), n(321073);
var i = n(627968),
    r = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(562465),
    o = n(451988),
    c = n(314116),
    d = n(435371),
    u = n(397927),
    p = n(157559),
    m = n(282956),
    g = n(824953),
    b = n(235986),
    f = n(342298),
    h = n(427157),
    x = n(147925),
    j = n(486020),
    O = n(957565),
    y = n(661191),
    A = n(427262),
    v = n(447066),
    _ = n(652215),
    N = n(985018),
    w = n(416337);

function T(e, t) {
    return null != t && /^data:/.test(t) ? t : (0, j.ku)({
        id: e.id,
        avatar: t,
        discriminator: _.h3J
    })
}

function E(e) {
    let {
        id: t,
        webhook: n,
        editedWebhook: l,
        channelOptions: j,
        isExpanded: E,
        isNew: C,
        errors: S,
        onToggleExpand: I
    } = e, [P, k] = r.useState(!1), [R] = r.useState(new o.Ep);
    r.useEffect(() => () => R.stop(), [R]);
    let L = r.useMemo(() => T(n, n.avatar), [n]),
        D = r.useCallback(() => {
            let e = "".concat((0, s.TP)(!1)).concat(_.Rsh.WEBHOOK_INTEGRATION(n.id, n.token));
            (0, O.C)(e)
        }, [n]),
        M = r.useCallback(() => {
            (0, c.A)({
                title: N.intl.formatToPlainString(N.t.QVFjHh, {
                    name: n.name
                }),
                subtitle: N.intl.format(N.t["rIWe+5"], {
                    name: n.name
                }),
                confirmText: N.intl.string(N.t["W+K1Fs"]),
                cancelText: N.intl.string(N.t.xNhj0O),
                onConfirm: () => {
                    g.A.delete(n.guild_id, n.id).catch(e => {
                        let {
                            status: t
                        } = e;
                        429 === t ? p.A.show({
                            title: N.intl.string(N.t.N5riYn),
                            body: N.intl.string(N.t.eAxcCc)
                        }) : p.A.show({
                            title: N.intl.string(N.t.N5riYn),
                            body: N.intl.string(N.t["/4TwKf"])
                        })
                    })
                }
            })
        }, [n.guild_id, n.id, n.name]),
        G = [];
    null != n.user ? G.push({
        icon: u.O4,
        text: N.intl.formatToPlainString(N.t["7EcUbr"], {
            user: (e => {
                if (null == e) return null;
                let t = new h.A(e);
                return A.Ay.getUserTag(t)
            })(n.user),
            timestamp: y.default.extractTimestamp(n.id)
        })
    }) : G.push({
        icon: u.O4,
        text: N.intl.formatToPlainString(N.t["7mv59O"], {
            timestamp: y.default.extractTimestamp(n.id)
        })
    });
    let U = null;
    return E && null != l && (U = (0, i.jsxs)("div", {
        className: w.rf,
        children: [(0, i.jsx)(u.cGx, {
            className: w.fV
        }), (0, i.jsxs)(b.A, {
            children: [(0, i.jsx)(b.A.Child, {
                shrink: 1,
                grow: 0,
                children: (0, i.jsxs)(b.A, {
                    className: w.R3,
                    direction: b.A.Direction.VERTICAL,
                    children: [(0, i.jsx)(f.A, {
                        image: l.avatar,
                        onChange: e => {
                            m.A.updateWebhook({
                                avatar: e
                            })
                        },
                        makeURL: e => T(n, e),
                        imageClassName: w.mr,
                        showIcon: !0
                    }), null != S.avatar && "" !== S.avatar ? (0, i.jsx)(u.Text, {
                        color: "text-feedback-critical",
                        variant: "text-sm/normal",
                        children: S.avatar
                    }) : null]
                })
            }), (0, i.jsxs)(b.A, {
                direction: b.A.Direction.VERTICAL,
                children: [(0, i.jsxs)(b.A, {
                    children: [(0, i.jsx)(b.A.Child, {
                        wrap: !0,
                        basis: "50%",
                        children: (0, i.jsx)(u.ksK, {
                            label: N.intl.string(N.t.ukdxuo),
                            value: l.name,
                            onChange: e => {
                                m.A.updateWebhook({
                                    name: e
                                })
                            },
                            maxLength: 80,
                            error: S.name
                        })
                    }), (0, i.jsx)(b.A.Child, {
                        basis: "50%",
                        children: (0, i.jsx)("div", {
                            children: (0, i.jsx)(u.ZiE, {
                                label: N.intl.string(N.t.GK18KJ),
                                value: l.channel_id,
                                options: j,
                                formatOption: e => {
                                    let {
                                        value: t,
                                        label: n
                                    } = e;
                                    return {
                                        id: t.toString(),
                                        value: t,
                                        label: n
                                    }
                                },
                                onSelectionChange: e => {
                                    m.A.updateWebhook({
                                        channelId: e
                                    })
                                },
                                placeholder: N.intl.string(N.t.r2ptsz),
                                selectionMode: "single"
                            })
                        })
                    })]
                }), (0, i.jsx)(u.cGx, {
                    className: w.Bd
                }), (0, i.jsxs)(b.A, {
                    children: [(0, i.jsx)(d.m_, {
                        text: N.intl.string(N.t.wwdb3g),
                        shouldShow: P,
                        children: (0, i.jsx)("div", {
                            "data-button-hoisted-classname-wrapper": !0,
                            className: w.cL,
                            children: (0, i.jsx)(u.Button, {
                                variant: "secondary",
                                size: "sm",
                                text: N.intl.string(N.t.Ae9rUW),
                                "aria-label": "",
                                onClick: () => {
                                    k(!0), u.ORC.announce(N.intl.string(N.t.wwdb3g)), R.start(1e3, () => k(!1)), D()
                                },
                                disabled: null == n.token || "" === n.token
                            })
                        })
                    }), (0, i.jsx)(u.Button, {
                        variant: "critical-secondary",
                        size: "sm",
                        text: N.intl.string(N.t.jVrUnC),
                        onClick: M
                    })]
                })]
            })]
        })]
    })), (0, i.jsx)(u.ZpM, {
        editable: !0,
        id: t,
        className: a()(w.Nr, C ? w.U6 : null),
        children: (0, i.jsxs)(b.A, {
            direction: b.A.Direction.VERTICAL,
            children: [(0, i.jsx)(u.DUT, {
                className: w.wx,
                "aria-expanded": E,
                onClick: I,
                children: (0, i.jsxs)(b.A, {
                    align: b.A.Align.CENTER,
                    children: [(0, i.jsx)(v.A, {
                        name: n.name,
                        imageSrc: L,
                        details: G
                    }), (0, i.jsx)(x.A, {
                        className: w.eO,
                        expanded: E,
                        "aria-hidden": !0
                    })]
                })
            }), U]
        })
    })
}