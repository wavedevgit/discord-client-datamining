/** Chunk was on 36054 **/
/** chunk id: 928953, original params: e,t,n (module,exports,require) **/
n.d(t, {
    i: () => h
}), n(896048);
var a = n(627968),
    l = n(64700),
    r = n(503698),
    i = n.n(r),
    s = n(397927),
    o = n(961895),
    c = n(343991),
    d = n(698638),
    u = n(727489);
let m = () => {
        (0, s.mMO)(async () => {
            let {
                default: e
            } = await Promise.resolve().then(n.bind(n, 343991));
            return t => (0, a.jsx)(e, function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        a = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))), a.forEach(function(t) {
                        var a;
                        a = n[t], t in e ? Object.defineProperty(e, t, {
                            value: a,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = a
                    })
                }
                return e
            }({
                title: "No image or video files found!",
                help: "Please drop one or more image or video files."
            }, t))
        }, {
            modalKey: c.D
        })
    },
    p = e => {
        e.stopPropagation(), e.preventDefault()
    },
    h = e => {
        let {
            className: t,
            onDrop: n,
            children: r
        } = e, [h, x] = l.useState(!1), g = l.useRef(null), f = l.useCallback(e => {
            p(e), x(!0), (0, s.OoC)(c.D)
        }, []), b = l.useCallback(e => {
            p(e);
            let t = g.current,
                n = e.relatedTarget;
            null != n && (null == t || t.contains(n)) || x(!1)
        }, []), v = l.useCallback(async e => {
            p(e), x(!1);
            let t = e.dataTransfer;
            if (null == t) return void m();
            let a = await Promise.all(Array.from(t.items).map(e => {
                var t;
                return null != (t = e.webkitGetAsEntry()) ? t : e.getAsEntry()
            })).then(e => e.filter(e => null != e));
            a.length > 0 ? n(a) : m()
        }, [n]);
        return (0, a.jsxs)("div", {
            ref: g,
            className: i()(t, u.iE),
            onDragEnter: f,
            onDragOver: p,
            onDragLeave: b,
            onDrop: v,
            children: [r, h && (0, a.jsx)("div", {
                className: u.d2,
                children: (0, a.jsxs)("div", {
                    className: u.vW,
                    children: [(0, a.jsx)(o.A, {
                        icons: d.ir
                    }), (0, a.jsx)(s.Heading, {
                        variant: "heading-lg/bold",
                        children: "Upload Shop Assets"
                    }), (0, a.jsxs)("div", {
                        className: u.GA,
                        children: [(0, a.jsx)(s.Text, {
                            variant: "text-sm/normal",
                            children: "Drop file(s) into this panel to preview Shop assets!"
                        }), (0, a.jsxs)(s.Text, {
                            variant: "text-sm/normal",
                            children: ["Click", (0, a.jsx)(s.cBN, {
                                className: u.q4,
                                size: "xs",
                                color: s.LU0.colors.TEXT_DEFAULT
                            }), "above for more instructions."]
                        })]
                    })]
                })
            })]
        })
    }