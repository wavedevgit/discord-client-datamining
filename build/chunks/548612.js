/** chunk id: 548612 params = (module,exports,require) **/
l.d(n, {
    A: () => u
});
var i = l(627968),
    t = l(64700),
    s = l(317097),
    a = l(397927),
    r = l(930349),
    o = l(985018),
    d = l(881091);

function c(e) {
    let {
        color: n,
        suggestedColors: l,
        disabled: r,
        ariaLabel: o,
        onSelect: c
    } = e, u = t.useRef(null), m = (0, s.Hl)(n);
    return (0, i.jsx)(a.YNO, {
        targetElementRef: u,
        renderPopout: e => (0, i.jsx)(a.VNw, {
            ...e,
            value: n,
            onChange: c,
            suggestedColors: l,
            showEyeDropper: !0
        }),
        children: e => {
            let {
                onClick: n,
                ...l
            } = e;
            return (0, i.jsx)(a.DUT, {
                ...l,
                innerRef: u,
                className: d.Dh,
                onClick: r ? void 0 : n,
                "aria-label": o,
                "aria-disabled": r,
                tabIndex: r ? -1 : 0,
                children: (0, i.jsx)("div", {
                    className: d.Hy,
                    style: {
                        backgroundColor: m
                    }
                })
            })
        }
    })
}

function u(e) {
    let {
        primaryColor: n,
        secondaryColor: l,
        onSelectPrimaryColor: t,
        onSelectSecondaryColor: a,
        suggestedColors: u,
        disabled: m = !1
    } = e, p = (0, s.Hl)(n), x = (0, s.Hl)(l), A = `linear-gradient(to bottom, ${p}, ${x})`, g = o.intl.formatToPlainString(o.t.FquTfm, {
        colorLabel: p
    }), f = o.intl.formatToPlainString(o.t.xOnm4z, {
        colorLabel: x
    });
    return (0, i.jsx)(r.Yt, {
        variant: "square",
        disabled: m,
        children: (0, i.jsxs)("div", {
            className: d.D7,
            style: {
                background: A
            },
            children: [(0, i.jsx)(c, {
                color: n,
                suggestedColors: u,
                ariaLabel: g,
                onSelect: t,
                disabled: m
            }), (0, i.jsx)(c, {
                color: l,
                suggestedColors: u,
                ariaLabel: f,
                onSelect: a,
                disabled: m
            })]
        })
    })
}