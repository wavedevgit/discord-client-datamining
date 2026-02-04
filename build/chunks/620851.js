/** chunk id: 620851, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => g
}), n(896048), n(65821);
var i = n(627968),
    r = n(64700),
    l = n(503698),
    a = n.n(l),
    o = n(812729),
    s = n.n(o),
    u = n(92674),
    c = n(397927),
    d = n(259788),
    h = n(302614),
    p = n(751747);
let f = {
    mass: 1,
    tension: 600,
    friction: 60,
    clamp: !0
};

function g(e) {
    let {
        locked: t,
        pinned: n
    } = e, [l, o] = r.useState(0), [g, m] = r.useState(0), [A, y] = r.useState(0), O = r.useRef(0), [v, b] = r.useState(0), {
        timeToLiveMs: E,
        reappearTimeMs: _
    } = d.Ay.useState(e => ({
        timeToLiveMs: e.timeToLiveMs,
        reappearTimeMs: e.reappearTimeMs
    }), s()), S = {
        timeToLiveMs: E,
        reappearTimeMs: _
    }, x = r.useRef(S);
    r.useEffect(() => {
        x.current = S
    }), r.useEffect(() => (O.current = setInterval(() => {
        let e = Date.now();
        m(e), y(t => {
            if (0 === t) return e;
            let n = e - t,
                i = x.current.timeToLiveMs,
                r = i + x.current.reappearTimeMs;
            return n > i ? t + r : t
        })
    }, 100), () => {
        clearInterval(O.current)
    }), []);
    let I = () => {
            o(Date.now()), b(e => e + 1)
        },
        j = l > 0 && g - l < 1e3,
        C = (0, c.pnh)(A > 0 && A < g && g - A < E, {
            from: {
                opacity: 0
            },
            enter: {
                opacity: 1
            },
            leave: {
                opacity: 0
            },
            config: f
        }),
        [T, w] = r.useState(!1);
    if (r.useEffect(() => {
            v > 10 && w(!0)
        }, [v]), T) throw Error("ClickZoneDebugWidget crashed, too many clicks");
    return t && !n ? null : (0, i.jsx)(i.Fragment, {
        children: C((e, t) => t && (0, i.jsx)(u.animated.div, {
            style: e,
            className: p.r2,
            children: (0, i.jsx)(h.A, {
                className: a()(p.VC, j && p.Nd),
                children: (0, i.jsx)(c.DUT, {
                    onClick: I,
                    className: p.vk,
                    children: (0, i.jsxs)(c.Text, {
                        variant: "text-md/semibold",
                        color: "always-white",
                        children: ["Click Me (", v, ")"]
                    })
                })
            })
        }))
    })
}