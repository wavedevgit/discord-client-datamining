/** chunk id: 394900 params = (module,exports,require) **/
n.d(t, {
    L: () => s,
    s: () => o
});
var i = n(64700),
    a = n(397927),
    l = n(770178),
    r = n(765548);

function s() {
    let [e, t] = i.useState("lg"), [n, a] = i.useState(void 0), s = (0, r.A)(e => {
        let n = e.target,
            i = e.contentRect.width;
        return (a(n.scrollHeight), null == i || i > 460) ? t("lg") : i > 280 ? t("sm") : t("xs")
    });
    return {
        containerRef: (0, l.w)(s),
        size: e,
        height: n
    }
}

function o(e) {
    let {
        initiallyExpanded: t
    } = e, [n, l] = i.useState(t), [r, s] = i.useState(!1), o = i.useCallback(() => {
        l(e => !e), s(!0)
    }, []), {
        expansionSpring: d
    } = (0, a.zhh)({
        expansionSpring: +!!n,
        config: {
            tension: 450,
            friction: 45
        },
        onRest: () => s(!1)
    });
    return {
        expansionSpring: d,
        isAnimating: r,
        isExpanded: n,
        toggleExpanded: o
    }
}
n(433745)