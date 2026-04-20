/** chunk id: 321565 params = (module,exports,require) **/
n.d(t, {
    default: () => T
});
var a = n(627968),
    i = n(64700),
    r = n(503698),
    o = n.n(r),
    l = n(935462),
    s = n(397927),
    c = n(707685),
    d = n(775121),
    u = n(775602),
    _ = n(203982),
    m = n(700331),
    p = n(454290),
    A = n(369254),
    b = n(847816),
    h = n(652215),
    S = n(985018),
    g = n(264482);

function C(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    !0 === n || u.A.useReducedMotion ? e.set(t) : e.start(t)
}

function T(e) {
    let {
        onClose: t,
        onIndexChange: n,
        items: r,
        startingIndex: T,
        enabledContentHarmTypeFlags: f,
        shouldHideMediaOptions: E = !1,
        transitionState: I,
        ...y
    } = e, [v, x] = i.useState(T ?? 0), [M, O] = i.useState(!1), [R, N] = (0, s.zhh)(() => ({
        scale: u.A.useReducedMotion ? 1 : .9,
        x: 0,
        y: 0,
        config: {
            friction: 30,
            tension: 300
        }
    })), D = i.useRef(null);
    i.useEffect(() => {
        if (null != t) return _._.subscribe(h.jej.MEDIA_MODAL_CLOSE, t), () => {
            _._.unsubscribe(h.jej.MEDIA_MODAL_CLOSE, t)
        }
    }, [t]);
    let j = i.useRef(null);
    i.useEffect(() => {
        if (I !== j.current) switch (j.current = I, I) {
            case s.ip4.ENTERING:
                C(R.scale, 1);
                break;
            case s.ip4.EXITING:
                u.A.useReducedMotion || (C(R.x, 0), C(R.y, 0), C(R.scale, .9))
        }
    }, [I, R]), I === s.ip4.HIDDEN && M && (O(!1), R.x.set(0), R.y.set(0), R.scale.set(1)), i.useEffect(() => {
        I === s.ip4.ENTERED && (d.A.disable(), d.A.enableTemp(c.w)), I === s.ip4.HIDDEN && (d.A.disable(), d.A.enableTemp(c.b));
        let e = () => {
                d.A.disable(), I === s.ip4.ENTERED ? d.A.enableTemp(c.w) : d.A.enableTemp(c.b)
            },
            t = () => {
                d.A.disableTemp()
            },
            n = D.current?.ownerDocument?.defaultView;
        return n?.addEventListener("focus", e), n?.addEventListener("blur", t), () => {
            n?.removeEventListener("focus", e), n?.removeEventListener("blur", t), d.A.disableTemp()
        }
    }, [I]);
    let P = i.useCallback(e => {
            x(e), n?.(e), m.l.markActionPerformed(m.N.SELECTED_ITEM_CHANGE)
        }, [n]),
        L = i.useMemo(() => ({
            scale: R.scale,
            x: R.x,
            y: R.y,
            setScale(e, t) {
                C(R.scale, e, t?.immediate)
            },
            setOffset(e, t, n) {
                C(R.x, e, n?.immediate), C(R.y, t, n?.immediate)
            },
            zoomed: M,
            setZoomed(e) {
                O(e), C(R.scale, e ? 2.5 : 1), e || (C(R.x, 0), C(R.y, 0))
            }
        }), [M, R]);
    return (0, a.jsx)(s.NPJ, {
        theme: h.NJ8.MIDNIGHT,
        children: e => (0, a.jsx)(s.EOs, {
            "data-migration-pending": !0,
            hideShadow: !0,
            className: o()(g.O, e),
            transitionState: I,
            ...y,
            size: s.rIJ.DYNAMIC,
            animation: l.WM.SUBTLE,
            fullscreenOnMobile: !1,
            onClick: t,
            "aria-label": S.intl.string(S.t.AMTX3j),
            parentComponent: "MediaViewerModal",
            children: (0, a.jsxs)(p.f.Provider, {
                value: L,
                children: [(0, a.jsx)(b.A, {
                    item: r[v],
                    hideMediaOptions: E,
                    onClose: t
                }), (0, a.jsx)("div", {
                    style: {
                        display: "none"
                    },
                    ref: D
                }), (0, a.jsx)(A.A, {
                    items: r,
                    startIndex: v,
                    onIndexChange: P,
                    enabledContentHarmTypeFlags: f,
                    shouldHideMediaOptions: E
                })]
            })
        })
    })
}