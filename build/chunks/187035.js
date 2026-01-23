/** Chunk was on 86142 **/
/** chunk id: 187035, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => B
}), n(896048);
var r = n(627968),
    i = n(64700),
    s = n(503698),
    l = n.n(s),
    a = n(284009),
    o = n.n(a),
    c = n(311907),
    u = n(397927),
    d = n(854378),
    h = n(10088),
    p = n(122906),
    g = n(225858),
    m = n(121623),
    f = n(895600),
    _ = n(768397),
    A = n(942614),
    x = n(210714),
    E = n(894778),
    v = n(961350),
    j = n(650048),
    y = n(877062),
    b = n(129851),
    S = n(538796),
    I = n(229),
    N = n(652215),
    O = n(401755),
    C = n(771016),
    T = n(315290),
    R = n(396574),
    w = n(985018),
    P = n(256651),
    L = n(473169);

function k(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
c.Ay.initialize();
class D extends i.PureComponent {
    componentDidMount() {
        (0, x.d)("guildTemplate"), R.VP || y.A.launch("discord://" + N.BVt.GUILD_TEMPLATE(this.props.code), () => void 0)
    }
    componentDidUpdate(e) {
        this.props.code !== e.code && m.A.resolveGuildTemplate(this.props.code)
    }
    renderButton(e, t) {
        return R.VP ? (0, r.jsx)("div", {
            className: L.eT,
            children: (0, r.jsx)(u.Button, {
                text: e,
                fullWidth: !0,
                onClick: t
            })
        }) : (0, r.jsx)(d.KE, {
            className: L.eT
        })
    }
    renderSpinner(e) {
        return (0, r.jsxs)(d.Ay, {
            children: [(0, r.jsx)(d.hE, {
                children: e
            }), (0, r.jsx)(d.CK, {})]
        })
    }
    renderInvalidGuildTemplate() {
        return (0, r.jsxs)(d.Ay, {
            children: [(0, r.jsx)(d._V, {
                src: n(428721),
                className: L.QB
            }), (0, r.jsx)(d.hE, {
                className: l()(L.Ot, L.QB),
                children: w.intl.string(w.t.C7ZRNw)
            }), (0, r.jsx)(d.tK, {
                children: w.intl.string(w.t.A6MwXE)
            }), this.renderButton(w.intl.string(w.t.fIv16B), this.handleContinue)]
        })
    }
    renderAppOpened() {
        return (0, r.jsxs)(d.Ay, {
            children: [(0, r.jsx)(d.hE, {
                className: L.QB,
                children: w.intl.string(w.t.csrAMJ)
            }), (0, r.jsx)(d.tK, {
                children: w.intl.string(w.t["m1+IBn"])
            }), this.renderButton(w.intl.string(w.t.fIv16B), this.handleContinue)]
        })
    }
    renderAuthenticatedOrDownload() {
        let {
            guildTemplate: e
        } = this.props;
        return (o()(null != e, "guild template must not be null"), e.state === O.QB.RESOLVING) ? (0, r.jsx)(d.Ay, {
            className: P.sL,
            children: (0, r.jsx)(_.A, {
                guildTemplate: e
            })
        }) : (0, r.jsx)(U, {
            guildTemplate: e
        })
    }
    renderContinue() {
        return (0, r.jsxs)(d.Ay, {
            children: [(0, r.jsx)(d.hE, {
                children: w.intl.string(w.t.fOc4gn)
            }), this.renderButton(w.intl.string(w.t.fIv16B), this.handleContinue)]
        })
    }
    render() {
        let {
            guildTemplate: e,
            nativeAppState: t,
            authenticated: n,
            transitionTo: i,
            location: s
        } = this.props;
        if (null == e) return this.renderSpinner(w.intl.string(w.t.ZTNur7));
        if (t === N.fAW.OPEN) return this.renderAppOpened();
        if (t === N.fAW.OPENING) return this.renderSpinner(w.intl.string(w.t["Z+hCVU"]));
        switch (e.state) {
            case O.QB.RESOLVING:
                return this.renderSpinner(w.intl.string(w.t["Z+hCVU"]));
            case O.QB.RESOLVED:
                if (n || !R.VP) return this.renderAuthenticatedOrDownload();
                if (this.props.login) return (0, r.jsx)(b.A, {
                    guildTemplate: e,
                    transitionTo: i,
                    location: s
                });
                return (0, r.jsx)(I.A, {
                    guildTemplate: e,
                    transitionTo: i,
                    location: s,
                    onRegister: () => {
                        (0, A.C)(C.zY.ORGANIC_REGISTERED_GUILD_TEMPLATE), E.A.flowStart(T.do.ORGANIC_GUILD_TEMPLATES, T.ju.NUF_STARTED)
                    }
                });
            case O.QB.EXPIRED:
                return this.renderInvalidGuildTemplate();
            default:
                return null
        }
    }
    constructor(...e) {
        super(...e), k(this, "handleContinue", () => {
            let {
                defaultRoute: e,
                transitionTo: t
            } = this.props;
            t(e)
        })
    }
}

function B(e) {
    let t = {
        guildTemplate: (0, c.bG)([p.A], () => p.A.getGuildTemplate(e.code)),
        nativeAppState: (0, c.bG)([h.A], () => h.A.getState(e.code)),
        authenticated: (0, c.bG)([v.default], () => v.default.isAuthenticated()),
        defaultRoute: (0, c.bG)([j.A], () => j.A.defaultRoute)
    };
    return (0, r.jsx)(D, function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                k(e, t, n[t])
            })
        }
        return e
    }({}, e, t))
}

function U(e) {
    let {
        guildTemplate: t
    } = e, {
        form: n,
        handleSubmit: i
    } = (0, g.A)(t, !1);
    E.A.flowStep(T.do.ORGANIC_GUILD_TEMPLATES, T.jC.GUILD_CREATE);
    let s = (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(d.hE, {
            className: P.wx,
            children: w.intl.string(w.t.UNFvtM)
        }), n, (0, r.jsx)("div", {
            className: P.Tf,
            children: (0, r.jsx)(u.Button, {
                text: w.intl.string(w.t.xr59t7),
                fullWidth: !0,
                onClick: i
            })
        })]
    });
    return (0, r.jsx)(S.A, {
        className: P.sL,
        children: () => [(0, r.jsx)(f.A, {
            guildTemplate: t
        }, "template"), (0, r.jsx)("div", {
            className: P.KJ,
            children: s
        }, "contents")]
    })
}