/** chunk id: 145530 params = (module,exports,require) **/
n.d(e, {
    A: () => x
}), n(938796);
var i = n(627968),
    r = n(64700),
    a = n(503698),
    l = n.n(a),
    s = n(665260),
    o = n(158954),
    c = n(314116),
    _ = n(397927),
    d = n(687709),
    u = n(843472),
    p = n(47167),
    h = n(12351),
    E = n(386467),
    g = n(928658),
    A = n(226698),
    m = n(994500),
    S = n(287809),
    f = n(628691),
    T = n(636922),
    I = n(652215),
    N = n(985018),
    b = n(733045),
    C = n(885842);
class P extends r.PureComponent {
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
            moderatorReportData: r
        } = this.props, {
            moderatorReportChannelId: a,
            isFlagResolved: l
        } = r ?? {};
        t ? (0, g.V2)(i, "message_delete_alert", () => u.A.deleteMessage(n.id, i.id).then(() => {
            null != a && (e && !l && A.A.resolveFlag(a), this.props.onClose?.())
        })) : u.A.deleteMessage(n.id, i.id).then(() => {
            null != a && (e && !l && A.A.resolveFlag(a), this.props.onClose?.())
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
                resolveFlag: r
            } = this.state,
            {
                channel: a,
                message: l,
                showContextMenuHint: c,
                moderatorReportData: d,
                ...u
            } = this.props,
            p = a.type === I.rbe.GUILD_ANNOUNCEMENT && (0, s.Lt)(l.flags, I.pr7.CROSSPOSTED);
        c && (t = (0, i.jsx)(h.A, {
            className: C.Vc,
            children: N.intl.format(N.t.IxY7E6, {})
        })), (0, f.AR)(l) && (e = (0, i.jsx)("div", {
            className: C.Vc,
            children: (0, i.jsx)(_.dOG, {
                label: N.intl.string(N.t.x0jzo9),
                checked: n,
                onChange: this.handleToggleReport
            })
        }));
        let g = p ? N.intl.string(N.t["2kHABX"]) : N.intl.string(N.t.AMvpS4),
            A = (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)("div", {
                    className: C.iU,
                    children: (0, i.jsx)(T.A, {
                        channel: a,
                        message: l,
                        disableInteraction: !0
                    })
                }), e, t]
            });
        if (d?.moderatorReportChannelId != null) {
            let {
                isFlagResolved: t
            } = d;
            return (0, i.jsx)(E.A.Provider, {
                value: a.guild_id,
                children: (0, i.jsx)(o.Modal, {
                    title: N.intl.string(N.t.MWMcg7),
                    subtitle: g,
                    actions: [{
                        variant: "critical-primary",
                        text: N.intl.string(N.t.oyYWHE),
                        onClick: this.handleDelete
                    }],
                    actionBarInput: t ? void 0 : (0, i.jsx)(_.Checkbox, {
                        checked: r,
                        label: N.intl.string(b.default["8yIKem"]),
                        onChange: t => this.handleToggleResolveFlag(t)
                    }),
                    ...u,
                    children: A
                })
            })
        }
        return (0, i.jsx)(E.A.Provider, {
            value: a.guild_id,
            children: (0, i.jsx)(o.Modal, {
                title: p ? N.intl.string(N.t.aIz1oV) : N.intl.string(N.t.MWMcg7),
                subtitle: g,
                actions: [{
                    text: N.intl.string(N.t["ETE/oC"]),
                    onClick: u.onClose,
                    variant: "secondary"
                }, {
                    text: N.intl.string(N.t.oyYWHE),
                    onClick: this.handleDeleteMana,
                    variant: "critical-primary"
                }],
                onClose: u.onClose,
                transitionState: u.transitionState,
                children: A
            })
        })
    }
}
let x = {
    confirmPin: function(t, e) {
        let n, r = (0, p.m1)(t, S.default, m.A);
        n = t.isPrivate() ? N.intl.string(N.t.hMRngA) : N.intl.formatToPlainString(N.t["3IRluI"], {
            channelName: r
        }), (0, c.A)({
            title: N.intl.string(N.t.bKMaZX),
            subtitle: n,
            confirmText: N.intl.string(N.t.rOQ5BX),
            variant: "primary",
            onConfirm: () => {
                d.A.pinMessage(t, e.id)
            },
            cancelText: N.intl.string(N.t["ETE/oC"]),
            children: (0, i.jsx)("div", {
                className: C.iU,
                children: (0, i.jsx)(T.A, {
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
            title: N.intl.string(N.t.CFF2vL),
            subtitle: N.intl.string(N.t.NjEPp7),
            confirmText: N.intl.string(N.t.lAU5jB),
            variant: "critical",
            onConfirm: () => {
                d.A.unpinMessage(t, e.id)
            },
            cancelText: N.intl.string(N.t["ETE/oC"]),
            children: (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)("div", {
                    className: l()(C.iU, C.YK),
                    children: (0, i.jsx)(T.A, {
                        channel: t,
                        message: e,
                        disableInteraction: !0
                    })
                }), (0, i.jsx)(h.A, {
                    children: N.intl.format(N.t.oCVB3Y, {})
                })]
            })
        })
    },
    confirmDelete: function(t, e) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : void 0;
        (0, _.qfG)(a => (0, i.jsx)(P, {
            channel: t,
            message: e,
            showContextMenuHint: n,
            moderatorReportData: r,
            ...a
        }))
    },
    confirmEdit: function(t, e, n) {
        (0, c.A)({
            title: N.intl.string(N.t.aIz1oV),
            subtitle: N.intl.string(N.t.grBcM8),
            confirmText: N.intl.string(N.t["cY+Oob"]),
            variant: "primary",
            onConfirm: () => {
                u.A.editMessage(t, e, n)
            },
            cancelText: N.intl.string(N.t["ETE/oC"])
        })
    }
}