/** chunk id: 960005 params = (module,exports,require) **/
n.d(t, {
    A: () => u
});
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(497766),
    o = n(397927),
    d = n(180022),
    c = n(765835);
let u = e => {
    let {
        cards: t,
        className: n,
        cardType: l
    } = e, u = () => window.innerWidth < 910 ? 1 : window.innerWidth < 1400 ? 2 : 3, [_, m] = s.useState(0), [g, A] = s.useState(u()), x = t.length;
    s.useEffect(() => {
        let e = () => {
            A(u())
        };
        return window.addEventListener("resize", e), () => {
            window.removeEventListener("resize", e)
        }
    }, []), s.useEffect(() => {
        m(e => x > g && e > x - g ? x - g : x <= g ? 0 : e)
    }, [x, g]);
    let h = _ > 0,
        p = s.useCallback(e => ({
            x: (e - _) * 100
        }), [_]),
        [T, E] = (0, o.mX6)(t.length, p);
    return s.useEffect(() => {
        E(p)
    }, [E, p]), (0, i.jsx)("div", {
        className: n,
        children: (0, i.jsxs)("div", {
            className: c.Ui,
            children: [x > g && (0, i.jsx)(o.DUT, {
                onClick: h ? () => {
                    m(e => 0 === e ? x - g : e - 1)
                } : void 0,
                className: a()({
                    [c.v5]: h,
                    [c.$T]: !h
                }),
                children: (0, i.jsx)(o.rJJ, {
                    className: c.D6,
                    colorClass: c.D6
                })
            }), (0, i.jsx)("div", {
                className: c.C8,
                children: T.map((e, n) => {
                    let {
                        x: s
                    } = e;
                    return (0, i.jsx)(r.animated.div, {
                        className: c.Nr,
                        style: {
                            transform: s?.to(e => `translate3d(${e}%,0,0)`)
                        },
                        children: (0, i.jsx)(d.A, {
                            ...t[n],
                            cardType: l
                        }, `${t[n].name}_${n}_perks_card`)
                    }, `${t[n].name}_${n}_animated_div`)
                })
            }), x > g && (0, i.jsx)(o.DUT, {
                onClick: () => {
                    m(e => e >= x - g ? 0 : e + 1)
                },
                className: c.Ox,
                children: (0, i.jsx)(o.EdP, {
                    className: c.D6,
                    colorClass: c.D6
                })
            }), x > g && (0, i.jsx)("div", {
                className: c.$$,
                children: t.map((e, t) => {
                    if (!(t > x - g)) return (0, i.jsx)("div", {
                        className: t === _ ? c.fc : c.Om
                    }, `progress_bar_dot_${t}`)
                })
            })]
        })
    })
}