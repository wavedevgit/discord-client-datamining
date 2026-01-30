/** chunk id: 464035, original params: e,t,n (module,exports,require) **/
n.d(t, {
    default: () => E
}), n(896048);
var l = n(627968),
    a = n(64700),
    r = n(503698),
    s = n.n(r),
    i = n(311907),
    o = n(397927),
    d = n(73153),
    c = n(857182),
    h = n(47167),
    u = n(713654),
    g = n(915089),
    m = n(263063),
    p = n(734057),
    x = n(808728),
    _ = n(71393),
    b = n(576705),
    A = n(994500),
    f = n(309010),
    j = n(287809),
    C = n(954571),
    y = n(661191),
    O = n(652215),
    v = n(985018),
    w = n(183759);

function N(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
class S extends a.PureComponent {
    componentDidMount() {
        C.default.track(O.HAw.OPEN_MODAL, {
            type: "Follow Channel Modal",
            num_guild_permissions: Object.keys(this.props.guilds).length,
            location: "Chat Input Blocker - Follow Channel"
        })
    }
    getDefaultChannelId(e) {
        let t = e.find(e => {
                let {
                    channel: t
                } = e;
                return "general" === (0, h.m1)(t, j.default, A.A)
            }),
            n = null != t ? t : e[0];
        return null != n ? n.channel.id : null
    }
    renderFooter() {
        let {
            selectedGuildId: e,
            selectedChannelId: t,
            submitting: n
        } = this.state, {
            onClose: a
        } = this.props;
        return (0, l.jsxs)(o.ButtonGroup, {
            direction: "horizontal-reverse",
            children: [(0, l.jsx)(o.Button, {
                variant: "primary",
                text: v.intl.string(v.t["3aOv+h"]),
                loading: n,
                onClick: this.handleFollow,
                disabled: null == e || null == t
            }), (0, l.jsx)(o.Button, {
                variant: "secondary",
                text: v.intl.string(v.t["ETE/oC"]),
                onClick: a
            })]
        })
    }
    renderForm() {
        let {
            guilds: e
        } = this.props, {
            channels: t,
            selectedGuildId: n,
            selectedChannelId: a,
            errorMessage: r
        } = this.state, s = y.default.keys(e).map(t => {
            let {
                guild: n
            } = e[t];
            return {
                id: t,
                value: t,
                label: n.name,
                leading: null == n ? null : (0, l.jsx)(m.A, {
                    guild: n,
                    size: m.A.Sizes.MINI
                })
            }
        }), i = t.map(e => {
            let {
                channel: t
            } = e;
            return {
                id: t.id,
                value: t.id,
                label: (0, h.m1)(t, j.default, A.A),
                leading: function(e) {
                    if (null == e) return null;
                    let t = (0, u.gU)(e);
                    return null != t && (0, l.jsx)(t, {
                        size: "xs",
                        color: "currentColor",
                        className: w.Kk
                    })
                }(t)
            }
        }), d = 0 === s.length, c = d ? v.intl.string(v.t["6b6QoF"]) : v.intl.string(v.t.Z0quyN);
        return (0, l.jsxs)(o.BJc, {
            gap: 16,
            children: [(0, l.jsx)(o.ZiE, {
                selectionMode: "single",
                label: v.intl.string(v.t.xFn72s),
                value: n,
                options: s,
                disabled: d,
                onSelectionChange: e => this.handleGuildSelect(e)
            }), (0, l.jsx)(o.ZiE, {
                selectionMode: "single",
                label: v.intl.string(v.t.PDn2fR),
                value: a,
                options: i,
                disabled: 0 === i.length,
                onSelectionChange: e => this.handleChannelSelect(e)
            }), (0, l.jsx)(o.Text, {
                variant: "text-sm/normal",
                color: d || null != r ? "text-feedback-critical" : "text-muted",
                className: w.ML,
                children: null != r ? r : c
            })]
        })
    }
    renderBody() {
        let {
            channel: {
                nsfw: e
            }
        } = this.props;
        return (0, l.jsxs)("div", {
            className: w.rf,
            children: [(0, l.jsx)(o.Heading, {
                variant: "heading-lg/semibold",
                id: this.state.headerId,
                children: v.intl.string(v.t.mvPFbA)
            }), (0, l.jsx)(o.Text, {
                color: "text-muted",
                className: s()(w.O1, {
                    [w.lK]: !e
                }),
                variant: "text-sm/normal",
                children: v.intl.string(v.t.kbpkxJ)
            }), e ? (0, l.jsx)(o.Text, {
                className: s()(w.lK, w.O1),
                color: "text-feedback-critical",
                variant: "text-sm/normal",
                children: v.intl.string(v.t["DrNm/5"])
            }) : null]
        })
    }
    renderHeader() {
        var e;
        let {
            guildToFollow: t,
            channelNameToFollow: n,
            channel: a
        } = this.props, r = null != (e = (0, u.gU)(a)) ? e : o.koX;
        return (0, l.jsxs)(o.rQ0, {
            className: w.wx,
            children: [(0, l.jsx)(m.A, {
                guild: t,
                size: m.A.Sizes.LARGE
            }), (0, l.jsx)("div", {
                className: w.nU,
                children: (0, l.jsxs)("div", {
                    className: w.Ix,
                    children: [(0, l.jsx)(r, {
                        size: "custom",
                        color: "currentColor",
                        width: 20,
                        height: 20,
                        className: w.p
                    }), (0, l.jsx)(o.Text, {
                        variant: "text-md/medium",
                        className: w.HA,
                        children: n
                    })]
                })
            })]
        })
    }
    render() {
        let {
            transitionState: e
        } = this.props;
        return (0, l.jsxs)(o.EOs, {
            transitionState: e,
            "aria-labelledby": this.state.headerId,
            parentComponent: "FollowModal",
            children: [this.renderHeader(), (0, l.jsxs)(o.$mQ, {
                className: w.Qs,
                children: [this.renderBody(), this.renderForm()]
            }), (0, l.jsx)(o.jlY, {
                children: this.renderFooter()
            })]
        })
    }
    constructor(e) {
        super(e), N(this, "handleGuildSelect", e => {
            let {
                guilds: t
            } = this.props, {
                selectedGuildId: n
            } = this.state, l = t[e].channels, a = this.getDefaultChannelId(l);
            n !== e && this.setState({
                selectedGuildId: e,
                selectedChannelId: a,
                channels: l
            })
        }), N(this, "handleChannelSelect", e => {
            this.setState({
                selectedChannelId: e
            })
        }), N(this, "handleFollow", () => {
            let {
                channel: e,
                onClose: t
            } = this.props, {
                selectedChannelId: a,
                selectedGuildId: r
            } = this.state;
            null != a && (this.setState({
                submitting: !0
            }), c.A.createChannelFollower(a, e.id).then(() => {
                d.h.dispatch({
                    type: "CHANNEL_FOLLOWER_CREATED",
                    channelId: a,
                    guildId: r
                }), t(), (0, o.mMO)(async () => {
                    let {
                        default: e
                    } = await n.e("9795").then(n.bind(n, 993390));
                    return t => (0, l.jsx)(e, function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                l = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable
                            }))), l.forEach(function(t) {
                                N(e, t, n[t])
                            })
                        }
                        return e
                    }({}, t))
                })
            }).catch(e => {
                e.body.code === O.t02.TOO_MANY_WEBHOOKS ? this.setState({
                    errorMessage: v.intl.string(v.t["1eZ4aB"]),
                    submitting: !1
                }) : this.setState({
                    errorMessage: v.intl.string(v.t.LgwhuN),
                    submitting: !1
                })
            }))
        });
        const {
            guilds: t,
            lastChannelFollowingDestination: a
        } = e, {
            guildId: r,
            channelId: s
        } = a;
        this.state = {
            selectedGuildId: r,
            selectedChannelId: s,
            channels: null != r && null != t[r] ? t[r].channels : [],
            errorMessage: null,
            submitting: !1,
            headerId: (0, g.Ld)("modal")
        }
    }
}
let E = i.Ay.connectStores([_.A, p.A, x.Ay, b.A, f.A], e => {
    let {
        channel: t
    } = e, n = _.A.getGuild(t.guild_id), l = _.A.getGuildsArray().reduce((e, t) => {
        let n = x.Ay.getChannels(t.id).SELECTABLE.map(e => e.channel).filter(e => e.type === O.rbe.GUILD_TEXT && b.A.can(O.xBc.MANAGE_WEBHOOKS, e)).map(e => {
            let t = p.A.getChannel(e.parent_id);
            return {
                channel: e,
                category: null != t ? t.name : null
            }
        });
        return n.length > 0 && (e[t.id] = {
            guild: t,
            channels: n
        }), e
    }, {}), a = f.A.getLastChannelFollowingDestination();
    return {
        guildToFollow: n,
        channelNameToFollow: t.name,
        guilds: l,
        lastChannelFollowingDestination: null != a ? a : {}
    }
}, {
    forwardRef: !0
})(S)