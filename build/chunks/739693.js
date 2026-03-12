/** chunk id: 739693 params = (module,exports,require) **/
n.d(t, {
    default: () => m
});
var i = n(627968),
    s = n(64700),
    l = n(158954),
    r = n(311907),
    a = n(397927),
    o = n(631670),
    d = n(836602),
    c = n(592074),
    u = n(652215),
    _ = n(985018);

function m(e) {
    let {
        transitionState: t,
        onSuccess: n,
        onClose: m,
        requirementsUpdated: g
    } = e, [A, h] = s.useState(""), [x, p] = s.useState(""), [T, E] = s.useState(""), [C, S] = s.useState(null), [f, N] = s.useState(null), {
        formState: b,
        errors: I
    } = (0, r.cf)([d.A], () => ({
        formState: d.A.getFormState(),
        errors: d.A.getErrors()
    })), v = s.useRef(null);
    async function j(e) {
        e.preventDefault(), (0, o.x8)();
        let t = !1;
        if ("" === x ? (S(_.intl.string(_.t["/7/oPU"])), t = !0) : S(null), x !== T ? (N(_.intl.string(_.t["IEKYZ/"])), t = !0) : N(null), t) return;
        let i = await (0, o._L)({
            password: A,
            newPassword: x
        });
        i?.ok ? n() : i?.body?.username != null && (0, c.E)()
    }
    return s.useEffect(() => {
        t === a.ip4.ENTERED && v.current?.focus()
    }, [t]), (0, i.jsx)("form", {
        onSubmit: j,
        children: (0, i.jsx)(l.Modal, {
            transitionState: t,
            onClose: m,
            title: _.intl.string(_.t.geta79),
            subtitle: g ? _.intl.string(_.t["37iHbZ"]) : _.intl.string(_.t.iOurYj),
            actions: [{
                variant: "secondary",
                text: _.intl.string(_.t["ETE/oC"]),
                onClick: m
            }, {
                variant: "primary",
                text: _.intl.string(_.t.i4jeWR),
                loading: b === u.XlH.SUBMITTING,
                type: "submit"
            }],
            children: (0, i.jsxs)(a.BJc, {
                gap: 20,
                children: [(0, i.jsx)(a.ksK, {
                    label: _.intl.string(_.t.WBqMRQ),
                    error: I?.password?.[0],
                    type: "password",
                    value: A,
                    onChange: h,
                    inputRef: v,
                    autoComplete: "current-password",
                    required: !0
                }), (0, i.jsx)(a.ksK, {
                    label: _.intl.string(_.t["8dM4FO"]),
                    error: I?.new_password?.[0] ?? C ?? void 0,
                    type: "password",
                    value: x,
                    onChange: p,
                    autoComplete: "new-password",
                    required: !0
                }), (0, i.jsx)(a.ksK, {
                    label: _.intl.string(_.t.iQG2KC),
                    error: f ?? void 0,
                    type: "password",
                    value: T,
                    onChange: E,
                    autoComplete: "new-password",
                    required: !0
                })]
            })
        })
    })
}