/** chunk id: 126727 params = (module,exports,require) **/
n.d(t, {
    A: () => d
});
var l = n(627968),
    a = n(64700),
    r = n(397927),
    s = n(155718),
    i = n(207963),
    o = n(969508),
    c = n(138425);

function d(e) {
    let t, {
            type: n,
            style: d,
            label: u,
            placeholder: m,
            minLength: p,
            maxLength: A,
            required: h,
            value: C
        } = e,
        [E, x] = a.useState(C ?? ""),
        {
            state: N,
            executeStateUpdate: I,
            error: f
        } = (0, i.At)(e, null != C ? {
            type: n,
            value: C
        } : void 0),
        _ = (0, o.FG)(e.id);
    a.useEffect(() => {
        N?.type === n && x(N.value)
    }, [n, N]);
    let g = {
        value: E,
        placeholder: m,
        minLength: p,
        maxLength: A,
        required: h,
        onChange: e => {
            x(e), I({
                type: n,
                value: e
            })
        },
        autoFocus: _
    };
    switch (d) {
        case s.qz.SMALL:
            t = (0, l.jsx)(r.ksK, {
                ...g
            });
            break;
        case s.qz.PARAGRAPH:
            t = (0, l.jsx)(r.fs1, {
                autosize: !0,
                ...g
            })
    }
    return null != u ? (0, l.jsx)(r.eIh, {
        title: u,
        required: h,
        className: c.k,
        error: f,
        children: t
    }) : t
}