/** chunk id: 620851, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => p
});
var i = n(627968),
    l = n(64700),
    r = n(503698),
    s = n.n(r),
    a = n(812729),
    o = n.n(a),
    u = n(475539),
    d = n(397927),
    c = n(259788),
    h = n(302614),
    m = n(751747);
let g = {
    mass: 1,
    tension: 600,
    friction: 60,
    clamp: !0
};

function p(e) {
    let {
        locked: t,
        pinned: n
    } = e, [r, a] = l.useState(0), [p, A] = l.useState(0), [f, x] = l.useState(0), E = l.useRef(0), [S, v] = l.useState(0), {
        timeToLiveMs: C,
        reappearTimeMs: I
    } = c.Ay.useState(e => ({
        timeToLiveMs: e.timeToLiveMs,
        reappearTimeMs: e.reappearTimeMs
    }), o()), T = {
        timeToLiveMs: C,
        reappearTimeMs: I
    }, _ = l.useRef(T);
    l.useEffect(() => {
        _.current = T
    }), l.useEffect(() => (E.current = setInterval(() => {
        let e = Date.now();
        A(e), x(t => {
            if (0 === t) return e;
            let n = e - t,
                i = _.current.timeToLiveMs,
                l = i + _.current.reappearTimeMs;
            return n > i ? t + l : t
        })
    }, 100), () => {
        clearInterval(E.current)
    }), []);
    let y = () => {
            a(Date.now()), v(e => e + 1)
        },
        j = r > 0 && p - r < 1e3,
        b = (0, d.pnh)(f > 0 && f < p && p - f < C, {
            from: {
                opacity: 0
            },
            enter: {
                opacity: 1
            },
            leave: {
                opacity: 0
            },
            config: g
        }),
        [w, O] = l.useState(!1);
    if (l.useEffect(() => {
            S > 10 && O(!0)
        }, [S]), w) throw Error("ClickZoneDebugWidget crashed, too many clicks");
    return t && !n ? null : (0, i.jsx)(i.Fragment, {
        children: b((e, t) => t && (0, i.jsx)(u.animated.div, {
            style: e,
            className: m.r2,
            children: (0, i.jsx)(h.A, {
                className: s()(m.VC, j && m.Nd),
                children: (0, i.jsx)(d.DUT, {
                    onClick: y,
                    className: m.vk,
                    children: (0, i.jsxs)(d.Text, {
                        variant: "text-md/semibold",
                        color: "always-white",
                        children: ["Click Me (", S, ")"]
                    })
                })
            })
        }))
    })
}