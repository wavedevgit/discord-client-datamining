/** chunk id: 999235, original params: t,e,n (module,exports,require) **/
n.d(e, {
    default: () => p
}), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(417597),
    c = n(397927),
    u = n(775602),
    s = n(954571),
    o = n(178186),
    l = n(431804),
    _ = n(652215),
    d = n(985018),
    I = n(236103);

function p(t) {
    let {
        onClose: e,
        source: n = l.y.KEYBIND,
        transitionState: p
    } = t, f = (0, a.bG)([u.A], () => u.A.useReducedMotion), [S, U] = i.useState(f), h = i.useRef(null), A = i.useRef(null);
    async function N() {
        await e()
    }
    return i.useEffect(() => {
        let t = new Date;
        return s.default.track(_.HAw.VIBING_WUMPUS_VIEWED, {
            source: n
        }), f || (0, o.q0)(), () => {
            s.default.track(_.HAw.VIBING_WUMPUS_CLOSED, {
                duration_open_ms: new Date().getTime() - t.getTime(),
                source: n
            }), (0, o.S9)()
        }
    }, [n]), (0, r.jsxs)("div", {
        className: I._q,
        children: [(0, r.jsx)(c.Rfp, {
            withReducedMotion: "halt",
            listenOnDocumentBody: !0,
            artboard: "Background",
            ref: A,
            className: I.JW
        }), (0, r.jsx)(c.kpP, {
            graphic: {
                rive: c.Zd_,
                type: "rive",
                props: {
                    ref: h,
                    withReducedMotion: "halt"
                }
            },
            gradientColor: "blue",
            title: d.intl.string(d.t.L4ifkZ),
            subtitle: d.intl.string(d.t.GkCsLr),
            actions: [{
                text: d.intl.string(d.t["8eKkaf"]),
                onClick: () => {
                    e(), s.default.track(_.HAw.VIBING_WUMPUS_ACTION, {
                        action: l.r.BACK_TO_CONVERSATION
                    })
                },
                variant: "secondary"
            }, {
                text: d.intl.string(S ? d.t.RscU7I : d.t.ZcgDJX),
                onClick: () => {
                    var t, e, n, r;
                    S ? ((0, o.q0)(), s.default.track(_.HAw.VIBING_WUMPUS_ACTION, {
                        action: l.r.PLAY
                    }), null == (t = h.current) || t.play(), null == (e = A.current) || e.play()) : ((0, o.O$)(), s.default.track(_.HAw.VIBING_WUMPUS_ACTION, {
                        action: l.r.PAUSE
                    }), null == (n = h.current) || n.pause(), null == (r = A.current) || r.pause()), U(!S)
                },
                icon: S ? c.udU : c.E$n
            }],
            onClose: N,
            transitionState: p
        })]
    })
}