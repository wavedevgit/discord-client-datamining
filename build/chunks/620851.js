/** chunk id: 620851 params = (module,exports,require) **/
n.d(t, {
    A: () => f
});
var i = n(627968),
    a = n(64700),
    r = n(503698),
    l = n.n(r),
    s = n(812729),
    o = n.n(s),
    d = n(687498),
    c = n(397927),
    u = n(259788),
    _ = n(302614),
    h = n(594446);
let m = {
    mass: 1,
    tension: 600,
    friction: 60,
    clamp: !0
};

function f(e) {
    let {
        locked: t,
        pinned: n
    } = e, [r, s] = a.useState(0), [f, g] = a.useState(0), [p, A] = a.useState(0), E = a.useRef(0), [I, x] = a.useState(0), {
        timeToLiveMs: b,
        reappearTimeMs: v
    } = u.Ay.useState(e => ({
        timeToLiveMs: e.timeToLiveMs,
        reappearTimeMs: e.reappearTimeMs
    }), o()), S = {
        timeToLiveMs: b,
        reappearTimeMs: v
    }, C = a.useRef(S);
    a.useEffect(() => {
        C.current = S
    }), a.useEffect(() => (E.current = setInterval(() => {
        let e = Date.now();
        g(e), A(t => {
            if (0 === t) return e;
            let n = e - t,
                i = C.current.timeToLiveMs,
                a = i + C.current.reappearTimeMs;
            return n > i ? t + a : t
        })
    }, 100), () => {
        clearInterval(E.current)
    }), []);
    let T = () => {
            s(Date.now()), x(e => e + 1)
        },
        y = r > 0 && f - r < 1e3,
        N = (0, c.pnh)(p > 0 && p < f && f - p < b, {
            from: {
                opacity: 0
            },
            enter: {
                opacity: 1
            },
            leave: {
                opacity: 0
            },
            config: m
        }),
        [w, L] = a.useState(!1);
    if (a.useEffect(() => {
            I > 10 && L(!0)
        }, [I]), w) throw Error("ClickZoneDebugWidget crashed, too many clicks");
    return t && !n ? null : (0, i.jsx)(i.Fragment, {
        children: N((e, t) => t && (0, i.jsx)(d.animated.div, {
            style: e,
            className: h.r2,
            children: (0, i.jsx)(_.A, {
                className: l()(h.VC, y && h.Nd),
                children: (0, i.jsx)(c.DUT, {
                    onClick: T,
                    className: h.vk,
                    children: (0, i.jsxs)(c.Text, {
                        variant: "text-md/semibold",
                        color: "always-white",
                        children: ["Click Me (", I, ")"]
                    })
                })
            })
        }))
    })
}