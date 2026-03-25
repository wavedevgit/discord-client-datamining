/** chunk id: 145530 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => v
}), n(938796);
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(665260),
    o = n(158954),
    c = n(314116),
    d = n(397927),
    u = n(687709),
    h = n(843472),
    A = n(47167),
    m = n(12351),
    p = n(386467),
    _ = n(928658),
    g = n(226698),
    f = n(994500),
    x = n(287809),
    C = n(628691),
    E = n(636922),
    I = n(652215),
    N = n(985018),
    b = n(641131),
    S = n(378720);
class T extends s.PureComponent {
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
        e ? (0, _.V2)(i, "message_delete_alert", () => h.A.deleteMessage(n.id, i.id).then(() => {
            null != l && (t && !r && g.A.resolveFlag(l), this.props.onClose?.())
        })) : h.A.deleteMessage(n.id, i.id).then(() => {
            null != l && (t && !r && g.A.resolveFlag(l), this.props.onClose?.())
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
                moderatorReportData: u,
                ...h
            } = this.props,
            A = l.type === I.rbe.GUILD_ANNOUNCEMENT && (0, a.Lt)(r.flags, I.pr7.CROSSPOSTED);
        c && (e = (0, i.jsx)(m.A, {
            className: S.Vc,
            children: N.intl.format(N.t.IxY7E6, {})
        })), (0, C.AR)(r) && (t = (0, i.jsx)("div", {
            className: S.Vc,
            children: (0, i.jsx)(d.dOG, {
                label: N.intl.string(N.t.x0jzo9),
                checked: n,
                onChange: this.handleToggleReport
            })
        }));
        let _ = A ? N.intl.string(N.t["2kHABX"]) : N.intl.string(N.t.AMvpS4),
            g = (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)("div", {
                    className: S.iU,
                    children: (0, i.jsx)(E.A, {
                        channel: l,
                        message: r,
                        disableInteraction: !0
                    })
                }), t, e]
            });
        if (u?.moderatorReportChannelId != null) {
            let {
                isFlagResolved: e
            } = u;
            return (0, i.jsx)(p.A.Provider, {
                value: l.guild_id,
                children: (0, i.jsx)(o.Modal, {
                    title: N.intl.string(N.t.MWMcg7),
                    subtitle: _,
                    actions: [{
                        variant: "critical-primary",
                        text: N.intl.string(N.t.oyYWHE),
                        onClick: this.handleDelete
                    }],
                    actionBarInput: e ? void 0 : (0, i.jsx)(d.Checkbox, {
                        checked: s,
                        label: N.intl.string(b.default["8yIKem"]),
                        onChange: e => this.handleToggleResolveFlag(e)
                    }),
                    ...h,
                    children: g
                })
            })
        }
        return (0, i.jsx)(p.A.Provider, {
            value: l.guild_id,
            children: (0, i.jsx)(o.Modal, {
                title: A ? N.intl.string(N.t.aIz1oV) : N.intl.string(N.t.MWMcg7),
                subtitle: _,
                actions: [{
                    text: N.intl.string(N.t["ETE/oC"]),
                    onClick: h.onClose,
                    variant: "secondary"
                }, {
                    text: N.intl.string(N.t.oyYWHE),
                    onClick: this.handleDeleteMana,
                    variant: "critical-primary"
                }],
                onClose: h.onClose,
                transitionState: h.transitionState,
                children: g
            })
        })
    }
}
let v = {
    confirmPin: function(e, t) {
        let n, s = (0, A.m1)(e, x.default, f.A);
        n = e.isPrivate() ? N.intl.string(N.t.hMRngA) : N.intl.formatToPlainString(N.t["3IRluI"], {
            channelName: s
        }), (0, c.A)({
            title: N.intl.string(N.t.bKMaZX),
            subtitle: n,
            confirmText: N.intl.string(N.t.rOQ5BX),
            variant: "primary",
            onConfirm: () => {
                u.A.pinMessage(e, t.id)
            },
            cancelText: N.intl.string(N.t["ETE/oC"]),
            children: (0, i.jsx)("div", {
                className: S.iU,
                children: (0, i.jsx)(E.A, {
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
                u.A.unpinMessage(e, t.id)
            },
            cancelText: N.intl.string(N.t["ETE/oC"]),
            children: (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)("div", {
                    className: r()(S.iU, S.YK),
                    children: (0, i.jsx)(E.A, {
                        channel: e,
                        message: t,
                        disableInteraction: !0
                    })
                }), (0, i.jsx)(m.A, {
                    children: N.intl.format(N.t.oCVB3Y, {})
                })]
            })
        })
    },
    confirmDelete: function(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : void 0;
        (0, d.qfG)(l => (0, i.jsx)(T, {
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
                h.A.editMessage(e, t, n)
            },
            cancelText: N.intl.string(N.t["ETE/oC"])
        })
    }
}