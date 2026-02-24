/** chunk id: 295102, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => I
});
var i = n(627968),
    l = n(442433),
    r = n(383501),
    s = n(589051),
    a = n(547463),
    o = n(620851),
    u = n(646881),
    d = n(97548),
    c = n(324093),
    h = n(897720),
    m = n(888987),
    g = n(218670),
    p = n(932128),
    A = n(479207),
    f = n(393172),
    x = n(968898),
    E = n(196295),
    S = n(187667);
n(392164);
var v = n(652215),
    C = n(985018);
let I = {
    [v.uss.VIDEO]: {
        renderWidget(e) {
            let {
                widget: t,
                locked: n,
                size: l,
                padding: r,
                borderWidth: s,
                showEmpty: a
            } = e;
            return (0, h.cv)(t) ? (0, i.jsx)(A.A, {
                id: t.id,
                locked: n,
                widget: t,
                height: "auto" === l.height ? 0 : l.height - 2 * r - 2 * s,
                width: "auto" === l.width ? 0 : l.width - 2 * r - 2 * s,
                showEmpty: a,
                padding: r,
                borderWidth: s
            }) : null
        },
        renderTitle: () => (0, i.jsx)(x.Pl, {
            children: C.intl.string(C.t.UPvOia)
        }),
        renderButtons: e => (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(x.CS, {
                onClick: t => {
                    (0, h.cv)(e) && (0, l.L3)(t, async () => {
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
        resizeValidation: A.r
    },
    [v.uss.VOICE_V3]: {
        renderWidget(e) {
            let {
                widget: t,
                anchorLeft: n,
                locked: l,
                showEmpty: r
            } = e;
            return (0, h.ZO)(t) ? (0, i.jsx)(f.Ay, {
                anchorLeft: n,
                id: t.id,
                locked: l,
                pinned: t.pinned,
                widget: v.uss.VOICE_V3,
                maxDisplayedVoiceStates: t.meta.voiceStatesMaxShown ?? 8,
                isPreviewingInGame: !1,
                showEmpty: r
            }) : null
        },
        renderTitle: () => (0, i.jsx)(x.Pl, {
            children: C.intl.string(C.t.nFv3Gb)
        }),
        renderButtons: e => (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(x.CS, {
                onClick: e => {
                    (0, l.L3)(e, async () => {
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
    [v.uss.CLICK_ZONE_DEBUG]: {
        renderWidget(e) {
            let {
                widget: t,
                locked: n
            } = e;
            return (0, i.jsx)(o.A, {
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
                    (0, l.L3)(e, async () => {
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
    [v.uss.PERFORMANCE_DEBUG]: {
        renderWidget(e) {
            let {
                widget: t,
                locked: n,
                anchorLeft: l
            } = e;
            return (0, i.jsx)(m.A, {
                id: t.id,
                anchorLeft: l,
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
    [v.uss.GO_LIVE]: {
        renderWidget(e) {
            let {
                widget: t,
                locked: n,
                size: l,
                dragStart: r,
                anchorTop: s,
                anchorLeft: a,
                showEmpty: o,
                padding: u,
                borderWidth: c
            } = e;
            return (0, h.dO)(t) ? (0, i.jsx)(d.A, {
                id: t.id,
                locked: n,
                pinned: t.pinned,
                opacity: t.opacity,
                size: l,
                anchorTop: s,
                anchorLeft: a,
                widget: t,
                isPreviewingInGame: !1,
                dragStart: r,
                horizontal: t.meta.horizontal ?? !1,
                padding: u,
                borderWidth: c,
                showEmpty: o
            }) : null
        },
        renderTitle: e => (0, i.jsx)(x.we, {
            widgetId: e.id,
            children: C.intl.string(C.t["386XRo"])
        }),
        renderButtons: e => (0, h.dO)(e) ? (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(x.CS, {
                onClick: t => {
                    (0, h.dO)(e) && (0, l.L3)(t, async () => {
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
        resizeValidation: c.OL
    },
    [v.uss.QUICK_ACTIONS]: {
        renderWidget(e) {
            let {
                locked: t
            } = e;
            return (0, i.jsx)(g.A, {
                locked: t
            })
        }
    },
    [v.uss.NOTIFICATIONS]: {
        renderWidget(e) {
            let {
                locked: t,
                showEmpty: n,
                widget: l
            } = e;
            return (0, i.jsx)(E.A, {
                pinned: l.pinned,
                locked: t,
                showEmpty: n
            })
        },
        renderTitle: () => (0, i.jsx)(x.Pl, {
            children: C.intl.string(C.t.gnKWdS)
        }),
        renderButtons: e => (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(x.CS, {
                onClick: e => {
                    (0, l.L3)(e, async () => {
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
    [v.uss.ACTIVITY]: {
        renderWidget(e) {
            let {
                locked: t
            } = e;
            return (0, i.jsx)(a.Ay, {
                locked: t
            })
        },
        renderTitle: () => (0, i.jsx)(x.Pl, {
            children: C.intl.string(C.t["6gwSFY"])
        }),
        renderButtons: () => null,
        predicate: () => !(0, s.NI)("WidgetRenderConfig").hasFriendList
    },
    [v.uss.FRIENDS]: {
        renderWidget(e) {
            let {
                locked: t
            } = e;
            return (0, i.jsx)(u.A, {
                locked: t
            })
        },
        renderTitle: () => (0, i.jsx)(x.Pl, {
            children: C.intl.string(C.t.TdEu5X)
        }),
        renderButtons: () => null,
        predicate: () => (0, s.NI)("WidgetRenderConfig").hasFriendList
    },
    [v.uss.TEXT_CHAT_V3]: {
        renderWidget(e) {
            let {
                locked: t,
                dragStart: n,
                dragging: l
            } = e;
            return (0, i.jsx)(p.A, {
                locked: t,
                dragStart: n,
                dragging: l
            })
        },
        renderTitle: () => (0, i.jsx)(x.Pl, {
            children: C.intl.string(C.t["/VQax8"])
        }),
        renderButtons: () => null,
        predicate: () => (0, s.NI)("WidgetRenderConfig").hasChat,
        containerRenderGate: {
            stores: [r.A, S.A],
            shouldRender(e) {
                let {
                    locked: t
                } = e;
                if (t) return !1;
                let n = r.A.getChannelId() ?? null,
                    [i] = S.A.getSessionEntries(),
                    l = i.length > 0;
                return null != n || l
            }
        }
    }
}