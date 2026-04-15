/** chunk id: 936356 params = (module,exports,require) **/
n.d(t, {
    A: () => u
});
var i = n(627968),
    l = n(64700),
    a = n(397927),
    r = n(890687),
    s = n(651892),
    o = n(264580),
    d = n(985018),
    c = n(515371);
let u = function(e) {
    let {
        onChange: t,
        selectedFilters: n
    } = e, u = (0, r.Nb)(), A = l.useCallback(e => i => {
        let l = e.filter(e => i.includes(e.filter));
        t([...n.filter(t => !e.some(e => e.filter === t.filter)), ...l])
    }, [n, t]);
    return (0, i.jsx)(o.A, {
        renderPopout: (e, r) => {
            let {
                closePopout: h
            } = e;
            return (0, i.jsxs)("div", {
                children: [u.map((e, t) => {
                    let d = e.options.map(e => ({
                            label: (0, s.up)(e.filter),
                            value: e.filter
                        })),
                        u = n.filter(t => e.options.some(e => e.filter === t.filter)).map(e => e.filter);
                    return (0, i.jsxs)(l.Fragment, {
                        children: [t > 0 && (0, i.jsx)("hr", {
                            className: c.B
                        }), (0, i.jsx)(o.q, {
                            id: r,
                            children: e.heading
                        }), (0, i.jsx)(a.$QX, {
                            "aria-labelledby": r,
                            options: d,
                            selectedValues: u,
                            onChange: A(e.options)
                        })]
                    }, t)
                }), (0, i.jsx)("hr", {
                    className: c.B
                }), (0, i.jsx)("div", {
                    className: c.W,
                    children: (0, i.jsx)(a.Button, {
                        fullWidth: !0,
                        onClick: () => {
                            t([]), h()
                        },
                        size: "sm",
                        text: d.intl.string(d.t.VkKicb),
                        variant: "secondary"
                    })
                })]
            })
        },
        children: (e, t) => (0, i.jsx)(a.Button, {
            ...e,
            buttonRef: t,
            size: "sm",
            text: d.intl.formatToPlainString(d.t.CEfkXl, {
                numSelectedFilters: n.length
            }),
            icon: a.RgP,
            iconPosition: "end",
            variant: "secondary"
        })
    })
}