/** chunk id: 709808, original params: e,t,a (module,exports,require) **/
a.d(t, {
    B: () => N
}), a(638769), a(896048);
var r = a(627968),
    s = a(64700),
    l = a(503698),
    n = a.n(l),
    i = a(946015),
    o = a(489569),
    c = a(563853),
    d = a(855522),
    u = a(128262);

function _(e, t, a) {
    return t in e ? Object.defineProperty(e, t, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = a, e
}
class N extends s.PureComponent {
    componentDidMount() {
        this.callChangeLocale(d.A.getLocale())
    }
    render() {
        let {
            isOpen: e,
            languages: t,
            current: s
        } = this.state, {
            className: l
        } = this.props, d = null;
        return null != t && (d = t.sort((e, t) => e.code < t.code ? -1 : +(e.code > t.code)).map(e => {
            let t = function(e) {
                    try {
                        return a(579832)("./".concat(e, ".png"))
                    } catch (e) {
                        return null
                    }
                }(e.code),
                l = () => this.setLocale(e.code);
            return null == t ? null : (0, r.jsxs)("li", {
                className: (0, o.t)(u, "locale", null != s && e.code === s.code ? "Current" : null),
                onClick: l,
                children: [(0, r.jsx)("img", {
                    className: u.localeImage,
                    src: t,
                    alt: e.name
                }), e.name]
            }, e.code)
        })), (0, r.jsxs)("div", {
            className: n()(u.localePicker, l),
            onMouseEnter: this.open,
            onMouseLeave: this.close,
            onClick: this.toggle,
            children: [(0, r.jsxs)(i.s, {
                align: i.s.Align.CENTER,
                className: (0, o.t)(u, "opener", e ? "Open" : null),
                children: [(0, r.jsx)("span", {
                    className: u.line
                }), (0, r.jsx)("img", {
                    className: u.localeIcon,
                    src: c.T.ICON_TRANSLATE,
                    alt: "Choose Locale"
                }), (0, r.jsx)("img", {
                    className: u.arrowIcon,
                    src: c.T.ICON_ARROW_DOWN,
                    alt: "Open Locale"
                })]
            }), (0, r.jsx)("ul", {
                className: (0, o.t)(u, "localeList", e ? "Open" : "Closed"),
                children: d
            })]
        })
    }
    constructor(...e) {
        super(...e), _(this, "state", {
            languages: d.A.getLanguages().filter(e => e.enabled),
            current: d.A.getLocaleInfo(),
            isOpen: !1
        }), _(this, "setLocale", e => {
            null != d.A && (d.A.setLocale(e), this.callChangeLocale(e))
        }), _(this, "callChangeLocale", e => {
            let {
                onChange: t
            } = this.props;
            null != t && t(e)
        }), _(this, "open", () => {
            this.setState({
                isOpen: !0
            })
        }), _(this, "close", () => {
            this.setState({
                isOpen: !1
            })
        }), _(this, "toggle", () => {
            let {
                isOpen: e
            } = this.state;
            this.setState({
                isOpen: !e
            })
        })
    }
}