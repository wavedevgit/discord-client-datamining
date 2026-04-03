/** chunk id: 972441 params = (module,exports,require) **/
n.d(t, {
    A: () => u
});
var r = n(64700),
    l = n(158954),
    a = n(61491),
    i = n(770178),
    s = n(765548),
    o = n(650583);

function u(e) {
    let {
        onScrubBack: t,
        onScrubForward: n,
        maxSeekableTime: u,
        interactionEnabled: d,
        durationSec: c,
        onClick: m,
        percent: h
    } = e, [p, f] = r.useState(null), [x, b] = r.useState(null), [E, v] = r.useState(!1), {
        i18n: g
    } = (0, l.G98)(), y = r.useMemo(() => {
        let e = {
            role: "progressbar",
            "aria-label": "Progress Bar"
        };
        return null != h && "number" == typeof h && (e["aria-valuenow"] = h, e["aria-valuemin"] = 0, e["aria-valuemax"] = 100, e["aria-label"] = g.PERCENT_COMPLETE(Math.round(h))), e
    }, [h, g]), S = r.useMemo(() => null == p || null == u ? null : (0, a.DX)(u, c, p), [p, u, c]), C = (0, s.A)(e => {
        f(e.contentRect)
    }), A = (0, i.w)(C), N = e => {
        null != A.current && b(e.clientX - A.current.getBoundingClientRect().left)
    };
    return {
        contRef: A,
        boundingRect: p,
        handleMouseEnter: e => {
            d && (v(!0), N(e))
        },
        handleMouseLeave: e => {
            d && (v(!1), b(null))
        },
        handleMouseMove: e => {
            d && E && N(e)
        },
        handleKeyDown: r.useCallback(e => {
            let {
                key: r
            } = e;
            r === o.N$.ArrowLeft && null != t ? (e.preventDefault(), e.stopPropagation(), t()) : r === o.N$.ArrowRight && null != n && (e.preventDefault(), e.stopPropagation(), n())
        }, [t, n]),
        hoveredAtX: x,
        maxSeekableX: S,
        isHovering: E,
        handleClick: e => {
            if (!d || null == m) return;
            let t = e.currentTarget.getBoundingClientRect(),
                n = e.clientX - t.left,
                r = (0, a.hc)(n, t, c);
            m(null != u ? Math.min(r, u) : r)
        },
        ariaProps: y
    }
}