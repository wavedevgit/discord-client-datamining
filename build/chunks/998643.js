/** Chunk was on 86142 **/
/** chunk id: 998643, original params: e,t,n (module,exports,require) **/
"use strict";
n.r(t), n.d(t, {
    default: () => eT
}), n(747238), n(896048);
var r = n(627968),
    i = n(64700),
    s = n(492462),
    l = n(110259),
    a = n(607399),
    o = n(470562),
    c = n(311907),
    u = n(73153),
    d = n(830215),
    h = n(869038),
    p = n(846293),
    g = n(526423),
    m = n(745399),
    f = n(549711),
    _ = n(829691),
    A = n(212640),
    x = n(409934),
    E = n(7936),
    v = n(49463),
    j = n(122906),
    y = n(121623),
    b = n(850381),
    S = n(21599),
    I = n(614986),
    N = n(957622),
    O = n(463347),
    C = n(210714),
    T = n(565287),
    R = n(961350),
    w = n(30793),
    P = n(299091),
    L = n(954571),
    k = n(139675),
    D = n(612181),
    B = n(486020),
    U = n(952072),
    G = n(765624),
    M = n(603647),
    F = n(527567),
    V = n(826515),
    W = n(126912),
    H = n(216894),
    K = n(170159),
    Q = n(187035),
    z = n(565505),
    q = n(111549),
    Y = n(129851),
    X = n(459893),
    J = n(883257),
    Z = n(229),
    $ = n(466133),
    ee = n(163050),
    et = n(420382),
    en = n(340451),
    er = n(652215);
n(436317);
var ei = n(172799);

function es(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function el(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            es(e, t, n[t])
        })
    }
    return e
}

function ea(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
        }
        return n
    })(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}
n(426620), c.Ay.initialize();
let eo = (0, G.A)(Y.A),
    ec = (0, G.A)(X.A),
    eu = (0, G.A)(q.A),
    ed = (0, G.A)(Q.A),
    eh = (0, G.A)(K.A),
    ep = (0, G.A)(I.A),
    eg = (0, G.A)(Z.A),
    em = (0, G.A)(et.A),
    ef = (0, G.A)(F.A),
    e_ = (0, G.A)(en.A),
    eA = (0, G.A)(E.A),
    ex = (0, G.A)(ee.A),
    eE = (0, G.A)(W.A),
    ev = (0, G.A)(x.A),
    ej = (0, G.A)(b.A),
    ey = (0, G.A)(V.A),
    eb = (0, G.A)(H.A),
    eS = (0, G.A)(J.A),
    eI = (0, G.A)($.A),
    eN = (0, G.A)(m.A),
    eO = (0, G.A)(N.A);
class eC extends i.PureComponent {
    static getDerivedStateFromProps(e, t) {
        var n;
        let {
            invite: r,
            location: i
        } = e, {
            backgroundId: l
        } = t, a = null != (n = (0, s.parse)(i.search).redirect_to) ? n : null;
        (null == a || "" === a || a.startsWith(er.BVt.ME) || !(0, o.e)(a) && !(0, A.RZ)(a)) && (a = null);
        let c = null;
        if (null == r) c = (0, D.u8)(a);
        else if ((null == r ? void 0 : r.state) === er.elq.RESOLVED) {
            let {
                guild: e,
                target_application: t
            } = r;
            null != t ? null != l && (c = (0, k.uD)(t.id, l, 1024)) : null != e && "string" == typeof e.splash && (c = B.Ay.getGuildSplashURL({
                id: e.id,
                splash: e.splash
            }))
        }
        return {
            redirectTo: a,
            splash: c
        }
    }
    componentDidMount() {
        let {
            inviteKey: e,
            hasLoadedExperiments: t,
            isAuthenticated: n
        } = this.props;
        null != e && (!t && n && d.A.getExperiments(!0), L.default.track(er.HAw.INVITE_OPENED, {
            invite_code: (0, S.m0)(e),
            load_time: U.A.getTimeSinceNavigationStart()
        }, {
            flush: !0
        })), t && this.resolveInvite(), this.resolveGiftCode(), this.resolveGuildTemplate(), g.A.initialize(), (0, C.D)()
    }
    componentDidUpdate(e) {
        var t, n;
        !e.hasLoadedExperiments && this.props.hasLoadedExperiments && this.resolveInvite(), (null == (t = e.invite) ? void 0 : t.state) !== (null == (n = this.props.invite) ? void 0 : n.state) && this.maybeFetchApplicationSplash()
    }
    componentWillUnmount() {
        g.A.terminate()
    }
    maybeFetchApplicationSplash() {
        let {
            invite: e
        } = this.props;
        if ((null == e ? void 0 : e.state) === er.elq.RESOLVED) {
            let {
                target_application: t
            } = e;
            null != t && (0, k.RG)(t.id, ["embedded_splash"]).then(e => {
                let [t] = e;
                return this.setState({
                    backgroundId: t
                })
            })
        }
    }
    async resolveInvite() {
        let {
            inviteKey: e
        } = this.props;
        if (null == e) return;
        let {
            invite: t
        } = await p.Ay.resolveInvite(e, er.S3d.INVITE);
        null != t && ((0, _.v)(t), null != t.type && ei.uR.has(t.type) && p.Ay.openNativeAppModal(e))
    }
    resolveGuildTemplate() {
        let {
            guildTemplateCode: e
        } = this.props;
        null != e && (L.default.track(er.HAw.GUILD_TEMPLATE_OPENED, {
            guild_template_code: e,
            load_time: U.A.getTimeSinceNavigationStart()
        }, {
            flush: !0
        }), y.A.resolveGuildTemplate(e), y.A.openNativeAppModal(e))
    }
    resolveGiftCode() {
        let {
            giftCode: e
        } = this.props;
        null != e && h.A.resolveGiftCode(e, !0, !0).then(t => {
            null != t && null == t.giftCode.promotion && u.h.wait(() => h.A.openNativeGiftCodeModal(e))
        })
    }
    render() {
        let {
            splash: e,
            redirectTo: t
        } = this.state, {
            inviteKey: n
        } = this.props;
        return (0, r.jsxs)(M.A, {
            splash: e,
            children: [(0, r.jsx)(f.A, {
                path: er.BVt.LOGIN_HANDOFF,
                render: e => (0, r.jsx)(ec, ea(el({}, e), {
                    redirectTo: t
                }))
            }), (0, r.jsx)(f.A, {
                path: er.BVt.LOGIN_ONE_TIME,
                render: e => (0, r.jsx)(eO, el({}, e))
            }), (0, r.jsx)(f.A, {
                impressionName: l.ImpressionNames.USER_LOGIN,
                path: er.BVt.LOGIN,
                render: e => (0, r.jsx)(eo, ea(el({}, e), {
                    redirectTo: t
                }))
            }), (0, r.jsx)(f.A, {
                impressionName: l.ImpressionNames.USER_REGISTRATION,
                path: er.BVt.REGISTER,
                render: e => (0, r.jsx)(eg, ea(el({}, e), {
                    redirectTo: t
                }))
            }), (0, r.jsx)(f.A, {
                path: er.BVt.GIFT_CODE_LOGIN(":giftCode"),
                render: e => (0, r.jsx)(eh, el({
                    login: !0
                }, e))
            }), (0, r.jsx)(f.A, {
                path: er.BVt.GIFT_CODE(":giftCode"),
                render: e => (0, r.jsx)(eh, el({}, e))
            }), (0, r.jsx)(f.A, {
                path: [er.BVt.INVITE_LOGIN(":inviteCode"), er.BVt.INVITE(":inviteCode")],
                render: e => {
                    let {
                        match: {
                            params: {
                                inviteCode: t
                            },
                            path: n
                        },
                        location: i,
                        transitionTo: s
                    } = e, l = (0, S.fB)(t, i.search);
                    return a.Fr || a.v1 ? (0, r.jsx)(ep, {
                        inviteKey: l,
                        transitionTo: s
                    }, l) : (0, r.jsx)(eu, {
                        inviteKey: l,
                        location: i,
                        transitionTo: s,
                        login: n === er.BVt.INVITE_LOGIN(":inviteCode")
                    })
                }
            }), (0, r.jsx)(f.A, {
                path: [er.BVt.GUILD_TEMPLATE_LOGIN(":guildTemplateCode"), er.BVt.GUILD_TEMPLATE(":guildTemplateCode")],
                render: e => {
                    let {
                        match: {
                            params: {
                                guildTemplateCode: t
                            },
                            path: n
                        },
                        location: i,
                        transitionTo: s
                    } = e;
                    return a.Fr || a.v1 ? (0, r.jsx)(z.A, {
                        code: t
                    }, t) : (0, r.jsx)(ed, {
                        code: t,
                        location: i,
                        transitionTo: s,
                        login: n === er.BVt.GUILD_TEMPLATE_LOGIN(":guildTemplateCode")
                    })
                }
            }), (0, r.jsx)(f.A, {
                path: er.BVt.VERIFY,
                render: e => (0, r.jsx)(e_, el({}, e))
            }), (0, r.jsx)(f.A, {
                path: er.BVt.VERIFY_HUB_EMAIL,
                render: e => (0, r.jsx)(ej, el({}, e))
            }), (0, r.jsx)(f.A, {
                path: er.BVt.VERIFY_REQUEST,
                render: e => (0, r.jsx)(eA, el({}, e))
            }), (0, r.jsx)(f.A, {
                path: er.BVt.DISABLE_EMAIL_NOTIFICATIONS,
                render: e => (0, r.jsx)(eE, el({}, e))
            }), (0, r.jsx)(f.A, {
                path: er.BVt.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS,
                render: e => (0, r.jsx)(ev, el({}, e))
            }), (0, r.jsx)(f.A, {
                path: er.BVt.AUTHORIZE_IP,
                render: e => (0, r.jsx)(em, el({}, e))
            }), (0, r.jsx)(f.A, {
                path: er.BVt.REJECT_IP,
                render: e => (0, r.jsx)(ex, el({
                    source: er.BVt.REJECT_IP
                }, e))
            }), (0, r.jsx)(f.A, {
                path: er.BVt.REJECT_MFA,
                render: e => (0, r.jsx)(ex, el({
                    source: er.BVt.REJECT_MFA
                }, e))
            }), (0, r.jsx)(f.A, {
                path: er.BVt.AUTHORIZE_PAYMENT,
                render: e => (0, r.jsx)(ef, el({}, e))
            }), (0, r.jsx)(f.A, {
                path: er.BVt.RESET,
                render: e => (0, r.jsx)(ex, el({
                    source: er.BVt.RESET
                }, e))
            }), (0, r.jsx)(f.A, {
                path: er.BVt.PICK_GUILD_SETTINGS(":section?", ":subsection?"),
                render: e => (0, r.jsx)(eS, el({}, e))
            }), (0, r.jsx)(f.A, {
                path: er.BVt.CHANNELS_GAME_SHOP(O.pv.guildId(), ":pageIndex", ":skuId", ":slug?"),
                render: e => (0, r.jsx)(eb, el({}, e))
            }), (0, r.jsx)(f.A, {
                path: er.BVt.CHANNEL(O.pv.guildId(), O.pv.channelId({
                    optional: !0
                }), ":messageId?"),
                render: e => (0, r.jsx)(ey, el({}, e))
            }), (0, r.jsx)(f.A, {
                path: er.BVt.REPORT,
                render: () => (0, r.jsx)(T.Kz, {})
            }), (0, r.jsx)(f.A, {
                path: er.BVt.REPORT_SECOND_LOOK,
                render: e => (0, r.jsx)(eI, el({}, e))
            }), (0, r.jsx)(f.A, {
                path: er.BVt.ACCOUNT_REVERT(":token"),
                render: e => (0, r.jsx)(eN, el({}, e))
            })]
        })
    }
    constructor(...e) {
        super(...e), es(this, "state", {
            splash: null,
            redirectTo: null,
            backgroundId: null
        })
    }
}
let eT = c.Ay.connectStores([R.default, P.A, w.A, v.A, j.A], e => {
    var t, n, r;
    let {
        match: i,
        location: s
    } = e, l = null == i || null == (t = i.params) ? void 0 : t.inviteCode, a = null != l ? (0, S.fB)(l, s.search) : void 0, o = null == i || null == (n = i.params) ? void 0 : n.giftCode, c = null == i || null == (r = i.params) ? void 0 : r.guildTemplateCode;
    return {
        inviteKey: a,
        isAuthenticated: R.default.isAuthenticated(),
        giftCode: o,
        guildTemplateCode: c,
        gift: null != o ? w.A.get(o) : null,
        invite: null != a ? P.A.getInvite(a) : null,
        guildTemplate: null != c ? j.A.getGuildTemplate(c) : null,
        hasLoadedExperiments: v.A.hasLoadedExperiments
    }
})(eC)