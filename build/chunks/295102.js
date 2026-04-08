/** chunk id: 295102 params = (module,exports,require) **/
n.d(t, {
    A: () => v
});
var i = n(627968),
    a = n(442433),
    r = n(383501),
    s = n(1193),
    l = n(589051),
    o = n(547463),
    d = n(620851),
    c = n(646881),
    u = n(97548),
    _ = n(324093),
    h = n(897720),
    m = n(888987),
    p = n(218670),
    g = n(709747),
    f = n(479207),
    A = n(393172),
    x = n(968898),
    I = n(196295);
n(392164);
var E = n(652215),
    b = n(985018);
let v = {
    [E.uss.VIDEO]: {
        renderWidget(e) {
            let {
                widget: t,
                locked: n,
                size: a,
                padding: r,
                borderWidth: s,
                showEmpty: l
            } = e;
            return (0, h.cv)(t) ? (0, i.jsx)(f.A, {
                id: t.id,
                locked: n,
                widget: t,
                height: "auto" === a.height ? 0 : a.height - 2 * r - 2 * s,
                width: "auto" === a.width ? 0 : a.width - 2 * r - 2 * s,
                showEmpty: l,
                padding: r,
                borderWidth: s
            }) : null
        },
        renderTitle: () => (0, i.jsx)(x.Pl, {
            children: b.intl.string(b.t.UPvOia)
        }),
        renderButtons: e => (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(x.CS, {
                onClick: t => {
                    (0, h.cv)(e) && (0, a.L3)(t, async () => {
                        let {
                            default: t
                        } = await n.e("78238").then(n.bind(n, 440173));
                        return n => (0, i.jsx)(t, {
                            ...n,
                            widget: e
                        })
                    })
                }
            }), (0, i.jsx)(x.O0, {
                id: e.id,
                pinned: e.pinned
            })]
        }),
        resizeValidation: f.r
    },
    [E.uss.VOICE_V3]: {
        renderWidget(e) {
            let {
                widget: t,
                anchorLeft: n,
                locked: a,
                showEmpty: r
            } = e;
            return (0, h.ZO)(t) ? (0, i.jsx)(A.Ay, {
                anchorLeft: n,
                id: t.id,
                locked: a,
                pinned: t.pinned,
                widget: E.uss.VOICE_V3,
                maxDisplayedVoiceStates: t.meta.voiceStatesMaxShown ?? 8,
                isPreviewingInGame: !1,
                showEmpty: r
            }) : null
        },
        renderTitle: () => (0, i.jsx)(x.Pl, {
            children: b.intl.string(b.t.nFv3Gb)
        }),
        renderButtons: e => (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(x.CS, {
                onClick: e => {
                    (0, a.L3)(e, async () => {
                        let {
                            default: e
                        } = await n.e("34901").then(n.bind(n, 51444));
                        return t => (0, i.jsx)(e, {
                            ...t
                        })
                    })
                }
            }), (0, i.jsx)(x.O0, {
                id: e.id,
                pinned: e.pinned
            })]
        })
    },
    [E.uss.CLICK_ZONE_DEBUG]: {
        renderWidget(e) {
            let {
                widget: t,
                locked: n
            } = e;
            return (0, i.jsx)(d.A, {
                id: t.id,
                locked: n,
                pinned: t.pinned
            })
        },
        renderTitle: () => (0, i.jsx)(x.Pl, {
            children: "Click Zone Tester"
        }),
        renderButtons: e => (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(x.CS, {
                onClick: e => {
                    (0, a.L3)(e, async () => {
                        let {
                            default: e
                        } = await n.e("49170").then(n.bind(n, 508457));
                        return t => (0, i.jsx)(e, {
                            ...t
                        })
                    })
                }
            }), (0, i.jsx)(x.O0, {
                id: e.id,
                pinned: e.pinned
            })]
        })
    },
    [E.uss.PERFORMANCE_DEBUG]: {
        renderWidget(e) {
            let {
                widget: t,
                locked: n,
                anchorLeft: a
            } = e;
            return (0, i.jsx)(m.A, {
                id: t.id,
                anchorLeft: a,
                locked: n,
                pinned: t.pinned
            })
        },
        renderTitle: () => (0, i.jsx)(x.Pl, {
            children: "Overlay Performance"
        }),
        renderButtons: e => (0, i.jsx)(x.O0, {
            id: e.id,
            pinned: e.pinned
        })
    },
    [E.uss.GO_LIVE]: {
        renderWidget(e) {
            let {
                widget: t,
                locked: n,
                size: a,
                dragStart: r,
                anchorTop: s,
                anchorLeft: l,
                showEmpty: o,
                padding: d,
                borderWidth: c
            } = e;
            return (0, h.dO)(t) ? (0, i.jsx)(u.A, {
                id: t.id,
                locked: n,
                pinned: t.pinned,
                opacity: t.opacity,
                size: a,
                anchorTop: s,
                anchorLeft: l,
                widget: t,
                isPreviewingInGame: !1,
                dragStart: r,
                horizontal: t.meta.horizontal ?? !1,
                padding: d,
                borderWidth: c,
                showEmpty: o
            }) : null
        },
        renderTitle: e => (0, i.jsx)(x.we, {
            widgetId: e.id,
            children: b.intl.string(b.t["386XRo"])
        }),
        renderButtons: e => (0, h.dO)(e) ? (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(x.CS, {
                onClick: t => {
                    (0, h.dO)(e) && (0, a.L3)(t, async () => {
                        let {
                            default: t
                        } = await n.e("21289").then(n.bind(n, 543824));
                        return n => (0, i.jsx)(t, {
                            ...n,
                            widget: e
                        })
                    })
                }
            }), (0, i.jsx)(x.GQ, {
                widgetId: e.id,
                showAllStreams: e.meta.showAllStreams ?? !0
            }), (0, i.jsx)(x.O0, {
                id: e.id,
                pinned: e.pinned
            })]
        }) : null,
        resizeValidation: _.OL
    },
    [E.uss.QUICK_ACTIONS]: {
        renderWidget(e) {
            let {
                locked: t
            } = e;
            return (0, i.jsx)(p.A, {
                locked: t
            })
        }
    },
    [E.uss.NOTIFICATIONS]: {
        renderWidget(e) {
            let {
                locked: t,
                showEmpty: n,
                widget: a
            } = e;
            return (0, i.jsx)(I.A, {
                pinned: a.pinned,
                locked: t,
                showEmpty: n
            })
        },
        renderTitle: () => (0, i.jsx)(x.Pl, {
            children: b.intl.string(b.t.gnKWdS)
        }),
        renderButtons: e => (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(x.CS, {
                onClick: e => {
                    (0, a.L3)(e, async () => {
                        let {
                            default: e
                        } = await n.e("51607").then(n.bind(n, 320490));
                        return t => (0, i.jsx)(e, {
                            ...t
                        })
                    })
                }
            }), (0, i.jsx)(x.O0, {
                id: e.id,
                pinned: e.pinned
            })]
        })
    },
    [E.uss.ACTIVITY]: {
        renderWidget(e) {
            let {
                locked: t
            } = e;
            return (0, i.jsx)(o.Ay, {
                locked: t
            })
        },
        renderTitle: () => (0, i.jsx)(x.Pl, {
            children: b.intl.string(b.t["6gwSFY"])
        }),
        renderButtons: () => null,
        predicate: () => !(0, l.NI)("WidgetRenderConfig").hasFriendList
    },
    [E.uss.FRIENDS]: {
        renderWidget(e) {
            let {
                locked: t
            } = e;
            return (0, i.jsx)(c.A, {
                locked: t
            })
        },
        renderTitle: () => (0, i.jsx)(x.Pl, {
            children: b.intl.string(b.t.TdEu5X)
        }),
        renderButtons: () => null,
        predicate: () => (0, l.NI)("WidgetRenderConfig").hasFriendList
    },
    [E.uss.TEXT_CHAT_V3]: {
        renderWidget(e) {
            let {
                locked: t,
                dragStart: n,
                dragging: a
            } = e;
            return (0, i.jsx)(g.A, {
                locked: t,
                dragStart: n,
                dragging: a
            })
        },
        renderTitle: () => (0, i.jsx)(x.Pl, {
            children: b.intl.string(b.t["/VQax8"])
        }),
        renderButtons: () => null,
        predicate: () => (0, l.NI)("WidgetRenderConfig").hasChat,
        containerRenderGate: {
            stores: [r.A, s.A],
            shouldRender(e) {
                let {
                    locked: t
                } = e;
                if (t) return !1;
                let n = r.A.getChannelId() ?? null,
                    [i] = s.A.getSessionEntries(),
                    a = i.length > 0;
                return null != n || a
            }
        }
    }
}