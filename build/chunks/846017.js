/** chunk id: 846017 params = (module,exports,require) **/
n.d(t, {
    default: () => _
});
var i = n(627968),
    s = n(64700),
    l = n(158954),
    a = n(311907),
    r = n(397927),
    o = n(631670),
    d = n(836602),
    c = n(828578),
    u = n(652215),
    m = n(985018);

function _(e) {
    let {
        transitionState: t,
        onSuccess: n,
        onClose: _,
        requirementsUpdated: g
    } = e, [x, A] = s.useState(""), [h, p] = s.useState(""), [f, T] = s.useState(""), [S, E] = s.useState(null), [b, C] = s.useState(null), {
        formState: v,
        errors: N
    } = (0, a.cf)([d.A], () => ({
        formState: d.A.getFormState(),
        errors: d.A.getErrors()
    })), I = s.useRef(null);
    async function j(e) {
        e.preventDefault(), (0, o.x8)();
        let t = !1;
        if ("" === h ? (E(m.intl.string(m.t["/7/oPU"])), t = !0) : E(null), h !== f ? (C(m.intl.string(m.t["IEKYZ/"])), t = !0) : C(null), t) return;
        let i = await (0, o._L)({
            password: x,
            newPassword: h
        });
        i?.ok ? n() : i?.body?.username != null && (0, c.E)()
    }
    return s.useEffect(() => {
        t === r.ip4.ENTERED && I.current?.focus()
    }, [t]), (0, i.jsx)("form", {
        onSubmit: j,
        children: (0, i.jsx)(l.Modal, {
            transitionState: t,
            onClose: _,
            title: m.intl.string(m.t.geta79),
            subtitle: g ? m.intl.string(m.t["37iHbZ"]) : m.intl.string(m.t.iOurYj),
            actions: [{
                variant: "secondary",
                text: m.intl.string(m.t["ETE/oC"]),
                onClick: _
            }, {
                variant: "primary",
                text: m.intl.string(m.t.i4jeWR),
                loading: v === u.XlH.SUBMITTING,
                type: "submit"
            }],
            children: (0, i.jsxs)(r.BJc, {
                gap: 20,
                children: [(0, i.jsx)(r.ksK, {
                    label: m.intl.string(m.t.WBqMRQ),
                    error: N?.password?.[0],
                    type: "password",
                    value: x,
                    onChange: A,
                    inputRef: I,
                    autoComplete: "current-password",
                    required: !0
                }), (0, i.jsx)(r.ksK, {
                    label: m.intl.string(m.t["8dM4FO"]),
                    error: N?.new_password?.[0] ?? S ?? void 0,
                    type: "password",
                    value: h,
                    onChange: p,
                    autoComplete: "new-password",
                    required: !0
                }), (0, i.jsx)(r.ksK, {
                    label: m.intl.string(m.t.iQG2KC),
                    error: b ?? void 0,
                    type: "password",
                    value: f,
                    onChange: T,
                    autoComplete: "new-password",
                    required: !0
                })]
            })
        })
    })
}