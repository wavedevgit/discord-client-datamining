/** chunk id: 347805 params = (module,exports,require) **/
n.d(l, {
    A: () => m
});
var i = n(627968),
    t = n(64700),
    s = n(311907),
    a = n(397927),
    r = n(629403),
    o = n(612630),
    d = n(351906),
    c = n(652215),
    u = n(985018),
    A = n(893251);

function m(e) {
    let {
        autoFocus: l = !1,
        className: n,
        userId: m,
        onUpdate: p
    } = e, x = (0, s.bG)([d.A], () => d.A.hidePersonalInformation), {
        loading: g,
        note: h
    } = (0, o.A)(m), f = t.useRef(null);
    return (t.useEffect(() => {
        if (!l || x) return;
        let e = f.current;
        e?.selectionStart != null && (e.focus(), e.setSelection(e.value.length, e.value.length))
    }, [l, x]), x) ? null : (0, i.jsx)("div", {
        className: n,
        children: (0, i.jsx)(a.d4u, {
            ref: f,
            className: A.P,
            disabled: g,
            placeholder: g ? u.intl.string(u.t["WLKx/9"]) : u.intl.string(u.t.VBhOe2),
            "aria-label": u.intl.string(u.t.PbMNh2),
            onBlur: e => {
                let l = e.currentTarget.value;
                (h ?? "") !== l && (p?.(), r.A.updateNote(m, l))
            },
            onKeyPress: e => {
                13 === e.which ? e.shiftKey ? (e.currentTarget.value.match(/\n/g) ?? []).length >= 5 && e.preventDefault() : (e.preventDefault(), e.currentTarget.blur()) : e.which === c.Ks6.SPACE && e.stopPropagation()
            },
            defaultValue: h ?? void 0,
            maxLength: c.T7x
        })
    })
}