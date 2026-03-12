/** chunk id: 145530 params = (module,exports,require) **/
n.d(e, {
    A: () => v
}), n(938796);
var i = n(627968),
    a = n(64700),
    r = n(503698),
    s = n.n(r),
    l = n(665260),
    o = n(158954),
    c = n(314116),
    d = n(397927),
    _ = n(687709),
    g = n(843472),
    u = n(47167),
    h = n(12351),
    p = n(386467),
    A = n(928658),
    m = n(226698),
    T = n(994500),
    f = n(287809),
    E = n(628691),
    b = n(636922),
    x = n(652215),
    S = n(985018),
    I = n(733045),
    N = n(477986);
class C extends a.PureComponent {
    state = {
        report: !1,
        resolveFlag: !1
    };
    handleDelete = () => {
        let {
            report: t,
            resolveFlag: e
        } = this.state, {
            channel: n,
            message: i,
            moderatorReportData: a
        } = this.props, {
            moderatorReportChannelId: r,
            isFlagResolved: s
        } = a ?? {};
        t ? (0, A.V2)(i, "message_delete_alert", () => g.A.deleteMessage(n.id, i.id).then(() => {
            null != r && (e && !s && m.A.resolveFlag(r), this.props.onClose?.())
        })) : g.A.deleteMessage(n.id, i.id).then(() => {
            null != r && (e && !s && m.A.resolveFlag(r), this.props.onClose?.())
        })
    };
    handleDeleteMana = () => {
        this.handleDelete(), this.props.onClose?.()
    };
    handleToggleReport = t => {
        this.setState({
            report: t
        })
    };
    handleToggleResolveFlag = t => {
        this.setState({
            resolveFlag: t
        })
    };
    render() {
        let t, e, {
                report: n,
                resolveFlag: a
            } = this.state,
            {
                channel: r,
                message: s,
                showContextMenuHint: c,
                moderatorReportData: _,
                ...g
            } = this.props,
            u = r.type === x.rbe.GUILD_ANNOUNCEMENT && (0, l.Lt)(s.flags, x.pr7.CROSSPOSTED);
        c && (t = (0, i.jsx)(h.A, {
            className: N.Vc,
            children: S.intl.format(S.t.IxY7E6, {})
        })), (0, E.AR)(s) && (e = (0, i.jsx)("div", {
            className: N.Vc,
            children: (0, i.jsx)(d.dOG, {
                label: S.intl.string(S.t.x0jzo9),
                checked: n,
                onChange: this.handleToggleReport
            })
        }));
        let A = u ? S.intl.string(S.t["2kHABX"]) : S.intl.string(S.t.AMvpS4),
            m = (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)("div", {
                    className: N.iU,
                    children: (0, i.jsx)(b.A, {
                        channel: r,
                        message: s,
                        disableInteraction: !0
                    })
                }), e, t]
            });
        if (_?.moderatorReportChannelId != null) {
            let {
                isFlagResolved: t
            } = _;
            return (0, i.jsx)(p.A.Provider, {
                value: r.guild_id,
                children: (0, i.jsx)(o.Modal, {
                    title: S.intl.string(S.t.MWMcg7),
                    subtitle: A,
                    actions: [{
                        variant: "critical-primary",
                        text: S.intl.string(S.t.oyYWHE),
                        onClick: this.handleDelete
                    }],
                    actionBarInput: t ? void 0 : (0, i.jsx)(d.Checkbox, {
                        checked: a,
                        label: S.intl.string(I.default["8yIKem"]),
                        onChange: t => this.handleToggleResolveFlag(t)
                    }),
                    ...g,
                    children: m
                })
            })
        }
        return (0, i.jsx)(p.A.Provider, {
            value: r.guild_id,
            children: (0, i.jsx)(o.Modal, {
                title: u ? S.intl.string(S.t.aIz1oV) : S.intl.string(S.t.MWMcg7),
                subtitle: A,
                actions: [{
                    text: S.intl.string(S.t["ETE/oC"]),
                    onClick: g.onClose,
                    variant: "secondary"
                }, {
                    text: S.intl.string(S.t.oyYWHE),
                    onClick: this.handleDeleteMana,
                    variant: "critical-primary"
                }],
                onClose: g.onClose,
                transitionState: g.transitionState,
                children: m
            })
        })
    }
}
let v = {
    confirmPin: function(t, e) {
        let n, a = (0, u.m1)(t, f.default, T.A);
        n = t.isPrivate() ? S.intl.string(S.t.hMRngA) : S.intl.formatToPlainString(S.t["3IRluI"], {
            channelName: a
        }), (0, c.A)({
            title: S.intl.string(S.t.bKMaZX),
            subtitle: n,
            confirmText: S.intl.string(S.t.rOQ5BX),
            variant: "primary",
            onConfirm: () => {
                _.A.pinMessage(t, e.id)
            },
            cancelText: S.intl.string(S.t["ETE/oC"]),
            children: (0, i.jsx)("div", {
                className: N.iU,
                children: (0, i.jsx)(b.A, {
                    channel: t,
                    message: e,
                    animateAvatar: !1,
                    disableInteraction: !0
                })
            })
        })
    },
    confirmUnpin: function(t, e) {
        (0, c.A)({
            title: S.intl.string(S.t.CFF2vL),
            subtitle: S.intl.string(S.t.NjEPp7),
            confirmText: S.intl.string(S.t.lAU5jB),
            variant: "critical",
            onConfirm: () => {
                _.A.unpinMessage(t, e.id)
            },
            cancelText: S.intl.string(S.t["ETE/oC"]),
            children: (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)("div", {
                    className: s()(N.iU, N.YK),
                    children: (0, i.jsx)(b.A, {
                        channel: t,
                        message: e,
                        disableInteraction: !0
                    })
                }), (0, i.jsx)(h.A, {
                    children: S.intl.format(S.t.oCVB3Y, {})
                })]
            })
        })
    },
    confirmDelete: function(t, e) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : void 0;
        (0, d.qfG)(r => (0, i.jsx)(C, {
            channel: t,
            message: e,
            showContextMenuHint: n,
            moderatorReportData: a,
            ...r
        }))
    },
    confirmEdit: function(t, e, n) {
        (0, c.A)({
            title: S.intl.string(S.t.aIz1oV),
            subtitle: S.intl.string(S.t.grBcM8),
            confirmText: S.intl.string(S.t["cY+Oob"]),
            variant: "primary",
            onConfirm: () => {
                g.A.editMessage(t, e, n)
            },
            cancelText: S.intl.string(S.t["ETE/oC"])
        })
    }
}