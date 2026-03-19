/** chunk id: 18366 params = (module,exports,require) **/
n.d(t, {
    A: () => a
}), n(321073);
var r = n(627968),
    s = n(64700),
    i = n(397927);
let l = [{
    position: 0,
    alpha: 0
}, {
    position: .19,
    alpha: .262
}, {
    position: .34,
    alpha: .459
}, {
    position: .47,
    alpha: .618
}, {
    position: .57,
    alpha: .722
}, {
    position: .65,
    alpha: .806
}, {
    position: .73,
    alpha: .874
}, {
    position: .8,
    alpha: .925
}, {
    position: .86,
    alpha: .958
}, {
    position: .91,
    alpha: .979
}, {
    position: .95,
    alpha: .992
}, {
    position: .98,
    alpha: .998
}, {
    position: 1,
    alpha: 1
}];

function a(e) {
    let {
        className: t,
        children: n,
        containerRef: a,
        faderSize: o,
        faderEdgeThreshold: d
    } = e, c = s.useRef(null), [u, _] = s.useState(0), [h, m] = s.useState(0), [f, E] = s.useState(0), x = s.useCallback(() => {
        null != c.current && (_(c.current.getDistanceFromTop()), m(c.current.getDistanceFromBottom()), E(c.current.getScrollerState().offsetHeight))
    }, []);
    s.useEffect(() => {
        if (x(), null == a.current) return;
        let e = new ResizeObserver(() => {
            x()
        });
        return e.observe(a.current), () => {
            e.disconnect()
        }
    }, [c, a, x]);
    let p = s.useMemo(() => {
        if (0 === u && 0 === h) return {};
        let e = [];
        if (e.push("to bottom"), u > 0) {
            let t = d > 0 ? 1 - Math.min(d, u) / d : 1;
            for (let n = 0; n < l.length; n++) {
                let {
                    position: r,
                    alpha: s
                } = l[n], i = (r * o).toFixed(2);
                e.push(`hsla(0, 0%, 0%, ${t+s*(1-t)}) ${i}px`)
            }
        }
        if (h > 0) {
            let t = f - o,
                n = d > 0 ? 1 - Math.min(d, h) / d : 1;
            for (let r = l.length - 1; r >= 0; r--) {
                let {
                    position: s,
                    alpha: i
                } = l[r], a = (t + (1 - s) * o).toFixed(2);
                e.push(`hsla(0, 0%, 0%, ${n+i*(1-n)}) ${a}px`)
            }
        }
        return {
            maskImage: `linear-gradient(${e.join(",")})`
        }
    }, [h, u, d, o, f]);
    return (0, r.jsx)(i.zCo, {
        ref: c,
        style: p,
        className: t,
        onScroll: x,
        children: n
    })
}