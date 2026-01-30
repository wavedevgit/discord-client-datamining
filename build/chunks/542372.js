/** chunk id: 542372, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => O
});
var r = n(627968),
    l = n(64700),
    i = n(311907),
    s = n(73153),
    a = n(367513),
    o = n(58149),
    c = n(688810),
    u = n(313961),
    d = n(384059),
    h = n(574172),
    p = n(423562),
    g = n(309010),
    f = n(954571),
    m = n(203982),
    b = n(723702),
    A = n(475815),
    y = n(652215);

function O(e) {
    let {
        channel: t,
        appContext: n,
        popoutOpen: O,
        popoutWindow: _,
        currentWindow: j
    } = e, {
        parentAnalyticsLocation: x
    } = (0, c.Ay)(), v = n === y.BRT.POPOUT, E = l.useRef(null), {
        currentLayout: C,
        mode: S
    } = (0, i.cf)([u.A], () => {
        let e = u.A.getMode(t.id),
            r = n === y.BRT.POPOUT;
        r && (e = y._Of.VIDEO);
        let l = e === y._Of.VIDEO ? u.A.getLayout(t.id, n) : y.DUB.MINIMUM;
        return r && l !== y.DUB.FULL_SCREEN && (l = y.DUB.NO_CHAT), {
            currentLayout: l,
            mode: e
        }
    }, [t, n]), I = (0, i.bG)([g.A], () => g.A.getVoiceChannelId() === t.id, [t.id]);
    l.useEffect(() => {
        E.current = S
    });
    let N = l.useRef(C),
        {
            currentDocument: T,
            rootNode: P
        } = l.useMemo(() => {
            let e = null != _ && v ? _.document : document,
                t = j.document.getElementById("app-mount");
            return {
                currentWindow: j,
                currentDocument: e,
                rootNode: t
            }
        }, [_, v, j]),
        w = O && !v,
        R = S === y._Of.VIDEO && I && !w,
        D = l.useCallback((e, r) => {
            r !== e && (a.A.updateLayout(t.id, r, n), r === y.DUB.FULL_SCREEN && t.isPrivate() && m._.dispatch(y.jej.TEXTAREA_BLUR))
        }, [n, t]),
        L = l.useCallback(e => {
            null == P || e === y.DUB.FULL_SCREEN && (D(e, N.current), (0, A.sP)(e => {
                N.current = e
            }, T))
        }, [T, D, P]),
        M = l.useCallback(e => () => {
            null != P && ((0, d.X)(x, d.O.FULL_SCREEN, e !== y.DUB.FULL_SCREEN), e !== y.DUB.FULL_SCREEN ? (N.current = e, D(e, y.DUB.FULL_SCREEN), (0, A.tl)(P)) : L(e))
        }, [D, L, P, x]);
    l.useEffect(() => {
        let e = () => {
            null != P && ((0, A._U)(P, T) || C !== y.DUB.FULL_SCREEN || M(C)())
        };
        return T.addEventListener(A.Wb, e), () => {
            T.removeEventListener(A.Wb, e)
        }
    }, [T, C, M, P]);
    let G = {
            channel: t,
            maybeLeaveFullScreen: L
        },
        k = l.useRef(G);
    return (l.useEffect(() => {
        k.current = G
    }), l.useEffect(() => {
        let {
            channel: e,
            maybeLeaveFullScreen: t
        } = k.current;
        return f.default.track(y.HAw.VIDEO_LAYOUT_TOGGLED, function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }))), r.forEach(function(t) {
                    var r;
                    r = n[t], t in e ? Object.defineProperty(e, t, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = r
                })
            }
            return e
        }({
            video_layout: v ? "popout" : C
        }, (0, o.QS)(e.id))), () => {
            v && (0, b.isMac)() || t(C)
        }
    }, [C, v]), l.useEffect(() => {
        null != P && E.current === y._Of.VIDEO && S === y._Of.VOICE && (0, A.sP)(P, T)
    }, [T, S, E, P]), l.useEffect(() => {
        !I && v && s.h.wait(() => h.close(y.MLl.CHANNEL_CALL_POPOUT))
    }, [I, v]), R) ? (0, r.jsx)(p.A, {
        themeable: !1,
        node: P,
        guestWindow: _,
        onClick: M(C)
    }) : null
}