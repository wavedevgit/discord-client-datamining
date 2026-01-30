/** chunk id: 672551, original params: e,t,r (module,exports,require) **/
r.d(t, {
    default: () => g
}), r(896048);
var n = r(627968),
    o = r(64700),
    s = r(732955),
    i = r(397927),
    l = r(817281),
    a = r(268218),
    c = r(711014),
    h = r(652215),
    p = r(114329),
    u = r(985018),
    d = r(48835);

function b(e, t, r) {
    return t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e
}
let f = (0, a.Fe)({
    createPromise: () => r.e("66147").then(r.bind(r, 48736)),
    webpackId: 48736
});
class O extends o.PureComponent {
    render() {
        let {
            transitionState: e,
            onClose: t
        } = this.props, {
            name: r,
            color: o
        } = this.state;
        return (0, n.jsx)("form", {
            onSubmit: this.handleSubmit,
            children: (0, n.jsx)(s.aFV, {
                title: u.intl.string(u.t.Dx7im5),
                actions: [{
                    variant: "primary",
                    text: u.intl.string(u.t.i4jeWR),
                    type: "submit"
                }],
                transitionState: e,
                onClose: t,
                children: (0, n.jsxs)(i.BJc, {
                    gap: 16,
                    children: [(0, n.jsx)(i.ksK, {
                        label: u.intl.string(u.t.tGRbjA),
                        maxLength: h.F05,
                        value: r,
                        onChange: this.handleNameChange,
                        placeholder: u.intl.string(u.t.xV9hVh),
                        autoFocus: !0
                    }), (0, n.jsx)(i.D0$, {
                        label: u.intl.string(u.t.xpurRF),
                        children: (0, n.jsx)(f, {
                            className: d.E,
                            defaultColor: p.DO,
                            colors: h._tK,
                            value: null != o ? o : p.DO,
                            onChange: this.handleColorChange
                        })
                    })]
                })
            })
        })
    }
    constructor(...e) {
        var t;
        super(...e), b(this, "state", {
            name: null != (t = this.props.folderName) ? t : "",
            color: this.props.folderColor
        }), b(this, "close", () => {
            this.props.onClose()
        }), b(this, "handleNameChange", e => {
            this.setState({
                name: e
            })
        }), b(this, "handleColorChange", e => {
            this.setState({
                color: e
            })
        }), b(this, "handleSubmit", e => {
            e.preventDefault();
            let {
                folderId: t
            } = this.props, {
                name: r,
                color: n
            } = this.state, o = c.Ay.getGuildFolders().map(e => {
                var o, s;
                return e.folderId === t ? (o = function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))), n.forEach(function(t) {
                            b(e, t, r[t])
                        })
                    }
                    return e
                }({}, e), s = s = {
                    folderName: r,
                    folderColor: n
                }, Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(s)) : (function(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        r.push.apply(r, n)
                    }
                    return r
                })(Object(s)).forEach(function(e) {
                    Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(s, e))
                }), o) : e
            });
            (0, l.um)(o), this.close()
        })
    }
}
let g = O