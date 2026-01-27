/** Chunk was on 41727 **/
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
    f = n(85109),
    g = n(44022),
    m = n(566908),
    b = n(594061),
    A = n(617617),
    y = n(203982),
    _ = n(646468),
    O = n(492498),
    j = n(765627),
    v = n(547945),
    x = n(412484),
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
            dialogClassName: M
        } = e,
        {
            analyticsLocations: L
        } = (0, p.Ay)(d.A.NOTIFICATION_CENTER),
        [k, G] = l.useState(!1),
        [U, B] = [(0, o.bG)([A.A], () => {
            var e, t;
            return null != (e = null == (t = A.A.settings.inbox) ? void 0 : t.currentTab) ? e : c.Y2.UNREADS
        }), l.useCallback(e => {
            b.wc.updateAsync("inbox", t => {
                if (t.currentTab === e) return !1;
                t.currentTab = e
            }, b.Sb.FREQUENT_USER_ACTION)
        }, [])],
        {
            showTutorial: V,
            setSeenTutorial: F
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
        H = l.useCallback(() => {
            G(!1), k && (null == I || I())
        }, [I, k]),
        K = l.useCallback(() => {
            G(!k), k ? null == I || I() : null == i || i()
        }, [I, i, k]);
    l.useEffect(() => (y._.subscribe(E.jej.TOGGLE_INBOX, K), () => void y._.unsubscribe(E.jej.TOGGLE_INBOX, K)), [K]);
    let {
        enabled: W,
        inInbox: z
    } = h.A.useExperiment({
        location: "RecentsPopout"
    }), Y = (0, o.bG)([f.A], () => f.A.hasOverdueReminder(), []) && W && z;
    l.useEffect(() => {
        U !== c.Y2.BOOKMARKS || W || z || B(c.Y2.MENTIONS), U === c.Y2.GAME_INVITES && B(c.Y2.MENTIONS)
    });
    let q = l.useCallback(e => {
            e.shiftKey || H()
        }, [H]),
        X = (0, m.Sc)({
            location: "ForYou"
        });
    return (0, r.jsx)(p.f5, {
        value: L,
        children: (0, r.jsx)(u.YNO, {
            targetElementRef: R,
            animation: u.YNO.Animation.NONE,
            position: P,
            align: w,
            autoInvert: !1,
            shouldShow: k,
            onRequestClose: H,
            renderPopout: function() {
                return (0, r.jsx)(u.lGe, {
                    "aria-label": C.intl.string(C.t.GSmTKJ),
                    className: M,
                    children: (0, r.jsx)("div", {
                        className: s()(S.k, {
                            [S.q]: X
                        }),
                        children: (0, r.jsx)(u.Fmo, {
                            component: (0, r.jsx)(j.A, {
                                tab: U,
                                setTab: B,
                                badgeState: T,
                                closePopout: H
                            }),
                            children: U === c.Y2.FOR_YOU ? (0, r.jsx)(_.Ay, {}) : U === c.Y2.MENTIONS ? (0, r.jsx)(O.A, {
                                onJump: q
                            }) : W && z && U === c.Y2.BOOKMARKS ? (0, r.jsx)(g.J, {
                                closePopout: H
                            }) : U === c.Y2.SCHEDULED ? (0, r.jsx)(v.w, {}) : (0, r.jsx)(a.tH, {
                                fallback: (0, r.jsx)(x.T, {}),
                                children: (0, r.jsx)(x.Ay, {
                                    onJump: q,
                                    showTutorial: V,
                                    setSeenTutorial: F,
                                    closePopout: H
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
                return N(K, n, e, Y)
            }
        })
    })
}