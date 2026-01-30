/** chunk id: 115884, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => S
}), n(896048), n(733351), n(747238);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    l = n.n(a),
    s = n(284009),
    c = n.n(s),
    u = n(421380),
    o = n(397927),
    d = n(49229),
    p = n(915089),
    b = n(395422),
    f = n(652215),
    h = n(650583),
    m = n(985018),
    x = n(680982),
    g = n(473169);

function v(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            var r;
            r = n[t], t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r
        })
    }
    return e
}

function y(e, t) {
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
let j = n(892799),
    O = {
        canSend: !1,
        hint: null,
        success: null,
        error: null
    },
    _ = (0, p.Ld)(),
    R = "".concat(_, "-decription"),
    w = "".concat(_, "-error");

function N(e, t) {
    switch (t.type) {
        case "RESET":
            return O;
        case "SUCCESS":
            return y(v({}, O), {
                success: t.text
            });
        case "HINT":
            return y(v({}, O), {
                canSend: !0,
                hint: t.text
            });
        case "ERROR":
            return y(v({}, e), {
                canSend: !0,
                error: t.text
            })
    }
}

function S(e) {
    let {
        placeholder: t = m.intl.string(m.t["Rn/sLl"])
    } = e, n = i.useRef(null), a = i.useRef(null), [s, p] = i.useReducer(N, O), {
        canSend: v,
        hint: y,
        error: S,
        success: k
    } = s;
    return i.useEffect(() => {
        null != k && (c()(null != n.current, "Input is submitting when not mounted"), n.current.value = "", n.current.focus())
    }, [k, n]), (0, r.jsxs)("form", {
        onSubmit: e => {
            e.preventDefault(), c()(null != n.current, "Input is submitted when not mounted");
            let t = n.current.value.trim();
            !t.includes("#") && t.startsWith("@") && (t = t.substring(1));
            let r = (0, b.Ty)(t);
            null != r ? p({
                type: "ERROR",
                text: r
            }) : d.A.sendRequest({
                discordTag: t,
                context: {
                    location: "Add Friend"
                }
            }).then(() => p({
                type: "SUCCESS",
                text: m.intl.format(m.t.Rtl1Ep, {
                    discordTag: t
                })
            }), e => {
                var n;
                return p({
                    type: "ERROR",
                    text: (0, b.vU)(null == (n = e.body) ? void 0 : n.code, t)
                })
            })
        },
        autoComplete: "off",
        children: [(0, r.jsxs)("div", {
            className: x.QR,
            children: [(0, r.jsx)(o.Text, {
                tag: "div",
                variant: "heading-md/normal",
                children: m.intl.string(m.t["Rn/sLl"])
            }), (0, r.jsx)("img", {
                src: j,
                alt: "Wumpus Waving"
            })]
        }), (0, r.jsx)(o.vN3, {
            focusTarget: n,
            ringTarget: a,
            ringClassName: x.hN,
            children: (0, r.jsxs)("div", {
                ref: a,
                className: l()(x.fc, {
                    [x.kX]: k,
                    [x.z3]: S
                }),
                children: [(0, r.jsx)(u.ob, {
                    id: _,
                    inputRef: n,
                    className: x.QP,
                    inputClassName: x.hF,
                    onKeyPress: e => {
                        let t = e.currentTarget.value;
                        if (e.key !== h.N$.Enter && t.includes("#")) {
                            c()(null != n.current, "Input is handling keypress when not mounted");
                            let r = t.indexOf("#"),
                                i = n.current.selectionStart,
                                a = e.key === h.N$.Backspace || e.key === h.N$.ArrowRight || e.key === h.N$.ArrowLeft,
                                l = e.which >= 48 && e.which <= 57;
                            null != i && i > r && /^(.+?#\d{4})$/.test(t) && !a ? e.preventDefault() : null == i || !(i > r) || l || a || e.preventDefault()
                        }
                    },
                    onChange: e => {
                        if (e.length <= 0) return void p({
                            type: "RESET"
                        });
                        let t = "",
                            [, n] = e.split("#");
                        null != n && (t = e + f.RoK.slice(null != n ? n.length + 1 : 0)), p({
                            type: "HINT",
                            text: t
                        })
                    },
                    maxLength: 37,
                    autoFocus: !0,
                    autoComplete: "off",
                    name: "add-friend",
                    "data-form-type": "other",
                    "data-lpignore": !0,
                    "data-1p-ignore": !0,
                    placeholder: t,
                    "aria-label": t,
                    "aria-invalid": null != S || void 0,
                    "aria-describedby": null != S ? w : R
                }), null != y && (0, r.jsx)("div", {
                    className: x.dQ,
                    "aria-hidden": !0,
                    children: y
                }), (0, r.jsx)(o.Button, {
                    variant: "primary",
                    size: "sm",
                    text: m.intl.string(m.t["PMsq/b"]),
                    disabled: !v,
                    type: "submit"
                })]
            })
        }), null != S && (0, r.jsx)("div", {
            role: "alert",
            children: (0, r.jsx)(o.Text, {
                id: w,
                variant: "text-sm/normal",
                className: g.Ot,
                color: "text-feedback-critical",
                children: S
            })
        }), null != k && (0, r.jsx)("div", {
            role: "status",
            children: (0, r.jsx)(o.Text, {
                variant: "text-sm/normal",
                className: g.Ot,
                color: "text-feedback-positive",
                children: k
            })
        })]
    })
}