/** chunk id: 603738 params = (module,exports,require) **/
a.d(t, {
    A: () => h
});
var n = a(627968),
    i = a(64700),
    s = a(284009),
    l = a.n(s),
    r = a(311907),
    o = a(827734),
    c = a(421380),
    _ = a(397927),
    d = a(955437),
    u = a(201505),
    m = a(287809),
    p = a(975571),
    f = a(652215),
    E = a(204925),
    A = a(985018),
    N = a(530335);

function h(e) {
    let {
        onComplete: t,
        onClose: a
    } = e, [s, h] = i.useState(null), [b, x] = i.useState(null), [T, g] = i.useState(!1), j = (0, r.bG)([m.default], () => m.default.getCurrentUser()), C = i.useRef(null);
    async function D(e) {
        e.preventDefault(), l()(null != s, "Cannot submit null birthday."), g(!0);
        try {
            await d.n7(s, E.w_.NEW_USER_FLOW), t()
        } catch (e) {
            null != e.body && null != e.body.date_of_birth ? (d.Xv(E.w_.NEW_USER_FLOW), d.$2(E.w_.NEW_USER_FLOW), a()) : e?.body?.username != null ? x(A.intl.string(A.t["TGg/2k"])) : x(e?.body.message)
        }
        g(!1)
    }
    i.useEffect(() => {
        null != j && null != j.nsfwAllowed && t()
    }, [j, t]);
    let I = i.useCallback(e => {
            h(e)
        }, [h]),
        y = i.useCallback(() => {
            C.current?.focus()
        }, [C]);
    return null == j ? null : (0, n.jsxs)("form", {
        className: N.Qs,
        onSubmit: D,
        children: [(0, n.jsx)(_.pVd, {
            size: "custom",
            width: 56,
            height: 40,
            className: N.wm,
            color: o.A.unsafe_rawColors.BRAND_500.css
        }), (0, n.jsx)(_.Heading, {
            className: N.DD,
            variant: "heading-xl/semibold",
            children: A.intl.string(A.t.n7i7sv)
        }), (0, n.jsx)(_.Text, {
            color: "text-default",
            className: N.h_,
            variant: "text-md/normal",
            children: A.intl.format(A.t.fa8kW1, {
                helpURL: p.A.getArticleURL(f.MVz.AGE_GATE)
            })
        }), (0, n.jsx)(_.wXn, {
            theme: f.NJ8.LIGHT,
            children: (0, n.jsx)(u.A, {
                required: !0,
                autoFocus: !0,
                wrapperClassName: N.kz,
                label: A.intl.string(A.t.rhBeKe),
                name: "birthday",
                onChange: I,
                onPopulated: y,
                error: b,
                value: s
            })
        }), (0, n.jsx)("div", {
            className: N.qr,
            children: (0, n.jsx)("div", {
                className: N._o,
                children: (0, n.jsx)(c.$n, {
                    "data-migration-pending": !0,
                    buttonRef: C,
                    type: "submit",
                    size: c.$n.Sizes.LARGE,
                    submitting: T,
                    disabled: null == s,
                    fullWidth: !0,
                    children: A.intl.string(A.t.PDTjLN)
                })
            })
        })]
    })
}