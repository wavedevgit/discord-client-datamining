/** chunk id: 347805 params = (module,exports,require) **/
i.d(l, {
    A: () => x
});
var t = i(627968),
    n = i(64700),
    s = i(311907),
    a = i(397927),
    r = i(629403),
    o = i(612630),
    d = i(351906),
    c = i(652215),
    u = i(985018),
    m = i(828950);

function x(e) {
    let {
        autoFocus: l = !1,
        className: i,
        userId: x,
        onUpdate: A
    } = e, p = (0, s.bG)([d.A], () => d.A.hidePersonalInformation), {
        loading: g,
        note: f
    } = (0, o.A)(x), h = n.useRef(null);
    return (n.useEffect(() => {
        if (!l || p) return;
        let e = h.current;
        e?.selectionStart != null && (e.focus(), e.setSelection(e.value.length, e.value.length))
    }, [l, p]), p) ? null : (0, t.jsx)("div", {
        className: i,
        children: (0, t.jsx)(a.d4u, {
            ref: h,
            className: m.P,
            disabled: g,
            placeholder: g ? u.intl.string(u.t["WLKx/9"]) : u.intl.string(u.t.VBhOe2),
            "aria-label": u.intl.string(u.t.PbMNh2),
            onBlur: e => {
                let l = e.currentTarget.value;
                (f ?? "") !== l && (A?.(), r.A.updateNote(x, l))
            },
            onKeyPress: e => {
                13 === e.which ? e.shiftKey ? (e.currentTarget.value.match(/\n/g) ?? []).length >= 5 && e.preventDefault() : (e.preventDefault(), e.currentTarget.blur()) : e.which === c.Ks6.SPACE && e.stopPropagation()
            },
            defaultValue: f ?? void 0,
            maxLength: c.T7x
        })
    })
}