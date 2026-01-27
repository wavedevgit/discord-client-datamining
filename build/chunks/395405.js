/** Chunk was on 39048 **/
/** chunk id: 395405, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => w
}), n(896048);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(735438),
    o = n.n(a),
    c = n(311907),
    d = n(990078),
    u = n(319060),
    g = n(397927),
    m = n(923408),
    p = n(297413),
    f = n(555337),
    h = n(645619),
    b = n(434564),
    x = n(199139),
    j = n(636585),
    _ = n(859241),
    O = n(696451),
    v = n(71393),
    y = n(287809),
    A = n(473145),
    E = n(240248),
    N = n(652215),
    S = n(985018),
    I = n(306769);

function T(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
let C = (0, E.xI)(u.A.GUILD_SETTINGS_PREMIUM_TIER_STATUS_PROGRESS_WITH_SUBSCRIPTIONS_MARGIN_TOP);
class P extends i.Component {
    componentDidMount() {
        this.measure();
        let {
            guildId: e
        } = this.props;
        null != e && (0, m.VU)(e), window.addEventListener("resize", this.measure)
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.measure)
    }
    componentDidUpdate() {
        null != this.state.tierPositions || Object.values(this.tierRefs).some(e => null == e) || this.measure()
    }
    renderProgressBar(e) {
        let {
            tierPositions: t
        } = this.state, {
            guildId: n,
            levelSubscriptionCount: i,
            currentTier: l
        } = this.props;
        if (null == t || null == n) return null;
        let s = {
                numRequired: 0,
                y: 0,
                key: x.A
            },
            a = e.map(e => {
                var n;
                return {
                    numRequired: N.M2T[e.tier],
                    name: (0, A.gb)(e.tier),
                    y: null != (n = t[e.tier]) ? n : 0,
                    key: e.tier
                }
            });
        return (0, r.jsx)(x.h, {
            currentTier: l,
            className: i > 0 ? I.mm : I.qB,
            progress: i,
            tiers: [s, ...a],
            initialAnimationDelay: 500,
            onAnimatedTierMaker: this.handleAnimatedTier
        })
    }
    renderTierNone() {
        return (0, r.jsxs)("div", {
            className: I.lV,
            ref: this.defaultTierRef,
            children: [(0, r.jsx)(g.Text, {
                variant: "text-md/medium",
                color: "text-strong",
                children: S.intl.string(S.t["76OoX8"])
            }), (0, r.jsx)(g.Text, {
                variant: "text-sm/normal",
                color: "text-default",
                className: I.Dw,
                children: S.intl.string(S.t.DaYNQQ)
            })]
        })
    }
    renderSubscribers() {
        let {
            subscribers: e,
            uniqueSubscriberCount: t,
            guildId: n
        } = this.props;
        return (0, r.jsxs)("div", {
            ref: this.defaultTierRef,
            className: I._s,
            children: [(0, r.jsx)(j.A, {
                guildId: null != n ? n : void 0,
                users: e,
                renderUser: this.renderSubscriber,
                renderMoreUsers: this.renderMoreSubscribers,
                max: 5
            }), (0, r.jsx)("div", {
                className: I.iL,
                children: S.intl.format(S.t["0r7snZ"], {
                    count: t
                })
            })]
        })
    }
    render() {
        let {
            guildId: e,
            renderTier: t,
            levelSubscriptionCount: n,
            uniqueSubscriberCount: i,
            tiers: l
        } = this.props;
        return null == n ? (0, r.jsx)(g.y$y, {
            type: g.y$y.Type.SPINNING_CIRCLE
        }) : null == e ? null : (0, r.jsx)("div", {
            children: (0, r.jsxs)("div", {
                className: I.Qs,
                children: [this.renderProgressBar(l), (0, r.jsxs)("div", {
                    className: I.cK,
                    children: [0 === i ? this.renderTierNone() : this.renderSubscribers(), l.map((r, i, l) => t({
                        tier: r,
                        tiers: l,
                        tierIndex: i,
                        onSetRef: this.setTierRef,
                        isAnimatedTo: N.M2T[this.state.animatedTier] >= N.M2T[r.tier],
                        subscriptionCount: n,
                        guildId: e
                    }))]
                })]
            })
        })
    }
    constructor(...e) {
        super(...e), T(this, "tierRefs", {}), T(this, "defaultTierRef", i.createRef()), T(this, "subscribersPopoutTargetRef", i.createRef()), T(this, "state", {
            tierPositions: null,
            animatedTier: N.TVA.NONE
        }), T(this, "measure", () => {
            let {
                uniqueSubscriberCount: e
            } = this.props, t = this.defaultTierRef.current;
            if (null == t) return;
            let {
                top: n
            } = t.getBoundingClientRect(), r = {};
            for (let [t, i] of Object.entries(this.tierRefs)) {
                if (null == i) return;
                let {
                    top: l
                } = i.getBoundingClientRect(), s = e > 0 ? C : 0;
                r[t] = l - n + 32 - s
            }
            this.setState({
                tierPositions: r
            })
        }), T(this, "setTierRef", (e, t) => {
            this.tierRefs[t.tier] = e
        }), T(this, "handleAnimatedTier", e => {
            this.setState({
                animatedTier: e.key
            })
        }), T(this, "renderSubscriber", (e, t, n) => {
            var i;
            return null == e ? null : (0, r.jsx)(d.m, {
                __unsupportedReactNodeAsText: (0, r.jsx)(p.A, {
                    user: e.user,
                    nick: e.nick
                }),
                "aria-label": null != (i = e.nick) ? i : e.user.tag,
                children: (0, r.jsx)(g.euF, {
                    tabIndex: -1,
                    "aria-label": e.user.username,
                    src: null != e ? e.user.getAvatarURL(this.props.guildId, 32) : null,
                    className: s()(I.my, t, null != t ? I.rE : null),
                    size: g._3J.SIZE_32
                })
            }, n)
        }), T(this, "renderSubscribersPopout", () => (0, r.jsx)(g.HOs, {
            className: I.xM,
            children: this.props.subscribers.map(e => (0, r.jsxs)("div", {
                className: I.c4,
                children: [(0, r.jsx)(g.euF, {
                    src: e.user.getAvatarURL(this.props.guildId, 32),
                    "aria-label": e.user.username,
                    size: g._3J.SIZE_32,
                    className: I.my
                }), (0, r.jsx)("div", {
                    className: I.Dt,
                    children: (0, r.jsx)(p.A, {
                        user: e.user,
                        nick: e.nick
                    })
                })]
            }, e.user.id))
        })), T(this, "renderMoreSubscribers", (e, t, n) => (0, r.jsx)(g.YNO, {
            targetElementRef: this.subscribersPopoutTargetRef,
            renderPopout: this.renderSubscribersPopout,
            position: "bottom",
            autoInvert: !1,
            children: t => {
                var n, i;
                return (0, r.jsx)("div", (n = function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))), r.forEach(function(t) {
                            T(e, t, n[t])
                        })
                    }
                    return e
                }({
                    className: I.h1
                }, t), i = i = {
                    ref: this.subscribersPopoutTargetRef,
                    children: e
                }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        n.push.apply(n, r)
                    }
                    return n
                })(Object(i)).forEach(function(e) {
                    Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e))
                }), n))
            }
        }, n))
    }
}
let w = c.Ay.connectStores([v.A, h.A, f.A, _.A, y.default, O.Ay], () => {
    var e, t;
    let n = f.A.getGuildId(),
        r = null != (e = null == (t = v.A.getGuild(n)) ? void 0 : t.premiumTier) ? e : N.TVA.NONE,
        i = (0, b.G)(n),
        l = null != n ? _.A.getAppliedGuildBoostsForGuild(n) : null,
        s = o()(null != l ? l : []).uniqBy(e => e.userId),
        a = s.map(e => ({
            user: y.default.getUser(e.userId),
            nick: O.Ay.getNick(n, e.userId)
        })).filter(e => null != e.user).value();
    return {
        guildId: n,
        currentTier: r,
        levelSubscriptionCount: i,
        subscribers: a,
        uniqueSubscriberCount: s.size()
    }
})(P)