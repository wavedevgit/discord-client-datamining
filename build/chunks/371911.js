/** chunk id: 371911 params = (module,exports,require) **/
n.d(t, {
    C: () => v
});
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(484030),
    o = n(311907),
    d = n(873298),
    c = n(397927),
    u = n(793574),
    h = n(688810),
    A = n(966597),
    _ = n(85109),
    m = n(44022),
    p = n(566908),
    g = n(594061),
    f = n(617617),
    E = n(203982),
    x = n(646468),
    I = n(492498),
    C = n(765627),
    N = n(547945),
    T = n(412484),
    S = n(652215),
    b = n(985018),
    y = n(217793);

function v(e) {
    let t, n, {
            onOpen: s,
            onClose: v,
            children: R,
            badgeState: j,
            popoutPosition: O,
            popoutAlign: L,
            targetElementRef: M,
            spacing: D,
            dialogClassName: U
        } = e,
        {
            analyticsLocations: G
        } = (0, h.Ay)(u.A.NOTIFICATION_CENTER),
        [P, k] = l.useState(!1),
        [w, B] = [(0, o.bG)([f.A], () => f.A.settings.inbox?.currentTab ?? d.Y2.UNREADS), l.useCallback(e => {
            g.wc.updateAsync("inbox", t => {
                if (t.currentTab === e) return !1;
                t.currentTab = e
            }, g.Sb.FREQUENT_USER_ACTION)
        }, [])],
        {
            showTutorial: V,
            setSeenTutorial: H
        } = (t = (0, o.bG)([f.A], () => f.A.settings.inbox?.viewedTutorial ?? !1), n = l.useCallback(() => {
            g.wc.updateAsync("inbox", e => {
                e.viewedTutorial = !0
            }, g.Sb.INFREQUENT_USER_ACTION)
        }, []), {
            showTutorial: !t && w === d.Y2.UNREADS,
            setSeenTutorial: n
        }),
        F = l.useCallback(() => {
            k(!1), P && v?.()
        }, [v, P]),
        W = l.useCallback(() => {
            k(!P), P ? v?.() : s?.()
        }, [v, s, P]);
    l.useEffect(() => (E._.subscribe(S.jej.TOGGLE_INBOX, W), () => void E._.unsubscribe(S.jej.TOGGLE_INBOX, W)), [W]);
    let {
        enabled: K,
        inInbox: Y
    } = A.A.useConfig({
        location: "RecentsPopout"
    }), z = (0, o.bG)([_.A], () => _.A.hasOverdueReminder(), []) && K && Y;
    l.useEffect(() => {
        w !== d.Y2.BOOKMARKS || K || Y || B(d.Y2.MENTIONS), w === d.Y2.GAME_INVITES && B(d.Y2.MENTIONS)
    });
    let X = l.useCallback(e => {
            e.shiftKey || F()
        }, [F]),
        q = (0, p.Sc)();
    return (0, i.jsx)(h.f5, {
        value: G,
        children: (0, i.jsx)(c.YNO, {
            targetElementRef: M,
            animation: c.YNO.Animation.NONE,
            position: O,
            align: L,
            autoInvert: !1,
            shouldShow: P,
            onRequestClose: F,
            renderPopout: function() {
                return (0, i.jsx)(c.lGe, {
                    "aria-label": b.intl.string(b.t.GSmTKJ),
                    className: U,
                    children: (0, i.jsx)("div", {
                        className: a()(y.k, {
                            [y.q]: q
                        }),
                        children: (0, i.jsx)(c.Fmo, {
                            component: (0, i.jsx)(C.A, {
                                tab: w,
                                setTab: B,
                                badgeState: j,
                                closePopout: F
                            }),
                            children: w === d.Y2.FOR_YOU ? (0, i.jsx)(x.Ay, {}) : w === d.Y2.MENTIONS ? (0, i.jsx)(I.A, {
                                onJump: X
                            }) : K && Y && w === d.Y2.BOOKMARKS ? (0, i.jsx)(m.J, {
                                closePopout: F
                            }) : w === d.Y2.SCHEDULED ? (0, i.jsx)(N.w, {}) : (0, i.jsx)(r.tH, {
                                fallback: (0, i.jsx)(T.T, {}),
                                children: (0, i.jsx)(T.Ay, {
                                    onJump: X,
                                    showTutorial: V,
                                    setSeenTutorial: H,
                                    closePopout: F
                                })
                            })
                        })
                    })
                })
            },
            ignoreModalClicks: !0,
            spacing: D,
            clickTrap: !0,
            children: (e, t) => {
                let {
                    isShown: n
                } = t;
                return R(W, n, e, z)
            }
        })
    })
}