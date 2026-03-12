/** chunk id: 739693 params = (module,exports,require) **/
r.d(e, {
    default: () => g
});
var n = r(627968),
    s = r(64700),
    i = r(158954),
    a = r(311907),
    l = r(397927),
    o = r(631670),
    u = r(836602),
    d = r(592074),
    p = r(652215),
    c = r(985018);

function g(t) {
    let {
        transitionState: e,
        onSuccess: r,
        onClose: g,
        requirementsUpdated: w
    } = t, [f, h] = s.useState(""), [C, E] = s.useState(""), [b, k] = s.useState(""), [m, v] = s.useState(null), [S, x] = s.useState(null), {
        formState: y,
        errors: T
    } = (0, a.cf)([u.A], () => ({
        formState: u.A.getFormState(),
        errors: u.A.getErrors()
    })), j = s.useRef(null);
    async function R(t) {
        t.preventDefault(), (0, o.x8)();
        let e = !1;
        if ("" === C ? (v(c.intl.string(c.t["/7/oPU"])), e = !0) : v(null), C !== b ? (x(c.intl.string(c.t["IEKYZ/"])), e = !0) : x(null), e) return;
        let n = await (0, o._L)({
            password: f,
            newPassword: C
        });
        n?.ok ? r() : n?.body?.username != null && (0, d.E)()
    }
    return s.useEffect(() => {
        e === l.ip4.ENTERED && j.current?.focus()
    }, [e]), (0, n.jsx)("form", {
        onSubmit: R,
        children: (0, n.jsx)(i.Modal, {
            transitionState: e,
            onClose: g,
            title: c.intl.string(c.t.geta79),
            subtitle: w ? c.intl.string(c.t["37iHbZ"]) : c.intl.string(c.t.iOurYj),
            actions: [{
                variant: "secondary",
                text: c.intl.string(c.t["ETE/oC"]),
                onClick: g
            }, {
                variant: "primary",
                text: c.intl.string(c.t.i4jeWR),
                loading: y === p.XlH.SUBMITTING,
                type: "submit"
            }],
            children: (0, n.jsxs)(l.BJc, {
                gap: 20,
                children: [(0, n.jsx)(l.ksK, {
                    label: c.intl.string(c.t.WBqMRQ),
                    error: T?.password?.[0],
                    type: "password",
                    value: f,
                    onChange: h,
                    inputRef: j,
                    autoComplete: "current-password",
                    required: !0
                }), (0, n.jsx)(l.ksK, {
                    label: c.intl.string(c.t["8dM4FO"]),
                    error: T?.new_password?.[0] ?? m ?? void 0,
                    type: "password",
                    value: C,
                    onChange: E,
                    autoComplete: "new-password",
                    required: !0
                }), (0, n.jsx)(l.ksK, {
                    label: c.intl.string(c.t.iQG2KC),
                    error: S ?? void 0,
                    type: "password",
                    value: b,
                    onChange: k,
                    autoComplete: "new-password",
                    required: !0
                })]
            })
        })
    })
}