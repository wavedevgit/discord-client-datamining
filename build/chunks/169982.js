/** Chunk was on web.js **/
/** chunk id: 169982, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => I
}), n(747238), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(481613),
    s = n.n(a),
    o = n(422998),
    l = n(311907),
    c = n(838677),
    u = n(397927),
    d = n(565645),
    f = n(582322),
    p = n(531685),
    _ = n(690521),
    h = n(975571),
    m = n(723702),
    g = n(837921),
    E = n(721668),
    y = n(652215),
    b = n(985018);

function O(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function v() {
    let e = window.require("electron").remote.getCurrentWindow();
    g.Ay.minimize = () => e.minimize(), g.Ay.maximize = () => {
        e.isMaximized() ? e.unmaximize() : e.maximize()
    }, g.Ay.close = () => e.close()
}
let A = l.Ay.connectStores([p.A], () => ({
    focused: p.A.isFocused()
}))(f.A);
class I extends i.PureComponent {
    getPlatform() {
        var e;
        let t = null == (e = s().os) ? void 0 : e.family;
        return null != t && /^win/i.test(t) ? m.PlatformTypes.WINDOWS : null != t && /darwin|os x/i.test(t) ? m.PlatformTypes.OSX : m.PlatformTypes.LINUX
    }
    componentDidMount() {
        v()
    }
    render() {
        let e = (0, r.jsx)("div", {
            children: (0, r.jsxs)("p", {
                children: [b.intl.string(b.t["4tRjHC"]), " ", (0, r.jsx)(d.A, {
                    src: _.Ay.getURL(c.A.convert.fromCodePoint("1f44c")),
                    emojiName: ":ok_hand:",
                    animated: !1
                })]
            })
        });
        return (0, r.jsxs)(i.Fragment, {
            children: [(0, r.jsx)(o.mg, {
                children: (0, r.jsx)("html", {
                    className: (0, u.mo9)(y.NJ8.DARK)
                })
            }), (0, r.jsx)(A, {
                type: this.getPlatform()
            }), (0, r.jsx)(E.A, {
                title: b.intl.string(b.t["3h+n+8"]),
                note: e,
                action: (0, r.jsx)(u.Button, {
                    size: "md",
                    variant: "primary",
                    text: b.intl.string(b.t["1WjMbC"]),
                    onClick: this.handleDownload
                })
            })]
        })
    }
    constructor(...e) {
        super(...e), O(this, "handleDownload", () => {
            window.open(this.getPlatform() === m.PlatformTypes.WINDOWS ? h.A.getArticleURL(y.MVz.CORRUPT_INSTALLATION) : y.X7G.DOWNLOAD)
        })
    }
}