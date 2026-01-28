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
    u = n(631670),
    o = n(752319),
    d = n(592074),
    p = n(652215),
    c = n(985018);

function g(t) {
    var e, n, g, v;
    let {
        transitionState: w,
        onSuccess: f,
        onClose: b,
        requirementsUpdated: h
    } = t, [C, E] = r.useState(""), [k, y] = r.useState(""), [m, x] = r.useState(""), [S, T] = r.useState(null), [j, R] = r.useState(null), A = (0, i.bG)([o.A], () => o.A.getErrors()), G = (0, i.bG)([o.A], () => o.A.getFormState()), K = r.useRef(null);
    async function q(t) {
        t.preventDefault(), (0, u.x8)();
        let e = !1;
        if ("" === k ? (T(c.intl.string(c.t["/7/oPU"])), e = !0) : T(null), k !== m ? (R(c.intl.string(c.t["IEKYZ/"])), e = !0) : R(null), e) return;
        let n = await (0, u.yu)({
            password: C,
            newPassword: k
        });
        if (null == n ? void 0 : n.ok) f();
        else {
            var l;
            (null == n || null == (l = n.body) ? void 0 : l.username) != null && (0, d.E)()
        }
    }
    return r.useEffect(() => {
        if (w === a.ip4.ENTERED) {
            var t;
            null == (t = K.current) || t.focus()
        }
    }, [w]), (0, l.jsx)("form", {
        onSubmit: q,
        children: (0, l.jsx)(s.Modal, {
            transitionState: w,
            onClose: b,
            title: c.intl.string(c.t.geta79),
            subtitle: h ? c.intl.string(c.t["37iHbZ"]) : c.intl.string(c.t.iOurYj),
            actions: [{
                variant: "secondary",
                text: c.intl.string(c.t["ETE/oC"]),
                onClick: b
            }, {
                variant: "primary",
                text: c.intl.string(c.t.i4jeWR),
                loading: G === p.XlH.SUBMITTING,
                type: "submit"
            }],
            children: (0, l.jsxs)(a.BJc, {
                gap: 20,
                children: [(0, l.jsx)(a.ksK, {
                    label: c.intl.string(c.t.WBqMRQ),
                    error: null == A || null == (g = A.password) ? void 0 : g[0],
                    type: "password",
                    value: C,
                    onChange: E,
                    inputRef: K,
                    autoComplete: "current-password",
                    required: !0
                }), (0, l.jsx)(a.ksK, {
                    label: c.intl.string(c.t["8dM4FO"]),
                    error: null != (e = null != (n = null == A || null == (v = A.new_password) ? void 0 : v[0]) ? n : S) ? e : void 0,
                    type: "password",
                    value: k,
                    onChange: y,
                    autoComplete: "new-password",
                    required: !0
                }), (0, l.jsx)(a.ksK, {
                    label: c.intl.string(c.t.iQG2KC),
                    error: null != j ? j : void 0,
                    type: "password",
                    value: m,
                    onChange: x,
                    autoComplete: "new-password",
                    required: !0
                })]
            })
        })
    })
}