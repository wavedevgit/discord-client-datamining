/** chunk id: 295102, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => x
}), n(896048);
var i = n(627968),
    r = n(442433),
    l = n(383501),
    a = n(589051),
    o = n(547463),
    s = n(620851),
    u = n(646881),
    c = n(97548),
    d = n(324093),
    h = n(897720),
    p = n(888987),
    f = n(218670),
    g = n(709747),
    m = n(479207),
    A = n(393172),
    y = n(968898),
    O = n(196295),
    v = n(187667);
n(392164);
var b = n(652215),
    E = n(985018);

function _(e) {
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

function S(e, t) {
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
let x = {
    [b.uss.VIDEO]: {
        renderWidget(e) {
            let {
                widget: t,
                locked: n,
                size: r,
                padding: l,
                borderWidth: a,
                showEmpty: o
            } = e;
            return (0, h.cv)(t) ? (0, i.jsx)(m.A, {
                id: t.id,
                locked: n,
                widget: t,
                height: "auto" === r.height ? 0 : r.height - 2 * l - 2 * a,
                width: "auto" === r.width ? 0 : r.width - 2 * l - 2 * a,
                showEmpty: o,
                padding: l,
                borderWidth: a
            }) : null
        },
        renderTitle: () => (0, i.jsx)(y.Pl, {
            children: E.intl.string(E.t.UPvOia)
        }),
        renderButtons: e => (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(y.CS, {
                onClick: t => {
                    (0, h.cv)(e) && (0, r.L3)(t, async () => {
                        let {
                            default: t
                        } = await n.e("78238").then(n.bind(n, 440173));
                        return n => (0, i.jsx)(t, S(_({}, n), {
                            widget: e
                        }))
                    })
                }
            }), (0, i.jsx)(y.O0, {
                id: e.id,
                pinned: e.pinned
            })]
        }),
        resizeValidation: m.r
    },
    [b.uss.VOICE_V3]: {
        renderWidget(e) {
            var t;
            let {
                widget: n,
                anchorLeft: r,
                locked: l,
                showEmpty: a
            } = e;
            return (0, h.ZO)(n) ? (0, i.jsx)(A.Ay, {
                anchorLeft: r,
                id: n.id,
                locked: l,
                pinned: n.pinned,
                widget: b.uss.VOICE_V3,
                maxDisplayedVoiceStates: null != (t = n.meta.voiceStatesMaxShown) ? t : 8,
                isPreviewingInGame: !1,
                showEmpty: a
            }) : null
        },
        renderTitle: () => (0, i.jsx)(y.Pl, {
            children: E.intl.string(E.t.nFv3Gb)
        }),
        renderButtons: e => (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(y.CS, {
                onClick: e => {
                    (0, r.L3)(e, async () => {
                        let {
                            default: e
                        } = await n.e("34901").then(n.bind(n, 51444));
                        return t => (0, i.jsx)(e, _({}, t))
                    })
                }
            }), (0, i.jsx)(y.O0, {
                id: e.id,
                pinned: e.pinned
            })]
        })
    },
    [b.uss.CLICK_ZONE_DEBUG]: {
        renderWidget(e) {
            let {
                widget: t,
                locked: n
            } = e;
            return (0, i.jsx)(s.A, {
                id: t.id,
                locked: n,
                pinned: t.pinned
            })
        },
        renderTitle: () => (0, i.jsx)(y.Pl, {
            children: "Click Zone Tester"
        }),
        renderButtons: e => (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(y.CS, {
                onClick: e => {
                    (0, r.L3)(e, async () => {
                        let {
                            default: e
                        } = await n.e("49170").then(n.bind(n, 508457));
                        return t => (0, i.jsx)(e, _({}, t))
                    })
                }
            }), (0, i.jsx)(y.O0, {
                id: e.id,
                pinned: e.pinned
            })]
        })
    },
    [b.uss.PERFORMANCE_DEBUG]: {
        renderWidget(e) {
            let {
                widget: t,
                locked: n,
                anchorLeft: r
            } = e;
            return (0, i.jsx)(p.A, {
                id: t.id,
                anchorLeft: r,
                locked: n,
                pinned: t.pinned
            })
        },
        renderTitle: () => (0, i.jsx)(y.Pl, {
            children: "Overlay Performance"
        }),
        renderButtons: e => (0, i.jsx)(y.O0, {
            id: e.id,
            pinned: e.pinned
        })
    },
    [b.uss.GO_LIVE]: {
        renderWidget(e) {
            var t;
            let {
                widget: n,
                locked: r,
                size: l,
                dragStart: a,
                anchorTop: o,
                anchorLeft: s,
                showEmpty: u,
                padding: d,
                borderWidth: p
            } = e;
            return (0, h.dO)(n) ? (0, i.jsx)(c.A, {
                id: n.id,
                locked: r,
                pinned: n.pinned,
                opacity: n.opacity,
                size: l,
                anchorTop: o,
                anchorLeft: s,
                widget: n,
                isPreviewingInGame: !1,
                dragStart: a,
                horizontal: null != (t = n.meta.horizontal) && t,
                padding: d,
                borderWidth: p,
                showEmpty: u
            }) : null
        },
        renderTitle: e => (0, i.jsx)(y.we, {
            widgetId: e.id,
            children: E.intl.string(E.t["386XRo"])
        }),
        renderButtons(e) {
            var t;
            return (0, h.dO)(e) ? (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)(y.CS, {
                    onClick: t => {
                        (0, h.dO)(e) && (0, r.L3)(t, async () => {
                            let {
                                default: t
                            } = await n.e("21289").then(n.bind(n, 543824));
                            return n => (0, i.jsx)(t, S(_({}, n), {
                                widget: e
                            }))
                        })
                    }
                }), (0, i.jsx)(y.GQ, {
                    widgetId: e.id,
                    showAllStreams: null == (t = e.meta.showAllStreams) || t
                }), (0, i.jsx)(y.O0, {
                    id: e.id,
                    pinned: e.pinned
                })]
            }) : null
        },
        resizeValidation: d.OL
    },
    [b.uss.QUICK_ACTIONS]: {
        renderWidget(e) {
            let {
                locked: t
            } = e;
            return (0, i.jsx)(f.A, {
                locked: t
            })
        }
    },
    [b.uss.NOTIFICATIONS]: {
        renderWidget(e) {
            let {
                locked: t,
                showEmpty: n,
                widget: r
            } = e;
            return (0, i.jsx)(O.A, {
                pinned: r.pinned,
                locked: t,
                showEmpty: n
            })
        },
        renderTitle: () => (0, i.jsx)(y.Pl, {
            children: E.intl.string(E.t.gnKWdS)
        }),
        renderButtons: e => (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(y.CS, {
                onClick: e => {
                    (0, r.L3)(e, async () => {
                        let {
                            default: e
                        } = await n.e("51607").then(n.bind(n, 320490));
                        return t => (0, i.jsx)(e, _({}, t))
                    })
                }
            }), (0, i.jsx)(y.O0, {
                id: e.id,
                pinned: e.pinned
            })]
        })
    },
    [b.uss.ACTIVITY]: {
        renderWidget(e) {
            let {
                locked: t
            } = e;
            return (0, i.jsx)(o.Ay, {
                locked: t
            })
        },
        renderTitle: () => (0, i.jsx)(y.Pl, {
            children: E.intl.string(E.t["6gwSFY"])
        }),
        renderButtons: () => null,
        predicate: () => !(0, a.NI)("WidgetRenderConfig").hasFriendList
    },
    [b.uss.FRIENDS]: {
        renderWidget(e) {
            let {
                locked: t
            } = e;
            return (0, i.jsx)(u.A, {
                locked: t
            })
        },
        renderTitle: () => (0, i.jsx)(y.Pl, {
            children: E.intl.string(E.t.TdEu5X)
        }),
        renderButtons: () => null,
        predicate: () => (0, a.NI)("WidgetRenderConfig").hasFriendList
    },
    [b.uss.TEXT_CHAT_V3]: {
        renderWidget(e) {
            let {
                locked: t,
                dragStart: n,
                dragging: r
            } = e;
            return (0, i.jsx)(g.A, {
                locked: t,
                dragStart: n,
                dragging: r
            })
        },
        renderTitle: () => (0, i.jsx)(y.Pl, {
            children: E.intl.string(E.t["/VQax8"])
        }),
        renderButtons: () => null,
        predicate: () => (0, a.NI)("WidgetRenderConfig").hasChat,
        containerRenderGate: {
            stores: [l.A, v.A],
            shouldRender(e) {
                var t;
                let {
                    locked: n
                } = e;
                if (n) return !1;
                let i = null != (t = l.A.getChannelId()) ? t : null,
                    [r] = v.A.getSessionEntries(),
                    a = r.length > 0;
                return null != i || a
            }
        }
    }
}