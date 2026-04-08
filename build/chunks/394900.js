/** chunk id: 394900 params = (module,exports,require) **/
n.d(t, {
    L: () => a,
    s: () => o
});
var i = n(64700),
    l = n(397927),
    s = n(770178),
    r = n(765548);

function a() {
    let [e, t] = i.useState("lg"), [n, l] = i.useState(void 0), a = (0, r.A)(e => {
        let n = e.target,
            i = e.contentRect.width;
        return (l(n.scrollHeight), null == i || i > 460) ? t("lg") : i > 280 ? t("sm") : t("xs")
    });
    return {
        containerRef: (0, s.w)(a),
        size: e,
        height: n
    }
}

function o(e) {
    let {
        initiallyExpanded: t
    } = e, [n, s] = i.useState(t), [r, a] = i.useState(!1), o = i.useCallback(() => {
        s(e => !e), a(!0)
    }, []), {
        expansionSpring: d
    } = (0, l.zhh)({
        expansionSpring: +!!n,
        config: {
            tension: 450,
            friction: 45
        },
        onRest: () => a(!1)
    });
    return {
        expansionSpring: d,
        isAnimating: r,
        isExpanded: n,
        toggleExpanded: o
    }
}
n(433745)