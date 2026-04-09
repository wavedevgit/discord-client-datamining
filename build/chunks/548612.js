/** chunk id: 548612 params = (module,exports,require) **/
t.d(l, {
    A: () => m
});
var n = t(627968),
    i = t(64700),
    s = t(317097),
    a = t(397927),
    r = t(930349),
    o = t(652215),
    d = t(985018),
    c = t(881091);

function u(e) {
    let {
        color: l,
        suggestedColors: t,
        disabled: r,
        ariaLabel: d,
        onSelect: u
    } = e, m = i.useRef(null), x = (0, s.Hl)(l);
    return (0, n.jsx)(a.YNO, {
        targetElementRef: m,
        renderPopout: e => (0, n.jsx)(a.VNw, {
            ...e,
            value: l,
            onChange: u,
            suggestedColors: t,
            showEyeDropper: !0
        }),
        children: e => {
            let {
                onClick: l,
                ...t
            } = e;
            return (0, n.jsx)(a.DUT, {
                ...t,
                innerRef: m,
                className: c.Dh,
                onClick: r ? o.tEg : l,
                "aria-label": d,
                "aria-disabled": r,
                tabIndex: r ? -1 : 0,
                children: (0, n.jsx)("div", {
                    className: c.Hy,
                    style: {
                        backgroundColor: x
                    }
                })
            })
        }
    })
}

function m(e) {
    let {
        primaryColor: l,
        secondaryColor: t,
        onSelectPrimaryColor: i,
        onSelectSecondaryColor: a,
        suggestedColors: o,
        disabled: m = !1
    } = e, x = (0, s.Hl)(l), p = (0, s.Hl)(t), A = `linear-gradient(to bottom, ${x}, ${p})`, g = d.intl.formatToPlainString(d.t.FquTfm, {
        colorLabel: x
    }), f = d.intl.formatToPlainString(d.t.xOnm4z, {
        colorLabel: p
    });
    return (0, n.jsx)(r.Yt, {
        variant: "square",
        children: (0, n.jsxs)("div", {
            className: c.D7,
            style: {
                background: A
            },
            children: [(0, n.jsx)(u, {
                color: l,
                suggestedColors: o,
                disabled: m,
                ariaLabel: g,
                onSelect: i
            }), (0, n.jsx)(u, {
                color: t,
                suggestedColors: o,
                disabled: m,
                ariaLabel: f,
                onSelect: a
            })]
        })
    })
}