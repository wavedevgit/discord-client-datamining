/** chunk id: 36525, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => h
}), n(896048);
var i = n(627968),
    s = n(64700),
    r = n(990078),
    l = n(421380),
    o = n(397927),
    a = n(203982),
    d = n(652215),
    u = n(985018),
    c = n(614221);
let h = function(e) {
    var t;
    let {
        message: n,
        errorMessage: h,
        submitting: p,
        onReset: g,
        onSave: f,
        onSaveText: C,
        onResetText: y,
        onSaveButtonColor: v,
        disabled: b,
        saveButtonTooltip: m
    } = e, S = s.useRef(null), [O, E] = s.useState(!1);
    return s.useEffect(() => {
        function e() {
            E(!0), setTimeout(() => E(!1), 1e3)
        }
        return a._.subscribe(d.jej.EMPHASIZE_NOTICE, e), () => {
            a._.unsubscribe(d.jej.EMPHASIZE_NOTICE, e)
        }
    }, []), (0, i.jsx)("div", {
        className: c.kL,
        "data-emphasized": O,
        children: (0, i.jsx)("div", {
            className: c.nP,
            ref: S,
            children: (0, i.jsxs)(o.xpW, {
                containerRef: S,
                children: [(0, i.jsx)("div", {
                    className: c.Xk,
                    children: (0, i.jsx)("div", {
                        className: c.iU,
                        children: null != (t = null != h ? h : n) ? t : u.intl.string(u.t.GP7JLE)
                    })
                }), (0, i.jsxs)("div", {
                    className: c.o1,
                    children: [null != g && (0, i.jsx)(l.$n, {
                        className: c.WA,
                        size: l.$n.Sizes.SMALL,
                        color: l.$n.Colors.PRIMARY,
                        look: l.$n.Looks.LINK,
                        onClick: g,
                        children: (0, i.jsx)("span", {
                            children: null != y ? y : u.intl.string(u.t.yBZMsQ)
                        })
                    }), null != f ? (0, i.jsx)(r.m, {
                        text: m,
                        children: (0, i.jsx)(l.$n, {
                            size: l.$n.Sizes.SMALL,
                            color: null != v ? v : l.$n.Colors.GREEN,
                            submitting: p,
                            disabled: b,
                            onClick: f,
                            children: null != C ? C : u.intl.string(u.t.K344S7)
                        })
                    }) : null]
                })]
            })
        })
    })
}