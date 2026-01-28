/** Chunk was on 78528 **/
/** chunk id: 542372, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => _
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
    p = n(574172),
    h = n(423562),
    f = n(309010),
    g = n(954571),
    m = n(203982),
    b = n(723702),
    A = n(475815),
    y = n(652215);

function _(e) {
    let {
        channel: t,
        appContext: n,
        popoutOpen: _,
        popoutWindow: O,
        currentWindow: j
    } = e, {
        parentAnalyticsLocation: v
    } = (0, c.Ay)(), x = n === y.BRT.POPOUT, E = l.useRef(null), {
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
    }, [t, n]), I = (0, i.bG)([f.A], () => f.A.getVoiceChannelId() === t.id, [t.id]);
    l.useEffect(() => {
        E.current = S
    });
    let N = l.useRef(C),
        {
            currentDocument: T,
            rootNode: P
        } = l.useMemo(() => {
            let e = null != O && x ? O.document : document,
                t = j.document.getElementById("app-mount");
            return {
                currentWindow: j,
                currentDocument: e,
                rootNode: t
            }
        }, [O, x, j]),
        w = _ && !x,
        R = S === y._Of.VIDEO && I && !w,
        D = l.useCallback((e, r) => {
            r !== e && (a.A.updateLayout(t.id, r, n), r === y.DUB.FULL_SCREEN && t.isPrivate() && m._.dispatch(y.jej.TEXTAREA_BLUR))
        }, [n, t]),
        M = l.useCallback(e => {
            null == P || e === y.DUB.FULL_SCREEN && (D(e, N.current), (0, A.sP)(e => {
                N.current = e
            }, T))
        }, [T, D, P]),
        L = l.useCallback(e => () => {
            null != P && ((0, d.X)(v, d.O.FULL_SCREEN, e !== y.DUB.FULL_SCREEN), e !== y.DUB.FULL_SCREEN ? (N.current = e, D(e, y.DUB.FULL_SCREEN), (0, A.tl)(P)) : M(e))
        }, [D, M, P, v]);
    l.useEffect(() => {
        let e = () => {
            null != P && ((0, A._U)(P, T) || C !== y.DUB.FULL_SCREEN || L(C)())
        };
        return T.addEventListener(A.Wb, e), () => {
            T.removeEventListener(A.Wb, e)
        }
    }, [T, C, L, P]);
    let k = {
            channel: t,
            maybeLeaveFullScreen: M
        },
        U = l.useRef(k);
    return (l.useEffect(() => {
        U.current = k
    }), l.useEffect(() => {
        let {
            channel: e,
            maybeLeaveFullScreen: t
        } = U.current;
        return g.default.track(y.HAw.VIDEO_LAYOUT_TOGGLED, function(e) {
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
            video_layout: x ? "popout" : C
        }, (0, o.QS)(e.id))), () => {
            x && (0, b.isMac)() || t(C)
        }
    }, [C, x]), l.useEffect(() => {
        null != P && E.current === y._Of.VIDEO && S === y._Of.VOICE && (0, A.sP)(P, T)
    }, [T, S, E, P]), l.useEffect(() => {
        !I && x && s.h.wait(() => p.close(y.MLl.CHANNEL_CALL_POPOUT))
    }, [I, x]), R) ? (0, r.jsx)(h.A, {
        themeable: !1,
        node: P,
        guestWindow: O,
        onClick: L(C)
    }) : null
}