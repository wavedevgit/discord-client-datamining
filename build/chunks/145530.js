/** chunk id: 145530 params = (module,exports,require) **/
n.d(e, {
    A: () => v
}), n(938796);
var i = n(627968),
    a = n(64700),
    s = n(503698),
    r = n.n(s),
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
    E = n(226698),
    T = n(994500),
    m = n(287809),
    S = n(628691),
    N = n(636922),
    f = n(652215),
    I = n(985018),
    b = n(641131),
    x = n(759375);
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
            moderatorReportChannelId: s,
            isFlagResolved: r
        } = a ?? {};
        t ? (0, A.V2)(i, "message_delete_alert", () => g.A.deleteMessage(n.id, i.id).then(() => {
            null != s && (e && !r && E.A.resolveFlag(s), this.props.onClose?.())
        })) : g.A.deleteMessage(n.id, i.id).then(() => {
            null != s && (e && !r && E.A.resolveFlag(s), this.props.onClose?.())
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
                channel: s,
                message: r,
                showContextMenuHint: c,
                moderatorReportData: _,
                ...g
            } = this.props,
            u = s.type === f.rbe.GUILD_ANNOUNCEMENT && (0, l.Lt)(r.flags, f.pr7.CROSSPOSTED);
        c && (t = (0, i.jsx)(h.A, {
            className: x.Vc,
            children: I.intl.format(I.t.IxY7E6, {})
        })), (0, S.AR)(r) && (e = (0, i.jsx)("div", {
            className: x.Vc,
            children: (0, i.jsx)(d.dOG, {
                label: I.intl.string(I.t.x0jzo9),
                checked: n,
                onChange: this.handleToggleReport
            })
        }));
        let A = u ? I.intl.string(I.t["2kHABX"]) : I.intl.string(I.t.AMvpS4),
            E = (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)("div", {
                    className: x.iU,
                    children: (0, i.jsx)(N.A, {
                        channel: s,
                        message: r,
                        disableInteraction: !0
                    })
                }), e, t]
            });
        if (_?.moderatorReportChannelId != null) {
            let {
                isFlagResolved: t
            } = _;
            return (0, i.jsx)(p.A.Provider, {
                value: s.guild_id,
                children: (0, i.jsx)(o.Modal, {
                    title: I.intl.string(I.t.MWMcg7),
                    subtitle: A,
                    actions: [{
                        variant: "critical-primary",
                        text: I.intl.string(I.t.oyYWHE),
                        onClick: this.handleDelete
                    }],
                    actionBarInput: t ? void 0 : (0, i.jsx)(d.Checkbox, {
                        checked: a,
                        label: I.intl.string(b.default["8yIKem"]),
                        onChange: t => this.handleToggleResolveFlag(t)
                    }),
                    ...g,
                    children: E
                })
            })
        }
        return (0, i.jsx)(p.A.Provider, {
            value: s.guild_id,
            children: (0, i.jsx)(o.Modal, {
                title: u ? I.intl.string(I.t.aIz1oV) : I.intl.string(I.t.MWMcg7),
                subtitle: A,
                actions: [{
                    text: I.intl.string(I.t["ETE/oC"]),
                    onClick: g.onClose,
                    variant: "secondary"
                }, {
                    text: I.intl.string(I.t.oyYWHE),
                    onClick: this.handleDeleteMana,
                    variant: "critical-primary"
                }],
                onClose: g.onClose,
                transitionState: g.transitionState,
                children: E
            })
        })
    }
}
let v = {
    confirmPin: function(t, e) {
        let n, a = (0, u.m1)(t, m.default, T.A);
        n = t.isPrivate() ? I.intl.string(I.t.hMRngA) : I.intl.formatToPlainString(I.t["3IRluI"], {
            channelName: a
        }), (0, c.A)({
            title: I.intl.string(I.t.bKMaZX),
            subtitle: n,
            confirmText: I.intl.string(I.t.rOQ5BX),
            variant: "primary",
            onConfirm: () => {
                _.A.pinMessage(t, e.id)
            },
            cancelText: I.intl.string(I.t["ETE/oC"]),
            children: (0, i.jsx)("div", {
                className: x.iU,
                children: (0, i.jsx)(N.A, {
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
            title: I.intl.string(I.t.CFF2vL),
            subtitle: I.intl.string(I.t.NjEPp7),
            confirmText: I.intl.string(I.t.lAU5jB),
            variant: "critical",
            onConfirm: () => {
                _.A.unpinMessage(t, e.id)
            },
            cancelText: I.intl.string(I.t["ETE/oC"]),
            children: (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)("div", {
                    className: r()(x.iU, x.YK),
                    children: (0, i.jsx)(N.A, {
                        channel: t,
                        message: e,
                        disableInteraction: !0
                    })
                }), (0, i.jsx)(h.A, {
                    children: I.intl.format(I.t.oCVB3Y, {})
                })]
            })
        })
    },
    confirmDelete: function(t, e) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : void 0;
        (0, d.qfG)(s => (0, i.jsx)(C, {
            channel: t,
            message: e,
            showContextMenuHint: n,
            moderatorReportData: a,
            ...s
        }))
    },
    confirmEdit: function(t, e, n) {
        (0, c.A)({
            title: I.intl.string(I.t.aIz1oV),
            subtitle: I.intl.string(I.t.grBcM8),
            confirmText: I.intl.string(I.t["cY+Oob"]),
            variant: "primary",
            onConfirm: () => {
                g.A.editMessage(t, e, n)
            },
            cancelText: I.intl.string(I.t["ETE/oC"])
        })
    }
}