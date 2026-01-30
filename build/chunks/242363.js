/** chunk id: 242363, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => m
});
var i = n(627968);
n(64700);
var r = n(397927),
    s = n(684013),
    l = n(793574),
    o = n(833551),
    a = n(287809),
    c = n(9302),
    d = n(684748),
    u = n(672396),
    p = n(985018),
    h = n(821700);

function f(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), i.forEach(function(t) {
            var i;
            i = n[t], t in e ? Object.defineProperty(e, t, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = i
        })
    }
    return e
}

function g(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            n.push.apply(n, i)
        }
        return n
    })(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}

function y() {
    return (0, i.jsx)("div", {
        className: h.q,
        children: (0, i.jsx)(r.Button, {
            variant: "active",
            size: "sm",
            text: p.intl.string(p.t.U76Ft2),
            fullWidth: !0
        })
    })
}

function m(e) {
    switch (e.type) {
        case u.Jr.GO_LIVE_VOICE: {
            let {
                game: t,
                voiceGuild: h
            } = e, {
                trackView: m,
                trackClick: _
            } = (0, d.Y)(u.KS.GoLiveNudge, {
                notif_type: u.KS.GoLiveNudge
            });
            return {
                icon: n(334260),
                title: null,
                body: p.intl.formatToPlainString(p.t.z9znpa, {
                    game: t.name,
                    server: h.name
                }),
                hint: () => (0, i.jsx)(y, {}),
                renderFooter: () => (0, i.jsx)(y, {}),
                onNotificationShow: () => {
                    m()
                },
                onNotificationClick: (e, t) => {
                    _("unlock");
                    let d = (0, c.getPID)();
                    s.A.updateNotificationStatus(t);
                    let u = o.default.isOverlayOOPEnabledForPid(d);
                    if (u ? s.A.setInputLocked(!1, d) : s.A.setInstanceLocked(!1), null == a.default.getCurrentUser()) return;
                    let p = u ? {
                        contextKey: r.KX8
                    } : void 0;
                    (0, r.mMO)(async () => {
                        let {
                            default: e
                        } = await Promise.all([n.e("96811"), n.e("13337")]).then(n.bind(n, 648230));
                        return t => (0, i.jsx)(e, g(f({}, t), {
                            sourcePID: d,
                            selectSource: !1,
                            analyticsLocations: [l.A.OVERLAY_NUDGE]
                        }))
                    }, p)
                },
                onDismissClick: () => {
                    _("dismiss")
                }
            }
        }
        case u.Jr.GO_LIVE_NON_VOICE: {
            let {
                game: t
            } = e, {
                trackView: a,
                trackClick: h
            } = (0, d.Y)(u.KS.GoLiveNonVoiceNudge, {
                notif_type: u.KS.GoLiveNonVoiceNudge
            });
            return {
                icon: n(334260),
                title: null,
                body: p.intl.formatToPlainString(p.t["0SVWgF"], {
                    game: t.name
                }),
                hint: () => (0, i.jsx)(y, {}),
                renderFooter: () => (0, i.jsx)(y, {}),
                onNotificationShow: () => {
                    a()
                },
                onNotificationClick: (e, t) => {
                    h("unlock");
                    let a = (0, c.getPID)();
                    s.A.updateNotificationStatus(t);
                    let d = o.default.isOverlayOOPEnabledForPid(a);
                    d ? s.A.setInputLocked(!1, a) : s.A.setInstanceLocked(!1);
                    let u = d ? {
                        contextKey: r.KX8
                    } : void 0;
                    (0, r.mMO)(async () => {
                        let {
                            default: e
                        } = await Promise.all([n.e("96811"), n.e("13337")]).then(n.bind(n, 648230));
                        return t => (0, i.jsx)(e, g(f({}, t), {
                            sourcePID: a,
                            selectSource: !1,
                            analyticsLocations: [l.A.OVERLAY_NUDGE]
                        }))
                    }, u)
                },
                onDismissClick: () => {
                    h("dismiss")
                }
            }
        }
    }
}