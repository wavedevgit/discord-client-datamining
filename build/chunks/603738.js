/** chunk id: 603738, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => N
}), n(896048), n(228524);
var a = n(627968),
    i = n(64700),
    l = n(284009),
    s = n.n(l),
    r = n(311907),
    o = n(827734),
    c = n(421380),
    d = n(397927),
    _ = n(955437),
    u = n(201505),
    p = n(287809),
    m = n(975571),
    f = n(652215),
    b = n(204925),
    E = n(985018),
    h = n(216344);

function N(e) {
    let {
        onComplete: t,
        onClose: n
    } = e, [l, N] = i.useState(null), [A, x] = i.useState(null), [T, y] = i.useState(!1), j = (0, r.bG)([p.default], () => p.default.getCurrentUser()), g = i.useRef(null);
    async function O(e) {
        e.preventDefault(), s()(null != l, "Cannot submit null birthday."), y(!0);
        try {
            await _.n7(l, b.w_.NEW_USER_FLOW), t()
        } catch (e) {
            if (null != e.body && null != e.body.date_of_birth) _.Xv(b.w_.NEW_USER_FLOW), _.$2(b.w_.NEW_USER_FLOW), n();
            else {
                var a;
                (null == e || null == (a = e.body) ? void 0 : a.username) != null ? x(E.intl.string(E.t["TGg/2k"])) : x(null == e ? void 0 : e.body.message)
            }
        }
        y(!1)
    }
    i.useEffect(() => {
        null != j && null != j.nsfwAllowed && t()
    }, [j, t]);
    let v = i.useCallback(e => {
            N(e)
        }, [N]),
        C = i.useCallback(() => {
            var e;
            null == (e = g.current) || e.focus()
        }, [g]);
    return null == j ? null : (0, a.jsxs)("form", {
        className: h.Qs,
        onSubmit: O,
        children: [(0, a.jsx)(d.pVd, {
            size: "custom",
            width: 56,
            height: 40,
            className: h.wm,
            color: o.A.unsafe_rawColors.BRAND_500.css
        }), (0, a.jsx)(d.Heading, {
            className: h.DD,
            variant: "heading-xl/semibold",
            children: E.intl.string(E.t.n7i7sv)
        }), (0, a.jsx)(d.Text, {
            color: "text-default",
            className: h.h_,
            variant: "text-md/normal",
            children: E.intl.format(E.t.fa8kW1, {
                helpURL: m.A.getArticleURL(f.MVz.AGE_GATE)
            })
        }), (0, a.jsx)(d.wXn, {
            theme: f.NJ8.LIGHT,
            children: (0, a.jsx)(u.A, {
                required: !0,
                autoFocus: !0,
                wrapperClassName: h.kz,
                label: E.intl.string(E.t.rhBeKe),
                name: "birthday",
                onChange: v,
                onPopulated: C,
                error: A,
                value: l
            })
        }), (0, a.jsx)("div", {
            className: h.qr,
            children: (0, a.jsx)("div", {
                className: h._o,
                children: (0, a.jsx)(c.$n, {
                    "data-migration-pending": !0,
                    buttonRef: g,
                    type: "submit",
                    size: c.$n.Sizes.LARGE,
                    submitting: T,
                    disabled: null == l,
                    fullWidth: !0,
                    children: E.intl.string(E.t.PDTjLN)
                })
            })
        })]
    })
}