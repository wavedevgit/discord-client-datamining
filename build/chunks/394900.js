/** chunk id: 394900 params = (module,exports,require) **/
n.d(t, {
    L: () => s,
    s: () => o
});
var i = n(64700),
    r = n(397927),
    a = n(770178),
    l = n(765548);

function s() {
    let [e, t] = i.useState("lg"), [n, r] = i.useState(void 0), s = (0, l.A)(e => {
        let n = e.target,
            i = e.contentRect.width;
        return (r(n.scrollHeight), null == i || i > 460) ? t("lg") : i > 280 ? t("sm") : t("xs")
    });
    return {
        containerRef: (0, a.w)(s),
        size: e,
        height: n
    }
}

function o(e) {
    let {
        initiallyExpanded: t
    } = e, [n, a] = i.useState(t), [l, s] = i.useState(!1), o = i.useCallback(() => {
        a(e => !e), s(!0)
    }, []), {
        expansionSpring: d
    } = (0, r.zhh)({
        expansionSpring: +!!n,
        config: {
            tension: 450,
            friction: 45
        },
        onRest: () => s(!1)
    });
    return {
        expansionSpring: d,
        isAnimating: l,
        isExpanded: n,
        toggleExpanded: o
    }
}
n(433745)