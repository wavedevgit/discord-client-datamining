/** chunk id: 347805 params = (module,exports,require) **/
l.d(t, {
    A: () => p
});
var n = l(627968),
    i = l(64700),
    s = l(311907),
    a = l(397927),
    r = l(629403),
    o = l(612630),
    d = l(351906),
    c = l(652215),
    u = l(985018),
    m = l(828950);

function p(e) {
    let {
        autoFocus: t = !1,
        className: l,
        userId: p,
        onUpdate: x
    } = e, A = (0, s.bG)([d.A], () => d.A.hidePersonalInformation), {
        loading: g,
        note: f
    } = (0, o.A)(p), h = i.useRef(null);
    return (i.useEffect(() => {
        if (!t || A) return;
        let e = h.current;
        e?.selectionStart != null && (e.focus(), e.setSelection(e.value.length, e.value.length))
    }, [t, A]), A) ? null : (0, n.jsx)("div", {
        className: l,
        children: (0, n.jsx)(a.d4u, {
            ref: h,
            className: m.P,
            disabled: g,
            placeholder: g ? u.intl.string(u.t["WLKx/9"]) : u.intl.string(u.t.VBhOe2),
            "aria-label": u.intl.string(u.t.PbMNh2),
            onBlur: e => {
                let t = e.currentTarget.value;
                (f ?? "") !== t && (x?.(), r.A.updateNote(p, t))
            },
            onKeyPress: e => {
                13 === e.which ? e.shiftKey ? (e.currentTarget.value.match(/\n/g) ?? []).length >= 5 && e.preventDefault() : (e.preventDefault(), e.currentTarget.blur()) : e.which === c.Ks6.SPACE && e.stopPropagation()
            },
            defaultValue: f ?? void 0,
            maxLength: c.T7x
        })
    })
}