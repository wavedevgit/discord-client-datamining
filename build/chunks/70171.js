/** chunk id: 70171 params = (module,exports,require) **/
n.d(t, {
    A: () => C
});
var i = n(627968),
    l = n(64700),
    a = n(687498),
    s = n(311907),
    r = n(582754),
    o = n(397927),
    c = n(164617),
    d = n(274372),
    u = n(399925),
    h = n(361157),
    m = n(652896),
    A = n(750506),
    g = n(172914);
let p = {
        visibility: "hidden"
    },
    _ = {
        precision: 1e-4,
        duration: 300
    },
    f = {
        tension: 150,
        friction: 20,
        precision: 1e-4,
        bounce: 0
    },
    E = {
        duration: 1e3
    };

function C(e) {
    let {
        stream: t,
        popoutType: n
    } = e, {
        reducedMotion: C
    } = l.useContext(r.CZ), x = (0, l.useRef)(null), S = h.K.getState().clipsButtonRef, I = (0, m._z)(t), T = (0, s.bG)([d.A], () => d.A.getActiveAnimation()), v = (0, s.yK)([d.A], () => d.A.getStreamClipAnimations(I)), N = (0, l.useRef)(void 0);
    l.useEffect(() => () => {
        (0, u.MI)(I)
    }, [I]);
    let y = e => {
            if (n !== c.N.NO_POPOUT) return p;
            let t = S?.getBoundingClientRect();
            if (N.current = t, e.timestamp !== T || null == t) return p;
            let {
                top: i,
                left: l
            } = t;
            return {
                top: i + 36,
                left: l - 216,
                height: 151,
                width: 268
            }
        },
        b = (0, l.useRef)(null),
        j = (0, o.pnh)(v, {
            keys: e => e.timestamp,
            ref: b,
            from: {
                opacity: .2
            },
            enter: {
                opacity: 0
            },
            config: _
        }, "animate-always"),
        R = (0, l.useRef)(null),
        M = (0, o.pnh)(v, {
            ref: R,
            keys: e => e.timestamp,
            from: e => ({
                position: "fixed",
                visibility: "hidden",
                opacity: 1,
                ...C.enabled ? y(e) : (() => {
                    if (n !== c.N.NO_POPOUT) return p;
                    let e = x.current?.getBoundingClientRect();
                    return null == e ? p : {
                        width: e.width,
                        height: e.height,
                        top: e.top,
                        left: e.left
                    }
                })()
            }),
            enter: e => [{
                opacity: 1,
                visibility: "visible",
                ...y(e)
            }],
            leave: {
                opacity: 0,
                ...!C.enabled && {
                    height: 0,
                    width: 0,
                    ...(() => {
                        if (null != N.current) return {
                            top: N.current.top + 12,
                            left: N.current.left + 12
                        }
                    })()
                }
            },
            config: C.enabled ? E : f,
            onRest: (e, t) => {
                null != t.item && null != v.find(e => e.timestamp === t.item.timestamp) && (0, u.MI)(I, t.item.timestamp)
            }
        }, "animate-always");
    return (0, a.useChain)([b, R], [0, .1], 3e3), (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)("div", {
            className: g.R,
            ref: x
        }), j((e, t) => null != t && (0, i.jsx)(a.animated.div, {
            className: g.w5,
            style: e
        })), (0, i.jsx)(A.Ay, {
            children: (0, i.jsx)("div", {
                className: g.R,
                children: M((e, t, n, l) => t?.thumbnail != null && (0, i.jsx)(a.animated.img, {
                    src: t.thumbnail,
                    className: g.yI,
                    style: e
                }))
            })
        })]
    })
}