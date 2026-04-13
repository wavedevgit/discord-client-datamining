/** chunk id: 548612 params = (module,exports,require) **/
l.d(t, {
    A: () => m
});
var n = l(627968),
    i = l(64700),
    s = l(317097),
    a = l(397927),
    r = l(930349),
    o = l(652215),
    d = l(985018),
    c = l(881091);

function u(e) {
    let {
        color: t,
        suggestedColors: l,
        disabled: r,
        ariaLabel: d,
        onSelect: u
    } = e, m = i.useRef(null), p = (0, s.Hl)(t);
    return (0, n.jsx)(a.YNO, {
        targetElementRef: m,
        renderPopout: e => (0, n.jsx)(a.VNw, {
            ...e,
            value: t,
            onChange: u,
            suggestedColors: l,
            showEyeDropper: !0
        }),
        children: e => {
            let {
                onClick: t,
                ...l
            } = e;
            return (0, n.jsx)(a.DUT, {
                ...l,
                innerRef: m,
                className: c.Dh,
                onClick: r ? o.tEg : t,
                "aria-label": d,
                "aria-disabled": r,
                tabIndex: r ? -1 : 0,
                children: (0, n.jsx)("div", {
                    className: c.Hy,
                    style: {
                        backgroundColor: p
                    }
                })
            })
        }
    })
}

function m(e) {
    let {
        primaryColor: t,
        secondaryColor: l,
        onSelectPrimaryColor: i,
        onSelectSecondaryColor: a,
        suggestedColors: o,
        disabled: m = !1
    } = e, p = (0, s.Hl)(t), x = (0, s.Hl)(l), A = `linear-gradient(to bottom, ${p}, ${x})`, g = d.intl.formatToPlainString(d.t.FquTfm, {
        colorLabel: p
    }), f = d.intl.formatToPlainString(d.t.xOnm4z, {
        colorLabel: x
    });
    return (0, n.jsx)(r.Yt, {
        variant: "square",
        children: (0, n.jsxs)("div", {
            className: c.D7,
            style: {
                background: A
            },
            children: [(0, n.jsx)(u, {
                color: t,
                suggestedColors: o,
                disabled: m,
                ariaLabel: g,
                onSelect: i
            }), (0, n.jsx)(u, {
                color: l,
                suggestedColors: o,
                disabled: m,
                ariaLabel: f,
                onSelect: a
            })]
        })
    })
}