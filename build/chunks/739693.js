/** chunk id: 739693 params = (module,exports,require) **/
n.d(t, {
    default: () => g
});
var i = n(627968),
    s = n(64700),
    l = n(158954),
    a = n(311907),
    r = n(397927),
    o = n(631670),
    d = n(836602),
    c = n(592074),
    u = n(652215),
    _ = n(985018);

function g(e) {
    let {
        transitionState: t,
        onSuccess: n,
        onClose: g,
        requirementsUpdated: m
    } = e, [A, h] = s.useState(""), [p, x] = s.useState(""), [E, T] = s.useState(""), [S, C] = s.useState(null), [f, I] = s.useState(null), {
        formState: b,
        errors: N
    } = (0, a.cf)([d.A], () => ({
        formState: d.A.getFormState(),
        errors: d.A.getErrors()
    })), v = s.useRef(null);
    async function j(e) {
        e.preventDefault(), (0, o.x8)();
        let t = !1;
        if ("" === p ? (C(_.intl.string(_.t["/7/oPU"])), t = !0) : C(null), p !== E ? (I(_.intl.string(_.t["IEKYZ/"])), t = !0) : I(null), t) return;
        let i = await (0, o._L)({
            password: A,
            newPassword: p
        });
        i?.ok ? n() : i?.body?.username != null && (0, c.E)()
    }
    return s.useEffect(() => {
        t === r.ip4.ENTERED && v.current?.focus()
    }, [t]), (0, i.jsx)("form", {
        onSubmit: j,
        children: (0, i.jsx)(l.Modal, {
            transitionState: t,
            onClose: g,
            title: _.intl.string(_.t.geta79),
            subtitle: m ? _.intl.string(_.t["37iHbZ"]) : _.intl.string(_.t.iOurYj),
            actions: [{
                variant: "secondary",
                text: _.intl.string(_.t["ETE/oC"]),
                onClick: g
            }, {
                variant: "primary",
                text: _.intl.string(_.t.i4jeWR),
                loading: b === u.XlH.SUBMITTING,
                type: "submit"
            }],
            children: (0, i.jsxs)(r.BJc, {
                gap: 20,
                children: [(0, i.jsx)(r.ksK, {
                    label: _.intl.string(_.t.WBqMRQ),
                    error: N?.password?.[0],
                    type: "password",
                    value: A,
                    onChange: h,
                    inputRef: v,
                    autoComplete: "current-password",
                    required: !0
                }), (0, i.jsx)(r.ksK, {
                    label: _.intl.string(_.t["8dM4FO"]),
                    error: N?.new_password?.[0] ?? S ?? void 0,
                    type: "password",
                    value: p,
                    onChange: x,
                    autoComplete: "new-password",
                    required: !0
                }), (0, i.jsx)(r.ksK, {
                    label: _.intl.string(_.t.iQG2KC),
                    error: f ?? void 0,
                    type: "password",
                    value: E,
                    onChange: T,
                    autoComplete: "new-password",
                    required: !0
                })]
            })
        })
    })
}