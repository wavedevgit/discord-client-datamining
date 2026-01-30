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
    c = n(836602),
    d = n(592074),
    u = n(652215),
    _ = n(985018);

function p(e) {
    var t, n, p, m;
    let {
        transitionState: g,
        onSuccess: A,
        onClose: f,
        requirementsUpdated: b
    } = e, [h, E] = i.useState(""), [O, C] = i.useState(""), [x, S] = i.useState(""), [T, I] = i.useState(null), [y, N] = i.useState(null), {
        formState: j,
        errors: v
    } = (0, s.cf)([c.A], () => ({
        formState: c.A.getFormState(),
        errors: c.A.getErrors()
    })), P = i.useRef(null);
    async function R(e) {
        e.preventDefault(), (0, o.x8)();
        let t = !1;
        if ("" === O ? (I(_.intl.string(_.t["/7/oPU"])), t = !0) : I(null), O !== x ? (N(_.intl.string(_.t["IEKYZ/"])), t = !0) : N(null), t) return;
        let n = await (0, o.yu)({
            password: h,
            newPassword: O
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
            subtitle: b ? _.intl.string(_.t["37iHbZ"]) : _.intl.string(_.t.iOurYj),
            actions: [{
                variant: "secondary",
                text: _.intl.string(_.t["ETE/oC"]),
                onClick: f
            }, {
                variant: "primary",
                text: _.intl.string(_.t.i4jeWR),
                loading: j === u.XlH.SUBMITTING,
                type: "submit"
            }],
            children: (0, r.jsxs)(a.BJc, {
                gap: 20,
                children: [(0, r.jsx)(a.ksK, {
                    label: _.intl.string(_.t.WBqMRQ),
                    error: null == v || null == (p = v.password) ? void 0 : p[0],
                    type: "password",
                    value: h,
                    onChange: E,
                    inputRef: P,
                    autoComplete: "current-password",
                    required: !0
                }), (0, r.jsx)(a.ksK, {
                    label: _.intl.string(_.t["8dM4FO"]),
                    error: null != (t = null != (n = null == v || null == (m = v.new_password) ? void 0 : m[0]) ? n : T) ? t : void 0,
                    type: "password",
                    value: O,
                    onChange: C,
                    autoComplete: "new-password",
                    required: !0
                }), (0, r.jsx)(a.ksK, {
                    label: _.intl.string(_.t.iQG2KC),
                    error: null != y ? y : void 0,
                    type: "password",
                    value: x,
                    onChange: S,
                    autoComplete: "new-password",
                    required: !0
                })]
            })
        })
    })
}