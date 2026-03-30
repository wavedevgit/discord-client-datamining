/** chunk id: 542372 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => E
});
var i = n(627968),
    s = n(64700),
    l = n(311907),
    a = n(73153),
    r = n(367513),
    o = n(58149),
    c = n(688810),
    d = n(313961),
    u = n(384059),
    h = n(574172),
    A = n(423562),
    m = n(309010),
    _ = n(954571),
    g = n(203982),
    p = n(723702),
    f = n(475815),
    x = n(652215);

function E(e) {
    let {
        channel: t,
        appContext: n,
        popoutOpen: E,
        popoutWindow: C,
        currentWindow: I
    } = e, {
        parentAnalyticsLocation: N
    } = (0, c.Ay)(), S = n === x.BRT.POPOUT, b = s.useRef(null), {
        currentLayout: T,
        mode: v
    } = (0, l.cf)([d.A], () => {
        let e = d.A.getMode(t.id),
            i = n === x.BRT.POPOUT;
        i && (e = x._Of.VIDEO);
        let s = e === x._Of.VIDEO ? d.A.getLayout(t.id, n) : x.DUB.MINIMUM;
        return i && s !== x.DUB.FULL_SCREEN && (s = x.DUB.NO_CHAT), {
            currentLayout: s,
            mode: e
        }
    }, [t, n]), y = (0, l.bG)([m.A], () => m.A.getVoiceChannelId() === t.id, [t.id]);
    s.useEffect(() => {
        b.current = v
    });
    let j = s.useRef(T),
        {
            currentDocument: R,
            rootNode: O
        } = s.useMemo(() => {
            let e = null != C && S ? C.document : document,
                t = I.document.getElementById("app-mount");
            return {
                currentWindow: I,
                currentDocument: e,
                rootNode: t
            }
        }, [C, S, I]),
        L = E && !S,
        M = v === x._Of.VIDEO && y && !L,
        D = s.useCallback((e, i) => {
            i !== e && (r.A.updateLayout(t.id, i, n), i === x.DUB.FULL_SCREEN && t.isPrivate() && g._.dispatch(x.jej.TEXTAREA_BLUR))
        }, [n, t]),
        G = s.useCallback(e => {
            null == O || e === x.DUB.FULL_SCREEN && (D(e, j.current), (0, f.sP)(e => {
                j.current = e
            }, R))
        }, [R, D, O]),
        U = s.useCallback(e => () => {
            null != O && ((0, u.X)(N, u.O.FULL_SCREEN, e !== x.DUB.FULL_SCREEN), e !== x.DUB.FULL_SCREEN ? (j.current = e, D(e, x.DUB.FULL_SCREEN), (0, f.tl)(O)) : G(e))
        }, [D, G, O, N]);
    s.useEffect(() => {
        let e = () => {
            null != O && ((0, f._U)(O, R) || T !== x.DUB.FULL_SCREEN || U(T)())
        };
        return R.addEventListener(f.Wb, e), () => {
            R.removeEventListener(f.Wb, e)
        }
    }, [R, T, U, O]);
    let P = {
            channel: t,
            maybeLeaveFullScreen: G
        },
        w = s.useRef(P);
    return (s.useEffect(() => {
        w.current = P
    }), s.useEffect(() => {
        let {
            channel: e,
            maybeLeaveFullScreen: t
        } = w.current;
        return _.default.track(x.HAw.VIDEO_LAYOUT_TOGGLED, {
            video_layout: S ? "popout" : T,
            ...(0, o.QS)(e.id)
        }), () => {
            S && (0, p.isMac)() || t(T)
        }
    }, [T, S]), s.useEffect(() => {
        null != O && b.current === x._Of.VIDEO && v === x._Of.VOICE && (0, f.sP)(O, R)
    }, [R, v, b, O]), s.useEffect(() => {
        !y && S && a.h.wait(() => h.close(x.MLl.CHANNEL_CALL_POPOUT))
    }, [y, S]), M) ? (0, i.jsx)(A.A, {
        themeable: !1,
        node: O,
        guestWindow: C,
        onClick: U(T)
    }) : null
}