/** chunk id: 145530 params = (module,exports,require) **/
i.d(t, {
    A: () => E
}), i(938796);
var n = i(627968),
    a = i(64700),
    l = i(503698),
    s = i.n(l),
    r = i(665260),
    c = i(158954),
    o = i(314116),
    d = i(397927),
    u = i(687709),
    p = i(843472),
    m = i(47167),
    _ = i(12351),
    h = i(386467),
    g = i(928658),
    A = i(226698),
    f = i(994500),
    x = i(287809),
    b = i(628691),
    I = i(636922),
    N = i(652215),
    C = i(985018),
    v = i(641131),
    y = i(759375);
class T extends a.PureComponent {
    state = {
        report: !1,
        resolveFlag: !1
    };
    handleDelete = () => {
        let {
            report: e,
            resolveFlag: t
        } = this.state, {
            channel: i,
            message: n,
            moderatorReportData: a
        } = this.props, {
            moderatorReportChannelId: l,
            isFlagResolved: s
        } = a ?? {};
        e ? (0, g.V2)(n, "message_delete_alert", () => p.A.deleteMessage(i.id, n.id).then(() => {
            null != l && (t && !s && A.A.resolveFlag(l), this.props.onClose?.())
        })) : p.A.deleteMessage(i.id, n.id).then(() => {
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
                report: i,
                resolveFlag: a
            } = this.state,
            {
                channel: l,
                message: s,
                showContextMenuHint: o,
                moderatorReportData: u,
                ...p
            } = this.props,
            m = l.type === N.rbe.GUILD_ANNOUNCEMENT && (0, r.Lt)(s.flags, N.pr7.CROSSPOSTED);
        o && (e = (0, n.jsx)(_.A, {
            className: y.Vc,
            children: C.intl.format(C.t.IxY7E6, {})
        })), (0, b.AR)(s) && (t = (0, n.jsx)("div", {
            className: y.Vc,
            children: (0, n.jsx)(d.dOG, {
                label: C.intl.string(C.t.x0jzo9),
                checked: i,
                onChange: this.handleToggleReport
            })
        }));
        let g = m ? C.intl.string(C.t["2kHABX"]) : C.intl.string(C.t.AMvpS4),
            A = (0, n.jsxs)(n.Fragment, {
                children: [(0, n.jsx)("div", {
                    className: y.iU,
                    children: (0, n.jsx)(I.A, {
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
            return (0, n.jsx)(h.A.Provider, {
                value: l.guild_id,
                children: (0, n.jsx)(c.Modal, {
                    title: C.intl.string(C.t.MWMcg7),
                    subtitle: g,
                    actions: [{
                        variant: "critical-primary",
                        text: C.intl.string(C.t.oyYWHE),
                        onClick: this.handleDelete
                    }],
                    actionBarInput: e ? void 0 : (0, n.jsx)(d.Checkbox, {
                        checked: a,
                        label: C.intl.string(v.default["8yIKem"]),
                        onChange: e => this.handleToggleResolveFlag(e)
                    }),
                    ...p,
                    children: A
                })
            })
        }
        return (0, n.jsx)(h.A.Provider, {
            value: l.guild_id,
            children: (0, n.jsx)(c.Modal, {
                title: m ? C.intl.string(C.t.aIz1oV) : C.intl.string(C.t.MWMcg7),
                subtitle: g,
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
let E = {
    confirmPin: function(e, t) {
        let i, a = (0, m.m1)(e, x.default, f.A);
        i = e.isPrivate() ? C.intl.string(C.t.hMRngA) : C.intl.formatToPlainString(C.t["3IRluI"], {
            channelName: a
        }), (0, o.A)({
            title: C.intl.string(C.t.bKMaZX),
            subtitle: i,
            confirmText: C.intl.string(C.t.rOQ5BX),
            variant: "primary",
            onConfirm: () => {
                u.A.pinMessage(e, t.id)
            },
            cancelText: C.intl.string(C.t["ETE/oC"]),
            children: (0, n.jsx)("div", {
                className: y.iU,
                children: (0, n.jsx)(I.A, {
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
            children: (0, n.jsxs)(n.Fragment, {
                children: [(0, n.jsx)("div", {
                    className: s()(y.iU, y.YK),
                    children: (0, n.jsx)(I.A, {
                        channel: e,
                        message: t,
                        disableInteraction: !0
                    })
                }), (0, n.jsx)(_.A, {
                    children: C.intl.format(C.t.oCVB3Y, {})
                })]
            })
        })
    },
    confirmDelete: function(e, t) {
        let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : void 0;
        (0, d.qfG)(l => (0, n.jsx)(T, {
            channel: e,
            message: t,
            showContextMenuHint: i,
            moderatorReportData: a,
            ...l
        }))
    },
    confirmEdit: function(e, t, i) {
        (0, o.A)({
            title: C.intl.string(C.t.aIz1oV),
            subtitle: C.intl.string(C.t.grBcM8),
            confirmText: C.intl.string(C.t["cY+Oob"]),
            variant: "primary",
            onConfirm: () => {
                p.A.editMessage(e, t, i)
            },
            cancelText: C.intl.string(C.t["ETE/oC"])
        })
    }
}