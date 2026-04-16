/** chunk id: 620851 params = (module,exports,require) **/
n.d(t, {
    A: () => f
});
var i = n(627968),
    r = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(812729),
    o = n.n(a),
    u = n(407045),
    d = n(397927),
    c = n(259788),
    h = n(302614),
    g = n(639198);
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
    } = e, [l, a] = r.useState(0), [f, A] = r.useState(0), [I, E] = r.useState(0), p = r.useRef(0), [_, S] = r.useState(0), {
        timeToLiveMs: x,
        reappearTimeMs: T
    } = c.Ay.useState(e => ({
        timeToLiveMs: e.timeToLiveMs,
        reappearTimeMs: e.reappearTimeMs
    }), o()), C = {
        timeToLiveMs: x,
        reappearTimeMs: T
    }, N = r.useRef(C);
    r.useEffect(() => {
        N.current = C
    }), r.useEffect(() => (p.current = setInterval(() => {
        let e = Date.now();
        A(e), E(t => {
            if (0 === t) return e;
            let n = e - t,
                i = N.current.timeToLiveMs,
                r = i + N.current.reappearTimeMs;
            return n > i ? t + r : t
        })
    }, 100), () => {
        clearInterval(p.current)
    }), []);
    let v = () => {
            a(Date.now()), S(e => e + 1)
        },
        y = l > 0 && f - l < 1e3,
        M = (0, d.pnh)(I > 0 && I < f && f - I < x, {
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
        [b, R] = r.useState(!1);
    if (r.useEffect(() => {
            _ > 10 && R(!0)
        }, [_]), b) throw Error("ClickZoneDebugWidget crashed, too many clicks");
    return t && !n ? null : (0, i.jsx)(i.Fragment, {
        children: M((e, t) => t && (0, i.jsx)(u.animated.div, {
            style: e,
            className: g.r2,
            children: (0, i.jsx)(h.A, {
                className: s()(g.VC, y && g.Nd),
                children: (0, i.jsx)(d.DUT, {
                    onClick: v,
                    className: g.vk,
                    children: (0, i.jsxs)(d.Text, {
                        variant: "text-md/semibold",
                        color: "always-white",
                        children: ["Click Me (", _, ")"]
                    })
                })
            })
        }))
    })
}