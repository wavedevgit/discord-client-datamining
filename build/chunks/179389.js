/** Chunk was on 28636 **/
/** chunk id: 179389, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => y,
    i: () => x
}), n(747238), n(896048), n(228524);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(280230),
    o = n.n(s),
    c = n(421380),
    d = n(481859),
    u = n(558179),
    p = n(371794),
    h = n(985018),
    m = n(663533);

function g(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function _(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            g(e, t, n[t])
        })
    }
    return e
}

function b(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
        }
        return n
    })(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}
let f = /^!\[([^\]]*)\]\(asset:\/\/(\d+)\)/,
    x = b(_({}, u.A.rules), {
        heading: b(_({}, u.A.rules.heading), {
            react(e, t, n) {
                let l = "h".concat(Math.min(Math.max(2, e.level + 1), 4));
                return (0, r.jsx)(d.A, {
                    tag: l,
                    children: t(e.content, n)
                }, n.key)
            }
        }),
        assetImage: {
            order: 5,
            match(e, t) {
                let n = e.match(f);
                if (null != n) {
                    let e = n[2],
                        r = t.assets.find(t => t.id === e);
                    return null != r && [...n, r, t.applicationId]
                }
                return !1
            },
            parse: e => ({
                asset: e[3],
                alt: e[1],
                applicationId: e[4]
            }),
            react: (e, t, n) => (0, r.jsx)("div", {
                className: m.c6,
                children: (0, r.jsx)("img", {
                    alt: e.alt,
                    src: (0, p.YE)(e.applicationId, e.asset, 800),
                    className: m.LY
                })
            }, n.key)
        }
    }),
    v = o().parserFor(x),
    j = o().reactFor(o().ruleOutput(x, "react"));
class A extends l.PureComponent {
    componentDidMount() {
        if (null != this._container) {
            let {
                height: e
            } = this._container.getBoundingClientRect();
            this.setState({
                collapsable: e > 400
            })
        }
    }
    render() {
        let {
            applicationId: e,
            description: t,
            blurb: n,
            className: l,
            assets: i
        } = this.props, {
            collapsed: s,
            collapsable: o
        } = this.state;
        return (0, r.jsxs)("div", {
            className: l,
            children: [(0, r.jsx)("div", {
                className: a()({
                    [m.yZ]: o && s
                }),
                children: (0, r.jsxs)("div", {
                    ref: this.setContentContainerRef,
                    children: [(0, r.jsx)("div", {
                        className: m.I0,
                        children: n
                    }), (0, r.jsx)(u.A, {
                        className: m.h_,
                        parser: v,
                        output: j,
                        state: {
                            assets: i,
                            applicationId: e
                        },
                        children: t
                    })]
                })
            }), o ? (0, r.jsx)(c.$n, {
                className: m.OZ,
                onClick: this.handleToggleCollapse,
                color: c.$n.Colors.PRIMARY,
                children: s ? h.intl.string(h.t.DxcOXA) : h.intl.string(h.t.rD6EaA)
            }) : null]
        })
    }
    constructor(...e) {
        super(...e), g(this, "state", {
            collapsed: !0,
            collapsable: !0
        }), g(this, "_container", void 0), g(this, "handleToggleCollapse", () => {
            this.setState({
                collapsed: !this.state.collapsed
            })
        }), g(this, "setContentContainerRef", e => {
            this._container = e
        })
    }
}
let y = A