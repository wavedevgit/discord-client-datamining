/** chunk id: 394900 params = (module,exports,require) **/
n.d(t, {
    L: () => r,
    s: () => o
});
var i = n(64700),
    a = n(397927),
    l = n(770178),
    s = n(765548);

function r() {
    let [e, t] = i.useState("lg"), [n, a] = i.useState(void 0), r = (0, s.A)(e => {
        let n = e.target,
            i = e.contentRect.width;
        return (a(n.scrollHeight), null == i || i > 460) ? t("lg") : i > 280 ? t("sm") : t("xs")
    });
    return {
        containerRef: (0, l.w)(r),
        size: e,
        height: n
    }
}

function o(e) {
    let {
        initiallyExpanded: t
    } = e, [n, l] = i.useState(t), [s, r] = i.useState(!1), o = i.useCallback(() => {
        l(e => !e), r(!0)
    }, []), {
        expansionSpring: d
    } = (0, a.zhh)({
        expansionSpring: +!!n,
        config: {
            tension: 450,
            friction: 45
        },
        onRest: () => r(!1)
    });
    return {
        expansionSpring: d,
        isAnimating: s,
        isExpanded: n,
        toggleExpanded: o
    }
}
n(433745)