/** Chunk was on 49559 **/
/** chunk id: 126727, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => d
}), n(896048);
var r = n(627968),
    l = n(64700),
    a = n(397927),
    i = n(155718),
    o = n(207963),
    s = n(969508),
    c = n(717820);

function u(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            var r;
            r = n[t], t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r
        })
    }
    return e
}

function d(e) {
    let t, {
            type: n,
            style: d,
            label: p,
            placeholder: m,
            minLength: f,
            maxLength: O,
            required: b,
            value: y
        } = e,
        [h, j] = l.useState(null != y ? y : ""),
        {
            state: g,
            executeStateUpdate: A,
            error: v
        } = (0, o.At)(e, null != y ? {
            type: n,
            value: y
        } : void 0),
        E = (0, s.FG)(e.id);
    l.useEffect(() => {
        (null == g ? void 0 : g.type) === n && j(g.value)
    }, [n, g]);
    let C = {
        value: h,
        placeholder: m,
        minLength: f,
        maxLength: O,
        required: b,
        onChange: e => {
            j(e), A({
                type: n,
                value: e
            })
        },
        autoFocus: E
    };
    switch (d) {
        case i.qz.SMALL:
            t = (0, r.jsx)(a.ksK, u({}, C));
            break;
        case i.qz.PARAGRAPH:
            t = (0, r.jsx)(a.fs1, u({
                autosize: !0
            }, C))
    }
    return null != p ? (0, r.jsx)(a.eIh, {
        title: p,
        required: b,
        className: c.k,
        error: v,
        children: t
    }) : t
}