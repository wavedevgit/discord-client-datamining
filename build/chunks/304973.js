/** chunk id: 304973 params = (module,exports,require) **/
t.d(l, {
    A: () => c
});
var r = t(627968),
    n = t(397927),
    o = t(976860),
    i = t(53566),
    a = t(506456),
    s = t(653793),
    d = t(494213);
let c = e => {
    let {
        backgroundImage: l,
        href: t,
        ctaText: c
    } = e, u = (0, a.A)(l.src), h = (0, i.S)(c);
    return (0, r.jsx)(s.A, {
        children: (0, r.jsx)(n.DUT, {
            className: d.j,
            style: {
                backgroundImage: `url(${u})`
            },
            onClick: () => {
                (0, o.pX)(t)
            },
            children: (0, r.jsx)(n.Text, {
                variant: "text-lg/bold",
                color: "always-white",
                children: h
            })
        })
    })
}