/** chunk id: 145530 params = (module,exports,require) **/
n.d(e, {
    A: () => b
}), n(938796);
var i = n(627968),
    r = n(64700),
    s = n(503698),
    l = n.n(s),
    a = n(665260),
    o = n(158954),
    c = n(314116),
    d = n(397927),
    h = n(687709),
    g = n(843472),
    A = n(47167),
    m = n(12351),
    p = n(386467),
    u = n(928658),
    E = n(226698),
    N = n(994500),
    x = n(287809),
    f = n(628691),
    I = n(636922),
    C = n(652215),
    _ = n(985018),
    v = n(641131),
    S = n(378720);
class T extends r.PureComponent {
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
            moderatorReportChannelId: s,
            isFlagResolved: l
        } = r ?? {};
        t ? (0, u.V2)(i, "message_delete_alert", () => g.A.deleteMessage(n.id, i.id).then(() => {
            null != s && (e && !l && E.A.resolveFlag(s), this.props.onClose?.())
        })) : g.A.deleteMessage(n.id, i.id).then(() => {
            null != s && (e && !l && E.A.resolveFlag(s), this.props.onClose?.())
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
                channel: s,
                message: l,
                showContextMenuHint: c,
                moderatorReportData: h,
                ...g
            } = this.props,
            A = s.type === C.rbe.GUILD_ANNOUNCEMENT && (0, a.Lt)(l.flags, C.pr7.CROSSPOSTED);
        c && (t = (0, i.jsx)(m.A, {
            className: S.Vc,
            children: _.intl.format(_.t.IxY7E6, {})
        })), (0, f.AR)(l) && (e = (0, i.jsx)("div", {
            className: S.Vc,
            children: (0, i.jsx)(d.dOG, {
                label: _.intl.string(_.t.x0jzo9),
                checked: n,
                onChange: this.handleToggleReport
            })
        }));
        let u = A ? _.intl.string(_.t["2kHABX"]) : _.intl.string(_.t.AMvpS4),
            E = (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)("div", {
                    className: S.iU,
                    children: (0, i.jsx)(I.A, {
                        channel: s,
                        message: l,
                        disableInteraction: !0
                    })
                }), e, t]
            });
        if (h?.moderatorReportChannelId != null) {
            let {
                isFlagResolved: t
            } = h;
            return (0, i.jsx)(p.A.Provider, {
                value: s.guild_id,
                children: (0, i.jsx)(o.Modal, {
                    title: _.intl.string(_.t.MWMcg7),
                    subtitle: u,
                    actions: [{
                        variant: "critical-primary",
                        text: _.intl.string(_.t.oyYWHE),
                        onClick: this.handleDelete
                    }],
                    actionBarInput: t ? void 0 : (0, i.jsx)(d.Checkbox, {
                        checked: r,
                        label: _.intl.string(v.default["8yIKem"]),
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
                title: A ? _.intl.string(_.t.aIz1oV) : _.intl.string(_.t.MWMcg7),
                subtitle: u,
                actions: [{
                    text: _.intl.string(_.t["ETE/oC"]),
                    onClick: g.onClose,
                    variant: "secondary"
                }, {
                    text: _.intl.string(_.t.oyYWHE),
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
let b = {
    confirmPin: function(t, e) {
        let n, r = (0, A.m1)(t, x.default, N.A);
        n = t.isPrivate() ? _.intl.string(_.t.hMRngA) : _.intl.formatToPlainString(_.t["3IRluI"], {
            channelName: r
        }), (0, c.A)({
            title: _.intl.string(_.t.bKMaZX),
            subtitle: n,
            confirmText: _.intl.string(_.t.rOQ5BX),
            variant: "primary",
            onConfirm: () => {
                h.A.pinMessage(t, e.id)
            },
            cancelText: _.intl.string(_.t["ETE/oC"]),
            children: (0, i.jsx)("div", {
                className: S.iU,
                children: (0, i.jsx)(I.A, {
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
            title: _.intl.string(_.t.CFF2vL),
            subtitle: _.intl.string(_.t.NjEPp7),
            confirmText: _.intl.string(_.t.lAU5jB),
            variant: "critical",
            onConfirm: () => {
                h.A.unpinMessage(t, e.id)
            },
            cancelText: _.intl.string(_.t["ETE/oC"]),
            children: (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)("div", {
                    className: l()(S.iU, S.YK),
                    children: (0, i.jsx)(I.A, {
                        channel: t,
                        message: e,
                        disableInteraction: !0
                    })
                }), (0, i.jsx)(m.A, {
                    children: _.intl.format(_.t.oCVB3Y, {})
                })]
            })
        })
    },
    confirmDelete: function(t, e) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : void 0;
        (0, d.qfG)(s => (0, i.jsx)(T, {
            channel: t,
            message: e,
            showContextMenuHint: n,
            moderatorReportData: r,
            ...s
        }))
    },
    confirmEdit: function(t, e, n) {
        (0, c.A)({
            title: _.intl.string(_.t.aIz1oV),
            subtitle: _.intl.string(_.t.grBcM8),
            confirmText: _.intl.string(_.t["cY+Oob"]),
            variant: "primary",
            onConfirm: () => {
                g.A.editMessage(t, e, n)
            },
            cancelText: _.intl.string(_.t["ETE/oC"])
        })
    }
}