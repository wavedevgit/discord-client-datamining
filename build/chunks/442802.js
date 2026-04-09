/** chunk id: 442802 params = (module,exports,require) **/
n.d(t, {
    A: () => c
});
var i = n(627968),
    a = n(64700),
    r = n(106778);
let l = [n(426560)],
    s = ["#FFFFFF"],
    o = 1e3 / 60,
    d = {
        velocity: {
            type: "static-random",
            minValue: {
                x: 0,
                y: 1
            },
            maxValue: {
                x: 3,
                y: 3
            }
        },
        rotation: {
            type: "linear-random",
            minValue: {
                x: 0,
                y: 0,
                z: 0
            },
            maxValue: {
                x: 0,
                y: 0,
                z: 360
            },
            minAddValue: {
                x: 0,
                y: 0,
                z: -5
            },
            maxAddValue: {
                x: 0,
                y: 0,
                z: 5
            }
        },
        size: {
            type: "static-random",
            minValue: 2,
            maxValue: 6
        },
        dragCoefficient: {
            type: "static",
            value: 830
        },
        opacity: {
            type: "static",
            value: .3
        }
    };

function c(e) {
    let {
        className: t,
        firing: n = !0,
        wind: c = 2,
        sprites: u = l,
        spriteColors: A = s,
        confettiConfig: _
    } = e, [h, m] = a.useState(null), [g, p] = a.useState(null), E = (0, r.f9)(g, h), I = a.useMemo(() => new r.OH({
        wind: c
    }), [c]), f = a.useCallback(() => {
        let e = g?.getCanvas();
        if (null == e) return;
        let t = e.getBoundingClientRect();
        E.createConfetti({
            ...d,
            ..._,
            position: {
                type: "static-random",
                minValue: {
                    x: -t.width / 2,
                    y: -6
                },
                maxValue: {
                    x: t.width,
                    y: -6
                }
            }
        })
    }, [E, g, _]);
    return a.useEffect(() => {
        let e = n ? setInterval(f, o) : null;
        return () => clearInterval(e)
    }, [n, f]), (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(r.Fk, {
            ref: p,
            className: t,
            environment: I
        }), (0, i.jsx)(r.K_, {
            ref: m,
            colors: A,
            sprites: u,
            spriteWidth: 6,
            spriteHeight: 6
        })]
    })
}