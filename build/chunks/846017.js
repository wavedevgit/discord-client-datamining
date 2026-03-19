/** chunk id: 846017 params = (module,exports,require) **/
n.d(e, {
    default: () => p
});
var r = n(627968),
    i = n(64700),
    _ = n(158954),
    a = n(311907),
    o = n(397927),
    s = n(631670),
    l = n(836602),
    E = n(828578),
    d = n(652215),
    S = n(985018);

function p(t) {
    let {
        transitionState: e,
        onSuccess: n,
        onClose: p,
        requirementsUpdated: u
    } = t, [c, T] = i.useState(""), [h, R] = i.useState(""), [I, A] = i.useState(""), [N, U] = i.useState(null), [y, f] = i.useState(null), {
        formState: C,
        errors: L
    } = (0, a.cf)([l.A], () => ({
        formState: l.A.getFormState(),
        errors: l.A.getErrors()
    })), O = i.useRef(null);
    async function v(t) {
        t.preventDefault(), (0, s.x8)();
        let e = !1;
        if ("" === h ? (U(S.intl.string(S.t["/7/oPU"])), e = !0) : U(null), h !== I ? (f(S.intl.string(S.t["IEKYZ/"])), e = !0) : f(null), e) return;
        let r = await (0, s._L)({
            password: c,
            newPassword: h
        });
        r?.ok ? n() : r?.body?.username != null && (0, E.E)()
    }
    return i.useEffect(() => {
        e === o.ip4.ENTERED && O.current?.focus()
    }, [e]), (0, r.jsx)("form", {
        onSubmit: v,
        children: (0, r.jsx)(_.Modal, {
            transitionState: e,
            onClose: p,
            title: S.intl.string(S.t.geta79),
            subtitle: u ? S.intl.string(S.t["37iHbZ"]) : S.intl.string(S.t.iOurYj),
            actions: [{
                variant: "secondary",
                text: S.intl.string(S.t["ETE/oC"]),
                onClick: p
            }, {
                variant: "primary",
                text: S.intl.string(S.t.i4jeWR),
                loading: C === d.XlH.SUBMITTING,
                type: "submit"
            }],
            children: (0, r.jsxs)(o.BJc, {
                gap: 20,
                children: [(0, r.jsx)(o.ksK, {
                    label: S.intl.string(S.t.WBqMRQ),
                    error: L?.password?.[0],
                    type: "password",
                    value: c,
                    onChange: T,
                    inputRef: O,
                    autoComplete: "current-password",
                    required: !0
                }), (0, r.jsx)(o.ksK, {
                    label: S.intl.string(S.t["8dM4FO"]),
                    error: L?.new_password?.[0] ?? N ?? void 0,
                    type: "password",
                    value: h,
                    onChange: R,
                    autoComplete: "new-password",
                    required: !0
                }), (0, r.jsx)(o.ksK, {
                    label: S.intl.string(S.t.iQG2KC),
                    error: y ?? void 0,
                    type: "password",
                    value: I,
                    onChange: A,
                    autoComplete: "new-password",
                    required: !0
                })]
            })
        })
    })
}