/** chunk id: 414121 params = (module,exports,require) **/
"use strict";
r.d(t, {
    Ay: () => x,
    Lx: () => C,
    Zs: () => d
});
var s, a = r(627968),
    o = r(64700),
    n = r(503698),
    i = r.n(n),
    l = r(225088),
    c = r(474119),
    d = ((s = {}).SIZE_40 = "SIZE_40", s.SIZE_60 = "SIZE_60", s);
let u = Object.freeze({
        SIZE_40: "size-40",
        SIZE_60: "size-60"
    }),
    p = r(906118);
class f extends o.PureComponent {
    static defaultProps = {
        size: 128,
        bgColor: "#ffffff",
        fgColor: "#000000"
    };
    render() {
        let {
            className: e,
            text: t,
            ...r
        } = this.props;
        return (0, a.jsx)("div", {
            style: {
                width: r.size,
                height: r.size,
                backgroundColor: r.bgColor
            },
            className: i()(c.qrCodeContainer, e),
            children: (0, a.jsx)(l.default, {
                value: t,
                level: "M",
                ...r
            })
        })
    }
}
class C extends o.PureComponent {
    static defaultProps = {
        size: 144,
        bgColor: "#ffffff",
        fgColor: "#000000"
    };
    render() {
        let {
            overlaySize: e
        } = this.props, t = u[e ?? "SIZE_40"];
        return (0, a.jsxs)("div", {
            className: c.qrCodeOverlayContainer,
            children: [(0, a.jsx)(f, {
                ...this.props
            }), (0, a.jsx)("div", {
                className: c.qrCodeOverlay,
                children: (0, a.jsx)("img", {
                    className: c[t],
                    src: p,
                    alt: ""
                })
            })]
        })
    }
}
let x = f