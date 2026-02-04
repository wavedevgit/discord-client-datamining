/** chunk id: 636805, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => A
});
var r = n(627968);
n(64700);
var i = n(554146),
    l = n(397927),
    a = n(73153),
    s = n(272355),
    o = n(826673),
    c = n(367727),
    u = n(498642),
    d = n(71393),
    p = n(576705),
    h = n(853742),
    f = n(652215),
    g = n(49999);
class m extends s.A {
    _initialize() {
        a.h.subscribe("CHANNEL_SELECT", this.handleChannelSelect)
    }
    _terminate() {
        a.h.unsubscribe("CHANNEL_SELECT", this.handleChannelSelect)
    }
    handleChannelSelect(e) {
        var t;
        let a, s, m, A, _, {
            guildId: b
        } = e;
        if (null == b || (s = !!(null == (a = d.A.getGuild(b)) ? void 0 : a.features.has(f.GuildFeatures.COMMUNITY)), m = p.A.can(f.xBc.MANAGE_CHANNELS, a), A = (0, o.k8)(i.M.FORUM_CHANNEL_UPSELL_MODAL), _ = null != (t = u.A.getMemberCount(b)) ? t : 0, !s || !m || A || !(_ >= 200))) return;
        (0, h.zd)(), (0, c.Vh)(i.M.FORUM_CHANNEL_UPSELL_MODAL);
        let E = function() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : g.i.DISMISS;
            (0, o.Dr)(i.M.FORUM_CHANNEL_UPSELL_MODAL, {
                dismissAction: e
            })
        };
        (0, l.mMO)(async () => {
            let {
                default: e
            } = await n.e("7937").then(n.bind(n, 420472));
            return t => {
                var n, i;
                return (0, r.jsx)(e, (n = function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))), r.forEach(function(t) {
                            var r;
                            r = n[t], t in e ? Object.defineProperty(e, t, {
                                value: r,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : e[t] = r
                        })
                    }
                    return e
                }({}, t), i = i = {
                    onClose: e => {
                        E(e), t.onClose()
                    },
                    guildId: b,
                    shouldUpsellCreation: !0
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
        }, {
            onCloseCallback: () => (0, o.Dr)(i.M.FORUM_CHANNEL_UPSELL_MODAL, {
                dismissAction: g.i.DISMISS
            }),
            onCloseRequest: f.FXj
        })
    }
}
let A = new m