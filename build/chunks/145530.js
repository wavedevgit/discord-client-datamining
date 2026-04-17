/** chunk id: 145530 params = (module,exports,require) **/
n.d(t, {
    A: () => T
}), n(938796);
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(665260),
    o = n(158954),
    c = n(314116),
    d = n(397927),
    h = n(687709),
    g = n(843472),
    u = n(47167),
    p = n(12351),
    _ = n(386467),
    m = n(928658),
    x = n(226698),
    A = n(994500),
    f = n(287809),
    E = n(628691),
    b = n(636922),
    I = n(652215),
    N = n(985018),
    S = n(221314),
    C = n(893727);
class j extends s.PureComponent {
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
            message: i,
            moderatorReportData: s
        } = this.props, {
            moderatorReportChannelId: l,
            isFlagResolved: r
        } = s ?? {};
        e ? (0, m.V2)(i, "message_delete_alert", () => g.A.deleteMessage(n.id, i.id).then(() => {
            null != l && (t && !r && x.A.resolveFlag(l), this.props.onClose?.())
        })) : g.A.deleteMessage(n.id, i.id).then(() => {
            null != l && (t && !r && x.A.resolveFlag(l), this.props.onClose?.())
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
                resolveFlag: s
            } = this.state,
            {
                channel: l,
                message: r,
                showContextMenuHint: c,
                moderatorReportData: h,
                ...g
            } = this.props,
            u = l.type === I.rbe.GUILD_ANNOUNCEMENT && (0, a.Lt)(r.flags, I.pr7.CROSSPOSTED);
        c && (e = (0, i.jsx)(p.A, {
            className: C.Vc,
            children: N.intl.format(N.t.IxY7E6, {})
        })), (0, E.AR)(r) && (t = (0, i.jsx)("div", {
            className: C.Vc,
            children: (0, i.jsx)(d.dOG, {
                label: N.intl.string(N.t.x0jzo9),
                checked: n,
                onChange: this.handleToggleReport
            })
        }));
        let m = u ? N.intl.string(N.t["2kHABX"]) : N.intl.string(N.t.AMvpS4),
            x = (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)("div", {
                    className: C.iU,
                    children: (0, i.jsx)(b.A, {
                        channel: l,
                        message: r,
                        disableInteraction: !0
                    })
                }), t, e]
            });
        if (h?.moderatorReportChannelId != null) {
            let {
                isFlagResolved: e
            } = h;
            return (0, i.jsx)(_.A.Provider, {
                value: l.guild_id,
                children: (0, i.jsx)(o.Modal, {
                    title: N.intl.string(N.t.MWMcg7),
                    subtitle: m,
                    actions: [{
                        variant: "critical-primary",
                        text: N.intl.string(N.t.oyYWHE),
                        onClick: this.handleDelete
                    }],
                    actionBarInput: e ? void 0 : (0, i.jsx)(d.Checkbox, {
                        checked: s,
                        label: N.intl.string(S.default["8yIKem"]),
                        onChange: e => this.handleToggleResolveFlag(e)
                    }),
                    ...g,
                    children: x
                })
            })
        }
        return (0, i.jsx)(_.A.Provider, {
            value: l.guild_id,
            children: (0, i.jsx)(o.Modal, {
                title: u ? N.intl.string(N.t.aIz1oV) : N.intl.string(N.t.MWMcg7),
                subtitle: m,
                actions: [{
                    text: N.intl.string(N.t["ETE/oC"]),
                    onClick: g.onClose,
                    variant: "secondary"
                }, {
                    text: N.intl.string(N.t.oyYWHE),
                    onClick: this.handleDeleteMana,
                    variant: "critical-primary"
                }],
                onClose: g.onClose,
                transitionState: g.transitionState,
                children: x
            })
        })
    }
}
let T = {
    confirmPin: function(e, t) {
        let n, s = (0, u.m1)(e, f.default, A.A);
        n = e.isPrivate() ? N.intl.string(N.t.hMRngA) : N.intl.formatToPlainString(N.t["3IRluI"], {
            channelName: s
        }), (0, c.A)({
            title: N.intl.string(N.t.bKMaZX),
            subtitle: n,
            confirmText: N.intl.string(N.t.rOQ5BX),
            variant: "primary",
            onConfirm: () => {
                h.A.pinMessage(e, t.id)
            },
            cancelText: N.intl.string(N.t["ETE/oC"]),
            children: (0, i.jsx)("div", {
                className: C.iU,
                children: (0, i.jsx)(b.A, {
                    channel: e,
                    message: t,
                    animateAvatar: !1,
                    disableInteraction: !0
                })
            })
        })
    },
    confirmUnpin: function(e, t) {
        (0, c.A)({
            title: N.intl.string(N.t.CFF2vL),
            subtitle: N.intl.string(N.t.NjEPp7),
            confirmText: N.intl.string(N.t.lAU5jB),
            variant: "critical",
            onConfirm: () => {
                h.A.unpinMessage(e, t.id)
            },
            cancelText: N.intl.string(N.t["ETE/oC"]),
            children: (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)("div", {
                    className: r()(C.iU, C.YK),
                    children: (0, i.jsx)(b.A, {
                        channel: e,
                        message: t,
                        disableInteraction: !0
                    })
                }), (0, i.jsx)(p.A, {
                    children: N.intl.format(N.t.oCVB3Y, {})
                })]
            })
        })
    },
    confirmDelete: function(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : void 0;
        (0, d.qfG)(l => (0, i.jsx)(j, {
            channel: e,
            message: t,
            showContextMenuHint: n,
            moderatorReportData: s,
            ...l
        }))
    },
    confirmEdit: function(e, t, n) {
        (0, c.A)({
            title: N.intl.string(N.t.aIz1oV),
            subtitle: N.intl.string(N.t.grBcM8),
            confirmText: N.intl.string(N.t["cY+Oob"]),
            variant: "primary",
            onConfirm: () => {
                g.A.editMessage(e, t, n)
            },
            cancelText: N.intl.string(N.t["ETE/oC"])
        })
    }
}