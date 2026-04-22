/** chunk id: 457570 params = (module,exports,require) **/
n.d(t, {
    A: () => c
});
var s = n(627968),
    a = n(64700),
    l = n(503698),
    i = n.n(l),
    o = n(96337),
    r = n(397927),
    E = n(333074),
    d = n(985018),
    u = n(348043);
let c = function(e) {
    let {
        className: t,
        submitting: n,
        errorMessage: l,
        onChange: c
    } = e, R = a.useRef(null), {
        countriesMap: h,
        countryCodeOptions: I
    } = (0, E.E)(), [p, _] = a.useState(() => {
        let e = o.A.find(e => "United States" === e.name);
        return `${e.alpha2}-${e.phoneCountryCode}`
    }), [f, g] = a.useState(() => {
        let [e, t] = o.A.find(e => "United States" === e.name).phoneCountryCode.split(" ");
        return t ?? ""
    }), C = a.useCallback((e, t) => {
        let n = h.get(e)?.code;
        c?.(`${n}${t}`)
    }, [h, c]), A = a.useCallback(e => {
        _(e), R.current?.focus(), C(e, f)
    }, [f, C]), m = a.useCallback(e => {
        g(e), C(p, e)
    }, [p, C]), y = h.get(p);
    return (0, s.jsx)("fieldset", {
        children: (0, s.jsxs)("div", {
            className: i()(u.B, t),
            children: [(0, s.jsx)(r.D0$, {
                label: d.intl.string(d.t["k+bvrB"]),
                children: (0, s.jsx)(r.ZiE, {
                    selectionMode: "single",
                    value: p ?? void 0,
                    onSelectionChange: A,
                    options: I,
                    formatOption: e => {
                        let {
                            value: t,
                            label: n,
                            alpha2: s
                        } = e;
                        return {
                            id: t,
                            value: t,
                            label: n,
                            leading: String.fromCodePoint(...(s ?? "").toUpperCase().split("").map(e => 127397 + e.charCodeAt(0)))
                        }
                    },
                    disabled: n
                })
            }), (0, s.jsx)(r.ksK, {
                label: d.intl.string(d.t["64bX0M"]),
                error: l,
                leading: y?.code,
                type: "tel",
                onChange: m,
                autoFocus: !0,
                inputRef: R,
                disabled: n,
                value: f
            })]
        })
    })
}