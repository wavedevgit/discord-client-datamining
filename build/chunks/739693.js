/** Chunk was on 10302 **/
/** chunk id: 739693, original params: t,e,n (module,exports,require) **/
n.d(e, {
    default: () => g
}), n(896048);
var l = n(627968),
    r = n(64700),
    s = n(158954),
    i = n(311907),
    a = n(397927),
    o = n(631670),
    u = n(836602),
    d = n(592074),
    p = n(652215),
    c = n(985018);

function g(t) {
    var e, n, g, v;
    let {
        transitionState: f,
        onSuccess: w,
        onClose: h,
        requirementsUpdated: C
    } = t, [E, b] = r.useState(""), [k, m] = r.useState(""), [y, S] = r.useState(""), [x, T] = r.useState(null), [j, R] = r.useState(null), {
        formState: K,
        errors: q
    } = (0, i.cf)([u.A], () => ({
        formState: u.A.getFormState(),
        errors: u.A.getErrors()
    })), A = r.useRef(null);
    async function I(t) {
        t.preventDefault(), (0, o.x8)();
        let e = !1;
        if ("" === k ? (T(c.intl.string(c.t["/7/oPU"])), e = !0) : T(null), k !== y ? (R(c.intl.string(c.t["IEKYZ/"])), e = !0) : R(null), e) return;
        let n = await (0, o.yu)({
            password: E,
            newPassword: k
        });
        if (null == n ? void 0 : n.ok) w();
        else {
            var l;
            (null == n || null == (l = n.body) ? void 0 : l.username) != null && (0, d.E)()
        }
    }
    return r.useEffect(() => {
        if (f === a.ip4.ENTERED) {
            var t;
            null == (t = A.current) || t.focus()
        }
    }, [f]), (0, l.jsx)("form", {
        onSubmit: I,
        children: (0, l.jsx)(s.Modal, {
            transitionState: f,
            onClose: h,
            title: c.intl.string(c.t.geta79),
            subtitle: C ? c.intl.string(c.t["37iHbZ"]) : c.intl.string(c.t.iOurYj),
            actions: [{
                variant: "secondary",
                text: c.intl.string(c.t["ETE/oC"]),
                onClick: h
            }, {
                variant: "primary",
                text: c.intl.string(c.t.i4jeWR),
                loading: K === p.XlH.SUBMITTING,
                type: "submit"
            }],
            children: (0, l.jsxs)(a.BJc, {
                gap: 20,
                children: [(0, l.jsx)(a.ksK, {
                    label: c.intl.string(c.t.WBqMRQ),
                    error: null == q || null == (g = q.password) ? void 0 : g[0],
                    type: "password",
                    value: E,
                    onChange: b,
                    inputRef: A,
                    autoComplete: "current-password",
                    required: !0
                }), (0, l.jsx)(a.ksK, {
                    label: c.intl.string(c.t["8dM4FO"]),
                    error: null != (e = null != (n = null == q || null == (v = q.new_password) ? void 0 : v[0]) ? n : x) ? e : void 0,
                    type: "password",
                    value: k,
                    onChange: m,
                    autoComplete: "new-password",
                    required: !0
                }), (0, l.jsx)(a.ksK, {
                    label: c.intl.string(c.t.iQG2KC),
                    error: null != j ? j : void 0,
                    type: "password",
                    value: y,
                    onChange: S,
                    autoComplete: "new-password",
                    required: !0
                })]
            })
        })
    })
}