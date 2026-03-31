/** chunk id: 316628 params = (module,exports,require) **/
l.d(t, {
    e: () => u
});
var n = l(627968),
    i = l(64700),
    r = l(397927),
    a = l(690521),
    s = l(985018);
let u = e => {
    let {
        name: t,
        onNameChange: l,
        label: u
    } = e, o = i.useRef(null), c = i.useRef(null), [d, m] = i.useState(!1), h = i.useCallback(e => {
        c.current = o.current?.selectionStart, l(e = (e = e.replace(/\s/g, "_")).length < 2 ? e : a.Ay.sanitizeEmojiName(e))
    }, [l]);
    i.useEffect(() => {
        null != c.current && (o.current?.setSelectionRange(c.current, c.current), c.current = null)
    });
    let g = i.useCallback(() => {
            m(!1)
        }, []),
        x = i.useCallback(() => {
            m(!0)
        }, []);
    return (0, n.jsx)(r.ksK, {
        inputRef: o,
        error: d ? "" : void 0,
        minLength: 2,
        value: t,
        onChange: h,
        placeholder: s.intl.string(s.t.U2JFHZ),
        name: "emoji_name",
        onBlur: g,
        onFocus: x,
        label: u,
        clearable: !0,
        required: !0
    })
}