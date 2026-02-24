/** chunk id: 443960, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => r
}), n(323874), n(14289), n(35956);
var a = n(627968),
    i = n(64700),
    s = n(397927),
    l = n(643374);
let r = function(e) {
    let {
        assetKey: t,
        filters: n,
        initialValue: r,
        onFileChange: o,
        title: d
    } = e, [c, u] = i.useState(null), m = i.useRef(null);
    return i.useEffect(() => () => {
        null != m.current && URL.revokeObjectURL(m.current)
    }, []), (0, a.jsx)(s.D0$, {
        label: d,
        description: `Supported asset formats: ${n.join(", ")}`,
        children: (0, a.jsx)(l.A, {
            filename: c?.name ?? r ?? "",
            filters: [{
                name: d,
                extensions: n
            }],
            buttonText: "Browse",
            placeholder: "Select an asset",
            onFileSelect: function(e) {
                if (u(e ?? null), null == e) return;
                let n = URL.createObjectURL(e);
                m.current = n;
                let a = new URL(n);
                a.searchParams.append("mimetype", e.type), a.searchParams.append("name", e.name), o(t, a.toString())
            }
        })
    })
}