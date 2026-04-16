/** chunk id: 145530 params = (module,exports,require) **/
n.d(t, {
    A: () => T
}), n(938796);
var a = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    r = n(665260),
    c = n(158954),
    o = n(314116),
    d = n(397927),
    u = n(687709),
    p = n(843472),
    m = n(47167),
    h = n(12351),
    g = n(386467),
    _ = n(928658),
    A = n(226698),
    f = n(994500),
    x = n(287809),
    b = n(628691),
    I = n(636922),
    v = n(652215),
    C = n(985018),
    N = n(221314),
    y = n(893727);
class E extends i.PureComponent {
    state = {
        report: !1,
        resolveFlag: !1
    };
    handleDelete = () => {
        let {
            report: e,
            resolveFlag: t
        } = this.state, {
            channel: n,
            message: a,
            moderatorReportData: i
        } = this.props, {
            moderatorReportChannelId: l,
            isFlagResolved: s
        } = i ?? {};
        e ? (0, _.V2)(a, "message_delete_alert", () => p.A.deleteMessage(n.id, a.id).then(() => {
            null != l && (t && !s && A.A.resolveFlag(l), this.props.onClose?.())
        })) : p.A.deleteMessage(n.id, a.id).then(() => {
            null != l && (t && !s && A.A.resolveFlag(l), this.props.onClose?.())
        })
    };
    handleDeleteMana = () => {
        this.handleDelete(), this.props.onClose?.()
    };
    handleToggleReport = e => {
        this.setState({
            report: e
        })
    };
    handleToggleResolveFlag = e => {
        this.setState({
            resolveFlag: e
        })
    };
    render() {
        let e, t, {
                report: n,
                resolveFlag: i
            } = this.state,
            {
                channel: l,
                message: s,
                showContextMenuHint: o,
                moderatorReportData: u,
                ...p
            } = this.props,
            m = l.type === v.rbe.GUILD_ANNOUNCEMENT && (0, r.Lt)(s.flags, v.pr7.CROSSPOSTED);
        o && (e = (0, a.jsx)(h.A, {
            className: y.Vc,
            children: C.intl.format(C.t.IxY7E6, {})
        })), (0, b.AR)(s) && (t = (0, a.jsx)("div", {
            className: y.Vc,
            children: (0, a.jsx)(d.dOG, {
                label: C.intl.string(C.t.x0jzo9),
                checked: n,
                onChange: this.handleToggleReport
            })
        }));
        let _ = m ? C.intl.string(C.t["2kHABX"]) : C.intl.string(C.t.AMvpS4),
            A = (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsx)("div", {
                    className: y.iU,
                    children: (0, a.jsx)(I.A, {
                        channel: l,
                        message: s,
                        disableInteraction: !0
                    })
                }), t, e]
            });
        if (u?.moderatorReportChannelId != null) {
            let {
                isFlagResolved: e
            } = u;
            return (0, a.jsx)(g.A.Provider, {
                value: l.guild_id,
                children: (0, a.jsx)(c.Modal, {
                    title: C.intl.string(C.t.MWMcg7),
                    subtitle: _,
                    actions: [{
                        variant: "critical-primary",
                        text: C.intl.string(C.t.oyYWHE),
                        onClick: this.handleDelete
                    }],
                    actionBarInput: e ? void 0 : (0, a.jsx)(d.Checkbox, {
                        checked: i,
                        label: C.intl.string(N.default["8yIKem"]),
                        onChange: e => this.handleToggleResolveFlag(e)
                    }),
                    ...p,
                    children: A
                })
            })
        }
        return (0, a.jsx)(g.A.Provider, {
            value: l.guild_id,
            children: (0, a.jsx)(c.Modal, {
                title: m ? C.intl.string(C.t.aIz1oV) : C.intl.string(C.t.MWMcg7),
                subtitle: _,
                actions: [{
                    text: C.intl.string(C.t["ETE/oC"]),
                    onClick: p.onClose,
                    variant: "secondary"
                }, {
                    text: C.intl.string(C.t.oyYWHE),
                    onClick: this.handleDeleteMana,
                    variant: "critical-primary"
                }],
                onClose: p.onClose,
                transitionState: p.transitionState,
                children: A
            })
        })
    }
}
let T = {
    confirmPin: function(e, t) {
        let n, i = (0, m.m1)(e, x.default, f.A);
        n = e.isPrivate() ? C.intl.string(C.t.hMRngA) : C.intl.formatToPlainString(C.t["3IRluI"], {
            channelName: i
        }), (0, o.A)({
            title: C.intl.string(C.t.bKMaZX),
            subtitle: n,
            confirmText: C.intl.string(C.t.rOQ5BX),
            variant: "primary",
            onConfirm: () => {
                u.A.pinMessage(e, t.id)
            },
            cancelText: C.intl.string(C.t["ETE/oC"]),
            children: (0, a.jsx)("div", {
                className: y.iU,
                children: (0, a.jsx)(I.A, {
                    channel: e,
                    message: t,
                    animateAvatar: !1,
                    disableInteraction: !0
                })
            })
        })
    },
    confirmUnpin: function(e, t) {
        (0, o.A)({
            title: C.intl.string(C.t.CFF2vL),
            subtitle: C.intl.string(C.t.NjEPp7),
            confirmText: C.intl.string(C.t.lAU5jB),
            variant: "critical",
            onConfirm: () => {
                u.A.unpinMessage(e, t.id)
            },
            cancelText: C.intl.string(C.t["ETE/oC"]),
            children: (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsx)("div", {
                    className: s()(y.iU, y.YK),
                    children: (0, a.jsx)(I.A, {
                        channel: e,
                        message: t,
                        disableInteraction: !0
                    })
                }), (0, a.jsx)(h.A, {
                    children: C.intl.format(C.t.oCVB3Y, {})
                })]
            })
        })
    },
    confirmDelete: function(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : void 0;
        (0, d.qfG)(l => (0, a.jsx)(E, {
            channel: e,
            message: t,
            showContextMenuHint: n,
            moderatorReportData: i,
            ...l
        }))
    },
    confirmEdit: function(e, t, n) {
        (0, o.A)({
            title: C.intl.string(C.t.aIz1oV),
            subtitle: C.intl.string(C.t.grBcM8),
            confirmText: C.intl.string(C.t["cY+Oob"]),
            variant: "primary",
            onConfirm: () => {
                p.A.editMessage(e, t, n)
            },
            cancelText: C.intl.string(C.t["ETE/oC"])
        })
    }
}