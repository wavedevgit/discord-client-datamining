/** Chunk was on 63974 **/
/** chunk id: 347805, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => f
}), n(747238);
var l = n(627968),
    i = n(64700),
    r = n(311907),
    s = n(397927),
    o = n(629403),
    a = n(612630),
    d = n(351906),
    c = n(652215),
    u = n(985018),
    p = n(75945);

function f(e) {
    let {
        autoFocus: t = !1,
        className: n,
        userId: f,
        onUpdate: m
    } = e, A = (0, r.bG)([d.A], () => d.A.hidePersonalInformation), {
        loading: x,
        note: g
    } = (0, a.A)(f), j = i.useRef(null);
    return (i.useEffect(() => {
        if (!t || A) return;
        let e = j.current;
        (null == e ? void 0 : e.selectionStart) != null && (e.focus(), e.setSelection(e.value.length, e.value.length))
    }, [t, A]), A) ? null : (0, l.jsx)("div", {
        className: n,
        children: (0, l.jsx)(s.d4u, {
            ref: j,
            className: p.P,
            disabled: x,
            placeholder: x ? u.intl.string(u.t["WLKx/9"]) : u.intl.string(u.t.VBhOe2),
            "aria-label": u.intl.string(u.t.PbMNh2),
            onBlur: e => {
                let t = e.currentTarget.value;
                (null != g ? g : "") !== t && (null == m || m(), o.A.updateNote(f, t))
            },
            onKeyPress: e => {
                if (13 === e.which)
                    if (e.shiftKey) {
                        var t;
                        (null != (t = e.currentTarget.value.match(/\n/g)) ? t : []).length >= 5 && e.preventDefault()
                    } else e.preventDefault(), e.currentTarget.blur();
                else e.which === c.Ks6.SPACE && e.stopPropagation()
            },
            defaultValue: null != g ? g : void 0,
            maxLength: c.T7x
        })
    })
}