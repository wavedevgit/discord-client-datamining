/** Chunk was on 60667 **/
/** chunk id: 739693, original params: e,t,n (module,exports,require) **/
n.d(t, {
    default: () => p
}), n(896048);
var r = n(627968),
    i = n(64700),
    l = n(158954),
    s = n(311907),
    a = n(397927),
    o = n(631670),
    c = n(752319),
    d = n(592074),
    u = n(652215),
    _ = n(985018);

function p(e) {
    var t, n, p, m;
    let {
        transitionState: g,
        onSuccess: A,
        onClose: f,
        requirementsUpdated: h
    } = e, [b, E] = i.useState(""), [x, O] = i.useState(""), [C, T] = i.useState(""), [I, S] = i.useState(null), [j, v] = i.useState(null), N = (0, s.bG)([c.A], () => c.A.getErrors()), y = (0, s.bG)([c.A], () => c.A.getFormState()), P = i.useRef(null);
    async function R(e) {
        e.preventDefault(), (0, o.x8)();
        let t = !1;
        if ("" === x ? (S(_.intl.string(_.t["/7/oPU"])), t = !0) : S(null), x !== C ? (v(_.intl.string(_.t["IEKYZ/"])), t = !0) : v(null), t) return;
        let n = await (0, o.yu)({
            password: b,
            newPassword: x
        });
        if (null == n ? void 0 : n.ok) A();
        else {
            var r;
            (null == n || null == (r = n.body) ? void 0 : r.username) != null && (0, d.E)()
        }
    }
    return i.useEffect(() => {
        if (g === a.ip4.ENTERED) {
            var e;
            null == (e = P.current) || e.focus()
        }
    }, [g]), (0, r.jsx)("form", {
        onSubmit: R,
        children: (0, r.jsx)(l.Modal, {
            transitionState: g,
            onClose: f,
            title: _.intl.string(_.t.geta79),
            subtitle: h ? _.intl.string(_.t["37iHbZ"]) : _.intl.string(_.t.iOurYj),
            actions: [{
                variant: "secondary",
                text: _.intl.string(_.t["ETE/oC"]),
                onClick: f
            }, {
                variant: "primary",
                text: _.intl.string(_.t.i4jeWR),
                loading: y === u.XlH.SUBMITTING,
                type: "submit"
            }],
            children: (0, r.jsxs)(a.BJc, {
                gap: 20,
                children: [(0, r.jsx)(a.ksK, {
                    label: _.intl.string(_.t.WBqMRQ),
                    error: null == N || null == (p = N.password) ? void 0 : p[0],
                    type: "password",
                    value: b,
                    onChange: E,
                    inputRef: P,
                    autoComplete: "current-password",
                    required: !0
                }), (0, r.jsx)(a.ksK, {
                    label: _.intl.string(_.t["8dM4FO"]),
                    error: null != (t = null != (n = null == N || null == (m = N.new_password) ? void 0 : m[0]) ? n : I) ? t : void 0,
                    type: "password",
                    value: x,
                    onChange: O,
                    autoComplete: "new-password",
                    required: !0
                }), (0, r.jsx)(a.ksK, {
                    label: _.intl.string(_.t.iQG2KC),
                    error: null != j ? j : void 0,
                    type: "password",
                    value: C,
                    onChange: T,
                    autoComplete: "new-password",
                    required: !0
                })]
            })
        })
    })
}