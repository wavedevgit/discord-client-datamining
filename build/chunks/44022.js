/** chunk id: 44022 params = (module,exports,require) **/
r.d(t, {
    $: () => P,
    J: () => H
});
var n = r(627968),
    s = r(64700),
    l = r(503698),
    a = r.n(l),
    i = r(284009),
    o = r.n(i),
    c = r(989349),
    u = r.n(c),
    d = r(110259),
    h = r(837381),
    _ = r(311907),
    f = r(397927),
    S = r(442433),
    g = r(928039),
    E = r(139286),
    p = r(636922),
    A = r(194085),
    m = r(835835),
    y = r(253932),
    R = r(576705),
    x = r(954571),
    T = r(203982),
    I = r(927813),
    b = r(164684),
    L = r(704456),
    C = r(85109),
    N = r(756377),
    v = r(601179),
    F = r(216595),
    O = r(948331),
    k = r(371349),
    j = r(652215),
    M = r(985018),
    W = r(219717);
let w = {
    offset: {
        left: 4,
        right: -12
    }
};

function D(e) {
    let {
        closePopout: t
    } = e;
    return (0, n.jsx)(f.lGe, {
        "aria-label": M.intl.string(M.t["2pAkDA"]),
        children: (0, n.jsxs)("div", {
            className: W.jC,
            children: [(0, n.jsx)(m.Y9, {
                icon: f.cFy,
                title: M.intl.string(M.t["2pAkDA"])
            }), (0, n.jsx)(H, {
                closePopout: t
            })]
        })
    })
}

function H(e) {
    let {
        closePopout: t
    } = e, r = (0, v.A)();
    return ((0, E.A)({
        type: d.ImpressionTypes.POPOUT,
        name: d.ImpressionNames.FOR_LATER_LIST_VIEWED,
        properties: {
            total_count: r.length,
            overdue_count: C.A.getOverdueMessageReminderCount()
        }
    }, {}, [r.length]), 0 === r.length) ? (0, n.jsx)(O.g, {}) : (0, n.jsx)(U, {
        savedMessageKeys: r,
        closePopout: t
    })
}

function P(e) {
    let {
        onOpen: t,
        onClose: r,
        children: l,
        popoutPosition: a,
        popoutAlign: i
    } = e, [o, c] = s.useState(!1), u = s.useRef(null), d = s.useCallback(() => {
        c(!1), o && r?.()
    }, [r, o]), h = s.useCallback(() => {
        c(!o), o ? r?.() : t?.()
    }, [r, t, o]);
    s.useEffect(() => (T._.subscribe(j.jej.TOGGLE_FOR_LATER, h), () => void T._.unsubscribe(j.jej.TOGGLE_FOR_LATER, h)), [h]);
    let S = (0, _.bG)([C.A], () => C.A.hasOverdueReminder(), []);
    return (0, n.jsx)(f.YNO, {
        targetElementRef: u,
        animation: f.YNO.Animation.NONE,
        position: a,
        align: i,
        autoInvert: !1,
        shouldShow: o,
        onRequestClose: d,
        renderPopout: function() {
            return (0, n.jsx)(D, {
                closePopout: d
            })
        },
        ignoreModalClicks: !0,
        children: (e, t) => {
            let {
                isShown: r
            } = t;
            return l(h, r, e, S, u)
        }
    })
}

function U(e) {
    let {
        savedMessageKeys: t,
        closePopout: r
    } = e, l = s.useRef(null), a = (0, g.A)("for-later", l), [i, o] = s.useState(new Date);
    return s.useEffect(() => {
        let e = setInterval(() => o(new Date), I.A.Millis.MINUTE);
        return () => {
            clearInterval(e)
        }
    }, []), (0, n.jsx)(h.hD, {
        navigator: a,
        children: (0, n.jsx)(h.PR, {
            children: e => {
                let {
                    ref: s,
                    ...a
                } = e;
                return (0, n.jsx)(f.ChK, {
                    ref: e => {
                        l.current = e, s.current = e?.getScrollerNode() ?? null
                    },
                    className: W.VB,
                    ...a,
                    children: t.map(e => (0, n.jsx)($, {
                        savedMessageKey: e,
                        closePopout: r,
                        throttledNow: i
                    }, e.messageId))
                })
            }
        })
    })
}

function q(e) {
    let {
        savedMessage: t,
        closePopout: r,
        throttledNow: l
    } = e, i = (0, L.vr)(t), o = s.useCallback(async e => {
        await (0, L.le)(t, i), e.shiftKey || r(), x.default.track(j.HAw.FOR_LATER_SAVED_MESSAGE_JUMP, {
            channel_id: t.saveData.channelId,
            message_id: t.saveData.messageId,
            message_author_id: t.message?.author.id,
            type: null != t.saveData.dueAt ? N.Yf.REMINDER : N.Yf.BOOKMARK,
            due_duration: null != t.saveData.dueAt ? u()().diff(t.saveData.dueAt) : void 0
        })
    }, [r, t, i]), c = (0, _.bG)([R.A], () => !!(i?.type === j.rbe.UNKNOWN || i?.isPrivate()) || R.A.can(j.xBc.VIEW_CHANNEL, i));
    return null != i && null != t.message && c ? (0, n.jsxs)("div", {
        className: W.zC,
        children: [(0, n.jsx)(f.DUT, {
            className: W.M,
            onClick: o,
            "aria-label": M.intl.string(M.t["+TSRGD"])
        }), null != t.saveData.dueAt ? (0, n.jsx)(k.A, {
            reminder: t,
            throttledNow: l
        }) : null, (0, n.jsx)(F.A, {
            channel: i
        }), (0, n.jsx)(p.A, {
            message: t.message,
            channel: i,
            className: W.iU,
            compact: y.hH.getSetting(),
            animateAvatar: !1,
            focusProps: w,
            trackAnnouncementViews: !0
        }, t.message.id), (0, n.jsx)(A.Ay, {
            className: W.S3,
            children: (0, n.jsx)(z, {
                savedMessage: t,
                jumpToMessage: o
            })
        })]
    }) : (0, n.jsxs)("div", {
        className: a()(W.zC, W.tq),
        children: [(0, n.jsx)("div", {
            className: W.fy,
            children: (0, n.jsx)(f.EpV, {
                size: "xxs",
                color: f.LU0.colors.INTERACTIVE_TEXT_ACTIVE
            })
        }), (0, n.jsx)(f.Heading, {
            variant: "text-md/semibold",
            color: "text-default",
            children: null != t.saveData.dueAt ? M.intl.string(M.t["wuQm+j"]) : M.intl.string(M.t.o572Fe)
        }), (0, n.jsx)(A.Ay, {
            className: W.S3,
            children: (0, n.jsx)(A.qv, {
                label: M.intl.string(M.t.SvXS1Z),
                icon: f.ucK,
                dangerous: !0,
                onClick: () => (0, b.x)(t.saveData)
            }, "delete")
        })]
    })
}

function $(e) {
    let {
        savedMessageKey: t,
        closePopout: r,
        throttledNow: s
    } = e, l = (0, _.bG)([C.A], () => C.A.getSavedMessage(t.channelId, t.messageId));
    return null == l ? null : (0, n.jsx)(q, {
        savedMessage: l,
        closePopout: r,
        throttledNow: s
    })
}

function z(e) {
    let {
        savedMessage: t,
        jumpToMessage: s
    } = e;
    return (o()(null != t.message, "Saved message must be cached for For Later action buttons"), null != t.saveData.dueAt) ? (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(A.qv, {
            label: M.intl.string(M.t.yjGtdJ),
            icon: f.A9s,
            onClick: () => (0, b.Y)({
                channelId: t.saveData.channelId,
                messageId: t.saveData.messageId,
                dueAt: void 0
            })
        }, "mark-complete"), (0, n.jsx)(A.qv, {
            label: M.intl.string(M.t.vrbqs1),
            icon: f.R2l,
            onClick: e => (0, S.L3)(e, async () => {
                let {
                    MessageReminderEditMenu: e
                } = await r.e("36419").then(r.bind(r, 49678));
                return r => (0, n.jsx)(e, {
                    ...r,
                    label: M.intl.string(M.t.roMu1H),
                    message: t.message
                })
            })
        }, "edit-reminder"), (0, n.jsx)(A.$$, {}), (0, n.jsx)(A.qv, {
            label: M.intl.string(M.t["+TSRGD"]),
            icon: f.txs,
            onClick: e => s(e)
        }, "jump-to-message"), (0, n.jsx)(A.qv, {
            label: M.intl.string(M.t.SvXS1Z),
            icon: f.cFy,
            onClick: () => (0, b.x)(t.saveData)
        }, "remove-reminder")]
    }) : (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(A.qv, {
            label: M.intl.string(M.t.mJ3P0N),
            icon: f.O4,
            onClick: e => (0, S.L3)(e, async () => {
                let {
                    MessageReminderEditMenu: e
                } = await r.e("36419").then(r.bind(r, 49678));
                return r => (0, n.jsx)(e, {
                    ...r,
                    label: M.intl.string(M.t.mJ3P0N),
                    message: t.message
                })
            })
        }, "create-reminder"), (0, n.jsx)(A.qv, {
            label: M.intl.string(M.t["+TSRGD"]),
            icon: f.txs,
            onClick: e => s(e)
        }, "jump-to-message"), (0, n.jsx)(A.qv, {
            label: M.intl.string(M.t.SvXS1Z),
            icon: f.cFy,
            onClick: () => (0, b.x)(t.saveData)
        }, "remove-bookmark")]
    })
}