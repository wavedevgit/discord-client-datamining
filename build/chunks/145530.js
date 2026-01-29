/** Chunk was on 27687 **/
/** chunk id: 145530, original params: t,e,n (module,exports,require) **/
n.d(e, {
    A: () => P
}), n(938796), n(896048);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(665260),
    o = n(158954),
    c = n(314116),
    d = n(397927),
    g = n(687709),
    h = n(843472),
    u = n(47167),
    p = n(12351),
    f = n(386467),
    m = n(928658),
    E = n(226698),
    b = n(994500),
    A = n(287809),
    O = n(628691),
    v = n(636922),
    y = n(652215),
    N = n(985018),
    j = n(641131),
    x = n(378720);

function I(t, e, n) {
    return e in t ? Object.defineProperty(t, e, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = n, t
}

function S(t) {
    for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
            return Object.getOwnPropertyDescriptor(n, t).enumerable
        }))), r.forEach(function(e) {
            I(t, e, n[e])
        })
    }
    return t
}
class C extends i.PureComponent {
    render() {
        let t, e, {
                report: n,
                resolveFlag: i
            } = this.state,
            l = this.props,
            {
                channel: s,
                message: c,
                showContextMenuHint: g,
                moderatorReportData: h
            } = l,
            u = function(t, e) {
                if (null == t) return {};
                var n, r, i, l = {};
                if ("u" > typeof Reflect && Reflect.ownKeys) {
                    for (i = 0, n = Reflect.ownKeys(t); i < n.length; i++) r = n[i], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (l[r] = t[r]);
                    return l
                }
                if (l = function(t, e) {
                        if (null == t) return {};
                        var n, r, i = {},
                            l = Object.getOwnPropertyNames(t);
                        for (r = 0; r < l.length; r++) n = l[r], !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (i[n] = t[n]);
                        return i
                    }(t, e), Object.getOwnPropertySymbols)
                    for (i = 0, n = Object.getOwnPropertySymbols(t); i < n.length; i++) r = n[i], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (l[r] = t[r]);
                return l
            }(l, ["channel", "message", "showContextMenuHint", "moderatorReportData"]),
            m = s.type === y.rbe.GUILD_ANNOUNCEMENT && (0, a.Lt)(c.flags, y.pr7.CROSSPOSTED);
        g && (t = (0, r.jsx)(p.A, {
            className: x.Vc,
            children: N.intl.format(N.t.IxY7E6, {})
        })), (0, O.AR)(c) && (e = (0, r.jsx)("div", {
            className: x.Vc,
            children: (0, r.jsx)(d.dOG, {
                label: N.intl.string(N.t.x0jzo9),
                checked: n,
                onChange: this.handleToggleReport
            })
        }));
        let E = m ? N.intl.string(N.t["2kHABX"]) : N.intl.string(N.t.AMvpS4),
            b = (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsx)("div", {
                    className: x.iU,
                    children: (0, r.jsx)(v.A, {
                        channel: s,
                        message: c,
                        disableInteraction: !0
                    })
                }), e, t]
            });
        if ((null == h ? void 0 : h.moderatorReportChannelId) != null) {
            var A, I;
            let {
                isFlagResolved: t
            } = h;
            return (0, r.jsx)(f.A.Provider, {
                value: s.guild_id,
                children: (0, r.jsx)(o.Modal, (A = S({
                    title: N.intl.string(N.t.MWMcg7),
                    subtitle: E,
                    actions: [{
                        variant: "critical-primary",
                        text: N.intl.string(N.t.oyYWHE),
                        onClick: this.handleDelete
                    }],
                    actionBarInput: t ? void 0 : (0, r.jsx)(d.Checkbox, {
                        checked: i,
                        label: N.intl.string(j.default["8yIKem"]),
                        onChange: t => this.handleToggleResolveFlag(t)
                    })
                }, u), I = I = {
                    children: b
                }, Object.getOwnPropertyDescriptors ? Object.defineProperties(A, Object.getOwnPropertyDescriptors(I)) : (function(t, e) {
                    var n = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(t);
                        n.push.apply(n, r)
                    }
                    return n
                })(Object(I)).forEach(function(t) {
                    Object.defineProperty(A, t, Object.getOwnPropertyDescriptor(I, t))
                }), A))
            })
        }
        return (0, r.jsx)(f.A.Provider, {
            value: s.guild_id,
            children: (0, r.jsx)(o.Modal, {
                title: m ? N.intl.string(N.t.aIz1oV) : N.intl.string(N.t.MWMcg7),
                subtitle: E,
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
                children: b
            })
        })
    }
    constructor(...t) {
        super(...t), I(this, "state", {
            report: !1,
            resolveFlag: !1
        }), I(this, "handleDelete", () => {
            let {
                report: t,
                resolveFlag: e
            } = this.state, {
                channel: n,
                message: r,
                moderatorReportData: i
            } = this.props, {
                moderatorReportChannelId: l,
                isFlagResolved: s
            } = null != i ? i : {};
            t ? (0, m.V2)(r, "message_delete_alert", () => h.A.deleteMessage(n.id, r.id).then(() => {
                if (null != l) {
                    var t, n;
                    e && !s && E.A.resolveFlag(l), null == (t = (n = this.props).onClose) || t.call(n)
                }
            })) : h.A.deleteMessage(n.id, r.id).then(() => {
                if (null != l) {
                    var t, n;
                    e && !s && E.A.resolveFlag(l), null == (t = (n = this.props).onClose) || t.call(n)
                }
            })
        }), I(this, "handleDeleteMana", () => {
            var t, e;
            this.handleDelete(), null == (t = (e = this.props).onClose) || t.call(e)
        }), I(this, "handleToggleReport", t => {
            this.setState({
                report: t
            })
        }), I(this, "handleToggleResolveFlag", t => {
            this.setState({
                resolveFlag: t
            })
        })
    }
}
let P = {
    confirmPin: function(t, e) {
        let n, i = (0, u.m1)(t, A.default, b.A);
        n = t.isPrivate() ? N.intl.string(N.t.hMRngA) : N.intl.formatToPlainString(N.t["3IRluI"], {
            channelName: i
        }), (0, c.A)({
            title: N.intl.string(N.t.bKMaZX),
            subtitle: n,
            confirmText: N.intl.string(N.t.rOQ5BX),
            variant: "primary",
            onConfirm: () => {
                g.A.pinMessage(t, e.id)
            },
            cancelText: N.intl.string(N.t["ETE/oC"]),
            children: (0, r.jsx)("div", {
                className: x.iU,
                children: (0, r.jsx)(v.A, {
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
                g.A.unpinMessage(t, e.id)
            },
            cancelText: N.intl.string(N.t["ETE/oC"]),
            children: (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsx)("div", {
                    className: s()(x.iU, x.YK),
                    children: (0, r.jsx)(v.A, {
                        channel: t,
                        message: e,
                        disableInteraction: !0
                    })
                }), (0, r.jsx)(p.A, {
                    children: N.intl.format(N.t.oCVB3Y, {})
                })]
            })
        })
    },
    confirmDelete: function(t, e) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : void 0;
        (0, d.qfG)(l => (0, r.jsx)(C, S({
            channel: t,
            message: e,
            showContextMenuHint: n,
            moderatorReportData: i
        }, l)))
    },
    confirmEdit: function(t, e, n) {
        (0, c.A)({
            title: N.intl.string(N.t.aIz1oV),
            subtitle: N.intl.string(N.t.grBcM8),
            confirmText: N.intl.string(N.t["cY+Oob"]),
            variant: "primary",
            onConfirm: () => {
                h.A.editMessage(t, e, n)
            },
            cancelText: N.intl.string(N.t["ETE/oC"])
        })
    }
}