/** Chunk was on web.js **/
/** chunk id: 209973, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => R
});
var r = n(627968),
    i = n(64700),
    a = n(299619),
    s = n(158954),
    o = n(311907),
    l = n(499979),
    c = n(397927),
    u = n(775602),
    d = n(854987),
    f = n(719718),
    p = n(57882),
    _ = n(109138),
    h = n(771273),
    m = n(818947),
    g = n(155286),
    E = n(573138),
    y = n(182417),
    b = n(877272),
    O = n(359588),
    v = n(532294),
    A = n(622865),
    I = n(985018),
    S = n(308021),
    T = n(86369),
    C = n(65e4);
let N = 100,
    w = 1;

function R() {
    let {
        voice: {
            totalVoiceMinutes: e,
            totalVoiceMinutesPercentile: t,
            topMonth: {
                month: n
            }
        } = {
            totalVoiceMinutes: 0,
            totalVoiceMinutesPercentile: 0,
            topMonth: {
                month: 0
            }
        }
    } = (0, o.bG)([f.A], () => f.A.getCheckpointData()), {
        duration: R,
        unit: P
    } = (0, p.oO)(e), D = P === l.pJ.HOURS, x = i.useContext(h.GD), L = i.useRef(null), j = i.useContext(y.Aq), M = i.useContext(d.P), k = (0, c.rdh)(M.primaryColor).hex(), U = (0, o.bG)([u.A], () => u.A.useReducedMotion), G = i.useCallback(e => {
        let t = L.current;
        if (null == t || t.readyState < HTMLMediaElement.HAVE_CURRENT_DATA) return;
        let n = 0,
            r = 1,
            i = 0;
        null == j || j((e, t) => (t === v.P7.VOICE && (n = Math.max(e.opacity.get(), 0), r = e.backgroundScale.get(), i = e.backgroundY.get()), null));
        let {
            canvas: a,
            context: s
        } = e.detail;
        s.save(), s.globalAlpha = n, s.globalCompositeOperation = "screen";
        let o = a.width / 2,
            l = a.height / 2;
        s.translate(o, l), s.scale(r, r), s.translate(-o, -l), s.translate(0, i), (0, _.A)(t, a, s, N), s.restore()
    }, [j]);
    i.useEffect(() => (x.addEventListener("frame", G), () => x.removeEventListener("frame", G)), [x, G]), i.useEffect(() => {
        null != L.current && U && (L.current.currentTime = w)
    }, [U]);
    let {
        monthName: V
    } = (0, p.od)(n, I.intl.currentLocale), F = null != t;
    return (0, r.jsxs)(E.A, {
        children: [(0, r.jsx)(a.A, {
            autoPlay: !U,
            muted: !0,
            loop: !0,
            playsInline: !0,
            className: T.R,
            ref: L,
            "aria-hidden": !0,
            children: (0, r.jsx)("source", {
                src: C.A,
                type: "video/webm"
            })
        }), (0, r.jsxs)("div", {
            className: T.Qs,
            children: [(0, r.jsxs)("div", {
                className: S.DD,
                children: [(0, r.jsx)(s.cNw, {
                    size: "refresh_sm",
                    color: k,
                    className: S.gr,
                    colorClass: S.d7
                }), D ? (0, r.jsx)(b.A, {
                    variant: "eyebrow",
                    className: S.UP,
                    children: I.intl.format(A.default.Xu0QsX, {
                        numHours: R
                    })
                }) : (0, r.jsx)(b.A, {
                    variant: "eyebrow",
                    className: S.UP,
                    children: I.intl.format(A.default.UZbUtl, {
                        numMinutes: R
                    })
                })]
            }), (0, r.jsx)(O.A, {
                end: R,
                alignment: "center"
            }), (0, r.jsx)(b.A, {
                variant: "heading-xxl/medium",
                className: T.VA,
                children: F ? I.intl.format(A.default["36PZwu"], {
                    percent: 100 - t,
                    percentHook: (e, t) => (0, r.jsx)(m.A, {
                        children: e
                    }, t)
                }) : I.intl.format(A.default.VaydtR, {
                    month: V,
                    monthHook: (e, t) => (0, r.jsx)(m.A, {
                        children: e
                    }, t)
                })
            }), (0, r.jsx)(g.e, {
                slide: v.P7.VOICE
            })]
        })]
    })
}