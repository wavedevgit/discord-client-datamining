/** chunk id: 60888 params = (module,exports,require) **/
n.d(e, {
    L: () => l,
    u: () => s
});
var r = n(64700),
    a = n(155078);

function l(t) {
    let {
        protocol: e,
        hostname: n
    } = r.useMemo(() => ({
        protocol: (0, a.J)(t),
        hostname: (0, a.E)(t)
    }), [t]), l = "//" === t.substr(e.length, 2) ? "//" : "", s = `${e}${l}${n}`;
    return {
        protocol: e,
        authorityPrefix: l,
        hostname: n,
        theRestOfTheUrl: t.replace(s, "")
    }
}

function s(t) {
    let {
        url: e,
        trustUrl: n,
        onConfirm: a,
        onCancel: s,
        onClose: i
    } = t, [o, c] = r.useState(!1), {
        protocol: u,
        authorityPrefix: d,
        hostname: x,
        theRestOfTheUrl: h
    } = l(e), p = r.useCallback(() => {
        o && n(e), i?.(), a()
    }, [e, o, n, a, i]);
    return {
        protocol: u,
        authorityPrefix: d,
        hostname: x,
        theRestOfTheUrl: h,
        shouldTrustUrl: o,
        setShouldTrustUrl: c,
        handleConfirm: p,
        handleCancel: r.useCallback(() => {
            i?.(), s()
        }, [s, i])
    }
}