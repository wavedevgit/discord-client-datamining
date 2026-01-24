/** Chunk was on 48574 **/
/** chunk id: 830541, original params: e,t,s (module,exports,require) **/
s.d(t, {
    default: () => B
}), s(896048);
var r = s(627968),
    n = s(64700),
    i = s(503698),
    a = s.n(i),
    l = s(735438),
    o = s.n(l),
    c = s(311907),
    h = s(562465),
    d = s(732955),
    u = s(397927),
    p = s(846293),
    m = s(414079),
    x = s(297413),
    j = s(966327),
    g = s(58149),
    v = s(262295),
    A = s(576470),
    y = s(235986),
    b = s(544028),
    _ = s(671759),
    f = s(427157),
    C = s(734057),
    N = s(351906),
    O = s(954571),
    w = s(652215),
    E = s(985018),
    I = s(693737),
    k = s(506823),
    P = s(473169);

function D(e, t, s) {
    return t in e ? Object.defineProperty(e, t, {
        value: s,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = s, e
}

function S(e) {
    for (var t = 1; t < arguments.length; t++) {
        var s = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(s);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(s).filter(function(e) {
            return Object.getOwnPropertyDescriptor(s, e).enumerable
        }))), r.forEach(function(t) {
            D(e, t, s[t])
        })
    }
    return e
}

function R(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
        var s = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            s.push.apply(s, r)
        }
        return s
    })(Object(t)).forEach(function(s) {
        Object.defineProperty(e, s, Object.getOwnPropertyDescriptor(t, s))
    }), e
}
class M extends n.PureComponent {
    render() {
        let {
            invite: e,
            hideDiscriminator: t,
            hideInviteCode: s
        } = this.props, n = new f.A(e.inviter);
        return (0, r.jsxs)(y.A, {
            className: a()(I.nM, k.N),
            children: [(0, r.jsxs)(y.A, {
                align: y.A.Align.CENTER,
                className: I.CE,
                children: [(0, r.jsx)(j.A, {
                    user: n,
                    size: u._3J.SIZE_24,
                    className: I.my
                }), (0, r.jsx)(x.A, {
                    user: n,
                    hideDiscriminator: t,
                    usernameClass: I.Xh,
                    discriminatorClass: I.OM
                })]
            }), (0, r.jsx)(y.A, {
                align: y.A.Align.CENTER,
                grow: 0,
                shrink: 0,
                basis: 100,
                className: I.Kf,
                children: (0, r.jsx)(u.Text, {
                    className: I.aY,
                    variant: "text-sm/normal",
                    children: s ? "..." : e.code
                })
            }), (0, r.jsxs)(y.A, {
                basis: 100,
                grow: 0,
                shrink: 0,
                align: y.A.Align.CENTER,
                justify: y.A.Justify.END,
                className: I.Kf,
                children: [(0, r.jsx)(u.Text, {
                    className: I.qW,
                    variant: "text-sm/normal",
                    children: (0, r.jsx)(A.A, {
                        deadline: e.getExpiresAt(),
                        showDays: !1
                    })
                }), (0, r.jsx)(m.A, {
                    className: I.eb,
                    onClick: this.handleRevokeInvite
                })]
            })]
        })
    }
    constructor(...e) {
        super(...e), D(this, "handleRevokeInvite", () => {
            let {
                onRevoke: e,
                invite: t
            } = this.props;
            null != e && e(t)
        })
    }
}
class T extends n.PureComponent {
    componentDidMount() {
        let {
            channelId: e
        } = this.props;
        h.Bo.get({
            url: w.Rsh.INSTANT_INVITES(e),
            retries: 3,
            oldFormErrors: !0,
            rejectWithError: !0
        }).then(e => {
            let t = e.body.map(e => new _.A(R(S({}, e), {
                maxUses: e.max_uses,
                maxAge: e.max_age,
                createdAt: e.created_at
            })));
            this.setState({
                loading: !1,
                invites: t
            })
        }), O.default.track(w.HAw.OPEN_MODAL, R(S({}, (0, g.dI)(C.A.getChannel(e))), {
            type: "Group DM Invites",
            source: "Group DM Menu"
        }))
    }
    renderContent() {
        let {
            loading: e,
            invites: t
        } = this.state, {
            hideDiscriminators: s,
            hideInviteCodes: n
        } = this.props;
        if (e || null == t) return (0, r.jsx)(u.y$y, {
            className: P.QX,
            type: u.y$y.Type.SPINNING_CIRCLE
        });
        if (o().isEmpty(t)) return this.renderEmpty();
        let i = o()(t).sortBy(e => {
            var t;
            return (null != (t = e.inviter.username) ? t : "").toLocaleLowerCase()
        }).value();
        return (0, r.jsxs)(u.XIK, {
            "aria-label": E.intl.string(E.t["9F90ic"]),
            selectionMode: "none",
            children: [(0, r.jsxs)(u.A0N, {
                children: [(0, r.jsx)(u.VeA, {
                    children: E.intl.string(E.t.EgHyKy)
                }), (0, r.jsx)(u.VeA, {
                    children: E.intl.string(E.t.LBlFEN)
                }), (0, r.jsx)(u.VeA, {
                    children: E.intl.string(E.t["1aM27d"])
                })]
            }), (0, r.jsx)(u.BFY, {
                items: i,
                children: e => {
                    let t = new f.A(e.inviter);
                    return (0, r.jsxs)(u.Hjg, {
                        id: e.code,
                        children: [(0, r.jsx)(u.nA6, {
                            children: (0, r.jsx)(v.A, {
                                avatar: (0, r.jsx)(j.A, {
                                    user: t,
                                    size: u._3J.SIZE_24
                                }),
                                name: (0, r.jsx)(x.A, {
                                    user: t,
                                    hideDiscriminator: s,
                                    usernameClass: I.Xh,
                                    discriminatorClass: I.OM
                                })
                            })
                        }), (0, r.jsx)(u.nA6, {
                            children: (0, r.jsx)(u.Text, {
                                className: I.aY,
                                variant: "text-sm/normal",
                                children: n ? "..." : e.code
                            })
                        }), (0, r.jsx)(u.nA6, {
                            children: (0, r.jsxs)(u.BJc, {
                                direction: "horizontal",
                                align: "center",
                                gap: 8,
                                children: [(0, r.jsx)(u.Text, {
                                    className: I.qW,
                                    variant: "text-sm/normal",
                                    children: (0, r.jsx)(A.A, {
                                        deadline: e.getExpiresAt(),
                                        showDays: !1
                                    })
                                }), (0, r.jsx)(u.K0, {
                                    size: "sm",
                                    "aria-label": E.intl.string(E.t.N86XcP),
                                    variant: "critical-secondary",
                                    icon: u.ucK,
                                    onClick: () => this.handleRevoke(e)
                                })]
                            })
                        })]
                    })
                }
            })]
        })
    }
    renderEmpty() {
        return (0, r.jsxs)(u.ppr, {
            theme: this.props.theme,
            children: [(0, r.jsx)(u.G8R, {
                darkSrc: s(774125),
                lightSrc: s(151803),
                width: 256,
                height: 130,
                style: {
                    marginBottom: 0
                }
            }), (0, r.jsx)(u.SGT, {
                className: P.QX,
                children: E.intl.string(E.t["03/rlQ"])
            })]
        })
    }
    renderInvites() {
        let {
            hideDiscriminators: e,
            hideInviteCodes: t
        } = this.props;
        return o()(this.state.invites).sortBy(e => {
            var t;
            return (null != (t = e.inviter.username) ? t : "").toLocaleLowerCase()
        }).map(s => (0, r.jsx)(M, {
            invite: s,
            hideDiscriminator: e,
            hideInviteCode: t,
            onRevoke: this.handleRevoke
        }, s.code)).value()
    }
    render() {
        let {
            onClose: e,
            transitionState: t
        } = this.props;
        return (0, r.jsx)(d.aFV, {
            title: E.intl.string(E.t["9F90ic"]),
            subtitle: E.intl.string(E.t.WDw38H),
            actions: [{
                text: E.intl.string(E.t.i4jeWR),
                onClick: this.handleClose
            }],
            onClose: e,
            transitionState: t,
            children: this.renderContent()
        })
    }
    constructor(...e) {
        super(...e), D(this, "state", {
            loading: !0,
            invites: null
        }), D(this, "handleRevoke", e => {
            p.Ay.revokeInvite(e), this.setState({
                invites: this.state.invites.filter(t => t !== e)
            })
        }), D(this, "handleClose", () => {
            let {
                onClose: e
            } = this.props;
            null == e || e()
        })
    }
}
let B = c.Ay.connectStores([N.A, b.A], () => ({
    hideDiscriminators: N.A.hidePersonalInformation,
    hideInviteCodes: N.A.hideInstantInvites,
    theme: b.A.theme
}))(T)