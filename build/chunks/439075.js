/** Chunk was on 36054 **/
/** chunk id: 439075, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => j
}), n(896048);
var a = n(627968),
    l = n(64700),
    r = n(503698),
    i = n.n(r),
    s = n(216456),
    o = n(341915),
    c = n(890687),
    d = n(792620),
    u = n(73473),
    m = n(545986),
    p = n(203879),
    h = n(321503),
    x = n(56853),
    g = n(515038),
    f = n(652215),
    b = n(348655);

function v(e) {
    var t, n;
    let {
        quest: r,
        className: o,
        questContent: u,
        contentPosition: v,
        rowIndex: j,
        impressionRef: _,
        sourceQuestContent: y
    } = e, [A, C] = l.useState(!1), [S, O] = l.useState([]), T = (0, c.aC)(r), E = l.useMemo(() => (0, d.vv)(r), [r]), N = (0, s.u0)(), w = l.useCallback(() => {
        C(!0), N({
            questId: r.id,
            event: f.HAw.QUEST_HOVER,
            properties: {
                content_id: u,
                content_name: (0, s.jO)(u),
                content_position: v
            },
            sourceQuestContent: y
        }), E && (0, m.l9)()
    }, [N, r.id, u, E, y, v]), I = l.useCallback(() => {
        C(!1), N({
            questId: r.id,
            event: f.HAw.QUEST_HOVER_OFF,
            properties: {
                content_id: u,
                content_name: (0, s.jO)(u),
                content_position: v
            },
            sourceQuestContent: y
        })
    }, [N, r.id, u, y, v]), k = l.useContext(h.X), {
        visibilityElementRef: P,
        almostVisibleInViewport: R
    } = function(e) {
        let [t, n] = l.useState(!1), a = l.useCallback(e => {
            e.isIntersecting && n(!0)
        }, []);
        return {
            visibilityElementRef: (0, p.B)(a, {
                root: null != e ? e : null,
                threshold: 0,
                rootMargin: "900px 0px 900px 0px"
            }, !0),
            almostVisibleInViewport: t
        }
    }(null != (t = null == k || null == (n = k.current) ? void 0 : n.getScrollerNode()) ? t : null);
    return (0, a.jsxs)("div", {
        id: "quest-tile-".concat(r.id),
        ref: e => {
            _.current = e, P.current = e
        },
        className: i()(b.k, o),
        onMouseEnter: w,
        onMouseLeave: I,
        onFocus: w,
        onBlur: I,
        children: [(0, a.jsx)(x.A, {
            quest: r,
            isHovering: A,
            errorHints: S,
            warningHints: T,
            isVisibleInViewport: R,
            sourceQuestContent: y
        }), (0, a.jsx)(g.A, {
            quest: r,
            questContent: u,
            isHovering: A,
            contentPosition: v,
            rowIndex: j,
            onReceiveErrorHints: O,
            isVisibleInViewport: R,
            sourceQuestContent: y
        })]
    })
}

function j(e) {
    return (0, a.jsx)(u.R, {
        questOrQuests: e.quest,
        questContent: e.questContent,
        questContentPosition: e.contentPosition,
        questContentRowIndex: e.rowIndex,
        trackGuildAndChannelMetadata: e.questContent === o.uF.QUESTS_EMBED,
        sourceQuestContent: e.sourceQuestContent,
        children: t => {
            var n, l;
            return (0, a.jsx)(v, (n = function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        a = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))), a.forEach(function(t) {
                        var a;
                        a = n[t], t in e ? Object.defineProperty(e, t, {
                            value: a,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = a
                    })
                }
                return e
            }({}, e), l = l = {
                impressionRef: t
            }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    n.push.apply(n, a)
                }
                return n
            })(Object(l)).forEach(function(e) {
                Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(l, e))
            }), n))
        }
    })
}