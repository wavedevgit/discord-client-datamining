/** chunk id: 784309 params = (module,exports,require) **/
n.d(t, {
    A: () => S
}), n(321073);
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(562465),
    o = n(451988),
    d = n(314116),
    c = n(435371),
    u = n(397927),
    m = n(157559),
    x = n(282956),
    g = n(824953),
    h = n(235986),
    p = n(342298),
    A = n(427157),
    b = n(147925),
    f = n(486020),
    _ = n(957565),
    j = n(661191),
    N = n(427262),
    v = n(447066),
    T = n(652215),
    C = n(985018),
    E = n(767906);

function I(e, t) {
    return null != t && /^data:/.test(t) ? t : (0, f.ku)({
        id: e.id,
        avatar: t,
        discriminator: T.h3J
    })
}

function S(e) {
    let {
        id: t,
        webhook: n,
        editedWebhook: s,
        channelOptions: f,
        isExpanded: S,
        isNew: y,
        errors: O,
        onToggleExpand: w
    } = e, [k, R] = l.useState(!1), [L] = l.useState(new o.Ep);
    l.useEffect(() => () => L.stop(), [L]);
    let M = l.useMemo(() => I(n, n.avatar), [n]),
        G = l.useCallback(() => {
            let e = `${(0,r.TP)(!1)}${T.Rsh.WEBHOOK_INTEGRATION(n.id,n.token)}`;
            (0, _.C)(e)
        }, [n]),
        D = l.useCallback(() => {
            (0, d.A)({
                title: C.intl.formatToPlainString(C.t.QVFjHh, {
                    name: n.name
                }),
                subtitle: C.intl.format(C.t["rIWe+5"], {
                    name: n.name
                }),
                confirmText: C.intl.string(C.t["W+K1Fs"]),
                cancelText: C.intl.string(C.t.xNhj0O),
                onConfirm: () => {
                    g.A.delete(n.guild_id, n.id).catch(e => {
                        let {
                            status: t
                        } = e;
                        429 === t ? m.A.show({
                            title: C.intl.string(C.t.N5riYn),
                            body: C.intl.string(C.t.eAxcCc)
                        }) : m.A.show({
                            title: C.intl.string(C.t.N5riYn),
                            body: C.intl.string(C.t["/4TwKf"])
                        })
                    })
                }
            })
        }, [n.guild_id, n.id, n.name]),
        P = [];
    null != n.user ? P.push({
        icon: u.O4,
        text: C.intl.formatToPlainString(C.t["7EcUbr"], {
            user: (e => {
                if (null == e) return null;
                let t = new A.A(e);
                return N.Ay.getUserTag(t)
            })(n.user),
            timestamp: j.default.extractTimestamp(n.id)
        })
    }) : P.push({
        icon: u.O4,
        text: C.intl.formatToPlainString(C.t["7mv59O"], {
            timestamp: j.default.extractTimestamp(n.id)
        })
    });
    let U = null;
    return S && null != s && (U = (0, i.jsxs)("div", {
        className: E.rf,
        children: [(0, i.jsx)(u.cGx, {
            className: E.fV
        }), (0, i.jsxs)(h.A, {
            children: [(0, i.jsx)(h.A.Child, {
                shrink: 1,
                grow: 0,
                children: (0, i.jsxs)(h.A, {
                    className: E.R3,
                    direction: h.A.Direction.VERTICAL,
                    children: [(0, i.jsx)(p.A, {
                        image: s.avatar,
                        onChange: e => {
                            x.A.updateWebhook({
                                avatar: e
                            })
                        },
                        makeURL: e => I(n, e),
                        imageClassName: E.mr,
                        showIcon: !0
                    }), null != O.avatar && "" !== O.avatar ? (0, i.jsx)(u.Text, {
                        color: "text-feedback-critical",
                        variant: "text-sm/normal",
                        children: O.avatar
                    }) : null]
                })
            }), (0, i.jsxs)(h.A, {
                direction: h.A.Direction.VERTICAL,
                children: [(0, i.jsxs)(h.A, {
                    children: [(0, i.jsx)(h.A.Child, {
                        wrap: !0,
                        basis: "50%",
                        children: (0, i.jsx)(u.ksK, {
                            label: C.intl.string(C.t.ukdxuo),
                            value: s.name,
                            onChange: e => {
                                x.A.updateWebhook({
                                    name: e
                                })
                            },
                            maxLength: 80,
                            error: O.name
                        })
                    }), (0, i.jsx)(h.A.Child, {
                        basis: "50%",
                        children: (0, i.jsx)("div", {
                            children: (0, i.jsx)(u.ZiE, {
                                label: C.intl.string(C.t.GK18KJ),
                                value: s.channel_id,
                                options: f,
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
                                    x.A.updateWebhook({
                                        channelId: e
                                    })
                                },
                                placeholder: C.intl.string(C.t.r2ptsz),
                                selectionMode: "single"
                            })
                        })
                    })]
                }), (0, i.jsx)(u.cGx, {
                    className: E.Bd
                }), (0, i.jsxs)(h.A, {
                    children: [(0, i.jsx)(c.m_, {
                        text: C.intl.string(C.t.wwdb3g),
                        shouldShow: k,
                        hideOnClick: !1,
                        forceOpen: k,
                        children: (0, i.jsx)("div", {
                            "data-button-hoisted-classname-wrapper": !0,
                            className: E.cL,
                            children: (0, i.jsx)(u.Button, {
                                variant: "secondary",
                                size: "sm",
                                text: C.intl.string(C.t.Ae9rUW),
                                "aria-label": "",
                                onClick: () => {
                                    R(!0), u.ORC.announce(C.intl.string(C.t.wwdb3g)), L.start(1e3, () => R(!1)), G()
                                },
                                disabled: null == n.token || "" === n.token
                            })
                        })
                    }), (0, i.jsx)(u.Button, {
                        variant: "critical-secondary",
                        size: "sm",
                        text: C.intl.string(C.t.jVrUnC),
                        onClick: D
                    })]
                })]
            })]
        })]
    })), (0, i.jsx)(u.ZpM, {
        editable: !0,
        id: t,
        className: a()(E.Nr, y ? E.U6 : null),
        children: (0, i.jsxs)(h.A, {
            direction: h.A.Direction.VERTICAL,
            children: [(0, i.jsx)(u.DUT, {
                className: E.wx,
                "aria-expanded": S,
                onClick: w,
                children: (0, i.jsxs)(h.A, {
                    align: h.A.Align.CENTER,
                    children: [(0, i.jsx)(v.A, {
                        name: n.name,
                        imageSrc: M,
                        details: P
                    }), (0, i.jsx)(b.A, {
                        className: E.eO,
                        expanded: S,
                        "aria-hidden": !0
                    })]
                })
            }), U]
        })
    })
}