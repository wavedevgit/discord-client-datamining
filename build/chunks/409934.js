/** chunk id: 409934, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => E
}), n(747238), n(896048);
var r, i = n(627968),
    s = n(64700),
    l = n(492462),
    a = n(311907),
    o = n(562465),
    c = n(397927),
    u = n(210714),
    d = n(650048),
    h = n(860689),
    p = n(396681),
    g = n(854378),
    f = n(652215),
    _ = n(985018),
    m = n(473169);

function A(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
a.Ay.initialize();
class x extends(r = s.PureComponent) {
    componentDidMount() {
        let e = (0, p.A)(this.props.location),
            t = (0, l.parse)(this.props.location.search);
        o.Bo.post({
            url: f.Rsh.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS,
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
            } = e, n = (0, h.dangerouslyConstructGuildRecordFromUntypedObject)(t);
            this.setState({
                success: !0,
                busy: !1,
                guild: n
            })
        }, () => this.setState({
            success: !1,
            busy: !1
        })), (0, u.d)("disable_server_highlight_notifications")
    }
    renderBusy() {
        return (0, i.jsx)(g.Ay, {
            children: (0, i.jsx)(g.CK, {})
        })
    }
    renderSuccess() {
        let {
            defaultRoute: e,
            transitionTo: t
        } = this.props, {
            guild: n
        } = this.state;
        return (0, i.jsxs)(g.Ay, {
            children: [(0, i.jsx)(g.hE, {
                className: m.QB,
                children: _.intl.string(_.t.Z33eiP)
            }), (0, i.jsx)(g.tK, {
                children: _.intl.format(_.t.NRWtfC, {
                    guildName: n.name
                })
            }), (0, i.jsx)("div", {
                className: m.eT,
                children: (0, i.jsx)(c.Button, {
                    text: _.intl.string(_.t.fIv16B),
                    fullWidth: !0,
                    onClick: () => t(e)
                })
            }), (0, i.jsx)("div", {
                className: m.Ot,
                children: (0, i.jsx)(c.QWc, {
                    text: _.intl.string(_.t["cGmT/J"]),
                    onClick: () => {
                        t(f.BVt.USER_GUILD_NOTIFICATION_SETTINGS(n.id))
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
        return (0, i.jsxs)(g.Ay, {
            children: [(0, i.jsx)(g._V, {
                src: n(37772),
                className: m.SX
            }), (0, i.jsx)(g.hE, {
                className: m.QB,
                children: _.intl.string(_.t.ox9hIS)
            }), (0, i.jsx)(g.tK, {
                children: _.intl.string(_.t["/dcuR5"])
            }), (0, i.jsx)("div", {
                className: m.eT,
                children: (0, i.jsx)(c.Button, {
                    text: _.intl.string(_.t.fIv16B),
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
    constructor(...e) {
        super(...e), A(this, "state", {
            busy: !0,
            success: !1,
            guild: null
        })
    }
}
A(x, "defaultProps", {
    transitionTo: e => n.g.location.assign(e)
});
let E = a.Ay.connectStores([d.A], () => ({
    defaultRoute: d.A.defaultRoute
}))(x)