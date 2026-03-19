/** chunk id: 414121 params = (module,exports,require) **/
"use strict";
t.d(r, {
    Ay: () => _,
    Lx: () => C,
    Zs: () => d
});
var s, o = t(627968),
    i = t(64700),
    n = t(503698),
    a = t.n(n),
    c = t(55731),
    l = t(368727),
    d = ((s = {}).SIZE_40 = "SIZE_40", s.SIZE_60 = "SIZE_60", s);
let p = Object.freeze({
        SIZE_40: "size-40",
        SIZE_60: "size-60"
    }),
    u = t(906118);
class f extends i.PureComponent {
    static defaultProps = {
        size: 128,
        bgColor: "#ffffff",
        fgColor: "#000000"
    };
    render() {
        let {
            className: e,
            text: r,
            ...t
        } = this.props;
        return (0, o.jsx)("div", {
            style: {
                width: t.size,
                height: t.size,
                backgroundColor: t.bgColor
            },
            className: a()(l.qrCodeContainer, e),
            children: (0, o.jsx)(c.default, {
                value: r,
                level: "M",
                ...t
            })
        })
    }
}
class C extends i.PureComponent {
    static defaultProps = {
        size: 144,
        bgColor: "#ffffff",
        fgColor: "#000000"
    };
    render() {
        let {
            overlaySize: e
        } = this.props, r = p[e ?? "SIZE_40"];
        return (0, o.jsxs)("div", {
            className: l.qrCodeOverlayContainer,
            children: [(0, o.jsx)(f, {
                ...this.props
            }), (0, o.jsx)("div", {
                className: l.qrCodeOverlay,
                children: (0, o.jsx)("img", {
                    className: l[r],
                    src: u,
                    alt: ""
                })
            })]
        })
    }
}
let _ = f