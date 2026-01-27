/** Chunk was on 92917 **/
/** chunk id: 394900, original params: e,t,n (module,exports,require) **/
n.d(t, {
    L: () => o,
    s: () => c
}), n(896048);
var r = n(64700),
    i = n(397927),
    l = n(770178),
    a = n(765548),
    s = n(433745);

function o() {
    let [e, t] = r.useState("lg"), [n, i] = r.useState(void 0), o = (0, a.A)(e => {
        let n = e.target,
            r = e.contentRect.width;
        return (i(n.scrollHeight), null == r || r > s.Cf) ? t("lg") : r > s.tN ? t("sm") : t("xs")
    });
    return {
        containerRef: (0, l.w)(o),
        size: e,
        height: n
    }
}

function c(e) {
    let {
        initiallyExpanded: t
    } = e, [n, l] = r.useState(t), [a, s] = r.useState(!1), o = r.useCallback(() => {
        l(e => !e), s(!0)
    }, []), {
        expansionSpring: c
    } = (0, i.zhh)({
        expansionSpring: +!!n,
        config: {
            tension: 450,
            friction: 45
        },
        onRest: () => s(!1)
    });
    return {
        expansionSpring: c,
        isAnimating: a,
        isExpanded: n,
        toggleExpanded: o
    }
}