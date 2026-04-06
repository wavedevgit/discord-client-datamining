/** chunk id: 394900 params = (module,exports,require) **/
n.d(t, {
    L: () => r,
    s: () => o
});
var i = n(64700),
    l = n(397927),
    s = n(770178),
    a = n(765548);

function r() {
    let [e, t] = i.useState("lg"), [n, l] = i.useState(void 0), r = (0, a.A)(e => {
        let n = e.target,
            i = e.contentRect.width;
        return (l(n.scrollHeight), null == i || i > 460) ? t("lg") : i > 280 ? t("sm") : t("xs")
    });
    return {
        containerRef: (0, s.w)(r),
        size: e,
        height: n
    }
}

function o(e) {
    let {
        initiallyExpanded: t
    } = e, [n, s] = i.useState(t), [a, r] = i.useState(!1), o = i.useCallback(() => {
        s(e => !e), r(!0)
    }, []), {
        expansionSpring: d
    } = (0, l.zhh)({
        expansionSpring: +!!n,
        config: {
            tension: 450,
            friction: 45
        },
        onRest: () => r(!1)
    });
    return {
        expansionSpring: d,
        isAnimating: a,
        isExpanded: n,
        toggleExpanded: o
    }
}
n(433745)