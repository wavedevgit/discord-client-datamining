/** chunk id: 409934 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => f
});
var i = n(627968),
    s = n(64700),
    r = n(492462),
    l = n(311907),
    a = n(562465),
    o = n(397927),
    c = n(210714),
    d = n(650048),
    u = n(860689),
    _ = n(396681),
    h = n(854378),
    g = n(652215),
    p = n(985018),
    m = n(818050);
l.Ay.initialize();
class A extends s.PureComponent {
    static defaultProps = {
        transitionTo: e => n.g.location.assign(e)
    };
    state = {
        busy: !0,
        success: !1,
        guild: null
    };
    componentDidMount() {
        let e = (0, _.A)(this.props.location),
            t = (0, r.parse)(this.props.location.search);
        a.Bo.post({
            url: g.Rsh.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS,
            body: {
                token: e,
                pixel_uuid: t.hash,
                guild_id: t.guild_id
            },
            oldFormErrors: !0,
            rejectWithError: !0
        }).then(e => {
            let {
                body: {
                    guild: t
                }
            } = e, n = (0, u.dangerouslyConstructGuildRecordFromUntypedObject)(t);
            this.setState({
                success: !0,
                busy: !1,
                guild: n
            })
        }, () => this.setState({
            success: !1,
            busy: !1
        })), (0, c.d)("disable_server_highlight_notifications")
    }
    renderBusy() {
        return (0, i.jsx)(h.Ay, {
            children: (0, i.jsx)(h.CK, {})
        })
    }
    renderSuccess() {
        let {
            defaultRoute: e,
            transitionTo: t
        } = this.props, {
            guild: n
        } = this.state;
        return (0, i.jsxs)(h.Ay, {
            children: [(0, i.jsx)(h.hE, {
                className: m.QB,
                children: p.intl.string(p.t.Z33eiP)
            }), (0, i.jsx)(h.tK, {
                children: p.intl.format(p.t.NRWtfC, {
                    guildName: n.name
                })
            }), (0, i.jsx)("div", {
                className: m.eT,
                children: (0, i.jsx)(o.Button, {
                    text: p.intl.string(p.t.fIv16B),
                    fullWidth: !0,
                    onClick: () => t(e)
                })
            }), (0, i.jsx)("div", {
                className: m.Ot,
                children: (0, i.jsx)(o.QWc, {
                    text: p.intl.string(p.t["cGmT/J"]),
                    onClick: () => {
                        t(g.BVt.USER_GUILD_NOTIFICATION_SETTINGS(n.id))
                    }
                })
            })]
        })
    }
    renderError() {
        let {
            defaultRoute: e,
            transitionTo: t
        } = this.props;
        return (0, i.jsxs)(h.Ay, {
            children: [(0, i.jsx)(h._V, {
                src: n(37772),
                className: m.SX
            }), (0, i.jsx)(h.hE, {
                className: m.QB,
                children: p.intl.string(p.t.ox9hIS)
            }), (0, i.jsx)(h.tK, {
                children: p.intl.string(p.t["/dcuR5"])
            }), (0, i.jsx)("div", {
                className: m.eT,
                children: (0, i.jsx)(o.Button, {
                    text: p.intl.string(p.t.fIv16B),
                    fullWidth: !0,
                    onClick: () => t(e)
                })
            })]
        })
    }
    render() {
        let {
            busy: e,
            success: t
        } = this.state;
        return e ? this.renderBusy() : t ? this.renderSuccess() : this.renderError()
    }
}
let f = l.Ay.connectStores([d.A], () => ({
    defaultRoute: d.A.defaultRoute
}))(A)