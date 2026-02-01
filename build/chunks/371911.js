/** chunk id: 371911, original params: e,t,n (module,exports,require) **/
n.d(t, {
    C: () => I
}), n(896048);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(484030),
    o = n(311907),
    c = n(873298),
    u = n(397927),
    d = n(793574),
    p = n(688810),
    h = n(966597),
    g = n(85109),
    f = n(44022),
    m = n(566908),
    b = n(594061),
    A = n(617617),
    y = n(203982),
    O = n(646468),
    j = n(492498),
    x = n(765627),
    _ = n(547945),
    v = n(412484),
    E = n(652215),
    C = n(985018),
    S = n(98938);

function I(e) {
    let t, n, {
            onOpen: i,
            onClose: I,
            children: N,
            badgeState: T,
            popoutPosition: P,
            popoutAlign: w,
            targetElementRef: R,
            spacing: D,
            dialogClassName: L
        } = e,
        {
            analyticsLocations: M
        } = (0, p.Ay)(d.A.NOTIFICATION_CENTER),
        [G, k] = l.useState(!1),
        [U, V] = [(0, o.bG)([A.A], () => {
            var e, t;
            return null != (e = null == (t = A.A.settings.inbox) ? void 0 : t.currentTab) ? e : c.Y2.UNREADS
        }), l.useCallback(e => {
            b.wc.updateAsync("inbox", t => {
                if (t.currentTab === e) return !1;
                t.currentTab = e
            }, b.Sb.FREQUENT_USER_ACTION)
        }, [])],
        {
            showTutorial: B,
            setSeenTutorial: H
        } = (t = (0, o.bG)([A.A], () => {
            var e, t;
            return null != (e = null == (t = A.A.settings.inbox) ? void 0 : t.viewedTutorial) && e
        }), n = l.useCallback(() => {
            b.wc.updateAsync("inbox", e => {
                e.viewedTutorial = !0
            }, b.Sb.INFREQUENT_USER_ACTION)
        }, []), {
            showTutorial: !t && U === c.Y2.UNREADS,
            setSeenTutorial: n
        }),
        F = l.useCallback(() => {
            k(!1), G && (null == I || I())
        }, [I, G]),
        Y = l.useCallback(() => {
            k(!G), G ? null == I || I() : null == i || i()
        }, [I, i, G]);
    l.useEffect(() => (y._.subscribe(E.jej.TOGGLE_INBOX, Y), () => void y._.unsubscribe(E.jej.TOGGLE_INBOX, Y)), [Y]);
    let {
        enabled: K,
        inInbox: W
    } = h.A.useExperiment({
        location: "RecentsPopout"
    }), z = (0, o.bG)([g.A], () => g.A.hasOverdueReminder(), []) && K && W;
    l.useEffect(() => {
        U !== c.Y2.BOOKMARKS || K || W || V(c.Y2.MENTIONS), U === c.Y2.GAME_INVITES && V(c.Y2.MENTIONS)
    });
    let X = l.useCallback(e => {
            e.shiftKey || F()
        }, [F]),
        q = (0, m.Sc)({
            location: "ForYou"
        });
    return (0, r.jsx)(p.f5, {
        value: M,
        children: (0, r.jsx)(u.YNO, {
            targetElementRef: R,
            animation: u.YNO.Animation.NONE,
            position: P,
            align: w,
            autoInvert: !1,
            shouldShow: G,
            onRequestClose: F,
            renderPopout: function() {
                return (0, r.jsx)(u.lGe, {
                    "aria-label": C.intl.string(C.t.GSmTKJ),
                    className: L,
                    children: (0, r.jsx)("div", {
                        className: s()(S.k, {
                            [S.q]: q
                        }),
                        children: (0, r.jsx)(u.Fmo, {
                            component: (0, r.jsx)(x.A, {
                                tab: U,
                                setTab: V,
                                badgeState: T,
                                closePopout: F
                            }),
                            children: U === c.Y2.FOR_YOU ? (0, r.jsx)(O.Ay, {}) : U === c.Y2.MENTIONS ? (0, r.jsx)(j.A, {
                                onJump: X
                            }) : K && W && U === c.Y2.BOOKMARKS ? (0, r.jsx)(f.J, {
                                closePopout: F
                            }) : U === c.Y2.SCHEDULED ? (0, r.jsx)(_.w, {}) : (0, r.jsx)(a.tH, {
                                fallback: (0, r.jsx)(v.T, {}),
                                children: (0, r.jsx)(v.Ay, {
                                    onJump: X,
                                    showTutorial: B,
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
                return N(Y, n, e, z)
            }
        })
    })
}