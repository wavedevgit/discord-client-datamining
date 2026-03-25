/** chunk id: 242363 params = (module,exports,require) **/
"use strict";
i.d(t, {
    A: () => f
});
var n = i(627968);
i(64700);
var s = i(397927),
    a = i(684013),
    l = i(793574),
    r = i(833551),
    o = i(287809),
    d = i(9302),
    c = i(684748),
    u = i(672396),
    h = i(985018),
    _ = i(821700);

function p() {
    return (0, n.jsx)("div", {
        className: _.q,
        children: (0, n.jsx)(s.Button, {
            variant: "active",
            size: "sm",
            text: h.intl.string(h.t.U76Ft2),
            fullWidth: !0
        })
    })
}

function f(e) {
    switch (e.type) {
        case u.Jr.GO_LIVE_VOICE: {
            let {
                game: t,
                voiceGuild: _
            } = e, {
                trackView: f,
                trackClick: m
            } = (0, c.Y)(u.KS.GoLiveNudge, {
                notif_type: u.KS.GoLiveNudge
            });
            return {
                icon: i(334260),
                title: null,
                body: h.intl.formatToPlainString(h.t.z9znpa, {
                    game: t.name,
                    server: _.name
                }),
                hint: () => (0, n.jsx)(p, {}),
                renderFooter: () => (0, n.jsx)(p, {}),
                onNotificationShow: () => {
                    f()
                },
                onNotificationClick: (e, t) => {
                    m("unlock");
                    let c = (0, d.getPID)();
                    a.A.updateNotificationStatus(t);
                    let u = r.default.isOverlayOOPEnabledForPid(c);
                    if (u ? a.A.setInputLocked(!1, c) : a.A.setInstanceLocked(!1), null == o.default.getCurrentUser()) return;
                    let h = u ? {
                        contextKey: s.KX8
                    } : void 0;
                    (0, s.mMO)(async () => {
                        let {
                            default: e
                        } = await Promise.all([i.e("96811"), i.e("12140")]).then(i.bind(i, 648230));
                        return t => (0, n.jsx)(e, {
                            ...t,
                            sourcePID: c,
                            selectSource: !1,
                            analyticsLocations: [l.A.OVERLAY_NUDGE]
                        })
                    }, h)
                },
                onDismissClick: () => {
                    m("dismiss")
                }
            }
        }
        case u.Jr.GO_LIVE_NON_VOICE: {
            let {
                game: t
            } = e, {
                trackView: o,
                trackClick: _
            } = (0, c.Y)(u.KS.GoLiveNonVoiceNudge, {
                notif_type: u.KS.GoLiveNonVoiceNudge
            });
            return {
                icon: i(334260),
                title: null,
                body: h.intl.formatToPlainString(h.t["0SVWgF"], {
                    game: t.name
                }),
                hint: () => (0, n.jsx)(p, {}),
                renderFooter: () => (0, n.jsx)(p, {}),
                onNotificationShow: () => {
                    o()
                },
                onNotificationClick: (e, t) => {
                    _("unlock");
                    let o = (0, d.getPID)();
                    a.A.updateNotificationStatus(t);
                    let c = r.default.isOverlayOOPEnabledForPid(o);
                    c ? a.A.setInputLocked(!1, o) : a.A.setInstanceLocked(!1);
                    let u = c ? {
                        contextKey: s.KX8
                    } : void 0;
                    (0, s.mMO)(async () => {
                        let {
                            default: e
                        } = await Promise.all([i.e("96811"), i.e("12140")]).then(i.bind(i, 648230));
                        return t => (0, n.jsx)(e, {
                            ...t,
                            sourcePID: o,
                            selectSource: !1,
                            analyticsLocations: [l.A.OVERLAY_NUDGE]
                        })
                    }, u)
                },
                onDismissClick: () => {
                    _("dismiss")
                }
            }
        }
    }
}