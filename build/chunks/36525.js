/** Chunk was on web.js **/
/** chunk id: 36525, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => f
}), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(990078),
    s = n(421380),
    o = n(397927),
    l = n(203982),
    c = n(652215),
    u = n(985018),
    d = n(614221);
let f = function(e) {
    var t;
    let {
        message: n,
        errorMessage: f,
        submitting: p,
        onReset: _,
        onSave: h,
        onSaveText: m,
        onResetText: g,
        onSaveButtonColor: E,
        disabled: y,
        saveButtonTooltip: b
    } = e, O = i.useRef(null), [v, A] = i.useState(!1);
    return i.useEffect(() => {
        function e() {
            A(!0), setTimeout(() => A(!1), 1e3)
        }
        return l._.subscribe(c.jej.EMPHASIZE_NOTICE, e), () => {
            l._.unsubscribe(c.jej.EMPHASIZE_NOTICE, e)
        }
    }, []), (0, r.jsx)("div", {
        className: d.kL,
        "data-emphasized": v,
        children: (0, r.jsx)("div", {
            className: d.nP,
            ref: O,
            children: (0, r.jsxs)(o.xpW, {
                containerRef: O,
                children: [(0, r.jsx)("div", {
                    className: d.Xk,
                    children: (0, r.jsx)("div", {
                        className: d.iU,
                        children: null != (t = null != f ? f : n) ? t : u.intl.string(u.t.GP7JLE)
                    })
                }), (0, r.jsxs)("div", {
                    className: d.o1,
                    children: [null != _ && (0, r.jsx)(s.$n, {
                        className: d.WA,
                        size: s.$n.Sizes.SMALL,
                        color: s.$n.Colors.PRIMARY,
                        look: s.$n.Looks.LINK,
                        onClick: _,
                        children: (0, r.jsx)("span", {
                            children: null != g ? g : u.intl.string(u.t.yBZMsQ)
                        })
                    }), null != h ? (0, r.jsx)(a.m, {
                        text: b,
                        children: (0, r.jsx)(s.$n, {
                            size: s.$n.Sizes.SMALL,
                            color: null != E ? E : s.$n.Colors.GREEN,
                            submitting: p,
                            disabled: y,
                            onClick: h,
                            children: null != m ? m : u.intl.string(u.t.K344S7)
                        })
                    }) : null]
                })]
            })
        })
    })
}