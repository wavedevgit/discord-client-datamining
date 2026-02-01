/** chunk id: 44022, original params: e,t,r (module,exports,require) **/
r.d(t, {
    $: () => q,
    J: () => U
}), r(896048);
var n = r(627968),
    l = r(64700),
    s = r(503698),
    a = r.n(s),
    i = r(284009),
    o = r.n(i),
    c = r(989349),
    u = r.n(c),
    d = r(110259),
    h = r(837381),
    f = r(311907),
    p = r(397927),
    g = r(442433),
    S = r(928039),
    E = r(139286),
    _ = r(636922),
    A = r(194085),
    y = r(835835),
    m = r(253932),
    b = r(576705),
    R = r(954571),
    v = r(203982),
    O = r(927813),
    T = r(164684),
    x = r(704456),
    I = r(85109),
    L = r(756377),
    j = r(601179),
    N = r(216595),
    C = r(948331),
    F = r(371349),
    w = r(652215),
    k = r(985018),
    P = r(422344);

function W(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
            return Object.getOwnPropertyDescriptor(r, e).enumerable
        }))), n.forEach(function(t) {
            var n;
            n = r[t], t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n
        })
    }
    return e
}

function M(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            r.push.apply(r, n)
        }
        return r
    })(Object(t)).forEach(function(r) {
        Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
    }), e
}
let D = {
    offset: {
        left: 4,
        right: -12
    }
};

function H(e) {
    let {
        closePopout: t
    } = e;
    return (0, n.jsx)(p.lGe, {
        "aria-label": k.intl.string(k.t["2pAkDA"]),
        children: (0, n.jsxs)("div", {
            className: P.jC,
            children: [(0, n.jsx)(y.Y9, {
                icon: p.cFy,
                title: k.intl.string(k.t["2pAkDA"])
            }), (0, n.jsx)(U, {
                closePopout: t
            })]
        })
    })
}

function U(e) {
    let {
        closePopout: t
    } = e, r = (0, j.A)();
    return ((0, E.A)({
        type: d.ImpressionTypes.POPOUT,
        name: d.ImpressionNames.FOR_LATER_LIST_VIEWED,
        properties: {
            total_count: r.length,
            overdue_count: I.A.getOverdueMessageReminderCount()
        }
    }, {}, [r.length]), 0 === r.length) ? (0, n.jsx)(C.g, {}) : (0, n.jsx)(Q, {
        savedMessageKeys: r,
        closePopout: t
    })
}

function q(e) {
    let {
        onOpen: t,
        onClose: r,
        children: s,
        popoutPosition: a,
        popoutAlign: i
    } = e, [o, c] = l.useState(!1), u = l.useRef(null), d = l.useCallback(() => {
        c(!1), o && (null == r || r())
    }, [r, o]), h = l.useCallback(() => {
        c(!o), o ? null == r || r() : null == t || t()
    }, [r, t, o]);
    l.useEffect(() => (v._.subscribe(w.jej.TOGGLE_FOR_LATER, h), () => void v._.unsubscribe(w.jej.TOGGLE_FOR_LATER, h)), [h]);
    let g = (0, f.bG)([I.A], () => I.A.hasOverdueReminder(), []);
    return (0, n.jsx)(p.YNO, {
        targetElementRef: u,
        animation: p.YNO.Animation.NONE,
        position: a,
        align: i,
        autoInvert: !1,
        shouldShow: o,
        onRequestClose: d,
        renderPopout: function() {
            return (0, n.jsx)(H, {
                closePopout: d
            })
        },
        ignoreModalClicks: !0,
        children: (e, t) => {
            let {
                isShown: r
            } = t;
            return s(h, r, e, g, u)
        }
    })
}

function Q(e) {
    let {
        savedMessageKeys: t,
        closePopout: r
    } = e, s = l.useRef(null), a = (0, S.A)("for-later", s), [i, o] = l.useState(new Date);
    return l.useEffect(() => {
        let e = setInterval(() => o(new Date), O.A.Millis.MINUTE);
        return () => {
            clearInterval(e)
        }
    }, []), (0, n.jsx)(h.hD, {
        navigator: a,
        children: (0, n.jsx)(h.PR, {
            children: e => {
                let {
                    ref: l
                } = e, a = function(e, t) {
                    if (null == e) return {};
                    var r, n, l, s = {};
                    if ("u" > typeof Reflect && Reflect.ownKeys) {
                        for (l = 0, r = Reflect.ownKeys(e); l < r.length; l++) n = r[l], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (s[n] = e[n]);
                        return s
                    }
                    if (s = function(e, t) {
                            if (null == e) return {};
                            var r, n, l = {},
                                s = Object.getOwnPropertyNames(e);
                            for (n = 0; n < s.length; n++) r = s[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
                            return l
                        }(e, t), Object.getOwnPropertySymbols)
                        for (l = 0, r = Object.getOwnPropertySymbols(e); l < r.length; l++) n = r[l], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (s[n] = e[n]);
                    return s
                }(e, ["ref"]);
                return (0, n.jsx)(p.ChK, M(W({
                    ref: e => {
                        var t;
                        s.current = e, l.current = null != (t = null == e ? void 0 : e.getScrollerNode()) ? t : null
                    },
                    className: P.VB
                }, a), {
                    children: t.map(e => (0, n.jsx)(G, {
                        savedMessageKey: e,
                        closePopout: r,
                        throttledNow: i
                    }, e.messageId))
                }))
            }
        })
    })
}

function z(e) {
    let {
        savedMessage: t,
        closePopout: r,
        throttledNow: s
    } = e, i = (0, x.vr)(t), o = l.useCallback(async e => {
        var n;
        await (0, x.le)(t, i), e.shiftKey || r(), R.default.track(w.HAw.FOR_LATER_SAVED_MESSAGE_JUMP, {
            channel_id: t.saveData.channelId,
            message_id: t.saveData.messageId,
            message_author_id: null == (n = t.message) ? void 0 : n.author.id,
            type: null != t.saveData.dueAt ? L.Yf.REMINDER : L.Yf.BOOKMARK,
            due_duration: null != t.saveData.dueAt ? u()().diff(t.saveData.dueAt) : void 0
        })
    }, [r, t, i]), c = (0, f.bG)([b.A], () => !!((null == i ? void 0 : i.type) === w.rbe.UNKNOWN || (null == i ? void 0 : i.isPrivate())) || b.A.can(w.xBc.VIEW_CHANNEL, i));
    return null != i && null != t.message && c ? (0, n.jsxs)("div", {
        className: P.zC,
        children: [(0, n.jsx)(p.DUT, {
            className: P.M,
            onClick: o,
            "aria-label": k.intl.string(k.t["+TSRGD"])
        }), null != t.saveData.dueAt ? (0, n.jsx)(F.A, {
            reminder: t,
            throttledNow: s
        }) : null, (0, n.jsx)(N.A, {
            channel: i
        }), (0, n.jsx)(_.A, {
            message: t.message,
            channel: i,
            className: P.iU,
            compact: m.hH.getSetting(),
            animateAvatar: !1,
            focusProps: D,
            trackAnnouncementViews: !0
        }, t.message.id), (0, n.jsx)(A.Ay, {
            className: P.S3,
            children: (0, n.jsx)(B, {
                savedMessage: t,
                jumpToMessage: o
            })
        })]
    }) : (0, n.jsxs)("div", {
        className: a()(P.zC, P.tq),
        children: [(0, n.jsx)("div", {
            className: P.fy,
            children: (0, n.jsx)(p.EpV, {
                size: "xxs",
                color: p.LU0.colors.INTERACTIVE_TEXT_ACTIVE
            })
        }), (0, n.jsx)(p.Heading, {
            variant: "text-md/semibold",
            color: "text-default",
            children: null != t.saveData.dueAt ? k.intl.string(k.t["wuQm+j"]) : k.intl.string(k.t.o572Fe)
        }), (0, n.jsx)(A.Ay, {
            className: P.S3,
            children: (0, n.jsx)(A.qv, {
                label: k.intl.string(k.t.SvXS1Z),
                icon: p.ucK,
                dangerous: !0,
                onClick: () => (0, T.x)(t.saveData)
            }, "delete")
        })]
    })
}

function G(e) {
    let {
        savedMessageKey: t,
        closePopout: r,
        throttledNow: l
    } = e, s = (0, f.bG)([I.A], () => I.A.getSavedMessage(t.channelId, t.messageId));
    return null == s ? null : (0, n.jsx)(z, {
        savedMessage: s,
        closePopout: r,
        throttledNow: l
    })
}

function B(e) {
    let {
        savedMessage: t,
        jumpToMessage: l
    } = e;
    return (o()(null != t.message, "Saved message must be cached for For Later action buttons"), null != t.saveData.dueAt) ? (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(A.qv, {
            label: k.intl.string(k.t.yjGtdJ),
            icon: p.A9s,
            onClick: () => (0, T.Y)({
                channelId: t.saveData.channelId,
                messageId: t.saveData.messageId,
                dueAt: void 0
            })
        }, "mark-complete"), (0, n.jsx)(A.qv, {
            label: k.intl.string(k.t.vrbqs1),
            icon: p.R2l,
            onClick: e => (0, g.L3)(e, async () => {
                let {
                    MessageReminderEditMenu: e
                } = await r.e("36419").then(r.bind(r, 49678));
                return r => (0, n.jsx)(e, M(W({}, r), {
                    label: k.intl.string(k.t.roMu1H),
                    message: t.message
                }))
            })
        }, "edit-reminder"), (0, n.jsx)(A.$$, {}), (0, n.jsx)(A.qv, {
            label: k.intl.string(k.t["+TSRGD"]),
            icon: p.txs,
            onClick: e => l(e)
        }, "jump-to-message"), (0, n.jsx)(A.qv, {
            label: k.intl.string(k.t.SvXS1Z),
            icon: p.cFy,
            onClick: () => (0, T.x)(t.saveData)
        }, "remove-reminder")]
    }) : (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(A.qv, {
            label: k.intl.string(k.t.mJ3P0N),
            icon: p.O4,
            onClick: e => (0, g.L3)(e, async () => {
                let {
                    MessageReminderEditMenu: e
                } = await r.e("36419").then(r.bind(r, 49678));
                return r => (0, n.jsx)(e, M(W({}, r), {
                    label: k.intl.string(k.t.mJ3P0N),
                    message: t.message
                }))
            })
        }, "create-reminder"), (0, n.jsx)(A.qv, {
            label: k.intl.string(k.t["+TSRGD"]),
            icon: p.txs,
            onClick: e => l(e)
        }, "jump-to-message"), (0, n.jsx)(A.qv, {
            label: k.intl.string(k.t.SvXS1Z),
            icon: p.cFy,
            onClick: () => (0, T.x)(t.saveData)
        }, "remove-bookmark")]
    })
}