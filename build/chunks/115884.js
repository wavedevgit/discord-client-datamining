/** chunk id: 115884, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => x
});
var i = n(627968),
    r = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(284009),
    o = n.n(s),
    d = n(421380),
    c = n(397927),
    u = n(49229),
    A = n(915089),
    h = n(395422),
    _ = n(652215),
    m = n(650583),
    p = n(985018),
    g = n(932568),
    E = n(522759);
let I = n(892799),
    f = {
        canSend: !1,
        hint: null,
        success: null,
        error: null
    },
    C = (0, A.Ld)(),
    T = `${C}-decription`,
    N = `${C}-error`;

function S(e, t) {
    switch (t.type) {
        case "RESET":
            return f;
        case "SUCCESS":
            return {
                ...f, success: t.text
            };
        case "HINT":
            return {
                ...f, canSend: !0, hint: t.text
            };
        case "ERROR":
            return {
                ...e, canSend: !0, error: t.text
            }
    }
}

function x(e) {
    let {
        placeholder: t = p.intl.string(p.t["Rn/sLl"])
    } = e, n = r.useRef(null), l = r.useRef(null), [s, A] = r.useReducer(S, f), {
        canSend: x,
        hint: v,
        error: y,
        success: b
    } = s;
    return r.useEffect(() => {
        null != b && (o()(null != n.current, "Input is submitting when not mounted"), n.current.value = "", n.current.focus())
    }, [b, n]), (0, i.jsxs)("form", {
        onSubmit: e => {
            e.preventDefault(), o()(null != n.current, "Input is submitted when not mounted");
            let t = n.current.value.trim();
            !t.includes("#") && t.startsWith("@") && (t = t.substring(1));
            let i = (0, h.Ty)(t);
            null != i ? A({
                type: "ERROR",
                text: i
            }) : u.A.sendRequest({
                discordTag: t,
                context: {
                    location: "Add Friend"
                }
            }).then(() => A({
                type: "SUCCESS",
                text: p.intl.format(p.t.Rtl1Ep, {
                    discordTag: t
                })
            }), e => A({
                type: "ERROR",
                text: (0, h.vU)(e.body?.code, t)
            }))
        },
        autoComplete: "off",
        children: [(0, i.jsxs)("div", {
            className: g.QR,
            children: [(0, i.jsx)(c.Text, {
                tag: "div",
                variant: "heading-md/normal",
                children: p.intl.string(p.t["Rn/sLl"])
            }), (0, i.jsx)("img", {
                src: I,
                alt: "Wumpus Waving"
            })]
        }), (0, i.jsx)(c.vN3, {
            focusTarget: n,
            ringTarget: l,
            ringClassName: g.hN,
            children: (0, i.jsxs)("div", {
                ref: l,
                className: a()(g.fc, {
                    [g.kX]: b,
                    [g.z3]: y
                }),
                children: [(0, i.jsx)(d.ob, {
                    id: C,
                    inputRef: n,
                    className: g.QP,
                    inputClassName: g.hF,
                    onKeyPress: e => {
                        let t = e.currentTarget.value;
                        if (e.key !== m.N$.Enter && t.includes("#")) {
                            o()(null != n.current, "Input is handling keypress when not mounted");
                            let i = t.indexOf("#"),
                                r = n.current.selectionStart,
                                l = e.key === m.N$.Backspace || e.key === m.N$.ArrowRight || e.key === m.N$.ArrowLeft,
                                a = e.which >= 48 && e.which <= 57;
                            null != r && r > i && /^(.+?#\d{4})$/.test(t) && !l ? e.preventDefault() : null == r || !(r > i) || a || l || e.preventDefault()
                        }
                    },
                    onChange: e => {
                        if (e.length <= 0) return void A({
                            type: "RESET"
                        });
                        let t = "",
                            [, n] = e.split("#");
                        null != n && (t = e + _.RoK.slice(null != n ? n.length + 1 : 0)), A({
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
                    "aria-invalid": null != y || void 0,
                    "aria-describedby": null != y ? N : T
                }), null != v && (0, i.jsx)("div", {
                    className: g.dQ,
                    "aria-hidden": !0,
                    children: v
                }), (0, i.jsx)(c.Button, {
                    variant: "primary",
                    size: "sm",
                    text: p.intl.string(p.t["PMsq/b"]),
                    disabled: !x,
                    type: "submit"
                })]
            })
        }), null != y && (0, i.jsx)("div", {
            role: "alert",
            children: (0, i.jsx)(c.Text, {
                id: N,
                variant: "text-sm/normal",
                className: E.Ot,
                color: "text-feedback-critical",
                children: y
            })
        }), null != b && (0, i.jsx)("div", {
            role: "status",
            children: (0, i.jsx)(c.Text, {
                variant: "text-sm/normal",
                className: E.Ot,
                color: "text-feedback-positive",
                children: b
            })
        })]
    })
}