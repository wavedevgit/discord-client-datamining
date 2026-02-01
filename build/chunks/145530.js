/** chunk id: 145530, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => N
}), n(938796), n(896048);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(665260),
    o = n(158954),
    c = n(314116),
    u = n(397927),
    d = n(687709),
    p = n(843472),
    h = n(47167),
    g = n(12351),
    f = n(386467),
    m = n(928658),
    b = n(226698),
    A = n(994500),
    y = n(287809),
    O = n(628691),
    j = n(636922),
    x = n(652215),
    _ = n(985018),
    v = n(641131),
    E = n(378720);

function C(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function S(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            C(e, t, n[t])
        })
    }
    return e
}
class I extends l.PureComponent {
    render() {
        let e, t, {
                report: n,
                resolveFlag: l
            } = this.state,
            i = this.props,
            {
                channel: s,
                message: c,
                showContextMenuHint: d,
                moderatorReportData: p
            } = i,
            h = function(e, t) {
                if (null == e) return {};
                var n, r, l, i = {};
                if ("u" > typeof Reflect && Reflect.ownKeys) {
                    for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
                    return i
                }
                if (i = function(e, t) {
                        if (null == e) return {};
                        var n, r, l = {},
                            i = Object.getOwnPropertyNames(e);
                        for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
                        return l
                    }(e, t), Object.getOwnPropertySymbols)
                    for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
                return i
            }(i, ["channel", "message", "showContextMenuHint", "moderatorReportData"]),
            m = s.type === x.rbe.GUILD_ANNOUNCEMENT && (0, a.Lt)(c.flags, x.pr7.CROSSPOSTED);
        d && (e = (0, r.jsx)(g.A, {
            className: E.Vc,
            children: _.intl.format(_.t.IxY7E6, {})
        })), (0, O.AR)(c) && (t = (0, r.jsx)("div", {
            className: E.Vc,
            children: (0, r.jsx)(u.dOG, {
                label: _.intl.string(_.t.x0jzo9),
                checked: n,
                onChange: this.handleToggleReport
            })
        }));
        let b = m ? _.intl.string(_.t["2kHABX"]) : _.intl.string(_.t.AMvpS4),
            A = (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsx)("div", {
                    className: E.iU,
                    children: (0, r.jsx)(j.A, {
                        channel: s,
                        message: c,
                        disableInteraction: !0
                    })
                }), t, e]
            });
        if ((null == p ? void 0 : p.moderatorReportChannelId) != null) {
            var y, C;
            let {
                isFlagResolved: e
            } = p;
            return (0, r.jsx)(f.A.Provider, {
                value: s.guild_id,
                children: (0, r.jsx)(o.Modal, (y = S({
                    title: _.intl.string(_.t.MWMcg7),
                    subtitle: b,
                    actions: [{
                        variant: "critical-primary",
                        text: _.intl.string(_.t.oyYWHE),
                        onClick: this.handleDelete
                    }],
                    actionBarInput: e ? void 0 : (0, r.jsx)(u.Checkbox, {
                        checked: l,
                        label: _.intl.string(v.default["8yIKem"]),
                        onChange: e => this.handleToggleResolveFlag(e)
                    })
                }, h), C = C = {
                    children: A
                }, Object.getOwnPropertyDescriptors ? Object.defineProperties(y, Object.getOwnPropertyDescriptors(C)) : (function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        n.push.apply(n, r)
                    }
                    return n
                })(Object(C)).forEach(function(e) {
                    Object.defineProperty(y, e, Object.getOwnPropertyDescriptor(C, e))
                }), y))
            })
        }
        return (0, r.jsx)(f.A.Provider, {
            value: s.guild_id,
            children: (0, r.jsx)(o.Modal, {
                title: m ? _.intl.string(_.t.aIz1oV) : _.intl.string(_.t.MWMcg7),
                subtitle: b,
                actions: [{
                    text: _.intl.string(_.t["ETE/oC"]),
                    onClick: h.onClose,
                    variant: "secondary"
                }, {
                    text: _.intl.string(_.t.oyYWHE),
                    onClick: this.handleDeleteMana,
                    variant: "critical-primary"
                }],
                onClose: h.onClose,
                transitionState: h.transitionState,
                children: A
            })
        })
    }
    constructor(...e) {
        super(...e), C(this, "state", {
            report: !1,
            resolveFlag: !1
        }), C(this, "handleDelete", () => {
            let {
                report: e,
                resolveFlag: t
            } = this.state, {
                channel: n,
                message: r,
                moderatorReportData: l
            } = this.props, {
                moderatorReportChannelId: i,
                isFlagResolved: s
            } = null != l ? l : {};
            e ? (0, m.V2)(r, "message_delete_alert", () => p.A.deleteMessage(n.id, r.id).then(() => {
                if (null != i) {
                    var e, n;
                    t && !s && b.A.resolveFlag(i), null == (e = (n = this.props).onClose) || e.call(n)
                }
            })) : p.A.deleteMessage(n.id, r.id).then(() => {
                if (null != i) {
                    var e, n;
                    t && !s && b.A.resolveFlag(i), null == (e = (n = this.props).onClose) || e.call(n)
                }
            })
        }), C(this, "handleDeleteMana", () => {
            var e, t;
            this.handleDelete(), null == (e = (t = this.props).onClose) || e.call(t)
        }), C(this, "handleToggleReport", e => {
            this.setState({
                report: e
            })
        }), C(this, "handleToggleResolveFlag", e => {
            this.setState({
                resolveFlag: e
            })
        })
    }
}
let N = {
    confirmPin: function(e, t) {
        let n, l = (0, h.m1)(e, y.default, A.A);
        n = e.isPrivate() ? _.intl.string(_.t.hMRngA) : _.intl.formatToPlainString(_.t["3IRluI"], {
            channelName: l
        }), (0, c.A)({
            title: _.intl.string(_.t.bKMaZX),
            subtitle: n,
            confirmText: _.intl.string(_.t.rOQ5BX),
            variant: "primary",
            onConfirm: () => {
                d.A.pinMessage(e, t.id)
            },
            cancelText: _.intl.string(_.t["ETE/oC"]),
            children: (0, r.jsx)("div", {
                className: E.iU,
                children: (0, r.jsx)(j.A, {
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
            title: _.intl.string(_.t.CFF2vL),
            subtitle: _.intl.string(_.t.NjEPp7),
            confirmText: _.intl.string(_.t.lAU5jB),
            variant: "critical",
            onConfirm: () => {
                d.A.unpinMessage(e, t.id)
            },
            cancelText: _.intl.string(_.t["ETE/oC"]),
            children: (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsx)("div", {
                    className: s()(E.iU, E.YK),
                    children: (0, r.jsx)(j.A, {
                        channel: e,
                        message: t,
                        disableInteraction: !0
                    })
                }), (0, r.jsx)(g.A, {
                    children: _.intl.format(_.t.oCVB3Y, {})
                })]
            })
        })
    },
    confirmDelete: function(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : void 0;
        (0, u.qfG)(i => (0, r.jsx)(I, S({
            channel: e,
            message: t,
            showContextMenuHint: n,
            moderatorReportData: l
        }, i)))
    },
    confirmEdit: function(e, t, n) {
        (0, c.A)({
            title: _.intl.string(_.t.aIz1oV),
            subtitle: _.intl.string(_.t.grBcM8),
            confirmText: _.intl.string(_.t["cY+Oob"]),
            variant: "primary",
            onConfirm: () => {
                p.A.editMessage(e, t, n)
            },
            cancelText: _.intl.string(_.t["ETE/oC"])
        })
    }
}