/** chunk id: 36525 params = (module,exports,require) **/
n.d(t, {
    A: () => _
});
var r = n(627968),
    s = n(64700),
    i = n(990078),
    l = n(421380),
    a = n(397927),
    o = n(203982),
    d = n(652215),
    c = n(985018),
    u = n(914099);
let _ = function(e) {
    let {
        message: t,
        errorMessage: n,
        submitting: _,
        onReset: h,
        onSave: m,
        onSaveText: f,
        onResetText: x,
        onSaveButtonColor: E,
        disabled: p,
        saveButtonTooltip: g
    } = e, v = s.useRef(null), [N, j] = s.useState(!1);
    return s.useEffect(() => {
        function e() {
            j(!0), setTimeout(() => j(!1), 1e3)
        }
        return o._.subscribe(d.jej.EMPHASIZE_NOTICE, e), () => {
            o._.unsubscribe(d.jej.EMPHASIZE_NOTICE, e)
        }
    }, []), (0, r.jsx)("div", {
        className: u.kL,
        "data-emphasized": N,
        children: (0, r.jsx)("div", {
            className: u.nP,
            ref: v,
            children: (0, r.jsxs)(a.xpW, {
                containerRef: v,
                children: [(0, r.jsx)("div", {
                    className: u.Xk,
                    children: (0, r.jsx)("div", {
                        className: u.iU,
                        children: n ?? t ?? c.intl.string(c.t.GP7JLE)
                    })
                }), (0, r.jsxs)("div", {
                    className: u.o1,
                    children: [null != h && (0, r.jsx)(l.$n, {
                        className: u.WA,
                        size: l.$n.Sizes.SMALL,
                        color: l.$n.Colors.PRIMARY,
                        look: l.$n.Looks.LINK,
                        onClick: h,
                        children: (0, r.jsx)("span", {
                            children: x ?? c.intl.string(c.t.yBZMsQ)
                        })
                    }), null != m ? (0, r.jsx)(i.m, {
                        text: g,
                        children: (0, r.jsx)(l.$n, {
                            size: l.$n.Sizes.SMALL,
                            color: E ?? l.$n.Colors.GREEN,
                            submitting: _,
                            disabled: p,
                            onClick: m,
                            children: f ?? c.intl.string(c.t.K344S7)
                        })
                    }) : null]
                })]
            })
        })
    })
}