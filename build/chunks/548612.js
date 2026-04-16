/** chunk id: 548612 params = (module,exports,require) **/
l.d(n, {
    A: () => u
});
var t = l(627968),
    i = l(64700),
    s = l(317097),
    a = l(397927),
    r = l(930349),
    o = l(985018),
    d = l(298387);

function c(e) {
    let {
        color: n,
        suggestedColors: l,
        disabled: r,
        ariaLabel: o,
        onSelect: c
    } = e, u = i.useRef(null), m = (0, s.Hl)(n);
    return (0, t.jsx)(a.YNO, {
        targetElementRef: u,
        renderPopout: e => (0, t.jsx)(a.VNw, {
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
            return (0, t.jsx)(a.DUT, {
                ...l,
                innerRef: u,
                className: d.Dh,
                onClick: r ? void 0 : n,
                "aria-label": o,
                "aria-disabled": r,
                tabIndex: r ? -1 : 0,
                children: (0, t.jsx)("div", {
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
        onSelectPrimaryColor: i,
        onSelectSecondaryColor: a,
        suggestedColors: u,
        disabled: m = !1
    } = e, p = (0, s.Hl)(n), A = (0, s.Hl)(l), x = `linear-gradient(to bottom, ${p}, ${A})`, g = o.intl.formatToPlainString(o.t.FquTfm, {
        colorLabel: p
    }), f = o.intl.formatToPlainString(o.t.xOnm4z, {
        colorLabel: A
    });
    return (0, t.jsx)(r.Yt, {
        variant: "square",
        disabled: m,
        children: (0, t.jsxs)("div", {
            className: d.D7,
            style: {
                background: x
            },
            children: [(0, t.jsx)(c, {
                color: n,
                suggestedColors: u,
                ariaLabel: g,
                onSelect: i,
                disabled: m
            }), (0, t.jsx)(c, {
                color: l,
                suggestedColors: u,
                ariaLabel: f,
                onSelect: a,
                disabled: m
            })]
        })
    })
}