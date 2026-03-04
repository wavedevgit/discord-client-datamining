/** chunk id: 304973, original params: e,l,t (module,exports,require) **/
t.d(l, {
    A: () => c
});
var r = t(627968),
    o = t(397927),
    n = t(976860),
    a = t(53566),
    i = t(506456),
    d = t(653793),
    s = t(494213);
let c = e => {
    let {
        backgroundImage: l,
        href: t,
        ctaText: c
    } = e, u = (0, i.A)(l.src), h = (0, a.S)(c);
    return (0, r.jsx)(d.A, {
        children: (0, r.jsx)(o.DUT, {
            className: s.j,
            style: {
                backgroundImage: `url(${u})`
            },
            onClick: () => {
                (0, n.pX)(t)
            },
            children: (0, r.jsx)(o.Text, {
                variant: "text-lg/bold",
                color: "always-white",
                children: h
            })
        })
    })
}