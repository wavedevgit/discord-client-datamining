/** chunk id: 394900 params = (module,exports,require) **/
n.d(t, {
    L: () => a,
    s: () => o
});
var i = n(64700),
    l = n(397927),
    r = n(770178),
    s = n(765548);

function a() {
    let [e, t] = i.useState("lg"), [n, l] = i.useState(void 0), a = (0, s.A)(e => {
        let n = e.target,
            i = e.contentRect.width;
        return (l(n.scrollHeight), null == i || i > 460) ? t("lg") : i > 280 ? t("sm") : t("xs")
    });
    return {
        containerRef: (0, r.w)(a),
        size: e,
        height: n
    }
}

function o(e) {
    let {
        initiallyExpanded: t
    } = e, [n, r] = i.useState(t), [s, a] = i.useState(!1), o = i.useCallback(() => {
        r(e => !e), a(!0)
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
        isAnimating: s,
        isExpanded: n,
        toggleExpanded: o
    }
}
n(433745)