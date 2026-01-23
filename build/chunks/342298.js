/** Chunk was on 21968 **/
/** chunk id: 342298, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => y,
    L: () => j
}), n(747238), n(896048);
var i, r = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(284009),
    c = n.n(o),
    d = n(397927),
    u = n(240248),
    p = n(946274),
    m = n(652215),
    g = n(985018),
    b = n(315628);

function f(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function h(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), i.forEach(function(t) {
            f(e, t, n[t])
        })
    }
    return e
}

function x(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            n.push.apply(n, i)
        }
        return n
    })(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}

function j(e) {
    let {
        className: t,
        icon: n = null
    } = e;
    return (0, r.jsx)(d.NPJ, {
        theme: m.NJ8.LIGHT,
        children: e => (0, r.jsx)("div", {
            className: s()(b.XD, t, e),
            children: n
        })
    })
}
class O extends(i = l.PureComponent) {
    handleExternalFileChange(e) {
        c()(null != this.inputRef.current, "ImageInputRef asked to handleExternalFileChange when not mounted"), this.inputRef.current.handleFileChange(e)
    }
    render() {
        var e;
        let t, n, i, l, {
            image: a,
            hint: o,
            name: c,
            makeURL: f,
            disabled: O,
            onChange: y,
            showIcon: A,
            showIconDisabled: v,
            className: _,
            imageClassName: N,
            iconClassName: w,
            iconWrapperClassName: T,
            icon: E,
            hideSize: C,
            imageStyle: S,
            showRemoveButton: I,
            maxFileSizeBytes: P,
            onFileSizeError: k,
            onOpenImageSelectModal: R,
            "aria-label": L
        } = this.props;
        if (null != (t = null != a && /^data:/.test(a) ? a : f(a)) ? n = 'url("'.concat(t, '")') : null != c && (i = (0, r.jsx)(d.Heading, {
                variant: "heading-xxl/normal",
                color: "always-white",
                className: b.nX,
                children: (0, u.oN)(c)
            })), O) return (0, r.jsx)("div", {
            className: s()(b.WY, b.r9, _),
            children: (0, r.jsxs)("div", {
                className: s()(b.Yp, N),
                style: x(h({}, S), {
                    backgroundImage: n
                }),
                children: [i, v && (0, r.jsx)("div", {
                    className: s()(b.XD, b.$N, w),
                    children: E
                })]
            })
        });
        null != a ? l = (0, r.jsx)(d.MzZ, {
            className: b.DT,
            onClick: this.handleRemove,
            children: g.intl.string(g.t.N86XcP)
        }) : C || (l = (0, r.jsx)("small", {
            className: b.UZ,
            children: g.intl.format(g.t.AH4c7Y, {
                size: m.eQT
            })
        }));
        let D = null != (e = null != L ? L : o) ? e : g.intl.string(g.t["Ge+941"]);
        return (0, r.jsxs)("div", {
            className: s()(b.WY, _),
            children: [(0, r.jsx)(d.vN3, {
                within: !0,
                children: (0, r.jsxs)("div", {
                    className: A ? s()(b.U1, T) : void 0,
                    children: [(0, r.jsxs)("div", {
                        className: s()(b.Yp, N),
                        style: x(h({}, S), {
                            backgroundImage: n
                        }),
                        children: [(0, r.jsx)("span", {
                            "aria-hidden": !0,
                            children: i
                        }), null != R ? (0, r.jsx)(d.DUT, {
                            className: b.c4,
                            "aria-label": D,
                            onClick: R
                        }) : (0, r.jsx)(p.Ay, {
                            ref: this.inputRef,
                            onChange: y,
                            className: b.c4,
                            "aria-label": D,
                            tabIndex: 0,
                            maxFileSizeBytes: P,
                            onFileSizeError: k
                        })]
                    }), null != o && (0, r.jsx)("div", {
                        className: b.$J,
                        "aria-hidden": "true",
                        children: o
                    }), A && (0, r.jsx)(j, {
                        className: w,
                        icon: E
                    })]
                })
            }), I ? l : null]
        })
    }
    constructor(...e) {
        super(...e), f(this, "inputRef", l.createRef()), f(this, "handleRemove", () => {
            this.props.onChange(null)
        })
    }
}
f(O, "defaultProps", {
    name: "",
    makeURL: e => e,
    disabled: !1,
    showIcon: !1,
    hideSize: !1,
    showRemoveButton: !0,
    maxFileSizeBytes: 1 / 0,
    icon: null
});
let y = O